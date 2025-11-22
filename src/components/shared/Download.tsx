'use client';

import { Button, Menu } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import React from 'react';

interface DownloadPopoverProps {
  onDownloadCSV: () => void;
  onDownloadExcel: () => void;
}

export default function Download({
  onDownloadCSV,
  onDownloadExcel,
}: DownloadPopoverProps) {
  return (
    <Menu shadow="md" width={180} position="bottom-end">
      <Menu.Target>
        <Button
          variant="filled"
          color="indigo"
          leftSection={<IconDownload size={18} />}
        >
          Download
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={onDownloadCSV}>Download CSV</Menu.Item>
        <Menu.Item onClick={onDownloadExcel}>Download Excel</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
