import { Tooltip } from '@mantine/core';
import {
  IconWallet,
  IconChartPie,
  IconExchange,
  IconCreditCard,
  IconDashboard,
  IconReport,
  IconReportAnalytics,
  IconFileDescription,
  IconCalendarTime,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import React from 'react';

import NavLink from '../commons/NavLink';

const userRoutes = [
  {
    link: '/dashboard',
    label: 'Dashboard',
    icon: IconDashboard,
  },
  {
    link: '/dashboard/bank-accounts',
    label: 'Bank Accounts',
    icon: IconWallet,
  },
  {
    link: '/dashboard/credit-cards',
    label: 'Credit Cards',
    icon: IconCreditCard,
  },
  {
    link: '/dashboard/transactions',
    label: 'Transactions',
    icon: IconFileDescription,
  },
  {
    link: '/dashboard/p2p-transactions',
    label: 'P2P Transactions',
    icon: IconExchange,
  },
  {
    link: '/dashboard/emis',
    label: 'EMIs',
    icon: IconCalendarTime,
  },
  {
    link: '/dashboard/budgets',
    label: 'Budgets',
    icon: IconChartPie,
  },
  {
    link: '/dashboard/analytics',
    label: 'Analytics',
    icon: IconReportAnalytics,
  },
  {
    link: '/dashboard/reports',
    label: 'Reports',
    icon: IconReport,
  },
];

type Props = {
  isSidebarOpen: boolean;
};

const UserSidebar: React.FC<Props> = ({ isSidebarOpen }) => {
  const pathname = usePathname();

  if (!isSidebarOpen) {
    return (
      <div className="flex flex-col px-2 py-2">
        {userRoutes.map((route) => (
          <Tooltip
            key={route.link}
            label={route.label}
            position="right"
            transitionProps={{ duration: 0 }}
          >
            <NavLink
              href={route.link}
              leftSection={<route.icon />}
              className="mt-1 !rounded-sm hover:!bg-primary-blue-light"
            />
          </Tooltip>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col px-1 py-2">
      {userRoutes.map((route) => {
        const isActive = pathname === route.link;
        return (
          <NavLink
            href={route.link}
            key={route.link}
            label={route.label}
            leftSection={<route.icon />}
            className={`mt-1 !rounded-sm ${isActive ? '' : 'hover:!bg-gray-500'}`}
            active={isActive}
          />
        );
      })}
    </div>
  );
};

export default UserSidebar;
