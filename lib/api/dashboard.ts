import { clients } from '@/lib/api/client';
import { fetchAllPages } from '@/lib/api/pagination';
import type {
  IAccountSummaryResponse,
  ICounterpartySummaryResponse,
  IInflowSummaryResponse,
  IOutflowSummaryResponse
} from '@/lib/generated/wellfinanced/shared';

export interface DashboardSummary {
  totalBalance: number;
  monthInflow: number;
  monthOutflow: number;
}

export interface SeriesPoint {
  period: string;
  value: number;
}

export interface CounterpartySpendPoint {
  label: string;
  value: number;
}

export async function getDashboardSummary() {
  const now = new Date();
  const currentMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const nextMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));

  const [accounts, inflows, outflows] = await Promise.all([
    fetchAllPages<IAccountSummaryResponse, Record<string, unknown>>(
      clients.accounts.list_route_accounts__get,
      { orderBy: 'created_at', sortOrder: 'desc' }
    ),
    fetchAllPages<IInflowSummaryResponse, Record<string, unknown>>(
      clients.inflows.list_route_inflows__get,
      {
        createdAfter: currentMonthStart.toISOString(),
        createdBefore: nextMonthStart.toISOString(),
        orderBy: 'created_at',
        sortOrder: 'desc'
      }
    ),
    fetchAllPages<IOutflowSummaryResponse, Record<string, unknown>>(
      clients.outflows.list_route_outflows__get,
      {
        createdAfter: currentMonthStart.toISOString(),
        createdBefore: nextMonthStart.toISOString(),
        orderBy: 'created_at',
        sortOrder: 'desc'
      }
    )
  ]);

  return {
    totalBalance: sumAmounts(accounts.map((item) => item.current_balance)),
    monthInflow: sumAmounts(
      inflows.filter(isCurrentMonth).map((item) => item.amount)
    ),
    monthOutflow: sumAmounts(
      outflows.filter(isCurrentMonth).map((item) => item.amount)
    )
  };
}

export async function getInflowSeries() {
  const rangeStart = getRangeStart(6);
  const inflows = await fetchAllPages<IInflowSummaryResponse, Record<string, unknown>>(
    clients.inflows.list_route_inflows__get,
    {
      createdAfter: rangeStart.toISOString(),
      orderBy: 'created_at',
      sortOrder: 'asc'
    }
  );
  return buildMonthlySeries(inflows);
}

export async function getOutflowSeries() {
  const rangeStart = getRangeStart(6);
  const outflows = await fetchAllPages<IOutflowSummaryResponse, Record<string, unknown>>(
    clients.outflows.list_route_outflows__get,
    {
      createdAfter: rangeStart.toISOString(),
      orderBy: 'created_at',
      sortOrder: 'asc'
    }
  );
  return buildMonthlySeries(outflows);
}

export async function getCounterpartySpend() {
  const now = new Date();
  const currentMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const nextMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));

  const [outflows, counterparties] = await Promise.all([
    fetchAllPages<IOutflowSummaryResponse, Record<string, unknown>>(
      clients.outflows.list_route_outflows__get,
      {
        createdAfter: currentMonthStart.toISOString(),
        createdBefore: nextMonthStart.toISOString(),
        orderBy: 'created_at',
        sortOrder: 'desc'
      }
    ),
    fetchAllPages<ICounterpartySummaryResponse, Record<string, unknown>>(
      clients.counterparties.list_route_counterparties__get,
      { orderBy: 'label', sortOrder: 'asc' }
    )
  ]);
  const counterpartiesById = new Map(
    counterparties.map((item) => [item.id, item.label])
  );

  const totals = new Map<string, number>();
  for (const outflow of outflows.filter(isCurrentMonth)) {
    const current = totals.get(outflow.counterparty_id) ?? 0;
    totals.set(outflow.counterparty_id, current + toNumber(outflow.amount));
  }

  return [...totals.entries()]
    .map(([id, value]) => ({
      label: counterpartiesById.get(id) ?? 'Unknown',
      value
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}

type ListItem = { created_at: string; amount: string | number };

function buildMonthlySeries(items: ListItem[]): SeriesPoint[] {
  const months = getRecentMonths(6);
  const totals = new Map(months.map((month) => [month, 0]));

  for (const item of items) {
    const period = toMonthKey(item.created_at);
    if (!period || !totals.has(period)) continue;
    totals.set(period, (totals.get(period) ?? 0) + toNumber(item.amount));
  }

  return months.map((period) => ({
    period,
    value: totals.get(period) ?? 0
  }));
}

function sumAmounts(values: Array<string | number>) {
  return values.reduce((total, value) => total + toNumber(value), 0);
}

function toNumber(value: string | number) {
  if (typeof value === 'number') return value;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function isCurrentMonth(item: { created_at: string }) {
  const now = new Date();
  const date = new Date(item.created_at);
  return (
    date.getUTCFullYear() === now.getUTCFullYear() &&
    date.getUTCMonth() === now.getUTCMonth()
  );
}

function getRecentMonths(count: number) {
  const months: string[] = [];
  const current = new Date();
  for (let i = count - 1; i >= 0; i -= 1) {
    const date = new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth() - i, 1));
    months.push(`${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`);
  }
  return months;
}

function toMonthKey(value: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}

function getRangeStart(monthsBack: number) {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - monthsBack + 1, 1));
}
