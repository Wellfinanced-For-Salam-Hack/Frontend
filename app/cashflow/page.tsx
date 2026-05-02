import CashflowClient from '@/components/cashflow/CashflowClient';
import PageHeader from '@/components/layout/PageHeader';

export default function CashflowPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Cashflow"
        subtitle="Summary insights with full record history"
      />
      <CashflowClient />
    </div>
  );
}
