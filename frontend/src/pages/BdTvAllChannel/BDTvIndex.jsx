import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#1a73e8';
const ICON = '📺';

const subCategories = [
  {
    name: 'সরকারি চ্যানেল',
    items: [
      { name: 'BTV National Live', web: 'https://www.jagobd.com/btvnational' },
      { name: 'BTV Chittagong Live', web: 'https://www.jagobd.com/btv-chittagong' },
      { name: 'BTV News Live', web: 'https://www.jagobd.com/btvnews' },
      { name: 'Sangsad TV Live', web: 'https://www.youtube.com/@SangsadTelevision/live' },
    ],
  },
  {
    name: 'বিনোদন চ্যানেল',
    items: [
      { name: 'ATN Bangla Live', web: 'https://www.jagobd.com/atn-bangla' },
      { name: 'Channel i Live', web: 'https://www.jagobd.com/channeli' },
      { name: 'NTV Live', web: 'https://www.youtube.com/@ntvbd/live' },
      { name: 'RTV Live', web: 'https://www.youtube.com/@rtvonline/live' },
      { name: 'Banglavision Live', web: 'https://www.jagobd.com/banglavision' },
      { name: 'GTV Live', web: 'https://www.jagobd.com/gtv' },
      { name: 'Maasranga TV Live', web: 'https://www.youtube.com/@MaasrangaTelevision/live' },
      { name: 'Deepto TV Live', web: 'https://www.youtube.com/@DeeptoTV/live' },
      { name: 'Boishakhi TV Live', web: 'https://www.jagobd.com/boishakhitv' },
      { name: 'SA TV Live', web: 'https://www.youtube.com/@SATVBD/live' },
      { name: 'Desh TV Live', web: 'https://www.jagobd.com/deshtv' },
      { name: 'Ekushey TV Live', web: 'https://www.jagobd.com/ekushey-tv' },
      { name: 'Asian TV Live', web: 'https://www.jagobd.com/asiantv' },
      { name: 'Channel 9 Live', web: 'https://www.jagobd.com/channel9hd' },
      { name: 'Nagorik TV Live', web: 'https://www.youtube.com/@NagorikTV/live' },
      { name: 'My TV Live', web: 'https://www.youtube.com/@MyTVBangladesh/live' },
      { name: 'Ekhon TV Live', web: 'https://www.jagobd.com/ekhontv' },
      { name: 'Bijoy TV Live', web: 'https://www.youtube.com/@BijoyTV/live' },
      { name: 'Duronto TV Live', web: 'https://www.youtube.com/@DurontoTV/live' },
    ],
  },
  {
    name: 'সংবাদ চ্যানেল',
    items: [
      { name: 'Somoy TV Live', web: 'https://www.youtube.com/@SomoyTV/live' },
      { name: 'Jamuna TV Live', web: 'https://www.jagobd.com/jamunatv' },
      { name: 'Independent TV Live', web: 'https://www.jagobd.com/independent' },
      { name: 'News24 Live', web: 'https://www.youtube.com/@News24bd/live' },
      { name: 'DBC News Live', web: 'https://www.jagobd.com/dbcnews' },
      { name: 'Ekattor TV Live', web: 'https://www.jagobd.com/ekattor-tv' },
      { name: 'ATN News Live', web: 'https://www.jagobd.com/atnnews' },
      { name: 'Mohona TV Live', web: 'https://www.jagobd.com/mohonatv' },
      { name: 'Channel 24 Live', web: 'https://www.jagobd.com/channel24' },
      { name: 'Jago News 24 Live', web: 'https://www.jagobd.com/jagonews24' },
      { name: 'CB24 TV Live', web: 'https://www.jagobd.com/cb24tv' },
    ],
  },
  {
    name: 'ধর্মীয় চ্যানেল',
    items: [
      { name: 'Islamic TV Live', web: 'https://www.jagobd.com/islamictvbd' },
      { name: 'Madani Channel Bangla Live', web: 'https://www.jagobd.com/madanibanglatv' },
      { name: 'ATN Islamic TV Live', web: 'https://www.jagobd.com/atnislamictv' },
      { name: 'Islam Ch Bangla Live', web: 'https://www.jagobd.com/islamchbangla' },
      { name: 'Makkah Live', web: 'https://www.jagobd.com/makkahlive' },
      { name: 'Makkah TV Live', web: 'https://www.jagobd.com/makkahtv' },
    ],
  },
  {
    name: 'সংগীত চ্যানেল',
    items: [
      { name: 'ATN Music Live', web: 'https://www.jagobd.com/atnmusic' },
      { name: 'Music Bangla Live', web: 'https://www.jagobd.com/musicbangla' },
      { name: 'Gaan Bangla Live', web: 'https://www.youtube.com/@GaanBangla/live' },
    ],
  },
  {
    name: 'স্পোর্টস চ্যানেল',
    items: [
      { name: 'T Sports Live', web: 'https://www.youtube.com/@TSports/live' },
      { name: 'GTV Sports Live', web: 'https://www.youtube.com/@GTVSports/live' },
      { name: 'Somoy Sports Live', web: 'https://www.youtube.com/@SomoySports/live' },
    ],
  },
  {
    name: 'লাইভ পোর্টাল',
    items: [
      { name: 'JagoBD (সব চ্যানেল)', web: 'https://www.jagobd.com' },
      { name: 'BDlive24', web: 'https://www.bdlive24.com' },
      { name: 'BDNews24 TV', web: 'https://www.bdnews24.com/tv' },
      { name: 'Bangla TV Online', web: 'https://banglatvonline.net' },
    ],
  },
];

const BDTvIndex = () => {
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
        <ItemPanel items={selectedSub.items} title={`বিডি টিভি - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default BDTvIndex;