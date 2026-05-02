import AdvisorClient from '@/components/advisor/AdvisorClient';
import PageHeader from '@/components/layout/PageHeader';

export default function AdvisorPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Advisor"
        subtitle="Chat with your AI financial analyst"
      />
      <AdvisorClient />
    </div>
  );
}
