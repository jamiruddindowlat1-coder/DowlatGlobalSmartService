import React, { useRef } from 'react';

const ALL_SERVICES = [
  // 🚨 জরুরি সেবা
  { key: 'svc_999',       icon: '🚨', name: 'জাতীয় জরুরি সেবা',        number: '999',          url: 'tel:999',            type: 'emergency' },
  { key: 'svc_fire',      icon: '🚒', name: 'ফায়ার সার্ভিস',             number: '199',          url: 'tel:199',            type: 'emergency' },
  { key: 'svc_ambulance', icon: '🚑', name: 'অ্যাম্বুলেন্স',              number: '199',          url: 'tel:199',            type: 'emergency' },
  // 👮 আইন-শৃঙ্খলা
  { key: 'svc_police',    icon: '👮', name: 'পুলিশ',                     number: '999',          url: 'tel:999',            type: 'law' },
  { key: 'svc_rab',       icon: '🛡️', name: 'র‍্যাব',                     number: '01730-336498', url: 'tel:01730336498',    type: 'law' },
  // 🏥 স্বাস্থ্য সেবা
  { key: 'svc_dmch',      icon: '🏥', name: 'ঢাকা মেডিকেল',              number: '02-55165088',  url: 'tel:0255165088',     type: 'health' },
  { key: 'svc_cmch',      icon: '🏥', name: 'চট্টগ্রাম মেডিকেল',         number: '031-630953',   url: 'tel:031630953',      type: 'health' },
  { key: 'svc_bsmmu',     icon: '🏥', name: 'বঙ্গবন্ধু মেডিকেল',        number: '02-55165300',  url: 'tel:0255165300',     type: 'health' },
  // 🏛️ শিক্ষা প্রতিষ্ঠান
  { key: 'svc_du',        icon: '🏛️', name: 'ঢাকা বিশ্ববিদ্যালয়',      number: '02-9661900',   url: 'https://du.ac.bd',   type: 'edu' },
  { key: 'svc_buet',      icon: '🏛️', name: 'বুয়েট',                    number: '02-9665650',   url: 'https://buet.ac.bd', type: 'edu' },
  { key: 'svc_cu',        icon: '🏛️', name: 'চট্টগ্রাম বিশ্ববিদ্যালয়', number: '031-726310',   url: 'https://cu.ac.bd',   type: 'edu' },
  { key: 'svc_ru',        icon: '🏛️', name: 'রাজশাহী বিশ্ববিদ্যালয়',   number: '0721-750041',  url: 'https://ru.ac.bd',   type: 'edu' },
  // 🌍 বিশ্ব পোর্টাল
  { key: 'quran',         icon: '📖', name: 'কুরআন শরীফ',                type: 'portal' },
  { key: 'hadith',        icon: '📚', name: 'হাদিস',                     type: 'portal' },
  { key: 'waz',           icon: '🎙️', name: 'ওয়াজ মাহফিল',              type: 'portal' },
  { key: 'business',      icon: '💼', name: 'অনলাইন বিজনেস',             type: 'portal' },
  { key: 'tutorial',      icon: '🎓', name: 'অনলাইন টিউটোরিয়াল',        type: 'portal' },
  { key: 'coaching',      icon: '🏫', name: 'কোচিং সেন্টার',             type: 'portal' },
  { key: 'games',         icon: '🎮', name: 'গেমস ওয়ার্ল্ড',             type: 'portal' },
  { key: 'news',          icon: '📰', name: 'বিশ্ব সংবাদপত্র',           type: 'portal' },
  { key: 'share_market',  icon: '📈', name: 'শেয়ার মার্কেট',             type: 'portal' },
  { key: 'social',        icon: '🌐', name: 'সোশ্যাল মিডিয়া',            type: 'portal' },
  { key: 'tourist',       icon: '✈️', name: 'পর্যটন',                    type: 'portal' },
  { key: 'software',      icon: '💻', name: 'সফটওয়্যার',                 type: 'portal' },
  { key: 'language',      icon: '🗣️', name: 'ভাষা শিক্ষা',               type: 'portal' },
  { key: 'share',         icon: '🔗', name: 'শেয়ার ওয়ার্ল্ড',            type: 'portal' },
  { key: 'communication', icon: '📡', name: 'যোগাযোগ',                   type: 'portal' },
  { key: 'worldcup',      icon: '🏆', name: 'ওয়ার্ল্ড কাপ',              type: 'portal' },
  { key: 'comedy',        icon: '😂', name: 'Comedy World',               type: 'portal' },
  // 🗺️ বিভাগ
  { key: 'dhaka',         icon: '🗺️', name: 'ঢাকা বিভাগ',               type: 'division' },
  { key: 'chittagong',    icon: '🗺️', name: 'চট্টগ্রাম বিভাগ',           type: 'division' },
  { key: 'rajshahi',      icon: '🗺️', name: 'রাজশাহী বিভাগ',             type: 'division' },
  { key: 'khulna',        icon: '🗺️', name: 'খুলনা বিভাগ',               type: 'division' },
  { key: 'barisal',       icon: '🗺️', name: 'বরিশাল বিভাগ',              type: 'division' },
  { key: 'sylhet',        icon: '🗺️', name: 'সিলেট বিভাগ',               type: 'division' },
  { key: 'rangpur',       icon: '🗺️', name: 'রংপুর বিভাগ',               type: 'division' },
  { key: 'mymensingh',    icon: '🗺️', name: 'ময়মনসিংহ বিভাগ',           type: 'division' },
];

const TYPE_COLORS = {
  emergency: { bg: '#fff0f0', border: '#e74c3c', text: '#c0392b' },
  law:       { bg: '#f0f4ff', border: '#3498db', text: '#1a5276' },
  health:    { bg: '#f0fff4', border: '#27ae60', text: '#1e8449' },
  edu:       { bg: '#fdf0ff', border: '#9b59b6', text: '#6c3483' },
  portal:    { bg: '#fffbf0', border: '#c5a059', text: '#7d6424' },
  division:  { bg: '#f0f8ff', border: '#2e2e8e', text: '#1a1a6e' },
};

const ServiceTicker = () => {
  const trackRef = useRef(null);

  const pauseAnim  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; };
  const resumeAnim = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; };

  const handleClick = (svc) => {
    // animation pause করো যাতে click ঠিকমতো কাজ করে
    pauseAnim();

    if (svc.url) {
      window.open(svc.url, '_blank', 'noopener,noreferrer');
    } else if (svc.type === 'portal') {
      const btn = document.querySelector(`[data-portal="${svc.key}"]`);
      if (btn) {
        btn.click();
        setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
      }
    } else if (svc.type === 'division') {
      const btn = document.querySelector(`[data-division="${svc.key}"]`);
      if (btn) {
        btn.click();
        setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
      }
    }

    // ২ সেকেন্ড পর আবার চালু
    setTimeout(resumeAnim, 2000);
  };

  const items = [...ALL_SERVICES, ...ALL_SERVICES];

  return (
    <div style={st.wrapper}>
      <div style={st.label}>📢 সেবা</div>
      <div style={st.track}>
        <div
          ref={trackRef}
          style={st.inner}
          onMouseEnter={pauseAnim}
          onMouseLeave={resumeAnim}
        >
          {items.map((svc, i) => {
            const c = TYPE_COLORS[svc.type] || TYPE_COLORS.portal;
            const clickable = !!(svc.url || svc.type === 'portal' || svc.type === 'division');
            return (
              <span
                key={i}
                onClick={() => handleClick(svc)}
                title={svc.number ? `📞 ${svc.number}` : svc.name}
                style={{
                  ...st.chip,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  color: c.text,
                  cursor: clickable ? 'pointer' : 'default',
                  pointerEvents: 'auto',
                }}
              >
                <span style={st.icon}>{svc.icon}</span>
                <span>{svc.name}</span>
                {svc.number && <span style={{ ...st.num, color: c.text }}>{svc.number}</span>}
              </span>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const st = {
  wrapper: {
    display: 'flex', alignItems: 'center', background: '#2e2e8e',
    borderRadius: '8px', overflow: 'hidden', marginBottom: '20px',
    border: '1px solid rgba(197,160,89,0.3)',
  },
  label: {
    flexShrink: 0, background: '#c5a059', color: '#2e2e8e',
    fontWeight: '900', fontSize: '13px', padding: '10px 14px',
    whiteSpace: 'nowrap', fontFamily: "'Noto Sans Bengali', sans-serif",
  },
  track: { overflow: 'hidden', flex: 1 },
  inner: {
    display: 'flex', gap: '10px', padding: '8px 12px',
    width: 'max-content',
    animation: 'ticker 55s linear infinite',
  },
  chip: {
    display: 'inline-flex', alignItems: 'center', gap: '5px',
    padding: '4px 12px', borderRadius: '999px', whiteSpace: 'nowrap',
    fontSize: '12px', fontWeight: '700',
    fontFamily: "'Noto Sans Bengali', sans-serif",
    transition: 'opacity 0.15s',
    userSelect: 'none',
  },
  icon: { fontSize: '14px' },
  num:  { fontWeight: '900', fontSize: '11px', marginLeft: '2px', opacity: 0.85 },
};

export default ServiceTicker;