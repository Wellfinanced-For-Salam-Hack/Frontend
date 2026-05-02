'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { AssetForm } from '@/components/forms';

export default function AssetsClient() {
  const [open, setOpen] = useState(false);

  return (
    <section className="dashboard-grid">
      <div className="empty-state">
        No assets yet. Add an asset to track value over time.
        <div style={{ marginTop: 16 }}>
          <button className="button" type="button" onClick={() => setOpen(true)}>
            Add new asset
          </button>
        </div>
      </div>

      <Modal
        open={open}
        title="Add new asset"
        onClose={() => setOpen(false)}
      >
        <AssetForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
