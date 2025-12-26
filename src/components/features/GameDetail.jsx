import React, { useState } from 'react';
import { ChevronLeft, Share, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { CouponCard } from './CouponCard';

export function GameDetail({ game, onClose, onFollow, showToast }) {
  const [coupons, setCoupons] = useState(game.coupons || []);
  const [showExpired, setShowExpired] = useState(false);

  const activeCoupons = coupons.filter(c => c.status !== 'expired');
  const expiredCoupons = coupons.filter(c => c.status === 'expired');

  const handleToggleUsed = (id) => {
    setCoupons(prev => prev.map(c => {
      if (c.id === id) {
        const newStatus = c.status === 'used' ? 'active' : 'used'; // Simple toggle logic
        // If it was isUsed boolean in data, handle that too
        const isUsed = newStatus === 'used';
        return { ...c, status: newStatus, isUsed };
      }
      return c;
    }));
  };

  const handleCopy = () => {
    showToast("쿠폰 코드가 복사되었습니다.", "success");
  };

  return (
    <div className="fixed inset-0 z-40 bg-white flex flex-col animate-in slide-in-from-right duration-300 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 h-14 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-950/80 dark:border-gray-800">
        <button onClick={onClose} className="p-2 -ml-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors">
          <ChevronLeft className="w-6 h-6 text-text-main dark:text-gray-100" />
        </button>
        <h2 className="text-base font-bold text-text-main truncate max-w-[200px] dark:text-gray-100">{game.title}</h2>
        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors">
          <Share className="w-6 h-6 text-text-main dark:text-gray-100" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pb-safe">
        {/* Game Info Panel */}
        <div className="p-6 flex flex-col items-center bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-20 h-20 rounded-2xl shadow-md mb-4 object-cover dark:bg-gray-800"
          />
          <h1 className="text-xl font-bold text-text-main mb-4 dark:text-gray-100">{game.title}</h1>

          <div className="flex gap-3 w-full max-w-[280px]">
            <Button
              variant={game.isFollowed ? "danger" : "primary"}
              className="flex-1 rounded-full"
              onClick={onFollow}
            >
              {game.isFollowed ? "팔로우 취소" : "팔로우"}
            </Button>
            <Button variant="secondary" className="flex-1 rounded-full text-xs">
              <ExternalLink className="w-4 h-4 mr-1.5" />
              공식 카페
            </Button>
          </div>
        </div>

        {/* Coupons List */}
        <div className="p-4 space-y-6 bg-surface-50 min-h-full dark:bg-gray-950">
          {/* Active Coupons */}
          <section className="space-y-3">
            <h3 className="font-bold text-text-main ml-1 dark:text-gray-200">사용 가능 쿠폰 {activeCoupons.length}개</h3>
            {activeCoupons.length > 0 ? (
              activeCoupons.map(coupon => (
                <CouponCard
                  key={coupon.id}
                  coupon={coupon}
                  onCopy={handleCopy}
                  onToggleUsed={handleToggleUsed}
                />
              ))
            ) : (
              <div className="text-center py-8 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                사용 가능한 쿠폰이 없습니다.
              </div>
            )}
          </section>

          {/* Expired Coupons */}
          {expiredCoupons.length > 0 && (
            <section className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setShowExpired(!showExpired)}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-500 px-1 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <span>만료된 쿠폰 {expiredCoupons.length}개</span>
                <span className="text-xs">{showExpired ? "접기" : "보기"}</span>
              </button>

              {showExpired && (
                <div className="space-y-3">
                  {expiredCoupons.map(coupon => (
                    <CouponCard
                      key={coupon.id}
                      coupon={coupon}
                      onCopy={handleCopy}
                      onToggleUsed={handleToggleUsed}
                    />
                  ))}
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
