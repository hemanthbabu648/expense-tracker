'use client';

import { Popover, Button, Select, Group } from '@mantine/core';
import { IconFilter } from '@tabler/icons-react';
import React from 'react';

export type PeriodOption = 'monthly' | 'quarterly' | 'half-yearly' | 'yearly';

interface FilterPopoverProps {
  value: PeriodOption | null;
  onChange: (value: PeriodOption | null) => void;
  onApply: () => void;
  onClear?: () => void;
}

export default function Filter({
  value,
  onChange,
  onApply,
  onClear,
}: FilterPopoverProps) {
  const [opened, setOpened] = React.useState(false);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={260}
      position="bottom-end"
      shadow="md"
    >
      <Popover.Target>
        <Button
          variant="filled"
          color="indigo"
          leftSection={<IconFilter size={16} />}
          onClick={() => setOpened((o) => !o)}
        >
          Filter
        </Button>
      </Popover.Target>

      <Popover.Dropdown className="space-y-4">
        <Select
          label="Period"
          placeholder="Select period"
          value={value ?? ''}
          onChange={(v) => onChange(v as PeriodOption)}
          data={[
            { label: 'Monthly', value: 'monthly' },
            { label: 'Quarterly', value: 'quarterly' },
            { label: 'Half-Yearly', value: 'half-yearly' },
            { label: 'Yearly', value: 'yearly' },
          ]}
        />

        <Group justify="flex-end">
          {onClear && (
            <Button variant="subtle" color="indigo" onClick={onClear}>
              Clear
            </Button>
          )}

          <Button
            color="indigo"
            onClick={() => {
              onApply();
              setOpened(false);
            }}
          >
            Apply
          </Button>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
