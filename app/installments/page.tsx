import InstallmentsClient from '@/components/installments/InstallmentsClient';
import PageHeader from '@/components/layout/PageHeader';

export default function InstallmentsPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Installments"
        subtitle="Group by schedule with direction-aware tracking"
      />
      <InstallmentsClient />
    </div>
  );
}
