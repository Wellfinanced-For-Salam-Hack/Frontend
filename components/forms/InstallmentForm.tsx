'use client';

import { useEffect, useState } from 'react';
import { clients } from '@/lib/api/client';
import { useDraftForm } from '@/lib/hooks/useDraftForm';
import type { IFinancialFlowSummaryResponse } from '@/lib/generated/wellfinanced/shared';

const installmentStatuses = ['pending', 'completed', 'missed'] as const;
const installmentDirections = ['inflow', 'outflow'] as const;

interface InstallmentFormProps {
  onSuccess: () => void;
}

export default function InstallmentForm({ onSuccess }: InstallmentFormProps) {
  const { state, setState, clear } = useDraftForm('draft-installment', {
    amount: '',
    scheduled_for: '',
    status: 'pending',
    direction: 'inflow',
    financial_flow_id: ''
  });
  const [flows, setFlows] = useState<IFinancialFlowSummaryResponse[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadFlows() {
      const response = await clients.flows.list_route_flows__get({
        query: { orderBy: 'created_at', sortOrder: 'desc', pageSize: 200 }
      });
      if (!isMounted) return;
      setFlows(response.data?.items ?? []);
    }

    loadFlows();
    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      await clients.installments.create_route_installments__post({
        data: {
          amount: state.amount,
          currency: 'EGP',
            scheduled_for: toIsoString(state.scheduled_for),
          status: state.status,
          direction: state.direction,
          financial_flow_id: state.financial_flow_id
        }
      });
      clear();
      onSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to create installment'
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
        <label htmlFor="installment-flow">Financial flow</label>
        <select
          id="installment-flow"
          className="select-input"
          value={state.financial_flow_id}
          onChange={(event) =>
            setState({ ...state, financial_flow_id: event.target.value })
          }
          required
        >
          <option value="">Select flow</option>
          {flows.map((flow) => (
            <option key={flow.id} value={flow.id}>
              {flow.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="installment-amount">Amount (EGP)</label>
        <input
          id="installment-amount"
          className="input"
          type="number"
          value={state.amount}
          onChange={(event) => setState({ ...state, amount: event.target.value })}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="installment-date">Scheduled for</label>
        <input
          id="installment-date"
          className="input"
          type="datetime-local"
          value={state.scheduled_for}
          onChange={(event) =>
            setState({ ...state, scheduled_for: event.target.value })
          }
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="installment-direction">Direction</label>
        <select
          id="installment-direction"
          className="select-input"
          value={state.direction}
          onChange={(event) =>
            setState({ ...state, direction: event.target.value })
          }
        >
          {installmentDirections.map((direction) => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="installment-status">Status</label>
        <select
          id="installment-status"
          className="select-input"
          value={state.status}
          onChange={(event) =>
            setState({ ...state, status: event.target.value })
          }
        >
          {installmentStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Create installment'}
        </button>
      </div>
    </form>
  );
}

function toIsoString(value: string) {
  if (!value) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString();
}
