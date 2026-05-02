'use client';

import { useState } from 'react';
import { clients } from '@/lib/api/client';
import { useDraftForm } from '@/lib/hooks/useDraftForm';

const accountCategories = [
  'cash',
  'checking',
  'savings',
  'wallet',
  'investment',
  'receivable',
  'escrow'
] as const;

const accountStatuses = [
  'active',
  'pending',
  'inactive',
  'archived',
  'closed',
  'frozen',
  'hidden'
] as const;

interface AccountFormProps {
  onSuccess: () => void;
}

export default function AccountForm({ onSuccess }: AccountFormProps) {
  const { state, setState, clear } = useDraftForm('draft-account', {
    label: '',
    description: '',
    institution: '',
    current_balance: '',
    category: 'checking',
    status: 'active'
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      await clients.accounts.create_route_accounts__post({
        data: {
          label: state.label,
          description: state.description || null,
          institution: state.institution || null,
          current_balance: state.current_balance,
          currency: 'EGP',
          category: state.category,
          status: state.status
        }
      });
      clear();
      onSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to create account'
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
        <label htmlFor="account-label">Label</label>
        <input
          id="account-label"
          className="input"
          value={state.label}
          onChange={(event) => setState({ ...state, label: event.target.value })}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="account-institution">Institution</label>
        <input
          id="account-institution"
          className="input"
          value={state.institution}
          onChange={(event) =>
            setState({ ...state, institution: event.target.value })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="account-balance">Current balance (EGP)</label>
        <input
          id="account-balance"
          className="input"
          type="number"
          value={state.current_balance}
          onChange={(event) =>
            setState({ ...state, current_balance: event.target.value })
          }
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="account-category">Category</label>
        <select
          id="account-category"
          className="select-input"
          value={state.category}
          onChange={(event) =>
            setState({ ...state, category: event.target.value })
          }
        >
          {accountCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="account-status">Status</label>
        <select
          id="account-status"
          className="select-input"
          value={state.status}
          onChange={(event) =>
            setState({ ...state, status: event.target.value })
          }
        >
          {accountStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="account-description">Description</label>
        <textarea
          id="account-description"
          className="textarea"
          value={state.description}
          onChange={(event) =>
            setState({ ...state, description: event.target.value })
          }
        />
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Create account'}
        </button>
      </div>
    </form>
  );
}
