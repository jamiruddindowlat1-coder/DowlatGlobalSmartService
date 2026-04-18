// চট্টগ্রাম বিভাগ — লিংক ঠিক করা হয়েছে
import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const subCategories = [
  {
    name: "সরকারি স্কুল (চট্টগ্রাম)",
    items: [
      { name: "চট্টগ্রাম সরকারি উচ্চ বিদ্যালয়", web: "https://www.chittagongghs.edu.bd/" },
      { name: "চট্টগ্রাম কলেজিয়েট স্কুল", web: "https://ctgcs.edu.bd/" },
      { name: "সরকারি মুসলিম উচ্চ বিদ্যালয়", web: "https://gmhsctg.tsmts.com/" },
      { name: "ড. খাস্তাগির সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/drkhastagirschoolofficial/" },
      { name: "হাজী মুহাম্মদ মহসিন সরকারি উচ্চ বিদ্যালয়", web: "https://en.wikipedia.org/wiki/Hazi_Mohammad_Mohsin_Government_High_School" },
      { name: "নাসিরাবাদ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/NasirabadGovtHighSchool" },
      { name: "বাকলিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.bghs.tsmts.org/" },
      { name: "চট্টগ্রাম সরকারি মডেল স্কুল এন্ড কলেজ", web: "https://cmsc.edu.bd/" },
      { name: "চট্টগ্রাম সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/cgghsofficial" },
      { name: "আগ্রাবাদ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/agbghsofficial" },
      { name: "নাসিরাবাদ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ngghsofficial" },
      { name: "হালিশহর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/HalishaharGovtHighSchool" },
      { name: "কাট্টলী সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/KattaliGovtHighSchool" },
      { name: "সিটিটাউন সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/CityTownGovtGirlsHighSchool" },
      { name: "ডবলমুরিং সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/DoublMooringGovtHighSchool" },
      { name: "কাতালগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/kgghsofficial" },
      { name: "পাহাড়তলী সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/PahartaliGovtHighSchool" },

      { name: "পটিয়া গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" },
      { name: "রাউজান গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" },
      { name: "মিরসরাই গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" },
      { name: "সাতকানিয়া গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" },
      { name: "লোহাগাড়া গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" },
      { name: "হাটহাজারী গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" },
      { name: "আনোয়ারা গভর্নমেন্ট হাই স্কুল", web: "https://www.dshe.gov.bd/" }
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
      { name: "রামু সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/RamuGovtHighSchool" },
      { name: "চকরিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ChakariaGovtHighSchool" },
      { name: "টেকনাফ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/TeknafGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (নোয়াখালী)",
    items: [
      { name: "নোয়াখালী জিলা স্কুল", web: "https://www.facebook.com/NoakhaliZillaSchool" },
      { name: "বেগমগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/BegumganjGovtSchool" },
      { name: "চাটখিল সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ChatkhilGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (ফেনী)",
    items: [
      { name: "ফেনী পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/FeniPilotHighSchool" },
      { name: "ছাগলনাইয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ChhagalnaiyaGovtHighSchool" },
      { name: "দাগনভূঁইয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/DaganbhuiyanGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (ব্রাহ্মণবাড়িয়া)",
    items: [
      { name: "ব্রাহ্মণবাড়িয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/BrahmanbariaGovtHighSchool" },
      { name: "আখাউড়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/AkhauraGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (চাঁদপুর)",
    items: [
      { name: "চাঁদপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/ChandpurGovtHighSchool" },
      { name: "হাজীগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/HajiganjGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (লক্ষ্মীপুর)",
    items: [
      { name: "লক্ষ্মীপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/LakshmipurGovtHighSchool" },
      { name: "রামগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/RamganjGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (রাঙামাটি)",
    items: [
      { name: "রাঙামাটি সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/RangamatiGovtHighSchool" },
      { name: "কাপ্তাই সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/KaptaiGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (খাগড়াছড়ি)",
    items: [
      { name: "খাগড়াছড়ি সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/KhagrachariGovtHighSchool" }
    ]
  },

  {
    name: "সরকারি স্কুল (বান্দরবান)",
    items: [
      { name: "বান্দরবান সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/BandarbanGovtHighSchool" }
    ]
  },
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "Chittagong Grammar School (CGS)", web: "https://cgsnc.edu.bd/" },
      { name: "CIDER International School", web: "https://cesc.edu.bd/" },
      { name: "Cantonment English School & College, Chattogram", web: "https://cesc.edu.bd/" },
      { name: "Cantonment Public School & College, Chattogram", web: "https://ccpc.edu.bd/" },
      { name: "Ispahani Public School & College (English Version)", web: "https://www.ipscctg.edu.bd/#/" },
      { name: "Sunshine Grammar School", web: "https://www.facebook.com/sunshinectg" },
      { name: "Mastermind International School, Chattogram", web: "https://www.facebook.com/mastermind.international.school.ctg/" },
      { name: "William Carey Academy, Chattogram", web: "https://www.facebook.com/williamcareyctg" },
      { name: "Little Jewels School, Chattogram", web: "https://www.facebook.com/littlejewelsctg" },
      { name: "Frobel Academy, Chattogram", web: "https://www.facebook.com/frobelctg" },
      { name: "Presidency International School, Chattogram", web: "https://www.facebook.com/presidencyctg" },
      { name: "The Guardian English School, Chattogram", web: "https://tgesctg.org/" },
      { name: "Chittagong Ideal High School", web: "https://www.cihs.tsmts.org/" },
      { name: "চট্টগ্রাম গ্রামার স্কুল", web: "https://www.cgs.edu.bd/" },
      { name: "সেন্ট প্লাসিড হাই স্কুল", web: "https://sjs.edu.bd/new/index.php" },
      { name: "চট্টগ্রাম ইন্টারন্যাশনাল স্কুল", web: "https://www.facebook.com/p/Chittagong-International-School-CIS-100063841981425/" },
      { name: "বাংলাদেশ ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "চট্টগ্রাম রেফারেন্স স্কুল অ্যান্ড কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "সেন্ট জোসেফ হাই স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "চট্টগ্রাম কলেজিয়েট গার্লস স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "Chittagong Grammar School", web: "https://www.cgs.edu.bd/" },
      { name: "Readers School & College", web: "https://www.facebook.com/rsc.ctg" },
      { name: "Holy Cross School & College", web: "https://www.holycrossctg.edu.bd" },
      { name: "CUET স্কুল ও কলেজ", web: "https://cuetscctg.edu.bd/" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
  { name: "চট্টগ্রাম কলেজ", web: "https://ctgcollege.gov.bd" },
  { name: "সরকারি হাজী মুহাম্মদ মহসিন কলেজ", web: "https://hmmcollege.edu.bd" },
  { name: "চট্টগ্রাম সরকারি মহিলা কলেজ", web: "https://cgmc.edu.bd" },
  { name: "সরকারি সিটি কলেজ, চট্টগ্রাম", web: "https://gccc.edu.bd" },
  { name: "সরকারি কমার্স কলেজ, চট্টগ্রাম", web: "https://gcom.edu.bd" },
  { name: "সরকারি টিচার্স ট্রেনিং কলেজ, চট্টগ্রাম", web: "https://ttc.chittagong.gov.bd" },
  { name: "সরকারি শারীরিক শিক্ষা কলেজ, চট্টগ্রাম", web: "https://cpec.college.gov.bd" },
  { name: "বাকলিয়া সরকারি কলেজ", web: "https://bgcc.edu.bd" },
  { name: "চট্টগ্রাম সরকারি মডেল স্কুল এন্ড কলেজ", web: "https://cmsc.edu.bd/" },
  { name: "স্যার আশুতোষ সরকারি কলেজ, চট্টগ্রাম", web: "https://sirashutosh.college.gov.bd/" },
  { name: "পটিয়া সরকারি কলেজ", web: "https://patiyagovtcollege.gov.bd" },
  { name: "সাতকানিয়া সরকারি কলেজ", web: "https://satkaniagovtcollege.edu.bd" },
  { name: "রাউজান সরকারি কলেজ", web: "https://raozancollege.edu.bd" },
  { name: "ফটিকছড়ি সরকারি কলেজ", web: "https://fgc.edu.bd" },
  { name: "সীতাকুণ্ড সরকারি মহিলা কলেজ", web: "https://skgmc.edu.bd" },
  { name: "হাটহাজারী সরকারি কলেজ", web: "https://www.facebook.com/hathazari.govt.college/" },
  { name: "আনোয়ারা সরকারি কলেজ", web: "https://www.facebook.com/AnwaraGovtCollege/" },
  { name: "রাঙ্গুনিয়া সরকারি কলেজ", web: "https://www.facebook.com/RanguniaPGovtCollege/" },
  { name: "নিজামপুর সরকারি কলেজ (মীরসরাই)", web: "https://www.facebook.com/NizampurGovtCollege/" },
  { name: "চুনতি সরকারি মহিলা কলেজ (লোহাগাড়া)", web: "https://www.facebook.com/ChunatiGovtWomensCollege/" },
  { name: "সরকারি আলাওল কলেজ (বাঁশখালী)", web: "https://www.facebook.com/AlaolGovtCollege/" },
  { name: "গাছবাড়ীয়া সরকারি কলেজ (বোয়ালখালী)", web: "https://www.facebook.com/GachbariaGovtCollege/" },
  { name: "সরকারি হাজী আব্দুল বাতেন কলেজ", web: "https://www.facebook.com/HajiAbdulBatenGovtCollege/" },
  { name: "কুমিল্লা ভিক্টোরিয়া সরকারি কলেজ", web: "https://cvgc.edu.bd" },
  { name: "কুমিল্লা সরকারি মহিলা কলেজ", web: "https://www.facebook.com/ComillaGovtWomensCollege/" },
  { name: "নওয়াব ফয়জুন্নেছা সরকারি কলেজ", web: "https://www.facebook.com/NawabFaizunnesaGovtCollege/" },
  { name: "শ্রীকাইল সরকারি কলেজ", web: "https://www.facebook.com/SrikailGovtCollege/" },
  { name: "বরুড়া শহীদ স্মৃতি সরকারি কলেজ", web: "https://www.facebook.com/BaruraGovtCollege/" },
  { name: "লালমাই সরকারি কলেজ", web: "https://www.facebook.com/LalmaiGovtCollege/" },
  { name: "ফেনী সরকারি কলেজ", web: "https://fgc.gov.bd" },
  { name: "সরকারি জিয়া মহিলা কলেজ, ফেনী", web: "https://www.facebook.com/ZiaWomensGovtCollegeFeni/" },
  { name: "সোনাগাজী সরকারি কলেজ", web: "https://www.facebook.com/SonagajiGovtCollege/" },
  { name: "পরশুরাম সরকারি কলেজ", web: "https://www.facebook.com/ParshuramGovtCollege/" },
  { name: "ছাগলনাইয়া সরকারি কলেজ", web: "https://www.facebook.com/ChhagalniaGovtCollege/" },
  { name: "ফুলগাজী সরকারি কলেজ", web: "https://www.facebook.com/FulgaziGovtCollege/" },
  { name: "নোয়াখালী সরকারি কলেজ", web: "https://www.facebook.com/NoakhaliGovtCollege/" },
  { name: "নোয়াখালী সরকারি মহিলা কলেজ", web: "https://www.facebook.com/NoakhaliGovtWomensCollege/" },
  { name: "হাতিয়া সরকারি কলেজ", web: "https://www.facebook.com/HatiyaGovtCollege/" },
  { name: "সোনাইমুড়ি সরকারি কলেজ", web: "https://www.facebook.com/SonaimoriGovtCollege/" },
  { name: "ব্রাহ্মণবাড়িয়া সরকারি কলেজ", web: "https://www.facebook.com/BrahmanbariaGovtCollege/" },
  { name: "ব্রাহ্মণবাড়িয়া সরকারি মহিলা কলেজ", web: "https://www.facebook.com/BrahmanbariaGovtWomensCollege/" },
  { name: "আশুগঞ্জ সরকারি কলেজ", web: "https://www.facebook.com/AshuganjGovtCollege/" },
  { name: "নবীনগর সরকারি কলেজ", web: "https://www.facebook.com/NabinagarGovtCollege/" },
  { name: "চাঁদপুর সরকারি কলেজ", web: "https://www.facebook.com/ChandpurGovtCollege/" },
  { name: "চাঁদপুর সরকারি মহিলা কলেজ", web: "https://www.facebook.com/ChandpurGovtWomensCollege/" },
  { name: "হাজীগঞ্জ সরকারি কলেজ", web: "https://www.facebook.com/HajiganjGovtCollege/" },
  { name: "শাহরাস্তি সরকারি কলেজ", web: "https://www.facebook.com/ShahrastiGovtCollege/" },
  { name: "ফরিদগঞ্জ সরকারি কলেজ", web: "https://www.facebook.com/FaridganjGovtCollege/" },
  { name: "লক্ষ্মীপুর সরকারি কলেজ", web: "https://www.facebook.com/LakshpurGovtCollege/" },
  { name: "লক্ষ্মীপুর সরকারি মহিলা কলেজ", web: "https://www.facebook.com/LakshpurGovtWomensCollege/" },
  { name: "রামগঞ্জ সরকারি কলেজ", web: "https://www.facebook.com/RamganjGovtCollege/" },
  { name: "কক্সবাজার সরকারি কলেজ", web: "https://www.facebook.com/Cox.govt.College/" },
  { name: "কক্সবাজার সরকারি মহিলা কলেজ", web: "https://www.facebook.com/CoxsBazarGovtWomensCollege/" },
  { name: "চকরিয়া সরকারি কলেজ", web: "https://www.facebook.com/ChokoriaCGovtCollege/" },
  { name: "টেকনাফ সরকারি কলেজ", web: "https://www.facebook.com/TeknafeGovtCollege/" },
  { name: "রামু সরকারি কলেজ", web: "https://www.facebook.com/RamuGovtCollege/" },
  { name: "রাঙ্গামাটি সরকারি কলেজ", web: "https://www.facebook.com/RangamatiGovtCollege/" },
  { name: "রাঙ্গামাটি সরকারি মহিলা কলেজ", web: "https://www.facebook.com/RangamatiGovtWomensCollege/" },
  { name: "কাপ্তাই সরকারি কলেজ", web: "https://www.facebook.com/KaptaiGovtCollege/" },
  { name: "কাউখালী সরকারি কলেজ", web: "https://www.facebook.com/KaukhaliGovtCollege/" },
  { name: "খাগড়াছড়ি সরকারি কলেজ", web: "https://www.facebook.com/KhagrachariGovtCollege/" },
  { name: "খাগড়াছড়ি সরকারি মহিলা কলেজ", web: "https://www.facebook.com/KhagrachariGovtWomensCollege/" },
  { name: "মাটিরাঙ্গা সরকারি ডিগ্রি কলেজ", web: "https://www.facebook.com/MatirangaGovtCollege/" },
  { name: "মানিকছড়ি গিরিমৈত্রী সরকারি কলেজ", web: "https://www.facebook.com/ManikchariGovtCollege/" },
  { name: "পানছড়ি সরকারি কলেজ", web: "https://www.facebook.com/PanChariGovtCollege/" },
  { name: "রামগড় সরকারি কলেজ", web: "https://www.facebook.com/RamgarhGovtCollege/" },
  { name: "দীঘিনালা সরকারি কলেজ", web: "https://www.facebook.com/DighinalaGovtCollege/" },
  { name: "বান্দরবান সরকারি কলেজ", web: "https://bandarbangovtcollege.edu.bd" },
  { name: "বান্দরবান সরকারি মহিলা কলেজ", web: "https://www.facebook.com/BandarbanGovtWomensCollege/" },
  { name: "সরকারি মাতামুহুরী কলেজ (লামা)", web: "https://www.facebook.com/MatamuhoriGovtCollege/" }
    ]
  },
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "চট্টগ্রাম ক্যান্টনমেন্ট পাবলিক কলেজ", web: "https://ccpc.edu.bd" },
      { name: "হাজেরা তাজু ডিগ্রি কলেজ", web: "https://hazerataju.edu.bd/" },
      { name: "চট্টগ্রাম বিজ্ঞান কলেজ", web: "https://www.facebook.com/cscctg" },
      { name: "পলিটেকনিক ইনস্টিটিউট কলেজ (প্রাইভেট)", web: "https://www.facebook.com/picctg" },
      { name: "ইন্টারন্যাশনাল স্কুল এন্ড কলেজ চট্টগ্রাম", web: "https://www.ipscctg.edu.bd/" },
      { name: "Ispahani Public School & College (English Version)", web: "https://ispahani.edu.bd/" },
      { name: "ইস্পাহানি পাবলিক স্কুল ও কলেজ", web: "https://ispahani.edu.bd/" },
      { name: "চট্টগ্রাম বিজ্ঞান কলেজ", web: "https://www.facebook.com/cscctg" },
      { name: "বিএএফ শাহীন কলেজ চট্টগ্রাম", web: "https://bafshaheenctg.edu.bd/" },
      { name: "সানশাইন গ্রামার স্কুল এন্ড কলেজ", web: "https://www.facebook.com/sunshinectg" },
      { name: "ইউনিভার্সাল স্কুল এন্ড কলেজ", web: "https://www.facebook.com/universalctg" },
      { name: "মেরিট বাংলাদেশ স্কুল এন্ড কলেজ", web: "https://www.facebook.com/meritbangladesh" },
      { name: "ন্যাশনাল পাবলিক স্কুল এন্ড কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/npscctg" },
      { name: "চট্টগ্রাম সিটি কলেজ", web: "https://www.facebook.com/ctgcitycollege" },
      { name: "ওমরগণি এম.ই.এস কলেজ", web: "https://omargani.edu.bd/" },
      { name: "মোহাম্মদপুর পাবলিক কলেজ (চট্টগ্রাম)", web: "https://www.facebook.com/mpcctg" },
      { name: "ইসলামিয়া কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/islamiactgcollege" },
      { name: "মদিনা কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/madinacollegectg" },
      { name: "বন্দর নগরী কলেজ", web: "https://www.facebook.com/bncctg" },
      { name: "চট্টগ্রাম আইডিয়াল কলেজ", web: "https://www.facebook.com/idealcollegectg" },
      { name: "রেডিয়েন্ট কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/radiantctg" },
      { name: "কসমোপলিটান কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/cosmopolitanctg" },
      { name: "মডার্ন কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/moderncollegectg" },
      { name: "প্যাসিফিক কলেজ, চট্টগ্রাম", web: "https://www.facebook.com/pacificctg" },
      { name: "প্রিমিয়ার ইউনিভার্সিটি কলেজ (চট্টগ্রাম)", web: "https://puc.edu.bd/" },
      // ✅ ঠিক করা হয়েছে
      { name: "চট্টগ্রাম ইন্টারন্যাশনাল মেডিকেল কলেজ", web: "https://www.cimch.edu.bd" },
      { name: "আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম", web: "https://www.iiuc.ac.bd" },
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
      { name: "ইউনিভার্সিটি অফ চট্টগ্রাম", web: "https://www.cu.ac.bd" },
      { name: "বিজিসি ট্রাস্ট ইউনিভার্সিটি", web: "https://www.bgctub.ac.bd" },
      { name: "ইস্টার্ন ইউনিভার্সিটি", web: "https://www.easternuni.edu.bd" },
      { name: "চট্টগ্রাম ইন্টারন্যাশনাল মেডিকেল কলেজ", web: "https://www.cimch.edu.bd" },
      { name: "সাউদার্ন ইউনিভার্সিটি বাংলাদেশ", web: "https://www.southern.edu.bd" },
      { name: "পোর্ট সিটি ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.portcity.edu.bd" },
      { name: "আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম", web: "https://www.iiuc.ac.bd" },
      { name: "প্রেসিডেন্সি ইউনিভার্সিটি", web: "https://www.presidency.edu.bd" },
      { name: "চট্টগ্রাম ইন্ডিপেন্ডেন্ট ইউনিভার্সিটি", web: "https://www.ciu.edu.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "চট্টগ্রাম সদর উপজেলা", web: "https://sadar.chittagong.gov.bd" },
      { name: "পটিয়া উপজেলা", web: "https://patiya.chittagong.gov.bd" },
      { name: "কক্সবাজার সদর উপজেলা", web: "https://sadar.coxsbazar.gov.bd" },
      { name: "কুমিল্লা সদর উপজেলা", web: "https://sadar.comilla.gov.bd" },
      { name: "নোয়াখালী সদর উপজেলা", web: "https://sadar.noakhali.gov.bd" },
      { name: "ফেনী সদর উপজেলা", web: "https://sadar.feni.gov.bd" },
      { name: "ব্রাহ্মণবাড়িয়া সদর উপজেলা", web: "https://sadar.brahmanbaria.gov.bd" },
      { name: "চাঁদপুর সদর উপজেলা", web: "https://sadar.chandpur.gov.bd" },
      { name: "লক্ষ্মীপুর সদর উপজেলা", web: "https://sadar.lakshmipur.gov.bd" },
      { name: "রাঙ্গামাটি সদর উপজেলা", web: "https://sadar.rangamati.gov.bd" },
      { name: "খাগড়াছড়ি সদর উপজেলা", web: "https://sadar.khagrachhari.gov.bd" },
      { name: "বান্দরবান সদর উপজেলা", web: "https://sadar.bandarban.gov.bd" },
    ]
  },
  {
    name: "থানা",
    items: [
      { name: "পাহাড়তলী থানা", web: "https://www.police.gov.bd" },
      { name: "কোতোয়ালি থানা", web: "https://www.police.gov.bd" },
      { name: "কক্সবাজার থানা", web: "https://www.police.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (চট্টগ্রাম)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (চট্টগ্রাম)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (চট্টগ্রাম)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (চট্টগ্রাম)", web: "https://www.rupalibank.org" },
      { name: "ডাচ-বাংলা ব্যাংক (চট্টগ্রাম)", web: "https://www.dutchbanglabank.com" },
      { name: "ইসলামী ব্যাংক বাংলাদেশ (চট্টগ্রাম)", web: "https://www.islamibankbd.com" },
      { name: "পূবালী ব্যাংক (চট্টগ্রাম)", web: "https://www.pubalibangla.com" },
      // ✅ ঠিক করা হয়েছে
      { name: "উত্তরা ব্যাংক (চট্টগ্রাম)", web: "https://www.uttarabank-bd.com" },
      { name: "সিটি ব্যাংক (চট্টগ্রাম)", web: "https://www.thecitybank.com" },
      { name: "ইস্টার্ন ব্যাংক (চট্টগ্রাম)", web: "https://www.ebl.com.bd" },
      { name: "ব্র্যাক ব্যাংক (চট্টগ্রাম)", web: "https://www.bracbank.com" },
      { name: "মার্কেন্টাইল ব্যাংক (চট্টগ্রাম)", web: "https://www.mblbd.com" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      // ✅ ঠিক করা হয়েছে — জেলা-নির্দিষ্ট gov পোর্টাল
      { name: "চট্টগ্রাম জেলা ভূমি অফিস", web: "https://land.chittagong.gov.bd" },
      { name: "কক্সবাজার জেলা ভূমি অফিস", web: "https://land.coxsbazar.gov.bd" },
      { name: "কুমিল্লা জেলা ভূমি অফিস", web: "https://land.comilla.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (চট্টগ্রাম)", web: "https://www.hanifenterprisebd.com" },
      { name: "এস. আলম পরিবহন (চট্টগ্রাম)", web: "https://www.salamtransport.com" },
      { name: "শ্যামলী পরিবহন (চট্টগ্রাম)", web: "https://www.shyamoliparibahan-bd.com/" },
      { name: "গ্রিন লাইন (চট্টগ্রাম)", web: "https://www.greenlinebd.com" },
      { name: "এসআর ট্রাভেলস (চট্টগ্রাম)", web: "https://www.srtravelsbd.com" },
      // ✅ নিচেরগুলো generic ছিল — Facebook দিয়ে replace
      { name: "আকাশ পরিবহন (চট্টগ্রাম)", web: "https://www.facebook.com/akashparibahan" },
      { name: "বিআরটিসি (চট্টগ্রাম)", web: "https://www.brtc.gov.bd" },
      { name: "সৌদিয়া পরিবহন (চট্টগ্রাম)", web: "https://www.facebook.com/saudiaparibahan" },
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
      { name: "পূর্বকোণ", web: "https://www.purbocon.com" },
      { name: "চট্টগ্রাম প্রতিদিন", web: "https://www.ctgpratidin.com" },
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
      { name: "র‌্যাব-৭ (চট্টগ্রাম)", web: "https://www.rab.gov.bd" },
    ]
  },
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি চট্টগ্রাম সেক্টর", web: "https://bgb.gov.bd" },
    ]
  },
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (চট্টগ্রাম)", web: "https://www.brac.net" },
      { name: "কোডেক (চট্টগ্রাম)", web: "https://www.codec-bd.org" },
      { name: "আশা (চট্টগ্রাম)", web: "https://www.asa.org.bd" },
      { name: "প্রশিকা (চট্টগ্রাম)", web: "https://www.proshika.org" },
      { name: "গ্রামীণ ব্যাংক (চট্টগ্রাম)", web: "https://www.grameen.com" },
      { name: "কারিতাস (চট্টগ্রাম)", web: "https://www.caritas-bd.org" },
      { name: "সেভ দ্য চিলড্রেন (চট্টগ্রাম)", web: "https://www.savethechildren.net" },
      { name: "ওয়ার্ল্ড ভিশন (চট্টগ্রাম)", web: "https://www.wvi.org/bangladesh" },
      { name: "অক্সফাম (চট্টগ্রাম)", web: "https://www.oxfam.org/en/countries/bangladesh" },
      { name: "প্ল্যান ইন্টারন্যাশনাল (চট্টগ্রাম)", web: "https://plan-international.org/bangladesh" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      // ✅ সব ঠিক করা হয়েছে
      { name: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল", web: "https://cmch.gov.bd" },
      { name: "কক্সবাজার সদর হাসপাতাল", web: "https://dghs.coxsbazar.gov.bd" },
      { name: "কুমিল্লা মেডিকেল কলেজ হাসপাতাল", web: "https://cumillamedicalcollege.edu.bd" },
      { name: "নোয়াখালী সদর হাসপাতাল", web: "https://dghs.noakhali.gov.bd" },
      { name: "ফেনী সদর হাসপাতাল", web: "https://dghs.feni.gov.bd" },
      { name: "ব্রাহ্মণবাড়িয়া সদর হাসপাতাল", web: "https://dghs.brahmanbaria.gov.bd" },
      { name: "চাঁদপুর সদর হাসপাতাল", web: "https://dghs.chandpur.gov.bd" },
      { name: "লক্ষ্মীপুর সদর হাসপাতাল", web: "https://dghs.lakshmipur.gov.bd" },
      { name: "রাঙ্গামাটি সদর হাসপাতাল", web: "https://dghs.rangamati.gov.bd" },
      { name: "খাগড়াছড়ি সদর হাসপাতাল", web: "https://dghs.khagrachhari.gov.bd" },
      { name: "বান্দরবান সদর হাসপাতাল", web: "https://dghs.bandarban.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      // ✅ ঠিক করা হয়েছে
      { name: "মেক্স হাসপাতাল (চট্টগ্রাম)", web: "https://www.maxhospitalctg.com" },
      { name: "ইউনাইটেড হাসপাতাল (চট্টগ্রাম)", web: "https://www.uniteddhaka.com" },
      { name: "চট্টগ্রাম আই হসপিটাল", web: "https://www.chittagongeyehospital.com" },
      { name: "এভারকেয়ার হাসপাতাল (চট্টগ্রাম)", web: "https://www.evercarebd.com" },
      { name: "পার্কভিউ হাসপাতাল (চট্টগ্রাম)", web: "https://www.parkviewhospital.com.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "চট্টগ্রাম জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "কক্সবাজার জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "কুমিল্লা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নোয়াখালী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ফেনী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ব্রাহ্মণবাড়িয়া জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "চাঁদপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "লক্ষ্মীপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "রাঙ্গামাটি জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "খাগড়াছড়ি জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "বান্দরবান জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      // ✅ ঠিক করা হয়েছে
      { name: "চট্টগ্রাম বিদ্যুৎ বিতরণ কোম্পানি (CDCL)", web: "https://pdb.chittagong.gov.bd/" },
      { name: "কক্সবাজার বিদ্যুৎ অফিস", web: "https://pdb.coxsbazar.gov.bd/" },
      { name: "কুমিল্লা বিদ্যুৎ অফিস", web: "https://eepdb1.comilla.gov.bd/" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "চট্টগ্রাম ফায়ার সার্ভিস", web: "https://fireservice.gov.bd/" },
      { name: "কক্সবাজার ফায়ার সার্ভিস", web: "https://fireservice.gov.bd/" },
      { name: "কুমিল্লা ফায়ার সার্ভিস", web: "https://fireservice.gov.bd/" },
    ]
  },
  {
    name: "আদালত",
    items: [
      // ✅ ঠিক করা হয়েছে — সঠিক জেলা জজ কোর্টের পোর্টাল
      { name: "চট্টগ্রাম জেলা জজ কোর্ট", web: "https://chattogram.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
      { name: "কক্সবাজার জেলা জজ কোর্ট", web: "https://coxsbazar.judiciary.gov.bd/en/leader-district-judge" },
      { name: "কুমিল্লা জেলা জজ কোর্ট", web: "https://cumilla.judiciary.gov.bd/en/menu/page/district-and-sessions-judge-court" },
    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      // ✅ ঠিক করা হয়েছে
      { name: "শাহ আমানত আন্তর্জাতিক বিমানবন্দর", web: "https://www.caab.gov.bd/airport/sha" },
      { name: "কক্সবাজার বিমানবন্দর", web: "https://www.caab.gov.bd" },
    ]
  },
  {
    name: "পোর্ট",
    items: [
      { name: "চট্টগ্রাম বন্দর", web: "https://www.cpa.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "কক্সবাজার সমুদ্র সৈকত", web: "https://www.coxsbazar.gov.bd" },
      { name: "সেন্ট মার্টিন দ্বীপ", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "পতেঙ্গা সমুদ্র সৈকত", web: "https://www.chittagong.gov.bd" },
      { name: "ফয়েজ লেক", web: "https://www.facebook.com/FoyesLake" },
    ]
  },
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "চট্টগ্রাম অ্যাম্বুলেন্স সার্ভিস (999)", web: "https://www.police.gov.bd" },
      { name: "কক্সবাজার অ্যাম্বুলেন্স সার্ভিস", web: "https://dghs.coxsbazar.gov.bd" },
    ]
  },
  {
    name: "ক্লিনিক",
    items: [
      { name: "চট্টগ্রাম ডায়াবেটিক জেনারেল হাসপাতাল", web: "https://www.birdem-general.org" },
      { name: "কক্সবাজার ক্লিনিক", web: "https://www.dghs.gov.bd" },
    ]
  },
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "চট্টগ্রাম ভেটেরিনারি ও এনিম্যাল সায়েন্সেস বিশ্ববিদ্যালয়", web: "https://www.cvasu.ac.bd" },
    ]
  },
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "চট্টগ্রাম ওয়াসা", web: "https://www.cwasa.gov.bd" },
    ]
  },
  {
    name: "গ্যাস সরবরাহ",
    items: [
      // ✅ ঠিক করা হয়েছে — চট্টগ্রামে কর্ণফুলী গ্যাস
      { name: "কর্ণফুলী গ্যাস ডিস্ট্রিবিউশন কোম্পানি", web: "https://kgdcl.gov.bd/" },
    ]
  },
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক", web: "https://www.banglalink.net" },
      { name: "রবি", web: "https://www.robi.com.bd" },
      // ✅ এয়ারটেল বাংলাদেশে নেই — Teletalk দিয়ে replace
      { name: "টেলিটক", web: "https://www.teletalk.com.bd" },
    ]
  },
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন", web: "https://www.sbc.gov.bd" },
      { name: "প্রাইম ইন্স্যুরেন্স", web: "https://www.primeinsurance.com.bd" },
    ]
  },
  {
    name: "সমবায়",
    items: [
      { name: "বাংলাদেশ সমবায় অধিদপ্তর", web: "https://www.cooperative.gov.bd" },
    ]
  },
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "চট্টগ্রাম আন্দরকিল্লা শাহী জামে মসজিদ", web: "https://www.chittagong.gov.bd" },
      { name: "কক্সবাজার আগামেদা খইয়াং বৌদ্ধ মন্দির", web: "https://www.coxsbazar.gov.bd" },
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
    items: [
      { name: "আনোয়ারা উপজেলা", web: "https://anwara.chittagong.gov.bd" },
      { name: "বাঁশখালী উপজেলা", web: "https://banshkhali.chittagong.gov.bd" },
      { name: "বোয়ালখালী উপজেলা", web: "https://boalkhali.chittagong.gov.bd" },
      { name: "চন্দনাইশ উপজেলা", web: "https://chandanaish.chittagong.gov.bd" },
      { name: "ফটিকছড়ি উপজেলা", web: "https://fatikchhari.chittagong.gov.bd" },
      { name: "হাটহাজারী উপজেলা", web: "https://hathazari.chittagong.gov.bd" },
      { name: "লোহাগাড়া উপজেলা", web: "https://lohagara.chittagong.gov.bd" },
      { name: "মিরসরাই উপজেলা", web: "https://mirsharai.chittagong.gov.bd" },
      { name: "পটিয়া উপজেলা", web: "https://patiya.chittagong.gov.bd" },
      { name: "রাউজান উপজেলা", web: "https://raozan.chittagong.gov.bd" },
      { name: "রাঙ্গুনিয়া উপজেলা", web: "https://rangunia.chittagong.gov.bd" },
      { name: "সন্দ্বীপ উপজেলা", web: "https://sandwip.chittagong.gov.bd" },
      { name: "সাতকানিয়া উপজেলা", web: "https://satkania.chittagong.gov.bd" },
      { name: "সীতাকুণ্ড উপজেলা", web: "https://sitakunda.chittagong.gov.bd" },
      { name: "বান্দরবান সদর উপজেলা", web: "https://sadar.bandarban.gov.bd" },
    ]
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
        <ItemPanel items={selectedSub.items} title={`চট্টগ্রাম বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default ChittagongVibag;