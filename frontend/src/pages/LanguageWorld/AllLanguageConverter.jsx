import React, { useState } from 'react';

const COLOR = '#e91e63';

const LANGUAGES = [
  { code: 'bn', name: 'বাংলা', native: 'বাংলা', flag: '🇧🇩' },
  { code: 'en', name: 'ইংরেজি', native: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'আরবি', native: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'হিন্দি', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'zh', name: 'চীনা', native: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'জাপানি', native: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'কোরিয়ান', native: '한국어', flag: '🇰🇷' },
  { code: 'fr', name: 'ফরাসি', native: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'স্প্যানিশ', native: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'জার্মান', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'রাশিয়ান', native: 'Русский', flag: '🇷🇺' },
  { code: 'pt', name: 'পর্তুগিজ', native: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'ইতালিয়ান', native: 'Italiano', flag: '🇮🇹' },
  { code: 'tr', name: 'তুর্কি', native: 'Türkçe', flag: '🇹🇷' },
  { code: 'fa', name: 'ফার্সি', native: 'فارسی', flag: '🇮🇷' },
  { code: 'ur', name: 'উর্দু', native: 'اردو', flag: '🇵🇰' },
  { code: 'he', name: 'হিব্রু', native: 'עברית', flag: '🇮🇱' },
  { code: 'sv', name: 'সুইডিশ', native: 'Svenska', flag: '🇸🇪' },
  { code: 'nl', name: 'ডাচ', native: 'Nederlands', flag: '🇳🇱' },
  { code: 'el', name: 'গ্রিক', native: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'id', name: 'ইন্দোনেশিয়ান', native: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'মালয়', native: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'th', name: 'থাই', native: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'ভিয়েতনামি', native: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'pa', name: 'পাঞ্জাবি', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'sw', name: 'সোয়াহিলি', native: 'Kiswahili', flag: '🇰🇪' },
  { code: 'pl', name: 'পোলিশ', native: 'Polski', flag: '🇵🇱' },
  { code: 'uk', name: 'ইউক্রেনিয়ান', native: 'Українська', flag: '🇺🇦' },
  { code: 'ro', name: 'রোমানিয়ান', native: 'Română', flag: '🇷🇴' },
  { code: 'cs', name: 'চেক', native: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'হাঙ্গেরিয়ান', native: 'Magyar', flag: '🇭🇺' },
  { code: 'fi', name: 'ফিনিশ', native: 'Suomi', flag: '🇫🇮' },
  { code: 'da', name: 'ডেনিশ', native: 'Dansk', flag: '🇩🇰' },
  { code: 'no', name: 'নরওয়েজিয়ান', native: 'Norsk', flag: '🇳🇴' },
  { code: 'sk', name: 'স্লোভাক', native: 'Slovenčina', flag: '🇸🇰' },
  { code: 'bg', name: 'বুলগেরিয়ান', native: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'ক্রোয়েশিয়ান', native: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sr', name: 'সার্বিয়ান', native: 'Српски', flag: '🇷🇸' },
  { code: 'lt', name: 'লিথুয়ানিয়ান', native: 'Lietuvių', flag: '🇱🇹' },
  { code: 'lv', name: 'লাটভিয়ান', native: 'Latviešu', flag: '🇱🇻' },
  { code: 'et', name: 'এস্তোনিয়ান', native: 'Eesti', flag: '🇪🇪' },
  { code: 'sl', name: 'স্লোভেনিয়ান', native: 'Slovenščina', flag: '🇸🇮' },
  { code: 'ca', name: 'কাতালান', native: 'Català', flag: '🇪🇸' },
  { code: 'af', name: 'আফ্রিকান্স', native: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sq', name: 'আলবেনিয়ান', native: 'Shqip', flag: '🇦🇱' },
  { code: 'hy', name: 'আর্মেনিয়ান', native: 'Հայերեն', flag: '🇦🇲' },
  { code: 'az', name: 'আজেরবাইজানি', native: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'be', name: 'বেলারুশিয়ান', native: 'Беларуская', flag: '🇧🇾' },
  { code: 'bs', name: 'বসনিয়ান', native: 'Bosanski', flag: '🇧🇦' },
  { code: 'cy', name: 'ওয়েলশ', native: 'Cymraeg', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { code: 'eu', name: 'বাস্ক', native: 'Euskara', flag: '🇪🇸' },
  { code: 'gl', name: 'গ্যালিশিয়ান', native: 'Galego', flag: '🇪🇸' },
  { code: 'ka', name: 'জর্জিয়ান', native: 'ქართული', flag: '🇬🇪' },
  { code: 'gu', name: 'গুজরাটি', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ht', name: 'হাইতিয়ান ক্রেওল', native: 'Kreyòl ayisyen', flag: '🇭🇹' },
  { code: 'is', name: 'আইসল্যান্ডিক', native: 'Íslenska', flag: '🇮🇸' },
  { code: 'ga', name: 'আইরিশ', native: 'Gaeilge', flag: '🇮🇪' },
  { code: 'kn', name: 'কান্নাডা', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'kk', name: 'কাজাখ', native: 'Қазақ', flag: '🇰🇿' },
  { code: 'km', name: 'খমের', native: 'ខ្មែរ', flag: '🇰🇭' },
  { code: 'lo', name: 'লাও', native: 'ລາວ', flag: '🇱🇦' },
  { code: 'mk', name: 'ম্যাসেডোনিয়ান', native: 'Македонски', flag: '🇲🇰' },
  { code: 'ml', name: 'মালায়ালাম', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'mr', name: 'মারাঠি', native: 'मराठी', flag: '🇮🇳' },
  { code: 'mn', name: 'মঙ্গোলিয়ান', native: 'Монгол', flag: '🇲🇳' },
  { code: 'my', name: 'বার্মিজ', native: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'ne', name: 'নেপালি', native: 'नेपाली', flag: '🇳🇵' },
  { code: 'ps', name: 'পশতু', native: 'پښتو', flag: '🇦🇫' },
  { code: 'si', name: 'সিংহলি', native: 'සිංහල', flag: '🇱🇰' },
  { code: 'so', name: 'সোমালি', native: 'Soomaali', flag: '🇸🇴' },
  { code: 'ta', name: 'তামিল', native: 'தமிழ்', flag: '🇱🇰' },
  { code: 'te', name: 'তেলুগু', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'tg', name: 'তাজিক', native: 'Тоҷикӣ', flag: '🇹🇯' },
  { code: 'tk', name: 'তুর্কমেন', native: 'Türkmençe', flag: '🇹🇲' },
  { code: 'uz', name: 'উজবেক', native: 'Oʻzbek', flag: '🇺🇿' },
  { code: 'yo', name: 'ইওরুবা', native: 'Yorùbá', flag: '🇳🇬' },
  { code: 'zu', name: 'জুলু', native: 'isiZulu', flag: '🇿🇦' },
  { code: 'am', name: 'আমহারিক', native: 'አማርኛ', flag: '🇪🇹' },
  { code: 'ha', name: 'হাউসা', native: 'Hausa', flag: '🇳🇬' },
  { code: 'ig', name: 'ইগবো', native: 'Igbo', flag: '🇳🇬' },
  { code: 'lb', name: 'লুক্সেমবার্গিশ', native: 'Lëtzebuergesch', flag: '🇱🇺' },
  { code: 'mt', name: 'মালটিজ', native: 'Malti', flag: '🇲🇹' },
];

const LangButton = ({ lang, selected, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '6px 10px',
      background: selected ? COLOR : '#112233',
      border: `1px solid ${selected ? COLOR : '#1e3a55'}`,
      borderRadius: '6px', color: '#fff', cursor: 'pointer',
      fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif",
      fontSize: '12px', transition: 'all 0.15s', whiteSpace: 'nowrap',
    }}
  >
    <span style={{ fontSize: '14px' }}>{lang.flag}</span>
    <span style={{ color: selected ? '#fff' : '#aac4dd' }}>{lang.name}</span>
    <span style={{ color: selected ? '#ffd' : '#556b7d', fontSize: '11px' }}>{lang.native}</span>
  </button>
);

export default function AllLanguageIndex() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [fromLang, setFromLang] = useState('bn');
  const [toLang, setToLang] = useState('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [search, setSearch] = useState('');
  const [searchTo, setSearchTo] = useState('');

  const fromLangObj = LANGUAGES.find(l => l.code === fromLang);
  const toLangObj = LANGUAGES.find(l => l.code === toLang);

  const filtered = (q) => LANGUAGES.filter(l =>
    l.name.includes(q) || l.native.toLowerCase().includes(q.toLowerCase()) || l.code.includes(q.toLowerCase())
  );

  const translate = async () => {
    if (!inputText.trim()) return;
    setLoading(true); setOutputText(''); setError('');
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `You are a professional translator. Translate the given text from ${fromLangObj?.native} to ${toLangObj?.native}. Return ONLY the translated text, nothing else.`,
          messages: [{ role: 'user', content: inputText }],
        }),
      });
      const data = await res.json();
      if (data?.content?.[0]?.text) setOutputText(data.content[0].text);
      else setError('অনুবাদ করা সম্ভব হয়নি।');
    } catch { setError('সংযোগ সমস্যা হয়েছে।'); }
    finally { setLoading(false); }
  };

  const autoTranslate = async () => {
    if (!inputText.trim()) return;
    setLoading(true); setOutputText(''); setError('');
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `Detect the language. If Bengali → translate to English. Otherwise → translate to Bengali. Return ONLY the translated text.`,
          messages: [{ role: 'user', content: inputText }],
        }),
      });
      const data = await res.json();
      if (data?.content?.[0]?.text) setOutputText(data.content[0].text);
      else setError('অনুবাদ করা সম্ভব হয়নি।');
    } catch { setError('সংযোগ সমস্যা।'); }
    finally { setLoading(false); }
  };

  const swap = () => {
    setFromLang(toLang); setToLang(fromLang);
    setInputText(outputText); setOutputText(inputText);
  };

  const copy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const ss = { // shared select style
    padding: '8px 12px', borderRadius: '8px',
    border: `1px solid ${COLOR}55`, background: '#0d2137',
    color: '#fff', fontSize: '13px', cursor: 'pointer',
    fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif",
    flex: 1, position: 'relative',
  };

  const dropdownStyle = {
    position: 'absolute', top: '110%', left: 0, right: 0, zIndex: 999,
    background: '#0a1e2f', border: `1px solid ${COLOR}55`,
    borderRadius: '8px', maxHeight: '280px', overflowY: 'auto',
    boxShadow: '0 8px 24px #00000088',
  };

  return (
    <div style={{ fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif" }}>

      {/* Auto Button */}
      <div style={{ marginBottom: '12px' }}>
        <button onClick={autoTranslate} disabled={loading || !inputText.trim()}
          style={{
            padding: '8px 18px', borderRadius: '7px', border: 'none',
            background: '#7b1fa2', color: '#fff', cursor: 'pointer',
            fontSize: '13px', fontWeight: '600', opacity: (!inputText.trim() || loading) ? 0.5 : 1,
          }}>
          ⚡ Auto: যেকোনো ভাষা ↔ বাংলা
        </button>
      </div>

      {/* Language Selectors */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>

        {/* FROM */}
        <div style={{ flex: 1, position: 'relative' }}>
          <div onClick={() => { setShowFromList(!showFromList); setShowToList(false); setSearch(''); }}
            style={{ ...ss, display: 'flex', alignItems: 'center', gap: '8px', userSelect: 'none' }}>
            <span style={{ fontSize: '18px' }}>{fromLangObj?.flag}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>{fromLangObj?.name}</div>
              <div style={{ fontSize: '11px', color: '#7a9bb5' }}>{fromLangObj?.native}</div>
            </div>
            <span style={{ color: '#556', fontSize: '11px' }}>{showFromList ? '▲' : '▼'}</span>
          </div>
          {showFromList && (
            <div style={dropdownStyle}>
              <div style={{ padding: '8px' }}>
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="ভাষা খুঁজুন..."
                  style={{
                    width: '100%', padding: '6px 10px', borderRadius: '6px',
                    border: `1px solid ${COLOR}44`, background: '#112233',
                    color: '#fff', fontSize: '12px', boxSizing: 'border-box',
                    fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif",
                  }} autoFocus />
              </div>
              {filtered(search).map(l => (
                <div key={l.code}
                  onClick={() => { setFromLang(l.code); setShowFromList(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '8px 12px', cursor: 'pointer',
                    background: fromLang === l.code ? '#1a3a5c' : 'transparent',
                    borderBottom: '1px solid #112233',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1a3a5c'}
                  onMouseLeave={e => e.currentTarget.style.background = fromLang === l.code ? '#1a3a5c' : 'transparent'}
                >
                  <span style={{ fontSize: '18px' }}>{l.flag}</span>
                  <div>
                    <div style={{ fontSize: '13px', color: '#e0f0ff' }}>{l.name}</div>
                    <div style={{ fontSize: '11px', color: '#556b7d' }}>{l.native}</div>
                  </div>
                  {fromLang === l.code && <span style={{ marginLeft: 'auto', color: COLOR }}>✓</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Swap */}
        <button onClick={swap} style={{
          padding: '10px 14px', background: '#1a3a5c',
          border: `1px solid ${COLOR}55`, borderRadius: '8px',
          color: '#fff', cursor: 'pointer', fontSize: '18px', flexShrink: 0,
        }}>⇄</button>

        {/* TO */}
        <div style={{ flex: 1, position: 'relative' }}>
          <div onClick={() => { setShowToList(!showToList); setShowFromList(false); setSearchTo(''); }}
            style={{ ...ss, display: 'flex', alignItems: 'center', gap: '8px', userSelect: 'none' }}>
            <span style={{ fontSize: '18px' }}>{toLangObj?.flag}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>{toLangObj?.name}</div>
              <div style={{ fontSize: '11px', color: '#7a9bb5' }}>{toLangObj?.native}</div>
            </div>
            <span style={{ color: '#556', fontSize: '11px' }}>{showToList ? '▲' : '▼'}</span>
          </div>
          {showToList && (
            <div style={dropdownStyle}>
              <div style={{ padding: '8px' }}>
                <input value={searchTo} onChange={e => setSearchTo(e.target.value)}
                  placeholder="ভাষা খুঁজুন..."
                  style={{
                    width: '100%', padding: '6px 10px', borderRadius: '6px',
                    border: `1px solid ${COLOR}44`, background: '#112233',
                    color: '#fff', fontSize: '12px', boxSizing: 'border-box',
                    fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif",
                  }} autoFocus />
              </div>
              {filtered(searchTo).map(l => (
                <div key={l.code}
                  onClick={() => { setToLang(l.code); setShowToList(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '8px 12px', cursor: 'pointer',
                    background: toLang === l.code ? '#1a3a5c' : 'transparent',
                    borderBottom: '1px solid #112233',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1a3a5c'}
                  onMouseLeave={e => e.currentTarget.style.background = toLang === l.code ? '#1a3a5c' : 'transparent'}
                >
                  <span style={{ fontSize: '18px' }}>{l.flag}</span>
                  <div>
                    <div style={{ fontSize: '13px', color: '#e0f0ff' }}>{l.name}</div>
                    <div style={{ fontSize: '11px', color: '#556b7d' }}>{l.native}</div>
                  </div>
                  {toLang === l.code && <span style={{ marginLeft: 'auto', color: COLOR }}>✓</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <textarea
        value={inputText}
        onChange={e => { setInputText(e.target.value); setError(''); }}
        onKeyDown={e => { if (e.ctrlKey && e.key === 'Enter') translate(); }}
        placeholder="এখানে লিখুন বা যেকোনো ভাষার টেক্সট পেস্ট করুন..."
        style={{
          width: '100%', minHeight: '140px', padding: '12px',
          borderRadius: '8px', border: `1px solid ${COLOR}44`,
          background: '#0d2137', color: '#e0e0e0', fontSize: '15px',
          fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif",
          lineHeight: '1.7', resize: 'vertical', boxSizing: 'border-box', outline: 'none',
        }}
      />

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px', margin: '10px 0', flexWrap: 'wrap' }}>
        <button onClick={translate} disabled={loading || !inputText.trim()}
          style={{
            flex: 1, padding: '9px 16px', borderRadius: '7px', border: 'none',
            background: loading ? '#444' : COLOR, color: '#fff', cursor: 'pointer',
            fontSize: '14px', fontWeight: '600',
            opacity: (!inputText.trim() || loading) ? 0.6 : 1,
          }}>
          {loading ? '⏳ অনুবাদ হচ্ছে...' : `🌐 অনুবাদ করুন`}
        </button>
        <button onClick={() => { setInputText(''); setOutputText(''); setError(''); }}
          style={{
            padding: '9px 14px', borderRadius: '7px',
            background: '#1a3a5c', border: '1px solid #334',
            color: '#aac4dd', cursor: 'pointer', fontSize: '13px',
          }}>🗑 মুছুন</button>
      </div>

      {error && (
        <div style={{ padding: '10px', borderRadius: '6px', background: '#3a1a1a', border: '1px solid #c62828', color: '#ef9a9a', fontSize: '13px', marginBottom: '10px' }}>
          {error}
        </div>
      )}

      {/* Output */}
      {(outputText || loading) && (
        <div style={{
          background: '#0a1e2f', border: `1px solid ${COLOR}44`,
          borderRadius: '8px', padding: '14px', position: 'relative', minHeight: '80px',
        }}>
          {loading && !outputText
            ? <div style={{ color: '#aac4dd', fontSize: '14px' }}>⏳ অনুবাদ হচ্ছে...</div>
            : <>
              <div style={{ color: '#e0f0ff', fontSize: '15px', lineHeight: '1.8', whiteSpace: 'pre-wrap', paddingRight: '90px', fontFamily: "'Noto Sans Bengali','Segoe UI',Arial,sans-serif" }}>
                {outputText}
              </div>
              <button onClick={copy} style={{
                position: 'absolute', top: '10px', right: '10px',
                padding: '5px 12px', borderRadius: '6px', border: '1px solid #334',
                background: copied ? '#2e7d32' : '#1a3a5c',
                color: copied ? '#a5d6a7' : '#90caf9', cursor: 'pointer', fontSize: '12px',
              }}>
                {copied ? '✅ কপি' : '📋 কপি'}
              </button>
            </>
          }
        </div>
      )}

      <div style={{ marginTop: '10px', color: '#556b7d', fontSize: '11px' }}>
        💡 Ctrl+Enter চাপলে দ্রুত অনুবাদ হবে। ৮০+ ভাষা সাপোর্ট।
      </div>
    </div>
  );
}