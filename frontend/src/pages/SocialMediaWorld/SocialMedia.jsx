import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#3f51b5';
const ICON = '📱';

const subCategories = [
  {
    name: 'সোশ্যাল মিডিয়া',
    items: [
      { name: 'Facebook', web: 'https://www.facebook.com' },
      { name: 'Instagram', web: 'https://www.instagram.com' },
      { name: 'Twitter / X', web: 'https://www.x.com' },
      { name: 'TikTok', web: 'https://www.tiktok.com' },
      { name: 'LinkedIn', web: 'https://www.linkedin.com' },
      { name: 'Pinterest', web: 'https://www.pinterest.com' },
      { name: 'Snapchat', web: 'https://www.snapchat.com' },
    ],
  },
  {
    name: 'ভিডিও প্ল্যাটফর্ম',
    items: [
      { name: 'YouTube', web: 'https://www.youtube.com' },
      { name: 'Vimeo', web: 'https://vimeo.com' },
      { name: 'Dailymotion', web: 'https://www.dailymotion.com' },
      { name: 'Rumble', web: 'https://rumble.com' },
    ],
  },
  {
    name: 'মেসেজিং অ্যাপ',
    items: [
      { name: 'WhatsApp', web: 'https://www.whatsapp.com' },
      { name: 'Telegram', web: 'https://telegram.org' },
      { name: 'Messenger', web: 'https://www.messenger.com' },
      { name: 'Viber', web: 'https://www.viber.com' },
      { name: 'Signal', web: 'https://signal.org' },
      { name: 'IMO', web: 'https://imo.im' },
    ],
  },
  {
    name: 'ব্লগিং প্ল্যাটফর্ম',
    items: [
      { name: 'WordPress', web: 'https://wordpress.com' },
      { name: 'Blogger', web: 'https://www.blogger.com' },
      { name: 'Medium', web: 'https://medium.com' },
      { name: 'Substack', web: 'https://substack.com' },
    ],
  },
  {
    name: 'ফোরাম / কমিউনিটি',
    items: [
      { name: 'Reddit', web: 'https://www.reddit.com' },
      { name: 'Quora', web: 'https://www.quora.com' },
      { name: 'Stack Overflow', web: 'https://stackoverflow.com' },
      { name: 'Discord', web: 'https://discord.com' },
    ],
  },
];

const SocialMediaPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`সোশ্যাল মিডিয়া - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default SocialMediaPortal;