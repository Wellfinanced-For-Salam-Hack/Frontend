import MoneyFeedClient from '@/components/money/MoneyFeedClient';
import PageHeader from '@/components/layout/PageHeader';

export default function MoneyPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Money Feed"
        subtitle="Follow inflows, transfers, and outflows in one timeline"
      />
      <MoneyFeedClient />
    </div>
  );
}
