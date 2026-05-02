'use client';

import { useEffect, useMemo, useState } from 'react';
import { clients } from '@/lib/api/client';
import type {
  ICounterpartySummaryResponse,
  IInflowSummaryResponse,
  IOutflowSummaryResponse
} from '@/lib/generated/wellfinanced/shared';
import GroupedList from '@/components/ui/GroupedList';

type GroupMode = 'category' | 'activity';

type CounterpartyItem = {
  id: string;
  label: string;
  category: string;
  createdAt: string;
  lastActivity: string | null;
};

const groupOptions: { value: GroupMode; label: string }[] = [
  { value: 'category', label: 'Category' },
  { value: 'activity', label: 'Last Activity' }
];

const activityBuckets = [
  'Active this week',
  'Active this month',
  'Active last 90 days',
  'Older',
  'No activity'
];

export default function CounterpartiesClient() {
  const [items, setItems] = useState<CounterpartyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [groupMode, setGroupMode] = useState<GroupMode>('category');

  useEffect(() => {
    let isMounted = true;

    async function loadCounterparties() {
      try {
        const [counterpartyResponse, inflowsResponse, outflowsResponse] =
          await Promise.all([
            clients.counterparties.list_route_counterparties__get({
              query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
            }),
            clients.inflows.list_route_inflows__get({
              query: { orderBy: 'created_at', sortOrder: 'desc', pageSize: 500 }
            }),
            clients.outflows.list_route_outflows__get({
              query: { orderBy: 'created_at', sortOrder: 'desc', pageSize: 500 }
            })
          ]);

        if (!isMounted) return;

        const lastActivityMap = buildLastActivityMap(
          inflowsResponse.data?.items ?? [],
          outflowsResponse.data?.items ?? []
        );

        const mapped = (counterpartyResponse.data?.items ?? []).map((item) => {
          const lastActivity = lastActivityMap.get(item.id) ?? null;
          return {
            id: item.id,
            label: item.label,
            category: item.category,
            createdAt: item.created_at,
            lastActivity
          };
        });

        setItems(mapped);
        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load counterparties'
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCounterparties();
    return () => {
      isMounted = false;
    };
  }, []);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a.label.localeCompare(b.label));
  }, [items]);

  return (
    <section className="dashboard-grid">
      <div className="toolbar">
        <div>
          <p className="kpi-label">Group by</p>
          <div className="segmented" role="group" aria-label="Group by">
            {groupOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={groupMode === option.value ? 'active' : ''}
                onClick={() => setGroupMode(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {errorMessage ? <div className="empty-state">{errorMessage}</div> : null}

      {loading ? (
        <div className="card">
          <div className="skeleton" style={{ height: 24 }} />
          <div className="skeleton" style={{ height: 24, marginTop: 12 }} />
        </div>
      ) : null}

      <GroupedList
        items={sortedItems}
        groupBy={(item) =>
          groupMode === 'category'
            ? item.category
            : getActivityBucket(item.lastActivity)
        }
        groupSort={(a, b) =>
          groupMode === 'category'
            ? a.localeCompare(b)
            : activityBuckets.indexOf(a) - activityBuckets.indexOf(b)
        }
        renderGroupHeader={(groupKey, groupItems) => (
          <div className="group-header">
            <h2 className="group-title">{groupKey}</h2>
            <span className="pill">{groupItems.length} total</span>
          </div>
        )}
        renderItem={(item) => (
          <div key={item.id} className="card counterparty-card">
            <div className="counterparty-header">
              <div className="counterparty-name">{item.label}</div>
              <span className="pill">{item.category}</span>
            </div>
            <div className="counterparty-meta">
              <span>Last activity: {formatDate(item.lastActivity)}</span>
              <span>Added: {formatDate(item.createdAt)}</span>
            </div>
          </div>
        )}
        emptyState={<div className="empty-state">No counterparties yet.</div>}
      />
    </section>
  );
}

function buildLastActivityMap(
  inflows: IInflowSummaryResponse[],
  outflows: IOutflowSummaryResponse[]
) {
  const map = new Map<string, string>();

  for (const record of [...inflows, ...outflows]) {
    const current = map.get(record.counterparty_id);
    if (!current || record.created_at > current) {
      map.set(record.counterparty_id, record.created_at);
    }
  }

  return map;
}

function getActivityBucket(value: string | null) {
  if (!value) return 'No activity';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'No activity';

  const now = new Date();
  const diffDays = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

  if (diffDays <= 7) return 'Active this week';
  if (diffDays <= 30) return 'Active this month';
  if (diffDays <= 90) return 'Active last 90 days';
  return 'Older';
}

function formatDate(value: string | null) {
  if (!value) return 'No activity yet';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
