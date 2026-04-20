import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#0D47A1';
const ICON = '📰📈';

const subCategories = [

  // ================= GLOBAL FINANCIAL NEWS =================
  {
    name: '🌍 Global Financial News',
    items: [
      { name: 'Bloomberg', web: 'https://www.bloomberg.com' },
      { name: 'Reuters Business', web: 'https://www.reuters.com/business' },
      { name: 'CNBC Markets', web: 'https://www.cnbc.com/markets' },
      { name: 'Yahoo Finance', web: 'https://finance.yahoo.com' },
      { name: 'MarketWatch', web: 'https://www.marketwatch.com' },
      { name: 'Financial Times', web: 'https://www.ft.com' },
      { name: 'Wall Street Journal', web: 'https://www.wsj.com' },
      { name: 'Forbes Markets', web: 'https://www.forbes.com/markets' },
      { name: 'Investing.com', web: 'https://www.investing.com' },
      { name: 'Seeking Alpha', web: 'https://seekingalpha.com' },
    ],
  },

  // ================= STOCK MARKET DATA NEWS =================
  {
    name: '📊 Market Data & Analysis',
    items: [
      { name: 'TradingView News', web: 'https://www.tradingview.com/news/' },
      { name: 'MarketWatch Analysis', web: 'https://www.marketwatch.com/tools/markets' },
      { name: 'Yahoo Finance News', web: 'https://finance.yahoo.com/news/' },
      { name: 'Investopedia Markets', web: 'https://www.investopedia.com/markets/' },
    ],
  },

  // ================= INDICES & GLOBAL UPDATES =================
  {
    name: '📈 Global Index Updates',
    items: [
      { name: 'S&P Global', web: 'https://www.spglobal.com' },
      { name: 'Dow Jones Market Data', web: 'https://www.spglobal.com/spdji/en/' },
      { name: 'NASDAQ News', web: 'https://www.nasdaq.com/news' },
      { name: 'FTSE Russell', web: 'https://www.ftserussell.com' },
      { name: 'Nikkei Asia', web: 'https://asia.nikkei.com' },
    ],
  },

  // ================= ECONOMIC NEWS =================
  {
    name: '🌐 Global Economy News',
    items: [
      { name: 'World Economic Forum', web: 'https://www.weforum.org' },
      { name: 'IMF News', web: 'https://www.imf.org/en/News' },
      { name: 'World Bank News', web: 'https://www.worldbank.org/en/news' },
      { name: 'OECD Economic Outlook', web: 'https://www.oecd.org/economic-outlook/' },
    ],
  },

  // ================= CRYPTO NEWS =================
  {
    name: '₿ Crypto Market News',
    items: [
      { name: 'CoinDesk', web: 'https://www.coindesk.com' },
      { name: 'CoinTelegraph', web: 'https://cointelegraph.com' },
      { name: 'CryptoNews', web: 'https://cryptonews.com' },
      { name: 'Bitcoin.com News', web: 'https://news.bitcoin.com' },
    ],
  },

];

const WorldShareNews = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() =>
              setSelectedSub(prev => prev === sub.name ? null : sub.name)
            }
            style={{
              padding: '8px 14px',
              background: selectedSub === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Panel */}
      {selectedSub && (
        <ItemPanel
          items={subCategories.find(s => s.name === selectedSub)?.items || []}
          title={`📰 WORLD SHARE NEWS - ${selectedSub}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}

    </div>
  );
};

export default WorldShareNews;