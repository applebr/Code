import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { BottomNav } from '../components/layout/BottomNav';
import { Chip } from '../components/ui/Chip';
import { GameCard } from '../components/features/GameCard';
import { CATEGORIES, GAMES } from '../data/mockData';
import { GameDetail } from '../components/features/GameDetail';
import { SubmissionModal } from '../components/features/SubmissionModal';
import { LoginModal } from '../components/features/LoginModal';
import { MenuDrawer } from '../components/features/MenuDrawer';
import { Toast } from '../components/ui/Toast';
import { Plus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState("전체");
  const [games, setGames] = useState(GAMES);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toast, setToast] = useState(null); // { message, type }

  const handleToggleFollow = (id) => {
    if (!user) {
      showToast("로그인이 필요한 기능입니다.", "info");
      setIsLoginOpen(true);
      return;
    }

    setGames(prev => prev.map(game => {
      if (game.id === id) {
        const newState = !game.isFollowed;
        showToast(
          newState ? "관심 게임에 추가되었습니다." : "관심 게임에서 해제되었습니다.",
          newState ? "success" : "info"
        );
        return { ...game, isFollowed: newState };
      }
      return game;
    }));
  };

  const handleTabChange = (tabId) => {
    if (tabId === 'menu') {
      setIsMenuOpen(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const filteredGames = activeCategory === "전체"
    ? games
    : games.filter(g => g.tags.includes(activeCategory));

  const activeGame = selectedGameId ? games.find(g => g.id === selectedGameId) : null;

  return (
    <div className="min-h-screen bg-surface-50 pb-20 font-sans dark:bg-gray-950">
      {/* Home Content */}
      <Header onLoginClick={() => setIsLoginOpen(true)} />

      <div className="sticky top-[113px] z-10 bg-surface-50/95 backdrop-blur-sm py-2 px-4 border-b border-gray-100 overflow-x-auto no-scrollbar dark:bg-gray-950/95 dark:border-gray-800">
        <div className="flex gap-2 min-w-max">
          {CATEGORIES.map(cat => (
            <Chip
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Chip>
          ))}
        </div>
      </div>

      <main className="px-4 py-4 space-y-3">
        {filteredGames.map(game => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => setSelectedGameId(game.id)}
            onToggleFollow={handleToggleFollow}
          />
        ))}

        {filteredGames.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-sm">
            해당 카테고리의 게임이 없습니다.
          </div>
        )}
      </main>

      {/* FAB */}
      <button
        onClick={() => setIsSubmissionOpen(true)}
        className="fixed bottom-[80px] right-4 w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-600 transition-transform hover:scale-105 active:scale-95 z-20"
      >
        <Plus className="w-7 h-7" />
      </button>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Modals & Overlays */}
      {activeGame && (
        <GameDetail
          game={activeGame}
          onClose={() => setSelectedGameId(null)}
          onFollow={() => handleToggleFollow(activeGame.id)}
          showToast={showToast}
        />
      )}

      {isSubmissionOpen && (
        <SubmissionModal
          onClose={() => setIsSubmissionOpen(false)}
          showToast={showToast}
        />
      )}

      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          showToast={showToast}
        />
      )}

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onLoginClick={() => { setIsMenuOpen(false); setIsLoginOpen(true); }}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
