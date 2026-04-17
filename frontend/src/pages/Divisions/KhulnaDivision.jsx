import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#1abc9c";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "খুলনা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "খুলনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "যশোর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "কুষ্টিয়া জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "সাতক্ষীরা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বাগেরহাট জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "মেহেরপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নড়াইল জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "খুলনা সরকারি বি.এল. কলেজ", web: "https://www.blcollege.edu.bd" },
      { name: "খুলনা সরকারি মহিলা কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "যশোর সরকারি মাইকেল মধুসূদন কলেজ", web: "https://www.mmcollege.edu.bd" },
      { name: "কুষ্টিয়া সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "খুলনা বিশ্ববিদ্যালয়", web: "https://www.ku.ac.bd" },
      { name: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)", web: "https://www.kuet.ac.bd" },
      { name: "ইসলামী বিশ্ববিদ্যালয় কুষ্টিয়া", web: "https://www.iu.ac.bd" },
      { name: "খুলনা মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "খুলনা সদর উপজেলা", web: "https://sadar.khulna.gov.bd" },
      { name: "বটিয়াঘাটা উপজেলা", web: "https://batiaghata.khulna.gov.bd" },
      { name: "ডুমুরিয়া উপজেলা", web: "https://dumuria.khulna.gov.bd" },
      { name: "যশোর সদর উপজেলা", web: "https://sadar.jessore.gov.bd" },
      { name: "কুষ্টিয়া সদর উপজেলা", web: "https://sadar.kushtia.gov.bd" },
      { name: "সাতক্ষীরা সদর উপজেলা", web: "https://sadar.satkhira.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (খুলনা)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (খুলনা)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (খুলনা)", web: "https://www.agranibank.org" },
      { name: "ইসলামী ব্যাংক (খুলনা)", web: "https://www.islamibankbd.com" },
      { name: "ডাচ-বাংলা ব্যাংক (খুলনা)", web: "https://www.dutchbanglabank.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "খুলনা মেডিকেল কলেজ হাসপাতাল", web: "https://www.kmch.gov.bd" },
      { name: "যশোর সদর হাসপাতাল", web: "https://dghs.jessore.gov.bd" },
      { name: "কুষ্টিয়া মেডিকেল কলেজ হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "সাতক্ষীরা সদর হাসপাতাল", web: "https://dghs.satkhira.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (খুলনা)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (খুলনা)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "সোহাগ পরিবহন (খুলনা)", web: "https://www.facebook.com/sohagparibahan" },
      { name: "বিআরটিসি (খুলনা)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "খুলনা রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "সুন্দরবন", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "ষাট গম্বুজ মসজিদ (বাগেরহাট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "কুষ্টিয়া লালন আখড়া", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক পূর্বাঞ্চল", web: "https://www.facebook.com/dailypurbanchal" },
      { name: "দৈনিক জনকণ্ঠ", web: "https://www.dailyjanakantha.com" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "খুলনা জেলা ভূমি অফিস", web: "https://land.khulna.gov.bd" },
      { name: "যশোর জেলা ভূমি অফিস", web: "https://land.jessore.gov.bd" },
      { name: "কুষ্টিয়া জেলা ভূমি অফিস", web: "https://land.kushtia.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "খুলনা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "যশোর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "খুলনা ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "যশোর ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন (WZPDCL)", web: "https://www.wzpdcl.org.bd" },
    ]
  },
];

const KhulnaDivision = () => {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {subCategories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: '#fff', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`খুলনা বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default KhulnaDivision;