'use client';

import React from 'react';

import DownloadPopover from '../shared/Download';
import FilterPopover, { PeriodOption } from '../shared/Filter';

interface TableActionsProps {
  periodValue: PeriodOption | null;
  onPeriodChange: (value: PeriodOption | null) => void;
  onApplyFilter: () => void;
  onClearFilter: () => void;

  onDownloadCSV: () => void;
  onDownloadExcel: () => void;
}

export default function TableActions({
  periodValue,
  onPeriodChange,
  onApplyFilter,
  onClearFilter,
  onDownloadCSV,
  onDownloadExcel,
}: TableActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3">
      <FilterPopover
        value={periodValue}
        onChange={onPeriodChange}
        onApply={onApplyFilter}
        onClear={onClearFilter}
      />

      <DownloadPopover
        onDownloadCSV={onDownloadCSV}
        onDownloadExcel={onDownloadExcel}
      />
    </div>
  );
}
