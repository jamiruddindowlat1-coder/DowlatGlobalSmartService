import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#4caf50';
const ICON = '📖';

const subCategories = [
  {
    name: 'বুখারী শরীফ',
    items: [
      { name: 'সহীহ বুখারী (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=12' },
      { name: 'Sahih Bukhari (English)', web: 'https://sunnah.com/bukhari' },
      { name: 'Bukhari Hadith App', web: 'https://www.google.com/search?q=Bukhari+Hadith+App&sca_esv=d758520d8deb50f9&sxsrf=ANbL-n7oz34at5O8rmBKPzH7IB6PNudfYA%3A1777521762364&ei=YtTyaav5FbKhseMPqs-80Qc&biw=1366&bih=641&ved=0ahUKEwirsufJ2JSUAxWyUGwGHaonL3oQ4dUDCBE&uact=5&oq=Bukhari+Hadith+App&gs_lp=Egxnd3Mtd2l6LXNlcnAiEkJ1a2hhcmkgSGFkaXRoIEFwcDIFEAAYgAQyBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyBRAAGO8FMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FSNELUNkIWNkIcAF4A5ABAJgBqgGgAaoBqgEDMC4xuAEDyAEA-AEC-AEBmAIEoALOAcICBBAAGEfCAgcQIxiwAxgnwgIKEAAYRxjWBBiwA8ICDhAAGOQCGNYEGLAD2AEBwgIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQGYAwCIBgGQBhC6BgYIARABGAmSBwMzLjGgB5oHsgcDMC4xuAe4AcIHBTItMi4yyAcegAgB&sclient=gws-wiz-serp' },
    ],
  },
  {
    name: 'মুসলিম শরীফ',
    items: [
      { name: 'সহীহ মুসলিম (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=12https://www.hadithbd.com/muslim/' },
      { name: 'Sahih Muslim (English)', web: 'https://sunnah.com/muslim' },
      { name: 'Muslim Sharif App', web: 'https://www.google.com/search?q=Bukhari+Hadith+App&sca_esv=d758520d8deb50f9&sxsrf=ANbL-n7oz34at5O8rmBKPzH7IB6PNudfYA%3A1777521762364&ei=YtTyaav5FbKhseMPqs-80Qc&biw=1366&bih=641&ved=0ahUKEwirsufJ2JSUAxWyUGwGHaonL3oQ4dUDCBE&uact=5&oq=Bukhari+Hadith+App&gs_lp=Egxnd3Mtd2l6LXNlcnAiEkJ1a2hhcmkgSGFkaXRoIEFwcDIFEAAYgAQyBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyBRAAGO8FMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FSNELUNkIWNkIcAF4A5ABAJgBqgGgAaoBqgEDMC4xuAEDyAEA-AEC-AEBmAIEoALOAcICBBAAGEfCAgcQIxiwAxgnwgIKEAAYRxjWBBiwA8ICDhAAGOQCGNYEGLAD2AEBwgIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQGYAwCIBgGQBhC6BgYIARABGAmSBwMzLjGgB5oHsgcDMC4xuAe4AcIHBTItMi4yyAcegAgB&sclient=gws-wiz-serp' },
    ],
  },
  {
    name: 'তিরমিযী শরীফ',
    items: [
      { name: 'জামে তিরমিযী (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=11' },
      { name: 'Tirmidhi (English)', web: 'https://sunnah.com/tirmidhi' },
    ],
  },
  {
    name: 'আবু দাউদ',
    items: [
      { name: 'সুনানে আবু দাউদ (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=4' },
      { name: 'Abu Dawud (English)', web: 'https://sunnah.com/abudawud' },
    ],
  },
  {
    name: 'ইবনে মাজাহ',
    items: [
      { name: 'সুনানে ইবনে মাজাহ (বাংলা)', web: 'https://www.hadithbd.com/hadith/sections/?book=9' },
      { name: 'Ibn Majah (English)', web: 'https://sunnah.com/ibnmajah' },
    ],
  },
  {
    name: 'নাসাঈ শরীফ',
    items: [
      { name: 'সুনানে নাসাঈ (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=6' },
      { name: 'Nasai (English)', web: 'https://sunnah.com/nasai' },
    ],
  },
  {
    name: 'রিয়াদুস সালেহীন',
    items: [
      { name: 'রিয়াদুস সালেহীন (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=3' },
      { name: 'Riyad as-Salihin (English)', web: 'https://sunnah.com/riyadussalihin' },
    ],
  },
  {
    name: 'মিশকাত শরীফ',
    items: [
      { name: 'মিশকাতুল মাসাবীহ (বাংলা)', web: 'https://www.hadithbd.com/hadith/sections/?book=24' },
      { name: 'Mishkat al-Masabih (English)', web: 'https://sunnah.com/mishkat' },
    ],
  },
  {
    name: 'মুয়াত্তা মালিক',
    items: [
      { name: 'মুয়াত্তা মালিক (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=29' },
      { name: 'Muwatta Malik (English)', web: 'https://sunnah.com/malik' },
    ],
  },
  {
    name: 'মুসনাদে আহমাদ',
    items: [
      { name: 'মুসনাদে আহমাদ (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=26' },
      { name: 'Musnad Ahmad (English)', web: 'https://sunnah.com/ahmad' },
    ],
  },
  {
    name: 'দারেমী শরীফ',
    items: [
      { name: 'সুনানে দারেমী (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=21' },
      { name: 'Sunan al-Darimi (English)', web: 'https://sunnah.com/darimi' },
    ],
  },
  {
    name: 'আদাবুল মুফরাদ',
    items: [
      { name: 'আদাবুল মুফরাদ (বাংলা)', web: 'https://www.hadithbd.com/hadith/sections/?book=20' },
      { name: "Al-Adab Al-Mufrad (English)", web: 'https://sunnah.com/adab' },
    ],
  },
  {
    name: 'শামায়েলে তিরমিযী',
    items: [
      { name: 'শামায়েলে তিরমিযী (বাংলা)', web: 'https://www.hadithbd.com/hadith/chapter/?book=23' },
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
      { name: 'Quran & Hadith (Al-Islam)', web: 'https://al-islam.org/forty-hadith-noble-quran-majid-adili/ahadith-traditions' },
      { name: 'SearchTruth Hadith', web: 'https://www.searchtruth.com/hadith.php' },
      { name: 'IslamHouse Hadith', web: 'https://islamhouse.com/en/cat/296' },
      { name: 'iSunnah', web: 'https://sunnah.com/' },
    ],
  },
];

const HadithPortal = () => {
  const [selectedSub, setSelectedSub] = useState(subCategories[0]);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
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