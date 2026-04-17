import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#9c27b0';
const ICON = '🎙️';

const subCategories = [
  {
    name: 'বাংলাদেশের বক্তা',
    items: [
      { name: 'মিজানুর রহমান আজহারী', web: 'https://www.youtube.com/@MizanurRahmanAzhari' },
      { name: 'ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর', web: 'https://www.youtube.com/@DrAbdullahJahangir' },
      { name: 'শায়েখ আহমাদুল্লাহ', web: 'https://www.youtube.com/@ShaykhAhmadullah' },
      { name: 'ড. মুহাম্মদ সাইফুল্লাহ', web: 'https://www.youtube.com/@DrMuhammadSaifullah' },
      { name: 'আব্দুর রাজ্জাক বিন ইউসুফ', web: 'https://www.youtube.com/@AbdurRazzakBinYusuf' },
    ],
  },
  {
    name: 'ভারতীয় বক্তা',
    items: [
      { name: 'ড. জাকির নায়েক', web: 'https://www.youtube.com/@DrZakirNaik' },
      { name: 'মাওলানা তারিক জামিল', web: 'https://www.youtube.com/@TariqJameel' },
      { name: 'মুফতি মেনক', web: 'https://www.youtube.com/@MuftiMenk' },
    ],
  },
  {
    name: 'ইসলামিক চ্যানেল',
    items: [
      { name: 'Peace TV Bangla', web: 'https://www.youtube.com/@PeaceTVBangla' },
      { name: 'Islamic Bangla TV', web: 'https://www.youtube.com/@IslamicBanglaTV' },
      { name: 'NTV Islamic', web: 'https://www.youtube.com/@NTVBangladesh' },
      { name: 'Ekhon TV Islamic', web: 'https://www.ekushey-tv.com' },
    ],
  },
  {
    name: 'নাশিদ / হামদ-নাত',
    items: [
      { name: 'Kalarab Shilpigosthi', web: 'https://www.youtube.com/@KalarabShilpigosthi' },
      { name: 'Raihan Bin Hasan', web: 'https://www.youtube.com/@RaihanBinHasan' },
      { name: 'Nasheed BD', web: 'https://www.youtube.com/@NasheedBD' },
    ],
  },
  {
    name: 'ওয়াজ মাহফিল ওয়েবসাইট',
    items: [
      { name: 'Waz.tv', web: 'https://waz.tv' },
      { name: 'Islamic Foundation BD', web: 'https://www.islamicfoundation.gov.bd' },
      { name: 'Hadith BD', web: 'https://www.hadithbd.com' },
    ],
  },
];

const WazPortal = () => {
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
              color: '#fff', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`ওয়াজ মাহফিল - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default WazPortal;