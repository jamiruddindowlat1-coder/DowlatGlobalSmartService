import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#6A1B9A';
const ICON = '🌐📱';

const subCategories = [

  // ================= SOCIAL MEDIA =================
  {
    name: '🌍 Social Media Platforms',
    items: [
      { name: 'Facebook', web: 'https://www.facebook.com' },
      { name: 'Instagram', web: 'https://www.instagram.com' },
      { name: 'X (Twitter)', web: 'https://x.com' },
      { name: 'TikTok', web: 'https://www.tiktok.com' },
      { name: 'Snapchat', web: 'https://www.snapchat.com' },
      { name: 'Threads', web: 'https://www.threads.net' },
      { name: 'Pinterest', web: 'https://www.pinterest.com' },
      { name: 'Reddit', web: 'https://www.reddit.com' },
      { name: 'Tumblr', web: 'https://www.tumblr.com' },
    ],
  },

  // ================= MESSAGING =================
  {
    name: '💬 Messaging Apps',
    items: [
      { name: 'WhatsApp', web: 'https://www.whatsapp.com' },
      { name: 'Telegram', web: 'https://telegram.org' },
      { name: 'Signal', web: 'https://signal.org' },
      { name: 'Discord', web: 'https://discord.com' },
      { name: 'Messenger', web: 'https://www.messenger.com' },
      { name: 'WeChat', web: 'https://www.wechat.com' },
      { name: 'Line', web: 'https://line.me' },
    ],
  },

  // ================= VIDEO & LIVE =================
  {
    name: '🎥 Video & Live Platforms',
    items: [
      { name: 'YouTube', web: 'https://www.youtube.com' },
      { name: 'Twitch', web: 'https://www.twitch.tv' },
      { name: 'Vimeo', web: 'https://vimeo.com' },
      { name: 'Facebook Live', web: 'https://www.facebook.com/watch' },
      { name: 'Kick', web: 'https://kick.com' },
    ],
  },

  // ================= PROFESSIONAL NETWORK =================
  {
    name: '💼 Professional Networks',
    items: [
      { name: 'LinkedIn', web: 'https://www.linkedin.com' },
      { name: 'GitHub', web: 'https://github.com' },
      { name: 'AngelList (Wellfound)', web: 'https://wellfound.com' },
      { name: 'Behance', web: 'https://www.behance.net' },
      { name: 'Dribbble', web: 'https://dribbble.com' },
    ],
  },

  // ================= BLOGGING & CONTENT =================
  {
    name: '✍️ Blogging & Content Platforms',
    items: [
      { name: 'Medium', web: 'https://medium.com' },
      { name: 'WordPress', web: 'https://wordpress.com' },
      { name: 'Substack', web: 'https://substack.com' },
      { name: 'Blogger', web: 'https://www.blogger.com' },
      { name: 'Ghost', web: 'https://ghost.org' },
    ],
  },

  // ================= FORUMS & DISCUSSION =================
  {
    name: '💡 Forums & Communities',
    items: [
      { name: 'Reddit', web: 'https://www.reddit.com' },
      { name: 'Quora', web: 'https://www.quora.com' },
      { name: 'Stack Overflow', web: 'https://stackoverflow.com' },
      { name: 'Hacker News', web: 'https://news.ycombinator.com' },
      { name: '4chan', web: 'https://www.4chan.org' },
    ],
  },

  // ================= EMERGING PLATFORMS =================
  {
    name: '🚀 Emerging Platforms',
    items: [
      { name: 'Discord Communities', web: 'https://discord.com' },
      { name: 'Clubhouse', web: 'https://www.clubhouse.com' },
      { name: 'BeReal', web: 'https://bere.al' },
      { name: 'Mastodon', web: 'https://mastodon.social' },
    ],
  },

];

const SocialMediaIndex = () => {
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
          title={`🌐 SOCIAL MEDIA WORLD - ${selectedSub}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}

    </div>
  );
};

export default SocialMediaIndex;