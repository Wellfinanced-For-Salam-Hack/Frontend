export function formatMonthLabel(value: string) {
  if (!value) return '--';
  const normalized = value.length === 7 ? `${value}-01` : value;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: '2-digit'
  });
}
