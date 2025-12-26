import React from 'react';
import { cn } from '../../lib/utils';

export function Chip({ active, children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap',
        active
          ? 'bg-gray-800 text-white'
          : 'bg-white border border-gray-200 text-text-main hover:bg-gray-50',
        className
      )}
    >
      {children}
    </button>
  );
}
