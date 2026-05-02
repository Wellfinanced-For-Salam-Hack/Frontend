'use client';

import { useEffect, useMemo, useState } from 'react';
import { clients } from '@/lib/api/client';
import type { IAccountSummaryResponse } from '@/lib/generated/wellfinanced/shared';
import { formatCurrency } from '@/lib/utils/currency';
import Modal from '@/components/ui/Modal';
import { AccountForm } from '@/components/forms';

const sortOptions = [
  { value: 'alpha', label: 'Alphabetical' },
  { value: 'balance', label: 'Balance' },
  { value: 'activity', label: 'Last Activity' }
] as const;

type SortOption = (typeof sortOptions)[number]['value'];

type ActivityView = 'relative' | 'exact';

export default function AccountsClient() {
  const [accounts, setAccounts] = useState<IAccountSummaryResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('alpha');
  const [activityView, setActivityView] = useState<ActivityView>('relative');
  const [showAccountModal, setShowAccountModal] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadAccounts() {
      try {
        const response = await clients.accounts.list_route_accounts__get({
          query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
        });
        if (!isMounted) return;
        setAccounts(response.data?.items ?? []);
        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load accounts'
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadAccounts();
    return () => {
      isMounted = false;
    };
  }, []);

  const grouped = useMemo(() => {
    const sorted = [...accounts].sort((a, b) => {
      if (sortOption === 'alpha') {
        return a.label.localeCompare(b.label);
      }
      if (sortOption === 'balance') {
        return toNumber(b.current_balance) - toNumber(a.current_balance);
      }
      return a.created_at.localeCompare(b.created_at);
    });

    return sorted.reduce((acc, account) => {
      const key = account.category ?? 'other';
      if (!acc[key]) acc[key] = [];
      acc[key].push(account);
      return acc;
    }, {} as Record<string, IAccountSummaryResponse[]>);
  }, [accounts, sortOption]);

  const categories = Object.keys(grouped).sort();
  const isEmpty = !loading && categories.length === 0;

  return (
    <section className="dashboard-grid">
      <div className="toolbar">
        <label>
          <span className="kpi-label">Sort</span>
          <select
            className="select"
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value as SortOption)
            }
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div>
          <p className="kpi-label">Last activity display (TODO)</p>
          <div className="segmented" role="group" aria-label="Last activity">
            <button
              type="button"
              className={activityView === 'relative' ? 'active' : ''}
              onClick={() => setActivityView('relative')}
            >
              Relative
            </button>
            <button
              type="button"
              className={activityView === 'exact' ? 'active' : ''}
              onClick={() => setActivityView('exact')}
            >
              Exact range
            </button>
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

      {isEmpty ? (
        <div className="empty-state">
          No accounts yet. Add your first account to start tracking balances.
          <div style={{ marginTop: 16 }}>
            <button className="button" type="button" onClick={() => setShowAccountModal(true)}>
              Add account
            </button>
          </div>
        </div>
      ) : null}

      {categories.map((category) => (
        <section key={category} className="group-section">
          <div className="group-header">
            <h2 className="group-title">{category}</h2>
            <span className="pill">{grouped[category].length} total</span>
          </div>

          {grouped[category].length === 0 ? (
            <div className="empty-state">
              No accounts yet in this category.
              <div style={{ marginTop: 16 }}>
                <button
                  className="button"
                  type="button"
                  onClick={() => setShowAccountModal(true)}
                >
                  Add account
                </button>
              </div>
            </div>
          ) : null}

          {grouped[category].map((account) => (
            <div key={account.id} className="card account-card">
              <div>
                <p className="kpi-label">{account.institution ?? 'Personal'}</p>
                <h3 className="chart-title">{account.label}</h3>
              </div>
              <div className="account-balance">
                {formatCurrency(toNumber(account.current_balance))}
              </div>
              <div className="account-meta">
                <span>Type: {account.category}</span>
                <span>Status: {account.status}</span>
                <span>
                  Last activity: {activityView === 'relative' ? 'TODO' : 'TODO'}
                </span>
              </div>
            </div>
          ))}
        </section>
      ))}
      
      <Modal
        open={showAccountModal}
        title="Add new account"
        onClose={() => setShowAccountModal(false)}
      >
        <AccountForm onSuccess={() => setShowAccountModal(false)} />
      </Modal>
    </section>
  );
}

function toNumber(value: string | number) {
  if (typeof value === 'number') return value;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
