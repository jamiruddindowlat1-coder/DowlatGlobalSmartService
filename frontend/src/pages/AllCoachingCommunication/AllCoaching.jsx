import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';
import { GLOBAL_WORLD_DATA } from '../../data/GlobalData';

const { name: PORTAL_NAME, color: COLOR, icon: ICON, categories } = GLOBAL_WORLD_DATA.coaching || { name: 'Coaching', color: '#2980b9', icon: '🎓', categories: [] };

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
