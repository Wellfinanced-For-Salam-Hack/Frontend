'use client';

import { useEffect, useMemo, useState } from 'react';
import { clients } from '@/lib/api/client';
import type {
  IAccountSummaryResponse,
  ICounterpartySummaryResponse,
  IInflowSummaryResponse,
  IOutflowSummaryResponse,
  ITransferSummaryResponse
} from '@/lib/generated/wellfinanced/shared';
import { formatCurrency } from '@/lib/utils/currency';
import Modal from '@/components/ui/Modal';
import GroupedList from '@/components/ui/GroupedList';

const typeOptions = ['inflow', 'transfer', 'outflow'] as const;

const inflowCategories = ['income', 'support', 'liability'] as const;
const outflowCategories = ['consumable', 'purchase', 'payment'] as const;
const transferCategories = outflowCategories;

type FeedType = (typeof typeOptions)[number];

type GroupMode = 'day' | 'week' | 'month';

type FeedEntry = {
  id: string;
  type: FeedType;
  amount: number;
  counterpartyLabel: string | null;
  counterpartyId?: string | null;
  financialFlowId?: string | null;
  accountLabel: string;
  accountId: string | null;
  secondaryAccountLabel?: string;
  secondaryAccountId?: string | null;
  createdAt: string;
};

export default function MoneyFeedClient() {
  const [feedItems, setFeedItems] = useState<FeedEntry[]>([]);
  const [accounts, setAccounts] = useState<IAccountSummaryResponse[]>([]);
  const [counterparties, setCounterparties] = useState<
    ICounterpartySummaryResponse[]
  >([]);
  const [lookupsReady, setLookupsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<FeedType>('inflow');
  const [groupMode, setGroupMode] = useState<GroupMode>('day');
  const [accountFilter, setAccountFilter] = useState<string[]>([]);
  const [counterpartyFilter, setCounterpartyFilter] = useState<string[]>([]);
  const [createdAfter, setCreatedAfter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<Record<FeedType, string[]>>({
    inflow: [],
    outflow: [],
    transfer: []
  });
  const [selectedRecord, setSelectedRecord] = useState<FeedEntry | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadLookups() {
      try {
        const [accountsResponse, counterpartyResponse] = await Promise.all([
          clients.accounts.list_route_accounts__get({
            query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
          }),
          clients.counterparties.list_route_counterparties__get({
            query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
          })
        ]);

        if (!isMounted) return;

        const fetchedAccounts = accountsResponse.data?.items ?? [];
        const fetchedCounterparties = counterpartyResponse.data?.items ?? [];

        setAccounts(fetchedAccounts);
        setCounterparties(fetchedCounterparties);
        setLookupsReady(true);
        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load money feed'
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadLookups();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadFeed() {
      try {
        setLoading(true);
        const accountMap = new Map(
          accounts.map((account) => [account.id, account.label])
        );
        const counterpartyMap = new Map(
          counterparties.map((counterparty) => [counterparty.id, counterparty.label])
        );

        const createdAfterValue = createdAfter
          ? new Date(`${createdAfter}T00:00:00Z`).toISOString()
          : undefined;

        if (activeType === 'inflow') {
          const response = await clients.inflows.list_route_inflows__get({
            query: {
              createdAfter: createdAfterValue,
              orderBy: 'created_at',
              sortOrder: 'desc',
              pageSize: 500,
              toAccountIdIn: accountFilter.length ? accountFilter : undefined,
              counterpartyIdIn: counterpartyFilter.length
                ? counterpartyFilter
                : undefined,
              categoryIn: categoryFilter.inflow.length
                ? (categoryFilter.inflow as any)
                : undefined
            }
          });

          if (!isMounted) return;
          setFeedItems(
            (response.data?.items ?? []).map((item) =>
              mapInflow(item, accountMap, counterpartyMap)
            )
          );
        } else if (activeType === 'outflow') {
          const response = await clients.outflows.list_route_outflows__get({
            query: {
              createdAfter: createdAfterValue,
              orderBy: 'created_at',
              sortOrder: 'desc',
              pageSize: 500,
              fromAccountIdIn: accountFilter.length ? accountFilter : undefined,
              counterpartyIdIn: counterpartyFilter.length
                ? counterpartyFilter
                : undefined,
              categoryIn: categoryFilter.outflow.length
                ? (categoryFilter.outflow as any)
                : undefined
            }
          });

          if (!isMounted) return;
          setFeedItems(
            (response.data?.items ?? []).map((item) =>
              mapOutflow(item, accountMap, counterpartyMap)
            )
          );
        } else {
          const response = await clients.transfers.list_route_transfers__get({
            query: {
              createdAfter: createdAfterValue,
              orderBy: 'created_at',
              sortOrder: 'desc',
              pageSize: 500,
              categoryIn: categoryFilter.transfer.length
                ? (categoryFilter.transfer as any)
                : undefined
            }
          });

          if (!isMounted) return;
          setFeedItems(
            (response.data?.items ?? []).map((item) =>
              mapTransfer(item, accountMap)
            )
          );
        }

        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load money feed'
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (lookupsReady) {
      loadFeed();
    }

    return () => {
      isMounted = false;
    };
  }, [
    accounts,
    activeType,
    accountFilter,
    counterpartyFilter,
    createdAfter,
    categoryFilter,
    counterparties,
    lookupsReady
  ]);

  const filteredItems = useMemo(() => {
    const filterAccount = new Set(accountFilter);
    const filterCounterparty = new Set(counterpartyFilter);

    return feedItems
      .filter((item) =>
        filterAccount.size
          ? (item.accountId && filterAccount.has(item.accountId)) ||
            (item.secondaryAccountId && filterAccount.has(item.secondaryAccountId))
          : true
      )
      .filter((item) =>
        item.type === 'transfer'
          ? true
          : filterCounterparty.size
            ? item.counterpartyId && filterCounterparty.has(item.counterpartyId)
            : true
      )
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [accountFilter, counterpartyFilter, feedItems]);

  const accountOptions = accounts
    .map((account) => ({ id: account.id, label: account.label }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const counterpartyOptions = counterparties
    .map((counterparty) => ({ id: counterparty.id, label: counterparty.label }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <section className="dashboard-grid">
      <div className="segmented" role="tablist" aria-label="Transaction type">
        {typeOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={activeType === option ? 'active' : ''}
            onClick={() => setActiveType(option)}
            role="tab"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="toolbar">
        <label>
          <span className="kpi-label">Grouping</span>
          <select
            className="select"
            value={groupMode}
            onChange={(event) => setGroupMode(event.target.value as GroupMode)}
          >
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
          </select>
        </label>
      </div>

      <div className="filter-panel">
        <details className="filter-block" open>
          <summary>
            Date filter
            <span className="pill">{createdAfter || 'Any time'}</span>
          </summary>
          <div className="filter-grid">
            <label className="filter-chip">
              <span>Created after</span>
              <input
                type="date"
                value={createdAfter}
                onChange={(event) => setCreatedAfter(event.target.value)}
              />
            </label>
          </div>
        </details>

        <details className="filter-block">
          <summary>
            Category filter
            <span className="pill">
              {categoryFilter[activeType].length || 'All'}
            </span>
          </summary>
          <div className="filter-grid">
            {getCategoryOptions(activeType).map((category) => (
              <label key={category} className="filter-chip">
                <input
                  type="checkbox"
                  checked={categoryFilter[activeType].includes(category)}
                  onChange={() =>
                    setCategoryFilter((prev) => ({
                      ...prev,
                      [activeType]: toggleFilter(prev[activeType], category)
                    }))
                  }
                />
                {category}
              </label>
            ))}
          </div>
        </details>

        <details className="filter-block">
          <summary>
            Account filter
            <span className="pill">{accountFilter.length || 'All'}</span>
          </summary>
          <div className="filter-grid">
            {accountOptions.map((option) => (
              <label key={option.id} className="filter-chip">
                <input
                  type="checkbox"
                  checked={accountFilter.includes(option.id)}
                  onChange={() =>
                    setAccountFilter((prev) => toggleFilter(prev, option.id))
                  }
                />
                {option.label}
              </label>
            ))}
          </div>
        </details>

        <details className="filter-block">
          <summary>
            Counterparty filter
            <span className="pill">{counterpartyFilter.length || 'All'}</span>
          </summary>
          <div className="filter-grid">
            {counterpartyOptions.map((option) => (
              <label key={option.id} className="filter-chip">
                <input
                  type="checkbox"
                  checked={counterpartyFilter.includes(option.id)}
                  onChange={() =>
                    setCounterpartyFilter((prev) =>
                      toggleFilter(prev, option.id)
                    )
                  }
                />
                {option.label}
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
        items={filteredItems}
        className="dashboard-grid"
        groupBy={(item) => formatGroupLabel(item.createdAt, groupMode)}
        groupSort={(a, b) => b.localeCompare(a)}
        renderGroupHeader={(groupKey, items) => (
          <div className="group-header">
            <h2 className="group-title">{groupKey}</h2>
            <span className="pill">{items.length} items</span>
          </div>
        )}
        renderItem={(item) => (
          <button
            key={item.id}
            type="button"
            className="card feed-card"
            onClick={() => setSelectedRecord(item)}
          >
            <div className="feed-row">
              <div className="status-icon" aria-hidden="true">
                <StatusIcon type={item.type} />
              </div>
              <div className="feed-amount">
                {formatCurrency(item.amount)}
              </div>
            </div>
            <div className="feed-meta">
              {item.counterpartyLabel ? (
                <span>Counterparty: {item.counterpartyLabel}</span>
              ) : (
                <span>Transfer</span>
              )}
              <span>
                Account: {item.accountLabel}
                {item.secondaryAccountLabel
                  ? ` → ${item.secondaryAccountLabel}`
                  : ''}
              </span>
              <span>Date: {formatDate(item.createdAt)}</span>
            </div>
          </button>
        )}
        emptyState={
          <div className="empty-state">
            No activity matches the current filters.
          </div>
        }
      />

      <Modal
        open={Boolean(selectedRecord)}
        title="Record details"
        onClose={() => setSelectedRecord(null)}
      >
        {selectedRecord ? (
          <div className="dashboard-grid">
            <div>
              <p className="kpi-label">Type</p>
              <p className="kpi-value">{selectedRecord.type}</p>
            </div>
            <div>
              <p className="kpi-label">Amount</p>
              <p className="kpi-value">{formatCurrency(selectedRecord.amount)}</p>
            </div>
            <div>
              <p className="kpi-label">Accounts</p>
              <p className="page-subtitle">
                {selectedRecord.accountLabel}
                {selectedRecord.secondaryAccountLabel
                  ? ` → ${selectedRecord.secondaryAccountLabel}`
                  : ''}
              </p>
            </div>
            {selectedRecord.counterpartyLabel ? (
              <div>
                <p className="kpi-label">Counterparty</p>
                <p className="page-subtitle">{selectedRecord.counterpartyLabel}</p>
              </div>
            ) : null}
            <div className="chip-row">
              {selectedRecord.financialFlowId ? (
                <a className="chip" href="/flows">
                  View associated flow
                </a>
              ) : null}
              {selectedRecord.counterpartyId ? (
                <a className="chip" href="/counterparties">
                  View counterparty
                </a>
              ) : null}
              <a className="chip" href="/accounts">
                View account
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

function mapInflow(
  item: IInflowSummaryResponse,
  accounts: Map<string, string>,
  counterparties: Map<string, string>
): FeedEntry {
  return {
    id: item.id,
    type: 'inflow',
    amount: toNumber(item.amount),
    counterpartyLabel: counterparties.get(item.counterparty_id) ?? null,
    counterpartyId: item.counterparty_id,
    financialFlowId: item.financial_flow_id ?? null,
    accountLabel: accounts.get(item.to_account_id) ?? 'Unknown',
    accountId: item.to_account_id,
    createdAt: item.created_at
  };
}

function mapOutflow(
  item: IOutflowSummaryResponse,
  accounts: Map<string, string>,
  counterparties: Map<string, string>
): FeedEntry {
  return {
    id: item.id,
    type: 'outflow',
    amount: toNumber(item.amount),
    counterpartyLabel: counterparties.get(item.counterparty_id) ?? null,
    counterpartyId: item.counterparty_id,
    financialFlowId: item.financial_flow_id ?? null,
    accountLabel: accounts.get(item.from_account_id) ?? 'Unknown',
    accountId: item.from_account_id,
    createdAt: item.created_at
  };
}

function mapTransfer(
  item: ITransferSummaryResponse,
  accounts: Map<string, string>
): FeedEntry {
  return {
    id: item.id,
    type: 'transfer',
    amount: toNumber(item.amount),
    counterpartyLabel: null,
    counterpartyId: null,
    financialFlowId: item.financial_flow_id ?? null,
    accountLabel: accounts.get(item.from_account_id) ?? 'Unknown',
    accountId: item.from_account_id,
    secondaryAccountLabel: accounts.get(item.to_account_id) ?? 'Unknown',
    secondaryAccountId: item.to_account_id,
    createdAt: item.created_at
  };
}

function toggleFilter(values: string[], value: string) {
  if (values.includes(value)) {
    return values.filter((item) => item !== value);
  }
  return [...values, value];
}

function getCategoryOptions(type: FeedType) {
  if (type === 'inflow') return inflowCategories;
  if (type === 'outflow') return outflowCategories;
  return transferCategories;
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
    day: 'numeric'
  });
}

function formatGroupLabel(value: string, mode: GroupMode) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  if (mode === 'month') {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  if (mode === 'week') {
    const weekStart = new Date(date);
    const day = weekStart.getDay();
    weekStart.setDate(weekStart.getDate() - day);
    const end = new Date(weekStart);
    end.setDate(end.getDate() + 6);
    return `${weekStart.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })} - ${end.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })}`;
  }

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

function StatusIcon({ type }: { type: FeedType }) {
  if (type === 'outflow') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 7h12" strokeLinecap="round" />
        <path d="M12 7v12" strokeLinecap="round" />
        <path d="M7 12h10" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'transfer') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 7h10l-2.5-2.5" strokeLinecap="round" />
        <path d="M17 17H7l2.5 2.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 17h12" strokeLinecap="round" />
      <path d="M12 5v12" strokeLinecap="round" />
      <path d="M7 12h10" strokeLinecap="round" />
    </svg>
  );
}
