import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#2c3e50";
const ICON = "🏯";

const subCategories = [
  // ───── সরকারি স্কুল (জেলা-ভিত্তিক) ─────
  {
    name: "সরকারি স্কুল (রাজশাহী)",
    items: [
      { name: "রাজশাহী কলেজিয়েট স্কুল", web: "https://rcs.edu.bd/" },
      { name: "রাজশাহী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://rgghsh.edu.bd/" },
      { name: "রাজশাহী পি এন সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://pn.edu.bd/" },
      { name: "গভর্নমেন্ট ল্যাবরেটরি হাই স্কুল, রাজশাহী", web: "http://www.rglhs.edu.bd/" },
      { name: "Loknath Raman Bihary Govt.High School", web: "https://www.lrghs.edu.bd/" },
      { name: "Motiher High School", web: "https://www.facebook.com/p/Motiher-High-School-61550736548317/" },
      { name: "খাবাশপুর লাবণ্য প্রভা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/klphs.edu.bd/" },
      { name: "চারঘাট সরকারি টেকনিক্যাল স্কুল ও কলেজ", web: "https://tsccharghat.rajshahi.gov.bd/" },
      { name: "উল্লাপাড়া মার্চেন্টস্ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://umpghs.school.gov.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (বগুড়া)",
    items: [
      { name: "বগুড়া জিলা স্কুল", web: "https://bograillaschool.edu.bd" },
      { name: "বগুড়া সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/vmschoolbogra/?locale=bn_IN" },
      { name: "শেরপুর পাইলট উচ্চ বিদ্যালয় (বগুড়া)", web: "https://www.spgh.edu.bd/" },
      { name: "শাজাহানপুর উচ্চ বিদ্যালয়", web: "https://shhs.edu.bd/" },
      { name: "সারিয়াকান্দি সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Sariakandi-Government-High-School-100091918744436/" },
      { name: "ধুনট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/people/Dhunat-Govt-N-U-Pilot-Model-High-School/61556289301732/#" },
    ]
  },
  {
    name: "সরকারি স্কুল (পাবনা)",
    items: [
      { name: "পাবনা জিলা স্কুল", web: "https://pabnazillaschool.edu.bd" },
      { name: "পাবনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://pabnagghs.edu.bd" },
      { name: "ঈশ্বরদী মাধ্যমিক বিদ্যালয় ", web: "https://www.facebook.com/iswardisecondaryschool/" },
      { name: "Santhia Government pilot model high school ", web: "https://www.facebook.com/santhia.pilot.high.school/" },
      { name: "Atghoria Pilot Model High School ", web: "https://www.facebook.com/p/Atghoria-Pilot-Model-High-School-100057411970583/" },
    ]
  },
  {
    name: "সরকারি স্কুল (সিরাজগঞ্জ)",
    items: [
      { name: "সিরাজগঞ্জ সরকারি বি. এল. উচ্চ বিদ্যালয়", web: "https://www.blgovtschool.edu.bd/" },
      { name: "সিরাজগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://www.sigghs.edu.bd/" },
      { name: "উল্লাপাড়া সরকারি পাইলট উচ্চ বিদ্যালয়", web: "https://umpghs.school.gov.bd/" },
      { name: "শাহজাদপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/shahzadpur/" },
      { name: "তাড়াশ সরকারি উচ্চ বিদ্যালয়", web: "https://tarashgovtghs.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (নওগাঁ)",
    items: [
      { name: "নওগাঁ জিলা স্কুল", web: "http://www.naogaonzillaschool.edu.bd" },
      { name: "নওগাঁ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/%E0%A6%A8%E0%A6%93%E0%A6%97%E0%A6%BE%E0%A6%81-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC-100064026975362/" },
      { name: "Manda S.C Model Pilot High School & College ", web: "https://www.facebook.com/mscmphsc/" },
      { name: "রাণীনগর দ্বি-মুখী উচ্চ বিদ্যালয়", web: "https://raninagarblhighs.edu.bd/" },
      { name: "বদলগাছী সরকারি উচ্চ বিদ্যালয়", web: "https://bgmphs.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (নাটোর)",
    items: [
      { name: "নাটোর সরকারি বালক উচ্চ বিদ্যালয়", web: "http://www.ngbhsnatore.edu.bd" },   // ✅ অফিসিয়াল URL পাওয়া গেছে
      { name: "নাটোর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://www.ngghsnatore.edu.bd" }, // ✅ অফিসিয়াল URL পাওয়া গেছে
      { name: "বাগাতিপাড়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/bagatiparapilotmodelhighschool/?locale=bn_IN" },            // ❌ নিজস্ব ওয়েবসাইট পাওয়া যায়নি
      { name: "গুরুদাসপুর সরকারি উচ্চ বিদ্যালয়", web: "http://ggpmhs.edu.bd/" },             // ❌ নিজস্ব ওয়েবসাইট পাওয়া যায়নি
      { name: "সিংড়া সরকারি উচ্চ বিদ্যালয়", web: "http://www.sdgghs.edu.bd/" },  
    ]
  },
  {
    name: "সরকারি স্কুল (চাঁপাইনবাবগঞ্জ)",
    items: [
      { name: "হরিমোহন সরকারি উচ্চ বিদ্যালয়", web: "https://harimohanschool.edu.bd" },      // ✅ সক্রিয়
      { name: "চাঁপাইনবাবগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.nggchapai.edu.bd" }, // ✅ সক্রিয়
      { name: "শিবগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ShibganjModel/" },               // ❌ নিজস্ব সাইট নেই
      { name: "Nachole Khurshed Molla Govt. Girls High School", web: "https://www.neticms.com/nkmgovtgirlshs" },
      { name: "শিবগঞ্জ উচ্চ বিদ্যালয়", web: "https://shibganjhs.edu.bd/" },  
    ]
  },
  {
    name: "সরকারি স্কুল (জয়পুরহাট)",
    items: [
      { name: "জয়পুরহাট সরকারি রামদেও বাজলা উচ্চ বিদ্যালয়", web: "https://www.rbgovthighschool.edu.bd" }, // ✅ সক্রিয় ওয়েবসাইট পাওয়া গেছে
      { name: "জয়পুরহাট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.joygovtghs.edu.bd" },         // ✅ সক্রিয় ওয়েবসাইট পাওয়া গেছে
      { name: "পাঁচবিবি সরকারি উচ্চ বিদ্যালয়", web: "https://lbphs.gov.bd/" },                           // ❌ নিজস্ব ওয়েবসাইট পাওয়া যায়নি
      { name: "কালাই সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/kmughschool/?locale=bn_IN" }, 
    ]
  },

  // ───── বেসরকারি স্কুল ─────
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "রাজশাহী ক্যাডেট কলেজ", web: "https://rcc.army.mil.bd" },            // ✅ সামরিক ওয়েবসাইট পাওয়া গেছে
    { name: "রাজশাহী সরকারি মডেল স্কুল এন্ড কলেজ", web: "https://www.rmscraj.edu.bd" }, // ✅ সক্রিয়
    { name: "বগুড়া ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ", web: "https://www.bcpsc.edu.bd" }, // ✅ সক্রিয়
    { name: "সেন্ট যোসেফ স্কুল, বগুড়া", web: "https://stjosephschool.edu.bd/" },           // ❌ নিজস্ব ওয়েবসাইট পাওয়া যায়নি
    { name: "পাবনা ক্যাডেট কলেজ", web: "https://pcc.army.mil.bd" },              // ✅ সামরিক ওয়েবসাইট পাওয়া গেছে
    { name: "সিরাজগঞ্জ আদর্শ উচ্চ বিদ্যালয়", web: "https://caub.edu.bd/" },     // ❌ নিজস্ব ওয়েবসাইট পাওয়া যায়নি
    { name: "Jotbazar Addarsho Girls High School", web: "https://www.facebook.com/jaghs.edu.bd/" }, 
    ]
  },

  // ───── সরকারি কলেজ ─────
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "রাজশাহী কলেজ", web: "https://rc.edu.bd" },                                      // ✅ সঠিক ও সক্রিয়
    { name: "রাজশাহী সরকারি মহিলা কলেজ", web: "https://rgwcollege.edu.bd" },                // ✅ সঠিক URL খুঁজে পাওয়া গেছে
    { name: "সরকারি আজিজুল হক কলেজ, বগুড়া", web: "https://www.facebook.com/Gov.Ahc.bogura.page.Jeet/" },                  // ✅ সঠিক ও সক্রিয়
    { name: "বগুড়া সরকারি মজিবর রহমান মহিলা কলেজ", web: "https://www.gmrwc.edu.bd" },     // ✅ সঠিক URL খুঁজে পাওয়া গেছে
    { name: "এডওয়ার্ড কলেজ, পাবনা", web: "https://gecp.edu.bd/" },                           // ✅ সঠিক ও সক্রিয়
    { name: "পাবনা সরকারি মহিলা কলেজ", web: "https://www.gwcollegepab.edu.bd" },           // ✅ সঠিক URL খুঁজে পাওয়া গেছে
    { name: "সিরাজগঞ্জ সরকারি কলেজ", web: "https://srgc.edu.bd" },                         // ✅ সঠিক URL খুঁজে পাওয়া গেছে
    { name: "নওগাঁ সরকারি কলেজ", web: "https://www.naogc.edu.bd" },                        // ✅ সঠিক URL খুঁজে পাওয়া গেছে
    { name: "নাটোর সরকারি কলেজ", web: "https://nsc.edu.bd" },                              // ✅ নবাব সিরাজ-উদ-দৌলা সরকারি কলেজ
    { name: "চাঁপাইনবাবগঞ্জ সরকারি কলেজ", web: "https://www.ngcc.edu.bd/en" },    // ✅ সঠিক URL খুঁজে পাওয়া গেছে
    { name: "জয়পুরহাট সরকারি কলেজ", web: "https://www.jgcbd.edu.bd" },  
    ]
  },

  // ───── বেসরকারি কলেজ ─────
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "রাজশাহী সরকারি সিটি কলেজ", web: "https://rgcc.ac.bd" },               // ✅ সক্রিয়
    { name: "নিউ গভর্নমেন্ট ডিগ্রি কলেজ, রাজশাহী", web: "https://ngdc.ac.bd/https://dshe.gov.bd" },  // ⚠️ নিজস্ব ওয়েবসাইট পাওয়া যায়নি
    { name: "বগুড়া ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ", web: "https://www.facebook.com/bcpsc.edu" }, // ✅ FB পেজ (ওয়েবসাইট নেই)
    { name: "পাবনা সরকারি মহিলা কলেজ", web: "https://www.gwcollegepab.edu.bd" },  // ✅ সক্রিয়
    { name: "সিরাজগঞ্জ মহিলা কলেজ", web: "https://srgc.edu.bd" },                 // ⚠️ এটি সরকারি কলেজ (মহিলা কলেজ আলাদা, ওয়েবসাইট নেই)
    { name: "নওগাঁ মহিলা কলেজ (BMC)", web: "https://gbmcwc.edu.bd" },             // ✅ সক্রিয়
    { name: "নাটোর মহিলা কলেজ", web: "https://rbgwc.edu.bd" },     
    ]
  },

  // ───── মাদ্রাসা ─────
  {
    name: "মাদ্রাসা",
    items: [
      { name: "রাজশাহী সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "বগুড়া সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "পাবনা সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "সিরাজগঞ্জ সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "নওগাঁ সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "নাটোর সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "জয়পুরহাট সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
    ]
  },

  // ───── সরকারি বিশ্ববিদ্যালয় ─────
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "রাজশাহী বিশ্ববিদ্যালয় (RU)", web: "https://www.ru.ac.bd" },
      { name: "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (RUET)", web: "https://www.ruet.ac.bd" },
      { name: "পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", web: "https://www.pust.ac.bd" },
      { name: "রবীন্দ্র বিশ্ববিদ্যালয়, সিরাজগঞ্জ", web: "https://www.rub.ac.bd" },
      { name: "বরেন্দ্র বিশ্ববিদ্যালয়, রাজশাহী (প্রস্তাবিত)", web: "https://vu.edu.bd/news/511/-" },
      { name: "রাজশাহী মেডিকেল কলেজ (সরকারি)", web: "https://rmch.gov.bd" },
    ]
  },

  // ───── বেসরকারি বিশ্ববিদ্যালয় ─────
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "নর্থ বেঙ্গল ইন্টারন্যাশনাল ইউনিভার্সিটি, রাজশাহী", web: "https://www.nbiu.edu.bd" },
      { name: "ভার্সিটি অফ ইনফরমেশন টেকনোলজি অ্যান্ড সায়েন্সেস", web: "https://www.ruet.ac.bd/" },
      { name: "আহসানউল্লাহ বিশ্ববিদ্যালয় (বগুড়া ক্যাম্পাস)", web: "https://www.aust.edu" },
      { name: "পুন্ড্র ইউনিভার্সিটি অফ সায়েন্স অ্যান্ড টেকনোলজি, বগুড়া", web: "https://www.pust.ac.bd" },
    ]
  },

  // ───── উপজেলা ─────
  {
    name: "উপজেলা",
    items: [
      { name: "রাজশাহী সদর উপজেলা", web: "https://rajshahi.gov.bd" },
      { name: "পবা উপজেলা", web: "http://poba.rajshahi.gov.bd" },
      { name: "মোহনপুর উপজেলা", web: "http://mohanpur.rajshahi.gov.bd" },
      { name: "চারঘাট উপজেলা", web: "http://charghat.rajshahi.gov.bd" },
      { name: "বাগমারা উপজেলা", web: "http://bagmara.rajshahi.gov.bd" },
      { name: "তানোর উপজেলা", web: "http://tanore.rajshahi.gov.bd" },
      { name: "গোদাগাড়ী উপজেলা", web: "http://godagari.rajshahi.gov.bd" },
      { name: "পুঠিয়া উপজেলা", web: "http://puthia.rajshahi.gov.bd" },
      { name: "দুর্গাপুর উপজেলা (রাজশাহী)", web: "http://durgapur.rajshahi.gov.bd" },
      { name: "বগুড়া সদর উপজেলা", web: "https://bogra.gov.bd" },
      { name: "শেরপুর উপজেলা (বগুড়া)", web: "http://sherpur.bogra.gov.bd" },
      { name: "শাজাহানপুর উপজেলা", web: "http://shajahanpur.bogra.gov.bd" },
      { name: "গাবতলী উপজেলা", web: "http://gabtali.bogra.gov.bd" },
      { name: "আদমদীঘি উপজেলা", web: "http://adamdighi.bogra.gov.bd" },
      { name: "সারিয়াকান্দি উপজেলা", web: "http://sariakandi.bogra.gov.bd" },
      { name: "নন্দীগ্রাম উপজেলা", web: "http://nandigram.bogra.gov.bd" },
      { name: "পাবনা সদর উপজেলা", web: "https://pabna.gov.bd" },
      { name: "ঈশ্বরদী উপজেলা", web: "http://ishurdi.pabna.gov.bd" },
      { name: "সাঁথিয়া উপজেলা", web: "http://santhia.pabna.gov.bd" },
      { name: "ফরিদপুর উপজেলা (পাবনা)", web: "http://faridpur.pabna.gov.bd" },
      { name: "সিরাজগঞ্জ সদর উপজেলা", web: "https://sirajganj.gov.bd" },
      { name: "উল্লাপাড়া উপজেলা", web: "http://ullapara.sirajganj.gov.bd" },
      { name: "শাহজাদপুর উপজেলা", web: "http://shahjadpur.sirajganj.gov.bd" },
      { name: "কাজীপুর উপজেলা", web: "http://kazipur.sirajganj.gov.bd" },
      { name: "নওগাঁ সদর উপজেলা", web: "https://naogaon.gov.bd" },
      { name: "মান্দা উপজেলা", web: "http://manda.naogaon.gov.bd" },
      { name: "বদলগাছী উপজেলা", web: "http://badalgachhi.naogaon.gov.bd" },
      { name: "পোরশা উপজেলা", web: "http://porsha.naogaon.gov.bd" },
      { name: "নাটোর সদর উপজেলা", web: "https://natore.gov.bd" },
      { name: "বাগাতিপাড়া উপজেলা", web: "http://bagatipara.natore.gov.bd" },
      { name: "গুরুদাসপুর উপজেলা", web: "http://gurudaspur.natore.gov.bd" },
      { name: "সিংড়া উপজেলা", web: "http://singra.natore.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ সদর উপজেলা", web: "https://chapainawabganj.gov.bd" },
      { name: "শিবগঞ্জ উপজেলা", web: "http://shibganj.chapainawabganj.gov.bd" },
      { name: "গোমস্তাপুর উপজেলা", web: "http://gomastapur.chapainawabganj.gov.bd" },
      { name: "নাচোল উপজেলা", web: "http://nachole.chapainawabganj.gov.bd" },
      { name: "জয়পুরহাট সদর উপজেলা", web: "https://joypurhat.gov.bd" },
      { name: "পাঁচবিবি উপজেলা", web: "http://panchbibi.joypurhat.gov.bd" },
      { name: "কালাই উপজেলা", web: "http://kalai.joypurhat.gov.bd" },
      { name: "আক্কেলপুর উপজেলা", web: "http://akkelpur.joypurhat.gov.bd" },
    ]
  },

  // ───── থানা ─────
  {
    name: "থানা",
    items: [
      { name: "রাজশাহী মেট্রোপলিটন থানা", web: "https://police.rajshahi.gov.bd" },
      { name: "বোয়ালিয়া থানা, রাজশাহী", web: "https://police.rajshahi.gov.bd" }, 
      { name: "শাহ মখদুম থানা, রাজশাহী", web: "https://shahmokhdumps.rmp.gov.bd/" },
      { name: "পবা থানা", web: "https://rajshahi.police.gov.bd" },
      { name: "বগুড়া সদর থানা", web: "https://police.bogra.gov.bd" },
      { name: "শেরপুর থানা (বগুড়া)", web: "https://police.sherpur.bogra.gov.bd/" },
      { name: "সারিয়াকান্দি থানা", web: "https://police.shariakandi.bogra.gov.bd/" },
      { name: "পাবনা সদর থানা", web: "https://police.pabna.gov.bd" },
      { name: "ঈশ্বরদী থানা", web: "https://police.ishurdi.pabna.gov.bd/" },
      { name: "সিরাজগঞ্জ সদর থানা", web: "https://police.sirajganj.gov.bd" },
      { name: "উল্লাপাড়া থানা", web: "https://police.ullapara.sirajganj.gov.bd/" },
      { name: "নওগাঁ সদর থানা", web: "https://police.naogaon.gov.bd" },
      { name: "নাটোর সদর থানা", web: "https://police.natore.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ সদর থানা", web: "https://police.chapainawabganj.gov.bd" },
      { name: "জয়পুরহাট সদর থানা", web: "https://police.joypurhat.gov.bd" },
    ]
  },

  // ───── ব্যাংক ─────
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (রাজশাহী)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (রাজশাহী)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (রাজশাহী)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (রাজশাহী)", web: "https://rupalibank.com.bd/homepage_n.php?cbsid=3723" },
      { name: "ডাচ-বাংলা ব্যাংক (রাজশাহী)", web: "https://www.dutchbanglabank.com" },
      { name: "ইসলামী ব্যাংক (রাজশাহী)", web: "https://www.islamibankbd.com" },
      { name: "ব্র্যাক ব্যাংক (রাজশাহী)", web: "https://www.bracbank.com" },
      { name: "কৃষি ব্যাংক (রাজশাহী)", web: "https://www.krishibank.org.bd" },
      { name: "সোনালী ব্যাংক (বগুড়া)", web: "https://www.sonalibank.com.bd" },
      { name: "সোনালী ব্যাংক (পাবনা)", web: "https://www.sonalibank.com.bd" },
      { name: "সোনালী ব্যাংক (সিরাজগঞ্জ)", web: "https://www.sonalibank.com.bd" },
    ]
  },

  // ───── ভূমি অফিস ─────
  {
    name: "ভূমি অফিস",
    items: [
      { name: "রাজশাহী জেলা ভূমি অফিস", web: "https://acl.paba.rajshahi.gov.bd/" },
      { name: "বগুড়া জেলা ভূমি অফিস", web: "https://acl.sadar.bogra.gov.bd/" },
      { name: "পাবনা জেলা ভূমি অফিস", web: "https://acl.pabnasadar.pabna.gov.bd/" },
      { name: "সিরাজগঞ্জ জেলা ভূমি অফিস", web: "https://acl.sirajganjsadar.sirajganj.gov.bd/" },
      { name: "নওগাঁ জেলা ভূমি অফিস", web: "https://acl.naogaonsadar.naogaon.gov.bd/" },
      { name: "নাটোর জেলা ভূমি অফিস", web: "https://acl.naldanga.natore.gov.bd/" },
      { name: "চাঁপাইনবাবগঞ্জ জেলা ভূমি অফিস", web: "https://acl.chapainawabganjsadar.chapainawabganj.gov.bd/" },
      { name: "জয়পুরহাট জেলা ভূমি অফিস", web: "https://acl.joypurhatsadar.joypurhat.gov.bd/" },
    ]
  },

  // ───── বাস সার্ভিস ─────
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "দেশ ট্রাভেলস (রাজশাহী)", web: "https://www.zatriseba.com/2018/02/desh-travels-all-counter-list.html" },
      { name: "ন্যাশনাল ট্রাভেলস (রাজশাহী)", web: "https://www.nationaltravels-bd.com" },
      { name: "হানিফ এন্টারপ্রাইজ (রাজশাহী)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (রাজশাহী)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "ন্যাশনাল ট্রাভেলস (রাজশাহী)", web: "https://www.nationaltravels-bd.com" },
      { name: "গ্রিন লাইন (রাজশাহী)", web: "https://www.greenlinebd.com" }, // ⚠️ রাজশাহী রুট নেই
      { name: "বিআরটিসি (রাজশাহী)", web: "https://brtc.gov.bd" },
      { name: "এসআর ট্রাভেলস (বগুড়া)", web: "https://www.facebook.com/SRTravels" }, 
      { name: "নাবিল পরিবহন (বগুড়া)", web: "https://www.facebook.com/NabilParibahan" },
    ]
  },

  // ───── ট্রেন সার্ভিস ─────
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "রাজশাহী রেলওয়ে স্টেশন", web: "https://railway.rajshahidiv.gov.bd/" },
      { name: "বগুড়া রেলওয়ে স্টেশন", web: "https://railway.bogra.gov.bd/" },
      { name: "পাবনা রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "সিরাজগঞ্জ রেলওয়ে স্টেশন", web: "https://www.facebook.com/groups/amadersirajganjbd1/posts/3373852889427632/" },
      { name: "ঈশ্বরদী রেলওয়ে জংশন", web: "https://pabna.gov.bd/pages/tourist-spot/%E0%A6%88%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A6%A6%E0%A7%80-%E0%A6%B0%E0%A7%87%E0%A6%B2-%E0%A6%9C%E0%A6%82%E0%A6%B6%E0%A6%A8-47eb18-697f668c35ce18e1c06785b2" },
      { name: "বনলতা এক্সপ্রেস (ঢাকা-রাজশাহী)", web: "https://eticket.railway.gov.bd" },
      { name: "সিল্কসিটি এক্সপ্রেস", web: "https://banglartrain.com/silkcity-express-train/" },
      { name: "পদ্মা এক্সপ্রেস", web: "https://bn.amartrain.com/%E0%A6%AA%E0%A6%A6%E0%A7%8D%E0%A6%AE%E0%A6%BE-%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8-%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%87%E0%A6%B0/" },
      { name: "ই-টিকেটিং পোর্টাল", web: "https://eticket.railway.gov.bd/" },
    ]
  },

  // ───── সংবাদপত্র ─────
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক সোনার দেশ (রাজশাহী)", web: "https://www.sonadeshnews.com" },
      { name: "দৈনিক রাজশাহী বার্তা", web: "https://www.rajshahionline.com" },
      { name: "দৈনিক বগুড়া বার্তা", web: "https://www.dainikbogura.com/" },
      { name: "দৈনিক উত্তরবঙ্গ সংবাদ", web: "https://uttarbangasambad.com/" },
      { name: "প্রথম আলো (রাজশাহী)", web: "https://www.prothomalo.com" },
      { name: "কালের কণ্ঠ (রাজশাহী)", web: "https://www.kalerkantho.com" },
      { name: "দৈনিক যুগান্তর (রাজশাহী)", web: "https://www.jugantor.com" },
      { name: "দৈনিক ইত্তেফাক (রাজশাহী)", web: "https://www.ittefaq.com.bd" },
    ]
  },

  // ───── র‌্যাব ইন্সটিটিউট ─────
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-৫ (রাজশাহী সদর দপ্তর)", web: "https://rab.rajshahidiv.gov.bd/" },
      { name: "র‌্যাব-৫ (বগুড়া ক্যাম্প)", web: "https://rab.rajshahidiv.gov.bd/" },
      { name: "র‌্যাব-৫ (পাবনা ক্যাম্প)", web: "https://rab.pabna.gov.bd/" },
      { name: "র‌্যাব-৫ (সিরাজগঞ্জ ক্যাম্প)", web: "https://www.facebook.com/rab5bd/?locale=bn_IN" },
      { name: "র‌্যাব-৫ (নওগাঁ ক্যাম্প)", web: "https://www.facebook.com/rab5bd/posts/%E0%A6%A8%E0%A6%93%E0%A6%97%E0%A6%BE%E0%A6%81-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%AE%E0%A6%A4%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%9A%E0%A6%BE%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%95%E0%A6%B0-%E0%A6%A6%E0%A7%81%E0%A6%87-%E0%A6%AD%E0%A6%BE%E0%A6%87-%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%AE%E0%A6%BE%E0%A6%AE%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%8F%E0%A6%9C%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%80%E0%A7%9F-%E0%A6%86%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A7%80-%E0%A6%B6%E0%A6%B0/1021324970188785/" },
      { name: "র‌্যাব-৫ (চাঁপাইনবাবগঞ্জ ক্যাম্প)", web: "https://rab.chapainawabganj.gov.bd/" },
    ]
  },

  // ───── বিজিবি অফিস ─────
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি সেক্টর সদর দপ্তর, রাজশাহী", web: "https://bgb.rajshahidiv.gov.bd/" },
      { name: "বিজিবি ব্যাটালিয়ন, চাঁপাইনবাবগঞ্জ", web: "https://bgb.chapainawabganj.gov.bd/" },
      { name: "বিজিবি ব্যাটালিয়ন, নওগাঁ", web: "https://bgb.naogaon.gov.bd/" },
      { name: "বিজিবি ব্যাটালিয়ন, রাজশাহী", web: "https://bgb.rajshahidiv.gov.bd/" },
    ]
  },

  // ───── এনজিও অফিস ─────
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (রাজশাহী বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "আশা (রাজশাহী)", web: "https://www.asa.org.bd" },
      { name: "গ্রামীণ ব্যাংক (রাজশাহী)", web: "https://www.grameen.com" },
      { name: "প্রশিকা (রাজশাহী)", web: "https://www.proshika.org" },
      { name: "কেয়ার বাংলাদেশ (রাজশাহী)", web: "https://www.carebangladesh.org" },
      { name: "ওয়ার্ল্ড ভিশন বাংলাদেশ (রাজশাহী)", web: "https://www.wvi.org/bangladesh" },
      { name: "কোডেক (রাজশাহী)", web: "https://ngochattogram.org/ngo-website/home/136" },
    ]
  },

  // ───── সরকারি হাসপাতাল ─────
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "রাজশাহী মেডিকেল কলেজ হাসপাতাল", web: "https://rmch.gov.bd" },
      { name: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল, বগুড়া", web: "https://szrmch.portal.gov.bd/" },
      { name: "পাবনা মানসিক হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "পাবনা সদর হাসপাতাল", web: "https://hospital.pabna.gov.bd/" },
      { name: "সিরাজগঞ্জ সদর হাসপাতাল", web: "https://health.sirajganjsadar.sirajganj.gov.bd/" },
      { name: "নওগাঁ সদর হাসপাতাল", web: "https://health.naogaon.gov.bd/" },
      { name: "নাটোর সদর হাসপাতাল", web: "https://www.facebook.com/districthospitalnatore/?locale=bn_IN" },
      { name: "চাঁপাইনবাবগঞ্জ সদর হাসপাতাল", web: "https://sadarhospital.chapainawabganj.gov.bd/" },
      { name: "জয়পুরহাট সদর হাসপাতাল", web: "https://hospital.joypurhat.gov.bd/" },
      { name: "ঈশ্বরদী উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://health.ishurdi.pabna.gov.bd/" },
    ]
  },

  // ───── বেসরকারি হাসপাতাল ─────
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "ইসলামী ব্যাংক হাসপাতাল, রাজশাহী", web: "https://ibmchr.com/" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার, রাজশাহী", web: "https://www.populardiagnostic.com" },
      { name: "রাজশাহী নার্সিং হোম", web: "https://www.facebook.com/Nursingcarehomeservicerajshahi/" },
      { name: "শাহ মখদুম হাসপাতাল, রাজশাহী", web: "https://www.facebook.com/shahmokhdummedicalcollege/?locale=bn_IN" },
      { name: "বগুড়া শহীদ জিয়া মেডিকেল কলেজ হাসপাতাল", web: "https://szrmch.portal.gov.bd/" },
      { name: "পাবনা ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com/groups/pabna.zilla.group/posts/1749361492356976/" },
      { name: "নর্থ বেঙ্গল মেডিকেল কলেজ হাসপাতাল", web: "https://inhealthylife.com/north-bengal-medical-college-and-hospital-sirajganj-doctor-list/" },
      { name: "ল্যাব এইড ডায়াগনস্টিক (রাজশাহী)", web: "https://www.labaiddiagnostics.com/branch/details/rajshahi" },
     ]
  },

  // ───── পোস্ট অফিস ─────
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "রাজশাহী জিপিও", web: "https://pmgraj.bdpost.gov.bd/" },
      { name: "বগুড়া জিপিও", web: "https://postho.bogura.gov.bd/" },
      { name: "পাবনা জিপিও", web: "https://bdpost.gov.bd/pages/static-pages/6922df74933eb65569e22183" },
      { name: "সিরাজগঞ্জ জিপিও", web: "https://bdpost.gov.bd/" },
      { name: "নওগাঁ জিপিও", web: "https://bdpost.gov.bd/" },
      { name: "নাটোর জিপিও", web: "https://bdpost.gov.bd/" },
      { name: "চাঁপাইনবাবগঞ্জ জিপিও", web: "https://bdpost.gov.bd/" },
      { name: "জয়পুরহাট জিপিও", web: "https://bdpost.gov.bd/" },
    ]
  },

  // ───── বিদ্যুৎ অফিস ─────
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "নর্থ ওয়েস্ট পাওয়ার জেনারেশন কোম্পানি (NWPGCL)", web: "https://nwpgcl.gov.bd/" },
      { name: "নর্দান ইলেকট্রিসিটি সাপ্লাই (NESCO)", web: "https://nesco.gov.bd/" },
      { name: "রাজশাহী পল্লী বিদ্যুৎ সমিতি-১", web: "https://pbs.rajshahi.gov.bd/" },
      { name: "রাজশাহী পল্লী বিদ্যুৎ সমিতি-২", web: "https://pbs.rajshahi.gov.bd/" },
      { name: "বগুড়া পল্লী বিদ্যুৎ সমিতি-১", web: "https://pbs1.bogra.gov.bd/" },
      { name: "বগুড়া পল্লী বিদ্যুৎ সমিতি-২", web: "https://pbs2.bogra.gov.bd/" },
      { name: "পাবনা পল্লী বিদ্যুৎ সমিতি", web: "https://pbs1.pabna.gov.bd/" },
      { name: "সিরাজগঞ্জ পল্লী বিদ্যুৎ সমিতি", web: "https://pbs1.sirajganj.gov.bd/" },
      { name: "নওগাঁ পল্লী বিদ্যুৎ সমিতি", web: "https://pbs1.naogaon.gov.bd/" },
      { name: "চাঁপাইনবাবগঞ্জ পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.chapainawabganj.gov.bd/" },
    ]
  },

  // ───── ফায়ার সার্ভিস ─────
  {
    name: "ফায়ার সার্ভিস",
    items: [
      
    { name: "রাজশাহী ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.rajshahi.gov.bd" },       // ✅ সক্রিয়
    { name: "বগুড়া ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.bogra.gov.bd" },           // ✅ রাজশাহী বিভাগের অধীনে
    { name: "পাবনা ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.pabna.gov.bd" },           // ✅ রাজশাহী বিভাগের অধীনে
    { name: "সিরাজগঞ্জ ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.sirajganj.gov.bd" },  // ✅ সক্রিয়
    { name: "নওগাঁ ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.naogaon.gov.bd" },         // ✅ রাজশাহী বিভাগের অধীনে
    { name: "নাটোর ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.natore.gov.bd" },         // ✅ রাজশাহী বিভাগের অধীনে
    { name: "চাঁপাইনবাবগঞ্জ ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.chapainawabganj.gov.bd" }, // ✅
    { name: "জয়পুরহাট ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.joypurhat.gov.bd" },  // ✅ রাজশাহী বিভাগের অধীনে
    ]
  },

  // ───── আদালত ─────
  {
    name: "আদালত",
    items: [
      { name: "রাজশাহী জেলা জজ কোর্ট", web: "https://rajshahi.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "বগুড়া জেলা জজ কোর্ট", web: "https://bogura.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "পাবনা জেলা জজ কোর্ট", web: "https://pabna.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "সিরাজগঞ্জ জেলা জজ কোর্ট", web: "https://sirajganj.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "নওগাঁ জেলা জজ কোর্ট", web: "https://naogaon.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "নাটোর জেলা জজ কোর্ট", web: "https://natore.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "চাঁপাইনবাবগঞ্জ জেলা জজ কোর্ট", web: "https://chapainawabganj.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "জয়পুরহাট জেলা জজ কোর্ট", web: "https://joypurhat.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
    ]
  },

  // ───── এয়ারপোর্ট ─────
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "রাজশাহী শাহ মখদুম বিমানবন্দর", web: "http://caab.gov.bd/admn/sma21-22.pdf" },
      { name: "বাংলাদেশ বেসামরিক বিমান চলাচল কর্তৃপক্ষ", web: "http://caab.gov.bd/" },
      { name: "বিমান বাংলাদেশ এয়ারলাইন্স (রাজশাহী)", web: "https://biman.gov.bd/" },
    ]
  },

  // ───── পোর্ট ─────
  {
    name: "পোর্ট",
    items: [
      { name: "রাজশাহী নদীবন্দর", web: "https://www.biwta.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ নদীবন্দর", web: "https://chapainawabganj.gov.bd/pages/static-pages/697f99c635ce18e1c06c093d" },
      { name: "সিরাজগঞ্জ নদীবন্দর", web: "https://www.google.com/search?q=%E0%A6%B8%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C+%E0%A6%A8%E0%A6%A6%E0%A7%80%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0&sca_esv=ff0cf9ce6af69c53&biw=1366&bih=641&sxsrf=ANbL-n5Eflc6gPVB4Ds7PFUHJTn7zaZ3Pw%3A1777610807088&ei=NzD0acOMBbaLseMP4LCmoAQ&ved=0ahUKEwiDhNKlpJeUAxW2RWwGHWCYCUQQ4dUDCBM&uact=5&oq=%E0%A6%B8%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C+%E0%A6%A8%E0%A6%A6%E0%A7%80%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiNOCmuOCmv-CmsOCmvuCmnOCml-CmnuCnjeCmnCDgpqjgpqbgp4Dgpqzgpqjgp43gpqbgprAyBBAjGCcyBhAAGB4YDTIFEAAY7wUyBRAAGO8FMgUQABjvBTIFEAAY7wUyBRAAGO8FSJsOUIEKWIEKcAN4AJABAJgBjgGgAZMCqgEDMC4yuAEDyAEA-AEC-AEBmAIEoAKjAcICChAAGEcY1gQYsAOYAwCIBgGQBgiSBwMzLjGgB78NsgcDMC4xuAeVAcIHBTItMy4xyAcYgAgB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:8cf0b8bb,vid:bPppZMkQsKA,st:0" },
      { name: "বাংলাদেশ অভ্যন্তরীণ নৌ পরিবহন কর্তৃপক্ষ (BIWTA)", web: "https://biwta.gov.bd/" },
    ]
  },

  // ───── ট্যুরিস্ট স্পট ─────
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "মহাস্থানগড়, বগুড়া", web: "https://www.youtube.com/watch?v=nmU4J50C-LQ" },
      { name: "পাহাড়পুর বৌদ্ধ বিহার, নওগাঁ", web: "https://www.youtube.com/watch?v=9VTbMWUp_Tw" },
      { name: "পুঠিয়া রাজবাড়ী, রাজশাহী", web: "https://www.youtube.com/watch?v=bKWfE9edudo" },
      { name: "হার্ডিঞ্জ ব্রিজ, পাকশী (পাবনা)", web: "https://www.youtube.com/watch?v=U6WDOFuJCC8" },
      { name: "বরেন্দ্র গবেষণা জাদুঘর, রাজশাহী", web: "https://www.youtube.com/watch?v=cDfnZRfXRIA" },
      { name: "শাহ মখদুম মাজার, রাজশাহী", web: "https://www.youtube.com/watch?v=1HQBqWduhho" },
      { name: "চাঁপাইনবাবগঞ্জ আমবাগান ও ছোট সোনা মসজিদ", web: "https://www.youtube.com/watch?v=Btktg8yf4ms" },
      { name: "নাটোর রাজবাড়ী", web: "https://www.youtube.com/watch?v=B1UHMuUS05k" },
      { name: "রাজশাহী চিড়িয়াখানা", web: "https://www.youtube.com/watch?v=pI11QTWCgUY" },
      { name: "বঙ্গবন্ধু সেতু, সিরাজগঞ্জ", web: "https://www.youtube.com/watch?v=RQpgC5y_W-8" },
    ]
  },

  // ───── অ্যাম্বুলেন্স সার্ভিস ─────
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "রাজশাহী মেডিকেল অ্যাম্বুলেন্স সার্ভিস", web: "https://rmch.gov.bd" },
      { name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (রাজশাহী)", web: "https://www.bdrcs.org" },
      { name: "জাতীয় স্বাস্থ্য বাতায়ন (১৬২৬৩)", web: "https://16263.dghs.gov.bd/" },
      { name: "বগুড়া সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.facebook.com/p/%E0%A6%AC%E0%A6%97%E0%A7%81%E0%A7%9C%E0%A6%BE-%E0%A6%8F%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AD%E0%A6%BF%E0%A6%B8-100084815121722/" },
      { name: "পাবনা সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://hospital.pabna.gov.bd/pages/internal-eservices/697f66a4a31054345f198f43" },
    ]
  },

  // ───── ক্লিনিক ─────
  {
    name: "ক্লিনিক",
    items: [
      { name: "রাজশাহী মা ও শিশু কল্যাণ কেন্দ্র", web: "https://dgfp.gov.bd/pages/static-pages/6922df2f933eb65569e206fa" },
      { name: "রাজশাহী ডায়াবেটিক সমিতি হাসপাতাল", web: "https://doctoraidbd.com/bn/hospital/rajshahi-diabetic-association-general-hospital/" },
      { name: "বগুড়া মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.facebook.com/pages/%E0%A6%AE%E0%A6%BE-%E0%A6%93-%E0%A6%B6%E0%A6%BF%E0%A6%B6%E0%A7%81-%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A3-%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0-%E0%A6%AC%E0%A6%97%E0%A7%81%E0%A7%9C%E0%A6%BE/191991698199677" },
      { name: "পাবনা মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.facebook.com/p/%E0%A6%AE%E0%A6%BE-%E0%A6%93-%E0%A6%B6%E0%A6%BF%E0%A6%B6%E0%A7%81-%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%B2-%E0%A6%93-%E0%A6%A1%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%97%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%AC%E0%A6%A8%E0%A6%BE-100083542833618/" },
      { name: "নওগাঁ ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com/moderndiagnosticnaogaon/?locale=bn_IN" },
      { name: "সিরাজগঞ্জ ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com/nurjahanhospitalltd/?locale=bn_IN" },
    ]
  },

  // ───── ভেটেরিনারি সার্ভিস ─────
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "রাজশাহী জেলা প্রাণিসম্পদ অফিস", web: "https://rajshahi.gov.bd" },
      { name: "বগুড়া জেলা প্রাণিসম্পদ অফিস", web: "https://bogra.gov.bd" },
      { name: "পাবনা জেলা প্রাণিসম্পদ অফিস", web: "https://pabna.gov.bd" },
      { name: "সিরাজগঞ্জ জেলা প্রাণিসম্পদ অফিস", web: "https://sirajganj.gov.bd" },
      { name: "নওগাঁ জেলা প্রাণিসম্পদ অফিস", web: "https://naogaon.gov.bd" },
      { name: "ভেটেরিনারি ট্রেনিং ইনস্টিটিউট, বগুড়া", web: "https://www.facebook.com/p/%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AB-%E0%A6%B8%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%AD%E0%A7%87%E0%A6%9F%E0%A7%87%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A6%BF%E0%A6%82-%E0%A6%87%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F-%E0%A6%AD%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%86%E0%A6%87-100068251921241/" },
    ]
  },

  // ───── পানি সরবরাহ ─────
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "রাজশাহী ওয়াসা", web: "https://www.rwasa.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, রাজশাহী (DPHE)", web: "https://dphe.rajshahi.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, বগুড়া", web: "https://dphe.bogra.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, পাবনা", web: "https://dphe.pabna.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, সিরাজগঞ্জ", web: "https://dphe.sirajganj.gov.bd/" },
    ]
  },

  // ───── গ্যাস সরবরাহ ─────
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড (PGCL)", web: "https://pgcl.gov.bd/" },
      { name: "পেট্রোবাংলা (আঞ্চলিক অফিস, রাজশাহী)", web: "https://petrobangla.org.bd/" },
      { name: "তিতাস গ্যাস (সিরাজগঞ্জ)", web: "https://www.titasgas.org.bd" },
    ]
  },

  // ───── টেলিকম ─────
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন (রাজশাহী)", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক (রাজশাহী)", web: "https://www.banglalink.net" },
      { name: "রবি আজিয়াটা (রাজশাহী)", web: "https://www.robi.com.bd" },
      { name: "টেলিটক বাংলাদেশ (রাজশাহী)", web: "https://www.teletalk.com.bd" },
      { name: "বিটিসিএল (রাজশাহী)", web: "https://btcl.rajshahi.gov.bd/" },
    ]
  },

  // ───── বীমা ─────
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (রাজশাহী)", web: "https://jbc.gov.bd/pages/static-pages/6922dce9933eb65569e12b43" },
      { name: "সাধারণ বীমা কর্পোরেশন (রাজশাহী)", web: "https://sbc.gov.bd/" },
      { name: "মেঘনা লাইফ ইন্স্যুরেন্স (রাজশাহী)", web: "https://meghnalife.com/" },
      { name: "গ্রিন ডেল্টা ইন্স্যুরেন্স (রাজশাহী)", web: "https://green-delta.com/gd-branches/rajshahi-branch/" },
      { name: "ইসলামী কমার্শিয়াল ইন্স্যুরেন্স (রাজশাহী)", web: "https://www.islamiinsurance.com/page/branches" },
    ]
  },

  // ───── সমবায় ─────
  {
    name: "সমবায়",
    items: [
      { name: "রাজশাহী বিভাগীয় সমবায় অফিস", web: "https://coop.rajshahidiv.gov.bd/" },
      { name: "রাজশাহী জেলা সমবায় অফিস", web: "https://cooperative.rajshahi.gov.bd/" },
      { name: "বগুড়া জেলা সমবায় অফিস", web: "https://cooperative.bogra.gov.bd/" },
      { name: "পাবনা জেলা সমবায় অফিস", web: "https://cooperative.pabna.gov.bd/" },
      { name: "সিরাজগঞ্জ জেলা সমবায় অফিস", web: "https://cooperative.sirajganj.gov.bd/" },
      { name: "নওগাঁ জেলা সমবায় অফিস", web: "https://cooperative.naogaon.gov.bd/" },
    ]
  },

  // ───── ধর্মীয় স্থান ─────
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "শাহ মখদুম মাজার, রাজশাহী", web: "https://bangla.dhakatribune.com/bangladesh/42028/%E0%A6%A8%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%A8%E0%A6%BF%E0%A6%95-%E0%A6%B0%E0%A7%82%E0%A6%AA-%E0%A6%AA%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80%E0%A6%B0-%E0%A6%B6%E0%A6%BE%E0%A6%B9-%E0%A6%AE%E0%A6%96%E0%A6%A6%E0%A7%81%E0%A6%AE-%E0%A6%A6%E0%A6%B0%E0%A6%97%E0%A6%BE" },
      { name: "ছোট সোনা মসজিদ, চাঁপাইনবাবগঞ্জ", web: "https://vromonguide.com/place/choto-sona-mosque" },
      { name: "রাজশাহী কেন্দ্রীয় জামে মসজিদ", web: "https://www.google.com/search?q=%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80+%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A7%80%E0%A6%AF%E0%A6%BC+%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87+%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6&sca_esv=42110982d4b78428&sxsrf=ANbL-n5_cX-fYd7URK_w8aATwr5zR1YNcQ%3A1777607949871&ei=DSX0abLwNPGZseMPg6Wo8QU&biw=1366&bih=641&ved=0ahUKEwjyqpvTmZeUAxXxTGwGHYMSKl4Q4dUDCBM&uact=5&oq=%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80+%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A7%80%E0%A6%AF%E0%A6%BC+%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87+%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6&gs_lp=Egxnd3Mtd2l6LXNlcnAiUeCmsOCmvuCmnOCmtuCmvuCmueCngCDgppXgp4fgpqjgp43gpqbgp43gprDgp4Dgpq_gprwg4Kac4Ka-4Kau4KeHIOCmruCmuOCmnOCmv-CmpjIEECMYJzIGEAAYFhgeMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIFEAAY7wVIrhlQsQpYsQpwAngCkAEAmAF3oAF3qgEDMC4xuAEDyAEA-AEC-AEBmAIEoAKYAcICBBAAGEfCAgoQABhHGNYEGLADwgIOEAAY5AIY1gQYsAPYAQHCAhcQLhjcBhi4BhjaBhjYAhjIAxiwA9gBAZgDAIgGAZAGD7oGBggBEAEYCZIHAzMuMaAH6AayBwMwLjG4B4ABwgcFMi0zLjHIBxuACAE&sclient=gws-wiz-serp#fpstate=ive&vld=cid:4dfdf457,vid:jcUmCfQNxcg,st:0" },
      { name: "পুঠিয়া শিব মন্দির ও রাজবাড়ী মন্দির", web: "https://www.facebook.com/watch/?v=2044526172667697" },
      { name: "নাটোর রাজবাড়ী মন্দির", web: "https://www.google.com/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%9F%E0%A7%8B%E0%A6%B0+%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%AC%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A7%80+%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0&sca_esv=42110982d4b78428&biw=1366&bih=641&sxsrf=ANbL-n7cPbDagFSwabP6kaLIKgnUme7ZJw%3A1777607748826&ei=RCT0aYKRMv-RseMPg7Sw4AM&ved=0ahUKEwiCw6zzmJeUAxX_SGwGHQMaDDwQ4dUDCBM&uact=5&oq=%E0%A6%A8%E0%A6%BE%E0%A6%9F%E0%A7%8B%E0%A6%B0+%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%AC%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A7%80+%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiO-CmqOCmvuCmn-Cni-CmsCDgprDgpr7gppzgpqzgpr7gpqHgprzgp4Ag4Kau4Kao4KeN4Kam4Ka_4KawMgQQIxgnMggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMgUQABjvBTIFEAAY7wVI8w5QzwpYzwpwA3gAkAEAmAF_oAH2AaoBAzAuMrgBA8gBAPgBAvgBAZgCBKACowHCAgoQABhHGNYEGLADwgIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQGYAwCIBgGQBg66BgYIARABGBmSBwMzLjGgB9IbsgcDMC4xuAeLAcIHBTItMy4xyAccgAgB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:5b0b8269,vid:NbSqvKhQzZQ,st:0" },
      { name: "বগুড়া কেন্দ্রীয় মসজিদ", web: "https://www.facebook.com/watch/?v=3146839688828378" },
      { name: "পাবনা কেন্দ্রীয় মসজিদ", web: "https://www.facebook.com/giyanbitanofficial/posts/%E0%A6%AA%E0%A6%BE%E0%A6%AC%E0%A6%A8%E0%A6%BE-%E0%A6%95%E0%A6%BE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AA%E0%A6%BE%E0%A7%9C%E0%A6%BE-%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6-%E0%A6%A6%E0%A7%83%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A6%BF-%E0%A6%A8%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%A8-%E0%A6%8F%E0%A6%95-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6-%EF%B8%8F/1245548357371596/" },
      { name: "মহাস্থানগড় মাজার (বগুড়া)", web: "https://archaeology.gov.bd" },
    ]
  },

  // ───── জনপ্রতিনিধি ─────
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "রাজশাহী সিটি কর্পোরেশন", web: "https://erajshahi.portal.gov.bd/" },
      { name: "রাজশাহী জেলা পরিষদ", web: "https://rajshahi.gov.bd" },
      { name: "বগুড়া জেলা পরিষদ", web: "https://bogra.gov.bd" },
      { name: "পাবনা জেলা পরিষদ", web: "https://pabna.gov.bd" },
      { name: "সিরাজগঞ্জ জেলা পরিষদ", web: "https://sirajganj.gov.bd" },
      { name: "নওগাঁ জেলা পরিষদ", web: "https://naogaon.gov.bd" },
      { name: "নাটোর জেলা পরিষদ", web: "https://natore.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ জেলা পরিষদ", web: "https://chapainawabganj.gov.bd" },
      { name: "জয়পুরহাট জেলা পরিষদ", web: "https://joypurhat.gov.bd" },
      { name: "বাংলাদেশ নির্বাচন কমিশন (রাজশাহী)", web: "https://www.ecs.gov.bd" },
      { name: "জাতীয় সংসদ", web: "https://www.parliament.gov.bd" },
    ]
  },

  // ───── উপজেলা চেয়ারম্যান ─────
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "পবা উপজেলা পরিষদ (রাজশাহী)", web: "https://paba.rajshahi.gov.bd/" },
      { name: "চারঘাট উপজেলা পরিষদ (রাজশাহী)", web: "http://charghat.rajshahi.gov.bd" },
      { name: "বাগমারা উপজেলা পরিষদ (রাজশাহী)", web: "http://bagmara.rajshahi.gov.bd" },
      { name: "পুঠিয়া উপজেলা পরিষদ (রাজশাহী)", web: "http://puthia.rajshahi.gov.bd" },
      { name: "শেরপুর উপজেলা পরিষদ (বগুড়া)", web: "http://sherpur.bogra.gov.bd" },
      { name: "শাজাহানপুর উপজেলা পরিষদ (বগুড়া)", web: "http://shajahanpur.bogra.gov.bd" },
      { name: "সারিয়াকান্দি উপজেলা পরিষদ (বগুড়া)", web: "http://sariakandi.bogra.gov.bd" },
      { name: "ঈশ্বরদী উপজেলা পরিষদ (পাবনা)", web: "http://ishurdi.pabna.gov.bd" },
      { name: "সাঁথিয়া উপজেলা পরিষদ (পাবনা)", web: "http://santhia.pabna.gov.bd" },
      { name: "উল্লাপাড়া উপজেলা পরিষদ (সিরাজগঞ্জ)", web: "http://ullapara.sirajganj.gov.bd" },
      { name: "শাহজাদপুর উপজেলা পরিষদ (সিরাজগঞ্জ)", web: "http://shahjadpur.sirajganj.gov.bd" },
      { name: "মান্দা উপজেলা পরিষদ (নওগাঁ)", web: "http://manda.naogaon.gov.bd" },
      { name: "বদলগাছী উপজেলা পরিষদ (নওগাঁ)", web: "http://badalgachhi.naogaon.gov.bd" },
      { name: "গুরুদাসপুর উপজেলা পরিষদ (নাটোর)", web: "http://gurudaspur.natore.gov.bd" },
      { name: "সিংড়া উপজেলা পরিষদ (নাটোর)", web: "http://singra.natore.gov.bd" },
      { name: "শিবগঞ্জ উপজেলা পরিষদ (চাঁপাইনবাবগঞ্জ)", web: "http://shibganj.chapainawabganj.gov.bd" },
      { name: "পাঁচবিবি উপজেলা পরিষদ (জয়পুরহাট)", web: "http://panchbibi.joypurhat.gov.bd" },
      { name: "কালাই উপজেলা পরিষদ (জয়পুরহাট)", web: "http://kalai.joypurhat.gov.bd" },
    ]
  },
];

const RajshahiDivision = () => {
  const [selectedSub, setSelectedSub] = useState(subCategories[0]);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              transition: 'background 0.2s',
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`রাজশাহী বিভাগ - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default RajshahiDivision;