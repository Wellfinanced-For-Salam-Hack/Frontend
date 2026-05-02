'use client';

import { useEffect, useMemo, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { ChartJS } from '@/components/charts/ChartWrapper';
import {
  getCounterpartySpend,
  getDashboardSummary,
  getInflowSeries,
  getOutflowSeries,
  type CounterpartySpendPoint,
  type DashboardSummary,
  type SeriesPoint
} from '@/lib/api/dashboard';
import { formatCurrency } from '@/lib/utils/currency';
import { formatMonthLabel } from '@/lib/utils/dates';

ChartJS.defaults.color = '#b6c0d4';
ChartJS.defaults.font.family = 'var(--font-body), system-ui';

const chartPalette = ['#18d6a5', '#1cc2ff', '#f7b731', '#ff6b6b', '#9b59b6'];

export default function DashboardClient() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [inflowSeries, setInflowSeries] = useState<SeriesPoint[]>([]);
  const [outflowSeries, setOutflowSeries] = useState<SeriesPoint[]>([]);
  const [counterpartySpend, setCounterpartySpend] = useState<
    CounterpartySpendPoint[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadDashboard() {
      try {
        const [summaryData, inflowData, outflowData, counterpartyData] =
          await Promise.all([
            getDashboardSummary(),
            getInflowSeries(),
            getOutflowSeries(),
            getCounterpartySpend()
          ]);

        if (!isMounted) return;
        setSummary(summaryData);
        setInflowSeries(inflowData);
        setOutflowSeries(outflowData);
        setCounterpartySpend(counterpartyData);
        setErrorMessage(null);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load dashboard data'
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadDashboard();
    return () => {
      isMounted = false;
    };
  }, []);

  const inflowChart = useMemo(() => {
    const labels = inflowSeries.map((point) =>
      formatMonthLabel(point.period)
    );
    return {
      labels,
      datasets: [
        {
          label: 'Inflow',
          data: inflowSeries.map((point) => point.value),
          borderColor: '#18d6a5',
          backgroundColor: 'rgba(24, 214, 165, 0.12)',
          fill: true,
          tension: 0.4
        }
      ]
    };
  }, [inflowSeries]);

  const outflowChart = useMemo(() => {
    const labels = outflowSeries.map((point) =>
      formatMonthLabel(point.period)
    );
    return {
      labels,
      datasets: [
        {
          label: 'Outflow',
          data: outflowSeries.map((point) => point.value),
          borderColor: '#ff6b6b',
          backgroundColor: 'rgba(255, 107, 107, 0.12)',
          fill: true,
          tension: 0.4
        }
      ]
    };
  }, [outflowSeries]);

  const counterpartyChart = useMemo(() => {
    return {
      labels: counterpartySpend.map((point) => point.label),
      datasets: [
        {
          data: counterpartySpend.map((point) => point.value),
          backgroundColor: counterpartySpend.map(
            (_, index) => chartPalette[index % chartPalette.length]
          )
        }
      ]
    };
  }, [counterpartySpend]);

  return (
    <section className="dashboard-grid">
      <div className="kpi-grid">
        <StatCard
          label="Total Balance"
          value={
            summary ? formatCurrency(summary.totalBalance) : 'EGP --'
          }
          meta="Across all accounts"
          loading={loading}
          highlight
        />
        <StatCard
          label="Month Inflow"
          value={
            summary ? formatCurrency(summary.monthInflow) : 'EGP --'
          }
          meta="Current month"
          loading={loading}
        />
        <StatCard
          label="Month Outflow"
          value={
            summary ? formatCurrency(summary.monthOutflow) : 'EGP --'
          }
          meta="Current month"
          loading={loading}
        />
      </div>

      {errorMessage ? (
        <div className="empty-state">{errorMessage}</div>
      ) : null}

      <div className="card chart-card">
        <div className="chart-header">
          <div>
            <h2 className="chart-title">Inflow Over Time</h2>
            <span className="badge">Trend</span>
          </div>
        </div>
        <div className="chart-canvas">
          {inflowSeries.length > 0 ? (
            <Line
              data={inflowChart}
              options={lineOptions}
              aria-label="Inflow trend line chart"
              role="img"
            />
          ) : (
            <EmptyChart loading={loading} />
          )}
        </div>
      </div>

      <div className="card chart-card">
        <div className="chart-header">
          <div>
            <h2 className="chart-title">Outflow Over Time</h2>
            <span className="badge">Run Rate</span>
          </div>
        </div>
        <div className="chart-canvas">
          {outflowSeries.length > 0 ? (
            <Line
              data={outflowChart}
              options={lineOptions}
              aria-label="Outflow trend line chart"
              role="img"
            />
          ) : (
            <EmptyChart loading={loading} />
          )}
        </div>
      </div>

      <div className="card chart-card">
        <div className="chart-header">
          <div>
            <h2 className="chart-title">Top Counterparty Spend</h2>
            <span className="badge">Distribution</span>
          </div>
        </div>
        <div className="chart-canvas">
          {counterpartySpend.length > 0 ? (
            <Doughnut
              data={counterpartyChart}
              options={doughnutOptions}
              aria-label="Counterparty spend doughnut chart"
              role="img"
            />
          ) : (
            <EmptyChart loading={loading} />
          )}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  meta: string;
  loading?: boolean;
  highlight?: boolean;
}

function StatCard({ label, value, meta, loading, highlight }: StatCardProps) {
  return (
    <div className={`card${highlight ? ' highlight' : ''}`}>
      <p className="kpi-label">{label}</p>
      {loading ? (
        <div className="skeleton" style={{ height: 26 }} />
      ) : (
        <p className="kpi-value">{value}</p>
      )}
      <p className="kpi-meta">{meta}</p>
    </div>
  );
}

function EmptyChart({ loading }: { loading: boolean }) {
  if (loading) {
    return <div className="skeleton" style={{ height: 180 }} />;
  }

  return (
    <div className="empty-state">
      Awaiting analytics data from your API
    </div>
  );
}

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false
    }
  },
  scales: {
    x: {
      grid: { display: false }
    },
    y: {
      ticks: {
        callback: (value: number) => `${value}`
      }
    }
  }
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { boxWidth: 10, boxHeight: 10 }
    }
  }
};
