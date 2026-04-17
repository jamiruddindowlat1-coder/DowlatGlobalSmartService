import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#009688';
const ICON = '🌍';

const subCategories = [
  {
    name: 'World Famous Tourist Spots',
    items: [
      { name: 'Eiffel Tower (France)', web: 'https://www.toureiffel.paris' },
      { name: 'Great Wall of China', web: 'https://www.travelchina.org.cn' },
      { name: 'Taj Mahal (India)', web: 'https://www.tajmahal.gov.in' },
      { name: 'Statue of Liberty (USA)', web: 'https://www.nps.gov/stli' },
      { name: 'Colosseum (Italy)', web: 'https://parcocolosseo.it' },
      { name: 'Machu Picchu (Peru)', web: 'https://www.peru.travel' },
      { name: 'Burj Khalifa (Dubai)', web: 'https://www.burjkhalifa.ae' },
      { name: 'Santorini (Greece)', web: 'https://www.visitgreece.gr' },
      { name: 'Petra (Jordan)', web: 'https://www.visitpetra.jo' },
      { name: 'Niagara Falls (Canada/USA)', web: 'https://www.niagarafallsstatepark.com' },
    ],
  },
  {
    name: 'Top Travel Destinations',
    items: [
      { name: 'Paris, France', web: 'https://en.parisinfo.com' },
      { name: 'Rome, Italy', web: 'https://www.turismoroma.it' },
      { name: 'Dubai, UAE', web: 'https://www.visitdubai.com' },
      { name: 'Bali, Indonesia', web: 'https://www.indonesia.travel' },
      { name: 'Maldives', web: 'https://www.visitmaldives.com' },
      { name: 'Tokyo, Japan', web: 'https://www.gotokyo.org' },
      { name: 'New York City, USA', web: 'https://www.nycgo.com' },
    ],
  },
];

const TuristScenariousIndex = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
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
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              transition: 'background 0.2s',
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`🌍 ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default TuristScenariousIndex;