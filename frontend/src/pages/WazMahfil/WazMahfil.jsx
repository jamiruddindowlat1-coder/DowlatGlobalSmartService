import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#9c27b0';
const ICON = '🎙️';

const subCategories = [
  {
    name: 'বাংলাদেশের বক্তা',
    items: [
      { name: 'মিজানুর রহমান আজহারী', web: 'মিজানুর রহমান আজহারী' },
      { name: 'ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর', web: 'https://www.youtube.com/@SunnahTrust' },
      { name: 'শায়েখ আহমাদুল্লাহ', web: 'https://www.youtube.com/playlist?list=PLMZF7_7cYxJ3wW0vuJpV_ErVSVqtLNZ7N' },
      { name: 'ড. মুহাম্মদ সাইফুল্লাহ', web: 'https://www.youtube.com/playlist?list=PL6JAmt5is1WooDR66WDd3BgV54ISNMhz1' },
      { name: 'আব্দুর রাজ্জাক বিন ইউসুফ', web: 'https://www.youtube.com/playlist?list=PLsJoplWpm4057Tzc9z9-o2xMuAm-Zcdm_' },
    ],
  },
  {
    name: 'ভারতীয় বক্তা',
    items: [
      { name: 'ড. জাকির নায়েক', web: 'https://www.youtube.com/playlist?list=PLeQ5W0c5New26HOieNyBJrsb-esIgzclh' },
      { name: 'মাওলানা তারিক জামিল', web: 'https://www.youtube.com/playlist?list=PLPr-YxEfVPOyE2durUB9PHdQZn9QRUGbd' },
      { name: 'মুফতি মেনক', web: 'https://www.youtube.com/@muftimenkofficial' },
    ],
  },
  {
    name: 'ইসলামিক চ্যানেল',
    items: [
      { name: 'Peace TV Bangla', web: 'https://www.peacetv.tv/en/live-tv?live-channel=169572' },
      { name: 'Islamic Bangla TV', web: 'https://islamchannelbangla.tv/' },
      { name: 'NTV Islamic', web: 'https://www.youtube.com/c/NTVIslamicShow' },
      { name: 'Ekhon TV Islamic', web: 'https://www.youtube.com/@ekhontv' },
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
      { name: 'Waz.tv', web: 'https://www.youtube.com/c/WazTV' },
      { name: 'Islamic Foundation BD', web: 'https://islamicfoundation.gov.bd/' },
      { name: 'Hadith BD', web: 'https://www.hadithbd.com/hadith/filter/type/all/?pageNum_mainHadith=1672&totalRows_mainHadith=66336&type=1' },
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