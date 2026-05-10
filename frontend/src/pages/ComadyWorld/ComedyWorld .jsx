import React, { useState } from 'react';

const COLOR = '#e91e63';
const ICON = '😂';
const PORTAL_NAME = 'Comedy World';

const categories = [
  {
    name: 'বাংলা কমেডি',
    items: [
      { name: 'মোশাররফ করিম', web: 'https://www.youtube.com/@MosharrafKarimOfficial' },
      { name: 'আহসান হাবিব নাসিম', web: 'https://www.youtube.com/@AhsanHabibNasim' },
      { name: 'চঞ্চল চৌধুরী', web: 'https://www.youtube.com/@ChanchalChowdhury' },
      { name: 'ইরফান সাজ্জাদ', web: 'https://www.youtube.com/@IrfanSajjad' },
      { name: 'তাওসিফ মাহবুব', web: 'https://www.youtube.com/@TawsifMahbub' },
    ],
  },
  {
    name: 'বাংলা ফানি ভিডিও',
    items: [
      { name: 'Bangla Funny TV', web: 'https://www.youtube.com/@BanglaFunnyTV' },
      { name: 'Matha Nosto', web: 'https://www.youtube.com/@MathanostoOfficial' },
      { name: 'Pagla Ghoda', web: 'https://www.youtube.com/@PaglaGhoda' },
      { name: 'Rofl Gandhi Bangla', web: 'https://www.youtube.com/@RoflGandhiBangla' },
    ],
  },
  {
    name: 'স্ট্যান্ড আপ কমেডি',
    items: [
      { name: 'Mukit Zakaria', web: 'https://www.youtube.com/@MukitZakaria' },
      { name: 'Comedy Club BD', web: 'https://www.youtube.com/@ComedyClubBD' },
      { name: 'Bangla Stand Up', web: 'https://www.youtube.com/@BanglaStandUp' },
    ],
  },
  {
    name: 'হিন্দি কমেডি',
    items: [
      { name: 'Kapil Sharma Show', web: 'https://www.youtube.com/@SonyLIV' },
      { name: 'BB Ki Vines', web: 'https://www.youtube.com/@BBKiVines' },
      { name: 'CarryMinati', web: 'https://www.youtube.com/@CarryMinati' },
      { name: 'Ashish Chanchlani', web: 'https://www.youtube.com/@ashishchanchlani' },
      { name: 'Amit Bhadana', web: 'https://www.youtube.com/@AmitBhadana' },
    ],
  },
  {
    name: 'ইন্টারন্যাশনাল কমেডি',
    items: [
      { name: 'MrBeast', web: 'https://www.youtube.com/@MrBeast' },
      { name: 'PewDiePie', web: 'https://www.youtube.com/@PewDiePie' },
      { name: 'Ryan Higa', web: 'https://www.youtube.com/@nigahiga' },
      { name: 'Lilly Singh', web: 'https://www.youtube.com/@IISuperwomanII' },
      { name: 'Just For Laughs', web: 'https://www.youtube.com/@JustForLaughs' },
    ],
  },
  {
    name: 'কমেডি মুভি',
    items: [
      { name: 'Netflix Comedy', web: 'https://www.netflix.com/bd/browse/genre/6548' },
      { name: 'Hoichoi Comedy', web: 'https://www.hoichoi.tv' },
      { name: 'Chorki Comedy', web: 'https://www.chorki.com' },
      { name: 'Binge BD', web: 'https://www.binge.buzz' },
    ],
  },
  {
    name: 'কমেডি পডকাস্ট',
    items: [
      { name: 'Roast Nation BD', web: 'https://www.youtube.com/@RoastNationBD' },
      { name: 'Rantages', web: 'https://www.youtube.com/@Rantages' },
    ],
  },
];

const ItemPanel = ({ items, title, color, icon, onClose }) => {
  return (
    <div
      style={{
        background: '#0d2137',
        border: `1px solid ${color}44`,
        borderRadius: '10px',
        padding: '14px',
      }}
    >
      {/* Panel Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
          }}
        >
          {icon} {title}
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#c5a059',
            cursor: 'pointer',
            fontSize: '18px',
            lineHeight: 1,
            padding: '0 4px',
          }}
        >
          ×
        </button>
      </div>

      {/* Items Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.web}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '7px 13px',
              background: '#1a3a5c',
              border: `1px solid ${color}55`,
              borderRadius: '6px',
              color: '#c5a059',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = color;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a3a5c';
              e.currentTarget.style.color = '#c5a059';
            }}
          >
            {item.name} ↗
          </a>
        ))}
      </div>
    </div>
  );
};

const ComedyWorld = () => {
  const [selectedSub, setSelectedSub] = useState(categories[0]);

  return (
    <div>
      {/* Category Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '16px',
          justifyContent: 'center',
        }}
      >
        {categories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: selectedSub?.name === sub.name ? '#fff' : '#c5a059',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              transition: 'background 0.2s',
            }}
          >
            {ICON} {sub.name}
          </button>
        ))}
      </div>

      {/* Item Panel */}
      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`${PORTAL_NAME} - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default ComedyWorld;