'use client';

import { useState } from 'react';
import { clients } from '@/lib/api/client';
import { useDraftForm } from '@/lib/hooks/useDraftForm';

const assetCategories = ['stocks', 'property'] as const;
const assetStatuses = [
  'active',
  'idle_reserved',
  'temporarily_unavailable',
  'impaired',
  'disposed_retired',
  'written_off'
] as const;

interface AssetFormProps {
  onSuccess: () => void;
}

export default function AssetForm({ onSuccess }: AssetFormProps) {
  const { state, setState, clear } = useDraftForm('draft-asset', {
    estimate_value: '',
    category: 'stocks',
    status: 'active'
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      await clients.assets.create_route_assets__post({
        data: {
          estimate_value: state.estimate_value,
          category: state.category,
          status: state.status
        }
      });
      clear();
      onSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to create asset'
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
        <label htmlFor="asset-value">Estimated value (EGP)</label>
        <input
          id="asset-value"
          className="input"
          type="number"
          value={state.estimate_value}
          onChange={(event) =>
            setState({ ...state, estimate_value: event.target.value })
          }
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="asset-category">Category</label>
        <select
          id="asset-category"
          className="select-input"
          value={state.category}
          onChange={(event) =>
            setState({ ...state, category: event.target.value })
          }
        >
          {assetCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="asset-status">Status</label>
        <select
          id="asset-status"
          className="select-input"
          value={state.status}
          onChange={(event) =>
            setState({ ...state, status: event.target.value })
          }
        >
          {assetStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Create asset'}
        </button>
      </div>
    </form>
  );
}
