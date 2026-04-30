import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#009688';
const ICON = '✈️';

const subCategories = [
  {
    name: 'বাংলাদেশ ট্যুরিস্ট স্পট',
    items: [
      { name: 'কক্সবাজার সমুদ্র সৈকত', web: 'https://www.coxsbazar.gov.bd' },
      { name: 'সুন্দরবন', web: 'https://www.sundarbansnationalpark.com' },
      { name: 'সেন্ট মার্টিন দ্বীপ', web: 'https://parjatan.gov.bd/pages/static-pages/6922de57933eb65569e19fc6' },
      { name: 'বান্দরবান', web: 'https://www.bandarban.gov.bd' },
      { name: 'রাঙামাটি', web: 'https://www.rangamati.gov.bd' },
      { name: 'সাজেক ভ্যালি', web: 'https://vromonguide.com/place/sajek-valley' },
      { name: 'কুয়াকাটা', web: 'https://parjatan.gov.bd/pages/static-pages/6922dca2933eb65569e115f8https://www.bangladeshtourism.gov.bd' },
      { name: 'পাহাড়পুর বৌদ্ধ বিহার', web: 'https://parjatan.gov.bd/pages/static-pages/6922de28933eb65569e18a0a' },
    ],
  },
  {
    name: 'বিমান টিকেট',
    items: [
      { name: 'Biman Bangladesh Airlines', web: 'https://www.biman-airlines.com' },
      { name: 'US-Bangla Airlines', web: 'https://www.usbair.com' },
      { name: 'Novoair', web: 'https://www.flynovoair.com' },
      { name: 'Air Astra', web: 'https://www.airastra.com' },
    ],
  },
  {
    name: 'হোটেল বুকিং',
    items: [
      { name: 'Booking.com', web: 'https://www.booking.com' },
      { name: 'Agoda', web: 'https://www.agoda.com' },
      { name: 'Hotels.com', web: 'https://www.hotels.com' },
      { name: 'Shohoz Hotels', web: 'https://www.shohoz.com/holiday-packages/package?documentId=vu48hxye5p3edyf71qgci4jc' },
      { name: 'GoZayaan', web: 'https://www.gozayaan.com' },
    ],
  },
  {
    name: 'ট্যুর প্যাকেজ',
    items: [
      { name: 'Bangladesh Tourism Board', web: 'https://tourismboard.gov.bd/' },
      { name: 'Guide Tour BD', web: 'https://tourguidebd.com/' },
      { name: 'Bengal Tours', web: 'https://www.bengaltours.com' },
      { name: 'Truly Holidays', web: 'https://www.facebook.com/TrulyYoursHols/' },
    ],
  },
  {
    name: 'ভিসা তথ্য',
    items: [
      { name: 'বাংলাদেশ ইমিগ্রেশন', web: 'https://dip.gov.bd/' },
      { name: 'ই-পাসপোর্ট', web: 'https://www.epassport.gov.bd' },
      { name: 'ভারতীয় ভিসা', web: 'https://www.ivacbd.com' },
    ],
  },
  {
    name: 'বিশ্ব পর্যটন',
    items: [
      { name: 'TripAdvisor', web: 'https://www.tripadvisor.com' },
      { name: 'Lonely Planet', web: 'https://www.lonelyplanet.com' },
      { name: 'Airbnb', web: 'https://www.airbnb.com' },
      { name: 'Expedia', web: 'https://www.expedia.com' },
    ],
  },
];

const TouristPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`পর্যটন - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default TouristPortal;