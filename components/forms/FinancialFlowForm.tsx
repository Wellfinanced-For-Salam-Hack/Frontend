'use client';

import { useEffect, useState } from 'react';
import { clients } from '@/lib/api/client';
import { useDraftForm } from '@/lib/hooks/useDraftForm';
import type { ICounterpartySummaryResponse } from '@/lib/generated/wellfinanced/shared';

const flowCategories = [
  'salary_wages',
  'prize',
  'freelance_contract_payment',
  'business_revenue',
  'investment_dividend',
  'property_rent',
  'government_benefits_aid',
  'scholarship_stipend',
  'ngo_charity_donation',
  'friends_family_gift',
  'inheritance',
  'compensation_insurance',
  'debt',
  'transfer',
  'sell_assets_cash_out_investments',
  'tax_payment_zakat',
  'saving_goal'
] as const;

const flowStatuses = ['active', 'inactive', 'closed'] as const;

interface FinancialFlowFormProps {
  onSuccess: () => void;
}

export default function FinancialFlowForm({ onSuccess }: FinancialFlowFormProps) {
  const { state, setState, clear } = useDraftForm('draft-flow', {
    label: '',
    description: '',
    category: 'salary_wages',
    status: 'active',
    counterparty_id: ''
  });
  const [counterparties, setCounterparties] = useState<
    ICounterpartySummaryResponse[]
  >([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadCounterparties() {
      const response = await clients.counterparties.list_route_counterparties__get({
        query: { orderBy: 'label', sortOrder: 'asc', pageSize: 200 }
      });
      if (!isMounted) return;
      setCounterparties(response.data?.items ?? []);
    }

    loadCounterparties();
    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      await clients.flows.create_route_flows__post({
        data: {
          label: state.label,
          description: state.description || null,
          category: state.category,
          status: state.status,
          counterparty_id: state.counterparty_id
        }
      });
      clear();
      onSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to create flow'
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
        <label htmlFor="flow-label">Label</label>
        <input
          id="flow-label"
          className="input"
          value={state.label}
          onChange={(event) => setState({ ...state, label: event.target.value })}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="flow-counterparty">Counterparty</label>
        <select
          id="flow-counterparty"
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

      <div className="form-field">
        <label htmlFor="flow-category">Category</label>
        <select
          id="flow-category"
          className="select-input"
          value={state.category}
          onChange={(event) =>
            setState({ ...state, category: event.target.value })
          }
        >
          {flowCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="flow-status">Status</label>
        <select
          id="flow-status"
          className="select-input"
          value={state.status}
          onChange={(event) =>
            setState({ ...state, status: event.target.value })
          }
        >
          {flowStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="flow-description">Description</label>
        <textarea
          id="flow-description"
          className="textarea"
          value={state.description}
          onChange={(event) =>
            setState({ ...state, description: event.target.value })
          }
        />
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Create flow'}
        </button>
      </div>
    </form>
  );
}
