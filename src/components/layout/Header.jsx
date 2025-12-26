import React from 'react';
import { Search, Bell } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Header({ className }) {
  return (
    <header className={cn("sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3", className)}>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold tracking-tight text-primary">COUPONHUB</h1>
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="w-6 h-6 text-text-main" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-alert rounded-full border-2 border-white" />
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="어떤 게임을 찾으세요?"
          className="w-full h-11 pl-10 pr-4 bg-gray-100 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
    </header>
  );
}
