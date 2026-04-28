import React from 'react';

const ministries = [
  { name: 'মন্ত্রিপরিষদ বিভাগ', en: 'Cabinet Division', url: 'https://cabinet.gov.bd', icon: '🏛️' },
  { name: 'প্রধানমন্ত্রীর কার্যালয়', en: "Prime Minister's Office", url: 'https://pmo.gov.bd', icon: '🏢' },
  { name: 'অর্থ মন্ত্রণালয়', en: 'Ministry of Finance', url: 'https://mof.gov.bd', icon: '💰' },
  { name: 'স্বরাষ্ট্র মন্ত্রণালয়', en: 'Ministry of Home Affairs', url: 'https://moha.gov.bd/', icon: '🔐' },
  { name: 'পররাষ্ট্র মন্ত্রণালয়', en: 'Ministry of Foreign Affairs', url: 'https://mofa.gov.bd', icon: '🌐' },
  { name: 'শিক্ষা মন্ত্রণালয়', en: 'Ministry of Education', url: 'https://moedu.gov.bd', icon: '📚' },
  { name: 'স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়', en: 'Ministry of Health', url: 'https://mohfw.gov.bd', icon: '🏥' },
  { name: 'কৃষি মন্ত্রণালয়', en: 'Ministry of Agriculture', url: 'https://moa.gov.bd', icon: '🌾' },
  { name: 'আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়', en: 'Ministry of Law', url: 'https://minlaw.gov.bd', icon: '⚖️' },
  { name: 'তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ', en: 'ICT Division', url: 'https://ictd.gov.bd', icon: '💻' },
  { name: 'বাণিজ্য মন্ত্রণালয়', en: 'Ministry of Commerce', url: 'https://mincom.gov.bd', icon: '🛒' },
  { name: 'শিল্প মন্ত্রণালয়', en: 'Ministry of Industries', url: 'https://moind.gov.bd', icon: '🏭' },
  { name: 'যোগাযোগ মন্ত্রণালয়', en: 'Ministry of Road Transport', url: 'https://brta.gov.bd', icon: '🚗' },
  { name: 'নৌপরিবহন মন্ত্রণালয়', en: 'Ministry of Shipping', url: 'https://mos.gov.bd', icon: '⛵' },
  { name: 'বিমান পরিবহন ও পর্যটন মন্ত্রণালয়', en: 'Ministry of Civil Aviation', url: 'https://mocat.gov.bd', icon: '✈️' },
  { name: 'রেলপথ মন্ত্রণালয়', en: 'Ministry of Railways', url: 'https://railway.gov.bd', icon: '🚂' },
  { name: 'সেতু বিভাগ', en: 'Bridges Division', url: 'https://bridgesdivision.gov.bd/', icon: '🌉' },
  { name: 'গৃহায়ন ও গণপূর্ত মন্ত্রণালয়', en: 'Ministry of Housing', url: 'https://mohpw.gov.bd', icon: '🏠' },
  { name: 'পানি সম্পদ মন্ত্রণালয়', en: 'Ministry of Water Resources', url: 'https://mowr.gov.bd', icon: '💧' },
  { name: 'পরিবেশ, বন ও জলবায়ু মন্ত্রণালয়', en: 'Ministry of Environment', url: 'https://moef.gov.bd', icon: '🌿' },
  { name: 'বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়', en: 'Ministry of Power & Energy', url: 'https://powerdivision.gov.bd', icon: '⚡' },
  { name: 'খাদ্য মন্ত্রণালয়', en: 'Ministry of Food', url: 'https://mofood.gov.bd', icon: '🍚' },
  { name: 'ত্রাণ ও দুর্যোগ ব্যবস্থাপনা মন্ত্রণালয়', en: 'Ministry of Disaster Management', url: 'https://modmr.gov.bd', icon: '🆘' },
  { name: 'সমাজকল্যাণ মন্ত্রণালয়', en: 'Ministry of Social Welfare', url: 'https://msw.gov.bd', icon: '🤝' },
  { name: 'মহিলা ও শিশু বিষয়ক মন্ত্রণালয়', en: 'Ministry of Women & Children', url: 'https://mowca.gov.bd', icon: '👩‍👧' },
  { name: 'যুব ও ক্রীড়া মন্ত্রণালয়', en: 'Ministry of Youth & Sports', url: 'https://moysports.gov.bd/', icon: '⚽' },
  { name: 'সংস্কৃতি বিষয়ক মন্ত্রণালয়', en: 'Ministry of Cultural Affairs', url: 'https://moca.gov.bd', icon: '🎭' },
  { name: 'ধর্ম বিষয়ক মন্ত্রণালয়', en: 'Ministry of Religious Affairs', url: 'https://mora.gov.bd', icon: '🕌' },
  { name: 'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়', en: 'Ministry of Expatriates', url: 'https://probashi.gov.bd', icon: '✈️' },
  { name: 'স্থানীয় সরকার বিভাগ', en: 'Local Government Division', url: 'https://lgd.gov.bd', icon: '🏘️' },
  { name: 'পল্লী উন্নয়ন ও সমবায় বিভাগ', en: 'Rural Development Division', url: 'https://rdcd.gov.bd', icon: '🌳' },
  { name: 'ভূমি মন্ত্রণালয়', en: 'Ministry of Land', url: 'https://minland.gov.bd', icon: '📋' },
  { name: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়', en: 'Ministry of Liberation War Affairs', url: 'https://molwa.gov.bd', icon: '🎖️' },
  { name: 'পার্বত্য চট্টগ্রাম বিষয়ক মন্ত্রণালয়', en: 'Ministry of CHT Affairs', url: 'https://mochta.gov.bd', icon: '⛰️' },
  { name: 'প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়', en: 'Ministry of Primary Education', url: 'https://mopme.gov.bd', icon: '✏️' },
  { name: 'বিজ্ঞান ও প্রযুক্তি মন্ত্রণালয়', en: 'Ministry of Science & Technology', url: 'https://most.gov.bd', icon: '🔬' },
  { name: 'টেলিযোগাযোগ বিভাগ', en: 'Telecom Division', url: 'https://btrc.gov.bd', icon: '📡' },
  { name: 'মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়', en: 'Ministry of Fisheries & Livestock', url: 'https://mofl.gov.bd', icon: '🐟' },
  { name: 'বস্ত্র ও পাট মন্ত্রণালয়', en: 'Ministry of Textiles & Jute', url: 'https://motj.gov.bd', icon: '🧵' },
  { name: 'শ্রম ও কর্মসংস্থান মন্ত্রণালয়', en: 'Ministry of Labour & Employment', url: 'https://mole.gov.bd', icon: '👷' },
];

const BDAllMinistry = ({ lang }) => {
  const GOLD = '#ffce00';

  return (
    <div style={{ padding: '10px 0' }}>
      <div style={{
        textAlign: 'center', marginBottom: '24px',
        background: 'linear-gradient(135deg, #004d40, #006a4e)',
        borderRadius: '12px', padding: '18px',
        border: `1px solid ${GOLD}`,
      }}>
        <div style={{ fontSize: '36px', marginBottom: '6px' }}>🏛️</div>
        <h2 style={{ color: GOLD, margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
          {lang === 'bn' ? 'বাংলাদেশের সকল মন্ত্রণালয়' : 'All Ministries of Bangladesh'}
        </h2>
        <p style={{ color: '#ccc', fontSize: '13px', margin: '6px 0 0' }}>
          {lang === 'bn' ? `মোট ${ministries.length}টি মন্ত্রণালয় ও বিভাগ` : `Total ${ministries.length} Ministries & Divisions`}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '12px',
      }}>
        {ministries.map((m, i) => (
          <a
            key={i}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,206,0,0.2)',
              borderRadius: '10px',
              padding: '12px 14px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,206,0,0.12)';
              e.currentTarget.style.borderColor = GOLD;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,206,0,0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '26px', minWidth: '32px', textAlign: 'center' }}>{m.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontSize: '12.5px', fontWeight: '600', lineHeight: '1.4' }}>
                {lang === 'bn' ? m.name : m.en}
              </div>
              <div style={{ color: GOLD, fontSize: '11px', marginTop: '2px', opacity: 0.8 }}>
                {m.url.replace('https://', '')}
              </div>
            </div>
            <span style={{ color: GOLD, fontSize: '16px' }}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BDAllMinistry;
