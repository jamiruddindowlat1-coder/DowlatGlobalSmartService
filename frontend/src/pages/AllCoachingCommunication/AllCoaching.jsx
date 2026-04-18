import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const PORTAL_NAME = 'Coaching';
const COLOR = '#2980b9';
const ICON = '🎓';

const categories = [
  {
    name: 'একাডেমিক কোচিং',
    items: [
      { name: 'Udemy', web: 'https://www.udemy.com' },
      { name: 'Coursera', web: 'https://www.coursera.org' },
      { name: 'edX', web: 'https://www.edx.org' },
      { name: 'Khan Academy', web: 'https://www.khanacademy.org' },
      { name: 'Skillshare', web: 'https://www.skillshare.com' },
    ],
  },
  {
    name: 'বাংলাদেশ কোচিং',
    items: [
      { name: '10 Minute School', web: 'https://10minuteschool.com' },
      { name: 'Shikho', web: 'https://shikho.com' },
      { name: 'Bohubrihi', web: 'https://www.bohubrihi.com' },
      { name: 'Rokomari Learning', web: 'https://www.rokomari.com' },
    ],
  },
  {
    name: 'প্রোগ্রামিং শিক্ষা',
    items: [
      { name: 'freeCodeCamp', web: 'https://www.freecodecamp.org' },
      { name: 'The Odin Project', web: 'https://www.theodinproject.com' },
      { name: 'W3Schools', web: 'https://www.w3schools.com' },
      { name: 'LeetCode', web: 'https://leetcode.com' },
      { name: 'HackerRank', web: 'https://www.hackerrank.com' },
    ],
  },
  {
    name: 'ভাষা শিক্ষা',
    items: [
      { name: 'Duolingo', web: 'https://www.duolingo.com' },
      { name: 'Babbel', web: 'https://www.babbel.com' },
      { name: 'Rosetta Stone', web: 'https://www.rosettastone.com' },
      { name: 'Preply', web: 'https://preply.com' },
    ],
  },
  {
    name: 'পেশাদার দক্ষতা',
    items: [
      { name: 'LinkedIn Learning', web: 'https://www.linkedin.com/learning' },
      { name: 'Pluralsight', web: 'https://www.pluralsight.com' },
      { name: 'MasterClass', web: 'https://www.masterclass.com' },
      { name: 'Codecademy', web: 'https://www.codecademy.com' },
    ],
  },
  {
    name: 'বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি',
    items: [
      { name: 'Varsity Admission BD', web: 'https://www.admissionbd.com' },
      { name: 'Admission Test', web: 'https://admissiontest.com.bd' },
      { name: 'GRE Prep - Magoosh', web: 'https://magoosh.com/gre' },
      { name: 'SAT Prep - Khan Academy', web: 'https://www.khanacademy.org/sat' },
    ],
  },
];

const CoachingPortal = () => {
  const [selectedSub, setSelectedSub] = useState(null);
  if (!categories) return null;
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {categories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: '#c5a059', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`${PORTAL_NAME} - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default CoachingPortal;