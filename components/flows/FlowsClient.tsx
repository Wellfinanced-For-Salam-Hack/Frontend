'use client';

import { useEffect, useMemo, useState } from 'react';
import { clients } from '@/lib/api/client';
import type {
  ICounterpartySummaryResponse,
  IFinancialFlowSummaryResponse
} from '@/lib/generated/wellfinanced/shared';
import GroupedList from '@/components/ui/GroupedList';

const statusOrder = ['active', 'inactive', 'closed'] as const;

type FlowItem = {
  id: string;
  status: string;
  category: string;
  counterpartyLabel: string;
  createdAt: string;
  recordCount: number;
  installmentCount: number;
};

export default function FlowsClient() {
  const [flows, setFlows] = useState<FlowItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadFlows() {
      try {
        const [flowsResponse, counterpartiesResponse] = await Promise.all([
          clients.flows.list_route_flows__get({
            query: { orderBy: 'created_at', sortOrder: 'desc', pageSize: 200 }
          }),
          clients.counterparties.list_route_counterparties__get({
            query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
          })
        ]);

        if (!isMounted) return;

        const counterparties = counterpartiesResponse.data?.items ?? [];
        const counterpartyMap = new Map(
          counterparties.map((item) => [item.id, item.label])
        );

        const mapped = (flowsResponse.data?.items ?? []).map((item) =>
          mapFlow(item, counterpartyMap)
        );

        setFlows(mapped);
        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error ? error.message : 'Unable to load flows'
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadFlows();
    return () => {
      isMounted = false;
    };
  }, []);

  const sortedFlows = useMemo(() => {
    return [...flows].sort((a, b) => a.category.localeCompare(b.category));
  }, [flows]);

  return (
    <section className="dashboard-grid">
      {errorMessage ? <div className="empty-state">{errorMessage}</div> : null}

      {loading ? (
        <div className="card">
          <div className="skeleton" style={{ height: 24 }} />
          <div className="skeleton" style={{ height: 24, marginTop: 12 }} />
        </div>
      ) : null}

      <GroupedList
        items={sortedFlows}
        groupBy={(item) => item.status}
        groupSort={(a, b) =>
          statusOrder.indexOf(a as (typeof statusOrder)[number]) -
          statusOrder.indexOf(b as (typeof statusOrder)[number])
        }
        renderGroupHeader={(groupKey, groupItems) => (
          <div className="group-header">
            <h2 className="group-title">{groupKey}</h2>
            <span className="pill">{groupItems.length} total</span>
          </div>
        )}
        renderItem={(item) => (
          <div key={item.id} className="card flow-card">
            <div className="flow-header">
              <div className="flow-title">{formatCategory(item.category)}</div>
              <span className="pill">{item.status}</span>
            </div>
            <div className="flow-meta">
              <span>Counterparty: {item.counterpartyLabel}</span>
              <span>Records: {item.recordCount}</span>
              <span>Installments: {item.installmentCount}</span>
              <span>Created: {formatDate(item.createdAt)}</span>
            </div>
          </div>
        )}
        emptyState={<div className="empty-state">No flows yet.</div>}
      />
    </section>
  );
}

function mapFlow(
  item: IFinancialFlowSummaryResponse,
  counterpartyMap: Map<string, string>
): FlowItem {
  return {
    id: item.id,
    status: item.status,
    category: item.category,
    counterpartyLabel: counterpartyMap.get(item.counterparty_id) ?? 'Unknown',
    createdAt: item.created_at,
    recordCount: item.record_ids.length,
    installmentCount: item.installment_ids.length
  };
}

function formatCategory(value: string) {
  return value.replace(/_/g, ' ');
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
