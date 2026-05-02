import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PORTAL_COMPONENTS } from '../data/portalComponents.jsx';
import { useNavigation } from '../contexts/NavigationContext';
import { AdCarousel } from './Home';
import dgssLogo from '../assets/dgss_logo.png';

const GOLD = "#ffce00";
const BLACK = "#000000";

const DivisionPortalPage = () => {
  const { divKey } = useParams();
  const navigate = useNavigate();
  const { lang, content, folderList } = useNavigation();

  const Comp = PORTAL_COMPONENTS[divKey];

  const handleFolderClick = (k) => {
    navigate(`/service/${k}`);
  };

  return (
    <div style={{ 
      backgroundImage: "url('/moon_bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundAttachment: 'fixed',
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      padding: '40px 20px',
      color: '#fff',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            background: GOLD, 
            color: BLACK, 
            border: 'none', 
            padding: '10px 25px', 
            borderRadius: '8px', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(255, 206, 0, 0.3)',
            alignSelf: 'flex-start'
          }}
        >
          ← {content.btn_close}
        </button>

        <div style={{ 
          width: '100%', 
          display: 'flex', 
          minHeight: '600px', 
          borderRadius: '15px', 
          overflow: 'hidden', 
          boxShadow: '0 0 60px rgba(0,0,0,0.8)', 
          border: `2px solid ${GOLD}` 
        }}>
          {/* AdCarousel / Sidebar */}
          <AdCarousel 
            folders={folderList} 
            lang={lang} 
            logo={dgssLogo} 
            gold={GOLD} 
            onFolderClick={handleFolderClick} 
            activeSubKey={divKey} 
          />

          {/* Main Content Area */}
          <div style={{ 
            flex: 1, 
            position: 'relative', 
            backgroundColor: 'rgba(0,0,0,0.7)', 
            overflowY: 'auto' 
          }}>
            <div style={{ padding: '30px' }}>
              {Comp ? (
                <Suspense fallback={
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
                    <div style={{ width: '50px', height: '50px', border: `5px solid ${GOLD}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                    <p style={{ color: GOLD, marginTop: '20px', fontWeight: 'bold' }}>Loading Service...</p>
                  </div>
                }>
                  <Comp />
                </Suspense>
              ) : (
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                  <h2 style={{ color: '#ff4444', fontSize: '32px' }}>Service Not Found</h2>
                  <p style={{ color: '#ccc', marginTop: '10px' }}>The requested division or service module could not be loaded.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default DivisionPortalPage;
