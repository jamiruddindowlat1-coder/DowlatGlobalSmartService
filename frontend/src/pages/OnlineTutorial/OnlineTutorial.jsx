import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#2196f3';
const ICON = '👨‍🏫';

const subCategories = [
  {
    name: 'বাংলা টিউটোরিয়াল',
    items: [
      { name: 'Bohubrihi', web: 'https://bohubrihi.com/' },
      { name: '10 Minute School', web: 'https://10minuteschool.com' },
      { name: 'Shikho', web: 'https://shikho.com' },
      { name: 'Ghoori Learning', web: 'https://ghoorilearning.com/' },
      { name: 'Programming Hero', web: 'https://web.programming-hero.com' },
      { name: 'Ostad', web: 'https://ostad.app' },
      { name: 'Learn Bangladesh', web: 'https://learnbd.net' },
      { name: 'Muktopaath', web: 'https://muktopaath.gov.bd' },
    ],
  },
  {
    name: 'প্রোগ্রামিং',
    items: [
      { name: 'freeCodeCamp', web: 'https://www.freecodecamp.org' },
      { name: 'W3Schools', web: 'https://www.w3schools.com' },
      { name: 'Codecademy', web: 'https://www.codecademy.com' },
      { name: 'The Odin Project', web: 'https://www.theodinproject.com' },
      { name: 'CS50 Harvard', web: 'https://cs50.harvard.edu' },
      { name: 'GeeksforGeeks', web: 'https://www.geeksforgeeks.org' },
      { name: 'LeetCode', web: 'https://leetcode.com' },
      { name: 'HackerRank', web: 'https://www.hackerrank.com' },
      { name: 'Codeforces', web: 'https://codeforces.com' },
      { name: 'MDN Web Docs', web: 'https://developer.mozilla.org' },
      { name: 'SoloLearn', web: 'https://www.sololearn.com/en/' },
    ],
  },
  {
    name: 'ভিডিও কোর্স',
    items: [
      { name: 'Udemy', web: 'https://www.udemy.com' },
      { name: 'Coursera', web: 'https://www.coursera.org' },
      { name: 'edX', web: 'https://www.edx.org' },
      { name: 'LinkedIn Learning', web: 'https://www.linkedin.com/learning' },
      { name: 'Skillshare', web: 'https://www.skillshare.com' },
      { name: 'FutureLearn', web: 'https://www.futurelearn.com' },
      { name: 'Pluralsight', web: 'https://www.pluralsight.com' },
      { name: 'Khan Academy', web: 'https://www.khanacademy.org' },
      { name: 'Alison', web: 'https://alison.com' },
    ],
  },
  {
    name: 'গ্রাফিক্স ডিজাইন',
    items: [
      { name: 'Adobe Learn', web: 'https://helpx.adobe.com/learn' },
      { name: 'Canva Design School', web: 'https://www.canva.com/learn' },
      { name: 'Envato Tuts+', web: 'https://tutsplus.com' },
      { name: 'DesignCourse', web: 'https://designcourse.com' },
      { name: 'Figma Learn', web: 'https://help.figma.com' },
      { name: 'Behance Tutorials', web: 'https://www.behance.net' },
    ],
  },
  {
    name: 'ডেটা সায়েন্স / AI',
    items: [
      { name: 'Kaggle', web: 'https://www.kaggle.com' },
      { name: 'Fast.ai', web: 'https://www.fast.ai' },
      { name: 'Google ML Crash Course', web: 'https://developers.google.com/machine-learning/crash-course' },
      { name: 'DataCamp', web: 'https://www.datacamp.com' },
      { name: 'DeepLearning.AI', web: 'https://www.deeplearning.ai' },
      { name: 'OpenAI Docs', web: 'https://platform.openai.com/docs' },
      { name: 'IBM AI Learning', web: 'https://www.ibm.com/training' },
    ],
  },
  {
    name: 'ইউটিউব চ্যানেল',
    items: [
      { name: 'Stack Learner', web: 'https://www.youtube.com/@StackLearner' },
      { name: 'Learn with Sumit', web: 'https://www.youtube.com/@LearnwithSumit' },
      { name: 'Anisul Islam', web: 'https://www.youtube.com/@anisul_islam' },
      { name: 'Traversy Media', web: 'https://www.youtube.com/@TraversyMedia' },
      { name: 'Fireship', web: 'https://www.youtube.com/@Fireship' },
      { name: 'Academind', web: 'https://www.youtube.com/@academind' },
      { name: 'The Net Ninja', web: 'https://www.youtube.com/@NetNinja' },
      { name: 'CodeWithHarry', web: 'https://www.youtube.com/@CodeWithHarry' },
    ],
  },
];

const OnlineTutorialPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`অনলাইন টিউটোরিয়াল - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default OnlineTutorialPortal;