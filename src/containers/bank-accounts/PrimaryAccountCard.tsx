import { Paper, Button } from '@mantine/core';
import {
  IconBuildingBank,
  IconWallet,
  IconCreditCard,
  IconRefresh,
} from '@tabler/icons-react';
import React from 'react';

function PrimaryAccountCard() {
  return (
    <Paper
      shadow="xl"
      className="relative rounded-xl border border-b-primary-light border-r-primary-light p-5"
    >
      {/* Header Ribbon */}
      <div className="absolute left-0 top-0 w-72 rounded-br-[100px] bg-primary px-4 py-2 font-semibold tracking-wide text-white">
        Primary Account
      </div>

      <div className="mt-12 space-y-4">
        {/* Bank Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconBuildingBank size={28} />
            <div>
              <p className="text-lg font-semibold">HDFC Bank</p>
              <p className="text-xs text-gray-600">Savings Account</p>
            </div>
          </div>
          <IconCreditCard size={26} className="text-gray-600" />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Balance Section */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Current Balance</p>

            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold tracking-tight">₹ 1,24,560.75</p>

              {/* Refresh Icon beside the amount */}
              <button
                className="rounded-full p-2 transition hover:bg-gray-100"
                title="Refresh Balance"
              >
                <IconRefresh size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <IconWallet size={20} />
            <span>Available</span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="space-y-1 pt-3 text-sm text-gray-600">
          <p>Institution: HDFC Bank Ltd</p>
          <p>Account No: **** **** 2356</p>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-4 flex justify-end">
        <Button
          variant="subtle"
          className="text-primary hover:bg-primary/10"
          size="xs"
        >
          View More
        </Button>
      </div>
    </Paper>
  );
}

export default PrimaryAccountCard;
