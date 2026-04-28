import React, { useState, Suspense, lazy, useRef, useEffect } from 'react';
import dgssLogo from '../assets/dgss_logo.png';
import moonBg from "../assets/moonBg.png";




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
  waz: safeLazy(() => import('./WazMahfil/WazMahfil')),
  worldcup: safeLazy(() => import('./WorldCup/WorldCup')),
  worldtv: safeLazy(() => import('./WorldTvChannel/WorldTvIndex')),
  quran: safeLazy(() => import('./Quran/Quran')),
  quran_translate: safeLazy(() => import('./Quran/TranslateofQuranandRefrence')),

  // ✅ নতুন যোগ করা — BDAllMinistrySecretary
  bd_all_ministry: safeLazy(() => import('./BDAllMinistrySecretary/BDAllMinistry')),
  bd_all_secretary: safeLazy(() => import('./BDAllMinistrySecretary/BDAllSecretary')),

  // ✅ নতুন যোগ করা — BDAllServices
  bd_citizen_services: safeLazy(() => import('./BDAllServices/BDAllCitizenServices')),
  bd_job_services: safeLazy(() => import('./BDAllServices/BDAllJobServices')),
};

/* =====================================================
   STYLED TITLE COMPONENT — The Star Style
===================================================== */
const StyledTitle = () => (
  <h1 style={{
    margin: '0',
    display: 'flex',
    alignItems: 'baseline',
    gap: '12px'
  }}>
    <span style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '48px',
      fontWeight: '800',
      letterSpacing: '1px',
      lineHeight: 1,
      background: 'linear-gradient(to bottom, #4ade80 50%, #ffffff 50%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      DOWLAT
    </span>
    <span style={{
      fontFamily: "'Arial Black', Impact, sans-serif",
      fontSize: '38px',
      fontWeight: '900',
      fontStyle: 'italic',
      letterSpacing: '-1px',
      lineHeight: 1,
      background: 'linear-gradient(to bottom, #3b82f6 50%, #ffffff 50%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      GLOBAL SMART SERVICE
    </span>
  </h1>
);

/* =====================================================
   AI CHAT PANEL COMPONENT
===================================================== */
const AiChatPanel = ({ onClose, lang }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: lang === 'bn'
        ? '🤖 আসসালামু আলাইকুম! আমি DGSS AI Assistant। আপনাকে কীভাবে সাহায্য করতে পারি?'
        : '🤖 Hello! I am DGSS AI Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const GOLD = "#ffce00";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const apiMessages = updatedMessages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: lang === 'bn'
            ? "তুমি DGSS (Dowlat Global Smart Service) পোর্টালের AI সহকারী। বাংলায় সংক্ষিপ্ত ও সহায়ক উত্তর দাও।"
            : "You are the AI assistant for DGSS (Dowlat Global Smart Service) portal. Give concise and helpful answers.",
          messages: apiMessages,
        })
      });

      const data = await response.json();
      const reply = data?.content?.[0]?.text || (lang === 'bn' ? 'দুঃখিত, উত্তর পাওয়া যায়নি।' : 'Sorry, no response received.');
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: lang === 'bn' ? '⚠️ সংযোগ ত্রুটি। আবার চেষ্টা করুন।' : '⚠️ Connection error. Please try again.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '90px',
      right: '20px',
      width: '360px',
      maxHeight: '520px',
      background: 'rgba(0,0,0,0.95)',
      border: `2px solid ${GOLD}`,
      borderRadius: '16px',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0 40px rgba(255,206,0,0.3)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      overflow: 'hidden',
    }}>
      {/* Chat Header */}
      <div style={{
        background: 'linear-gradient(135deg, #004d40, #006a4e)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `2px solid ${GOLD}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: GOLD, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '18px', fontWeight: 'bold', color: '#000'
          }}>🤖</div>
          <div>
            <div style={{ color: GOLD, fontWeight: 'bold', fontSize: '14px' }}>DGSS AI Assistant</div>
            <div style={{ color: '#a0f0c0', fontSize: '11px' }}>
              {lang === 'bn' ? '● অনলাইন' : '● Online'}
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{
          background: '#ff3333', color: '#fff', border: 'none',
          borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
          fontWeight: 'bold', fontSize: '13px'
        }}>✖</button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '12px',
        display: 'flex', flexDirection: 'column', gap: '10px',
        maxHeight: '360px',
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
          }}>
            <div style={{
              maxWidth: '82%',
              padding: '10px 14px',
              borderRadius: msg.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
              background: msg.role === 'user'
                ? 'linear-gradient(135deg, #006a4e, #004d40)'
                : 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: '13px',
              lineHeight: '1.5',
              border: msg.role === 'user' ? `1px solid ${GOLD}` : '1px solid rgba(255,255,255,0.15)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              padding: '10px 16px', borderRadius: '4px 16px 16px 16px',
              background: 'rgba(255,255,255,0.08)', color: GOLD,
              fontSize: '13px', border: '1px solid rgba(255,255,255,0.15)',
            }}>
              ⏳ {lang === 'bn' ? 'লিখছি...' : 'Typing...'}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '10px 12px',
        borderTop: `1px solid rgba(255,206,0,0.3)`,
        display: 'flex', gap: '8px', alignItems: 'flex-end',
        background: 'rgba(0,0,0,0.5)',
      }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={lang === 'bn' ? 'এখানে লিখুন... (Enter = পাঠান)' : 'Type here... (Enter = Send)'}
          rows={2}
          style={{
            flex: 1, background: 'rgba(255,255,255,0.08)',
            border: `1px solid ${GOLD}`, borderRadius: '10px',
            color: '#fff', padding: '8px 12px', fontSize: '13px',
            resize: 'none', outline: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif",
            lineHeight: '1.4',
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            background: loading || !input.trim() ? '#444' : GOLD,
            color: '#000', border: 'none', borderRadius: '10px',
            padding: '10px 14px', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
            fontWeight: 'bold', fontSize: '16px', transition: '0.2s',
            minWidth: '44px', height: '44px',
          }}
        >➤</button>
      </div>
    </div>
  );
};

/* =====================================================
   HOME COMPONENT
===================================================== */
const Home = () => {
  const [activeSubKey, setActiveSubKey] = useState(null);
  const [lang, setLang] = useState('bn');
  const [showAiChat, setShowAiChat] = useState(false);
  const GOLD = "#ffce00";
  const BLACK = "#000000";

  useEffect(() => {
    if (!document.getElementById('dgss-star-font')) {
      const link = document.createElement('link');
      link.id = 'dgss-star-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&family=Dancing+Script:wght@700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  const CONTENT = {
    bn: {
      subtitle: "ডিজিটাল বাংলাদেশের আধুনিক স্মার্ট সমাধান",
      footer: "© ২০২৪ - DOWLAT GLOBAL SMART SERVICE | সর্বস্বত্ব সংরক্ষিত",
      welcome: "ডিজিটাল স্মার্ট পোর্টালে স্বাগতম",
      instruction: "সার্ভিসগুলো দেখার জন্য মেনু বার ব্যবহার করুন।",
      btn_close: "বন্ধ করুন",
      btn_switch: "English",
      folders: [
        { name: 'বিভাগসমূহ', subs: [{n:'ঢাকা বিভাগ',k:'dhaka'},{n:'চট্টগ্রাম বিভাগ',k:'chittagong'},{n:'রাজশাহী বিভাগ',k:'rajshahi'},{n:'খুলনা বিভাগ',k:'khulna'},{n:'সিলেট বিভাগ',k:'sylhet'},{n:'বরিশাল বিভাগ',k:'barisal'},{n:'রংপুর বিভাগ',k:'rangpur'},{n:'ময়মনসিংহ বিভাগ',k:'mymensingh'}] },
        { name: 'কোচিং', subs: [{n:'সব কোচিং',k:'all_coaching'},{n:'ইংরেজি অল',k:'coaching_english'},{n:'HSC সাবজেক্ট',k:'coaching_hsc'},{n:'SSC সাবজেক্ট',k:'coaching_ssc'}] },
        { name: 'গেমস ওয়ার্ল্ড', subs: [{n:'গেমস ইনডেক্স',k:'games_index'},{n:'মোবাইল ও পিসি',k:'games_mobile'},{n:'শারীরিক গেমস',k:'games_physical'}] },
        { name: 'কমেডি ওয়ার্ল্ড', subs: [{n:'কমেডি হোম',k:'comedy_main'},{n:'কমেডি ইনডেক্স',k:'comedy_index'}] },
        { name: 'অনলাইন বিজনেস', subs: [{n:'বিজনেস হোম',k:'biz_main'},{n:'বিজনেস ইনডেক্স',k:'biz_index'}] },
        { name: 'অনলাইন টিউটোরিয়াল', subs: [{n:'টিউটোরিয়াল হোম',k:'tutorial'}] },
        { name: 'কমিউনিকেশন', subs: [{n:'যোগাযোগ',k:'comm_main'},{n:'ওয়ার্ল্ড টেল',k:'comm_tel'}] },
        { name: 'নিউজ পেপার', subs: [{n:'বিডি পেপার',k:'news_bd_index'},{n:'ওয়ার্ল্ড নিউজ',k:'news_world'}] },
        { name: 'শেয়ার মার্কেট', subs: [{n:'মার্কেট পোর্টাল',k:'share_m_main'},{n:'মার্কেট ইনডেক্স',k:'share_m_index'},{n:'মার্কেট নিউজ',k:'share_m_news'}] },
        { name: 'শেয়ার ওয়ার্ল্ড', subs: [{n:'শেয়ার হোম',k:'share_w_main'},{n:'গ্লোবাল ইনডেক্স',k:'share_w_index'},{n:'গ্লোবাল নিউজ',k:'share_w_news'}] },
        { name: 'সোশ্যাল মিডিয়া', subs: [{n:'মিডিয়া হোম',k:'social_main'},{n:'মিডিয়া ইনডেক্স',k:'social_index'}] },
        { name: 'ল্যাঙ্গুয়েজ', subs: [{n:'ল্যাঙ্গুয়েজ হোম',k:'lang_world'},{n:'কনভার্টার',k:'lang_converter'}] },
        { name: 'সফটওয়্যার', subs: [{n:'সফটওয়্যার হোম',k:'soft_worlds'},{n:'লার্নিং ইনডেক্স',k:'soft_learning'}] },
        { name: 'ট্যুরিস্ট ওয়ার্ল্ড', subs: [{n:'ট্যুরিস্ট হোম',k:'tourist_main'},{n:'ট্যুরিস্ট ইনফো',k:'tourist_comm'},{n:'ট্যুরিস্ট সিনারিও',k:'tourist_scene'}] },
        { name: 'বিডি টিভি', subs: [{n:'টিভি ইনডেক্স',k:'bdtv'}] },
        { name: 'হাদিস', subs: [{n:'আল হাদিস',k:'hadith'}] },
        { name: 'কুরআন', subs: [{n:'আল কুরআন',k:'quran'},{n:'অনুবাদ ও রেফারেন্স',k:'quran_translate'}]},
        { name: 'ওয়াজ মাহফিল', subs: [{n:'ওয়াজ মাহফিল',k:'waz'}] },
        { name: 'ওয়ার্ল্ড কাপ', subs: [{n:'স্পোর্টস সেন্টার',k:'worldcup'}] },
        { name: 'ওয়ার্ল্ড টিভি', subs: [{n:'গ্লোবাল টিভি',k:'worldtv'}] },
        // ✅ নতুন যোগ করা
        { name: 'মন্ত্রণালয় ও সচিবালয়', subs: [{n:'সব মন্ত্রণালয়',k:'bd_all_ministry'},{n:'সব সচিবালয়',k:'bd_all_secretary'}] },
        { name: 'বিডি সেবাসমূহ', subs: [{n:'নাগরিক সেবা',k:'bd_citizen_services'},{n:'চাকরি সেবা',k:'bd_job_services'}] },
      ]
    },
    en: {
      subtitle: "Modern Smart Solutions for Digital Bangladesh",
      footer: "© 2024 - DOWLAT GLOBAL SMART SERVICE | All Rights Reserved",
      welcome: "Welcome to Digital Smart Portal",
      instruction: "Use the menu bar above to access all services.",
      btn_close: "Close",
      btn_switch: "বাংলায় দেখুন",
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
        { name: 'Quran', subs: [{n:'Holy Quran',k:'quran'},{n:'Translation & Reference',k:'quran_translate'}]},
        { name: 'Waz Mahfil', subs: [{n:'Islamic Waz',k:'waz'}] },
        { name: 'World Cup', subs: [{n:'Sports Center',k:'worldcup'}] },
        { name: 'World TV', subs: [{n:'Global TV',k:'worldtv'}] },
        // ✅ নতুন যোগ করা
        { name: 'Ministry & Secretariat', subs: [{n:'All Ministries',k:'bd_all_ministry'},{n:'All Secretariats',k:'bd_all_secretary'}] },
        { name: 'BD Services', subs: [{n:'Citizen Services',k:'bd_citizen_services'},{n:'Job Services',k:'bd_job_services'}] },
      ]
    }
  };

  const RealisticEarthLogo = ({ size = 95 }) => (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: `${size*0.75}px`, height: `${size*0.75}px`, background: 'url("https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png")', backgroundSize: 'cover', borderRadius: '50%', boxShadow: 'inset -5px -5px 25px rgba(0,0,0,0.9), 0 0 45px rgba(79, 172, 254, 0.7)', zIndex: 2, animation: 'pulseEarth 4s infinite alternate' }}></div>
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
  const row3 = folderList.slice(14, 21);
  // ✅ নতুন row4 — নতুন দুটো মেনু এখানে দেখাবে
  const row4 = folderList.slice(21);

  const renderActiveComponent = () => {
    const Comp = PORTAL_COMPONENTS[activeSubKey];
    if (!Comp) return null;
    return (
      <Suspense fallback={
        <p style={{ textAlign: 'center', padding: '60px', color: '#fff' }}>
          {lang === 'bn' ? 'লোড হচ্ছে...' : 'Loading...'}
        </p>
      }>
        <Comp lang={lang} />
      </Suspense>
    );
  };

  const getTitleLabel = (key) => {
    const labels = {
      quran: '📖 আল কুরআন',
      quran_translate: '📖 কুরআন অনুবাদ ও রেফারেন্স',
      hadith: '📜 আল হাদিস',
      waz: '🎙️ ওয়াজ মাহফিল',
      bd_all_ministry: '🏛️ সব মন্ত্রণালয়',
      bd_all_secretary: '🏢 সব সচিবালয়',
      bd_citizen_services: '🧑‍💼 নাগরিক সেবা',
      bd_job_services: '💼 চাকরি সেবা',
    };
    return labels[key] || key.toUpperCase().replace(/_/g, ' ');
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#fff' }}>

      {/* Header */}
      <div style={{ background: '#000', padding: '15px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 2000 }}>
          <button onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} style={{ background: GOLD, color: BLACK, border: 'none', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
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
          <StyledTitle />
        </div>
        <p style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>{CONTENT[lang].subtitle}</p>
      </div>

      {/* Nav */}
      <div style={{ background: '#004d40', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `3px solid ${GOLD}`, minHeight: '120px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px 0' }}>
          {[row1, row2, row3, row4].map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', width: '100%', minHeight: '35px' }}>
              {row.map((folder, i) => (
                <div key={i} className="sd" style={{ padding: '6px 10px', cursor: 'pointer', position: 'relative', fontWeight: 'bold', fontSize: '11px', border: '1px solid rgba(255,255,255,0.1)', margin: '2px', borderRadius: '4px', textAlign: 'center', minWidth: '155px' }}>
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
        minHeight: '500px',
        position: 'relative',
        borderRadius: '15px',
        boxShadow: '0 0 60px rgba(0,0,0,0.8)',
        backgroundImage: `url(${moonBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        zIndex: 5,
      }}>

        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 6,
          background: activeSubKey ? 'rgba(0,0,0,0.5)' : 'transparent',
          transition: '0.5s',
          pointerEvents: 'none',
        }} />

        {activeSubKey ? (
          <div style={{
            width: '92%',
            maxWidth: '1200px',
            minHeight: '70vh',
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            padding: '30px',
            border: `1px solid ${GOLD}`,
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
            color: '#fff',
            zIndex: 10,
            margin: '20px auto',
            overflowY: 'auto',
            maxHeight: '75vh',
          }}>
            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: GOLD, margin: 0, fontSize: '22px', textShadow: '2px 2px 10px #000' }}>
                {getTitleLabel(activeSubKey)}
              </h3>
              <button onClick={() => setActiveSubKey(null)} style={{ background: '#ff3333', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold' }}>
                {CONTENT[lang].btn_close} ✖
              </button>
            </div>
            {renderActiveComponent()}
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#fff', padding: '180px 20px', zIndex: 5, width: '100%' }}>
            <h2 style={{ fontSize: '56px', fontWeight: 'bold', textShadow: '0 5px 30px #000', margin: '0', letterSpacing: '2px' }}>{CONTENT[lang].welcome}</h2>
            <p style={{ fontSize: '22px', textShadow: '0 2px 20px #000', marginTop: '20px', fontWeight: '500' }}>{CONTENT[lang].instruction}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ background: BLACK, color: '#fff', padding: '40px 20px', textAlign: 'center', borderTop: `4px solid ${GOLD}` }}>
        <p style={{ fontSize: '12px' }}>{CONTENT[lang].footer}</p>
      </footer>

      {/* AI CHAT FLOATING BUTTON + PANEL */}
      {showAiChat && <AiChatPanel onClose={() => setShowAiChat(false)} lang={lang} />}

      <button
        onClick={() => setShowAiChat(prev => !prev)}
        title={lang === 'bn' ? 'DGSS AI Assistant' : 'DGSS AI Assistant'}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          background: showAiChat
            ? '#ff3333'
            : `linear-gradient(135deg, ${GOLD}, #ff9900)`,
          color: '#000',
          border: 'none',
          fontSize: '26px',
          cursor: 'pointer',
          zIndex: 100000,
          boxShadow: showAiChat
            ? '0 0 20px rgba(255,51,51,0.6)'
            : '0 0 25px rgba(255,206,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          animation: showAiChat ? 'none' : 'aiPulse 2s infinite',
        }}
      >
        {showAiChat ? '✖' : '🤖'}
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&family=Dancing+Script:wght@700&family=Russo+One&display=swap');
        @keyframes rotateOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseEarth { from { box-shadow: 0 0 20px rgba(79,172,254,0.4); } to { box-shadow: 0 0 45px rgba(79,172,254,0.8); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes twinkle { 0%,100%{opacity:0.3;transform:scale(1);}50%{opacity:1;transform:scale(1.2);} }
        @keyframes aiPulse { 0%,100%{box-shadow:0 0 25px rgba(255,206,0,0.7),0 4px 20px rgba(0,0,0,0.5);} 50%{box-shadow:0 0 45px rgba(255,206,0,1),0 4px 20px rgba(0,0,0,0.5);} }
        .star{position:absolute;width:3px;height:3px;background:#fff;border-radius:50%;animation:twinkle 3s infinite;box-shadow:0 0 10px #fff;}
        .sd:hover .sm{display:block;}
        .sd:hover{background:#006a4e;color:${GOLD};border-color:${GOLD};}
        .sm{display:none;position:absolute;top:100%;left:0;background:#fff;min-width:210px;box-shadow:0 12px 30px rgba(0,0,0,0.4);border-top:5px solid ${GOLD};z-index:10000;}
        .si{padding:12px 20px;color:#333;border-bottom:1px solid #eee;font-size:13px;cursor:pointer;transition:0.2s;white-space:nowrap;text-align:left;}
        .si:hover{background:#f2f8f2;color:#006a4e;padding-left:25px;}
      `}</style>
    </div>
  );
};

export default Home;