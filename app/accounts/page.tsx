import AccountsClient from '@/components/accounts/AccountsClient';
import PageHeader from '@/components/layout/PageHeader';

export default function AccountsPage() {
  return (
    <div className="dashboard-grid">
      <PageHeader
        title="Accounts"
        subtitle="Grouped by category with quick balance insights"
      />
      <AccountsClient />
    </div>
  );
}
