import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#9b59b6";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "রাজশাহী কলেজিয়েট স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পি.এন. সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "রাজশাহী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "বগুড়া জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পাবনা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নাটোর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নওগাঁ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "রাজশাহী কলেজ", web: "https://www.rajshahicollege.edu.bd" },
      { name: "রাজশাহী সরকারি মহিলা কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "বগুড়া সরকারি আজিজুল হক কলেজ", web: "https://www.azizulhaqcollege.edu.bd" },
      { name: "পাবনা সরকারি এডওয়ার্ড কলেজ", web: "https://www.edwardcollege.edu.bd" },
      { name: "নাটোর সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "রাজশাহী বিশ্ববিদ্যালয়", web: "https://www.ru.ac.bd" },
      { name: "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (RUET)", web: "https://www.ruet.ac.bd" },
      { name: "রাজশাহী মেডিকেল কলেজ", web: "https://www.rmc.gov.bd" },
      { name: "পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", web: "https://www.pstu.ac.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "রাজশাহী সদর উপজেলা", web: "https://sadar.rajshahi.gov.bd" },
      { name: "বোয়ালিয়া উপজেলা", web: "https://boalia.rajshahi.gov.bd" },
      { name: "পুঠিয়া উপজেলা", web: "https://puthia.rajshahi.gov.bd" },
      { name: "দুর্গাপুর উপজেলা", web: "https://durgapur.rajshahi.gov.bd" },
      { name: "বগুড়া সদর উপজেলা", web: "https://sadar.bogura.gov.bd" },
      { name: "পাবনা সদর উপজেলা", web: "https://sadar.pabna.gov.bd" },
      { name: "নাটোর সদর উপজেলা", web: "https://sadar.natore.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (রাজশাহী)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (রাজশাহী)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (রাজশাহী)", web: "https://www.agranibank.org" },
      { name: "ইসলামী ব্যাংক (রাজশাহী)", web: "https://www.islamibankbd.com" },
      { name: "ডাচ-বাংলা ব্যাংক (রাজশাহী)", web: "https://www.dutchbanglabank.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "রাজশাহী মেডিকেল কলেজ হাসপাতাল", web: "https://www.rmch.gov.bd" },
      { name: "বগুড়া শহীদ জিয়াউর রহমান মেডিকেল কলেজ", web: "https://www.szrmc.gov.bd" },
      { name: "পাবনা মানসিক হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "নাটোর সদর হাসপাতাল", web: "https://dghs.natore.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (রাজশাহী)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (রাজশাহী)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "এসআর ট্রাভেলস (রাজশাহী)", web: "https://www.srtravelsbd.com" },
      { name: "বিআরটিসি (রাজশাহী)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "রাজশাহী রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক সোনার দেশ", web: "https://www.facebook.com/dailysonardesh" },
      { name: "দৈনিক বার্তা", web: "https://www.facebook.com/dailybartarajshahi" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
      { name: "কালের কণ্ঠ", web: "https://www.kalerkantho.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "রাজশাহী জেলা ভূমি অফিস", web: "https://land.rajshahi.gov.bd" },
      { name: "বগুড়া জেলা ভূমি অফিস", web: "https://land.bogura.gov.bd" },
      { name: "পাবনা জেলা ভূমি অফিস", web: "https://land.pabna.gov.bd" },
    ]
  },
  {
    name: "আদালত",
    items: [
      { name: "রাজশাহী জেলা জজ কোর্ট", web: "https://districtjudge.rajshahi.gov.bd" },
      { name: "বগুড়া জেলা জজ কোর্ট", web: "https://districtjudge.bogura.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "বাঘা মসজিদ", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "পুঠিয়া রাজবাড়ি", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মহাস্থানগড়", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "পাহাড়পুর বৌদ্ধ বিহার", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "নর্দার্ন ইলেকট্রিসিটি সাপ্লাই কোম্পানি (NESCO)", web: "https://www.nesco.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "রাজশাহী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "বগুড়া জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "রাজশাহী ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "বগুড়া ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
];

const RajshahiDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`রাজশাহী বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default RajshahiDivision;