import React, { useState } from 'react';
import { Copy, Check, CheckCircle2, Flag } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function CouponCard({ coupon, onCopy, onToggleUsed }) {
  const [isCopied, setIsCopied] = useState(false);
  const isUsed = coupon.status === 'used' || coupon.isUsed;
  const isExpired = coupon.status === 'expired';

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setIsCopied(true);
    onCopy();
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={cn(
      "relative bg-white rounded-xl border transition-all duration-300 overflow-hidden",
      isUsed ? "bg-gray-50 border-gray-200" : "border-blue-100 shadow-sm",
      isExpired && "opacity-60 grayscale"
    )}>
      {/* Decorative dashed line for ticket look */}
      <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-surface-50 rounded-full border border-gray-100" />
      <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-surface-50 rounded-full border border-gray-100" />

      <div className="p-4 space-y-3">
        {/* Top: Code & Copy */}
        <div className="flex items-center justify-between gap-3">
          <div className={cn(
            "font-mono text-xl font-bold tracking-wider",
            isUsed || isExpired ? "text-gray-400 line-through decoration-2" : "text-primary"
          )}>
            {coupon.code}
          </div>

          <Button
            size="sm"
            disabled={isUsed || isExpired}
            onClick={handleCopy}
            className={cn(
              "shrink-0 w-10 h-10 p-0 rounded-full transition-all duration-300",
              isCopied ? "bg-success hover:bg-success text-white" : ""
            )}
          >
            {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </Button>
        </div>

        {/* Middle: Reward */}
        <div className={cn(
          "text-sm font-medium",
          isUsed || isExpired ? "text-gray-400" : "text-text-main"
        )}>
          {coupon.reward}
        </div>

        {/* Bottom: Actions */}
        <div className="pt-3 border-t border-dashed border-gray-200 flex items-center justify-between">
          <button
            onClick={() => onToggleUsed(coupon.id)}
            disabled={isExpired}
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium transition-colors p-1.5 -ml-1.5 rounded",
              isUsed ? "text-success" : "text-gray-400 hover:bg-gray-50",
              isExpired && "cursor-not-allowed"
            )}
          >
            <CheckCircle2 className={cn("w-4 h-4", isUsed && "fill-current")} />
            {isUsed ? "사용 완료" : "사용 완료 체크"}
          </button>

          <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-alert p-1.5 -mr-1.5 rounded hover:bg-red-50 transition-colors">
            <Flag className="w-4 h-4" />
            신고
          </button>
        </div>
      </div>
    </div>
  );
}
