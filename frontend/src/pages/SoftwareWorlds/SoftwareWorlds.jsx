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
      { name: 'Google Gemini', web: 'https://gemini.google.com' },
      { name: 'Microsoft Copilot', web: 'https://copilot.microsoft.com' },
      { name: 'Midjourney', web: 'https://www.midjourney.com' },
    ],
  },

  // ================= GLOBAL LEARNING CENTERS =================
  {
    name: '🌍 World Software Learning Centers',
    items: [
      { name: 'Harvard CS50 (USA)', web: 'https://cs50.harvard.edu' },
      { name: 'MIT OpenCourseWare', web: 'https://ocw.mit.edu' },
      { name: 'Stanford Online', web: 'https://online.stanford.edu' },
      { name: 'Coursera (Global)', web: 'https://www.coursera.org' },
      { name: 'Udemy', web: 'https://www.udemy.com' },
      { name: 'edX', web: 'https://www.edx.org' },
      { name: 'Google Digital Garage', web: 'https://grow.google' },
      { name: 'freeCodeCamp', web: 'https://www.freecodecamp.org' },
      { name: 'The Odin Project', web: 'https://www.theodinproject.com' },
      { name: 'IBM SkillsBuild', web: 'https://skillsbuild.org' },
      { name: 'Microsoft Learn', web: 'https://learn.microsoft.com' },
      { name: 'AWS Training', web: 'https://aws.amazon.com/training' },
    ],
  },
];

const SoftwarePortal = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() =>
              setSelectedSub(prev =>
                prev === sub.name ? null : sub.name
              )
            }
            style={{
              padding: '7px 13px',
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
          title={`💻 SOFTWARE WORLD - ${selectedSub}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}

    </div>
  );
};

export default SoftwarePortal;