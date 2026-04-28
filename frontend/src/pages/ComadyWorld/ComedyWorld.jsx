import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#e91e63';
const ICON = '😂';
const PORTAL_NAME = 'Comedy World';

const categories = [
  {
    name: 'বাংলা কমেডি',
    items: [
      { name: 'মোশাররফ করিম', web: 'https://www.youtube.com/@MosharrafKarimOfficial' },
      { name: 'আহসান হাবিব নাসিম', web: 'https://www.youtube.com/@AhsanHabibNasim' },
      { name: 'চঞ্চল চৌধুরী', web: 'https://www.youtube.com/@ChanchalChowdhury' },
      { name: 'ইরফান সাজ্জাদ', web: 'https://www.youtube.com/@IrfanSajjad' },
      { name: 'তাওসিফ মাহবুব', web: 'https://www.youtube.com/@TawsifMahbub' },
    ],
  },
  {
    name: 'বাংলা ফানি ভিডিও',
    items: [
      { name: 'Bangla Funny TV', web: 'https://www.youtube.com/@BanglaFunnyTV' },
      { name: 'Matha Nosto', web: 'https://www.youtube.com/@MathanostoOfficial' },
      { name: 'Pagla Ghoda', web: 'https://www.youtube.com/@PaglaGhoda' },
      { name: 'Rofl Gandhi Bangla', web: 'https://www.youtube.com/@RoflGandhiBangla' },
    ],
  },
  {
    name: 'স্ট্যান্ড আপ কমেডি',
    items: [
      { name: 'Mukit Zakaria', web: 'https://www.youtube.com/@MukitZakaria' },
      { name: 'Comedy Club BD', web: 'https://www.youtube.com/@ComedyClubBD' },
      { name: 'Bangla Stand Up', web: 'https://www.youtube.com/@BanglaStandUp' },
    ],
  },
  {
    name: 'হিন্দি কমেডি',
    items: [
      { name: 'Kapil Sharma Show', web: 'https://www.youtube.com/@SonyLIV' },
      { name: 'BB Ki Vines', web: 'https://www.youtube.com/@BBKiVines' },
      { name: 'CarryMinati', web: 'https://www.youtube.com/@CarryMinati' },
      { name: 'Ashish Chanchlani', web: 'https://www.youtube.com/@ashishchanchlani' },
      { name: 'Amit Bhadana', web: 'https://www.youtube.com/@AmitBhadana' },
    ],
  },
  {
    name: 'ইন্টারন্যাশনাল কমেডি',
    items: [
      { name: 'MrBeast', web: 'https://www.youtube.com/@MrBeast' },
      { name: 'PewDiePie', web: 'https://www.youtube.com/@PewDiePie' },
      { name: 'Ryan Higa', web: 'https://www.youtube.com/@nigahiga' },
      { name: 'Lilly Singh', web: 'https://www.youtube.com/@IISuperwomanII' },
      { name: 'Just For Laughs', web: 'https://www.youtube.com/@JustForLaughs' },
    ],
  },
  {
    name: 'কমেডি মুভি',
    items: [
      { name: 'Netflix Comedy', web: 'https://www.netflix.com/bd/browse/genre/6548' },
      { name: 'Hoichoi Comedy', web: 'https://www.hoichoi.tv' },
      { name: 'Chorki Comedy', web: 'https://www.chorki.com' },
      { name: 'Binge BD', web: 'https://www.binge.buzz' },
    ],
  },
  {
    name: 'কমেডি পডকাস্ট',
    items: [
      { name: 'Roast Nation BD', web: 'https://www.youtube.com/@RoastNationBD' },
      { name: 'Rantages', web: 'https://www.youtube.com/@Rantages' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=bXg0ne6onBo&list=RDbXg0ne6onBo&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=qLicGgtHHPc&list=RDbXg0ne6onBo&index=7' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=SsO2mjSeM5U&list=RDbXg0ne6onBo&index=2' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=kDSkuOCyLL0&list=RDkDSkuOCyLL0&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=SCNGEuUAC8c&list=RDSCNGEuUAC8c&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=6iBlseVa66Q&list=RD6iBlseVa66Q&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=mVO-83NpH3c&list=RDmVO-83NpH3c&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=ojhGlFY6iAk&list=RDojhGlFY6iAk&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.co m/watch?v=5rYDsvkSbSE&list=RD5rYDsvkSbSE&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=6iBlseVa66Q&list=RD6iBlseVa66Q&start_radio=1' },
      { name: 'Local Song', web: 'https://www.youtube.com/watch?v=Ow0_yD6ZP44&list=RDOw0_yD6ZP44&start_radio=1' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },
      { name: 'Local Song', web: '' },

    ],
  },
];

const ComedyPortal = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {categories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: selectedSub?.name === sub.name ? '#fff' : '#c5a059',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              transition: 'background 0.2s',
            }}
          >
            {ICON} {sub.name}
          </button>
        ))}
      </div>

      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`${PORTAL_NAME} - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default ComedyPortal;