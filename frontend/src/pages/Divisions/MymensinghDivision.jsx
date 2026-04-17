import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#8e44ad";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "ময়মনসিংহ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বিদ্যাময়ী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "নেত্রকোণা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "কিশোরগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "জামালপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "শেরপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "ময়মনসিংহ সরকারি কলেজ", web: "https://www.mymensinghgovtcollege.edu.bd" },
      { name: "আনন্দমোহন কলেজ ময়মনসিংহ", web: "https://www.amcollege.edu.bd" },
      { name: "নেত্রকোণা সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "কিশোরগঞ্জ সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)", web: "https://www.bau.edu.bd" },
      { name: "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়", web: "https://www.jkkniu.edu.bd" },
      { name: "ময়মনসিংহ মেডিকেল কলেজ", web: "https://www.mmch.gov.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "ময়মনসিংহ সদর উপজেলা", web: "https://sadar.mymensingh.gov.bd" },
      { name: "ভালুকা উপজেলা", web: "https://bhaluka.mymensingh.gov.bd" },
      { name: "নেত্রকোণা সদর উপজেলা", web: "https://sadar.netrokona.gov.bd" },
      { name: "কিশোরগঞ্জ সদর উপজেলা", web: "https://sadar.kishoreganj.gov.bd" },
      { name: "জামালপুর সদর উপজেলা", web: "https://sadar.jamalpur.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (ময়মনসিংহ)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (ময়মনসিংহ)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (ময়মনসিংহ)", web: "https://www.agranibank.org" },
      { name: "ইসলামী ব্যাংক (ময়মনসিংহ)", web: "https://www.islamibankbd.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল", web: "https://www.mmch.gov.bd" },
      { name: "নেত্রকোণা সদর হাসপাতাল", web: "https://dghs.netrokona.gov.bd" },
      { name: "কিশোরগঞ্জ সদর হাসপাতাল", web: "https://dghs.kishoreganj.gov.bd" },
      { name: "জামালপুর সদর হাসপাতাল", web: "https://dghs.jamalpur.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (ময়মনসিংহ)", web: "https://www.hanifenterprisebd.com" },
      { name: "এনা পরিবহন (ময়মনসিংহ)", web: "https://www.facebook.com/ENATransport" },
      { name: "বিআরটিসি (ময়মনসিংহ)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "ময়মনসিংহ রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "শশী লজ ময়মনসিংহ", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "গারো পাহাড় নেত্রকোণা", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "বিরিশিরি নেত্রকোণা", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "সোমেশ্বরী নদী", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক আজকের ময়মনসিংহ", web: "https://www.facebook.com/ajkerMymensingh" },
      { name: "দৈনিক গণকণ্ঠ", web: "https://www.facebook.com/dailyganakantho" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "ময়মনসিংহ জেলা ভূমি অফিস", web: "https://land.mymensingh.gov.bd" },
      { name: "নেত্রকোণা জেলা ভূমি অফিস", web: "https://land.netrokona.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "ময়মনসিংহ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "কিশোরগঞ্জ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ময়মনসিংহ ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
    ]
  },
];

const MymensinghDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`ময়মনসিংহ বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default MymensinghDivision;