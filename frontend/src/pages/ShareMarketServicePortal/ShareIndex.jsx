import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#00bcd4';
const ICON = '📈';

const subCategories = [
  {
    name: 'এক্সচেঞ্জ ও নিয়ন্ত্রক সংস্থা',
    items: [
      { name: 'ঢাকা স্টক এক্সচেঞ্জ (DSE)', web: 'https://www.dse.com.bd' },
      { name: 'DSE লাইভ মার্কেট', web: 'https://www.dse.com.bd/latest_share_price.php' },
      { name: 'DSE মার্কেট নিউজ', web: 'https://www.dse.com.bd/market-news.php' },
      { name: 'চট্টগ্রাম স্টক এক্সচেঞ্জ (CSE)', web: 'https://www.cse.com.bd' },
      { name: 'বাংলাদেশ সিকিউরিটিজ কমিশন (BSEC)', web: 'https://www.sec.gov.bd' },
      { name: 'CDBL', web: 'https://www.cdbl.com.bd' },
      { name: 'Bangladesh Merchant Bankers Association', web: 'https://www.bmba.com.bd' },
    ],
  },
  
];

const ShareMarketPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`শেয়ার মার্কেট - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default ShareMarketPortal;