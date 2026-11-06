import React, { useState, Suspense, lazy, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { SEO_PAGES } from '../seoData';
import dgssLogo from '../assets/dgss_logo.png';
import moonBg from "../assets/moonBg.jpg";




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

  // âœ… à¦¨à¦¤à§à¦¨ à¦¯à§‹à¦— à¦•à¦°à¦¾ â€” BDAllMinistrySecretary
  bd_all_ministry: safeLazy(() => import('./BDAllMinistrySecretary/BDAllMinistry')),
  bd_all_secretary: safeLazy(() => import('./BDAllMinistrySecretary/BDAllSecretary')),

  // âœ… à¦¨à¦¤à§à¦¨ à¦¯à§‹à¦— à¦•à¦°à¦¾ â€” BDAllServices
  bd_citizen_services: safeLazy(() => import('./BDAllServices/BDAllCitizenServices')),
  bd_job_services: safeLazy(() => import('./BDAllServices/BDAllJobServices')),
};

const RealisticEarthLogo = ({ size = 150 }) => {
  const letters = [
    { char: 'D', color: '#ff3333', angle: -20 },
    { char: 'G', color: '#33ff33', angle: -7 },
    { char: 'S', color: '#3333ff', angle: 7 },
    { char: 'S', color: '#ffff33', angle: 20 },
  ];
  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: `${size * 0.75}px`,
        height: `${size * 0.75}px`,
        background: 'url("https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png")',
        backgroundSize: 'cover',
        borderRadius: '50%',
        border: '3px solid #000',
        boxShadow: 'inset -5px -5px 25px rgba(0,0,0,0.9), 0 0 15px rgba(79, 172, 254, 0.4)',
        zIndex: 2,
        animation: 'spinGlobe 15s linear infinite, pulseEarth 4s infinite alternate',
      }} />
      <div style={{ position: 'absolute', width: '100%', height: '100%', animation: 'rotateOrbit 8s linear infinite', zIndex: 5 }}>
        {letters.map((letter, index) => (
          <span key={index} style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: `translateX(-50%) rotate(${letter.angle}deg)`,
            transformOrigin: `50% ${size / 2 + 10}px`,
            color: letter.color,
            fontWeight: '900',
            fontSize: `${size * 0.14}px`,
            textShadow: `0 0 12px ${letter.color}`,
            fontFamily: 'Arial Black, sans-serif',
          }}>
            {letter.char}
          </span>
        ))}
      </div>
    </div>
  );
};

/* =====================================================
   STYLED TITLE COMPONENT â€” The Star Style
===================================================== */
const StyledTitle = () => (
  <div style={{
    margin: '0',
    display: 'flex',
    alignItems: 'baseline',
    gap: '12px'
  }}>
    <span style={{
      fontFamily: "'Chomsky', sans-serif",
      fontSize: '40px',
      fontWeight: 'normal',
      letterSpacing: '1px',
      lineHeight: 1,
      background: 'linear-gradient(to bottom, #4ade80 50%, #ffffff 50%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    }}>DOWLAT</span>
    <span style={{
      fontFamily: "'Arial Black', Impact, sans-serif",
      fontSize: '24px',
      fontWeight: '900',
      fontStyle: 'italic',
      letterSpacing: '-1px',
      lineHeight: 1,
      background: 'linear-gradient(to bottom, #3b82f6 50%, #ffffff 50%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>GLOBAL SMART SERVICES</span>
  </div>
);

/* =====================================================
   AI CHAT PANEL COMPONENT
===================================================== */
const AiChatPanel = ({ onClose, lang }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: lang === 'bn'
        ? 'ðŸ¤– à¦†à¦¸à¦¸à¦¾à¦²à¦¾à¦®à§ à¦†à¦²à¦¾à¦‡à¦•à§à¦®! à¦†à¦®à¦¿ DGSS AI Assistantà¥¤ à¦†à¦ªà¦¨à¦¾à¦•à§‡ à¦•à§€à¦­à¦¾à¦¬à§‡ à¦¸à¦¾à¦¹à¦¾à¦¯à§à¦¯ à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à¦¿?'
        : 'ðŸ¤– Hello! I am DGSS AI Assistant. How can I help you today?'
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
            ? "à¦¤à§à¦®à¦¿ DGSS (Dowlat Global Smart Service) à¦ªà§‹à¦°à§à¦Ÿà¦¾à¦²à§‡à¦° AI à¦¸à¦¹à¦•à¦¾à¦°à§€à¥¤ à¦¬à¦¾à¦‚à¦²à¦¾à¦¯à¦¼ à¦¸à¦‚à¦•à§à¦·à¦¿à¦ªà§à¦¤ à¦“ à¦¸à¦¹à¦¾à¦¯à¦¼à¦• à¦‰à¦¤à§à¦¤à¦° à¦¦à¦¾à¦“à¥¤"
            : "You are the AI assistant for DGSS (Dowlat Global Smart Service) portal. Give concise and helpful answers.",
          messages: apiMessages,
        })
      });

      const data = await response.json();
      const reply = data?.content?.[0]?.text || (lang === 'bn' ? 'à¦¦à§à¦ƒà¦–à¦¿à¦¤, à¦‰à¦¤à§à¦¤à¦° à¦ªà¦¾à¦“à¦¯à¦¼à¦¾ à¦¯à¦¾à¦¯à¦¼à¦¨à¦¿à¥¤' : 'Sorry, no response received.');
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('AI chat request failed:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: lang === 'bn' ? 'âš ï¸ à¦¸à¦‚à¦¯à§‹à¦— à¦¤à§à¦°à§à¦Ÿà¦¿à¥¤ à¦†à¦¬à¦¾à¦° à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à§à¦¨à¥¤' : 'âš ï¸ Connection error. Please try again.'
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
          }}>ðŸ¤–</div>
          <div>
            <div style={{ color: GOLD, fontWeight: 'bold', fontSize: '14px' }}>DGSS AI Assistant</div>
            <div style={{ color: '#a0f0c0', fontSize: '11px' }}>
              {lang === 'bn' ? 'â— à¦…à¦¨à¦²à¦¾à¦‡à¦¨' : 'â— Online'}
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{
          background: '#ff3333', color: '#fff', border: 'none',
          borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
          fontWeight: 'bold', fontSize: '13px'
        }}>âœ–</button>
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
              â³ {lang === 'bn' ? 'à¦²à¦¿à¦–à¦›à¦¿...' : 'Typing...'}
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
          placeholder={lang === 'bn' ? 'à¦à¦–à¦¾à¦¨à§‡ à¦²à¦¿à¦–à§à¦¨... (Enter = à¦ªà¦¾à¦ à¦¾à¦¨)' : 'Type here... (Enter = Send)'}
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
        >âž¤</button>
      </div>
    </div>
  );
};

/* =====================================================
   HOME COMPONENT
===================================================== */
const Home = () => {
  // SEO: à¦¸à¦•à§à¦°à¦¿à¦¯à¦¼ à¦¸à§‡à¦•à¦¶à¦¨ à¦à¦–à¦¨ URL à¦¥à§‡à¦•à§‡ à¦†à¦¸à§‡ (/service/dhaka, /service/all-coaching ...)
  const { divKey } = useParams();
  const navigate = useNavigate();
  const urlKey = divKey ? divKey.replace(/-/g, '_') : null;
  const activeSubKey = urlKey && PORTAL_COMPONENTS[urlKey] ? urlKey : null;
  const setActiveSubKey = (k) => navigate(k ? `/service/${k.replace(/_/g, '-')}` : '/');
  const [lang, setLang] = useState('bn');
  const [showAiChat, setShowAiChat] = useState(false);
  const GOLD = "#ffce00";
  const BLACK = "#000000";

  useEffect(() => {
    if (!document.getElementById('dgss-star-font')) {
      const link = document.createElement('link');
      link.id = 'dgss-star-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.cdnfonts.com/css/chomsky';
      document.head.appendChild(link);
    }
  }, []);

  const CONTENT = {
    bn: {
      subtitle: "All World Services in One Place",
      footer: "Â© à§¨à§¦à§¨à§ª - DOWLAT GLOBAL SMART SERVICES | à¦¸à¦°à§à¦¬à¦¸à§à¦¬à¦¤à§à¦¬ à¦¸à¦‚à¦°à¦•à§à¦·à¦¿à¦¤",
      welcome: "à¦¡à¦¿à¦œà¦¿à¦Ÿà¦¾à¦² à¦¸à§à¦®à¦¾à¦°à§à¦Ÿ à¦ªà§‹à¦°à§à¦Ÿà¦¾à¦²à§‡ à¦¸à§à¦¬à¦¾à¦—à¦¤à¦®",
      instruction: "à¦¸à¦¾à¦°à§à¦­à¦¿à¦¸à¦—à§à¦²à§‹ à¦¦à§‡à¦–à¦¾à¦° à¦œà¦¨à§à¦¯ à¦®à§‡à¦¨à§ à¦¬à¦¾à¦° à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
      btn_close: "à¦¬à¦¨à§à¦§ à¦•à¦°à§à¦¨",
      btn_switch: "English",
      folders: [
        { name: 'à¦¬à¦¿à¦­à¦¾à¦—à¦¸à¦®à§‚à¦¹', subs: [{n:'à¦¢à¦¾à¦•à¦¾ à¦¬à¦¿à¦­à¦¾à¦—',k:'dhaka'},{n:'à¦šà¦Ÿà§à¦Ÿà¦—à§à¦°à¦¾à¦® à¦¬à¦¿à¦­à¦¾à¦—',k:'chittagong'},{n:'à¦°à¦¾à¦œà¦¶à¦¾à¦¹à§€ à¦¬à¦¿à¦­à¦¾à¦—',k:'rajshahi'},{n:'à¦–à§à¦²à¦¨à¦¾ à¦¬à¦¿à¦­à¦¾à¦—',k:'khulna'},{n:'à¦¸à¦¿à¦²à§‡à¦Ÿ à¦¬à¦¿à¦­à¦¾à¦—',k:'sylhet'},{n:'à¦¬à¦°à¦¿à¦¶à¦¾à¦² à¦¬à¦¿à¦­à¦¾à¦—',k:'barisal'},{n:'à¦°à¦‚à¦ªà§à¦° à¦¬à¦¿à¦­à¦¾à¦—',k:'rangpur'},{n:'à¦®à¦¯à¦¼à¦®à¦¨à¦¸à¦¿à¦‚à¦¹ à¦¬à¦¿à¦­à¦¾à¦—',k:'mymensingh'}] },
        { name: 'à¦•à§‹à¦šà¦¿à¦‚', subs: [{n:'à¦¸à¦¬ à¦•à§‹à¦šà¦¿à¦‚',k:'all_coaching'},{n:'à¦‡à¦‚à¦°à§‡à¦œà¦¿ à¦…à¦²',k:'coaching_english'},{n:'HSC à¦¸à¦¾à¦¬à¦œà§‡à¦•à§à¦Ÿ',k:'coaching_hsc'},{n:'SSC à¦¸à¦¾à¦¬à¦œà§‡à¦•à§à¦Ÿ',k:'coaching_ssc'}] },
        { name: 'à¦—à§‡à¦®à¦¸ à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡', subs: [{n:'à¦—à§‡à¦®à¦¸ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'games_index'},{n:'à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦“ à¦ªà¦¿à¦¸à¦¿',k:'games_mobile'},{n:'à¦¶à¦¾à¦°à§€à¦°à¦¿à¦• à¦—à§‡à¦®à¦¸',k:'games_physical'}] },
        { name: 'à¦•à¦®à§‡à¦¡à¦¿ à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡', subs: [{n:'à¦•à¦®à§‡à¦¡à¦¿ à¦¹à§‹à¦®',k:'comedy_main'},{n:'à¦•à¦®à§‡à¦¡à¦¿ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'comedy_index'}] },
        { name: 'à¦…à¦¨à¦²à¦¾à¦‡à¦¨ à¦¬à¦¿à¦œà¦¨à§‡à¦¸', subs: [{n:'à¦¬à¦¿à¦œà¦¨à§‡à¦¸ à¦¹à§‹à¦®',k:'biz_main'},{n:'à¦¬à¦¿à¦œà¦¨à§‡à¦¸ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'biz_index'}] },
        { name: 'à¦…à¦¨à¦²à¦¾à¦‡à¦¨ à¦Ÿà¦¿à¦‰à¦Ÿà§‹à¦°à¦¿à¦¯à¦¼à¦¾à¦²', subs: [{n:'à¦Ÿà¦¿à¦‰à¦Ÿà§‹à¦°à¦¿à¦¯à¦¼à¦¾à¦² à¦¹à§‹à¦®',k:'tutorial'}] },
        { name: 'à¦•à¦®à¦¿à¦‰à¦¨à¦¿à¦•à§‡à¦¶à¦¨', subs: [{n:'à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦—',k:'comm_main'},{n:'à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡ à¦Ÿà§‡à¦²',k:'comm_tel'}] },
        { name: 'à¦¨à¦¿à¦‰à¦œ à¦ªà§‡à¦ªà¦¾à¦°', subs: [{n:'à¦¬à¦¿à¦¡à¦¿ à¦ªà§‡à¦ªà¦¾à¦°',k:'news_bd_index'},{n:'à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡ à¦¨à¦¿à¦‰à¦œ',k:'news_world'}] },
        { name: 'à¦¶à§‡à¦¯à¦¼à¦¾à¦° à¦®à¦¾à¦°à§à¦•à§‡à¦Ÿ', subs: [{n:'à¦®à¦¾à¦°à§à¦•à§‡à¦Ÿ à¦ªà§‹à¦°à§à¦Ÿà¦¾à¦²',k:'share_m_main'},{n:'à¦®à¦¾à¦°à§à¦•à§‡à¦Ÿ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'share_m_index'},{n:'à¦®à¦¾à¦°à§à¦•à§‡à¦Ÿ à¦¨à¦¿à¦‰à¦œ',k:'share_m_news'}] },
        { name: 'à¦¶à§‡à¦¯à¦¼à¦¾à¦° à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡', subs: [{n:'à¦¶à§‡à¦¯à¦¼à¦¾à¦° à¦¹à§‹à¦®',k:'share_w_main'},{n:'à¦—à§à¦²à§‹à¦¬à¦¾à¦² à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'share_w_index'},{n:'à¦—à§à¦²à§‹à¦¬à¦¾à¦² à¦¨à¦¿à¦‰à¦œ',k:'share_w_news'}] },
        { name: 'à¦¸à§‹à¦¶à§à¦¯à¦¾à¦² à¦®à¦¿à¦¡à¦¿à¦¯à¦¼à¦¾', subs: [{n:'à¦®à¦¿à¦¡à¦¿à¦¯à¦¼à¦¾ à¦¹à§‹à¦®',k:'social_main'},{n:'à¦®à¦¿à¦¡à¦¿à¦¯à¦¼à¦¾ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'social_index'}] },
        { name: 'à¦²à§à¦¯à¦¾à¦™à§à¦—à§à¦¯à¦¼à§‡à¦œ', subs: [{n:'à¦²à§à¦¯à¦¾à¦™à§à¦—à§à¦¯à¦¼à§‡à¦œ à¦¹à§‹à¦®',k:'lang_world'},{n:'à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°',k:'lang_converter'}] },
        { name: 'à¦¸à¦«à¦Ÿà¦“à¦¯à¦¼à§à¦¯à¦¾à¦°', subs: [{n:'à¦¸à¦«à¦Ÿà¦“à¦¯à¦¼à§à¦¯à¦¾à¦° à¦¹à§‹à¦®',k:'soft_worlds'},{n:'à¦²à¦¾à¦°à§à¦¨à¦¿à¦‚ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'soft_learning'}] },
        { name: 'à¦Ÿà§à¦¯à§à¦°à¦¿à¦¸à§à¦Ÿ à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡', subs: [{n:'à¦Ÿà§à¦¯à§à¦°à¦¿à¦¸à§à¦Ÿ à¦¹à§‹à¦®',k:'tourist_main'},{n:'à¦Ÿà§à¦¯à§à¦°à¦¿à¦¸à§à¦Ÿ à¦‡à¦¨à¦«à§‹',k:'tourist_comm'},{n:'à¦Ÿà§à¦¯à§à¦°à¦¿à¦¸à§à¦Ÿ à¦¸à¦¿à¦¨à¦¾à¦°à¦¿à¦“',k:'tourist_scene'}] },
        { name: 'à¦¬à¦¿à¦¡à¦¿ à¦Ÿà¦¿à¦­à¦¿', subs: [{n:'à¦Ÿà¦¿à¦­à¦¿ à¦‡à¦¨à¦¡à§‡à¦•à§à¦¸',k:'bdtv'}] },
        { name: 'à¦¹à¦¾à¦¦à¦¿à¦¸', subs: [{n:'à¦†à¦² à¦¹à¦¾à¦¦à¦¿à¦¸',k:'hadith'}] },
        { name: 'à¦•à§à¦°à¦†à¦¨', subs: [{n:'à¦†à¦² à¦•à§à¦°à¦†à¦¨',k:'quran'},{n:'à¦…à¦¨à§à¦¬à¦¾à¦¦ à¦“ à¦°à§‡à¦«à¦¾à¦°à§‡à¦¨à§à¦¸',k:'quran_translate'}]},
        { name: 'à¦“à¦¯à¦¼à¦¾à¦œ à¦®à¦¾à¦¹à¦«à¦¿à¦²', subs: [{n:'à¦“à¦¯à¦¼à¦¾à¦œ à¦®à¦¾à¦¹à¦«à¦¿à¦²',k:'waz'}] },
        { name: 'à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡ à¦•à¦¾à¦ª', subs: [{n:'à¦¸à§à¦ªà§‹à¦°à§à¦Ÿà¦¸ à¦¸à§‡à¦¨à§à¦Ÿà¦¾à¦°',k:'worldcup'}] },
        { name: 'à¦“à¦¯à¦¼à¦¾à¦°à§à¦²à§à¦¡ à¦Ÿà¦¿à¦­à¦¿', subs: [{n:'à¦—à§à¦²à§‹à¦¬à¦¾à¦² à¦Ÿà¦¿à¦­à¦¿',k:'worldtv'}] },
        // âœ… à¦¨à¦¤à§à¦¨ à¦¯à§‹à¦— à¦•à¦°à¦¾
        { name: 'à¦®à¦¨à§à¦¤à§à¦°à¦£à¦¾à¦²à¦¯à¦¼ à¦“ à¦¸à¦šà¦¿à¦¬à¦¾à¦²à¦¯à¦¼', subs: [{n:'à¦¸à¦¬ à¦®à¦¨à§à¦¤à§à¦°à¦£à¦¾à¦²à¦¯à¦¼',k:'bd_all_ministry'},{n:'à¦¸à¦¬ à¦¸à¦šà¦¿à¦¬à¦¾à¦²à¦¯à¦¼',k:'bd_all_secretary'}] },
        { name: 'à¦¬à¦¿à¦¡à¦¿ à¦¸à§‡à¦¬à¦¾à¦¸à¦®à§‚à¦¹', subs: [{n:'à¦¨à¦¾à¦—à¦°à¦¿à¦• à¦¸à§‡à¦¬à¦¾',k:'bd_citizen_services'},{n:'à¦šà¦¾à¦•à¦°à¦¿ à¦¸à§‡à¦¬à¦¾',k:'bd_job_services'}] },
      ]
    },
    en: {
      subtitle: "All World Services in One Place",
      footer: "Â© 2024 - DOWLAT GLOBAL SMART SERVICES | All Rights Reserved",
      welcome: "Welcome to Digital Smart Portal",
      instruction: "Use the menu bar above to access all services.",
      btn_close: "Close",
      btn_switch: "à¦¬à¦¾à¦‚à¦²à¦¾à¦¯à¦¼ à¦¦à§‡à¦–à§à¦¨",
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
        // âœ… à¦¨à¦¤à§à¦¨ à¦¯à§‹à¦— à¦•à¦°à¦¾
        { name: 'Ministry & Secretariat', subs: [{n:'All Ministries',k:'bd_all_ministry'},{n:'All Secretariats',k:'bd_all_secretary'}] },
        { name: 'BD Services', subs: [{n:'Citizen Services',k:'bd_citizen_services'},{n:'Job Services',k:'bd_job_services'}] },
      ]
    }
  };

  const folderList = CONTENT[lang].folders;
  const row1 = folderList.slice(0, 7);
  const row2 = folderList.slice(7, 14);
  const row3 = folderList.slice(14, 21);
  // âœ… à¦¨à¦¤à§à¦¨ row4 â€” à¦¨à¦¤à§à¦¨ à¦¦à§à¦Ÿà§‹ à¦®à§‡à¦¨à§ à¦à¦–à¦¾à¦¨à§‡ à¦¦à§‡à¦–à¦¾à¦¬à§‡
  const row4 = folderList.slice(21);

  const renderActiveComponent = () => {
    const Comp = PORTAL_COMPONENTS[activeSubKey];
    if (!Comp) return null;
    return (
      <Suspense fallback={
        <p style={{ textAlign: 'center', padding: '60px', color: '#fff' }}>
          {lang === 'bn' ? 'à¦²à§‹à¦¡ à¦¹à¦šà§à¦›à§‡...' : 'Loading...'}
        </p>
      }>
        <Comp lang={lang} />
      </Suspense>
    );
  };

  const getTitleLabel = (key) => {
    const labels = {
      quran: 'ðŸ“– à¦†à¦² à¦•à§à¦°à¦†à¦¨',
      quran_translate: 'ðŸ“– à¦•à§à¦°à¦†à¦¨ à¦…à¦¨à§à¦¬à¦¾à¦¦ à¦“ à¦°à§‡à¦«à¦¾à¦°à§‡à¦¨à§à¦¸',
      hadith: 'ðŸ“œ à¦†à¦² à¦¹à¦¾à¦¦à¦¿à¦¸',
      waz: 'ðŸŽ™ï¸ à¦“à¦¯à¦¼à¦¾à¦œ à¦®à¦¾à¦¹à¦«à¦¿à¦²',
      bd_all_ministry: 'ðŸ›ï¸ à¦¸à¦¬ à¦®à¦¨à§à¦¤à§à¦°à¦£à¦¾à¦²à¦¯à¦¼',
      bd_all_secretary: 'ðŸ¢ à¦¸à¦¬ à¦¸à¦šà¦¿à¦¬à¦¾à¦²à¦¯à¦¼',
      bd_citizen_services: 'ðŸ§‘â€ðŸ’¼ à¦¨à¦¾à¦—à¦°à¦¿à¦• à¦¸à§‡à¦¬à¦¾',
      bd_job_services: 'ðŸ’¼ à¦šà¦¾à¦•à¦°à¦¿ à¦¸à§‡à¦¬à¦¾',
    };
    return labels[key] || key.toUpperCase().replace(/_/g, ' ');
  };

  const seoPage = activeSubKey ? SEO_PAGES[activeSubKey] : null;
  const seoHeading = seoPage
    ? seoPage.title.replace(/\s*\|\s*DowlatGlobal Smart Service$/, '')
    : activeSubKey
      ? getTitleLabel(activeSubKey)
      : '';

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#fff' }}>

      <Seo
        title={seoPage?.title}
        description={seoPage?.description}
        path={activeSubKey ? `/service/${activeSubKey.replace(/_/g, '-')}` : '/'}
      />

      {/* Header */}
      <div style={{ background: '#000', padding: '15px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 2000 }}>
          <button onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} style={{ background: GOLD, color: BLACK, border: 'none', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
            {CONTENT[lang].btn_switch}
          </button>
        </div>
        <div style={{ marginBottom: '-35px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <RealisticEarthLogo size={150} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={dgssLogo} alt="DowlatGlobal Smart Service à¦²à§‹à¦—à§‹" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'screen', filter: 'contrast(1.5) brightness(1.1)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledTitle />
            <p style={{ 
              color: GOLD, 
              fontSize: '14px', 
              marginTop: '5px', 
              fontWeight: 'bold', 
              fontStyle: 'italic',
              letterSpacing: '4px', 
              textTransform: 'uppercase',
              textShadow: `0 0 10px rgba(255, 206, 0, 0.6), 0 2px 4px rgba(0,0,0,0.5)`,
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              {CONTENT[lang].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ background: '#004d40', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `3px solid ${GOLD}`, minHeight: '120px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px 0' }}>
          {[row1, row2, row3, row4].map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', width: '100%', minHeight: '35px' }}>
              {row.map((folder, i) => (
                <div key={i} className="sd" style={{ padding: '6px 10px', cursor: 'pointer', position: 'relative', fontWeight: 'bold', fontSize: '11px', border: '1px solid rgba(255,255,255,0.1)', margin: '2px', borderRadius: '4px', textAlign: 'center', minWidth: '155px' }}>
                  {folder.name} â–¾
                  <div className="sm">
                    {folder.subs.map((sub, j) => (
                      <a key={j} className="si" href={`/service/${sub.k.replace(/_/g, '-')}`} style={{ display: 'block', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); setActiveSubKey(sub.k); }}>âž¤ {sub.n}</a>
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
              <h1 style={{ color: GOLD, margin: 0, fontSize: '22px', textShadow: '2px 2px 10px #000' }}>
                {seoHeading}
              </h1>
              <button onClick={() => setActiveSubKey(null)} style={{ background: '#ff3333', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 30px', cursor: 'pointer', fontWeight: 'bold' }}>
                {CONTENT[lang].btn_close} âœ–
              </button>
            </div>
            {seoPage?.description && (
              <p style={{ margin: '0 0 24px', lineHeight: 1.7, color: '#f1f1f1' }}>
                {seoPage.description}
              </p>
            )}
            {renderActiveComponent()}
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#fff', padding: '180px 20px', zIndex: 5, width: '100%' }}>
            <h1 style={{ fontSize: '56px', fontWeight: 'bold', textShadow: '0 5px 30px #000', margin: '0', letterSpacing: '2px' }}>{CONTENT[lang].welcome}</h1>
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
        {showAiChat ? 'âœ–' : 'ðŸ¤–'}
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
