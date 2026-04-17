import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#27ae60";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "রংপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "রংপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "দিনাজপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "গাইবান্ধা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "কুড়িগ্রাম জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "লালমনিরহাট জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নীলফামারী জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পঞ্চগড় জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "ঠাকুরগাঁও জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "রংপুর সরকারি কলেজ", web: "https://www.rangpurgovtcollege.edu.bd" },
      { name: "কারমাইকেল কলেজ রংপুর", web: "https://www.carmichaelcollege.edu.bd" },
      { name: "দিনাজপুর সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বেগম রোকেয়া বিশ্ববিদ্যালয় রংপুর", web: "https://www.brur.ac.bd" },
      { name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", web: "https://www.hstu.ac.bd" },
      { name: "রংপুর মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "রংপুর সদর উপজেলা", web: "https://sadar.rangpur.gov.bd" },
      { name: "পীরগঞ্জ উপজেলা", web: "https://pirganj.rangpur.gov.bd" },
      { name: "দিনাজপুর সদর উপজেলা", web: "https://sadar.dinajpur.gov.bd" },
      { name: "গাইবান্ধা সদর উপজেলা", web: "https://sadar.gaibandha.gov.bd" },
      { name: "কুড়িগ্রাম সদর উপজেলা", web: "https://sadar.kurigram.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (রংপুর)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (রংপুর)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (রংপুর)", web: "https://www.agranibank.org" },
      { name: "ইসলামী ব্যাংক (রংপুর)", web: "https://www.islamibankbd.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "রংপুর মেডিকেল কলেজ হাসপাতাল", web: "https://www.rmch.gov.bd" },
      { name: "দিনাজপুর মেডিকেল কলেজ হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "গাইবান্ধা সদর হাসপাতাল", web: "https://dghs.gaibandha.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (রংপুর)", web: "https://www.hanifenterprisebd.com" },
      { name: "নাবিল পরিবহন (রংপুর)", web: "https://www.facebook.com/nabilparibahan" },
      { name: "এস.আর. ট্রাভেলস (রংপুর)", web: "https://www.srtravelsbd.com" },
      { name: "বিআরটিসি (রংপুর)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "রংপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "কান্তজীর মন্দির (দিনাজপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "তাজহাট জমিদার বাড়ি (রংপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "রামসাগর দিঘী (দিনাজপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "নীলফামারী নীলসাগর", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক যমুনা (রংপুর)", web: "https://www.facebook.com/dailyjomuna" },
      { name: "দৈনিক উত্তরবাংলা", web: "https://www.facebook.com/uttarbangla" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "রংপুর জেলা ভূমি অফিস", web: "https://land.rangpur.gov.bd" },
      { name: "দিনাজপুর জেলা ভূমি অফিস", web: "https://land.dinajpur.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "রংপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "দিনাজপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "রংপুর ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "দিনাজপুর ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "নর্দার্ন ইলেকট্রিসিটি সাপ্লাই কোম্পানি (NESCO)", web: "https://www.nesco.gov.bd" },
    ]
  },
];

const RangpurDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`রংপুর বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default RangpurDivision;