import TimelineClient from '@/components/timeline/TimelineClient';
import PageHeader from '@/components/layout/PageHeader';

export default function TimelinePage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Timeline"
        subtitle="Planned installments and long-range tracking"
      />
      <TimelineClient />
    </div>
  );
}
