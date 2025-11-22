'use client';

import { useDisclosure } from '@mantine/hooks';
import { IconMoneybag, IconPigMoney, IconWallet } from '@tabler/icons-react';
import React from 'react';

import StatsCard from '@/components/cards/StatsCard';
import PageHeader from '@/components/shared/PageHeader';
import CreateAccountForm from '@/containers/bank-accounts/CreateAccountForm';
import PrimaryAccountCard from '@/containers/bank-accounts/PrimaryAccountCard';
import SecondaryAccountCard from '@/containers/bank-accounts/SecondaryAccountCard';
import { useAppSelector } from '@/redux/hooks';

const otherAccounts = [
  {
    id: 'acc_002',
    bankName: 'HDFC Bank',
    accountType: 'Savings',
    balance: 45870.55,
    institutionBalance: 46000.0,
    cardColor: 'blue',
  },
  {
    id: 'acc_003',
    bankName: 'SBI Bank',
    accountType: 'Current',
    balance: 129880.0,
    institutionBalance: 130400.0,
    cardColor: 'green',
  },
  {
    id: 'acc_004',
    bankName: 'ICICI Bank',
    accountType: 'Salary',
    balance: 85000.25,
    institutionBalance: 85320.0,
    cardColor: 'orange',
  },
  {
    id: 'acc_005',
    bankName: 'Axis Bank',
    accountType: 'Savings',
    balance: 20540.9,
    institutionBalance: 21000.0,
    cardColor: 'violet',
  },
];

function AccountsPage() {
  const { accountStats, loading } = useAppSelector((state) => state.account);
  const [opened, { open, close }] = useDisclosure(false);

  const statsData = [
    {
      title: 'Total Balance',
      value: `₹${accountStats?.total.toFixed(2)}`,
      description: 'All Accounts',
      icon: <IconWallet className="h-6 w-6 text-indigo-600" />,
      bgColor: 'bg-indigo-50',
    },
    {
      title: 'Current Balance',
      value: `₹${accountStats?.current.toFixed(2)}`,
      description: 'Exclude Savings',
      icon: <IconMoneybag className="h-6 w-6 text-purple-600" />,
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Savings',
      value: `₹${accountStats?.savings.toFixed(2)}`,
      description: 'All Savings',
      icon: <IconPigMoney className="h-6 w-6 text-orange-600" />,
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <PageHeader
        title="Accounts Overview"
        subtitle="Manage your accounts, balances, and savings."
        buttonLabel="Create New Account"
        onButtonClick={open}
      />

      {/* Stats Section */}
      <StatsCard stats={statsData} loading={loading} />

      {/* Primary account card */}
      <div className="mt-4">
        <PrimaryAccountCard />
      </div>

      {/* Secondary Accounts */}
      {otherAccounts?.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">
            Other Accounts
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherAccounts.map((acc) => (
              <SecondaryAccountCard
                key={acc.id}
                bankName={acc.bankName}
                accountType={acc.accountType}
                balance={acc.balance}
                accountNumber={acc.bankName + acc.id}
              />
            ))}
          </div>
        </div>
      )}

      {opened && <CreateAccountForm opened={opened} onClose={close} />}
    </div>
  );
}

export default AccountsPage;
