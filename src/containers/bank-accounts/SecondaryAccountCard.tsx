import { Paper } from '@mantine/core';
import { IconBuildingBank, IconArrowRight } from '@tabler/icons-react';
import React from 'react';

type SecondaryAccountCardProps = {
  bankName: string;
  accountType: string;
  balance: number;
  accountNumber: string;
};

const SecondaryAccountCard: React.FC<SecondaryAccountCardProps> = ({
  bankName,
  accountType,
  balance,
  accountNumber,
}) => {
  return (
    <Paper
      shadow="md"
      className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-[2px] hover:shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <IconBuildingBank size={22} className="text-primary" />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-gray-800">{bankName}</p>
          <p className="text-xs text-gray-500">{accountType}</p>
        </div>

        <IconArrowRight className="text-gray-400" />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">Balance</p>
        <p className="text-xl font-bold text-gray-900">₹{balance.toFixed(2)}</p>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Account No: ****{accountNumber.slice(-4)}
      </p>
    </Paper>
  );
};

export default SecondaryAccountCard;
