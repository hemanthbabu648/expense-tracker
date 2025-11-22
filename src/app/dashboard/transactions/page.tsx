'use client';

import { useDisclosure } from '@mantine/hooks';
import { ColumnDef } from '@tanstack/react-table';
import React, { useState } from 'react';

import Drawer from '@/components/commons/Drawer';
import { PeriodOption } from '@/components/shared/Filter';
import PageHeader from '@/components/shared/PageHeader';
import BasicTable from '@/components/table/BaseTable';
import TableActions from '@/components/table/TableActions';
import AddTransactionForm from '@/containers/transactions/AddTransactionForm';
import TransactionSnapshotCard from '@/containers/transactions/TransactionSnapshotCard';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  fetchAllTransactions,
  fetchTransactionStats,
} from '@/redux/slices/TransactionSlice';
import { useAuthUserId } from '@/redux/slices/UserSlice';
import { TransactionResponse } from '@/types';
import { getFormattedDate } from '@/utils/DateUtils';
import { getAccountDetails } from '@/utils/Utils';

function TransactionsPage() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(useAuthUserId);

  // Redux data
  const allTransactions = useAppSelector(
    (state) => state.transaction.allTransactions,
  );
  const loading = useAppSelector((state) => state.transaction.loading);
  const allAccounts = useAppSelector((state) => state.account.userAccounts);

  const [opened, { open, close }] = useDisclosure(false);

  // ------------------------------ Table Columns ------------------------------
  const columns = React.useMemo<ColumnDef<TransactionResponse>[]>(() => {
    return [
      {
        header: 'Account',
        cell: ({ row }) => (
          <div className="font-medium text-gray-700">
            {getAccountDetails(row.original.accountId, allAccounts)
              ?.accountName || ''}
          </div>
        ),
        accessorKey: 'account',
      },
      {
        header: 'Type',
        accessorKey: 'transactionType',
      },
      {
        header: 'Category',
        accessorKey: 'category',
      },
      {
        header: 'Amount',
        accessorKey: 'amount',
        cell: (row) => (
          <span className="font-semibold text-gray-800">
            ₹{String(row.getValue())}
          </span>
        ),
      },
      {
        header: 'Date',
        accessorKey: 'createdAt',
        cell: ({ row }) => (
          <div className="text-gray-600">
            {getFormattedDate(row.original.createdAt)}
          </div>
        ),
      },
      {
        header: 'Note',
        accessorKey: 'note',
        cell: (row) => (
          <span className="text-gray-600">{String(row.getValue())}</span>
        ),
      },
    ];
  }, [allAccounts]);

  // ------------------------------ Fetch Data ------------------------------
  React.useEffect(() => {
    if (userId) {
      dispatch(fetchTransactionStats(userId));
      dispatch(fetchAllTransactions(userId));
    }
  }, [dispatch, userId]);

  const [periodFilter, setPeriodFilter] = useState<PeriodOption | null>(null);

  function applyFilter() {
    console.log('Filtering using: ', periodFilter);
  }

  function clearFilter() {
    setPeriodFilter(null);
  }

  const handleDownloadCSV = () => {
    // Implement CSV download logic here
    console.log('Downloading CSV...');
  };

  const handleDownloadExcel = () => {
    // Implement Excel download logic here
    console.log('Downloading Excel...');
  };

  const snapshotDummy = {
    totalTransactions: 312,
    currentAccountBalance: 245000,
    otherAccountBalance: 198500,
    lastTransaction: {
      type: 'EXPENSE',
      amount: 450,
      category: 'Snacks',
      date: '2025-02-18T10:40:00Z',
    },
    mostUsedAccount: 'HDFC Savings',
  };

  // ------------------------------ Render ------------------------------
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <PageHeader
        title="Transactions"
        subtitle="Monitor your spending, income, and savings effortlessly."
        buttonLabel="Add Transaction"
        onButtonClick={open}
      />

      {/* Stats Section */}
      <TransactionSnapshotCard snapshot={snapshotDummy} />

      <div className="flex justify-end">
        <TableActions
          periodValue={periodFilter}
          onPeriodChange={setPeriodFilter}
          onApplyFilter={applyFilter}
          onClearFilter={clearFilter}
          onDownloadCSV={handleDownloadCSV}
          onDownloadExcel={handleDownloadExcel}
        />
      </div>

      {/* Table Section */}
      <BasicTable
        data={allTransactions}
        columns={columns}
        isLoading={loading}
      />

      {/* Drawer Form */}
      <Drawer opened={opened} onClose={close} title="Create Transaction">
        <AddTransactionForm />
      </Drawer>
    </div>
  );
}

export default TransactionsPage;
