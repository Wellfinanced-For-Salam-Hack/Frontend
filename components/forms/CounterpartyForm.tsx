'use client';

import { useState } from 'react';
import { clients } from '@/lib/api/client';
import { useDraftForm } from '@/lib/hooks/useDraftForm';

const counterpartyCategories = ['individual', 'business', 'ngo', 'government'] as const;

interface CounterpartyFormProps {
  onSuccess: () => void;
}

export default function CounterpartyForm({ onSuccess }: CounterpartyFormProps) {
  const { state, setState, clear } = useDraftForm('draft-counterparty', {
    label: '',
    description: '',
    category: 'individual'
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      await clients.counterparties.create_route_counterparties__post({
        data: {
          label: state.label,
          description: state.description || null,
          category: state.category
        }
      });
      clear();
      onSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to create counterparty'
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
        <label htmlFor="counterparty-label">Name</label>
        <input
          id="counterparty-label"
          className="input"
          value={state.label}
          onChange={(event) => setState({ ...state, label: event.target.value })}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="counterparty-category">Category</label>
        <select
          id="counterparty-category"
          className="select-input"
          value={state.category}
          onChange={(event) =>
            setState({ ...state, category: event.target.value })
          }
        >
          {counterpartyCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="counterparty-description">Description</label>
        <textarea
          id="counterparty-description"
          className="textarea"
          value={state.description}
          onChange={(event) =>
            setState({ ...state, description: event.target.value })
          }
        />
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Create counterparty'}
        </button>
      </div>
    </form>
  );
}
