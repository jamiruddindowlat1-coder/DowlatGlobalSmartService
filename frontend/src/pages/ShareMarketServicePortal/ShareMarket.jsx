import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#00bcd4';
const ICON = '📈';

const subCategories = [
  {
    name: 'বাংলাদেশ শেয়ার বাজার',
    items: [
      { name: 'ঢাকা স্টক এক্সচেঞ্জ (DSE)', web: 'https://www.dse.com.bd' },
      { name: 'চট্টগ্রাম স্টক এক্সচেঞ্জ (CSE)', web: 'https://www.cse.com.bd' },
      { name: 'বাংলাদেশ সিকিউরিটিজ কমিশন (BSEC)', web: 'https://www.sec.gov.bd' },
      { name: 'CDBL', web: 'https://www.cdbl.com.bd' },
    ],
  },
  {
    name: 'ব্রোকারেজ হাউস',
    items: [
      { name: 'Lanka Bangla Securities', web: 'https://www.lankabangla.com' },
      { name: 'EBL Securities', web: 'https://www.eblsecurities.com' },
      { name: 'BRAC EPL Stock Brokerage', web: 'https://www.braceptb.com' },
      { name: 'ICB Securities', web: 'https://www.icb.gov.bd' },
      { name: 'MTB Securities', web: 'https://www.mtbsecurities.com.bd' },
    ],
  },
  {
    name: 'শেয়ার নিউজ',
    items: [
      { name: 'Share Business BD', web: 'https://www.sharebiz.net' },
      { name: 'The Business Standard Markets', web: 'https://www.tbsnews.net/economy/stocks' },
      { name: 'DSE Live Market', web: 'https://www.dse.com.bd/latest_share_price.php' },
    ],
  },
  {
    name: 'বিশ্ব শেয়ার বাজার',
    items: [
      { name: 'NYSE', web: 'https://www.nyse.com' },
      { name: 'NASDAQ', web: 'https://www.nasdaq.com' },
      { name: 'London Stock Exchange', web: 'https://www.londonstockexchange.com' },
      { name: 'Tokyo Stock Exchange', web: 'https://www.jpx.co.jp/english/' },
    ],
  },
  {
    name: 'ক্রিপ্টো কারেন্সি',
    items: [
      { name: 'Binance', web: 'https://www.binance.com' },
      { name: 'CoinMarketCap', web: 'https://coinmarketcap.com' },
      { name: 'CoinGecko', web: 'https://www.coingecko.com' },
      { name: 'Coinbase', web: 'https://www.coinbase.com' },
    ],
  },
  {
    name: 'বিনিয়োগ শিক্ষা',
    items: [
      { name: 'Investopedia', web: 'https://www.investopedia.com' },
      { name: 'Trading View', web: 'https://www.tradingview.com' },
      { name: 'Yahoo Finance', web: 'https://finance.yahoo.com' },
      { name: 'Google Finance', web: 'https://www.google.com/finance' },
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