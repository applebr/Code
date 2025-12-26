import React from 'react';
import { cn } from '../../lib/utils';

export function Chip({ active, children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap',
        active
          ? 'bg-gray-800 text-white dark:bg-gray-700'
          : 'bg-white border border-gray-200 text-text-main hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-750',
        className
      )}
    >
      {children}
    </button>
  );
}
