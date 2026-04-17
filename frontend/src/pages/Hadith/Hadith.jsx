import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#4caf50';
const ICON = '📖';

const subCategories = [
  {
    name: 'বুখারী শরীফ',
    items: [
      { name: 'সহীহ বুখারী (বাংলা)', web: 'https://www.hadithbd.com/bukhari/' },
      { name: 'Sahih Bukhari (English)', web: 'https://sunnah.com/bukhari' },
      { name: 'Bukhari Hadith App', web: 'https://play.google.com/store/apps/details?id=com.shariahprogram.al_bukhari' },
    ],
  },
  {
    name: 'মুসলিম শরীফ',
    items: [
      { name: 'সহীহ মুসলিম (বাংলা)', web: 'https://www.hadithbd.com/muslim/' },
      { name: 'Sahih Muslim (English)', web: 'https://sunnah.com/muslim' },
      { name: 'Muslim Sharif App', web: 'https://play.google.com/store/apps/details?id=com.shariahprogram.al_muslim' },
    ],
  },
  {
    name: 'তিরমিযী শরীফ',
    items: [
      { name: 'জামে তিরমিযী (বাংলা)', web: 'https://www.hadithbd.com/tirmizi/' },
      { name: 'Tirmidhi (English)', web: 'https://sunnah.com/tirmidhi' },
    ],
  },
  {
    name: 'আবু দাউদ',
    items: [
      { name: 'সুনানে আবু দাউদ (বাংলা)', web: 'https://www.hadithbd.com/abudaud/' },
      { name: 'Abu Dawud (English)', web: 'https://sunnah.com/abudawud' },
    ],
  },
  {
    name: 'ইবনে মাজাহ',
    items: [
      { name: 'সুনানে ইবনে মাজাহ (বাংলা)', web: 'https://www.hadithbd.com/ibnmajah/' },
      { name: 'Ibn Majah (English)', web: 'https://sunnah.com/ibnmajah' },
    ],
  },
  {
    name: 'নাসাঈ শরীফ',
    items: [
      { name: 'সুনানে নাসাঈ (বাংলা)', web: 'https://www.hadithbd.com/nasai/' },
      { name: 'Nasai (English)', web: 'https://sunnah.com/nasai' },
    ],
  },
  {
    name: 'রিয়াদুস সালেহীন',
    items: [
      { name: 'রিয়াদুস সালেহীন (বাংলা)', web: 'https://www.hadithbd.com/riyadussalihin/' },
      { name: 'Riyad as-Salihin (English)', web: 'https://sunnah.com/riyadussalihin' },
    ],
  },
  {
    name: 'মিশকাত শরীফ',
    items: [
      { name: 'মিশকাতুল মাসাবীহ (বাংলা)', web: 'https://www.hadithbd.com/mishkat/' },
      { name: 'Mishkat al-Masabih (English)', web: 'https://sunnah.com/mishkat' },
    ],
  },
  {
    name: 'মুয়াত্তা মালিক',
    items: [
      { name: 'মুয়াত্তা মালিক (বাংলা)', web: 'https://www.hadithbd.com/muwatta/' },
      { name: 'Muwatta Malik (English)', web: 'https://sunnah.com/malik' },
    ],
  },
  {
    name: 'মুসনাদে আহমাদ',
    items: [
      { name: 'মুসনাদে আহমাদ (বাংলা)', web: 'https://www.hadithbd.com/ahmad/' },
      { name: 'Musnad Ahmad (English)', web: 'https://sunnah.com/ahmad' },
    ],
  },
  {
    name: 'দারেমী শরীফ',
    items: [
      { name: 'সুনানে দারেমী (বাংলা)', web: 'https://www.hadithbd.com/darimi/' },
      { name: 'Sunan al-Darimi (English)', web: 'https://sunnah.com/darimi' },
    ],
  },
  {
    name: 'আদাবুল মুফরাদ',
    items: [
      { name: 'আদাবুল মুফরাদ (বাংলা)', web: 'https://www.hadithbd.com/adabulmufrad/' },
      { name: "Al-Adab Al-Mufrad (English)", web: 'https://sunnah.com/adab' },
    ],
  },
  {
    name: 'শামায়েলে তিরমিযী',
    items: [
      { name: 'শামায়েলে তিরমিযী (বাংলা)', web: 'https://www.hadithbd.com/shamailtirimizi/' },
      { name: 'Shamail al-Tirmidhi (English)', web: 'https://sunnah.com/shamail' },
    ],
  },
  {
    name: 'হাদিস অ্যাপ ও সাইট',
    items: [
      { name: 'Hadith BD', web: 'https://www.hadithbd.com' },
      { name: 'Sunnah.com', web: 'https://sunnah.com' },
      { name: 'IslamicFinder Hadith', web: 'https://www.islamicfinder.org/hadith/' },
      { name: 'HadithCollection.com', web: 'https://www.hadithcollection.com' },
      { name: 'Quran & Hadith (Al-Islam)', web: 'https://www.al-islam.org/hadith' },
      { name: 'SearchTruth Hadith', web: 'https://www.searchtruth.com/hadith.php' },
      { name: 'IslamHouse Hadith', web: 'https://islamhouse.com/en/cat/296' },
      { name: 'iSunnah', web: 'https://www.isunnah.net' },
    ],
  },
];

const HadithPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`হাদিস - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default HadithPortal;