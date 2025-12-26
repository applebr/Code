import React from 'react';
import { X, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { GoogleIcon, KakaoIcon } from '../icons/BrandIcons';
import { useAuth } from '../../hooks/useAuth';

export function LoginModal({ onClose, showToast }) {
  const { login } = useAuth();

  const handleLogin = async (provider) => {
    try {
      const user = await login(provider);
      showToast(`${user.name}님 환영합니다!`, "success");
      onClose();
    } catch (error) {
      showToast("로그인에 실패했습니다.", "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={cn(
        "relative w-full max-w-sm mx-4 mb-4 sm:mb-0 bg-white rounded-2xl shadow-xl overflow-hidden",
        "animate-in slide-in-from-bottom duration-300 dark:bg-gray-900"
      )}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold dark:text-gray-100">로그인</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2 dark:text-white">COUPONHUB</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              간편하게 로그인하고<br />
              나만의 게임 쿠폰을 관리하세요.
            </p>
          </div>

          <button
            onClick={() => handleLogin('kakao')}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#FEE500] text-[#3c1e1e] font-medium hover:bg-[#FDD835] transition-colors"
          >
            <KakaoIcon className="w-5 h-5" />
            카카오로 시작하기
          </button>

          <button
            onClick={() => handleLogin('google')}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-750"
          >
            <GoogleIcon className="w-5 h-5" />
            Google로 계속하기
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">또는</span>
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-full gap-2 text-gray-500 dark:text-gray-400"
            onClick={() => handleLogin('email')}
          >
            <Mail className="w-4 h-4" />
            이메일로 로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
