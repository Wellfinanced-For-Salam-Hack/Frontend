export type Currency = 'EGP';

const formatters: Record<Currency, Intl.NumberFormat> = {
  EGP: new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 2
  })
};

export function formatCurrency(amount: number, currency: Currency = 'EGP') {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  return formatters[currency].format(safeAmount);
}
