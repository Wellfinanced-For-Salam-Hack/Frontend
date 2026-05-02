interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actionSlot?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  actionSlot
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
      </div>
      {actionSlot ? <div>{actionSlot}</div> : null}
    </header>
  );
}
