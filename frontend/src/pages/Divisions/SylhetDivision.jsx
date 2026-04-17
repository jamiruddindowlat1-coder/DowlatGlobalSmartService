import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#e67e22";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "সিলেট সরকারি পাইলট উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "সিলেট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মৌলভীবাজার জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "হবিগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "সুনামগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "সিলেট সরকারি কলেজ", web: "https://www.sylhetgovtcollege.edu.bd" },
      { name: "এমসি কলেজ সিলেট", web: "https://www.mccollege.edu.bd" },
      { name: "মৌলভীবাজার সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "হবিগঞ্জ সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", web: "https://www.sust.edu" },
      { name: "সিলেট মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
      { name: "সিলেট কৃষি বিশ্ববিদ্যালয়", web: "https://www.sau.ac.bd" },
    ]
  },
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "লিডিং ইউনিভার্সিটি সিলেট", web: "https://www.lus.ac.bd" },
      { name: "মেট্রোপলিটন ইউনিভার্সিটি সিলেট", web: "https://www.metrouni.edu.bd" },
      { name: "নর্থ ইস্ট ইউনিভার্সিটি", web: "https://www.neub.edu.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "সিলেট সদর উপজেলা", web: "https://sadar.sylhet.gov.bd" },
      { name: "বিয়ানীবাজার উপজেলা", web: "https://beanibazar.sylhet.gov.bd" },
      { name: "গোলাপগঞ্জ উপজেলা", web: "https://golapganj.sylhet.gov.bd" },
      { name: "মৌলভীবাজার সদর উপজেলা", web: "https://sadar.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ সদর উপজেলা", web: "https://sadar.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ সদর উপজেলা", web: "https://sadar.sunamganj.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (সিলেট)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (সিলেট)", web: "https://www.jb.com.bd" },
      { name: "ইসলামী ব্যাংক (সিলেট)", web: "https://www.islamibankbd.com" },
      { name: "ডাচ-বাংলা ব্যাংক (সিলেট)", web: "https://www.dutchbanglabank.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "সিলেট এমএজি ওসমানী মেডিকেল কলেজ হাসপাতাল", web: "https://www.osmmc.gov.bd" },
      { name: "মৌলভীবাজার সদর হাসপাতাল", web: "https://dghs.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ সদর হাসপাতাল", web: "https://dghs.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ সদর হাসপাতাল", web: "https://dghs.sunamganj.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (সিলেট)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (সিলেট)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "এনা পরিবহন (সিলেট)", web: "https://www.facebook.com/ENATransport" },
      { name: "বিআরটিসি (সিলেট)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "সিলেট রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "ওসমানী আন্তর্জাতিক বিমানবন্দর (সিলেট)", web: "https://www.caab.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "জাফলং", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "রাতারগুল সোয়াম্প ফরেস্ট", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "বিছানাকান্দি", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "শ্রীমঙ্গল চা বাগান", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "হাকালুকি হাওর", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক সিলেটের ডাক", web: "https://www.sylheterdak.com.bd" },
      { name: "দৈনিক জালালাবাদ", web: "https://www.facebook.com/dailyjalalabad" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "সিলেট জেলা ভূমি অফিস", web: "https://land.sylhet.gov.bd" },
      { name: "মৌলভীবাজার জেলা ভূমি অফিস", web: "https://land.moulvibazar.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "সিলেট জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "মৌলভীবাজার জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "সিলেট ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
];

const SylhetDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`সিলেট বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default SylhetDivision;