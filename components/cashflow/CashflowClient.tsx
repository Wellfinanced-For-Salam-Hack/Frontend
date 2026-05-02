'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardClient from '@/components/dashboard/DashboardClient';
import MoneyFeedClient from '@/components/money/MoneyFeedClient';
import Modal from '@/components/ui/Modal';
import { AccountForm, AssetForm, RecordForm } from '@/components/forms';

export default function CashflowClient() {
  const [modalType, setModalType] = useState<
    'record' | 'account' | 'asset' | null
  >(null);

  return (
    <section className="dashboard-grid">
      <div className="card">
        <div className="chart-header">
          <h2 className="chart-title">Quick actions</h2>
        </div>
        <div className="chip-row">
          <button
            className="chip"
            type="button"
            onClick={() => setModalType('record')}
          >
            Create new record
          </button>
          <Link className="chip" href="/accounts">
            View linked accounts
          </Link>
          <button
            className="chip"
            type="button"
            onClick={() => setModalType('account')}
          >
            Add new account
          </button>
          <Link className="chip" href="/assets">
            View assets
          </Link>
          <button
            className="chip"
            type="button"
            onClick={() => setModalType('asset')}
          >
            Add new asset
          </button>
        </div>
      </div>

      <DashboardClient />

      <div className="card">
        <div className="chart-header">
          <h2 className="chart-title">Record history</h2>
          <span className="badge">Details are record-specific</span>
        </div>
        <MoneyFeedClient />
      </div>

      <Modal
        open={modalType === 'record'}
        title="Create new record"
        onClose={() => setModalType(null)}
      >
        <RecordForm onSuccess={() => setModalType(null)} />
      </Modal>

      <Modal
        open={modalType === 'account'}
        title="Add new account"
        onClose={() => setModalType(null)}
      >
        <AccountForm onSuccess={() => setModalType(null)} />
      </Modal>

      <Modal
        open={modalType === 'asset'}
        title="Add new asset"
        onClose={() => setModalType(null)}
      >
        <AssetForm onSuccess={() => setModalType(null)} />
      </Modal>
    </section>
  );
}
