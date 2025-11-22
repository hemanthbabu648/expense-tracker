'use client';

import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  buttonLabel = 'Create New',
  onButtonClick,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      </div>

      {onButtonClick && (
        <Button
          radius="md"
          size="md"
          leftSection={<IconPlus size={20} />}
          color="indigo"
          className="shadow-sm transition hover:shadow-md"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default PageHeader;
