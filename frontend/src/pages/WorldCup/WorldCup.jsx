import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#ffc107';
const ICON = '🏆';

const subCategories = [
  {
    name: 'ক্রিকেট',
    items: [
      { name: 'ICC Official', web: 'https://www.icc-cricket.com' },
      { name: 'BCB (Bangladesh)', web: 'https://www.tigercricket.com.bd' },
      { name: 'ESPN Cricinfo', web: 'https://www.espncricinfo.com' },
      { name: 'CricBuzz', web: 'https://www.cricbuzz.com' },
      { name: 'T20 World Cup', web: 'https://www.icc-cricket.com/tournaments/t20worldcup' },
    ],
  },
  {
    name: 'ফুটবল',
    items: [
      { name: 'FIFA Official', web: 'https://www.fifa.com' },
      { name: 'UEFA', web: 'https://www.uefa.com' },
      { name: 'Premier League', web: 'https://www.premierleague.com' },
      { name: 'La Liga', web: 'https://www.laliga.com' },
      { name: 'Bangladesh Football Federation', web: 'https://www.bff.com.bd' },
    ],
  },
  {
    name: 'অলিম্পিক',
    items: [
      { name: 'IOC Official', web: 'https://olympics.com' },
      { name: 'Bangladesh Olympic', web: 'https://www.bod.org.bd' },
      { name: 'Olympic Channel', web: 'https://www.olympicchannel.com' },
    ],
  },
  {
    name: 'টেনিস',
    items: [
      { name: 'ATP Tour', web: 'https://www.atptour.com' },
      { name: 'WTA', web: 'https://www.wtatennis.com' },
      { name: 'Wimbledon', web: 'https://www.wimbledon.com' },
      { name: 'US Open Tennis', web: 'https://www.usopen.org' },
    ],
  },
  {
    name: 'ব্যাডমিন্টন',
    items: [
      { name: 'BWF (Badminton World)', web: 'https://www.bwfbadminton.com' },
      { name: 'Bangladesh Badminton', web: 'https://www.badmintonbangladesh.com' },
    ],
  },
  {
    name: 'স্পোর্টস নিউজ',
    items: [
      { name: 'ESPN', web: 'https://www.espn.com' },
      { name: 'Sports BD', web: 'https://www.sportsbdnews.com' },
      { name: 'Prothom Alo Sports', web: 'https://www.prothomalo.com/sports' },
      { name: 'Daily Star Sports', web: 'https://www.thedailystar.net/sports' },
    ],
  },
];

const WorldCupPortal = () => {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {subCategories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: selectedSub?.name === sub.name ? '#000' : '#fff',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`ওয়ার্ল্ড কাপ / স্পোর্টস - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default WorldCupPortal;