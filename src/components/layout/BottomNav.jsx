import React from 'react';
import { Home, Gamepad2, Menu } from 'lucide-react';
import { cn } from '../../lib/utils';

export function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'my-games', label: 'My Games', icon: Gamepad2 },
    { id: 'menu', label: 'Menu', icon: Menu },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around bg-white border-t border-gray-200 dark:bg-gray-950 dark:border-gray-800 pb-safe pt-2">
      {/* pb-safe handles bottom padding for home indicator. We add standard height on top of that implicitly or via wrapper */}
      <div className="flex w-full h-[65px] items-center justify-around">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 active:scale-95 transition-transform"
            >
              <Icon
                className={cn(
                  "w-6 h-6 transition-colors",
                  isActive ? "text-primary fill-primary/20" : "text-gray-400 stroke-[1.5px] dark:text-gray-500"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
