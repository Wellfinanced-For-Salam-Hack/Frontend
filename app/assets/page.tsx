import PageHeader from '@/components/layout/PageHeader';
import AssetsClient from '@/components/assets/AssetsClient';

export default function AssetsPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader title="Assets" subtitle="Track holdings and valuations" />
      <AssetsClient />
    </div>
  );
}
