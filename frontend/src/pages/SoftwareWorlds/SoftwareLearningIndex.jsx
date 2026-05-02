import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#795548';
const ICON = '💻';

const subCategories = [

  // ================= SOFTWARE TYPES =================
  {
    name: '📚 Office Software',
    items: [
      { name: 'Microsoft Office', web: 'https://www.microsoft.com/microsoft-365' },
      { name: 'Google Workspace', web: 'https://workspace.google.com' },
      { name: 'LibreOffice', web: 'https://www.libreoffice.org' },
      { name: 'WPS Office', web: 'https://www.wps.com' },
    ],
  },

  {
    name: '🎨 Design Software',
    items: [
      { name: 'Adobe Photoshop', web: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Adobe Illustrator', web: 'https://www.adobe.com/products/illustrator.html' },
      { name: 'Canva', web: 'https://www.canva.com' },
      { name: 'Figma', web: 'https://www.figma.com' },
      { name: 'CorelDRAW', web: 'https://www.coreldraw.com' },
    ],
  },

  {
    name: '🎬 Video Editing',
    items: [
      { name: 'Adobe Premiere Pro', web: 'https://www.adobe.com/products/premiere.html' },
      { name: 'DaVinci Resolve', web: 'https://www.blackmagicdesign.com/products/davinciresolve' },
      { name: 'CapCut', web: 'https://www.capcut.com' },
      { name: 'Filmora', web: 'https://filmora.wondershare.com' },
    ],
  },

  {
    name: '🧑‍💻 Development Tools',
    items: [
      { name: 'VS Code', web: 'https://code.visualstudio.com' },
      { name: 'GitHub', web: 'https://github.com' },
      { name: 'GitLab', web: 'https://gitlab.com' },
      { name: 'Postman', web: 'https://www.postman.com' },
      { name: 'Docker', web: 'https://www.docker.com' },
    ],
  },

  {
    name: '☁️ Cloud Storage',
    items: [
      { name: 'Google Drive', web: 'https://drive.google.com' },
      { name: 'OneDrive', web: 'https://onedrive.live.com' },
      { name: 'Dropbox', web: 'https://www.dropbox.com' },
      { name: 'MEGA', web: 'https://mega.io' },
    ],
  },

  {
    name: '🛡️ Antivirus',
    items: [
      { name: 'Avast', web: 'https://www.avast.com' },
      { name: 'Kaspersky', web: 'https://www.kaspersky.com' },
      { name: 'Norton', web: 'https://www.norton.com' },
      { name: 'Bitdefender', web: 'https://www.bitdefender.com' },
      { name: 'Malwarebytes', web: 'https://www.malwarebytes.com' },
    ],
  },

  {
    name: '🤖 AI Tools',
    items: [
      { name: 'ChatGPT', web: 'https://chat.openai.com' },
      { name: 'Claude AI', web: 'https://claude.ai' },
      { name: 'Google Gemini', web: 'https://gemini.google.com' },
      { name: 'Microsoft Copilot', web: 'https://copilot.microsoft.com' },
      { name: 'Midjourney', web: 'https://www.midjourney.com' },
    ],
  },

  // ================= LEARNING =================
  {
    name: '📘 Learning Platforms',
    items: [
      { name: 'W3Schools', web: 'https://www.w3schools.com' },
      { name: 'freeCodeCamp', web: 'https://www.freecodecamp.org' },
      { name: 'MDN Web Docs', web: 'https://developer.mozilla.org' },
      { name: 'GeeksforGeeks', web: 'https://www.geeksforgeeks.org' },
    ],
  },

  {
    name: '🎓 Online Courses',
    items: [
      { name: 'Udemy', web: 'https://www.udemy.com' },
      { name: 'Coursera', web: 'https://www.coursera.org' },
      { name: 'edX', web: 'https://www.edx.org' },
      { name: 'LinkedIn Learning', web: 'https://www.linkedin.com/learning' },
    ],
  },

  {
    name: '🚀 Freelancing Platforms',
    items: [
      { name: 'Fiverr', web: 'https://www.fiverr.com' },
      { name: 'Upwork', web: 'https://www.upwork.com' },
      { name: 'Freelancer', web: 'https://www.freelancer.com' },
      { name: 'PeoplePerHour', web: 'https://www.peopleperhour.com' },
    ],
  },

  {
    name: '🧠 Coding Practice',
    items: [
      { name: 'LeetCode', web: 'https://leetcode.com' },
      { name: 'HackerRank', web: 'https://www.hackerrank.com' },
      { name: 'Codeforces', web: 'https://codeforces.com' },
      { name: 'CodeChef', web: 'https://www.codechef.com' },
    ],
  },

];

const SoftwareHubIndex = () => {
  const [selectedSub, setSelectedSub] = useState(subCategories[0]);

  return (
    <div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
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
          title={`💻 SOFTWARE HUB - ${selectedSub}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}

    </div>
  );
};

export default SoftwareHubIndex;