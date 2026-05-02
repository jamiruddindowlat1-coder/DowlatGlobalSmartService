import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#ffc107';
const ICON = '🏆';

const subCategories = [
  {
    name: 'ক্রিকেট',
    items: [
      { name: 'ICC Official', web: 'https://www.icc-cricket.com' },
      { name: 'BCB (Bangladesh)', web: 'https://www.tigercricket.com.bd' },
      { name: 'ESPN Cricinfo', web: 'https://www.espncricinfo.com' },
      { name: 'CricBuzz', web: 'https://www.cricbuzz.com' },
      { name: 'T20 World Cup', web: 'https://www.icc-cricket.com/tournaments/t20worldcup' },
    ],
  },
  {
    name: 'ফুটবল',
    items: [
      { name: 'FIFA Official', web: 'https://www.fifa.com' },
      { name: 'UEFA', web: 'https://www.uefa.com' },
      { name: 'Premier League', web: 'https://www.premierleague.com' },
      { name: 'La Liga', web: 'https://www.laliga.com' },
      { name: 'Bangladesh Football Federation', web: 'https://www.bff.com.bd' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },
  {
    name: 'অলিম্পিক',
    items: [
      { name: 'IOC Official', web: 'https://olympics.com' },
      { name: 'Bangladesh Olympic', web: 'https://www.anocolympic.org/nocs-directory/bangladesh-olympic-association/16158?gad_source=1&gad_campaignid=22712473592&gbraid=0AAAAA998-2-5N9RgHgW1YH37yD9Ua7Otf&gclid=Cj0KCQjw2MbPBhCSARIsAP3jP9wRgNO9UAdEYG_YDozTDmRRvlrNaV0kdluxKy3s3HXPRnc2LyrlQIMaAuhiEALw_wcB' },
      { name: 'Olympic Channel', web: 'https://www.olympicchannel.com' },
    ],
  },
  {
    name: 'টেনিস',
    items: [
      { name: 'ATP Tour', web: 'https://www.atptour.com' },
      { name: 'WTA', web: 'https://www.wtatennis.com' },
      { name: 'Wimbledon', web: 'https://www.wimbledon.com' },
      { name: 'US Open Tennis', web: 'https://www.usopen.org' },
    ],
  },
  {
    name: 'ব্যাডমিন্টন',
    items: [
      { name: 'BWF (Badminton World)', web: 'https://www.bwfbadminton.com' },
      { name: 'Bangladesh Badminton', web: 'https://www.badmintonbangladesh.com' },
    ],
  },
  {
    name: 'স্পোর্টস নিউজ',
    items: [
      { name: 'ESPN', web: 'https://www.espn.com' },
      { name: 'Sports BD', web: 'https://www.google.com/search?q=Sports+BD&sca_esv=a8bd48aaf84e4a71&biw=1366&bih=641&sxsrf=ANbL-n5mI6PAQdm3zbepk7tGTYQkkwUKHw%3A1777513216953&ei=ALPyae_lOfXkseMP2duIsQs&ved=0ahUKEwjv5YTfuJSUAxV1cmwGHdktIrYQ4dUDCBE&uact=5&oq=Sports+BD&gs_lp=Egxnd3Mtd2l6LXNlcnAiCVNwb3J0cyBCRDIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzINEAAYgAQYigUYQxiwAzIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQEyFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBMhcQLhjcBhi4BhjaBhjYAhjIAxiwA9gBATIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQEyFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBMhcQLhjcBhi4BhjaBhjYAhjIAxiwA9gBATIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQEyFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBSJEQUABYAHADeACQAQCYAXagAXaqAQMwLjG4AQPIAQD4AQKYAgOgAhmYAwCIBgGQBhG6BgYIARABGBmSBwEzoAeSGLIHALgHAMIHBTItMi4xyAcVgAgB&sclient=gws-wiz-serp' },
      { name: 'Prothom Alo Sports', web: 'https://www.prothomalo.com/sports' },
      { name: 'Daily Star Sports', web: 'https://www.thedailystar.net/sports' },
      { name: 'World All TV Online', web: 'https://famelack.com/' },
    ],
  },
];

const WorldCupPortal = () => {
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
              color: selectedSub?.name === sub.name ? '#000' : '#fff',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`ওয়ার্ল্ড কাপ / স্পোর্টস - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default WorldCupPortal;