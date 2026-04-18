import React, { useState, Suspense, lazy } from 'react';
import dgssLogo from '../assets/dgss_logo.png';
import moonBg from "../assets/moonBg.png"; // আসল নাম দিন
const safeLazy = (importFn) => lazy(() => importFn().catch((err) => {
    console.error("Import Error:", err);
    return { default: () => <div style={{padding: '40px', color: '#ff4444', textAlign: 'center'}}>Module Load Error. Check file path.</div> };
}));

const PORTAL_COMPONENTS = {
  dhaka: safeLazy(() => import('./Divisions/DhakaDivision')),
  chittagong: safeLazy(() => import('./Divisions/ChittagongDivision')),
  rajshahi: safeLazy(() => import('./Divisions/RajshahiDivision')),
  khulna: safeLazy(() => import('./Divisions/KhulnaDivision')),
  sylhet: safeLazy(() => import('./Divisions/SylhetDivision')),
  barisal: safeLazy(() => import('./Divisions/BarisalDivision')),
  rangpur: safeLazy(() => import('./Divisions/RangpurDivision')),
  mymensingh: safeLazy(() => import('./Divisions/MymensinghDivision')),
  all_coaching: safeLazy(() => import('./AllCoachingCommunication/AllCoaching')),
  coaching_english: safeLazy(() => import('./AllCoachingCommunication/EnglishAll')),
  coaching_hsc: safeLazy(() => import('./AllCoachingCommunication/HscSubjectAll')),
  coaching_ssc: safeLazy(() => import('./AllCoachingCommunication/SSCSubjectAll')),
  games_index: safeLazy(() => import('./GamesWorld/BDGamesindex')),
  games_mobile: safeLazy(() => import('./GamesWorld/Mobile&PCGames')),
  games_physical: safeLazy(() => import('./GamesWorld/PhysicalGamesofWorld')),
  comedy_main: safeLazy(() => import('./ComadyWorld/ComedyWorld')),
  comedy_index: safeLazy(() => import('./ComadyWorld/BDComadyIndex')),
  social_main: safeLazy(() => import('./SocialMediaWorld/SocialMedia')),
  social_index: safeLazy(() => import('./SocialMediaWorld/SocialMediaIndex')),
  comm_main: safeLazy(() => import('./WorldCommunication/Communication')),
  comm_tel: safeLazy(() => import('./WorldCommunication/WorldTel')),
  news_bd_index: safeLazy(() => import('./WorldNewsPaper/BDNewsPapersIndex')),
  news_world: safeLazy(() => import('./WorldNewsPaper/WorldNews')),
  share_m_main: safeLazy(() => import('./ShareMarketServicePortal/ShareMarket')),
  share_m_index: safeLazy(() => import('./ShareMarketServicePortal/ShareIndex')),
  share_m_news: safeLazy(() => import('./ShareMarketServicePortal/ShareNewsIPOBD')),
  share_w_main: safeLazy(() => import('./ShareWorld/ShareWorld')),
  share_w_index: safeLazy(() => import('./ShareWorld/WorldShareIndex')),
  share_w_news: safeLazy(() => import('./ShareWorld/WorldShareNews')),
  lang_world: safeLazy(() => import('./LanguageWorld/LanguageWorld')),
  lang_converter: safeLazy(() => import('./LanguageWorld/AllLanguageConverter')),
  biz_main: safeLazy(() => import('./OnlineBusiness/OnlineBusiness')),
  biz_index: safeLazy(() => import('./OnlineBusiness/OnlineBusinessIndex')),
  soft_worlds: safeLazy(() => import('./SoftwareWorlds/SoftwareWorlds')),
  soft_learning: safeLazy(() => import('./SoftwareWorlds/SoftwareLearningIndex')),
  tourist_main: safeLazy(() => import('./TouristWorld/TouristWorld')),
  tourist_comm: safeLazy(() => import('./TouristWorld/TuristCommunicationIndex')),
  tourist_scene: safeLazy(() => import('./TouristWorld/TuristScenariousIndex')),
  bdtv: safeLazy(() => import('./BdTvAllChannel/BDTvIndex')),
  hadith: safeLazy(() => import('./Hadith/Hadith')),
  tutorial: safeLazy(() => import('./OnlineTutorial/OnlineTutorial')),
  quran: safeLazy(() => import('./Quran/Quran')),
  waz: safeLazy(() => import('./WazMahfil/WazMahfil')),
  worldcup: safeLazy(() => import('./WorldCup/WorldCup')),
  worldtv: safeLazy(() => import('./WorldTvChannel/WorldTvIndex'))
};

const Home = () => {
  const [activeSubKey, setActiveSubKey] = useState(null);
  const [lang, setLang] = useState('bn');
  const GOLD = "#ffce00";
  const BLACK = "#000000";

  const CONTENT = {
    bn: {
      title: "DOWLAT GLOBAL SMART SERVICE",
      subtitle: "ডিজিটাল বাংলাদেশের আধুনিক স্মার্ট সমাধান",
      footer: "© ২০২৪ - DOWLAT GLOBAL SMART SERVICE | সর্বস্বত্ব সংরক্ষিত",
      welcome: "ডিজিটাল স্মার্ট পোর্টালে স্বাগতম",
      instruction: "সার্ভিসগুলো দেখার জন্য মেনু বার ব্যবহার করুন।",
      btn_close: "বন্ধ করুন",
      btn_switch: "English",
      folders: [
        { name: 'বিভাগসমূহ', subs: [{n:'ঢাকা বিভাগ',k:'dhaka'},{n:'চট্টগ্রাম বিভাগ',k:'chittagong'},{n:'রাজশাহী বিভাগ',k:'rajshahi'},{n:'খুলনা বিভাগ',k:'khulna'},{n:'সিলেট বিভাগ',k:'sylhet'},{n:'বরিশাল বিভাগ',k:'barisal'},{n:'রংপুর বিভাগ',k:'rangpur'},{n:'ময়মনসিংহ বিভাগ',k:'mymensingh'}] },
        { name: 'কোচিং', subs: [{n:'সব কোচিং',k:'all_coaching'},{n:'ইংরেজি অল',k:'coaching_english'},{n:'HSC সাবজেক্ট',k:'coaching_hsc'},{n:'SSC সাবজেক্ট',k:'coaching_ssc'}] },
        { name: 'গেমস ওয়ার্ল্ড', subs: [{n:'গেমস ইনডেক্স',k:'games_index'},{n:'মোবাইল ও পিসি',k:'games_mobile'},{n:'শারীরিক গেমস',k:'games_physical'}] },
        { name: 'কমেডি ওয়ার্ল্ড', subs: [{n:'কমেডি হোম',k:'comedy_main'},{n:'কমেডি ইনডেক্স',k:'comedy_index'}] },
        { name: 'অনলাইন বিজনেস', subs: [{n:'বিজনেস হোম',k:'biz_main'},{n:'বিজনেস ইনডেক্স',k:'biz_index'}] },
        { name: 'অনলাইন টিউটোরিয়াল', subs: [{n:'টিউটোরিয়াল হোম',k:'tutorial'}] },
        { name: 'কমিউনিকেশন', subs: [{n:'যোগাযোগ',k:'comm_main'},{n:'ওয়ার্ল্ড টেল',k:'comm_tel'}] },
        { name: 'নিউজ পেপার', subs: [{n:'বিডি পেপার',k:'news_bd_index'},{n:'ওয়ার্ল্ড নিউজ',k:'news_world'}] },
        { name: 'শেয়ার মার্কেট', subs: [{n:'মার্কেট পোর্টাল',k:'share_m_main'},{n:'মার্কেট ইনডেক্স',k:'share_m_index'},{n:'মার্কেট নিউজ',k:'share_m_news'}] },
        { name: 'শেয়ার ওয়ার্ল্ড', subs: [{n:'শেয়ার হোম',k:'share_w_main'},{n:'গ্লোবাল ইনডেক্স',k:'share_w_index'},{n:'গ্লোবাল নিউজ',k:'share_w_news'}] },
        { name: 'সোশ্যাল মিডিয়া', subs: [{n:'মিডিয়া হোম',k:'social_main'},{n:'মিডিয়া ইনডেক্স',k:'social_index'}] },
        { name: 'ল্যাঙ্গুয়েজ', subs: [{n:'ল্যাঙ্গুয়েজ হোম',k:'lang_world'},{n:'কনভার্টার',k:'lang_converter'}] },
        { name: 'সফটওয়্যার', subs: [{n:'সফটওয়্যার হোম',k:'soft_worlds'},{n:'লার্নিং ইনডেক্স',k:'soft_learning'}] },
        { name: 'ট্যুরিস্ট ওয়ার্ল্ড', subs: [{n:'ট্যুরিস্ট হোম',k:'tourist_main'},{n:'ট্যুরিস্ট ইনফো',k:'tourist_comm'},{n:'ট্যুরিস্ট সিনারিও',k:'tourist_scene'}] },
        { name: 'বিডি টিভি', subs: [{n:'টিভি ইনডেক্স',k:'bdtv'}] },
        { name: 'হাদিস', subs: [{n:'আল হাদিস',k:'hadith'}] },
        { name: 'কুরআন', subs: [{n:'আল কুরআন',k:'quran'}] },
        { name: 'ওয়াজ মাহফিল', subs: [{n:'ওয়াজ মাহফিল',k:'waz'}] },
        { name: 'ওয়ার্ল্ড কাপ', subs: [{n:'স্পোর্টস সেন্টার',k:'worldcup'}] },
        { name: 'ওয়ার্ল্ড টিভি', subs: [{n:'গ্লোবাল টিভি',k:'worldtv'}] }
      ]
    },
    en: {
      title: "DOWLAT GLOBAL SMART SERVICE",
      subtitle: "Modern Smart Solutions for Digital Bangladesh",
      footer: "© 2024 - DOWLAT GLOBAL SMART SERVICE | All Rights Reserved",
      welcome: "Welcome to Digital Smart Portal",
      instruction: "Use the menu bar above to access all services.",
      btn_close: "Close",
      btn_switch: "বাংলায় দেখুন",
      folders: [
        { name: 'Divisions', subs: [{n:'Dhaka Division',k:'dhaka'},{n:'Chittagong Division',k:'chittagong'},{n:'Rajshahi Division',k:'rajshahi'},{n:'Khulna Division',k:'khulna'},{n:'Sylhet Division',k:'sylhet'},{n:'Barisal Division',k:'barisal'},{n:'Rangpur Division',k:'rangpur'},{n:'Mymensingh Division',k:'mymensingh'}] },
        { name: 'Coaching', subs: [{n:'All Coaching',k:'all_coaching'},{n:'English All',k:'coaching_english'},{n:'HSC Results',k:'coaching_hsc'},{n:'SSC Results',k:'coaching_ssc'}] },
        { name: 'Games World', subs: [{n:'Games Index',k:'games_index'},{n:'Mobile & PC',k:'games_mobile'},{n:'Physical Games',k:'games_physical'}] },
        { name: 'Comedy World', subs: [{n:'Comedy Home',k:'comedy_main'},{n:'Comedy Index',k:'comedy_index'}] },
        { name: 'Online Business', subs: [{n:'Business Home',k:'biz_main'},{n:'Business Index',k:'biz_index'}] },
        { name: 'Online Tutorial', subs: [{n:'Tutorial Home',k:'tutorial'}] },
        { name: 'Communication', subs: [{n:'Contact',k:'comm_main'},{n:'World Tel',k:'comm_tel'}] },
        { name: 'News Paper', subs: [{n:'BD Paper',k:'news_bd_index'},{n:'World News',k:'news_world'}] },
        { name: 'Share Market', subs: [{n:'Market Portal',k:'share_m_main'},{n:'Market Index',k:'share_m_index'},{n:'Market News',k:'share_m_news'}] },
        { name: 'Share World', subs: [{n:'Share Home',k:'share_w_main'},{n:'Global Index',k:'share_w_index'},{n:'Global News',k:'share_w_news'}] },
        { name: 'Social Media', subs: [{n:'Media Home',k:'social_main'},{n:'Media Index',k:'social_index'}] },
        { name: 'Language', subs: [{n:'Language Home',k:'lang_world'},{n:'Converter',k:'lang_converter'}] },
        { name: 'Software', subs: [{n:'Software Home',k:'soft_worlds'},{n:'Learning Index',k:'soft_learning'}] },
        { name: 'Tourist World', subs: [{n:'Tourist Home',k:'tourist_main'},{n:'Tourist Info',k:'tourist_comm'},{n:'Tourist Scenarios',k:'tourist_scene'}] },
        { name: 'BD TV', subs: [{n:'TV Index',k:'bdtv'}] },
        { name: 'Hadith', subs: [{n:'Al Hadith',k:'hadith'}] },
        { name: 'Quran', subs: [{n:'Holy Quran',k:'quran'}] },
        { name: 'Waz Mahfil', subs: [{n:'Islamic Waz',k:'waz'}] },
        { name: 'World Cup', subs: [{n:'Sports Center',k:'worldcup'}] },
        { name: 'World TV', subs: [{n:'Global TV',k:'worldtv'}] }
      ]
    }
  };

  const RealisticEarthLogo = ({ size = 95 }) => (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ 
          width: `${size*0.75}px`, height: `${size*0.75}px`, 
          background: 'url("https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png")',
          backgroundSize: 'cover', borderRadius: '50%', 
          boxShadow: 'inset -5px -5px 25px rgba(0,0,0,0.9), 0 0 45px rgba(79, 172, 254, 0.7)',
          zIndex: 2, animation: 'pulseEarth 4s infinite alternate'
      }}></div>
      <div style={{ position: 'absolute', width: '100%', height: '100%', animation: 'rotateOrbit 12s linear infinite', zIndex: 5, display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: `-12px`, display: 'flex', gap: '2px', fontWeight: '900', fontSize: '18px' }}>
            <span style={{ color: '#ff3333', textShadow: '0 0 10px #ff3333' }}>D</span>
            <span style={{ color: '#33ff33', textShadow: '0 0 10px #33ff33' }}>G</span>
            <span style={{ color: '#3333ff', textShadow: '0 0 10px #3333ff' }}>S</span>
            <span style={{ color: '#ffff33', textShadow: '0 0 10px #ffff33' }}>S</span>
        </div>
      </div>
    </div>
  );

  const folderList = CONTENT[lang].folders;
  const row1 = folderList.slice(0, 7);
  const row2 = folderList.slice(7, 14);
  const row3 = folderList.slice(14);

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', fontFamily: 'sans-serif', color: '#fff' }}>
      
      <div style={{ background: '#000', padding: '15px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 2000 }}>
           <button onClick={() => setLang(lang==='bn'?'en':'bn')} style={{ background: GOLD, color: BLACK, border: 'none', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
              {CONTENT[lang].btn_switch}
           </button>
        </div>

        <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '50%', width: '85px', height: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid #fff' }}>
                <img src={dgssLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
             <RealisticEarthLogo size={80} />
             <h1 style={{ color: GOLD, fontSize: '28px', fontWeight: 'bold', margin: '0' }}>{CONTENT[lang].title}</h1>
        </div>
        <p style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>{CONTENT[lang].subtitle}</p>
      </div>

      <div style={{ background: '#004d40', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `3px solid ${GOLD}`, minHeight: '120px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px 0' }}>
          {[row1, row2, row3].map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', width: '100%', minHeight: '35px' }}>
              {row.map((folder, i) => (
                <div key={i} className="sd" style={{ padding: '6px 10px', cursor: 'pointer', position: 'relative', fontWeight: 'bold', fontSize: '11px', border: '1px solid rgba(255, 255, 255, 0.1)', margin: '2px', borderRadius: '4px', textAlign: 'center', minWidth: '155px' }}>
                  {folder.name} ▾
                  <div className="sm">
                    {folder.subs.map((sub, j) => (
                      <div key={j} className="si" onClick={() => setActiveSubKey(sub.k)}>➤ {sub.n}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        maxWidth: '1450px', 
        margin: '10px auto', 
        padding: '0', 
        width: '100%',
        aspectRatio: '16 / 7.5', 
        position: 'relative',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: `0 0 60px rgba(0, 0, 0, 0.8)`,
        backgroundImage: `url(${moonBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        zIndex: 5
      }}>
        {/* স্টার ও অন্যান্য লেয়ার সরিয়ে একদম পরিষ্কার ব্যাকগ্রাউন্ড */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 6, background: activeSubKey ? 'rgba(0,0,0,0.5)' : 'transparent', transition: '0.5s' }}></div>

        {activeSubKey ? (
          <div style={{ 
            width: '92%',
            maxWidth: '1200px',
            minHeight: '70vh',
            background: 'rgba(0, 0, 0, 0.75)', 
            backdropFilter: 'blur(12px)',
            borderRadius: '20px', 
            padding: '30px', 
            border: `1px solid ${GOLD}`, 
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
            color: '#fff',
            zIndex: 10,
            margin: '20px auto'
          }}>
            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{color: GOLD, margin: 0, fontSize: '22px', textShadow: '2px 2px 10px #000'}}>{activeSubKey.toUpperCase().replace(/_/g, ' ')}</h3>
              <button onClick={() => setActiveSubKey(null)} style={{ background: '#ff3333', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold' }}>{CONTENT[lang].btn_close} ✖</button>
            </div>
            <Suspense fallback={<p style={{textAlign: 'center', padding: '60px'}}>{lang==='bn'?'লোড হচ্ছে...':'Loading...'}</p>}>
              {PORTAL_COMPONENTS[activeSubKey] && React.createElement(PORTAL_COMPONENTS[activeSubKey], { lang: lang })}
            </Suspense>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#fff', padding: '180px 20px', zIndex: 5, width: '100%' }}>
             <h2 style={{ fontSize: '56px', fontWeight: 'bold', textShadow: '0 5px 30px #000', margin: '0', letterSpacing: '2px' }}>{CONTENT[lang].welcome}</h2>
             <p style={{ fontSize: '22px', textShadow: '0 2px 20px #000', marginTop: '20px', fontWeight: '500' }}>{CONTENT[lang].instruction}</p>
          </div>
        )}
      </div>

      <footer style={{ background: BLACK, color: '#fff', padding: '40px 20px', textAlign: 'center', borderTop: `4px solid ${GOLD}` }}>
        <p style={{fontSize: '12px'}}>{CONTENT[lang].footer}</p>
      </footer>

      <style>{`
        @keyframes rotateOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseEarth { from { box-shadow: 0 0 20px rgba(79, 172, 254, 0.4); } to { box-shadow: 0 0 45px rgba(79, 172, 254, 0.8); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        .star { position: absolute; width: 3px; height: 3px; background: #fff; border-radius: 50%; animation: twinkle 3s infinite; box-shadow: 0 0 10px #fff; }
        .sd:hover .sm { display: block; }
        .sd:hover { background: #006a4e; color: ${GOLD}; border-color: ${GOLD}; }
        .sm { display: none; position: absolute; top: 100%; left: 0; background: #fff; min-width: 210px; box-shadow: 0 12px 30px rgba(0,0,0,0.4); border-top: 5px solid ${GOLD}; z-index: 10000; }
        .si { padding: 12px 20px; color: #333; border-bottom: 1px solid #eee; font-size: 13px; cursor: pointer; transition: 0.2s; white-space: nowrap; text-align: left; }
        .si:hover { background: #f2f8f2; color: #006a4e; padding-left: 25px; }
      `}</style>
    </div>
  );
};

export default Home;