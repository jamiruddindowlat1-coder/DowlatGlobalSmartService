import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#1565C0';
const ICON = '📈🌍';

const subCategories = [

  // ================= STOCK EXCHANGES =================
  {
    name: '🏦 World Stock Exchanges',
    items: [
      { name: 'New York Stock Exchange (NYSE)', web: 'https://www.nyse.com' },
      { name: 'NASDAQ (USA)', web: 'https://www.nasdaq.com' },
      { name: 'London Stock Exchange (LSE)', web: 'https://www.londonstockexchange.com' },
      { name: 'Tokyo Stock Exchange (TSE)', web: 'https://www.jpx.co.jp' },
      { name: 'Hong Kong Stock Exchange (HKEX)', web: 'https://www.hkex.com.hk' },
      { name: 'Shanghai Stock Exchange', web: 'http://www.sse.com.cn' },
      { name: 'Shenzhen Stock Exchange', web: 'http://www.szse.cn' },
      { name: 'Euronext', web: 'https://www.euronext.com' },
      { name: 'Toronto Stock Exchange (TSX)', web: 'https://www.tsx.com' },
      { name: 'Frankfurt Stock Exchange', web: 'https://www.deutsche-boerse.com' },
      { name: 'Swiss Exchange (SIX)', web: 'https://www.six-group.com' },
      { name: 'Australian Securities Exchange (ASX)', web: 'https://www2.asx.com.au' },
    ],
  },

  // ================= TRADING PLATFORMS =================
  {
    name: '💻 Online Trading Platforms',
    items: [
      { name: 'TradingView', web: 'https://www.tradingview.com' },
      { name: 'MetaTrader 4', web: 'https://www.metatrader4.com' },
      { name: 'MetaTrader 5', web: 'https://www.metatrader5.com' },
      { name: 'eToro', web: 'https://www.etoro.com' },
      { name: 'Robinhood', web: 'https://www.robinhood.com' },
      { name: 'Interactive Brokers', web: 'https://www.interactivebrokers.com' },
      { name: 'Fidelity', web: 'https://www.fidelity.com' },
      { name: 'TD Ameritrade', web: 'https://www.tdameritrade.com' },
    ],
  },

  // ================= CRYPTO =================
  {
    name: '₿ Crypto & Digital Markets',
    items: [
      { name: 'Binance', web: 'https://www.binance.com' },
      { name: 'Coinbase', web: 'https://www.coinbase.com' },
      { name: 'Kraken', web: 'https://www.kraken.com' },
      { name: 'KuCoin', web: 'https://www.kucoin.com' },
      { name: 'CoinMarketCap', web: 'https://coinmarketcap.com' },
      { name: 'CoinGecko', web: 'https://www.coingecko.com' },
    ],
  },

  // ================= FINANCIAL NEWS =================
  {
    name: '📰 Financial News & Analysis',
    items: [
      { name: 'Bloomberg', web: 'https://www.bloomberg.com' },
      { name: 'Reuters Finance', web: 'https://www.reuters.com/business/finance' },
      { name: 'Yahoo Finance', web: 'https://finance.yahoo.com' },
      { name: 'CNBC Markets', web: 'https://www.cnbc.com/markets' },
      { name: 'MarketWatch', web: 'https://www.marketwatch.com' },
    ],
  },

  // ================= INDICES =================
  {
    name: '📊 Global Market Indices',
    items: [
      { name: 'S&P 500', web: 'https://www.spglobal.com/spdji/en/indices/equity/sp-500/' },
      { name: 'Dow Jones Industrial Average', web: 'https://www.spglobal.com/spdji/en/indices/equity/dow-jones-industrial-average/' },
      { name: 'NASDAQ Composite', web: 'https://www.nasdaq.com/market-activity/index/comp' },
      { name: 'FTSE 100 (UK)', web: 'https://www.londonstockexchange.com/indices/ftse-100' },
      { name: 'Nikkei 225 (Japan)', web: 'https://www.jpx.co.jp' },
    ],
  },

];

const WorldShareIndex = () => {
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
          title={`📈 WORLD SHARE INDEX - ${selectedSub}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}

    </div>
  );
};

export default WorldShareIndex;