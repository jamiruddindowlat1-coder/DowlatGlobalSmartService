import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#673ab7';
const ICON = '📡';

const subCategories = [
  {
    name: 'বাংলাদেশ টেলিকম',
    items: [
      { name: 'গ্রামীণফোন', web: 'https://www.grameenphone.com' },
      { name: 'রবি', web: 'https://www.robi.com.bd' },
      { name: 'বাংলালিংক', web: 'https://www.banglalink.net' },
      { name: 'টেলিটক', web: 'https://www.teletalk.com.bd' },
      { name: 'এয়ারটেল বাংলাদেশ', web: 'https://www.robi.com.bd' },
    ],
  },
  {
    name: 'ইন্টারনেট সার্ভিস',
    items: [
      { name: 'BTCL', web: 'https://mybtcl.btcl.gov.bd/login' },
      { name: 'Fiber@Home', web: 'https://www.fiberathome.net' },
      { name: 'Summit Communications', web: 'https://www.summitcommunications.net' },
      { name: 'Link3 Technologies', web: 'https://www.link3.net' },
    ],
  },
  {
    name: 'ভিওআইপি / কলিং',
    items: [
      { name: 'Skype', web: 'https://www.skype.com' },
      { name: 'Zoom', web: 'https://zoom.us' },
      { name: 'Google Meet', web: 'https://meet.google.com' },
      { name: 'Microsoft Teams', web: 'https://www.microsoft.com/microsoft-teams' },
    ],
  },
  {
    name: 'ইমেইল সার্ভিস',
    items: [
      { name: 'Gmail', web: 'https://mail.google.com' },
      { name: 'Outlook', web: 'https://outlook.live.com' },
      { name: 'Yahoo Mail', web: 'https://mail.yahoo.com' },
      { name: 'ProtonMail', web: 'https://proton.me/mail' },
    ],
  },
  {
    name: 'আন্তর্জাতিক টেলিকম',
    items: [
      { name: 'AT&T', web: 'https://www.att.com' },
      { name: 'Verizon', web: 'https://www.verizon.com' },
      { name: 'T-Mobile', web: 'https://www.t-mobile.com' },
      { name: 'Vodafone', web: 'https://www.vodafone.com' },
    ],
  },
  {
    name: 'স্যাটেলাইট যোগাযোগ',
    items: [
      { name: 'Bangabandhu Satellite', web: 'https://www.bscl.gov.bd' },
      { name: 'Starlink', web: 'https://www.starlink.com' },
      { name: 'Intelsat', web: 'https://www.intelsat.com' },
    ],
  },
];

const CommunicationPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`যোগাযোগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default CommunicationPortal;