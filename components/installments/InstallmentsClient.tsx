'use client';

import { useEffect, useMemo, useState } from 'react';
import { clients } from '@/lib/api/client';
import type { IInstallmentSummaryResponse } from '@/lib/generated/wellfinanced/shared';
import { formatCurrency } from '@/lib/utils/currency';
import GroupedList from '@/components/ui/GroupedList';

const directionOptions = ['inflow', 'outflow'] as const;
const statusFilters = ['pending', 'completed', 'missed'] as const;

type DirectionOption = (typeof directionOptions)[number];

type InstallmentItem = {
  id: string;
  scheduleFor: string;
  amount: number;
  status: string;
  direction: DirectionOption;
  financialFlowId: string;
};

export default function InstallmentsClient() {
  const [items, setItems] = useState<InstallmentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeDirection, setActiveDirection] =
    useState<DirectionOption>('inflow');
  const [statusFilter, setStatusFilter] =
    useState<(typeof statusFilters)[number][]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadInstallments() {
      try {
        const installmentsResponse =
          await clients.installments.list_route_installments__get({
            query: {
              directionIn: [activeDirection],
              statusIn: statusFilter.length ? statusFilter : undefined,
              orderBy: 'scheduled_for',
              sortOrder: 'asc',
              pageSize: 200
            }
          });

        if (!isMounted) return;

        setItems(
          (installmentsResponse.data?.items ?? []).map((item) => ({
            id: item.id,
            scheduleFor: item.scheduled_for,
            amount: toNumber(item.amount),
            status: item.status,
            direction: item.direction,
            financialFlowId: item.financial_flow_id
          }))
        );
        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load installments'
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadInstallments();
    return () => {
      isMounted = false;
    };
  }, [activeDirection, statusFilter]);

  const filtered = useMemo(() => {
    return [...items].sort((a, b) => a.scheduleFor.localeCompare(b.scheduleFor));
  }, [items]);

  return (
    <section className="dashboard-grid">
      <div className="segmented" role="tablist" aria-label="Direction">
        {directionOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={activeDirection === option ? 'active' : ''}
            onClick={() => setActiveDirection(option)}
            role="tab"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="filter-panel">
        <details className="filter-block" open>
          <summary>
            Status filter
            <span className="pill">{statusFilter.length || 'All'}</span>
          </summary>
          <div className="filter-grid">
            {statusFilters.map((status) => (
              <label key={status} className="filter-chip">
                <input
                  type="checkbox"
                  checked={statusFilter.includes(status)}
                  onChange={() =>
                    setStatusFilter((prev) => toggleFilter(prev, status))
                  }
                />
                {status}
              </label>
            ))}
          </div>
        </details>
      </div>

      {errorMessage ? <div className="empty-state">{errorMessage}</div> : null}

      {loading ? (
        <div className="card">
          <div className="skeleton" style={{ height: 24 }} />
          <div className="skeleton" style={{ height: 24, marginTop: 12 }} />
        </div>
      ) : null}

      <GroupedList
        items={filtered}
        groupBy={(item) => formatScheduleGroup(item.scheduleFor)}
        groupSort={(a, b) => a.localeCompare(b)}
        renderGroupHeader={(groupKey, groupItems) => (
          <div className="group-header">
            <h2 className="group-title">{groupKey}</h2>
            <span className="pill">{groupItems.length} total</span>
          </div>
        )}
        renderItem={(item) => (
          <div key={item.id} className="card installment-card">
            <div className="installment-header">
              <div className="installment-title">
                {formatCurrency(item.amount)}
              </div>
              <span className="pill">{item.status}</span>
            </div>
            <div className="installment-meta">
              <span>Direction: {item.direction}</span>
              <span>Scheduled: {formatDate(item.scheduleFor)}</span>
              <span>Flow: {item.financialFlowId.slice(0, 6)}</span>
            </div>
          </div>
        )}
        emptyState={<div className="empty-state">No installments yet.</div>}
      />
    </section>
  );
}

function formatScheduleGroup(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unscheduled';
  return `Schedule · ${date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })}`;
}

function toggleFilter(values: string[], value: string) {
  if (values.includes(value)) {
    return values.filter((item) => item !== value);
  }
  return [...values, value];
}

function toNumber(value: string | number) {
  if (typeof value === 'number') return value;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
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
