import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../hooks/useAuth';

export function Header({ className, onLoginClick }) {
  const { user } = useAuth();

  return (
    <header className={cn("sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3 pt-safe-top dark:bg-gray-950/95 dark:border-gray-800", className)}>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold tracking-tight text-primary">COUPONHUB</h1>

        <div className="flex items-center gap-2">
          {user ? (
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
               <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
              />
            </button>
          ) : (
            <button
              onClick={onLoginClick}
              className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-blue-50 rounded-lg transition-colors dark:hover:bg-blue-900/20"
            >
              로그인
            </button>
          )}

          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Bell className="w-6 h-6 text-text-main dark:text-gray-100" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-alert rounded-full border-2 border-white dark:border-gray-950" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="어떤 게임을 찾으세요?"
          className="w-full h-11 pl-10 pr-4 bg-gray-100 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-600"
        />
      </div>
    </header>
  );
}
