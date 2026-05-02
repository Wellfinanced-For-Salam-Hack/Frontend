import CounterpartiesClient from '@/components/counterparties/CounterpartiesClient';
import PageHeader from '@/components/layout/PageHeader';

export default function CounterpartiesPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Counterparties"
        subtitle="Track partners by category or recent activity"
      />
      <CounterpartiesClient />
    </div>
  );
}
