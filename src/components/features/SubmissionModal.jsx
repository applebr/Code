import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function SubmissionModal({ onClose, showToast }) {
  const [formData, setFormData] = useState({
    gameName: '',
    code: '',
    reward: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.code) return;

    // Simulate API call
    setTimeout(() => {
      showToast("쿠폰 제보가 완료되었습니다. 검수 후 등록됩니다.", "success");
      onClose();
    }, 500);
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
        "relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden",
        "animate-in slide-in-from-bottom duration-300 dark:bg-gray-900"
      )}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold dark:text-gray-100">쿠폰 제보하기</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-text-main dark:text-gray-200">게임 이름</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-primary/40"
              placeholder="예: 세븐나이츠 키우기"
              value={formData.gameName}
              onChange={e => setFormData({...formData, gameName: e.target.value})}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-text-main dark:text-gray-200">쿠폰 코드 <span className="text-alert">*</span></label>
            <input
              type="text"
              required
              className="w-full p-3 font-mono bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-primary/40"
              placeholder="CODE1234"
              value={formData.code}
              onChange={e => setFormData({...formData, code: e.target.value})}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-text-main dark:text-gray-200">보상 내용 (선택)</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-primary/40"
              placeholder="예: 다이아 1000개"
              value={formData.reward}
              onChange={e => setFormData({...formData, reward: e.target.value})}
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full py-6 text-lg">
              제보하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
