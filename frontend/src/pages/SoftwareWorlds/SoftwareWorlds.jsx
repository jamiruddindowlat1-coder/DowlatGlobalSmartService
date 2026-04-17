import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#795548';
const ICON = '💻';

const subCategories = [
  {
    name: 'অফিস সফটওয়্যার',
    items: [
      { name: 'Microsoft Office', web: 'https://www.microsoft.com/microsoft-365' },
      { name: 'Google Workspace', web: 'https://workspace.google.com' },
      { name: 'LibreOffice', web: 'https://www.libreoffice.org' },
      { name: 'WPS Office', web: 'https://www.wps.com' },
    ],
  },
  {
    name: 'ডিজাইন সফটওয়্যার',
    items: [
      { name: 'Adobe Photoshop', web: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Adobe Illustrator', web: 'https://www.adobe.com/products/illustrator.html' },
      { name: 'Canva', web: 'https://www.canva.com' },
      { name: 'Figma', web: 'https://www.figma.com' },
      { name: 'CorelDRAW', web: 'https://www.coreldraw.com' },
    ],
  },
  {
    name: 'ভিডিও এডিটিং',
    items: [
      { name: 'Adobe Premiere Pro', web: 'https://www.adobe.com/products/premiere.html' },
      { name: 'DaVinci Resolve', web: 'https://www.blackmagicdesign.com/products/davinciresolve' },
      { name: 'CapCut', web: 'https://www.capcut.com' },
      { name: 'Filmora', web: 'https://filmora.wondershare.com' },
    ],
  },
  {
    name: 'ডেভেলপমেন্ট টুলস',
    items: [
      { name: 'VS Code', web: 'https://code.visualstudio.com' },
      { name: 'GitHub', web: 'https://github.com' },
      { name: 'GitLab', web: 'https://gitlab.com' },
      { name: 'Postman', web: 'https://www.postman.com' },
      { name: 'Docker', web: 'https://www.docker.com' },
    ],
  },
  {
    name: 'অ্যান্টিভাইরাস',
    items: [
      { name: 'Avast', web: 'https://www.avast.com' },
      { name: 'Kaspersky', web: 'https://www.kaspersky.com' },
      { name: 'Norton', web: 'https://www.norton.com' },
      { name: 'Bitdefender', web: 'https://www.bitdefender.com' },
      { name: 'Malwarebytes', web: 'https://www.malwarebytes.com' },
    ],
  },
  {
    name: 'ক্লাউড স্টোরেজ',
    items: [
      { name: 'Google Drive', web: 'https://drive.google.com' },
      { name: 'OneDrive', web: 'https://onedrive.live.com' },
      { name: 'Dropbox', web: 'https://www.dropbox.com' },
      { name: 'MEGA', web: 'https://mega.io' },
    ],
  },
  {
    name: 'AI টুলস',
    items: [
      { name: 'ChatGPT', web: 'https://chat.openai.com' },
      { name: 'Claude AI', web: 'https://claude.ai' },
      { name: 'Gemini', web: 'https://gemini.google.com' },
      { name: 'Midjourney', web: 'https://www.midjourney.com' },
      { name: 'Copilot', web: 'https://copilot.microsoft.com' },
    ],
  },
];

const SoftwarePortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`সফটওয়্যার ওয়ার্ল্ড - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default SoftwarePortal;