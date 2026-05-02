'use client';

import { useEffect, useMemo, useState } from 'react';
import { clients } from '@/lib/api/client';
import { useDraftForm } from '@/lib/hooks/useDraftForm';
import type {
  IAccountSummaryResponse,
  IAssetResponseSchema,
  ICounterpartySummaryResponse,
  IFinancialFlowSummaryResponse
} from '@/lib/generated/wellfinanced/shared';

const recordTypes = ['inflow', 'outflow', 'transfer'] as const;
const inflowCategories = ['income', 'support', 'liability'] as const;
const outflowCategories = ['consumable', 'purchase', 'payment'] as const;

interface RecordFormProps {
  onSuccess: () => void;
}

export default function RecordForm({ onSuccess }: RecordFormProps) {
  const { state, setState, clear } = useDraftForm('draft-record', {
    type: 'inflow',
    amount: '',
    notes: '',
    category: 'income',
    counterparty_id: '',
    to_account_id: '',
    from_account_id: '',
    to_account_transfer_id: '',
    financial_flow_id: '',
    asset_id: ''
  });

  const [accounts, setAccounts] = useState<IAccountSummaryResponse[]>([]);
  const [counterparties, setCounterparties] = useState<
    ICounterpartySummaryResponse[]
  >([]);
  const [flows, setFlows] = useState<IFinancialFlowSummaryResponse[]>([]);
  const [assets, setAssets] = useState<IAssetResponseSchema[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadLookups() {
      const [accountsResponse, counterpartiesResponse, flowsResponse, assetsResponse] =
        await Promise.all([
          clients.accounts.list_route_accounts__get({
            query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
          }),
          clients.counterparties.list_route_counterparties__get({
            query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
          }),
          clients.flows.list_route_flows__get({
            query: { orderBy: 'created_at', sortOrder: 'desc', pageSize: 200 }
          }),
          clients.assets.list_route_assets__get({
            query: { orderBy: 'created_at', sortOrder: 'desc', pageSize: 200 }
          })
        ]);

      if (!isMounted) return;
      setAccounts(accountsResponse.data?.items ?? []);
      setCounterparties(counterpartiesResponse.data?.items ?? []);
      setFlows(flowsResponse.data?.items ?? []);
      setAssets(assetsResponse.data?.items ?? []);
    }

    loadLookups();
    return () => {
      isMounted = false;
    };
  }, []);

  const categoryOptions = useMemo(() => {
    if (state.type === 'inflow') return inflowCategories;
    if (state.type === 'outflow') return outflowCategories;
    return [];
  }, [state.type]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      if (state.type === 'inflow') {
        await clients.inflows.create_route_inflows__post({
          data: {
            currency: 'EGP',
            amount: state.amount,
            notes: state.notes || null,
            financial_flow_id: state.financial_flow_id || null,
            category: state.category,
            counterparty_id: state.counterparty_id,
            to_account_id: state.to_account_id
          }
        });
      } else if (state.type === 'outflow') {
        await clients.outflows.create_route_outflows__post({
          data: {
            currency: 'EGP',
            amount: state.amount,
            notes: state.notes || null,
            financial_flow_id: state.financial_flow_id || null,
            category: state.category,
            counterparty_id: state.counterparty_id,
            from_account_id: state.from_account_id,
            asset_id: state.asset_id || null
          }
        });
      } else {
        await clients.transfers.create_route_transfers__post({
          data: {
            currency: 'EGP',
            amount: state.amount,
            notes: state.notes || null,
            financial_flow_id: state.financial_flow_id || null,
            from_account_id: state.from_account_id,
            to_account_id: state.to_account_transfer_id
          }
        });
      }
      clear();
      onSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to create record'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <p className="form-note">Draft saving enabled.</p>
      {errorMessage ? <div className="empty-state">{errorMessage}</div> : null}

      <div className="form-field">
        <label htmlFor="record-type">Record type</label>
        <select
          id="record-type"
          className="select-input"
          value={state.type}
          onChange={(event) =>
            setState({ ...state, type: event.target.value })
          }
        >
          {recordTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="record-amount">Amount (EGP)</label>
        <input
          id="record-amount"
          className="input"
          type="number"
          value={state.amount}
          onChange={(event) => setState({ ...state, amount: event.target.value })}
          required
        />
      </div>

      {state.type !== 'transfer' ? (
        <div className="form-field">
          <label htmlFor="record-category">Category</label>
          <select
            id="record-category"
            className="select-input"
            value={state.category}
            onChange={(event) =>
              setState({ ...state, category: event.target.value })
            }
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {state.type === 'inflow' ? (
        <div className="form-field">
          <label htmlFor="record-to-account">To account</label>
          <select
            id="record-to-account"
            className="select-input"
            value={state.to_account_id}
            onChange={(event) =>
              setState({ ...state, to_account_id: event.target.value })
            }
            required
          >
            <option value="">Select account</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {state.type === 'outflow' ? (
        <div className="form-field">
          <label htmlFor="record-from-account">From account</label>
          <select
            id="record-from-account"
            className="select-input"
            value={state.from_account_id}
            onChange={(event) =>
              setState({ ...state, from_account_id: event.target.value })
            }
            required
          >
            <option value="">Select account</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {state.type === 'transfer' ? (
        <div className="form-field">
          <label htmlFor="record-from-account-transfer">From account</label>
          <select
            id="record-from-account-transfer"
            className="select-input"
            value={state.from_account_id}
            onChange={(event) =>
              setState({ ...state, from_account_id: event.target.value })
            }
            required
          >
            <option value="">Select account</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {state.type === 'transfer' ? (
        <div className="form-field">
          <label htmlFor="record-to-account-transfer">To account</label>
          <select
            id="record-to-account-transfer"
            className="select-input"
            value={state.to_account_transfer_id}
            onChange={(event) =>
              setState({ ...state, to_account_transfer_id: event.target.value })
            }
            required
          >
            <option value="">Select account</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {state.type !== 'transfer' ? (
        <div className="form-field">
          <label htmlFor="record-counterparty">Counterparty</label>
          <select
            id="record-counterparty"
            className="select-input"
            value={state.counterparty_id}
            onChange={(event) =>
              setState({ ...state, counterparty_id: event.target.value })
            }
            required
          >
            <option value="">Select counterparty</option>
            {counterparties.map((counterparty) => (
              <option key={counterparty.id} value={counterparty.id}>
                {counterparty.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {state.type === 'outflow' ? (
        <div className="form-field">
          <label htmlFor="record-asset">Asset (optional)</label>
          <select
            id="record-asset"
            className="select-input"
            value={state.asset_id}
            onChange={(event) =>
              setState({ ...state, asset_id: event.target.value })
            }
          >
            <option value="">None</option>
            {assets.map((asset) => (
              <option key={asset.id} value={asset.id}>
                {asset.category} - {asset.estimate_value}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="form-field">
        <label htmlFor="record-flow">Financial flow (optional)</label>
        <select
          id="record-flow"
          className="select-input"
          value={state.financial_flow_id}
          onChange={(event) =>
            setState({ ...state, financial_flow_id: event.target.value })
          }
        >
          <option value="">None</option>
          {flows.map((flow) => (
            <option key={flow.id} value={flow.id}>
              {flow.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="record-notes">Notes</label>
        <textarea
          id="record-notes"
          className="textarea"
          value={state.notes}
          onChange={(event) =>
            setState({ ...state, notes: event.target.value })
          }
        />
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Create record'}
        </button>
      </div>
    </form>
  );
}
