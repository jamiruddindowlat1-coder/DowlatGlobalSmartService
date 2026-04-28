import React, { useState } from 'react';

const serviceCategories = [
  {
    category: 'পরিচয় ও নথিপত্র',
    enCategory: 'Identity & Documents',
    icon: '🪪',
    color: '#1565c0',
    services: [
      { name: 'জাতীয় পরিচয়পত্র (NID)', en: 'National ID Card', url: 'https://services.nidw.gov.bd', desc: 'NID সংশোধন, তথ্য যাচাই' },
      { name: 'জন্ম নিবন্ধন', en: 'Birth Registration', url: 'https://bdris.gov.bd', desc: 'জন্ম সনদ আবেদন ও যাচাই' },
      { name: 'মৃত্যু নিবন্ধন', en: 'Death Registration', url: 'https://bdris.gov.bd', desc: 'মৃত্যু সনদ আবেদন' },
      { name: 'ই-পাসপোর্ট', en: 'Passport Service', url: 'https://www.epassport.gov.bd/landing', desc: 'পাসপোর্ট আবেদন ও নবায়ন' },
      { name: 'পাসপোর্ট সেবা', en: 'Passport Service', url: 'https://dip.gov.bd/', desc: 'পাসপোর্ট আবেদন ও নবায়ন' },  
      { name: 'চট্টগ্রাম পাসপোর্ট সেবা', en: 'Passport Service', url: 'https://passport.chittagongdiv.gov.bd/', desc: 'পাসপোর্ট আবেদন ও নবায়ন' },  
      { name: 'ভিসা তথ্য', en: 'Visa Information', url: 'https://mofa.gov.bd', desc: 'বাংলাদেশ ভিসা সংক্রান্ত তথ্য' },
      { name: 'ভিসা তথ্য', en: 'Visa Information', url: 'https://mofa.gov.bd', desc: 'বাংলাদেশ ভিসা সংক্রান্ত তথ্য' },
      { name: 'বিবাহ নিবন্ধন', en: 'Marriage Registration', url: 'https://bdris.gov.bd', desc: 'বিবাহ সনদ ও নিবন্ধন' },
    ]
  },
  {
    category: 'ভূমি সেবা',
    enCategory: 'Land Services',
    icon: '🗺️',
    color: '#2e7d32',
    services: [
      { name: 'ই-পর্চা (ভূমি রেকর্ড)', en: 'e-Porcha (Land Records)', url: 'https://e-porcha.com/', desc: 'জমির খতিয়ান, পর্চা' },
      { name: 'ভূমি উন্নয়ন কর', en: 'Land Development Tax', url: 'https://ldtax.gov.bd', desc: 'অনলাইনে ভূমি কর পরিশোধ' },
      { name: 'ই-মিউটেশন', en: 'e-Mutation', url: 'https://mutation.land.gov.bd', desc: 'নামজারি আবেদন অনলাইনে' },
      { name: 'জমি রেজিস্ট্রেশন', en: 'Land Registration', url: 'https://minland.gov.bd', desc: 'দলিল রেজিস্ট্রি সেবা' },
    ]
  },
  {
    category: 'শিক্ষা সেবা',
    enCategory: 'Education Services',
    icon: '📚',
    color: '#6a1b9a',
    services: [
      { name: 'SSC ফলাফল', en: 'SSC Result', url: 'http://www.educationboardresults.gov.bd/', desc: 'SSC পরীক্ষার ফলাফল' },
      { name: 'HSC ফলাফল', en: 'HSC Result', url: 'http://www.educationboardresults.gov.bd/', desc: 'HSC পরীক্ষার ফলাফল' },
      { name: 'প্রাথমিক বৃত্তি ফলাফল', en: 'Primary Scholarship Result', url: 'https://dpe.gov.bd', desc: 'প্রাথমিক শিক্ষা সমাপনী ফলাফল' },
      { name: 'বিশ্ববিদ্যালয় ভর্তি (GST)', en: 'University Admission', url: 'https://gstadmission.ac.bd', desc: 'পাবলিক বিশ্ববিদ্যালয় ভর্তি' },
      { name: 'মাদ্রাসা বোর্ড', en: 'Madrasah Board', url: 'https://bmeb.gov.bd', desc: 'মাদ্রাসা শিক্ষা বোর্ড' },
      { name: 'বৃত্তি ও উপবৃত্তি', en: 'Scholarship Portal', url: 'https://shed.gov.bd', desc: 'সরকারি বৃত্তি আবেদন' },
    ]
  },
  {
    category: 'স্বাস্থ্য সেবা',
    enCategory: 'Health Services',
    icon: '🏥',
    color: '#c62828',
    services: [
      { name: 'স্বাস্থ্য বাতায়ন (16789)', en: 'Health Helpline 16789', url: 'https://dghs.gov.bd', desc: 'সরকারি স্বাস্থ্য হেল্পলাইন' },
      { name: 'কোভিড ভ্যাকসিন নিবন্ধন', en: 'COVID Vaccine Registration', url: 'https://surokkha.gov.bd', desc: 'সুরক্ষা প্ল্যাটফর্ম' },
      { name: 'ডিজিটাল স্বাস্থ্য কার্ড', en: 'Digital Health Card', url: 'https://mohfw.gov.bd', desc: 'স্বাস্থ্য সেবা কার্ড' },
      { name: 'মেডিকেল কলেজ ভর্তি', en: 'Medical Admission', url: 'https://dgme.gov.bd', desc: 'সরকারি মেডিকেল ভর্তি তথ্য' },
    ]
  },
  {
    category: 'কর ও আর্থিক সেবা',
    enCategory: 'Tax & Financial Services',
    icon: '💰',
    color: '#e65100',
    services: [
      { name: 'ই-টিআইএন নিবন্ধন', en: 'e-TIN Registration', url: 'https://incometax.gov.bd', desc: 'আয়কর নিবন্ধন ও রিটার্ন' },
      { name: 'ভ্যাট অনলাইন', en: 'VAT Online', url: 'https://vat.gov.bd', desc: 'ভ্যাট নিবন্ধন ও পরিশোধ' },
      { name: 'শুল্ক ও কর তথ্য', en: 'Customs & Duty', url: 'https://customs.gov.bd', desc: 'আমদানি-রপ্তানি শুল্ক তথ্য' },
      { name: 'বিনিয়োগ সেবা (BIDA)', en: 'Investment Services', url: 'https://bida.gov.bd', desc: 'ব্যবসা নিবন্ধন ও বিনিয়োগ' },
    ]
  },
  {
    category: 'সামাজিক নিরাপত্তা',
    enCategory: 'Social Safety Net',
    icon: '🤝',
    color: '#00695c',
    services: [
      { name: 'বয়স্ক ভাতা', en: 'Old Age Allowance', url: 'https://dss.gov.bd/pages/static-pages/6922dcb2933eb65569e11974', desc: 'বয়স্ক ভাতার আবেদন ও তথ্য' },
      { name: 'বিধবা ভাতা', en: 'Widow Allowance', url: 'https://dss.gov.bd/pages/static-pages/6922de9e933eb65569e1c133', desc: 'বিধবা ও স্বামী পরিত্যক্তা ভাতা' },
      { name: 'প্রতিবন্ধী ভাতা', en: 'Disability Allowance', url: 'https://dss.gov.bd/pages/static-pages/6922e03c933eb65569e261fc', desc: 'প্রতিবন্ধী ভাতার তথ্য' },
      { name: 'মাতৃত্ব ভাতা', en: 'Maternity Allowance', url: 'https://mowca.gov.bd', desc: 'গর্ভবতী মায়েদের ভাতা' },
      { name: 'VGF/VGD কার্ড', en: 'VGF/VGD Card', url: 'https://mof.gov.bd', desc: 'খাদ্য সহায়তা কার্ড' },
    ]
  },
  {
    category: 'যানবাহন ও পরিবহন',
    enCategory: 'Transport Services', 
    icon: '🚗',
    color: '#1b5e20',
    services: [
      { name: 'ড্রাইভিং লাইসেন্স', en: 'Driving License', url: 'https://brta.gov.bd', desc: 'ড্রাইভিং লাইসেন্স আবেদন' },
      { name: 'গাড়ি নিবন্ধন', en: 'Vehicle Registration', url: 'https://brta.gov.bd', desc: 'যানবাহন নিবন্ধন সেবা' },
      { name: 'ট্রেন টিকেট', en: 'Train Ticket', url: 'https://eticket.railway.gov.bd', desc: 'অনলাইন ট্রেন টিকেট বুকিং' },
      { name: 'বিমান টিকেট (বিমান BD)', en: 'https://sa.wego.com/en/airlines/biman-bangladesh-airlines-bg', url: 'https://www.biman-airlines.com', desc: 'বিমান বাংলাদেশ এয়ারলাইন্স' },
    ]
  },
  {
    category: 'ইউটিলিটি সেবা',
    enCategory: 'Utility Services',
    icon: '⚡',
    color: '#f57f17',
    services: [
      { name: 'বিদ্যুৎ বিল পরিশোধ', en: 'Electricity Bill Payment', url: 'https://reb.gov.bd/', desc: 'পল্লী বিদ্যুৎ ও DESCO বিল' },
      { name: 'চট্টগ্রাম পল্লী বিদ্যুৎ সমিতি-১', en: 'Electricity Bill Payment', url: 'https://pbs1.chittagong.gov.bd/pages/static-pages/69910a7635ce18e1c0737071', desc: 'পল্লী বিদ্যুৎ ও DESCO বিল' },
      { name: 'গ্যাস বিল', en: 'Gas Bill', url: 'https://titas.com.bd', desc: 'তিতাস গ্যাস বিল পরিশোধ' },
      { name: 'পানির বিল', en: 'Water Bill', url: 'https://dwasa.org.bd', desc: 'WASA পানির বিল' },
      { name: 'ইন্টারনেট ও মোবাইল সেবা', en: 'Internet & Mobile', url: 'https://btrc.gov.bd', desc: 'BTRC নিয়ন্ত্রিত সেবা' },
    ]
  },
];

const BDAllCitizenServices = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const GOLD = '#ffce00';

  return (
    <div style={{ padding: '10px 0' }}>
      <div style={{
        textAlign: 'center', marginBottom: '24px',
        background: 'linear-gradient(135deg, #004d40, #00695c)',
        borderRadius: '12px', padding: '18px',
        border: `1px solid ${GOLD}`,
      }}>
        <div style={{ fontSize: '36px', marginBottom: '6px' }}>🧑‍💼</div>
        <h2 style={{ color: GOLD, margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
          {lang === 'bn' ? 'বাংলাদেশের সকল নাগরিক সেবা' : 'All Citizen Services of Bangladesh'}
        </h2>
        <p style={{ color: '#ccc', fontSize: '13px', margin: '6px 0 0' }}>
          {lang === 'bn' ? 'এক জায়গায় সকল সরকারি সেবা' : 'All government services in one place'}
        </p>
      </div>

      {/* Category filter buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', justifyContent: 'center' }}>
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            padding: '6px 14px', borderRadius: '20px', border: 'none',
            background: activeCategory === null ? GOLD : 'rgba(255,255,255,0.1)',
            color: activeCategory === null ? '#000' : '#fff',
            cursor: 'pointer', fontSize: '12px', fontWeight: 'bold',
          }}
        >
          {lang === 'bn' ? '📋 সব সেবা' : '📋 All'}
        </button>
        {serviceCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(activeCategory === i ? null : i)}
            style={{
              padding: '6px 14px', borderRadius: '20px', border: 'none',
              background: activeCategory === i ? GOLD : 'rgba(255,255,255,0.1)',
              color: activeCategory === i ? '#000' : '#fff',
              cursor: 'pointer', fontSize: '12px', fontWeight: 'bold',
            }}
          >
            {cat.icon} {lang === 'bn' ? cat.category : cat.enCategory}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      {serviceCategories
        .filter((_, i) => activeCategory === null || activeCategory === i)
        .map((cat, ci) => (
          <div key={ci} style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '12px', padding: '10px 14px',
              background: `linear-gradient(135deg, ${cat.color}33, ${cat.color}11)`,
              borderRadius: '8px', borderLeft: `4px solid ${cat.color}`,
            }}>
              <span style={{ fontSize: '22px' }}>{cat.icon}</span>
              <h3 style={{ color: '#fff', margin: 0, fontSize: '15px', fontWeight: 'bold' }}>
                {lang === 'bn' ? cat.category : cat.enCategory}
              </h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '10px',
            }}>
              {cat.services.map((s, si) => (
                <a
                  key={si}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', flexDirection: 'column', gap: '4px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px', padding: '12px 14px',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${cat.color}22`;
                    e.currentTarget.style.borderColor = cat.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600' }}>
                    {lang === 'bn' ? s.name : s.en}
                  </div>
                  <div style={{ color: '#aaa', fontSize: '11px' }}>
                    {lang === 'bn' ? s.desc : s.url.replace('https://', '')}
                  </div>
                  <div style={{ color: GOLD, fontSize: '10.5px', marginTop: '2px' }}>
                    {s.url.replace('https://', '')} ↗
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BDAllCitizenServices;
