'use client';

import { Paper } from '@mantine/core';
import {
  IconArrowsExchange,
  IconCreditCard,
  IconWallet,
  IconBuildingBank,
  IconRepeat,
} from '@tabler/icons-react';
import React from 'react';

interface SnapshotProps {
  snapshot: {
    totalTransactions: number;
    currentAccountBalance: number;
    otherAccountBalance: number;
    lastTransaction: {
      type: string;
      amount: number;
      category: string;
      date: string;
    };
    mostUsedAccount: string;
  };
}

const TransactionSnapshotCard: React.FC<SnapshotProps> = ({ snapshot }) => {
  const last = snapshot.lastTransaction;

  return (
    <Paper
      shadow="xl"
      radius="lg"
      className="relative overflow-hidden border border-gray-200 bg-white p-6"
    >
      {/* Header Ribbon */}
      <div className="absolute left-0 right-0 top-0 w-4/12 rounded-br-3xl bg-indigo-300 px-6 py-3 text-white shadow-md">
        <h2 className="text-lg font-semibold">Transactions Snapshot</h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Total Transactions */}
        <div className="flex items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
          <IconArrowsExchange size={26} className="text-indigo-600" />
          <div>
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="text-xl font-semibold text-gray-800">
              {snapshot.totalTransactions}
            </p>
          </div>
        </div>

        {/* Total Income */}
        <div className="flex items-start gap-3 rounded-xl border border-green-100 bg-blue-50 p-4">
          <IconWallet size={26} className="text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Primary Account</p>
            <p className="text-xl font-semibold text-gray-800">
              ₹{snapshot.currentAccountBalance.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Total Expense */}
        <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-violet-50 p-4">
          <IconBuildingBank size={26} className="text-violet-600" />
          <div>
            <p className="text-sm text-gray-500">Other Accounts</p>
            <p className="text-xl font-semibold text-gray-800">
              ₹{snapshot.otherAccountBalance.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Most Used Account */}
        <div className="flex items-start gap-3 rounded-xl border border-yellow-100 bg-yellow-50 p-4">
          <IconRepeat size={26} className="text-yellow-600" />
          <div>
            <p className="text-sm text-gray-500">Most Used Account</p>
            <p className="text-xl font-semibold text-gray-800">
              {snapshot.mostUsedAccount}
            </p>
          </div>
        </div>
      </div>

      {/* Last Transaction */}
      <div className="mt-8 flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
        <IconCreditCard className="text-indigo-500" size={28} />

        <div className="flex-1">
          <p className="text-sm font-medium text-gray-800">
            Last Transaction ({last.type})
          </p>
          <p className="text-sm text-gray-600">
            ₹{last.amount} — {last.category}
          </p>
        </div>

        <p className="text-xs text-gray-400">
          {new Date(last.date).toLocaleString()}
        </p>
      </div>
    </Paper>
  );
};

export default TransactionSnapshotCard;
