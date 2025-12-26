import React from 'react';
import { X, LogOut, Settings, User, Bell } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../hooks/useAuth';

export function MenuDrawer({ isOpen, onClose, onLoginClick }) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className={cn(
        "relative w-[80%] max-w-sm h-full bg-white shadow-2xl overflow-y-auto",
        "animate-in slide-in-from-right duration-300 dark:bg-gray-900"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold dark:text-gray-100">메뉴</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full bg-gray-100"
              />
              <div>
                <div className="font-bold text-lg dark:text-white">{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500 mb-4 dark:text-gray-400">로그인하고 더 많은 기능을 이용해보세요.</p>
              <button
                onClick={() => { onClose(); onLoginClick(); }}
                className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                로그인 / 회원가입
              </button>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-1">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
            <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-200">알림 설정</span>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
            <Settings className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-200">앱 설정</span>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
            <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-200">내 정보</span>
          </button>
        </div>

        {/* Footer Actions */}
        {user && (
          <div className="p-4 mt-auto border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 p-3 text-gray-500 hover:text-alert dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
