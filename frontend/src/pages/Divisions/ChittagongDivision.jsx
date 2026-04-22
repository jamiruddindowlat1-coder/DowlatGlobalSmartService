// চট্টগ্রাম বিভাগ — সম্পূর্ণ ডেটা সহ
import React, { useState } from 'react';

const ItemPanel = ({ items, title, color, icon, onClose }) => (
  <div style={{
    background: "#fff",
    border: `2px solid ${color}`,
    borderRadius: "10px",
    padding: "20px",
    marginTop: "10px",
    position: "relative",
    zIndex: 9999,
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
      <h3 style={{ color, margin: 0 }}>{icon} {title}</h3>
      <button onClick={onClose} style={{ background: "transparent", border: "none", fontSize: "20px", cursor: "pointer" }}>✕</button>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.web}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 14px",
            background: "#f8f9fa",
            borderRadius: "6px",
            color: "#2e2e8e",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
            position: "relative",
            zIndex: 10000,
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

const subCategories = [
  {
    name: "সরকারি স্কুল (চট্টগ্রাম)",
    items: [
      { name: "নাসিরাবাদ সরকারি উচ্চ বিদ্যালয়", web: "https://www.nghsctg.edu.bd/" },
      { name: "সরকারি মুসলিম উচ্চ বিদ্যালয়, চট্টগ্রাম", web: "https://gmhsctg.tsmts.com/" },
      { name: "ড. খাস্তাগির সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/drkhastagirschoolofficial/" },
      { name: "চট্টগ্রাম সরকারি উচ্চ বিদ্যালয়", web: "https://chittagongghs.edu.bd/" },
      { name: "চট্টগ্রাম সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.ctggghs.tsmts.com/?p=result-list" },
      { name: "CUET স্কুল ও কলেজ", web: "https://cuetscctg.edu.bd/" },
      { name: "চট্টগ্রাম কলেজিয়েট স্কুল ও কলেজ", web: "https://ctgcs.edu.bd/" },
      { name: "বাকলিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://bghs.tsmts.org/" },
      { name: "ফৌজদারহাট ক্যাডেট কলেজ", web: "https://www.facebook.com/p/Faujdarhat-Cadet-College-100057383600792/" },
      { name: "চট্টগ্রাম সরকারি মডেল স্কুল এন্ড কলেজ", web: "https://cmsc.edu.bd/" },
      { name: "Kattoli NURUL HOQUE CHOWDHURY HIGH SCHOOL", web: "https://www.sohopathi.com/kattali-nurul-hoque-chowdhury-high-school/" },
      { name: "সিটিটাউন সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://citygghs.edu.bd/" },
      { name: "Kattali Ideal KG and High School", web: "https://www.facebook.com/profile.php?id=100063473227749&locale=ru_RU#" },
      { name: "Halishahar Begumjan High School", web: "https://www.facebook.com/HBHSChittagong/" },
      { name: "কক্সবাজার সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/coxsbazargovernmenthighschool/" },
      { name: "চট্টগ্রাম সরকারি মডেল স্কুল অ্যান্ড কলেজ", web: "https://cmsc.edu.bd/" },
      { name: "কধুরখীল সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/kadhurkhilgovthighschool/?locale=bn_IN" },
      { name: "আবদুর রহমান সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/argghs.patiya/" },
      { name: "পটিয়া গভর্নমেন্ট হাই স্কুল", web: "https://www.facebook.com/p/%E0%A6%AA%E0%A6%9F%E0%A6%BF%E0%A7%9F%E0%A6%BE-%E0%A6%86%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-100063768439589/" },
      { name: "রাউজান গভর্নমেন্ট হাই স্কুল", web: "https://rrac.edu.bd/" },
      { name: "মিরসরাই গভর্নমেন্ট হাই স্কুল", web: "https://www.facebook.com/MirsaraiGovtModelHighSchool/" },
      { name: "সাতকানিয়া গভর্নমেন্ট হাই স্কুল", web: "https://www.facebook.com/ssgbgovt.modelhighschool/?locale=bn_IN" },
      { name: "সাতকানিয়া সরকারি বালিকা স্কুল", web: "https://www.facebook.com/p/%E0%A6%B8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC-100063589690409/" },
      { name: "লোহাগড়া সরকারি পাইলট উচ্চ বিদ্যালয়", web: "http://www.lphs.edu.bd/" },
      { name: "হাটহাজারী সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/hathazariparbatimodelhighschool/?locale=bn_IN" },
      { name: "আনোয়ারা সরকারি উচ্চ বিদ্যালয়", web: "https://www.agmhs.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (কুমিল্লা)",
    items: [
      { name: "কুমিল্লা জিলা স্কুল", web: "http://www.czs.edu.bd/" },
      { name: "দাউদকান্দি সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/DaudkandiGovtHighSchool" },
      { name: "চান্দিনা সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ChandinaGovtSchool" },
      { name: "লাকসাম সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/LaksamGovtHighSchool" }
    ]
  },
  {
    name: "সরকারি স্কুল (কক্সবাজার)",
    items: [
      { name: "কক্সবাজার জিলা স্কুল", web: "https://www.facebook.com/CoxsBazarZillaSchool" },
      { name: "রামু খিজারী সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Ramu-kheejaree-government-high-school-100063058368262/" },
      { name: "চকরিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Chakaria-Government-High-School-100067881013073/" },
      { name: "চকরিয়া সরকারি বালিকা বিদ্যালয়", web: "https://www.chakoriagirls.edu.bd/" },
      { name: "টেকনাফ এজাহার সরকারি বালিকা বিদ্যালয়", web: "https://tekegghs.edu.bd/" }
    ]
  },
  {
    name: "সরকারি স্কুল (নোয়াখালী)",
    items: [
      { name: "নোয়াখালী জিলা স্কুল", web: "https://www.facebook.com/nzs1850official/" },
      { name: "বেগমগঞ্জ সরকারি পাইলট উচ্চ বিদ্যালয়", web: "https://tscbegumganj.noakhali.gov.bd/" },
      { name: "চাটখিল পি. জি. সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/%E0%A6%9A%E0%A6%BE%E0%A6%9F%E0%A6%96%E0%A6%BF%E0%A6%B2-%E0%A6%AA%E0%A6%BF-%E0%A6%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-100038067705756/" }
    ]
  },
  {
    name: "সরকারি স্কুল (ফেনী)",
    items: [
      { name: "ফেনী পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://fgphs.edu.bd/" },
      { name: "ছাগলনাইয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.chhagalnaiyapilot.edu.bd/" },
      { name: "আতাতুর্ক সরকারি মডেল হাই স্কুল", web: "https://www.ataturkschool.edu.bd/web/" }
    ]
  },
  {
    name: "সরকারি স্কুল (ব্রাহ্মণবাড়িয়া)",
    items: [
      { name: "অন্নদা সরকারি উচ্চ বিদ্যালয়, ব্রাহ্মণবাড়িয়া", web: "https://www.facebook.com/groups/348544918962837/" },
      { name: "আখাউড়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/railwayschoolakhaura/" }
    ]
  },
  {
    name: "সরকারি স্কুল (চাঁদপুর)",
    items: [
      { name: "চাঁদপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ChandpurGovtHighSchool" },
      { name: "হাজীগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.hgmphc.edu.bd/" }
    ]
  },
  {
    name: "সরকারি স্কুল (লক্ষ্মীপুর)",
    items: [
      { name: "লক্ষ্মীপুর আদর্শ সামাদ সরকারি উচ্চ বিদ্যালয়", web: "https://lasghs.edu.bd/" },
      { name: "রামগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://ramgonjhighschool.edu.bd/" }
    ]
  },
  {
    name: "সরকারি স্কুল (রাঙামাটি)",
    items: [
      { name: "রাঙামাটি সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/RangamatiGovtHighSchool" },
      { name: "কাপ্তাই সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/kaptaihighschool/" }
    ]
  },
  {
    name: "সরকারি স্কুল (খাগড়াছড়ি)",
    items: [
      { name: "খাগড়াছড়ি সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/158509300891488/" }
    ]
  },
  {
    name: "সরকারি স্কুল (বান্দরবান)",
    items: [
      { name: "বান্দরবান সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/bandarbangovths.gov.bd/" }
    ]
  },
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "Chittagong Grammar School (CGS)", web: "https://cgs.edu.bd/" },
      { name: "Cantonment Public School & College, Chattogram", web: "https://ccpc.edu.bd/" },
      { name: "Ispahani Public School & College", web: "https://www.ipscctg.edu.bd/" },
      { name: "The Guardian English School, Chattogram", web: "https://tgesctg.org/" },
      { name: "Chittagong Ideal High School", web: "https://www.cihs.tsmts.org/" },
      { name: "CUET School & College", web: "https://cuetscctg.edu.bd/" },
      { name: "St. Placid's High School", web: "https://sjs.edu.bd/new/index.php" },
      { name: "Sunshine Grammar School", web: "https://www.facebook.com/sunshinectg" },
      { name: "Mastermind International School, Chattogram", web: "https://www.facebook.com/mastermind.international.school.ctg/" },
      { name: "William Carey Academy, Chattogram", web: "https://www.facebook.com/williamcareyctg" },
      { name: "Little Jewels School, Chattogram", web: "https://www.facebook.com/littlejewelsctg" },
      { name: "Frobel Academy, Chattogram", web: "https://www.facebook.com/frobelctg" },
      { name: "Presidency International School, Chattogram", web: "https://www.facebook.com/presidencyctg" },
      { name: "Chittagong International School", web: "https://www.facebook.com/p/Chittagong-International-School-CIS-100063841981425/" },
      { name: "Readers School & College", web: "https://www.facebook.com/rsc.ctg" },
      { name: "CIDER International School", web: "https://www.facebook.com/cisbd.org/" },
      { name: "Cantonment English School & College", web: "https://cesc.edu.bd/" },
      { name: "বাংলাদেশ ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজ", web: "https://bisc.com.bd/" },
      { name: "চট্টগ্রাম রেফারেন্স স্কুল অ্যান্ড কলেজ", web: "https://www.facebook.com/ctg.reference.school/" },
      { name: "সেন্ট জোসেফ হাই স্কুল", web: "https://www.facebook.com/sjt.ctg/" },
      { name: "চট্টগ্রাম কলেজিয়েট গার্লস স্কুল", web: "https://www.facebook.com/ctg.college.girls/" }
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "চট্টগ্রাম কলেজ", web: "https://ctgcollege.gov.bd" },
      { name: "সরকারি হাজী মুহাম্মদ মহসিন কলেজ", web: "https://www.mohsincollege.edu.bd/en" },
      { name: "চট্টগ্রাম সরকারি মহিলা কলেজ", web: "https://gccc.edu.bd/" },
      { name: "সরকারি সিটি কলেজ, চট্টগ্রাম", web: "https://gccc.edu.bd" },
      { name: "সরকারি কমার্স কলেজ, চট্টগ্রাম", web: "https://gcom.edu.bd" },
      { name: "সরকারি টিচার্স ট্রেনিং কলেজ, চট্টগ্রাম", web: "https://ttc.chittagong.gov.bd" },
      { name: "সরকারি শারীরিক শিক্ষা কলেজ, চট্টগ্রাম", web: "https://cpec.college.gov.bd" },
      { name: "স্যার আশুতোষ সরকারি কলেজ, চট্টগ্রাম", web: "https://sirashutosh.college.gov.bd/" },
      { name: "বাকলিয়া সরকারি কলেজ", web: "https://bgcc.edu.bd" },
      { name: "পটিয়া সরকারি কলেজ", web: "https://patiyagovtcollege.gov.bd" },
      { name: "সাতকানিয়া সরকারি কলেজ", web: "https://satkaniagovtcollege.edu.bd" },
      { name: "রাউজান সরকারি কলেজ", web: "https://raozancollege.edu.bd" },
      { name: "ফটিকছড়ি সরকারি কলেজ", web: "https://fgc.edu.bd" },
      { name: "সীতাকুণ্ড সরকারি মহিলা কলেজ", web: "https://skgmc.edu.bd" },
      { name: "হাটহাজারী সরকারি কলেজ", web: "https://www.facebook.com/hathazari.govt.college/" },
      { name: "আনোয়ারা সরকারি কলেজ", web: "https://www.facebook.com/AnwaraGovtCollege/" },
      { name: "রাঙ্গুনিয়া সরকারি কলেজ", web: "https://ranguniacollege.edu.bd/" },
      { name: "নিজামপুর সরকারি কলেজ (মীরসরাই)", web: "https://nizampurcollege.edu.bd/" },
      { name: "চুনতি সরকারি মহিলা কলেজ (লোহাগাড়া)", web: "https://www.facebook.com/p/%E0%A6%9A%E0%A7%81%E0%A6%A8%E0%A6%A4%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AE%E0%A6%B9%E0%A6%BF%E0%A6%B2%E0%A6%BE-%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C-Chunati-Govtmohila-College-100077890746829/" },
      { name: "সরকারি আলাওল কলেজ (বাঁশখালী)", web: "https://www.facebook.com/G.AC.B.CTG/photos/" },
      { name: "গাছবাড়ীয়া সরকারি কলেজ (বোয়ালখালী)", web: "https://www.facebook.com/ggclg/?locale=bn_IN" },
      { name: "সরকারি হাজী আব্দুল বাতেন কলেজ", web: "https://www.facebook.com/groups/1164574871501592/" },
      { name: "কুমিল্লা ভিক্টোরিয়া সরকারি কলেজ", web: "https://cvgc.edu.bd" },
      { name: "কুমিল্লা সরকারি মহিলা কলেজ", web: "https://cumillagwc.edu.bd/Home.html" },
      { name: "নওয়াব ফয়জুন্নেছা সরকারি কলেজ", web: "https://www.nfgc.site/" },
      { name: "শ্রীকাইল সরকারি কলেজ", web: "https://www.facebook.com/SreekailCollegeComilla/" },
      { name: "বরুড়া শহীদ স্মৃতি সরকারি কলেজ", web: "https://www.facebook.com/Bssgc.office/" },
      { name: "লালমাই সরকারি কলেজ", web: "https://www.facebook.com/Lalmaicollege/" },
      { name: "ফেনী সরকারি কলেজ", web: "https://fgc.gov.bd" },
      { name: "সরকারি জিয়া মহিলা কলেজ, ফেনী", web: "https://www.facebook.com/govt.ziamohilacollegefeni/" },
      { name: "সোনাগাজী সরকারি কলেজ", web: "https://sonagazicollege.gov.bd/" },
      { name: "পরশুরাম সরকারি কলেজ", web: "https://www.facebook.com/ParshuramGovtCollege/" },
      { name: "ছাগলনাইয়া সরকারি কলেজ", web: "https://chhgc.edu.bd/" },
      { name: "ফুলগাজী সরকারি কলেজ", web: "https://fulgcf.edu.bd/" },
      { name: "নোয়াখালী সরকারি কলেজ", web: "https://www.noakhalicoll.gov.bd/" },
      { name: "নোয়াখালী সরকারি মহিলা কলেজ", web: "https://www.noakhaligmc.gov.bd/" },
      { name: "হাতিয়া সরকারি কলেজ", web: "https://www.facebook.com/groups/376080369479445/" },
      { name: "সোনাইমুড়ি সরকারি কলেজ", web: "https://www.facebook.com/groups/655567179010055/" },
      { name: "ব্রাহ্মণবাড়িয়া সরকারি কলেজ", web: "https://www.facebook.com/BrahmanbariaGovtCollege/" },
      { name: "ব্রাহ্মণবাড়িয়া সরকারি মহিলা কলেজ", web: "https://bgmc.edu.bd/" },
      { name: "আশুগঞ্জ সরকারি কলেজ", web: "https://www.facebook.com/AshuganjGovtCollege/" },
      { name: "নবীনগর সরকারি কলেজ", web: "https://nabinagarcollege.com/" },
      { name: "চাঁদপুর সরকারি কলেজ", web: "https://chandpurcollege.edu.bd/" },
      { name: "চাঁদপুর সরকারি মহিলা কলেজ", web: "https://chgmc.college.gov.bd/" },
      { name: "হাজীগঞ্জ সরকারি কলেজ", web: "https://phaep-buds-mccluiys.yolasite.com/" },
      { name: "শাহরাস্তি সরকারি কলেজ", web: "https://www.facebook.com/karfulennessawomenscollegechandpur/photos/" },
      { name: "ফরিদগঞ্জ সরকারি কলেজ", web: "https://fbgc.college.gov.bd/" },
      { name: "লক্ষ্মীপুর সরকারি কলেজ", web: "https://laxmipurgovtcollege.edu.bd/" },
      { name: "লক্ষ্মীপুর সরকারি মহিলা কলেজ", web: "https://laxmipurgovtmohilacollege.edu.bd/" },
      { name: "রামগঞ্জ সরকারি কলেজ", web: "https://www.facebook.com/ramgonjcollege/?locale=bn_IN" },
      { name: "কক্সবাজার সরকারি কলেজ", web: "https://cgc.edu.bd/" },
      { name: "কক্সবাজার সরকারি মহিলা কলেজ", web: "https://cgmc.edu.bd/" },
      { name: "চকরিয়া সরকারি কলেজ", web: "https://www.facebook.com/chakariagovt.collegeofficil/" },
      { name: "টেকনাফ সরকারি কলেজ", web: "https://teknafgovtcollege.edu.bd/" },
      { name: "রামু সরকারি কলেজ", web: "https://ramucollege.edu.bd/" },
      { name: "রাঙ্গামাটি সরকারি কলেজ", web: "https://rangamaticollege.gov.bd/" },
      { name: "কর্ণফুলী সরকারি কলেজ", web: "https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%80_%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF_%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C" },
      { name: "রাঙ্গামাটি সরকারি মহিলা কলেজ", web: "https://www.rangamatigmc.gov.bd/" },
      { name: "কাপ্তাই সরকারি কলেজ", web: "https://www.facebook.com/KaptaiGovtCollege/" },
      { name: "কাউখালী সরকারি কলেজ", web: "http://www.gkc.edu.bd/" },
      { name: "খাগড়াছড়ি সরকারি কলেজ", web: "https://www.facebook.com/p/%E0%A6%96%E0%A6%BE%E0%A6%97%E0%A7%9C%E0%A6%BE%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C-%E0%A6%96%E0%A6%BE%E0%A6%97%E0%A7%9C%E0%A6%BE%E0%A6%9B%E0%A7%9C%E0%A6%BF-100025530909389/" },
      { name: "খাগড়াছড়ি সরকারি মহিলা কলেজ", web: "https://www.kgwc.edu.bd/" },
      { name: "মাটিরাঙ্গা সরকারি ডিগ্রি কলেজ", web: "https://www.facebook.com/MatirangaGovtCollege/" },
      { name: "মানিকছড়ি গিরিমৈত্রী সরকারি কলেজ", web: "https://www.facebook.com/MGMDG.College/" },
      { name: "পানছড়ি সরকারি কলেজ", web: "https://www.facebook.com/PanchariCollegeU/" },
      { name: "রামগড় সরকারি কলেজ", web: "https://www.facebook.com/ramgonjcollege/?locale=bn_IN" },
      { name: "দীঘিনালা সরকারি কলেজ", web: "https://dighinala.college.gov.bd/" },
      { name: "বান্দরবান সরকারি কলেজ", web: "http://bandarbangovtcollege.edu.bd/" },
      { name: "বান্দরবান সরকারি মহিলা কলেজ", web: "https://bandarbangwc.edu.bd/" },
      { name: "সরকারি মাতামুহুরী কলেজ (লামা)", web: "https://matamuhuri.college.gov.bd/" },
    ]
  },
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "চট্টগ্রাম ক্যান্টনমেন্ট পাবলিক কলেজ", web: "https://ccpc.edu.bd" },
      { name: "হাজেরা তাজু ডিগ্রি কলেজ", web: "https://htdc.edu.bd" },
      { name: "চট্টগ্রাম বিজ্ঞান কলেজ", web: "https://www.facebook.com/cscctg" },
      { name: "পলিটেকনিক ইনস্টিটিউট কলেজ (প্রাইভেট)", web: "https://www.facebook.com/picctg" },
      { name: "ইন্টারন্যাশনাল স্কুল এন্ড কলেজ চট্টগ্রাম", web: "https://www.ipscctg.edu.bd" },
      { name: "Ispahani Public School & College (English Version)", web: "https://www.ipscctg.edu.bd" },
      { name: "ইস্পাহানি পাবলিক স্কুল ও কলেজ", web: "https://www.ipscctg.edu.bd" },
      { name: "বিএএফ শাহীন কলেজ চট্টগ্রাম", web: "https://www.bafsc.edu.bd" },
      { name: "সানশাইন গ্রামার স্কুল এন্ড কলেজ", web: "https://www.facebook.com/sunshinectg" },
      { name: "ইউনিভার্সাল স্কুল এন্ড কলেজ", web: "https://www.facebook.com/universalctg" },
      { name: "মেরিট বাংলাদেশ স্কুল এন্ড কলেজ", web: "https://www.facebook.com/MeritBangladeshSchoolAndCollege/" },
      { name: "ন্যাশনাল পাবলিক স্কুল এন্ড কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/npscctg" },
      { name: "ওমরগণি এম.ই.এস কলেজ", web: "https://ogmescollege.edu.bd" },
      { name: "মোহাম্মদপুর পাবলিক কলেজ (চট্টগ্রাম)", web: "https://www.facebook.com/mpsc2009/" },
      { name: "ইসলামিয়া কলেজ, চট্টগ্রাম", web: "https://islamiacollegectg.edu.bd/" },
      { name: "মদিনা কলেজ, চট্টগ্রাম", web: "https://mdc.ac.in/" },
      { name: "বন্দর নগরী কলেজ", web: "http://cpc.edu.bd/#/home" },
      { name: "চট্টগ্রাম আইডিয়াল কলেজ", web: "https://www.cihs.tsmts.org/" },
      { name: "রেডিয়েন্ট কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/p/Radiant-School-College-61584434925687/" },
      { name: "কসমোপলিটান কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/cosmopolitanctg" },
      { name: "মডার্ন কলেজ, চট্টগ্রাম", web: "https://cmsc.edu.bd/" },
      { name: "প্যাসিফিক ইন্টারন্যাশনাল কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/pisandc/" },
      { name: "চট্টগ্রাম সিটি কর্পোরেশন প্রিমিয়ার কলেজ", web: "https://cccpc.edu.bd/" },
      { name: "চট্টগ্রাম ইন্টারন্যাশনাল মেডিকেল কলেজ", web: "https://www.cimch.edu.bd" },
    ]
  },
  {
    name: "মাদ্রাসা",
    items: [
      { name: "জামিয়া আহমদিয়া সুন্নিয়া আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "চট্টগ্রাম মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "চট্টগ্রাম বিশ্ববিদ্যালয়", web: "https://www.cu.ac.bd" },
      { name: "চট্টগ্রাম প্রকৌশল বিশ্ববিদ্যালয় (CUET)", web: "https://www.cuet.ac.bd" },
    ]
  },
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "ইউনিভার্সিটি অফ সায়েন্স অ্যান্ড টেকনোলজি চট্টগ্রাম", web: "https://www.ustc.ac.bd" },
      { name: "প্রিমিয়ার ইউনিভার্সিটি", web: "https://www.puc.ac.bd" },
      { name: "চট্টগ্রাম ইন্ডিপেন্ডেন্ট ইউনিভার্সিটি", web: "https://www.ciu.edu.bd" },
      { name: "বিজিসি ট্রাস্ট ইউনিভার্সিটি", web: "https://bgctub.ac.bd/" },
      { name: "ইস্টার্ন ইউনিভার্সিটি", web: "https://www.easternuni.edu.bd" },
      { name: "চট্টগ্রাম ইন্টারন্যাশনাল মেডিকেল কলেজ", web: "https://www.cimch.edu.bd" },
      { name: "সাউদার্ন ইউনিভার্সিটি বাংলাদেশ", web: "https://www.southern.edu.bd" },
      { name: "পোর্ট সিটি ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.portcity.edu.bd" },
      { name: "আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম", web: "https://www.iiuc.ac.bd" },
      { name: "প্রেসিডেন্সি ইউনিভার্সিটি", web: "https://www.presidency.edu.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      // ── চট্টগ্রাম জেলা ──
      { name: "আনোয়ারা উপজেলা", web: "https://anwara.chittagong.gov.bd" },
      { name: "বাঁশখালী উপজেলা", web: "https://banshkhali.chittagong.gov.bd" },
      { name: "বোয়ালখালী উপজেলা", web: "https://boalkhali.chittagong.gov.bd" },
      { name: "চন্দনাইশ উপজেলা", web: "https://chandanaish.chittagong.gov.bd" },
      { name: "ফটিকছড়ি উপজেলা", web: "https://fatikchhari.chittagong.gov.bd" },
      { name: "হাটহাজারী উপজেলা", web: "https://hathazari.chittagong.gov.bd" },
      { name: "কর্ণফুলী উপজেলা", web: "https://karnaphuli.chittagong.gov.bd" },
      { name: "লোহাগাড়া উপজেলা", web: "https://lohagara.chittagong.gov.bd" },
      { name: "মীরসরাই উপজেলা", web: "https://mirsharai.chittagong.gov.bd" },
      { name: "পটিয়া উপজেলা", web: "https://patiya.chittagong.gov.bd" },
      { name: "রাঙ্গুনিয়া উপজেলা", web: "https://rangunia.chittagong.gov.bd" },
      { name: "রাউজান উপজেলা", web: "https://raozan.chittagong.gov.bd" },
      { name: "সন্দ্বীপ উপজেলা", web: "https://sandwip.chittagong.gov.bd" },
      { name: "সাতকানিয়া উপজেলা", web: "https://satkania.chittagong.gov.bd" },
      { name: "সীতাকুণ্ড উপজেলা", web: "https://sitakunda.chittagong.gov.bd" },
      // ── কক্সবাজার জেলা ──
      { name: "কক্সবাজার সদর উপজেলা", web: "https://sadar.coxsbazar.gov.bd" },
      { name: "চকরিয়া উপজেলা", web: "https://chakaria.coxsbazar.gov.bd" },
      { name: "কুতুবদিয়া উপজেলা", web: "https://kutubdia.coxsbazar.gov.bd" },
      { name: "মহেশখালী উপজেলা", web: "https://maheshkhali.coxsbazar.gov.bd" },
      { name: "পেকুয়া উপজেলা", web: "https://pekua.coxsbazar.gov.bd" },
      { name: "রামু উপজেলা", web: "https://ramu.coxsbazar.gov.bd" },
      { name: "টেকনাফ উপজেলা", web: "https://teknaf.coxsbazar.gov.bd" },
      { name: "উখিয়া উপজেলা", web: "https://ukhia.coxsbazar.gov.bd" },
      // ── রাঙামাটি জেলা ──
      { name: "রাঙামাটি সদর উপজেলা", web: "https://sadar.rangamati.gov.bd" },
      { name: "বাঘাইছড়ি উপজেলা", web: "https://baghaichhari.rangamati.gov.bd" },
      { name: "বরকল উপজেলা", web: "https://barkal.rangamati.gov.bd" },
      { name: "বেলাইছড়ি উপজেলা", web: "https://belaichhari.rangamati.gov.bd" },
      { name: "জুরাছড়ি উপজেলা", web: "https://jurachhari.rangamati.gov.bd" },
      { name: "কাপ্তাই উপজেলা", web: "https://kaptai.rangamati.gov.bd" },
      { name: "কাউখালী উপজেলা", web: "https://kawkhali.rangamati.gov.bd" },
      { name: "লংগদু উপজেলা", web: "https://langadu.rangamati.gov.bd" },
      { name: "নানিয়ারচর উপজেলা", web: "https://naniarchar.rangamati.gov.bd" },
      { name: "রাজস্থলী উপজেলা", web: "https://rajasthali.rangamati.gov.bd" },
      // ── বান্দরবান জেলা ──
      { name: "বান্দরবান সদর উপজেলা", web: "https://sadar.bandarban.gov.bd" },
      { name: "আলীকদম উপজেলা", web: "https://alikadam.bandarban.gov.bd" },
      { name: "লামা উপজেলা", web: "https://lama.bandarban.gov.bd" },
      { name: "নাইক্ষ্যংছড়ি উপজেলা", web: "https://naikhongchhari.bandarban.gov.bd" },
      { name: "রোয়াংছড়ি উপজেলা", web: "https://rowangchhari.bandarban.gov.bd" },
      { name: "রুমা উপজেলা", web: "https://ruma.bandarban.gov.bd" },
      { name: "থানচি উপজেলা", web: "https://thanchi.bandarban.gov.bd" },
      // ── খাগড়াছড়ি জেলা ──
      { name: "খাগড়াছড়ি সদর উপজেলা", web: "https://sadar.khagrachhari.gov.bd" },
      { name: "দীঘিনালা উপজেলা", web: "https://dighinala.khagrachhari.gov.bd" },
      { name: "গুইমারা উপজেলা", web: "https://guimara.khagrachhari.gov.bd" },
      { name: "লক্ষ্মীছড়ি উপজেলা", web: "https://lakshmichhari.khagrachhari.gov.bd" },
      { name: "মহালছড়ি উপজেলা", web: "https://mahalchhari.khagrachhari.gov.bd" },
      { name: "মানিকছড়ি উপজেলা", web: "https://manikchhari.khagrachhari.gov.bd" },
      { name: "মাটিরাঙা উপজেলা", web: "https://matiranga.khagrachhari.gov.bd" },
      { name: "পানছড়ি উপজেলা", web: "https://panchhari.khagrachhari.gov.bd" },
      { name: "রামগড় উপজেলা", web: "https://ramgarh.khagrachhari.gov.bd" },
      // ── ফেনী জেলা ──
      { name: "ফেনী সদর উপজেলা", web: "https://sadar.feni.gov.bd" },
      { name: "ছাগলনাইয়া উপজেলা", web: "https://chhagalnaiya.feni.gov.bd" },
      { name: "দাগনভূঞা উপজেলা", web: "https://daganbhuiyan.feni.gov.bd" },
      { name: "পরশুরাম উপজেলা", web: "https://parshuram.feni.gov.bd" },
      { name: "ফুলগাজী উপজেলা", web: "https://phulgazi.feni.gov.bd" },
      { name: "সোনাগাজী উপজেলা", web: "https://sonagazi.feni.gov.bd" },
      // ── লক্ষ্মীপুর জেলা ──
      { name: "লক্ষ্মীপুর সদর উপজেলা", web: "https://sadar.lakshmipur.gov.bd" },
      { name: "কমলনগর উপজেলা", web: "https://kamalnagar.lakshmipur.gov.bd" },
      { name: "রামগঞ্জ উপজেলা", web: "https://ramganj.lakshmipur.gov.bd" },
      { name: "রামগতি উপজেলা", web: "https://ramgati.lakshmipur.gov.bd" },
      { name: "রায়পুর উপজেলা", web: "https://raipur.lakshmipur.gov.bd" },
      // ── নোয়াখালী জেলা ──
      { name: "নোয়াখালী সদর (সুধারাম) উপজেলা", web: "https://sudharam.noakhali.gov.bd" },
      { name: "বেগমগঞ্জ উপজেলা", web: "https://begumganj.noakhali.gov.bd" },
      { name: "চাটখিল উপজেলা", web: "https://chatkhil.noakhali.gov.bd" },
      { name: "কোম্পানীগঞ্জ উপজেলা", web: "https://companiganj.noakhali.gov.bd" },
      { name: "হাতিয়া উপজেলা", web: "https://hatiya.noakhali.gov.bd" },
      { name: "কবিরহাট উপজেলা", web: "https://kabirhat.noakhali.gov.bd" },
      { name: "সেনবাগ উপজেলা", web: "https://senbagh.noakhali.gov.bd" },
      { name: "সোনাইমুড়ি উপজেলা", web: "https://sonaimuri.noakhali.gov.bd" },
      { name: "সুবর্ণচর উপজেলা", web: "https://subarnachar.noakhali.gov.bd" },
      // ── ব্রাহ্মণবাড়িয়া জেলা ──
      { name: "ব্রাহ্মণবাড়িয়া সদর উপজেলা", web: "https://sadar.brahmanbaria.gov.bd" },
      { name: "আখাউড়া উপজেলা", web: "https://akhaura.brahmanbaria.gov.bd" },
      { name: "আশুগঞ্জ উপজেলা", web: "https://ashuganj.brahmanbaria.gov.bd" },
      { name: "বাঞ্ছারামপুর উপজেলা", web: "https://bancharampur.brahmanbaria.gov.bd" },
      { name: "বিজয়নগর উপজেলা", web: "https://bijoynagar.brahmanbaria.gov.bd" },
      { name: "কসবা উপজেলা", web: "https://kasba.brahmanbaria.gov.bd" },
      { name: "নবীনগর উপজেলা", web: "https://nabinagar.brahmanbaria.gov.bd" },
      { name: "নাসিরনগর উপজেলা", web: "https://nasirnagar.brahmanbaria.gov.bd" },
      { name: "সরাইল উপজেলা", web: "https://sarail.brahmanbaria.gov.bd" },
      // ── কুমিল্লা জেলা ──
      { name: "কুমিল্লা আদর্শ সদর উপজেলা", web: "https://adarshasadar.comilla.gov.bd" },
      { name: "কুমিল্লা সদর দক্ষিণ উপজেলা", web: "https://sadardakshin.comilla.gov.bd" },
      { name: "বরুড়া উপজেলা", web: "https://barura.comilla.gov.bd" },
      { name: "ব্রাহ্মণপাড়া উপজেলা", web: "https://brahmanpara.comilla.gov.bd" },
      { name: "বুড়িচং উপজেলা", web: "https://burichang.comilla.gov.bd" },
      { name: "চান্দিনা উপজেলা", web: "https://chandina.comilla.gov.bd" },
      { name: "চৌদ্দগ্রাম উপজেলা", web: "https://chauddagram.comilla.gov.bd" },
      { name: "দাউদকান্দি উপজেলা", web: "https://daudkandi.comilla.gov.bd" },
      { name: "দেবিদ্বার উপজেলা", web: "https://debidwar.comilla.gov.bd" },
      { name: "হোমনা উপজেলা", web: "https://homna.comilla.gov.bd" },
      { name: "লাকসাম উপজেলা", web: "https://laksam.comilla.gov.bd" },
      { name: "লালমাই উপজেলা", web: "https://lalmai.comilla.gov.bd" },
      { name: "মনোহরগঞ্জ উপজেলা", web: "https://manoharganj.comilla.gov.bd" },
      { name: "মেঘনা উপজেলা", web: "https://meghna.comilla.gov.bd" },
      { name: "মুরাদনগর উপজেলা", web: "https://muradnagar.comilla.gov.bd" },
      { name: "নাঙ্গলকোট উপজেলা", web: "https://nangalkot.comilla.gov.bd" },
      { name: "তিতাস উপজেলা", web: "https://titas.comilla.gov.bd" },
      // ── চাঁদপুর জেলা ──
      { name: "চাঁদপুর সদর উপজেলা", web: "https://sadar.chandpur.gov.bd" },
      { name: "ফরিদগঞ্জ উপজেলা", web: "https://faridganj.chandpur.gov.bd" },
      { name: "হাইমচর উপজেলা", web: "https://haimchar.chandpur.gov.bd" },
      { name: "হাজীগঞ্জ উপজেলা", web: "https://hajiganj.chandpur.gov.bd" },
      { name: "কচুয়া উপজেলা", web: "https://kachua.chandpur.gov.bd" },
      { name: "মতলব দক্ষিণ উপজেলা", web: "https://matlabdakshin.chandpur.gov.bd" },
      { name: "মতলব উত্তর উপজেলা", web: "https://matlabuttara.chandpur.gov.bd" },
      { name: "শাহরাস্তি উপজেলা", web: "https://shahrasti.chandpur.gov.bd" },
    ]
  },
  {
    name: "থানা",
    items: [
      { name: "পাহাড়তলী থানা", web: "https://cmp.gov.bd" },
      { name: "কোতোয়ালী থানা", web: "https://cmp.gov.bd" },
      // ── চট্টগ্রাম জেলা ──
      { name: "মীরসরাই থানা", web: "http://police.mirsharai.chittagong.gov.bd" },
      { name: "সীতাকুণ্ড থানা", web: "http://police.sitakunda.chittagong.gov.bd" },
      { name: "সন্দ্বীপ থানা", web: "http://police.sandwip.chittagong.gov.bd" },
      { name: "হাটহাজারী থানা", web: "http://police.hathazari.chittagong.gov.bd" },
      { name: "রাউজান থানা", web: "http://police.raozan.chittagong.gov.bd" },
      { name: "রাঙ্গুনিয়া থানা", web: "http://police.rangunia.chittagong.gov.bd" },
      { name: "ফটিকছড়ি থানা", web: "http://police.fatikchhari.chittagong.gov.bd" },
      { name: "পটিয়া থানা", web: "http://police.patiya.chittagong.gov.bd" },
      { name: "আনোয়ারা থানা", web: "http://police.anwara.chittagong.gov.bd" },
      { name: "বোয়ালখালী থানা", web: "http://police.boalkhali.chittagong.gov.bd" },
      { name: "চন্দনাইশ থানা", web: "http://police.chandanaish.chittagong.gov.bd" },
      { name: "বাঁশখালী থানা", web: "http://police.banshkhali.chittagong.gov.bd" },
      { name: "সাতকানিয়া থানা", web: "http://police.satkania.chittagong.gov.bd" },
      { name: "লোহাগাড়া থানা", web: "http://police.lohagara.chittagong.gov.bd" },
      { name: "কর্ণফুলী (উপজেলা) থানা", web: "http://police.karnaphuli.chittagong.gov.bd" },
      // ── কক্সবাজার জেলা ──
      { name: "কক্সবাজার সদর থানা", web: "http://police.sadar.coxsbazar.gov.bd" },
      { name: "রামু থানা", web: "http://police.ramu.coxsbazar.gov.bd" },
      { name: "চকরিয়া থানা", web: "http://police.chakaria.coxsbazar.gov.bd" },
      { name: "টেকনাফ থানা", web: "http://police.teknaf.coxsbazar.gov.bd" },
      { name: "উখিয়া থানা", web: "http://police.ukhia.coxsbazar.gov.bd" },
      { name: "পেকুয়া থানা", web: "http://police.pekua.coxsbazar.gov.bd" },
      { name: "মহেশখালী থানা", web: "http://police.maheshkhali.coxsbazar.gov.bd" },
      { name: "কুতুবদিয়া থানা", web: "http://police.kutubdia.coxsbazar.gov.bd" },
      // ── রাঙামাটি জেলা ──
      { name: "রাঙামাটি সদর থানা", web: "http://police.sadar.rangamati.gov.bd" },
      { name: "কাপ্তাই থানা", web: "http://police.kaptai.rangamati.gov.bd" },
      { name: "কাউখালী থানা", web: "http://police.kawkhali.rangamati.gov.bd" },
      { name: "বাঘাইছড়ি থানা", web: "http://police.baghaichhari.rangamati.gov.bd" },
      { name: "লংগদু থানা", web: "http://police.langadu.rangamati.gov.bd" },
      { name: "নানিয়ারচর থানা", web: "http://police.naniarchar.rangamati.gov.bd" },
      { name: "বরকল থানা", web: "http://police.barkal.rangamati.gov.bd" },
      { name: "জুরাছড়ি থানা", web: "http://police.jurachhari.rangamati.gov.bd" },
      { name: "বেলাইছড়ি থানা", web: "http://police.belaichhari.rangamati.gov.bd" },
      { name: "রাজস্থলী থানা", web: "http://police.rajasthali.rangamati.gov.bd" },
      // ── বান্দরবান জেলা ──
      { name: "বান্দরবান সদর থানা", web: "http://police.sadar.bandarban.gov.bd" },
      { name: "লামা থানা", web: "http://police.lama.bandarban.gov.bd" },
      { name: "আলীকদম থানা", web: "http://police.alikadam.bandarban.gov.bd" },
      { name: "নাইক্ষ্যংছড়ি থানা", web: "http://police.naikhongchhari.bandarban.gov.bd" },
      { name: "রোয়াংছড়ি থানা", web: "http://police.rowangchhari.bandarban.gov.bd" },
      { name: "রুমা থানা", web: "http://police.ruma.bandarban.gov.bd" },
      { name: "থানচি থানা", web: "http://police.thanchi.bandarban.gov.bd" },
      // ── খাগড়াছড়ি জেলা ──
      { name: "খাগড়াছড়ি সদর থানা", web: "http://police.sadar.khagrachhari.gov.bd" },
      { name: "দীঘিনালা থানা", web: "http://police.dighinala.khagrachhari.gov.bd" },
      { name: "পানছড়ি থানা", web: "http://police.panchhari.khagrachhari.gov.bd" },
      { name: "মাটিরাঙা থানা", web: "http://police.matiranga.khagrachhari.gov.bd" },
      { name: "মানিকছড়ি থানা", web: "http://police.manikchhari.khagrachhari.gov.bd" },
      { name: "রামগড় থানা", web: "http://police.ramgarh.khagrachhari.gov.bd" },
      { name: "লক্ষ্মীছড়ি থানা", web: "http://police.lakshmichhari.khagrachhari.gov.bd" },
      { name: "মহালছড়ি থানা", web: "http://police.mahalchhari.khagrachhari.gov.bd" },
      { name: "গুইমারা থানা", web: "http://police.guimara.khagrachhari.gov.bd" },
      // ── ফেনী জেলা ──
      { name: "ফেনী সদর থানা", web: "http://police.sadar.feni.gov.bd" },
      { name: "ছাগলনাইয়া থানা", web: "http://police.chhagalnaiya.feni.gov.bd" },
      { name: "দাগনভূঞা থানা", web: "http://police.daganbhuiyan.feni.gov.bd" },
      { name: "পরশুরাম থানা", web: "http://police.parshuram.feni.gov.bd" },
      { name: "ফুলগাজী থানা", web: "http://police.phulgazi.feni.gov.bd" },
      { name: "সোনাগাজী থানা", web: "http://police.sonagazi.feni.gov.bd" },
      // ── লক্ষ্মীপুর জেলা ──
      { name: "লক্ষ্মীপুর সদর থানা", web: "http://police.sadar.lakshmipur.gov.bd" },
      { name: "রায়পুর থানা", web: "http://police.raipur.lakshmipur.gov.bd" },
      { name: "রামগঞ্জ থানা", web: "http://police.ramganj.lakshmipur.gov.bd" },
      { name: "রামগতি থানা", web: "http://police.ramgati.lakshmipur.gov.bd" },
      { name: "কমলনগর থানা", web: "http://police.kamalnagar.lakshmipur.gov.bd" },
      // ── নোয়াখালী জেলা ──
      { name: "সুধারাম (নোয়াখালী সদর) থানা", web: "http://police.sudharam.noakhali.gov.bd" },
      { name: "বেগমগঞ্জ থানা", web: "http://police.begumganj.noakhali.gov.bd" },
      { name: "হাতিয়া থানা", web: "http://police.hatiya.noakhali.gov.bd" },
      { name: "সোনাইমুড়ি থানা", web: "http://police.sonaimuri.noakhali.gov.bd" },
      { name: "সেনবাগ থানা", web: "http://police.senbagh.noakhali.gov.bd" },
      { name: "চাটখিল থানা", web: "http://police.chatkhil.noakhali.gov.bd" },
      { name: "কোম্পানীগঞ্জ থানা", web: "http://police.companiganj.noakhali.gov.bd" },
      { name: "কবিরহাট থানা", web: "http://police.kabirhat.noakhali.gov.bd" },
      { name: "সুবর্ণচর থানা", web: "http://police.subarnachar.noakhali.gov.bd" },
      // ── ব্রাহ্মণবাড়িয়া জেলা ──
      { name: "ব্রাহ্মণবাড়িয়া সদর থানা", web: "http://police.sadar.brahmanbaria.gov.bd" },
      { name: "আখাউড়া থানা", web: "http://police.akhaura.brahmanbaria.gov.bd" },
      { name: "আশুগঞ্জ থানা", web: "http://police.ashuganj.brahmanbaria.gov.bd" },
      { name: "নবীনগর থানা", web: "http://police.nabinagar.brahmanbaria.gov.bd" },
      { name: "নাসিরনগর থানা", web: "http://police.nasirnagar.brahmanbaria.gov.bd" },
      { name: "সরাইল থানা", web: "http://police.sarail.brahmanbaria.gov.bd" },
      { name: "কসবা থানা", web: "http://police.kasba.brahmanbaria.gov.bd" },
      { name: "বিজয়নগর থানা", web: "http://police.bijoynagar.brahmanbaria.gov.bd" },
      { name: "বাঞ্ছারামপুর থানা", web: "http://police.bancharampur.brahmanbaria.gov.bd" },
      // ── কুমিল্লা জেলা ──
      { name: "কুমিল্লা কোতোয়ালী থানা", web: "http://police.adarshasadar.comilla.gov.bd" },
      { name: "কুমিল্লা সদর দক্ষিণ থানা", web: "http://police.sadardakshin.comilla.gov.bd" },
      { name: "চৌদ্দগ্রাম থানা", web: "http://police.chauddagram.comilla.gov.bd" },
      { name: "দেবিদ্বার থানা", web: "http://police.debidwar.comilla.gov.bd" },
      { name: "বরুড়া থানা", web: "http://police.barura.comilla.gov.bd" },
      { name: "চান্দিনা থানা", web: "http://police.chandina.comilla.gov.bd" },
      { name: "মুরাদনগর থানা", web: "http://police.muradnagar.comilla.gov.bd" },
      { name: "দাউদকান্দি থানা", web: "http://police.daudkandi.comilla.gov.bd" },
      { name: "হোমনা থানা", web: "http://police.homna.comilla.gov.bd" },
      { name: "মেঘনা থানা", web: "http://police.meghna.comilla.gov.bd" },
      { name: "তিতাস থানা", web: "http://police.titas.comilla.gov.bd" },
      { name: "নাঙ্গলকোট থানা", web: "http://police.nangalkot.comilla.gov.bd" },
      { name: "মনোহরগঞ্জ থানা", web: "http://police.manoharganj.comilla.gov.bd" },
      { name: "লাকসাম থানা", web: "http://police.laksam.comilla.gov.bd" },
      { name: "লালমাই থানা", web: "http://police.lalmai.comilla.gov.bd" },
      { name: "বুড়িচং থানা", web: "http://police.burichang.comilla.gov.bd" },
      { name: "ব্রাহ্মণপাড়া থানা", web: "http://police.brahmanpara.comilla.gov.bd" },
      // ── চাঁদপুর জেলা ──
      { name: "চাঁদপুর সদর থানা", web: "http://police.sadar.chandpur.gov.bd" },
      { name: "হাজীগঞ্জ থানা", web: "http://police.hajiganj.chandpur.gov.bd" },
      { name: "ফরিদগঞ্জ থানা", web: "http://police.faridganj.chandpur.gov.bd" },
      { name: "শাহরাস্তি থানা", web: "http://police.shahrasti.chandpur.gov.bd" },
      { name: "হাইমচর থানা", web: "http://police.haimchar.chandpur.gov.bd" },
      { name: "কচুয়া থানা", web: "http://police.kachua.chandpur.gov.bd" },
      { name: "মতলব উত্তর থানা", web: "http://police.matlabuttara.chandpur.gov.bd" },
      { name: "মতলব দক্ষিণ থানা", web: "http://police.matlabdakshin.chandpur.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      // সরকারি ব্যাংক
      { name: "সোনালী ব্যাংক (চট্টগ্রাম)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (চট্টগ্রাম)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (চট্টগ্রাম)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (চট্টগ্রাম)", web: "https://rupalibank.com.bd/" },
      { name: "বাংলাদেশ ডেভেলপমেন্ট ব্যাংক (চট্টগ্রাম)", web: "https://bdbl.com.bd/" },
      { name: "বেসিক ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.basicbanklimited.com" },
      { name: "বাংলাদেশ কৃষি ব্যাংক (চট্টগ্রাম)", web: "https://krishibank.gov.bd/" },
      { name: "প্রবাসী কল্যাণ ব্যাংক (চট্টগ্রাম)", web: "https://pkb.gov.bd/" },
      { name: "পল্লী সঞ্চয় ব্যাংক (চট্টগ্রাম)", web: "https://pallisanchaybank.gov.bd/" },
      { name: "আনসার-ভিডিপি উন্নয়ন ব্যাংক (চট্টগ্রাম)", web: "https://www.ansarvdpbank.gov.bd" },
      { name: "আইএফআইসি ব্যাংক (চট্টগ্রাম)", web: "https://ificbank.com.bd/" },
      // বেসরকারি ব্যাংক
      { name: "এবি ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.abbank.com.bd" },
      { name: "পূবালী ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.pubalibangla.com.bd" },
      { name: "উত্তরা ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.uttarabank-bd.com" },
      { name: "ডাচ-বাংলা ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.dutchbanglabank.com" },
      { name: "ঢাকা ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.dhakabank.com.bd" },
      { name: "সাউথইস্ট ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.southeastbank.com.bd" },
      { name: "প্রাইম ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.primebank.com.bd" },
      { name: "স্ট্যান্ডার্ড ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.standardbankbd.com/" },
      { name: "ওয়ান ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.onebankbd.com" },
      { name: "ইস্টার্ন ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.ebl.com.bd" },
      { name: "দ্য সিটি ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.thecitybank.com" },
      { name: "ইউনাইটেড কমার্শিয়াল ব্যাংক (চট্টগ্রাম)", web: "https://www.ucb.com.bd" },
      { name: "এনসিসি ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.nccbank.com.bd" },
      { name: "মার্কেন্টাইল ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.mblbd.com" },
      { name: "মিউচুয়াল ট্রাস্ট ব্যাংক (চট্টগ্রাম)", web: "https://www.mutualtrustbank.com" },
      { name: "ট্রাস্ট ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.tblbd.com/" },
      { name: "যমুনা ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.jamunabankbd.com" },
      { name: "ব্র্যাক ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.bracbank.com" },
      { name: "ব্যাংক এশিয়া লিমিটেড (চট্টগ্রাম)", web: "https://www.bankasia-bd.com" },
      { name: "প্রিমিয়ার ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://thepremierbankplc.com/" },
      { name: "মধুমতী ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.modhumotibankplc.com/" },
      { name: "এনআরবি ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.nrbbank.com" },
      { name: "এনআরবি কমার্শিয়াল ব্যাংক (চট্টগ্রাম)", web: "https://www.nrbcommercialbank.com" },
      { name: "মিডল্যান্ড ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.midlandbankbd.com" },
      { name: "মেঘনা ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.meghnabank.com.bd" },
      { name: "সাউথ বাংলা এগ্রিকালচার ব্যাংক (চট্টগ্রাম)", web: "https://www.sbacbank.com" },
      { name: "কমিউনিটি ব্যাংক বাংলাদেশ (চট্টগ্রাম)", web: "https://www.communitybankbd.com/" },
      { name: "পদ্মা ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.padmabankbd.com/" },
      { name: "বাংলাদেশ কমার্স ব্যাংক (চট্টগ্রাম)", web: "https://bcblbd.com/" },
      // ইসলামী ব্যাংক
      { name: "ইসলামী ব্যাংক বাংলাদেশ (চট্টগ্রাম)", web: "https://www.islamibankbd.com" },
      { name: "আল-আরাফাহ ইসলামী ব্যাংক (চট্টগ্রাম)", web: "https://www.aibl.com.bd/" },
      { name: "এক্সিম ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.eximbankbd.com" },
      { name: "সোশ্যাল ইসলামী ব্যাংক (চট্টগ্রাম)", web: "https://www.siblbd.com" },
      { name: "ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক (চট্টগ্রাম)", web: "https://fsibplc.com/" },
      { name: "শাহজালাল ইসলামী ব্যাংক (চট্টগ্রাম)", web: "https://sjiblbd.com/" },
      { name: "ইউনিয়ন ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.unionbank.com.bd" },
      { name: "গ্লোবাল ইসলামী ব্যাংক (চট্টগ্রাম)", web: "https://www.globalislamibankbd.com/" },
      { name: "আইসিবি ইসলামী ব্যাংক (চট্টগ্রাম)", web: "https://www.icbislamic-bd.com" },
      // বিদেশি ব্যাংক
      { name: "স্ট্যান্ডার্ড চার্টার্ড ব্যাংক (চট্টগ্রাম)", web: "https://www.sc.com/bd" },
      { name: "এইচএসবিসি ব্যাংক (চট্টগ্রাম)", web: "https://www.hsbc.com.bd" },
      { name: "সিটিব্যাংক এনএ (চট্টগ্রাম)", web: "https://www.citibank.com/bangladesh" },
      { name: "কমার্শিয়াল ব্যাংক অব সিলন (চট্টগ্রাম)", web: "https://www.combank.lk" },
      { name: "হাবিব ব্যাংক লিমিটেড (চট্টগ্রাম)", web: "https://www.hbl.com" },
      { name: "স্টেট ব্যাংক অব ইন্ডিয়া (চট্টগ্রাম)", web: "https://bd.statebank/" },
      { name: "ব্যাংক আলফালাহ (চট্টগ্রাম)", web: "https://www.bankalfalah.com" },
      { name: "উরি ব্যাংক (চট্টগ্রাম)", web: "https://www.wooribank.com" },
    ]
  },
  // ── ভূমি অফিস (নতুন যোগ করা) ──
  {
    name: "ভূমি অফিস",
    items: [
      { name: "ভূমি তথ্য বাতায়ন (সব জেলা)", web: "https://land.gov.bd" },
      // ── জেলা ভূমি অফিস ──
      { name: "চট্টগ্রাম জেলা ভূমি অফিস", web: "https://chittagong.gov.bd" },
      { name: "কুমিল্লা জেলা ভূমি অফিস", web: "https://comilla.gov.bd" },
      { name: "কক্সবাজার জেলা ভূমি অফিস", web: "https://coxsbazar.gov.bd" },
      { name: "নোয়াখালী জেলা ভূমি অফিস", web: "https://noakhali.gov.bd" },
      { name: "ব্রাহ্মণবাড়িয়া জেলা ভূমি অফিস", web: "https://brahmanbaria.gov.bd" },
      { name: "চাঁদপুর জেলা ভূমি অফিস", web: "https://chandpur.gov.bd" },
      { name: "লক্ষ্মীপুর জেলা ভূমি অফিস", web: "https://lakshmipur.gov.bd" },
      { name: "ফেনী জেলা ভূমি অফিস", web: "https://feni.gov.bd" },
      { name: "খাগড়াছড়ি জেলা ভূমি অফিস", web: "https://khagrachhari.gov.bd" },
      { name: "রাঙ্গামাটি জেলা ভূমি অফিস", web: "https://rangamati.gov.bd" },
      { name: "বান্দরবান জেলা ভূমি অফিস", web: "https://bandarban.gov.bd" },
      // ── চট্টগ্রাম সার্কেল/উপজেলা ──
      { name: "চান্দগাঁও সার্কেল ভূমি অফিস", web: "https://aclchandgaon.chittagong.gov.bd" },
      { name: "পতেঙ্গা সার্কেল ভূমি অফিস", web: "https://aclpatenga.chittagong.gov.bd" },
      { name: "রাঙ্গুনিয়া উপজেলা ভূমি অফিস", web: "http://acl.rangunia.chittagong.gov.bd" },
      { name: "চন্দনাইশ উপজেলা ভূমি অফিস", web: "http://acl.chandanaish.chittagong.gov.bd" },
      { name: "সন্দ্বীপ উপজেলা ভূমি অফিস", web: "http://acl.sandwip.chittagong.gov.bd" },
      { name: "বাঁশখালী উপজেলা ভূমি অফিস", web: "http://acl.banshkhali.chittagong.gov.bd" },
      { name: "হাটহাজারী উপজেলা ভূমি অফিস", web: "http://acl.hathazari.chittagong.gov.bd" },
      { name: "সীতাকুণ্ড উপজেলা ভূমি অফিস", web: "http://acl.sitakunda.chittagong.gov.bd" },
      { name: "পটিয়া উপজেলা ভূমি অফিস", web: "http://acl.patiya.chittagong.gov.bd" },
      { name: "মীরসরাই উপজেলা ভূমি অফিস", web: "http://acl.mirsharai.chittagong.gov.bd" },
      { name: "আনোয়ারা উপজেলা ভূমি অফিস", web: "http://acl.anwara.chittagong.gov.bd" },
      { name: "বোয়ালখালী উপজেলা ভূমি অফিস", web: "http://acl.boalkhali.chittagong.gov.bd" },
      { name: "ফটিকছড়ি উপজেলা ভূমি অফিস", web: "http://acl.fatikchhari.chittagong.gov.bd" },
      { name: "কর্ণফুলী উপজেলা ভূমি অফিস", web: "http://acl.karnafuli.chittagong.gov.bd" },
      { name: "রাউজান উপজেলা ভূমি অফিস", web: "http://acl.raozan.chittagong.gov.bd" },
      { name: "লোহাগাড়া উপজেলা ভূমি অফিস", web: "http://acl.lohagara.chittagong.gov.bd" },
      // ── কুমিল্লা ──
      { name: "কুমিল্লা সদর ভূমি অফিস", web: "http://acl.sadar.comilla.gov.bd" },
      { name: "কুমিল্লা সদর দক্ষিণ ভূমি অফিস", web: "http://acl.sadarsouth.comilla.gov.bd" },
      { name: "চান্দিনা ভূমি অফিস", web: "http://acl.chandina.comilla.gov.bd" },
      { name: "দেবিদ্বার ভূমি অফিস", web: "http://acl.debidwar.comilla.gov.bd" },
      { name: "মুরাদনগর ভূমি অফিস", web: "http://acl.muradnagar.comilla.gov.bd" },
      { name: "তিতাস ভূমি অফিস", web: "http://acl.titas.comilla.gov.bd" },
      { name: "দাউদকান্দি ভূমি অফিস", web: "http://acl.daudkandi.comilla.gov.bd" },
      { name: "হোমনা ভূমি অফিস", web: "http://acl.homna.comilla.gov.bd" },
      { name: "মেঘনা ভূমি অফিস", web: "http://acl.meghna.comilla.gov.bd" },
      { name: "লাকসাম ভূমি অফিস", web: "http://acl.laksam.comilla.gov.bd" },
      { name: "নাঙ্গলকোট ভূমি অফিস", web: "http://acl.nangalkot.comilla.gov.bd" },
      { name: "চৌদ্দগ্রাম ভূমি অফিস", web: "http://acl.chauddagram.comilla.gov.bd" },
      { name: "বরুড়া ভূমি অফিস", web: "http://acl.barura.comilla.gov.bd" },
      { name: "ব্রাহ্মণপাড়া ভূমি অফিস", web: "http://acl.brahmanpara.comilla.gov.bd" },
      { name: "বুড়িচং ভূমি অফিস", web: "http://acl.burichang.comilla.gov.bd" },
      { name: "মনোহরগঞ্জ ভূমি অফিস", web: "http://acl.monohorgonj.comilla.gov.bd" },
      { name: "লালমাই ভূমি অফিস", web: "http://acl.lalmai.comilla.gov.bd" },
      // ── কক্সবাজার ──
      { name: "কক্সবাজার সদর ভূমি অফিস", web: "http://acl.sadar.coxsbazar.gov.bd" },
      { name: "চকরিয়া ভূমি অফিস", web: "http://acl.chakaria.coxsbazar.gov.bd" },
      { name: "কুতুবদিয়া ভূমি অফিস", web: "http://acl.kutubdia.coxsbazar.gov.bd" },
      { name: "মহেশখালী ভূমি অফিস", web: "http://acl.maheshkhali.coxsbazar.gov.bd" },
      { name: "রামু ভূমি অফিস", web: "http://acl.ramu.coxsbazar.gov.bd" },
      { name: "টেকনাফ ভূমি অফিস", web: "http://acl.teknaf.coxsbazar.gov.bd" },
      { name: "উখিয়া ভূমি অফিস", web: "http://acl.ukhia.coxsbazar.gov.bd" },
      { name: "পেকুয়া ভূমি অফিস", web: "http://acl.pekua.coxsbazar.gov.bd" },
      // ── নোয়াখালী ──
      { name: "নোয়াখালী সদর ভূমি অফিস", web: "http://acl.sadar.noakhali.gov.bd" },
      { name: "সেনবাগ ভূমি অফিস", web: "http://acl.senbug.noakhali.gov.bd" },
      { name: "বেগমগঞ্জ ভূমি অফিস", web: "http://acl.begumganj.noakhali.gov.bd" },
      { name: "চাটখিল ভূমি অফিস", web: "http://acl.chatkhil.noakhali.gov.bd" },
      { name: "কোম্পানীগঞ্জ ভূমি অফিস", web: "http://acl.companiganj.noakhali.gov.bd" },
      { name: "সুবর্ণচর ভূমি অফিস", web: "http://acl.subarnachar.noakhali.gov.bd" },
      { name: "হাতিয়া ভূমি অফিস", web: "http://acl.hatia.noakhali.gov.bd" },
      { name: "কবিরহাট ভূমি অফিস", web: "http://acl.kabirhat.noakhali.gov.bd" },
      { name: "সোনাইমুড়ি ভূমি অফিস", web: "http://acl.sonaimuri.noakhali.gov.bd" },
      // ── ব্রাহ্মণবাড়িয়া ──
      { name: "ব্রাহ্মণবাড়িয়া সদর ভূমি অফিস", web: "http://acl.sadar.brahmanbaria.gov.bd" },
      { name: "আশুগঞ্জ ভূমি অফিস", web: "http://acl.ashuganj.brahmanbaria.gov.bd" },
      { name: "বাঞ্ছারামপুর ভূমি অফিস", web: "http://acl.bancharampur.brahmanbaria.gov.bd" },
      { name: "বিজয়নগর ভূমি অফিস", web: "http://acl.bijoynagar.brahmanbaria.gov.bd" },
      { name: "কসবা ভূমি অফিস", web: "http://acl.kasba.brahmanbaria.gov.bd" },
      { name: "নাসিরনগর ভূমি অফিস", web: "http://acl.nasirnagar.brahmanbaria.gov.bd" },
      { name: "নবীনগর ভূমি অফিস", web: "http://acl.nabinagar.brahmanbaria.gov.bd" },
      { name: "সরাইল ভূমি অফিস", web: "http://acl.sarail.brahmanbaria.gov.bd" },
      { name: "আখাউড়া ভূমি অফিস", web: "http://acl.akhaura.brahmanbaria.gov.bd" },
      // ── চাঁদপুর ──
      { name: "চাঁদপুর সদর ভূমি অফিস", web: "http://acl.sadar.chandpur.gov.bd" },
      { name: "ফরিদগঞ্জ ভূমি অফিস", web: "http://acl.faridganj.chandpur.gov.bd" },
      { name: "হাইমচর ভূমি অফিস", web: "http://acl.haimchar.chandpur.gov.bd" },
      { name: "হাজীগঞ্জ ভূমি অফিস", web: "http://acl.haziganj.chandpur.gov.bd" },
      { name: "কচুয়া ভূমি অফিস", web: "http://acl.kachua.chandpur.gov.bd" },
      { name: "মতলব উত্তর ভূমি অফিস", web: "http://acl.matlabnorth.chandpur.gov.bd" },
      { name: "মতলব দক্ষিণ ভূমি অফিস", web: "http://acl.matlabsouth.chandpur.gov.bd" },
      { name: "শাহরাস্তি ভূমি অফিস", web: "http://acl.shahrasti.chandpur.gov.bd" },
      // ── লক্ষ্মীপুর ──
      { name: "লক্ষ্মীপুর সদর ভূমি অফিস", web: "http://acl.sadar.lakshmipur.gov.bd" },
      { name: "রামগঞ্জ ভূমি অফিস", web: "http://acl.ramganj.lakshmipur.gov.bd" },
      { name: "রাইপুর ভূমি অফিস", web: "http://acl.raipur.lakshmipur.gov.bd" },
      { name: "রামগতি ভূমি অফিস", web: "http://acl.ramgati.lakshmipur.gov.bd" },
      { name: "কমলনগর ভূমি অফিস", web: "http://acl.kamalnagor.lakshmipur.gov.bd" },
      // ── ফেনী ──
      { name: "ফেনী সদর ভূমি অফিস", web: "http://acl.sadar.feni.gov.bd" },
      { name: "ছাগলনাইয়া ভূমি অফিস", web: "http://acl.chhagalnaiya.feni.gov.bd" },
      { name: "দাগনভূঁইয়া ভূমি অফিস", web: "http://acl.daganbhuiyan.feni.gov.bd" },
      { name: "ফুলগাজী ভূমি অফিস", web: "http://acl.fulgazi.feni.gov.bd" },
      { name: "পরশুরাম ভূমি অফিস", web: "http://acl.parshuram.feni.gov.bd" },
      { name: "সোনাগাজী ভূমি অফিস", web: "http://acl.sonagazi.feni.gov.bd" },
      // ── খাগড়াছড়ি ──
      { name: "খাগড়াছড়ি সদর ভূমি অফিস", web: "http://acl.sadar.khagrachhari.gov.bd" },
      { name: "দীঘিনালা ভূমি অফিস", web: "http://acl.dighinala.khagrachhari.gov.bd" },
      { name: "গুইমারা ভূমি অফিস", web: "http://acl.guimara.khagrachhari.gov.bd" },
      { name: "লক্ষ্মীছড়ি ভূমি অফিস", web: "http://acl.laxmichhari.khagrachhari.gov.bd" },
      { name: "মহালছড়ি ভূমি অফিস", web: "http://acl.mahalchhari.khagrachhari.gov.bd" },
      { name: "মানিকছড়ি ভূমি অফিস", web: "http://acl.manikchhari.khagrachhari.gov.bd" },
      { name: "মাটিরাঙ্গা ভূমি অফিস", web: "http://acl.matirange.khagrachhari.gov.bd" },
      { name: "পানছড়ি ভূমি অফিস", web: "http://acl.panchhari.khagrachhari.gov.bd" },
      { name: "রামগড় ভূমি অফিস", web: "http://acl.ramgarh.khagrachhari.gov.bd" },
      // ── রাঙ্গামাটি ──
      { name: "রাঙ্গামাটি সদর ভূমি অফিস", web: "http://acl.sadar.rangamati.gov.bd" },
      { name: "বাঘাইছড়ি ভূমি অফিস", web: "http://acl.baghaichhari.rangamati.gov.bd" },
      { name: "বরকল ভূমি অফিস", web: "http://acl.barkal.rangamati.gov.bd" },
      { name: "বিলাইছড়ি ভূমি অফিস", web: "http://acl.bilaichhari.rangamati.gov.bd" },
      { name: "জুরাছড়ি ভূমি অফিস", web: "http://acl.jurachhari.rangamati.gov.bd" },
      { name: "কাউখালী ভূমি অফিস", web: "http://acl.kaukhali.rangamati.gov.bd" },
      { name: "কাপ্তাই ভূমি অফিস", web: "http://acl.kaptai.rangamati.gov.bd" },
      { name: "লংগদু ভূমি অফিস", web: "http://acl.langadu.rangamati.gov.bd" },
      { name: "নানিয়ারচর ভূমি অফিস", web: "http://acl.naniarchar.rangamati.gov.bd" },
      { name: "রাজস্থলী ভূমি অফিস", web: "http://acl.rajasthali.rangamati.gov.bd" },
      // ── বান্দরবান ──
      { name: "বান্দরবান সদর ভূমি অফিস", web: "http://acl.sadar.bandarban.gov.bd" },
      { name: "আলীকদম ভূমি অফিস", web: "http://acl.alikadam.bandarban.gov.bd" },
      { name: "লামা ভূমি অফিস", web: "http://acl.lama.bandarban.gov.bd" },
      { name: "নাইক্ষ্যংছড়ি ভূমি অফিস", web: "http://acl.naikhongchhari.bandarban.gov.bd" },
      { name: "রুমা ভূমি অফিস", web: "http://acl.ruma.bandarban.gov.bd" },
      { name: "রোয়াংছড়ি ভূমি অফিস", web: "http://acl.rowangchhari.bandarban.gov.bd" },
      { name: "থানচি ভূমি অফিস", web: "http://acl.thanchi.bandarban.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (চট্টগ্রাম)", web: "https://www.hanifenterprisebd.com" },
      { name: "এস. আলম পরিবহন (চট্টগ্রাম)", web: "https://www.salamtransports.com/" },
      { name: "শ্যামলী পরিবহন (চট্টগ্রাম)", web: "https://www.shyamoliparibahan-bd.com/" },
      { name: "গ্রিন লাইন (চট্টগ্রাম)", web: "https://www.greenlinebd.com" },
      { name: "এসআর ট্রাভেলস (চট্টগ্রাম)", web: "https://www.facebook.com/p/SR-Travels-International-100063715615585/" },
      { name: "আকাশ পরিবহন (চট্টগ্রাম)", web: "https://www.facebook.com/akashparibahan" },
      { name: "বিআরটিসি (চট্টগ্রাম)", web: "https://brtc.gov.bd/" },
      { name: "সৌদিয়া পরিবহন (চট্টগ্রাম)", web: "https://vromontrips.com/saudia-bus-contact-number-chittagong/" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "Bangladesh Railway Official Website", web: "https://railway.gov.bd/" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক আজাদী", web: "https://www.dainikazadi.net" },
      { name: "পূর্বকোণ", web: "https://dainikpurbokone.net/" },
      { name: "চট্টগ্রাম প্রতিদিন", web: "https://www.ctgpratidin.com" },
      { name: 'সুপ্রভাত বাংলাদেশ', web: 'https://www.suprobhat.com' },
      { name: 'দৈনিক পত্রিকা চট্টগ্রাম', web: 'https://www.dainikpatrika.com' },
      { name: 'চট্টগ্রাম প্রতিদিন', web: 'https://ctgpratidin.com' },
      { name: 'কক্সবাজার নিউজ', web: 'https://www.facebook.com/coxsbazarnewscbn/?locale=bn_IN' },
      { name: "দৈনিক স্টার", web: "https://www.thedailystar.net" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
      { name: "কালের কণ্ঠ", web: "https://www.kalerkantho.com" },
      { name: "যুগান্তর", web: "https://www.jugantor.com" },
      { name: "সমকাল", web: "https://www.samakal.com" },
      { name: "বাংলাদেশ প্রতিদিন", web: "https://www.bd-pratidin.com" },
      { name: "আমার দেশ", web: "https://www.amardesh24.com" },
      { name: "নয়া দিগন্ত", web: "https://www.dailynayadiganta.com" },
      { name: "ভোরের কাগজ", web: "https://www.bhorerkagoj.com" },
      { name: "মানবজমিন", web: "https://www.mzamin.com" },
      { name: "ইত্তেফাক", web: "https://www.ittefaq.com.bd" },
    ]
  },
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      // ── র‌্যাব-৭ (চট্টগ্রাম বিভাগের প্রধান ব্যাটালিয়ন) ──
  // দায়িত্বপূর্ণ এলাকা: চট্টগ্রাম, ফেনী, খাগড়াছড়ি,
  // রাঙ্গামাটি, বান্দরবান ও কক্সবাজার (৬ জেলা)
  { name: "র‌্যাব-৭ (চট্টগ্রাম)", web: "https://rab7media.com/" },   // ✅

  // ── র‌্যাব-১১ (কুমিল্লা অঞ্চল) ──
  // দায়িত্বপূর্ণ এলাকা: কুমিল্লা, লক্ষ্মীপুর, নোয়াখালী,
  // চাঁদপুর, ব্রাহ্মণবাড়িয়া (৫ জেলা)
  { name: "র‌্যাব-১১ (কুমিল্লা/নোয়াখালী অঞ্চল)", web: "https://www.rab.gov.bd/pages/home" }, // ✅

  // ── জাতীয় সদর দপ্তর ──
  { name: "র‌্যাব সদর দপ্তর (ঢাকা)", web: "https://www.rab.gov.bd" },  
    ]
  },
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি চট্টগ্রাম সেক্টর", web: "https://bgb.gov.bd" },
       { name: "বিজিবি চট্টগ্রাম বিভাগ সদর দপ্তর", web: "https://bgb.chittagongdiv.gov.bd" },   // ✅

  // ── সেক্টর সদর দপ্তর ──
  { name: "বিজিবি সেক্টর সদর, চট্টগ্রাম", web: "https://bgb.chittagong.gov.bd" },          // ✅
  { name: "বিজিবি সেক্টর সদর, কুমিল্লা", web: "https://bgb.comilla.gov.bd" },
  { name: "বিজিবি সেক্টর সদর, কক্সবাজার", web: "https://bgb.coxsbazar.gov.bd" },
  { name: "বিজিবি সেক্টর সদর, রাঙ্গামাটি", web: "https://bgb.rangamati.gov.bd" },
  { name: "বিজিবি সেক্টর সদর, খাগড়াছড়ি", web: "https://bgb.khagrachhari.gov.bd" },       // ✅
  { name: "বিজিবি সেক্টর সদর, বান্দরবান", web: "https://bgb.bandarban.gov.bd" },
  { name: "বিজিবি সেক্টর সদর, ব্রাহ্মণবাড়িয়া", web: "https://bgb.brahmanbaria.gov.bd" }, // ✅
  { name: "বিজিবি সেক্টর সদর, ফেনী", web: "https://bgb.feni.gov.bd" },

  // ── জাতীয় সদর দপ্তর ──
  { name: "বিজিবি জাতীয় সদর দপ্তর (পিলখানা)", web: "https://bgb.gov.bd" },
    ]
  },
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (চট্টগ্রাম)", web: "https://www.brac.net" },
      { name: "কোডেক (চট্টগ্রাম)", web: "https://codec.org.bd/" },
      { name: "আশা (চট্টগ্রাম)", web: "https://www.asa.org.bd" },
      { name: "প্রশিকা (চট্টগ্রাম)", web: "https://www.proshika.org" },
      { name: "গ্রামীণ ব্যাংক (চট্টগ্রাম)", web: "https://grameenbank.org.bd/" },
      { name: "কারিতাস (চট্টগ্রাম)", web: "https://caritasbd.org/" },
      { name: "সেভ দ্য চিলড্রেন (চট্টগ্রাম)", web: "https://www.savethechildren.net" },
      { name: "ওয়ার্ল্ড ভিশন (চট্টগ্রাম)", web: "https://www.wvi.org/bangladesh" },
      { name: "অক্সফাম (চট্টগ্রাম)", web: "https://www.oxfam.org/en/countries/bangladesh" },
      { name: "প্ল্যান ইন্টারন্যাশনাল (চট্টগ্রাম)", web: "https://plan-international.org/bangladesh" },
      { name: "ইপসা - YPSA (সীতাকুণ্ড, চট্টগ্রাম)", web: "https://ypsa.org" },
      { name: "ঘাসফুল (চট্টগ্রাম)", web: "https://www.ghashful-bd.org" },
      { name: "কোস্ট ফাউন্ডেশন (চট্টগ্রাম)", web: "https://coastbd.net" },
      { name: "সিসিডিবি - CCDB (চট্টগ্রাম)", web: "https://ccdbbd.org" },
      { name: "মানুষের জন্য ফাউন্ডেশন - MJF", web: "https://www.manusherjonno.org" },
      { name: "দ্য হাঙ্গার প্রজেক্ট বাংলাদেশ", web: "https://thpbd.org" },

// ===== আন্তর্জাতিক NGO (চট্টগ্রাম/কক্সবাজার কার্যক্রম) =====
      { name: "CARE বাংলাদেশ (চট্টগ্রাম)", web: "https://www.carebangladesh.org" },
      { name: "ACF - অ্যাকশন এগেইনস্ট হাঙ্গার (চট্টগ্রাম)", web: "https://www.actionagainsthunger.org/where-we-work/asia/bangladesh/" },
      { name: "IRC - ইন্টারন্যাশনাল রেসকিউ কমিটি (কক্সবাজার)", web: "https://www.rescue.org/country/bangladesh" },
      { name: "MSF - ডাক্তার ছাড়া সীমানা (কক্সবাজার)", web: "https://www.msf.org/bangladesh" },
      { name: "IRC - উদ্বাস্তু কমিটি (কক্সবাজার)", web: "https://www.unhcr.org/countries/bangladesh" },
      { name: "IOM - আন্তর্জাতিক অভিবাসন সংস্থা (কক্সবাজার)", web: "https://bangladesh.iom.int" },
      { name: "WFP - বিশ্ব খাদ্য কর্মসূচি (চট্টগ্রাম)", web: "https://www.wfp.org/countries/bangladesh" },
      { name: "WHO বাংলাদেশ (চট্টগ্রাম)", web: "https://www.who.int/bangladesh" },
      { name: "UNICEF বাংলাদেশ (চট্টগ্রাম)", web: "https://www.unicef.org/bangladesh" },
      { name: "UNDP বাংলাদেশ (চট্টগ্রাম)", web: "https://www.undp.org/bangladesh" },
      { name: "হেলেন কেলার ইন্টারন্যাশনাল (চট্টগ্রাম)", web: "https://hki.org/where-we-work/asia/bangladesh/" },
      { name: "ইন্টারন্যাশনাল ফেডারেশন রেড ক্রস (চট্টগ্রাম)", web: "https://www.ifrc.org/our-work/where-we-work/asia-pacific/bangladesh" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল", web: "https://cmch.gov.bd" },
      { name: "কক্সবাজার সদর হাসপাতাল", web: "https://hospital.coxsbazar.gov.bd/" },
      { name: "কুমিল্লা মেডিকেল কলেজ হাসপাতাল", web: "https://comc.college.gov.bd/" },
      { name: "নোয়াখালী সদর হাসপাতাল", web: "https://hospital.noakhali.gov.bd/" },
      { name: "ফেনী সদর হাসপাতাল", web: "https://hospital.feni.gov.bd/" },
      { name: "ব্রাহ্মণবাড়িয়া সদর হাসপাতাল", web: "https://hospital.brahmanbaria.gov.bd/" },
      { name: "চাঁদপুর সদর হাসপাতাল", web: "https://hospital.chandpur.gov.bd/" },
      { name: "লক্ষ্মীপুর সদর হাসপাতাল", web: "https://hospital.lakshmipur.gov.bd/" },
      { name: "রাঙ্গামাটি সদর হাসপাতাল", web: "https://doctoraidbd.com/bn/hospital/rangamati-general-hospital/" },
      { name: "খাগড়াছড়ি সদর হাসপাতাল", web: "https://hospital.khagrachhari.gov.bd/" },
      { name: "বান্দরবান সদর হাসপাতাল", web: "https://hospital.bandarban.gov.bd/" },
    ]
  },
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
{ name: "এভারকেয়ার হাসপাতাল চট্টগ্রাম", web: "https://www.evercarebd.com/en/chattogram" },       // ✅
{ name: "অ্যাপোলো ইম্পেরিয়াল হাসপাতাল চট্টগ্রাম", web: "https://aihlbd.org" },                  // ✅
{ name: "পার্কভিউ হাসপাতাল চট্টগ্রাম", web: "https://parkview.com.bd" },                         // ✅
{ name: "ল্যাবএইড স্পেশালাইজড হাসপাতাল চট্টগ্রাম", web: "https://labaid.com.bd/en/hospital/labaid-specialized-hospital-chattogram" }, // ✅
{ name: "ম্যাক্স হাসপাতাল চট্টগ্রাম", web: "https://maxhospital-bd.com" },                        // ✅
{ name: "ইউনাইটেড হাসপাতাল চট্টগ্রাম", web: "https://uhlbd.com" },                               // ✅
{ name: "ন্যাশনাল হাসপাতাল চট্টগ্রাম", web: "https://nationalhospital.com.bd" },                 // ✅
{ name: "চট্টগ্রাম মেট্রোপলিটন হাসপাতাল", web: "https://www.chittagongmetropolitanhospital.com" },
{ name: "সিএসসিআর হাসপাতাল চট্টগ্রাম", web: "https://cscrhospital.com" },                        // ✅
{ name: "ইসলামী ব্যাংক হাসপাতাল চট্টগ্রাম", web: "https://islamibankbd.com/hospital" },
{ name: "হলি ক্রেসেন্ট হাসপাতাল চট্টগ্রাম", web: "https://holycrescenthospital.com" },
{ name: "মা ও শিশু হাসপাতাল মেডিকেল কলেজ চট্টগ্রাম", web: "https://maa-shishu-ctg.org" },

// ── ডায়াগনস্টিক / ক্লিনিকাল ল্যাবরেটরি ──
{ name: "শেভরন ক্লিনিকাল ল্যাবরেটরি চট্টগ্রাম", web: "https://chevronlab.com" },                // ✅
{ name: "ইবনে সিনা ডায়াগনস্টিক চট্টগ্রাম", web: "https://ibnsina.com.bd" },
{ name: "পপুলার ডায়াগনস্টিক চট্টগ্রাম", web: "https://populardiagnostic.com" },
{ name: "ল্যাবএইড ডায়াগনস্টিক চট্টগ্রাম", web: "https://labaid.com.bd" },                       // ✅
{ name: "এপিক হেলথ কেয়ার চট্টগ্রাম", web: "https://epichealthcare.com.bd" },
{ name: "ডেল্টা হেলথ কেয়ার চট্টগ্রাম", web: "https://deltahealthcare.com.bd" },
{ name: "মেট্রো ডায়াগনস্টিক চট্টগ্রাম", web: "https://metrodiagnosticbd.com" },
{ name: "Qrex ডায়াগনস্টিক চট্টগ্রাম", web: "https://qrex.com.bd" },                            // ✅
{ name: "লেনসেট ডায়াগনস্টিক চট্টগ্রাম", web: "https://lancetbd.com" },

// ── বিশেষায়িত হাসপাতাল ──
// চোখ
{ name: "বাংলাদেশ আই হাসপাতাল চট্টগ্রাম", web: "https://chittagong.bdeyehospital.com" },        // ✅
{ name: "চট্টগ্রাম আই ইনফার্মারি ও ট্রেনিং কমপ্লেক্স", web: "https://ctgeyeinfirmary.info" },  // ✅
{ name: "শেভরন আই হাসপাতাল চট্টগ্রাম", web: "https://chevronlab.com" },
{ name: "লায়ন্স চ্যারিটেবল আই হাসপাতাল চট্টগ্রাম", web: "https://lcehctg-bd.org" },           // ✅

// মা ও শিশু / মাতৃসদন
{ name: "মেমন ম্যাটার্নিটি হাসপাতাল চট্টগ্রাম", web: "https://www.ccc.org.bd/maternity_hospitals" },
{ name: "পাঁচলাইশ মা ও শিশু হাসপাতাল চট্টগ্রাম", web: "https://panchlaishmaoshishu.com" },

// ডায়াবেটিক
{ name: "চট্টগ্রাম ডায়াবেটিক জেনারেল হাসপাতাল", web: "https://www.badas.org" },

// ক্যান্সার
{ name: "জেনুইন ক্যান্সার হাসপাতাল চট্টগ্রাম", web: "https://genuinecancerhospital.com" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "চট্টগ্রাম জিপিও", web: "https://gpo.chittagong.gov.bd" },
      { name: "আনোয়ারা উপজেলা পোস্ট অফিস", web: "https://post.anowara.chittagong.gov.bd" },
      { name: "বাঁশখালী উপজেলা পোস্ট অফিস", web: "https://post.banshkhali.chittagong.gov.bd" },
      { name: "বোয়ালখালী উপজেলা পোস্ট অফিস", web: "https://post.boalkhali.chittagong.gov.bd" },
      { name: "চন্দনাইশ উপজেলা পোস্ট অফিস", web: "https://post.chandanaish.chittagong.gov.bd" },
      { name: "ফটিকছড়ি উপজেলা পোস্ট অফিস", web: "https://post.fatikchhari.chittagong.gov.bd" },
      { name: "হাটহাজারী উপজেলা পোস্ট অফিস", web: "https://post.hathazari.chittagong.gov.bd" },
      { name: "কর্ণফুলী উপজেলা পোস্ট অফিস", web: "https://post.karnaphuli.chittagong.gov.bd" },
      { name: "লোহাগাড়া উপজেলা পোস্ট অফিস", web: "https://post.lohagara.chittagong.gov.bd" },
      { name: "মিরসরাই উপজেলা পোস্ট অফিস", web: "https://post.mirsharai.chittagong.gov.bd" },
      { name: "পটিয়া উপজেলা পোস্ট অফিস", web: "https://post.patiya.chittagong.gov.bd" },
      { name: "রাঙ্গুনিয়া উপজেলা পোস্ট অফিস", web: "https://post.rangunia.chittagong.gov.bd" },
      { name: "রাউজান উপজেলা পোস্ট অফিস", web: "https://post.raozan.chittagong.gov.bd" },
      { name: "সন্দ্বীপ উপজেলা পোস্ট অফিস", web: "https://post.sandwip.chittagong.gov.bd" },
      { name: "সাতকানিয়া উপজেলা পোস্ট অফিস", web: "https://post.satkania.chittagong.gov.bd" },
      { name: "সীতাকুণ্ড উপজেলা পোস্ট অফিস", web: "https://post.sitakunda.chittagong.gov.bd" },

      // কক্সবাজার জেলা
      { name: "কক্সবাজার জিপিও", web: "https://post.coxsbazar.gov.bd" },
      { name: "চকরিয়া উপজেলা পোস্ট অফিস", web: "https://post.chakaria.coxsbazar.gov.bd" },
      { name: "কুতুবদিয়া উপজেলা পোস্ট অফিস", web: "https://post.kutubdia.coxsbazar.gov.bd" },
      { name: "মহেশখালী উপজেলা পোস্ট অফিস", web: "https://post.moheshkhali.coxsbazar.gov.bd" },
      { name: "পেকুয়া উপজেলা পোস্ট অফিস", web: "https://post.pekua.coxsbazar.gov.bd" },
      { name: "রামু উপজেলা পোস্ট অফিস", web: "https://post.ramu.coxsbazar.gov.bd" },
      { name: "কক্সবাজার সদর উপজেলা পোস্ট অফিস", web: "https://post.sadar.coxsbazar.gov.bd" },
      { name: "টেকনাফ উপজেলা পোস্ট অফিস", web: "https://post.teknaf.coxsbazar.gov.bd" },
      { name: "উখিয়া উপজেলা পোস্ট অফিস", web: "https://post.ukhia.coxsbazar.gov.bd" },

// কুমিল্লা জেলা
      { name: "কুমিল্লা জিপিও", web: "https://post.comilla.gov.bd" },
      { name: "বরুড়া উপজেলা পোস্ট অফিস", web: "https://post.barura.comilla.gov.bd" },
      { name: "ব্রাহ্মণপাড়া উপজেলা পোস্ট অফিস", web: "https://post.brahmanpara.comilla.gov.bd" },
      { name: "বুড়িচং উপজেলা পোস্ট অফিস", web: "https://post.burichang.comilla.gov.bd" },
      { name: "চান্দিনা উপজেলা পোস্ট অফিস", web: "https://post.chandina.comilla.gov.bd" },
      { name: "চৌদ্দগ্রাম উপজেলা পোস্ট অফিস", web: "https://post.chauddagram.comilla.gov.bd" },
      { name: "দাউদকান্দি উপজেলা পোস্ট অফিস", web: "https://post.daudkandi.comilla.gov.bd" },
      { name: "দেবিদ্বার উপজেলা পোস্ট অফিস", web: "https://post.debidwar.comilla.gov.bd" },
      { name: "হোমনা উপজেলা পোস্ট অফিস", web: "https://post.homna.comilla.gov.bd" },
      { name: "লাকসাম উপজেলা পোস্ট অফিস", web: "https://post.laksam.comilla.gov.bd" },
      { name: "লালমাই উপজেলা পোস্ট অফিস", web: "https://post.lalmai.comilla.gov.bd" },
      { name: "মনোহরগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.monohorganj.comilla.gov.bd" },
      { name: "মেঘনা উপজেলা পোস্ট অফিস", web: "https://post.meghna.comilla.gov.bd" },
      { name: "মুরাদনগর উপজেলা পোস্ট অফিস", web: "https://post.muradnagar.comilla.gov.bd" },
      { name: "নাঙ্গলকোট উপজেলা পোস্ট অফিস", web: "https://post.nangalkot.comilla.gov.bd" },
      { name: "কুমিল্লা সদর উপজেলা পোস্ট অফিস", web: "https://post.sadar.comilla.gov.bd" },
      { name: "কুমিল্লা সদর দক্ষিণ পোস্ট অফিস", web: "https://post.sadarsouth.comilla.gov.bd" },
      { name: "তিতাস উপজেলা পোস্ট অফিস", web: "https://post.titas.comilla.gov.bd" },

       // নোয়াখালী জেলা
      { name: "নোয়াখালী জিপিও", web: "https://post.noakhali.gov.bd" },
      { name: "বেগমগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.begumganj.noakhali.gov.bd" },
      { name: "চাটখিল উপজেলা পোস্ট অফিস", web: "https://post.chatkhil.noakhali.gov.bd" },
      { name: "কোম্পানীগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.companyganj.noakhali.gov.bd" },
      { name: "হাতিয়া উপজেলা পোস্ট অফিস", web: "https://post.hatia.noakhali.gov.bd" },
      { name: "কবিরহাট উপজেলা পোস্ট অফিস", web: "https://post.kabirhat.noakhali.gov.bd" },
      { name: "সেনবাগ উপজেলা পোস্ট অফিস", web: "https://post.senbag.noakhali.gov.bd" },
      { name: "সোনাইমুড়ি উপজেলা পোস্ট অফিস", web: "https://post.sonaimuri.noakhali.gov.bd" },
      { name: "সুবর্ণচর উপজেলা পোস্ট অফিস", web: "https://post.subarnachar.noakhali.gov.bd" },
      { name: "নোয়াখালী সদর উপজেলা পোস্ট অফিস", web: "https://post.sadar.noakhali.gov.bd" },

// ফেনী জেলা
      { name: "ফেনী জিপিও", web: "https://post.feni.gov.bd" },
      { name: "ছাগলনাইয়া উপজেলা পোস্ট অফিস", web: "https://post.chhagalnaiya.feni.gov.bd" },
      { name: "দাগনভূঞা উপজেলা পোস্ট অফিস", web: "https://post.daganbhuiyan.feni.gov.bd" },
      { name: "ফেনী সদর উপজেলা পোস্ট অফিস", web: "https://post.fenisadar.feni.gov.bd" },
      { name: "ফুলগাজী উপজেলা পোস্ট অফিস", web: "https://post.fulgazi.feni.gov.bd" },
      { name: "পরশুরাম উপজেলা পোস্ট অফিস", web: "https://post.parshuram.feni.gov.bd" },
      { name: "সোনাগাজী উপজেলা পোস্ট অফিস", web: "https://post.sonagazi.feni.gov.bd" },

       // ব্রাহ্মণবাড়িয়া জেলা
      { name: "ব্রাহ্মণবাড়িয়া জিপিও", web: "https://post.brahmanbaria.gov.bd" },
      { name: "আখাউড়া উপজেলা পোস্ট অফিস", web: "https://post.akhaura.brahmanbaria.gov.bd" },
      { name: "আশুগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.ashuganj.brahmanbaria.gov.bd" },
      { name: "বাঞ্ছারামপুর উপজেলা পোস্ট অফিস", web: "https://post.bancharampur.brahmanbaria.gov.bd" },
      { name: "ব্রাহ্মণবাড়িয়া সদর উপজেলা পোস্ট অফিস", web: "https://post.brahmanbariasadar.brahmanbaria.gov.bd" },
      { name: "কসবা উপজেলা পোস্ট অফিস", web: "https://post.kasba.brahmanbaria.gov.bd" },
      { name: "নবীনগর উপজেলা পোস্ট অফিস", web: "https://post.nabinagar.brahmanbaria.gov.bd" },
      { name: "নাসিরনগর উপজেলা পোস্ট অফিস", web: "https://post.nasirnagar.brahmanbaria.gov.bd" },
      { name: "সরাইল উপজেলা পোস্ট অফিস", web: "https://post.sarail.brahmanbaria.gov.bd" },

       // চাঁদপুর জেলা
      { name: "চাঁদপুর জিপিও", web: "https://post.chandpur.gov.bd" },
      { name: "চাঁদপুর সদর উপজেলা পোস্ট অফিস", web: "https://post.chandpursadar.chandpur.gov.bd" },
      { name: "ফরিদগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.faridganj.chandpur.gov.bd" },
      { name: "হাইমচর উপজেলা পোস্ট অফিস", web: "https://post.haimchar.chandpur.gov.bd" },
      { name: "হাজীগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.hajiganj.chandpur.gov.bd" },
      { name: "কচুয়া উপজেলা পোস্ট অফিস", web: "https://post.kachua.chandpur.gov.bd" },
      { name: "মতলব উত্তর উপজেলা পোস্ট অফিস", web: "https://post.matlabuttara.chandpur.gov.bd" },
      { name: "মতলব দক্ষিণ উপজেলা পোস্ট অফিস", web: "https://post.matlabdakkhin.chandpur.gov.bd" },
      { name: "শাহরাস্তি উপজেলা পোস্ট অফিস", web: "https://post.shahrasti.chandpur.gov.bd" },

       // লক্ষ্মীপুর জেলা
      { name: "লক্ষ্মীপুর জিপিও", web: "https://post.lakshmipur.gov.bd" },
      { name: "কমলনগর উপজেলা পোস্ট অফিস", web: "https://post.kamalnagar.lakshmipur.gov.bd" },
      { name: "লক্ষ্মীপুর সদর উপজেলা পোস্ট অফিস", web: "https://post.lakshmipursadar.lakshmipur.gov.bd" },
      { name: "রায়পুর উপজেলা পোস্ট অফিস", web: "https://post.raipur.lakshmipur.gov.bd" },
      { name: "রামগঞ্জ উপজেলা পোস্ট অফিস", web: "https://post.ramganj.lakshmipur.gov.bd" },
      { name: "রামগতি উপজেলা পোস্ট অফিস", web: "https://post.ramgati.lakshmipur.gov.bd" },

      // রাঙ্গামাটি জেলা
      { name: "রাঙ্গামাটি জিপিও", web: "https://post.rangamati.gov.bd" },
      { name: "বাঘাইছড়ি উপজেলা পোস্ট অফিস", web: "https://post.baghaichhari.rangamati.gov.bd" },
      { name: "বরকল উপজেলা পোস্ট অফিস", web: "https://post.barkol.rangamati.gov.bd" },
      { name: "বিলাইছড়ি উপজেলা পোস্ট অফিস", web: "https://post.bilaichhari.rangamati.gov.bd" },
      { name: "জুরাছড়ি উপজেলা পোস্ট অফিস", web: "https://post.jurachhari.rangamati.gov.bd" },
      { name: "কাউখালী উপজেলা পোস্ট অফিস", web: "https://post.kaukhali.rangamati.gov.bd" },
      { name: "কাপ্তাই উপজেলা পোস্ট অফিস", web: "https://post.kaptai.rangamati.gov.bd" },
      { name: "লংগদু উপজেলা পোস্ট অফিস", web: "https://post.langadu.rangamati.gov.bd" },
      { name: "নানিয়ারচর উপজেলা পোস্ট অফিস", web: "https://post.naniarchar.rangamati.gov.bd" },
      { name: "রাজস্থলী উপজেলা পোস্ট অফিস", web: "https://post.rajasthali.rangamati.gov.bd" },
      { name: "রাঙ্গামাটি সদর উপজেলা পোস্ট অফিস", web: "https://post.sadar.rangamati.gov.bd" },

     // খাগড়াছড়ি জেলা
      { name: "খাগড়াছড়ি জিপিও", web: "https://post.khagrachhari.gov.bd" },
      { name: "দীঘিনালা উপজেলা পোস্ট অফিস", web: "https://post.dighinala.khagrachhari.gov.bd" },
      { name: "গুইমারা উপজেলা পোস্ট অফিস", web: "https://post.guimara.khagrachhari.gov.bd" },
      { name: "খাগড়াছড়ি সদর উপজেলা পোস্ট অফিস", web: "https://post.khagrachharisadar.khagrachhari.gov.bd" },
      { name: "লক্ষ্মীছড়ি উপজেলা পোস্ট অফিস", web: "https://post.lakshmichhari.khagrachhari.gov.bd" },
      { name: "মাটিরাঙ্গা উপজেলা পোস্ট অফিস", web: "https://post.matiranga.khagrachhari.gov.bd" },
      { name: "মানিকছড়ি উপজেলা পোস্ট অফিস", web: "https://post.manikchari.khagrachhari.gov.bd" },
      { name: "মহালছড়ি উপজেলা পোস্ট অফিস", web: "https://post.mahalchhari.khagrachhari.gov.bd" },
      { name: "পানছড়ি উপজেলা পোস্ট অফিস", web: "https://post.panchhari.khagrachhari.gov.bd" },
      { name: "রামগড় উপজেলা পোস্ট অফিস", web: "https://post.ramghar.khagrachhari.gov.bd" },

      // বান্দরবান জেলা
     { name: "বান্দরবান জিপিও", web: "https://post.bandarban.gov.bd" },
     { name: "আলীকদম উপজেলা পোস্ট অফিস", web: "https://post.alikadam.bandarban.gov.bd" },
     { name: "বান্দরবান সদর উপজেলা পোস্ট অফিস", web: "https://post.bandarbansadar.bandarban.gov.bd" },
     { name: "লামা উপজেলা পোস্ট অফিস", web: "https://post.lama.bandarban.gov.bd" },
     { name: "নাইক্ষ্যংছড়ি উপজেলা পোস্ট অফিস", web: "https://post.naikhongchhari.bandarban.gov.bd" },
     { name: "রোয়াংছড়ি উপজেলা পোস্ট অফিস", web: "https://post.rowangchhari.bandarban.gov.bd" },
     { name: "রুমা উপজেলা পোস্ট অফিস", web: "https://post.ruma.bandarban.gov.bd" },
     { name: "থানচি উপজেলা পোস্ট অফিস", web: "https://post.thanchi.bandarban.gov.bd" },
       
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
{ name: "চট্টগ্রাম বিদ্যুৎ বিতরণ কোম্পানি (CDCL)", web: "https://pdb.chittagong.gov.bd/" },       // ✅ confirmed
{ name: "চট্টগ্রাম পল্লী বিদ্যুৎ সমিতি-১", web: "https://pbs1.chittagong.gov.bd/" }, // ✅ confirmed
{ name: "চট্টগ্রাম পল্লী বিদ্যুৎ সমিতি-২", web: "https://pbs2.chittagong.gov.bd/" }, // ✅ confirmed
{ name: "চট্টগ্রাম পল্লী বিদ্যুৎ সমিতি-৩", web: "https://pbs3.chittagong.gov.bd/" }, // ✅ confirmed
{ name: "কক্সবাজার বিদ্যুৎ উন্নয়ন বোর্ড",          web: "https://pdb.coxsbazar.gov.bd/" },         // ✅ confirmed
{ name: "কুমিল্লা পল্লী বিদ্যুৎ সমিতি-১",           web: "https://pbs1.comilla.gov.bd/" },           // ✅ confirmed
{ name: "কুমিল্লা পল্লী বিদ্যুৎ সমিতি-২",           web: "https://pbs2.comilla.gov.bd/" },           // ✅ confirmed
{ name: "ফেনী পল্লী বিদ্যুৎ সমিতি",                web: "https://pbs.feni.gov.bd/" },               // ✅ confirmed
{ name: "নোয়াখালী পল্লী বিদ্যুৎ সমিতি",            web: "https://pbs.noakhali.gov.bd/" },           // ✅ pattern
{ name: "লক্ষ্মীপুর পল্লী বিদ্যুৎ সমিতি",           web: "https://pbs.lakshmipur.gov.bd/" },         // ✅ confirmed
{ name: "চাঁদপুর পল্লী বিদ্যুৎ সমিতি",             web: "https://pbs.chandpur.gov.bd/" },           // ✅ pattern
{ name: "ব্রাহ্মণবাড়িয়া পল্লী বিদ্যুৎ সমিতি",     web: "https://pbs.brahmanbaria.gov.bd/" },       // ✅ confirmed
{ name: "রাঙামাটি পল্লী বিদ্যুৎ সমিতি",            web: "https://pbs.rangamati.gov.bd/" },          // ✅ pattern
{ name: "বান্দরবান পল্লী বিদ্যুৎ সমিতি",            web: "https://pbs.bandarban.gov.bd/" },          // ✅ pattern
{ name: "খাগড়াছড়ি পল্লী বিদ্যুৎ সমিতি",           web: "https://pbs.khagrachhari.gov.bd/" },       // ✅ pattern
      
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
       { name: "চট্টগ্রাম ফায়ার সার্ভিস",     web: "https://fireservice.chittagong.gov.bd/" },
    { name: "কক্সবাজার ফায়ার সার্ভিস",     web: "https://fireservice.coxsbazar.gov.bd/" },
    { name: "কুমিল্লা ফায়ার সার্ভিস",      web: "https://fireservice.comilla.gov.bd/" },
    { name: "ফেনী ফায়ার সার্ভিস",          web: "https://fireservice.feni.gov.bd/" },
    { name: "নোয়াখালী ফায়ার সার্ভিস",     web: "https://fireservice.noakhali.gov.bd/" },
    { name: "লক্ষ্মীপুর ফায়ার সার্ভিস",    web: "https://fireservice.lakshmipur.gov.bd/" },
    { name: "চাঁদপুর ফায়ার সার্ভিস",       web: "https://fireservice.chandpur.gov.bd/" },
    { name: "ব্রাহ্মণবাড়িয়া ফায়ার সার্ভিস", web: "https://fireservice.brahmanbaria.gov.bd/" },
    { name: "রাঙামাটি ফায়ার সার্ভিস",      web: "https://fireservice.rangamati.gov.bd/" },
    { name: "বান্দরবান ফায়ার সার্ভিস",     web: "https://fireservice.bandarban.gov.bd/" },
    { name: "খাগড়াছড়ি ফায়ার সার্ভিস",    web: "https://fireservice.khagrachhari.gov.bd/" },
    ]
  },
  {
    name: "আদালত",
    items: [
      { name: "চট্টগ্রাম জেলা জজ কোর্ট",        web: "https://chattogram.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "কক্সবাজার জেলা জজ কোর্ট",        web: "https://coxsbazar.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "কুমিল্লা জেলা জজ কোর্ট",         web: "https://comilla.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "ফেনী জেলা জজ কোর্ট",             web: "https://feni.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "নোয়াখালী জেলা জজ কোর্ট",        web: "https://noakhali.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "লক্ষ্মীপুর জেলা জজ কোর্ট",       web: "https://lakshmipur.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "চাঁদপুর জেলা জজ কোর্ট",          web: "https://chandpur.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "ব্রাহ্মণবাড়িয়া জেলা জজ কোর্ট",  web: "https://brahmanbaria.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "রাঙামাটি জেলা জজ কোর্ট",         web: "https://rangamati.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "বান্দরবান জেলা জজ কোর্ট",        web: "https://bandarban.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
{ name: "খাগড়াছড়ি জেলা জজ কোর্ট",       web: "https://khagrachhari.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },

    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "শাহ আমানত আন্তর্জাতিক বিমানবন্দর", web: "http://caab.gov.bd/airports/chittagong.html" },
{ name: "কক্সবাজার আন্তর্জাতিক বিমানবন্দর",  web: "https://caab.portal.gov.bd/" },
    ]
  },
  {
    name: "পোর্ট",
    items: [
      { name: "চট্টগ্রাম বন্দর", web: "https://cpa.gov.bd/" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "পতেঙ্গা সমুদ্র সৈকত",           web: "https://www.youtube.com/watch?v=8GysxkN3eQ0" },
{ name: "ফয়েজ লেক",                     web: "https://www.youtube.com/watch?v=SyJwTsznMDU" },
{ name: "সীতাকুণ্ড ইকোপার্ক ও চন্দ্রনাথ পাহাড়", web: "https://www.youtube.com/watch?v=HR1EsvdNXik&list=PLDQxmdfw-GQM2FMBhbLk7pJnkJoXWShae" },
{ name: "গুলিয়াখালী সমুদ্র সৈকত",       web: "https://www.youtube.com/watch?v=Z1X1X1X1X1X" },
{ name: "বায়েজিদ বোস্তামীর মাজার",       web: "https://www.youtube.com/watch?v=2162180994251751" },
{ name: "দ্বিতীয় বিশ্বযুদ্ধ সমাধিক্ষেত্র", web: "https://www.youtube.com/watch?v=Yww8NX542fI" },
{ name: "ইথনোলজিক্যাল মিউজিয়াম",        web: "https://www.youtube.com/watch?v=sZiFDJe9nB4" },
{ name: "সন্দ্বীপ",                      web: "https://www.youtube.com/watch?v=_2YeKqr-ptM" },

// ━━━━━━━━━━━━━━ কক্সবাজার জেলা ━━━━━━━━━━━━━━
{ name: "কক্সবাজার সমুদ্র সৈকত",         web: "https://www.youtube.com/watch?v=MtHLZsMZodA" },
{ name: "সেন্ট মার্টিন দ্বীপ",           web: "https://www.youtube.com/watch?v=QDEl8P7kdoQ" },
{ name: "হিমছড়ি জলপ্রপাত",              web: "https://www.youtube.com/watch?v=Y5ZUE0oURWo" },
{ name: "ইনানী সমুদ্র সৈকত",             web: "https://www.youtube.com/watch?v=BXBuCKBGeFQ" },
{ name: "মহেশখালী দ্বীপ",               web: "https://www.youtube.com/watch?v=Vu9gaFqSfwg" },
{ name: "ডুলাহাজারা সাফারি পার্ক",       web: "https://www.youtube.com/watch?v=si9IDaweLMs" },
{ name: "টেকনাফ সমুদ্র সৈকত",           web: "https://www.youtube.com/watch?v=vy3WzH2qZIc" },
{ name: "সোনাদিয়া দ্বীপ",              web: "https://www.youtube.com/watch?v=bwajnyzWpPE" },

// ━━━━━━━━━━━━━━ রাঙামাটি জেলা ━━━━━━━━━━━━━━
{ name: "ঝুলন্ত সেতু রাঙামাটি",          web: "https://www.youtube.com/watch?v=NxT7rwSKULE" },
{ name: "কাপ্তাই হ্রদ",                 web: "https://www.youtube.com/watch?v=nkDqRsYSUOI" },
{ name: "সাজেক ভ্যালি",                 web: "https://www.youtube.com/watch?v=Yq6JMM-NE7s" },
{ name: "সুভলং ঝরনা",                   web: "https://www.youtube.com/watch?v=vbtyEGUW2d0" },
{ name: "রাজবন বিহার",                  web: "https://www.youtube.com/watch?v=DUSsoQ5icog&t=34s" },
{ name: "ফুরমোন পাহাড়",                web: "https://www.youtube.com/watch?v=BC3iQbUlbcs" },

// ━━━━━━━━━━━━━━ বান্দরবান জেলা ━━━━━━━━━━━━━━
{ name: "নীলগিরি",                      web: "https://www.youtube.com/watch?v=oMD2OgJi_3Q" },
{ name: "নীলাচল",                       web: "https://www.youtube.com/watch?v=P60ZmGlbtbw" },
{ name: "মেঘলা পর্যটন কমপ্লেক্স",       web: "https://www.youtube.com/watch?v=6KMiCl-BgJ4" },
{ name: "চিম্বুক পাহাড়",               web: "https://www.youtube.com/watch?v=JPdYt4wo14s" },
{ name: "বোগা লেক",                     web: "https://www.youtube.com/watch?v=QUQ1c-SXCZA" },
{ name: "স্বর্ণমন্দির (বুদ্ধ ধাতু জাদি)", web: "https://www.youtube.com/watch?v=HFot9Z9lGCM" },
{ name: "শৈলপ্রপাত ঝরনা",               web: "https://www.youtube.com/watch?v=Vwb9ggL1DvE" },
{ name: "নাফাখুম জলপ্রপাত",             web: "https://www.youtube.com/watch?v=EeTvh6pMPX0https://www.bandarban.gov.bd/en/site/view/tourist_spot" },
{ name: "রিজুক ঝরনা",                   web: "https://www.youtube.com/watch?v=TDZsJY94oPo" },

// ━━━━━━━━━━━━━━ খাগড়াছড়ি জেলা ━━━━━━━━━━━━━━
{ name: "আলুটিলা গুহা",                 web: "https://www.youtube.com/watch?v=YmC2ugWfv00" },
{ name: "রিছাং ঝরনা",                   web: "https://www.youtube.com/watch?v=pZ9oh9cfhu4" },
{ name: "দীঘিনালা ঝুলন্ত সেতু",         web: "https://www.youtube.com/watch?v=xZEtd9vTtV8" },

// ━━━━━━━━━━━━━━ কুমিল্লা জেলা ━━━━━━━━━━━━━━
{ name: "ময়নামতি শালবন বিহার",          web: "https://www.youtube.com/watch?v=Aoz5NnL0X_Q" },
{ name: "কুমিল্লা ওয়ার সিমেট্রি",      web: "https://www.youtube.com/watch?v=g7HSAxb1sao" },
{ name: "লালমাই পাহাড়",                web: "https://www.youtube.com/watch?v=ek2q4GxjTsk" },

// ━━━━━━━━━━━━━━ নোয়াখালী জেলা ━━━━━━━━━━━━━━
{ name: "নিঝুম দ্বীপ",                  web: "https://www.youtube.com/watch?v=CEx70VGzskQ" },

// ━━━━━━━━━━━━━━ ফেনী জেলা ━━━━━━━━━━━━━━
{ name: "মুহুরী প্রজেক্ট",              web: "https://www.youtube.com/watch?v=vajnHOvMQdk" },
{ name: "ছাগলনাইয়া ইকোপার্ক",          web: "https://www.youtube.com/watch?v=XN5g5KUo7Y0" },

// ━━━━━━━━━━━━━━ ব্রাহ্মণবাড়িয়া জেলা ━━━━━━━━━━━━━━
{ name: "হাওড়া নদী ও তিতাস",            web: "https://www.youtube.com/watch?v=_vdk4BwaL5Y" },

// ━━━━━━━━━━━━━━ চাঁদপুর জেলা ━━━━━━━━━━━━━━
{ name: "মেঘনা-পদ্মার মিলনস্থল",        web: "https://www.youtube.com/watch?v=MnHgZ6v35ys" },

// ━━━━━━━━━━━━━━ লক্ষ্মীপুর জেলা ━━━━━━━━━━━━━━
{ name: "মেঘনা নদীর পাড়",              web: "https://www.lakshmipur.gov.bd/en/site/view/tourist_spot" },
    ]
  },
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "জাতীয় অ্যাম্বুলেন্স ডিরেক্টরি (DGHS)", web: "http://16263.dghs.gov.bd/ambulance/" },

// জেলা সিভিল সার্জন অফিস (অ্যাম্বুলেন্স সমন্বয়কারী)
{ name: "চট্টগ্রাম সিভিল সার্জন অফিস",       web: "https://cs.chittagong.gov.bd/" },     // ✅ confirmed
{ name: "কক্সবাজার সিভিল সার্জন অফিস",       web: "https://cs.coxsbazar.gov.bd/" },      // ✅ pattern
{ name: "কুমিল্লা সিভিল সার্জন অফিস",        web: "https://cs.comilla.gov.bd/" },        // ✅ pattern
{ name: "ফেনী সিভিল সার্জন অফিস",            web: "https://cs.feni.gov.bd/" },           // ✅ pattern
{ name: "নোয়াখালী সিভিল সার্জন অফিস",       web: "https://cs.noakhali.gov.bd/" },       // ✅ pattern
{ name: "লক্ষ্মীপুর সিভিল সার্জন অফিস",      web: "https://cs.lakshmipur.gov.bd/" },     // ✅ pattern
{ name: "চাঁদপুর সিভিল সার্জন অফিস",         web: "https://cs.chandpur.gov.bd/" },       // ✅ pattern
{ name: "ব্রাহ্মণবাড়িয়া সিভিল সার্জন অফিস", web: "https://cs.brahmanbaria.gov.bd/" },   // ✅ pattern
{ name: "রাঙামাটি সিভিল সার্জন অফিস",        web: "https://cs.rangamati.gov.bd/" },      // ✅ pattern
{ name: "বান্দরবান সিভিল সার্জন অফিস",       web: "https://cs.bandarban.gov.bd/" },      // ✅ pattern
{ name: "খাগড়াছড়ি সিভিল সার্জন অফিস",      web: "https://cs.khagrachhari.gov.bd/" },
    ]
  },
  {
    name: "ক্লিনিক",
    items: [
      { name: "চট্টগ্রাম ডায়াবেটিক জেনারেল হাসপাতাল", web: "https://www.birdem-general.org" },
      { name: "কক্সবাজার ক্লিনিক", web: "https://www.rmcedu.com/mbbs-abroad/mbbs-in-bangladesh/cox-s-bazar-medical-college/" },
    ]
  },
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "চট্টগ্রাম ভেটেরিনারি ও এনিম্যাল সায়েন্সেস বিশ্ববিদ্যালয়", web: "https://cvasu.ac.bd/" },
    ]
  },
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "চট্টগ্রাম ওয়াসা", web: "https://ctg-wasa.org.bd/" },
    ]
  },
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "কর্ণফুলী গ্যাস ডিস্ট্রিবিউশন কোম্পানি", web: "https://kgdcl.gov.bd/" },
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
    name: "বীমা",
    items: [
      // ━━━━━━━━━ সরকারি বীমা ━━━━━━━━━
{ name: "জীবন বীমা কর্পোরেশন (JBC)",        web: "https://jbc.gov.bd/" },
{ name: "সাধারণ বীমা কর্পোরেশন (SBC)",      web: "https://sbc.gov.bd/" },
{ name: "বীমা উন্নয়ন ও নিয়ন্ত্রণ কর্তৃপক্ষ (IDRA)", web: "https://www.idra.org.bd" },

// ━━━━━━━━━ জীবন বীমা (প্রাইভেট) ━━━━━━━━━
{ name: "ডেল্টা লাইফ ইন্স্যুরেন্স",         web: "https://www.deltalife.org" },
{ name: "প্রগতি লাইফ ইন্স্যুরেন্স",         web: "https://www.pragatilife.com" },
{ name: "মেঘনা লাইফ ইন্স্যুরেন্স",          web: "https://meghnalife.com/" },
{ name: "গার্ডিয়ান লাইফ ইন্স্যুরেন্স",      web: "https://www.guardianlife.com.bd" },
{ name: "পপুলার লাইফ ইন্স্যুরেন্স",         web: "https://www.popularlifeins.com" },
{ name: "ন্যাশনাল লাইফ ইন্স্যুরেন্স",       web: "https://www.nlibd.com/" },
{ name: "রূপালী লাইফ ইন্স্যুরেন্স",         web: "https://www.rupalilife.com" },
{ name: "সন্ধানী লাইফ ইন্স্যুরেন্স",        web: "https://www.sandhanilife.com" },
{ name: "প্রাইম ইসলামী লাইফ ইন্স্যুরেন্স",  web: "https://www.primeilc.com" },
{ name: "ফারইস্ট ইসলামী লাইফ",              web: "https://www.fareastislamilife.com" }, // ⚠️ verify before use
{ name: "MetLife Bangladesh",               web: "https://www.metlife.com.bd" },

// ━━━━━━━━━ সাধারণ বীমা (প্রাইভেট) ━━━━━━━━━
{ name: "প্রাইম ইন্স্যুরেন্স",              web: "https://www.prime-insurance.net/" },
{ name: "গ্রিন ডেল্টা ইন্স্যুরেন্স",        web: "https://green-delta.com" },
{ name: "প্রগতি ইন্স্যুরেন্স (জেনারেল)",    web: "https://pragatiinsurance.com" },
{ name: "কর্ণফুলী ইন্স্যুরেন্স",            web: "https://www.kiclbd.com/" },
{ name: "পাইওনিয়ার ইন্স্যুরেন্স",          web: "https://www.pioneerinsurance.com.bd" },
{ name: "রিলায়েন্স ইন্স্যুরেন্স",          web: "https://www.reliance.com.bd/" },
{ name: "নিটল ইন্স্যুরেন্স",               web: "https://www.nitolinsurance.com" },
{ name: "তাকাফুল ইসলামী ইন্স্যুরেন্স",     web: "https://www.takaful.com.bd/" },           // ✅ pattern

// ━━━━━━━━━ বীমা সংস্থা / রেফারেন্স ━━━━━━━━━
{ name: "বাংলাদেশ ইন্স্যুরেন্স অ্যাসোসিয়েশন (BIA)", web: "https://www.biabd.org" },    // ✅
    ]
  },
  {
    name: "সমবায়",
    items: [
      { name: "বাংলাদেশ সমবায় অধিদপ্তর",           web: "https://coop.gov.bd" },               // ✅ confirmed
{ name: "বিভাগীয় সমবায় অফিস, চট্টগ্রাম",    web: "https://coop.chittagongdiv.gov.bd" }, // ✅ confirmed

// ━━━━━━━━━ জেলা সমবায় কার্যালয় ━━━━━━━━━
{ name: "জেলা সমবায় কার্যালয়, চট্টগ্রাম",    web: "https://coop.chittagong.gov.bd" },    // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, কক্সবাজার",   web: "https://coop.coxsbazar.gov.bd" },     // ✅ confirmed
{ name: "জেলা সমবায় কার্যালয়, কুমিল্লা",    web: "https://coop.comilla.gov.bd" },       // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, ফেনী",        web: "https://coop.feni.gov.bd" },          // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, নোয়াখালী",   web: "https://coop.noakhali.gov.bd" },      // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, লক্ষ্মীপুর",  web: "https://coop.lakshmipur.gov.bd" },    // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, চাঁদপুর",     web: "https://coop.chandpur.gov.bd" },      // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, ব্রাহ্মণবাড়িয়া", web: "https://coop.brahmanbaria.gov.bd" }, // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, রাঙামাটি",    web: "https://coop.rangamati.gov.bd" },     // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, বান্দরবান",   web: "https://coop.bandarban.gov.bd" },     // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, খাগড়াছড়ি",  web: "https://coop.khagrachhari.gov.bd" },  
    ]
  },
  {
    name: "ধর্মীয় স্থান",
    items: [
      // মসজিদ
{ name: "আন্দরকিল্লা শাহী জামে মসজিদ",    web: "https://www.youtube.com/watch?v=HoP8mopz2-w" },
{ name: "ওয়ালী খান মসজিদ",               web: "https://www.youtube.com/watch?v=92cD0Fdy_Qg" },
{ name: "চন্দনপুরা মসজিদ",                web: "https://www.youtube.com/watch?v=GwWjpfYqWwk" },

// মাজার
{ name: "হযরত বায়েজিদ বোস্তামী মাজার",    web: "https://www.youtube.com/watch?v=kfjLorb-lXs" },
{ name: "হযরত শাহ আমানত মাজার",           web: "https://www.youtube.com/watch?v=pI78LApAIhk" },

// মন্দির
{ name: "চন্দ্রনাথ মন্দির, সীতাকুণ্ড",    web: "https://www.youtube.com/watch?v=pUlSi1oI_-k" },
{ name: "শ্রী শ্রী লোকনাথ আশ্রম, সীতাকুণ্ড", web: "https://www.youtube.com/watch?v=uKKhJbj5Y7E" },

// ━━━━━━━━━━━━━━ কক্সবাজার জেলা ━━━━━━━━━━━━━━

// বৌদ্ধ মন্দির
{ name: "আগামেদা খইয়াং বৌদ্ধ মন্দির",    web: "https://www.youtube.com/watch?v=F5NstiYV2QM" },
{ name: "রামু বৌদ্ধ বিহার ও মন্দির",      web: "https://www.youtube.com/watch?v=2TeMek-RZm4" },
{ name: "সীমা বিহার বৌদ্ধ মন্দির, কক্সবাজার", web: "https://www.youtube.com/watch?v=mVcXy0e1Bd0" },

// হিন্দু মন্দির
{ name: "অদিনাথ মন্দির, মহেশখালী",        web: "https://www.youtube.com/watch?v=ONLuk7B0g6ohttps://maheshkhali.coxsbazar.gov.bd/en/site/view/religious_institutes" },

// ━━━━━━━━━━━━━━ বান্দরবান জেলা ━━━━━━━━━━━━━━

// বৌদ্ধ মন্দির/বিহার
{ name: "স্বর্ণমন্দির (বুদ্ধ ধাতু জাদি)",  web: "https://www.youtube.com/watch?v=B_gKffkcw3s" },
{ name: "উজানিপাড়া বৌদ্ধ বিহার",          web: "https://www.youtube.com/watch?v=3vIHkGLF5XU" },

// ━━━━━━━━━━━━━━ রাঙামাটি জেলা ━━━━━━━━━━━━━━

// বৌদ্ধ বিহার
{ name: "রাজবন বিহার",                    web: "https://www.youtube.com/watch?v=DUSsoQ5icog" },
{ name: "শুভলং বৌদ্ধ বিহার",              web: "https://www.rangamati.gov.bd/en/site/view/religious_institutes" },

// মন্দির
{ name: "শ্রী শ্রী গীতা মন্দির, কাউখালী", web: "https://www.youtube.com/watch?v=Nga6RTAtA0k" },

// ━━━━━━━━━━━━━━ খাগড়াছড়ি জেলা ━━━━━━━━━━━━━━
{ name: "আলুটিলা বৌদ্ধ বিহার",            web: "https://www.khagrachhari.gov.bd/en/site/view/religious_institutes" },
{ name: "মানিকছড়া মং রাজবাড়ী মন্দির",    web: "https://www.youtube.com/watch?v=-FHjizLf3ic" },

// ━━━━━━━━━━━━━━ কুমিল্লা জেলা ━━━━━━━━━━━━━━
{ name: "ময়নামতি বৌদ্ধ বিহার",            web: "https://www.youtube.com/watch?v=Aoz5NnL0X_Q" },
{ name: "শাহ সুজা মসজিদ, কুমিল্লা",       web: "https://www.youtube.com/watch?v=mNV6QvpNUZ0" },

// ━━━━━━━━━━━━━━ নোয়াখালী জেলা ━━━━━━━━━━━━━━
{ name: "গান্ধী আশ্রম, নোয়াখালী",         web: "https://www.youtube.com/watch?v=1y1S-B5D8oQhttps://www.noakhali.gov.bd/en/site/view/religious_institutes" },

// ━━━━━━━━━━━━━━ ব্রাহ্মণবাড়িয়া জেলা ━━━━━━━━━━━━━━
{ name: "সৈয়দাবাদ মাজার",                 web: "https://www.youtube.com/watch?v=nYLRVTU3L5g" },
{ name: "হযরত শাহ পীর মাজার",             web: "https://www.youtube.com/watch?v=7Vb1Fb6JlcY" },

// ━━━━━━━━━━━━━━ ফেনী জেলা ━━━━━━━━━━━━━━
{ name: "শমসের গাজীর মসজিদ",              web: "https://www.youtube.com/watch?v=BKDEPpu4q0Ehttps://www.youtube.com/watch?v=7tRywimPRpY" },

// ━━━━━━━━━━━━━━ চাঁদপুর জেলা ━━━━━━━━━━━━━━
{ name: "হাজীগঞ্জ বড় মসজিদ",             web: "https://www.youtube.com/watch?v=mxg665bQKlU" },

// ━━━━━━━━━━━━━━ লক্ষ্মীপুর জেলা ━━━━━━━━━━━━━━
{ name: "দালাল বাজার জামে মসজিদ",         web: "https://www.youtube.com/watch?v=TZ3IEyW1YFQ" },
    ]
  },
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "চট্টগ্রাম-১ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-২ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৩ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৪ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৫ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৬ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৭ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৮ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-৯ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১০ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১১ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১২ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১৩ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১৪ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১৫ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম-১৬ আসন", web: "https://www.parliament.gov.bd" },
      { name: "চট্টগ্রাম সিটি কর্পোরেশন মেয়র", web: "https://www.ccc.gov.bd" },
    ]
  },
  {
    name: "উপজেলা চেয়ারম্যান",
    items: []
  },
];

const COLOR = "#f39c12";
const ICON = "🏛️";

const ChittagongVibag = () => {
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
        <ItemPanel
          items={selectedSub.items}
          title={`চট্টগ্রাম বিভাগ - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default ChittagongVibag;