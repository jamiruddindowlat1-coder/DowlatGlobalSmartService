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
      { name: 'আহসান হাবিব নাসিম', web: 'https://www.google.com/search?q=%E0%A6%86%E0%A6%B9%E0%A6%B8%E0%A6%BE%E0%A6%A8+%E0%A6%B9%E0%A6%BE%E0%A6%AC%E0%A6%BF%E0%A6%AC+%E0%A6%A8%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%AE+komedy&sca_esv=e33a3bf4f77af5c0&biw=1366&bih=641&sxsrf=ANbL-n7pBd4ipP_ih0fW2l_dX4kB1hNNNg%3A1777509968576&ei=UKbyaZbnIoORseMPqLj7qA4&ved=0ahUKEwiWz4vSrJSUAxWDSGwGHSjcHuUQ4dUDCBE&uact=5&oq=%E0%A6%86%E0%A6%B9%E0%A6%B8%E0%A6%BE%E0%A6%A8+%E0%A6%B9%E0%A6%BE%E0%A6%AC%E0%A6%BF%E0%A6%AC+%E0%A6%A8%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%AE+komedy&gs_lp=Egxnd3Mtd2l6LXNlcnAiNuCmhuCmueCmuOCmvuCmqCDgprngpr7gpqzgpr_gpqwg4Kao4Ka-4Ka44Ka_4KauIGtvbWVkeTIFEAAY7wUyBRAAGO8FMgUQABjvBTIFEAAY7wUyBRAAGO8FSKo8UOUMWNYvcAF4AJABAJgBvQGgAYMIqgEDMC43uAEDyAEA-AEBmAIIoALWCMICChAuGIAEGBMYsAPCAgsQABgHGB4YExiwA8ICCxAAGIAEGKIEGLADwgIIEAAY7wUYsAPCAgYQABgWGB7CAggQABiABBiiBJgDAIgGAZAGB5IHAzEuN6AHpRWyBwMwLje4B9AIwgcFMi01LjPIBz6ACAE&sclient=gws-wiz-serp#fpstate=ive&vld=cid:03156c2f,vid:V4t5VIvxu9k,st:0' },
      { name: 'চঞ্চল চৌধুরী', web: 'https://www.youtube.com/playlist?list=PLpNyRjoDnleQyBG7KK_k81391ivGWu_XV' },
      { name: 'ইরফান সাজ্জাদ', web: 'https://www.youtube.com/watch?v=5MtLmw8if8o' },
      { name: 'তাওসিফ মাহবুব', web: 'https://www.youtube.com/watch?v=MDjdO4ydl8k' },
    ],
  },
  {
    name: 'বাংলা ফানি ভিডিও',
    items: [
      { name: 'Bangla Funny TV', web: 'https://www.youtube.com/@BanglaFunnyTV' },
      { name: 'Matha Nosto', web: 'https://www.youtube.com/@MathanostoOfficial' },
      { name: 'Pagla Ghoda', web: 'https://www.youtube.com/@PaglaGhoda' },
      { name: 'Rofl Gandhi Bangla', web: 'https://www.youtube.com/watch?v=YYR7wznAUbk' },
    ],
  },
  {
    name: 'স্ট্যান্ড আপ কমেডি',
    items: [
      { name: 'Mukit Zakaria', web: 'https://www.youtube.com/watch?v=fjGZLeug_Ek' },
      { name: 'Comedy Club BD', web: 'https://www.youtube.com/@ComedyClubBD' },
      { name: 'Bangla Stand Up', web: 'https://www.youtube.com/watch?v=VZVyIUv9Gho' },
    ],
  },
  {
    name: 'হিন্দি কমেডি',
    items: [
      { name: 'Kapil Sharma Show', web: 'https://www.youtube.com/@SonyLIV' },
      { name: 'BB Ki Vines', web: 'https://www.youtube.com/@BBKiVines' },
      { name: 'CarryMinati', web: 'https://www.youtube.com/@CarryMinati' },
      { name: 'Ashish Chanchlani', web: 'https://www.youtube.com/channel/UC7eHZXheF8nVOfwB2PEslMw' },
      { name: 'Amit Bhadana', web: 'https://www.youtube.com/@AmitBhadana' },
    ],
  },
  {
    name: 'ইন্টারন্যাশনাল কমেডি',
    items: [
      { name: 'MrBeast', web: 'https://www.youtube.com/@MrBeast' },
      { name: 'PewDiePie', web: 'https://www.youtube.com/@PewDiePie' },
      { name: 'Ryan Higa', web: 'https://www.youtube.com/watch?v=SL0MXAfAVdU' },
      { name: 'Lilly Singh', web: 'https://www.youtube.com/channel/UCfm4y4rHF5HGrSr-qbvOwOg' },
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
      { name: 'Manush jonmer pore', web: 'https://www.youtube.com/watch?v=bXg0ne6onBo&list=RDbXg0ne6onBo&start_radio=1' },
      { name: 'Ek sekend er nai vorosha', web: 'https://www.youtube.com/watch?v=qLicGgtHHPc&list=RDbXg0ne6onBo&index=7' },
      { name: 'Doyal tomar ajob lila', web: 'https://www.youtube.com/watch?v=SsO2mjSeM5U&list=RDbXg0ne6onBo&index=2' },
      { name: 'Keo robena chirodin', web: 'https://www.youtube.com/watch?v=kDSkuOCyLL0&list=RDkDSkuOCyLL0&start_radio=1' },
      { name: 'Polash Futeche', web: 'https://www.youtube.com/watch?v=SCNGEuUAC8c&list=RDSCNGEuUAC8c&start_radio=1' },
      { name: 'Local Song', web: '' },
      { name: 'Sei meyati', web: 'https://www.youtube.com/w atch?v=mVO-83NpH3c&list=RDmVO-83NpH3c&start_radio=1' },
      { name: 'keno ei nishongata', web: 'https://www.youtube.com/watch?v=ojhGlFY6iAk&list=RDojhGlFY6iAk&start_radio=1' },
      { name: 'Local Song', web: '' },
      { name: 'Tomi Roz bikele', web: 'https://www.youtube.com/watch?v=6iBlseVa66Q&list=RD6iBlseVa66Q&start_radio=1' },
      { name: 'Tomare legche eto valo', web: 'https://www.youtube.com/watch?v=Ow0_yD6ZP44&list=RDOw0_yD6ZP44&start_radio=1' },
      { name: 'Chineci Chinechi', web: 'https://www.youtube.com/watch?v=bHIGLDTPoyM&list=RDbHIGLDTPoyM&start_radio=1' },
      { name: 'O Amar mon Jamuna', web: 'https://www.youtube.com/watch?v=vMm7eeMdmQs&list=RDvMm7eeMdmQs&start_radio=1' },
      { name: 'akash eto meghla', web: 'https://www.youtube.com/watch?v=yF_iOZMIFT4&list=RDyF_iOZMIFT4&start_radio=1' },
      { name: 'Ei meghla dine ekla', web: 'https://www.youtube.com/watch?v=aFEPYpcmkEM&list=RDaFEPYpcmkEM&start_radio=1' },
      { name: 'Ado alo chayate', web: 'https://www.youtube.com/watch?v=tBfSnLqnJ0U&list=RDtBfSnLqnJ0U&start_radio=1' },
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