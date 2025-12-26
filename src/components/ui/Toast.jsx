import React, { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { X, Check, Info, AlertCircle } from 'lucide-react';

export function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const icons = {
    success: <Check className="w-5 h-5 text-success" />,
    error: <AlertCircle className="w-5 h-5 text-alert" />,
    info: <Info className="w-5 h-5 text-primary" />
  };

  return (
    <div className={cn(
      "fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg min-w-[300px] animate-in fade-in slide-in-from-bottom-5",
      "bg-gray-900/90 text-white backdrop-blur-sm"
    )}>
      {icons[type]}
      <span className="flex-1 text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
