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
  {
    name: 'ব্রোকারেজ হাউস',
    items: [
      { name: 'Lanka Bangla Securities', web: 'https://www.lankabangla.com' },
      { name: 'EBL Securities', web: 'https://www.eblsecurities.com' },
      { name: 'ICB Securities', web: 'https://www.icb.gov.bd' },
      { name: 'IDLC Securities', web: 'https://www.idlcsecurities.com' },
      { name: 'Dhaka Bank Securities', web: 'https://www.dhakabanksecurities.com' },
      { name: 'Prime Bank Securities', web: 'https://www.primebankltd.com' },
      { name: 'IFIC Bank Securities', web: 'https://www.ificbankbd.com' },
      { name: 'Mercantile Bank Securities (MBS)', web: 'https://www.mbslbd.com' },
      { name: 'Standard Bank Securities', web: 'https://www.standardbankbd.com' },
      { name: 'Green Delta Securities', web: 'https://www.greendeltainsurance.com' },
      { name: 'CAPM Advisory', web: 'https://www.capmadvisory.com' },
    ],
  },
  {
    name: 'শেয়ার বাজার সংবাদ',
    items: [
      { name: 'শেয়ার বিজ', web: 'https://www.sharebiz.net' },
      { name: 'শেয়ারবাজার২৪', web: 'https://www.sharebazar24.com' },
      { name: 'অর্থসংবাদ', web: 'https://www.arthosongbad.com' },
      { name: 'অর্থনীতি প্রতিদিন', web: 'https://www.arthonitipratidin.com' },
      { name: 'Investors BD', web: 'https://www.investorsbd.com' },
      { name: 'Stocknow BD', web: 'https://www.stocknow.com.bd' },
      { name: 'Share Market BD', web: 'https://sharemarketbd.com' },
      { name: 'Fintech BD', web: 'https://www.fintechbd.com' },
      { name: 'Economy Today', web: 'https://www.theeconomytoday.com' },
      { name: 'Business Hour', web: 'https://www.businesshour24.com' },
      { name: 'TBS - শেয়ার বাজার', web: 'https://www.tbsnews.net/economy/stocks' },
      { name: 'প্রথম আলো ব্যবসা', web: 'https://www.prothomalo.com/business' },
      { name: 'Daily Star Business', web: 'https://www.thedailystar.net/business' },
      { name: 'Dhaka Tribune Business', web: 'https://www.dhakatribune.com/business' },
    ],
  },
];

const ShareMarketPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`শেয়ার মার্কেট - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default ShareMarketPortal;