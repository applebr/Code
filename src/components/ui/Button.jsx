import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ className, variant = 'primary', size = 'md', children, ...props }) {
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-white border border-gray-200 text-text-main hover:bg-gray-50 active:bg-gray-100',
    ghost: 'bg-transparent text-text-main hover:bg-gray-100 active:bg-gray-200',
    danger: 'bg-alert text-white hover:bg-red-600',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    icon: 'h-10 w-10 p-2',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
