import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
