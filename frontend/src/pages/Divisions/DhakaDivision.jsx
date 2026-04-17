import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#e74c3c";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল",
    items: [
      { name: "ঢাকা কলেজিয়েট স্কুল", web: "https://www.dcs.edu.bd" },
      { name: "সরকারি বিজ্ঞান কলেজ সংযুক্ত উচ্চ মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "নবাবপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মতিঝিল সরকারি বালক উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মতিঝিল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "গভর্নমেন্ট ল্যাবরেটরি হাই স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নারিন্দা সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "টিকাটুলি সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "আজিমপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "গাজীপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নারায়ণগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "মানিকগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "মুন্সিগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নরসিংদী জিলা স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "ভিকারুননিসা নূন স্কুল ও কলেজ", web: "https://www.vnsc.edu.bd" },
      { name: "হলিক্রস স্কুল ও কলেজ", web: "https://www.holycrossdhaka.edu.bd" },
      { name: "সেন্ট জোসেফ উচ্চ মাধ্যমিক বিদ্যালয়", web: "https://www.saintjosephschool.edu.bd" },
      { name: "ঢাকা রেসিডেন্সিয়াল মডেল কলেজ", web: "https://www.drmc.edu.bd" },
      { name: "মনিপুর উচ্চ বিদ্যালয় ও কলেজ", web: "https://www.manipurhighschool.edu.bd" },
      { name: "আইডিয়াল স্কুল ও কলেজ", web: "https://www.idealschool.edu.bd" },
      { name: "মাইলস্টোন কলেজ", web: "https://www.milestonecollege.edu.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "ঢাকা কলেজ", web: "https://www.dhakacollege.edu.bd" },
      { name: "ইডেন মহিলা কলেজ", web: "https://www.edencollege.edu.bd" },
      { name: "তিতুমীর সরকারি কলেজ", web: "https://www.titumircollege.edu.bd" },
      { name: "কবি নজরুল সরকারি কলেজ", web: "https://www.knc.edu.bd" },
      { name: "বাঙলা কলেজ", web: "https://www.banglacollege.edu.bd" },
      { name: "সরকারি শহীদ সোহরাওয়ার্দী কলেজ", web: "https://www.sscollege.edu.bd" },
      { name: "নারায়ণগঞ্জ সরকারি কলেজ", web: "https://www.ngc.edu.bd" },
      { name: "গাজীপুর সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "ঢাকা বিশ্ববিদ্যালয়", web: "https://www.du.ac.bd" },
      { name: "বুয়েট", web: "https://www.buet.ac.bd" },
      { name: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়", web: "https://www.juniv.edu" },
      { name: "জগন্নাথ বিশ্ববিদ্যালয়", web: "https://www.jnu.ac.bd" },
      { name: "ঢাকা মেডিকেল কলেজ", web: "https://www.dmc.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "নর্থ সাউথ বিশ্ববিদ্যালয়", web: "https://www.northsouth.edu" },
      { name: "ব্র্যাক বিশ্ববিদ্যালয়", web: "https://www.bracu.ac.bd" },
      { name: "ইন্ডিপেন্ডেন্ট ইউনিভার্সিটি", web: "https://www.iub.edu.bd" },
      { name: "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.aiub.edu" },
      { name: "ইস্ট ওয়েস্ট ইউনিভার্সিটি", web: "https://www.ewubd.edu" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "ধানমন্ডি থানা", web: "https://dhanmondi.dhaka.gov.bd" },
      { name: "মিরপুর উপজেলা", web: "https://mirpur.dhaka.gov.bd" },
      { name: "গুলশান থানা", web: "https://gulshan.dhaka.gov.bd" },
      { name: "উত্তরা থানা", web: "https://uttara.dhaka.gov.bd" },
      { name: "সাভার উপজেলা", web: "https://savar.dhaka.gov.bd" },
      { name: "কেরানীগঞ্জ উপজেলা", web: "https://keraniganj.dhaka.gov.bd" },
      { name: "নবাবগঞ্জ উপজেলা", web: "https://nawabganj.dhaka.gov.bd" },
      { name: "দোহার উপজেলা", web: "https://dohar.dhaka.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "বাংলাদেশ ব্যাংক (প্রধান কার্যালয়)", web: "https://www.bb.org.bd" },
      { name: "সোনালী ব্যাংক (ঢাকা)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (ঢাকা)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (ঢাকা)", web: "https://www.agranibank.org" },
      { name: "ডাচ-বাংলা ব্যাংক (ঢাকা)", web: "https://www.dutchbanglabank.com" },
      { name: "ইসলামী ব্যাংক (ঢাকা)", web: "https://www.islamibankbd.com" },
      { name: "ব্র্যাক ব্যাংক (ঢাকা)", web: "https://www.bracbank.com" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "ঢাকা মেডিকেল কলেজ হাসপাতাল", web: "https://www.dmc.gov.bd" },
      { name: "স্যার সলিমুল্লাহ মেডিকেল কলেজ", web: "https://www.ssmc.gov.bd" },
      { name: "শহীদ সোহরাওয়ার্দী মেডিকেল কলেজ", web: "https://www.shsmc.gov.bd" },
      { name: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়", web: "https://www.bsmmu.edu.bd" },
      { name: "জাতীয় হৃদরোগ ইনস্টিটিউট", web: "https://www.nicvd.gov.bd" },
      { name: "নারায়ণগঞ্জ সদর হাসপাতাল", web: "https://dghs.narayanganj.gov.bd" },
      { name: "গাজীপুর সদর হাসপাতাল", web: "https://dghs.gazipur.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "স্কয়ার হাসপাতাল", web: "https://www.squarehospital.com" },
      { name: "ইউনাইটেড হাসপাতাল", web: "https://www.uniteddhaka.com" },
      { name: "এভারকেয়ার হাসপাতাল", web: "https://www.evercarebd.com" },
      { name: "ল্যাব এইড হাসপাতাল", web: "https://www.labaiddx.com" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার", web: "https://www.populardiagnostic.com" },
    ]
  },
  {
    name: "থানা",
    items: [
      { name: "রমনা থানা", web: "https://www.police.gov.bd" },
      { name: "লালবাগ থানা", web: "https://www.police.gov.bd" },
      { name: "মতিঝিল থানা", web: "https://www.police.gov.bd" },
      { name: "তেজগাঁও থানা", web: "https://www.police.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (ঢাকা)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (ঢাকা)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "গ্রিন লাইন (ঢাকা)", web: "https://www.greenlinebd.com" },
      { name: "এনা পরিবহন", web: "https://www.facebook.com/ENATransport" },
      { name: "বিআরটিসি (ঢাকা)", web: "https://www.brtc.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "কমলাপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর", web: "https://www.hsia.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
      { name: "কালের কণ্ঠ", web: "https://www.kalerkantho.com" },
      { name: "দৈনিক যুগান্তর", web: "https://www.jugantor.com" },
      { name: "সমকাল", web: "https://www.samakal.com" },
      { name: "বাংলাদেশ প্রতিদিন", web: "https://www.bd-pratidin.com" },
      { name: "ইত্তেফাক", web: "https://www.ittefaq.com.bd" },
      { name: "মানবজমিন", web: "https://www.mzamin.com" },
      { name: "The Daily Star", web: "https://www.thedailystar.net" },
      { name: "The Business Standard", web: "https://www.tbsnews.net" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "ঢাকা জেলা ভূমি অফিস", web: "https://land.dhaka.gov.bd" },
      { name: "নারায়ণগঞ্জ জেলা ভূমি অফিস", web: "https://land.narayanganj.gov.bd" },
      { name: "গাজীপুর জেলা ভূমি অফিস", web: "https://land.gazipur.gov.bd" },
    ]
  },
  {
    name: "আদালত",
    items: [
      { name: "সুপ্রিম কোর্ট বাংলাদেশ", web: "https://www.supremecourt.gov.bd" },
      { name: "ঢাকা জেলা জজ কোর্ট", web: "https://districtjudge.dhaka.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "ঢাকা বিদ্যুৎ বিতরণ কোম্পানি (DESCO)", web: "https://www.desco.org.bd" },
      { name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (DPDC)", web: "https://www.dpdc.org.bd" },
    ]
  },
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "তিতাস গ্যাস ট্রান্সমিশন", web: "https://www.titasgas.org.bd" },
    ]
  },
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "ঢাকা ওয়াসা", web: "https://www.dwasa.org.bd" },
    ]
  },
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক", web: "https://www.banglalink.net" },
      { name: "রবি", web: "https://www.robi.com.bd" },
      { name: "টেলিটক", web: "https://www.teletalk.com.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "লালবাগ কেল্লা", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "আহসান মঞ্জিল", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "জাতীয় সংসদ ভবন", web: "https://www.parliament.gov.bd" },
      { name: "জাতীয় স্মৃতিসৌধ", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "ফ্যান্টাসি কিংডম", web: "https://www.fantasykingdom.net" },
    ]
  },
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (প্রধান কার্যালয়)", web: "https://www.brac.net" },
      { name: "আশা (প্রধান কার্যালয়)", web: "https://www.asa.org.bd" },
      { name: "গ্রামীণ ব্যাংক (প্রধান কার্যালয়)", web: "https://www.grameen.com" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "ঢাকা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নারায়ণগঞ্জ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "গাজীপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ঢাকা ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "ঢাকা উত্তর সিটি কর্পোরেশন", web: "https://www.dncc.gov.bd" },
      { name: "ঢাকা দক্ষিণ সিটি কর্পোরেশন", web: "https://www.dscc.gov.bd" },
      { name: "জাতীয় সংসদ", web: "https://www.parliament.gov.bd" },
    ]
  },
];

const DhakaDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`ঢাকা বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default DhakaDivision;