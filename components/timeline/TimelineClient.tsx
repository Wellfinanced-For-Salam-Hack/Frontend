'use client';

import { useState } from 'react';
import Link from 'next/link';
import InstallmentsClient from '@/components/installments/InstallmentsClient';
import Modal from '@/components/ui/Modal';
import { CounterpartyForm, FinancialFlowForm, InstallmentForm } from '@/components/forms';

export default function TimelineClient() {
  const [modalType, setModalType] = useState<
    'installment' | 'flow' | 'counterparty' | null
  >(null);

  return (
    <section className="dashboard-grid">
      <div className="card">
        <div className="chart-header">
          <h2 className="chart-title">Timeline actions</h2>
        </div>
        <div className="chip-row">
          <button
            className="chip"
            type="button"
            onClick={() => setModalType('installment')}
          >
            Plan new installment
          </button>
          <button
            className="chip"
            type="button"
            onClick={() => setModalType('flow')}
          >
            Create new financial flow
          </button>
          <button
            className="chip"
            type="button"
            onClick={() => setModalType('counterparty')}
          >
            Add new counterparty
          </button>
          <Link className="chip" href="/flows">
            View financial flows
          </Link>
          <Link className="chip" href="/counterparties">
            View counterparties
          </Link>
        </div>
      </div>

      <InstallmentsClient />

      <Modal
        open={modalType === 'installment'}
        title="Plan a new installment"
        onClose={() => setModalType(null)}
      >
        <InstallmentForm onSuccess={() => setModalType(null)} />
      </Modal>

      <Modal
        open={modalType === 'flow'}
        title="Create new financial flow"
        onClose={() => setModalType(null)}
      >
        <FinancialFlowForm onSuccess={() => setModalType(null)} />
      </Modal>

      <Modal
        open={modalType === 'counterparty'}
        title="Add new counterparty"
        onClose={() => setModalType(null)}
      >
        <CounterpartyForm onSuccess={() => setModalType(null)} />
      </Modal>
    </section>
  );
}
