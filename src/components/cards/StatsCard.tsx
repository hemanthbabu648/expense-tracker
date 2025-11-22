import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';

import { StatsResponse } from '@/types/ui';

type StatsCardProps = {
  stats: StatsResponse[];
  loading: boolean;
};

const StatsCard: React.FC<StatsCardProps> = ({ stats = [], loading }) => {
  return (
    <div>
      {!loading && stats.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index + stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-[2px] hover:border-gray-200 hover:shadow-xl"
            >
              {/* Top Area */}
              <div className="mb-5 flex items-center justify-between">
                {/* Icon container */}
                <div
                  className={` ${stat.bgColor} flex items-center justify-center rounded-xl p-3 shadow-sm`}
                >
                  {stat.icon}
                </div>

                {/* Change indicator */}
                {stat.change && (
                  <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600">
                    {stat.change}
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium tracking-wide text-gray-500">
                {stat.title}
              </h3>

              {/* Value */}
              <p className="mt-1 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>

              {/* Subtitle */}
              <p className="mt-2 text-sm text-gray-500">
                {stat.category ? stat.category : stat.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        // Modern skeleton loader
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-gray-200"></div>
                <div className="h-4 w-12 rounded bg-gray-200"></div>
              </div>

              <div className="mb-3 h-4 w-28 rounded bg-gray-200"></div>
              <div className="mb-3 h-8 w-40 rounded bg-gray-300"></div>
              <div className="h-4 w-24 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
