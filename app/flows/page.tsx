import FlowsClient from '@/components/flows/FlowsClient';
import PageHeader from '@/components/layout/PageHeader';

export default function FlowsPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Flows"
        subtitle="Grouped by status to keep your pipeline clear"
      />
      <FlowsClient />
    </div>
  );
}
