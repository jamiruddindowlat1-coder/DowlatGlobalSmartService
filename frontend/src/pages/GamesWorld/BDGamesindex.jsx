import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const PORTAL_NAME = 'বাংলাদেশ গেমস';
const COLOR = '#e74c3c';
const ICON = '🎮';

const categories = [
  {
    name: 'মোবাইল গেমস',
    items: [
      { name: 'Free Fire BD', web: 'https://www.freefire.gg' },
      { name: 'PUBG Mobile', web: 'https://www.pubgmobile.com' },
      { name: 'Call of Duty Mobile', web: 'https://www.callofduty.com/mobile' },
      { name: 'Mobile Legends', web: 'https://mobilelegends.com' },
      { name: 'Clash of Clans', web: 'https://clashofclans.com' },
      { name: 'Clash Royale', web: 'https://clashroyale.com' },
    ],
  },
  {
    name: 'বাংলাদেশি গেম স্টুডিও',
    items: [
      { name: 'Magnito Digital', web: 'https://www.magnetodigital.com' },
      { name: 'Kaz Software', web: 'https://kazsoftware.com' },
      { name: 'Brain Station 23', web: 'https://brainstation-23.com' },
      { name: 'Mirror World', web: 'https://mirrorworld.fun' },
    ],
  },
  {
    name: 'অনলাইন গেমিং প্ল্যাটফর্ম',
    items: [
      { name: 'Steam', web: 'https://store.steampowered.com' },
      { name: 'Epic Games', web: 'https://www.epicgames.com' },
      { name: 'Google Play Games', web: 'https://play.google.com/store/apps/category/GAME' },
      { name: 'App Store Games', web: 'https://apps.apple.com/us/genre/ios-games/id6014' },
    ],
  },
  {
    name: 'ই-স্পোর্টস বাংলাদেশ',
    items: [
      { name: 'Bangladesh Esports', web: 'https://escharts.com/organizations/bangladesh' },
      { name: 'BD Gamers', web: 'https://www.bdgamers.com' },
      { name: 'Esports BD', web: 'https://esportstourbd.com/' },
      { name: 'GameOn BD', web: 'https://gameonbd.com' },
    ],
  },
  {
    name: 'ক্যাজুয়াল গেমস',
    items: [
      { name: 'Ludo King', web: 'https://www.ludoking.com' },
      { name: 'Carrom Pool', web: 'https://www.miniclip.com/games/carrom-pool' },
      { name: 'Chess.com', web: 'https://www.chess.com' },
      { name: 'Candy Crush', web: 'https://www.king.com/game/candycrush' },
      { name: '8 Ball Pool', web: 'https://www.miniclip.com/games/8-ball-pool' },
    ],
  },
  {
    name: 'গেমিং নিউজ ও কমিউনিটি',
    items: [
      { name: 'BD Gaming News', web: 'https://www.bdgamingnews.com' },
      { name: 'Gamers BD Facebook', web: 'https://www.facebook.com/groups/gamersbd' },
      { name: 'IGN', web: 'https://www.ign.com' },
      { name: 'GameSpot', web: 'https://www.gamespot.com' },
    ],
  },
];

const BDGamesPortal = () => {
  const [selectedSub, setSelectedSub] = useState(categories[0]);
  if (!categories) return null;
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
        {categories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: '#c5a059', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`${PORTAL_NAME} - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default BDGamesPortal;