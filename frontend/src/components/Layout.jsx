import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CONTENT_DATA, 
  FOLDER_ICONS, 
  StyledTitle, 
  RealisticEarthLogo 
} from '../data/navigationData';
import dgssLogo from '../assets/dgss_logo.png';

import { useNavigation } from '../contexts/NavigationContext';

const Layout = ({ children }) => {
  const { lang, setLang, content: CONTENT, folderList } = useNavigation();
  const navigate = useNavigate();
  const GOLD = "#ffce00";
  const BLACK = "#000000";

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#fff' }}>
      
      {/* Header */}
      <div style={{ background: '#000', padding: '15px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 2000 }}>
          <button onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} style={{ background: GOLD, color: BLACK, border: 'none', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
            {CONTENT.btn_switch}
          </button>
        </div>
        <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: '50%', width: '85px', height: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid #fff' }}>
            <img src={dgssLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <RealisticEarthLogo size={80} />
          <StyledTitle GOLD={GOLD} />
        </div>
        <p style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>{CONTENT.subtitle}</p>
      </div>

      {/* Nav */}
      <div style={{ background: '#004d40', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `3px solid ${GOLD}`, padding: '10px 0' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
            gap: '10px',
            width: '100%' 
          }}>
            {folderList.map((folder, folderIdx) => (
              <div 
                key={folderIdx} 
                className="sd" 
                onClick={() => navigate(`/division/${folder.subs[0].k}`)}
                style={{ 
                  height: '55px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer', 
                  position: 'relative', 
                  fontWeight: 'bold', 
                  fontSize: '14px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  borderRadius: '10px', 
                  textAlign: 'center', 
                  transition: '0.3s all ease',
                  background: 'rgba(0,0,0,0.3)',
                  gap: '5px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{folder.name}</span>
                <span style={{ fontSize: '11px' }}>▼</span>
                <div className={`sm ${folderIdx > folderList.length - 4 ? 'sm-right' : ''}`}>
                  <div className="sm-grid">
                    {folder.subs.map((sub, j) => (
                      <div 
                        key={j} 
                        className="si"
                        onClick={(e) => { e.stopPropagation(); navigate(`/division/${sub.k}`); }}
                      >
                        {sub.n}
                        {sub.items ? (
                          <div className="side-pane">
                             {sub.items.map((item, idx) => (
                               <div 
                                 key={idx} 
                                 className="side-item"
                                 onClick={(e) => { 
                                   e.stopPropagation(); 
                                   navigate(`/division/${sub.k}`);
                                 }}
                               >
                                 {item}
                               </div>
                             ))}
                          </div>
                        ) : null}
                        {sub.items && <span style={{ fontSize: '10px', color: '#999' }}>▶</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ background: BLACK, color: '#fff', padding: '40px 20px', textAlign: 'center', borderTop: `4px solid ${GOLD}` }}>
        <p style={{ fontSize: '12px' }}>{CONTENT.footer}</p>
      </footer>

      <style>{`
        .sd:hover .sm{display:block;}
        .sd:hover{background:#006a4e;color:${GOLD};border-color:${GOLD};}
        .sm{
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 300px;
          background: #fff;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          border: 1px solid #ddd;
          z-index: 9999999;
          border-radius: 0 0 12px 12px;
          padding: 5px 0;
          animation: dropIn 0.2s ease-out;
        }
        .sm.sm-right {
          left: auto;
          right: 0;
          border-radius: 0 0 0 12px;
        }
        @keyframes dropIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .sm-grid {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .si{
          padding: 12px 20px;
          color: #333;
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          font-size: 14px;
          cursor: pointer;
          transition: 0.2s;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        .si:hover{
          background: #f8f9fa;
          color: #006a4e;
          padding-left: 25px;
        }
        .si:hover .side-pane { display: grid; }
        .side-pane {
          display: none;
          position: absolute;
          left: 100%;
          top: 0;
          width: 500px;
          max-height: 450px;
          overflow-y: auto;
          background: #fff;
          border: 1px solid #ddd;
          box-shadow: 10px 10px 30px rgba(0,0,0,0.2);
          padding: 10px;
          grid-template-columns: repeat(2, 1fr);
          gap: 5px;
          border-radius: 0 8px 8px 8px;
          z-index: 1000;
        }
        .sm-right .side-pane {
          left: auto;
          right: 100%;
          border-radius: 8px 0 8px 8px;
          box-shadow: -10px 10px 30px rgba(0,0,0,0.2);
        }
        .side-pane::-webkit-scrollbar { width: 6px; }
        .side-pane::-webkit-scrollbar-track { background: #f1f1f1; }
        .side-pane::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
        .side-pane::-webkit-scrollbar-thumb:hover { background: #bbb; }
        .side-item {
          padding: 8px 12px;
          color: #555;
          font-size: 13px;
          cursor: pointer;
          border-radius: 4px;
          transition: 0.2s;
        }
        .side-item:hover {
          background: #e9ecef;
          color: #006a4e;
        }
        @keyframes rotateOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseEarth { from { box-shadow: 0 0 20px rgba(79,172,254,0.4); } to { box-shadow: 0 0 45px rgba(79, 172, 254, 0.8); } }
      `}</style>
    </div>
  );
};

export default Layout;
