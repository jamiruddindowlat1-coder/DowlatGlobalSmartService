import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#34495e";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "বরিশাল জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বরিশাল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "পটুয়াখালী জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "ভোলা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পিরোজপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "ঝালকাঠি জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বরগুনা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "বরিশাল সরকারি কলেজ", web: "https://www.barisalgovtcollege.edu.bd" },
      { name: "সরকারি ব্রজমোহন কলেজ", web: "https://www.bmcollege.edu.bd" },
      { name: "পটুয়াখালী সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বরিশাল বিশ্ববিদ্যালয়", web: "https://www.bu.ac.bd" },
      { name: "শেরেবাংলা কৃষি বিশ্ববিদ্যালয়", web: "https://www.sau.edu.bd" },
      { name: "বরিশাল মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "বরিশাল সদর উপজেলা", web: "https://sadar.barisal.gov.bd" },
      { name: "বাকেরগঞ্জ উপজেলা", web: "https://bakerganj.barisal.gov.bd" },
      { name: "পটুয়াখালী সদর উপজেলা", web: "https://sadar.patuakhali.gov.bd" },
      { name: "ভোলা সদর উপজেলা", web: "https://sadar.bhola.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (বরিশাল)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (বরিশাল)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (বরিশাল)", web: "https://www.agranibank.org" },
      { name: "ইসলামী ব্যাংক (বরিশাল)", web: "https://www.islamibankbd.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "শেরেবাংলা মেডিকেল কলেজ হাসপাতাল (বরিশাল)", web: "https://www.sbmch.gov.bd" },
      { name: "পটুয়াখালী সদর হাসপাতাল", web: "https://dghs.patuakhali.gov.bd" },
      { name: "ভোলা সদর হাসপাতাল", web: "https://dghs.bhola.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (বরিশাল)", web: "https://www.hanifenterprisebd.com" },
      { name: "সাকুরা পরিবহন (বরিশাল)", web: "https://www.facebook.com/sakuraparibahan" },
      { name: "বিআরটিসি (বরিশাল)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "লঞ্চ সার্ভিস",
    items: [
      { name: "বিআইডব্লিউটিএ (লঞ্চ সার্ভিস)", web: "https://www.biwta.gov.bd" },
      { name: "সুন্দরবন লঞ্চ সার্ভিস", web: "https://www.facebook.com/sundarbanlaunche" },
      { name: "পারাবত লঞ্চ সার্ভিস", web: "https://www.facebook.com/parabatlaunche" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "কুয়াকাটা সমুদ্র সৈকত", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "দুর্গাসাগর দিঘী", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মনপুরা দ্বীপ", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক বরিশাল", web: "https://www.facebook.com/dailybarisal" },
      { name: "আজকের বার্তা", web: "https://www.facebook.com/ajkerbartabarisal" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "বরিশাল জেলা ভূমি অফিস", web: "https://land.barisal.gov.bd" },
      { name: "পটুয়াখালী জেলা ভূমি অফিস", web: "https://land.patuakhali.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "বরিশাল জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "পটুয়াখালী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "বরিশাল ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
];

const BarisalDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`বরিশাল বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default BarisalDivision;