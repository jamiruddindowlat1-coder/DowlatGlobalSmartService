import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#607d8b';
const ICON = '🌍';

const subCategories = [
  {
    name: 'বাংলা পত্রিকা',
    items: [
      { name: 'প্রথম আলো', web: 'https://www.prothomalo.com' },
      { name: 'কালের কণ্ঠ', web: 'https://www.kalerkantho.com' },
      { name: 'যুগান্তর', web: 'https://www.jugantor.com' },
      { name: 'সমকাল', web: 'https://www.samakal.com' },
      { name: 'ইত্তেফাক', web: 'https://www.ittefaq.com.bd' },
      { name: 'মানবজমিন', web: 'https://www.mzamin.com' },
      { name: 'নয়া দিগন্ত', web: 'https://www.dailynayadiganta.com' },
      { name: 'বাংলাদেশ প্রতিদিন', web: 'https://www.bd-pratidin.com' },
    ],
  },
  {
    name: 'ইংরেজি পত্রিকা (বাংলাদেশ)',
    items: [
      { name: 'The Daily Star', web: 'https://www.thedailystar.net' },
      { name: 'The Business Standard', web: 'https://www.tbsnews.net' },
      { name: 'Dhaka Tribune', web: 'https://www.dhakatribune.com' },
      { name: 'New Age Bangladesh', web: 'https://www.newagebd.net' },
      { name: 'The Financial Express BD', web: 'https://www.thefinancialexpress.com.bd' },
    ],
  },
  {
    name: 'ভারতীয় পত্রিকা',
    items: [
      { name: 'আনন্দবাজার পত্রিকা', web: 'https://www.anandabazar.com' },
      { name: 'দৈনিক জাগরণ', web: 'https://www.jagran.com' },
      { name: 'The Hindu', web: 'https://www.thehindu.com' },
      { name: 'Times of India', web: 'https://timesofindia.indiatimes.com' },
      { name: 'NDTV', web: 'https://www.ndtv.com' },
    ],
  },
  {
    name: 'আন্তর্জাতিক পত্রিকা',
    items: [
      { name: 'BBC News', web: 'https://www.bbc.com/news' },
      { name: 'Al Jazeera', web: 'https://www.aljazeera.com' },
      { name: 'Reuters', web: 'https://www.reuters.com' },
      { name: 'The Guardian', web: 'https://www.theguardian.com' },
      { name: 'CNN', web: 'https://edition.cnn.com' },
      { name: 'New York Times', web: 'https://www.nytimes.com' },
    ],
  },
  {
    name: 'আরবি পত্রিকা',
    items: [
      { name: 'Al Jazeera Arabic', web: 'https://www.aljazeera.net' },
      { name: 'Al Arabiya', web: 'https://www.alarabiya.net' },
      { name: 'Asharq Al-Awsat', web: 'https://aawsat.com' },
    ],
  },
  {
    name: 'অনলাইন নিউজ পোর্টাল',
    items: [
      { name: 'bdnews24.com', web: 'https://bdnews24.com' },
      { name: 'banglanews24.com', web: 'https://www.banglanews24.com' },
      { name: 'risingbd.com', web: 'https://www.risingbd.com' },
      { name: 'jagonews24.com', web: 'https://www.jagonews24.com' },
      { name: 'somoynews.tv', web: 'https://www.somoynews.tv' },
    ],
  },
];

const WorldNewsPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`বিশ্ব সংবাদপত্র - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default WorldNewsPortal;