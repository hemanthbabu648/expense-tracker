import { Card, Skeleton } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

interface InsightProps {
  loading?: boolean;
  income: number;
  expense: number;
  netFlow: number;
  transactionsCount: number;
  topCategory: string;
}

const InsightCard = ({
  label,
  value,
  positive,
}: {
  label: string;
  value: string | number;
  positive?: boolean;
}) => (
  <Card
    shadow="xs"
    radius="md"
    className="dark:bg-dark-700 border bg-white p-5"
  >
    <p className="text-xs text-gray-500">{label}</p>

    <div className="mt-2 flex items-center gap-1">
      <p className="text-xl font-semibold">{value}</p>

      {positive !== undefined &&
        (positive ? (
          <IconArrowUpRight size={16} className="text-green-500" />
        ) : (
          <IconArrowDownRight size={16} className="text-red-500" />
        ))}
    </div>
  </Card>
);

const TransactionInsights = ({
  loading,
  income,
  expense,
  netFlow,
  transactionsCount,
  topCategory,
}: InsightProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} height={90} radius="md" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      <InsightCard label="Income" value={`₹${income}`} positive />
      <InsightCard label="Expenses" value={`₹${expense}`} positive={false} />
      <InsightCard
        label="Net Cash Flow"
        value={`₹${netFlow}`}
        positive={netFlow >= 0}
      />
      <InsightCard label="Top Category" value={topCategory} />
      <InsightCard label="Transactions" value={transactionsCount} />
    </div>
  );
};

export default TransactionInsights;
