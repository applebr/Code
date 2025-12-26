import React from 'react';
import { Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';

export function GameCard({ game, onClick, onToggleFollow }) {
  return (
    <Card
      className="p-4 cursor-pointer hover:border-blue-200 transition-colors active:scale-[0.98] transition-transform duration-100"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {/* Thumbnail */}
        <div className="relative shrink-0">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-16 h-16 rounded-xl object-cover bg-gray-100 border border-gray-100"
          />
          {game.isNew && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-success text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
              NEW
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 py-0.5">
          <h3 className="font-bold text-base text-text-main truncate leading-tight mb-1.5">
            {game.title}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-1.5">
            {game.tags.map(tag => (
              <span key={tag} className="inline-block px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded">
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-xs font-medium text-primary">
            사용 가능 {game.activeCoupons}개
          </p>
        </div>

        {/* Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFollow(game.id);
          }}
          className="p-2 -mr-2 -mt-2 rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <Heart
            className={cn(
              "w-6 h-6 transition-colors",
              game.isFollowed ? "fill-alert text-alert" : "text-gray-300"
            )}
          />
        </button>
      </div>
    </Card>
  );
}
