import React, { useState } from 'react';

const COLOR = '#e91e63';
const ICON = '🎭';
const PORTAL_NAME = 'BD Comedy Index';

const categories = [
  {
    name: 'বাংলাদেশী নাটক',
    items: [
      { name: 'মোশাররফ করিম নাটক', web: 'https://www.youtube.com/results?search_query=mosharraf+karim+natok' },
      { name: 'চঞ্চল চৌধুরী নাটক', web: 'https://www.youtube.com/results?search_query=chanchal+chowdhury+natok' },
      { name: 'আফরান নিশো নাটক', web: 'https://www.youtube.com/results?search_query=afran+nisho+natok' },
      { name: 'মেহজাবীন নাটক', web: 'https://www.youtube.com/results?search_query=mehjabin+chowdhury+natok' },
      { name: 'তাওসিফ নাটক', web: 'https://www.youtube.com/results?search_query=tawsif+mahbub+natok' },
      { name: 'সজল নোবেল নাটক', web: 'https://www.youtube.com/results?search_query=sojol+natok' },
    ],
  },
  {
    name: 'বাংলাদেশী কমেডি চ্যানেল',
    items: [
      { name: 'Matha Nosto', web: 'https://www.youtube.com/@MathanostoOfficial' },
      { name: 'Joker BD', web: 'https://www.youtube.com/results?search_query=joker+bd+comedy' },
      { name: 'Hasi Kanna BD', web: 'https://www.youtube.com/results?search_query=hasi+kanna+bd' },
      { name: 'Funny People BD', web: 'https://www.youtube.com/results?search_query=funny+people+bangladesh' },
      { name: 'BD Comedy Club', web: 'https://www.youtube.com/results?search_query=bd+comedy+club' },
    ],
  },
  {
    name: 'বাংলাদেশী সিনেমা',
    items: [
      { name: 'Hoichoi BD Movies', web: 'https://www.hoichoi.tv' },
      { name: 'Chorki Movies', web: 'https://www.chorki.com' },
      { name: 'Binge BD', web: 'https://www.binge.buzz' },
      { name: 'Bioscope', web: 'https://www.bioscope.tv' },
      { name: 'BD Films YouTube', web: 'https://www.youtube.com/results?search_query=bangladesh+movie+full' },
    ],
  },
  {
    name: 'ঈদ স্পেশাল নাটক',
    items: [
      { name: 'Eid Natok 2024', web: 'https://www.youtube.com/results?search_query=eid+special+natok+2024' },
      { name: 'Eid Comedy Natok', web: 'https://www.youtube.com/results?search_query=eid+comedy+natok+bangla' },
      { name: 'Eid Special Drama', web: 'https://www.youtube.com/results?search_query=eid+special+drama+bangla' },
      { name: 'Eid Telefilm', web: 'https://www.youtube.com/results?search_query=eid+telefilm+bangla' },
    ],
  },
  {
    name: 'বাংলাদেশী রোস্ট ও র‍্যাপ',
    items: [
      { name: 'Roast Nation BD', web: 'https://www.youtube.com/@RoastNationBD' },
      { name: 'Rantages', web: 'https://www.youtube.com/@Rantages' },
      { name: 'Bangladesh Roast', web: 'https://www.youtube.com/results?search_query=bangladesh+roast+bangla' },
      { name: 'BD Rap Comedy', web: 'https://www.youtube.com/results?search_query=bangla+rap+comedy' },
    ],
  },
  {
    name: 'বাংলাদেশী ভাইরাল ভিডিও',
    items: [
      { name: 'Viral BD Videos', web: 'https://www.youtube.com/results?search_query=viral+bd+funny+video' },
      { name: 'TikTok BD Funny', web: 'https://www.tiktok.com/search?q=bangladesh+funny' },
      { name: 'Facebook BD Funny', web: 'https://www.facebook.com/search/videos/?q=bangladesh+funny' },
      { name: 'Shorts BD Comedy', web: 'https://www.youtube.com/results?search_query=bangla+funny+shorts' },
    ],
  },
  {
    name: 'পুরনো বাংলা নাটক',
    items: [
      { name: 'BTV পুরনো নাটক', web: 'https://www.youtube.com/results?search_query=btv+old+natok' },
      { name: 'হুমায়ূন আহমেদ নাটক', web: 'https://www.youtube.com/results?search_query=humayun+ahmed+natok' },
      { name: 'মোস্তফা সরওয়ার নাটক', web: 'https://www.youtube.com/results?search_query=mostofa+sarwar+natok' },
      { name: 'আজিজুল হাকিম নাটক', web: 'https://www.youtube.com/results?search_query=azizul+hakim+natok' },
      { name: 'এটিএন বাংলা নাটক', web: 'https://www.youtube.com/results?search_query=atn+bangla+natok' },
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

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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

const BDComadyIndex = () => {
  const [selectedSub, setSelectedSub] = useState(categories[0]);

  return (
    <div>
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

export default BDComadyIndex;