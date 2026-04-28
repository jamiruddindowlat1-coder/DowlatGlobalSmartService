import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#ff5722';
const ICON = '🌍';

const subCategories = [
  {
    name: 'আন্তর্জাতিক সংবাদ',
    items: [
      { name: 'CNN Live', web: 'https://www.cnn.com/live-tv' },
      { name: 'BBC News Live', web: 'https://www.bbc.com/news/av/10462520' },
      { name: 'Al Jazeera Live', web: 'https://www.aljazeera.com/live' },
      { name: 'France 24 Live', web: 'https://www.france24.com/en/live-news' },
      { name: 'DW News Live', web: 'https://www.dw.com/en/live-tv/s-9837' },
      { name: 'Sky News Live', web: 'https://news.sky.com/watch-live' },
      { name: 'Euronews Live', web: 'https://www.euronews.com/live' },
      { name: 'Reuters Live', web: 'https://www.reuters.com/video/live' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },

  {
    name: 'স্পোর্টস চ্যানেল',
    items: [
      { name: 'Sky Sports', web: 'https://www.skysports.com/watch/sky-sports-live-stream' },
      { name: 'ESPN Live', web: 'https://www.espn.com/watch' },
      { name: 'Eurosport Live', web: 'https://www.eurosport.com/live' },
      { name: 'beIN Sports', web: 'https://www.beinsports.com/en/live' },
      { name: 'Sport24 Live', web: 'https://sport24.co.za/Live' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },

  {
    name: 'বিনোদন চ্যানেল',
    items: [
      { name: 'Sony Entertainment (SonyLIV)', web: 'https://www.sonyliv.com/channels' },
      { name: 'Zee TV Live', web: 'https://www.zee5.com/live-tv/details/zee-tv' },
      { name: 'Star Plus Live', web: 'https://www.hotstar.com/in/channels/star-plus' },
      { name: 'Colors TV Live', web: 'https://www.jiocinema.com/tv-channels/colors-tv' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },

  {
    name: 'মুভি চ্যানেল',
    items: [
      { name: 'Tubi TV (Free Movies)', web: 'https://tubitv.com/live' },
      { name: 'Pluto TV Movies', web: 'https://pluto.tv/live-tv/pluto-tv-movies' },
      { name: 'Peacock TV', web: 'https://www.peacocktv.com' },
      { name: 'The Roku Channel', web: 'https://therokuchannel.roku.com/live' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },

  {
    name: 'ডকুমেন্টারি',
    items: [
      { name: 'National Geographic', web: 'https://www.nationalgeographic.com/tv/shows' },
      { name: 'Discovery+', web: 'https://www.discoveryplus.com' },
      { name: 'CuriosityStream', web: 'https://curiositystream.com' },
      { name: 'Smithsonian Channel', web: 'https://www.smithsonianchannel.com' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },

  {
    name: 'ধর্মীয় চ্যানেল',
    items: [
      { name: 'Peace TV English', web: 'https://www.peacetv.tv/en-gb/live' },
      { name: 'Huda TV Live', web: 'https://www.huda.tv/live' },
      { name: 'EWTN Live', web: 'https://www.ewtn.com/tv/live' },
      { name: 'TBN Live', web: 'https://www.tbn.org/watch/live-tv' },
      { name: 'IslamChannel Live', web: 'https://www.islamchannel.tv/live' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },

  {
    name: 'লাইভ পোর্টাল',
    items: [
      { name: 'Pluto TV', web: 'https://pluto.tv/live-tv' },
      { name: 'Plex Live TV', web: 'https://watch.plex.tv/live-tv' },
      { name: 'Tubi TV', web: 'https://tubitv.com/live' },
      { name: 'Stirr Live', web: 'https://stirr.com/live' },
      { name: 'Xumo Play', web: 'https://www.xumo.com/xumo-play' },
      { name: 'Samsung TV Plus', web: 'https://www.samsungtvplus.com' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },
];

const BDTvIndex = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px'
      }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() =>
              setSelectedSub(selectedSub?.name === sub.name ? null : sub)
            }
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`🌍 World TV - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default BDTvIndex;