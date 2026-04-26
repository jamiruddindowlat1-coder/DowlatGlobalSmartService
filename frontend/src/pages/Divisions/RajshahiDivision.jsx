import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#2c3e50";
const ICON = "🏯";

const subCategories = [
  // ───── সরকারি স্কুল (জেলা-ভিত্তিক) ─────
  {
    name: "সরকারি স্কুল (রাজশাহী)",
    items: [
      { name: "রাজশাহী কলেজিয়েট স্কুল", web: "https://rcs.edu.bd" },
      { name: "রাজশাহী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://rggs.edu.bd" },
      { name: "রাজশাহী পি এন সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://pngghs.edu.bd" },
      { name: "গভর্নমেন্ট ল্যাবরেটরি হাই স্কুল, রাজশাহী", web: "https://dshe.gov.bd" },
      { name: "লোকনাথ সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মতিহার সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পবা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "চারঘাট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (বগুড়া)",
    items: [
      { name: "বগুড়া জিলা স্কুল", web: "https://bograillaschool.edu.bd" },
      { name: "বগুড়া সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://vmschool.edu.bd" },
      { name: "শেরপুর সরকারি পাইলট উচ্চ বিদ্যালয় (বগুড়া)", web: "https://dshe.gov.bd" },
      { name: "শাজাহানপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সারিয়াকান্দি সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ধুনট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (পাবনা)",
    items: [
      { name: "পাবনা জিলা স্কুল", web: "https://pabnazillaschool.edu.bd" },
      { name: "পাবনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://pabnagghs.edu.bd" },
      { name: "ঈশ্বরদী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সাঁথিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "আটঘরিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (সিরাজগঞ্জ)",
    items: [
      { name: "সিরাজগঞ্জ সরকারি বি. এল. উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সিরাজগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "উল্লাপাড়া সরকারি পাইলট উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "শাহজাদপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "তাড়াশ সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (নওগাঁ)",
    items: [
      { name: "নওগাঁ জিলা স্কুল", web: "https://naogaoillaschool.edu.bd" },
      { name: "নওগাঁ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মান্দা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "রাণীনগর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "বদলগাছী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (নাটোর)",
    items: [
      { name: "নাটোর সরকারি বালক উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নাটোর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "বাগাতিপাড়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "গুরুদাসপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সিংড়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (চাঁপাইনবাবগঞ্জ)",
    items: [
      { name: "হরিমোহন সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "শিবগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নাচোল সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (জয়পুরহাট)",
    items: [
      { name: "জয়পুরহাট সরকারি রামদেও বাজলা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "জয়পুরহাট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পাঁচবিবি সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "কালাই সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── বেসরকারি স্কুল ─────
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "রাজশাহী ক্যাডেট কলেজ", web: "https://dshe.gov.bd" },
      { name: "রাজশাহী গভর্নমেন্ট মডেল স্কুল", web: "https://dshe.gov.bd" },
      { name: "বগুড়া ক্যান্টনমেন্ট পাবলিক স্কুল", web: "https://dshe.gov.bd" },
      { name: "সেন্ট যোসেফ স্কুল, বগুড়া", web: "https://dshe.gov.bd" },
      { name: "পাবনা ক্যাডেট কলেজ", web: "https://dshe.gov.bd" },
      { name: "সিরাজগঞ্জ আদর্শ উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নওগাঁ আদর্শ উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── সরকারি কলেজ ─────
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "রাজশাহী কলেজ", web: "https://rc.edu.bd" },
      { name: "রাজশাহী সরকারি মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "সরকারি আজিজুল হক কলেজ, বগুড়া", web: "https://gahc.edu.bd" },
      { name: "বগুড়া সরকারি মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "এডওয়ার্ড কলেজ, পাবনা", web: "https://pec.edu.bd" },
      { name: "পাবনা সরকারি মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "সিরাজগঞ্জ সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "নওগাঁ সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "নাটোর সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "জয়পুরহাট সরকারি কলেজ", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── বেসরকারি কলেজ ─────
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "রাজশাহী সিটি কলেজ", web: "https://dshe.gov.bd" },
      { name: "নিউ গভর্নমেন্ট ডিগ্রি কলেজ, রাজশাহী", web: "https://dshe.gov.bd" },
      { name: "বগুড়া ক্যান্টনমেন্ট কলেজ", web: "https://dshe.gov.bd" },
      { name: "পাবনা মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "সিরাজগঞ্জ মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "নওগাঁ মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "নাটোর মহিলা কলেজ", web: "https://dshe.gov.bd" },
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
      { name: "বরেন্দ্র বিশ্ববিদ্যালয়, রাজশাহী (প্রস্তাবিত)", web: "https://dshe.gov.bd" },
      { name: "রাজশাহী মেডিকেল কলেজ (সরকারি)", web: "https://rmch.gov.bd" },
    ]
  },

  // ───── বেসরকারি বিশ্ববিদ্যালয় ─────
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "নর্থ বেঙ্গল ইন্টারন্যাশনাল ইউনিভার্সিটি, রাজশাহী", web: "https://www.nbiu.edu.bd" },
      { name: "ভার্সিটি অফ ইনফরমেশন টেকনোলজি অ্যান্ড সায়েন্সেস", web: "https://www.vits.edu.bd" },
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
      { name: "রাজশাহী মেট্রোপলিটন থানা", web: "https://rajshahi.police.gov.bd" },
      { name: "বোয়ালিয়া থানা, রাজশাহী", web: "https://rajshahi.police.gov.bd" },
      { name: "শাহ মখদুম থানা, রাজশাহী", web: "https://rajshahi.police.gov.bd" },
      { name: "পবা থানা", web: "https://rajshahi.police.gov.bd" },
      { name: "বগুড়া সদর থানা", web: "https://bogra.police.gov.bd" },
      { name: "শেরপুর থানা (বগুড়া)", web: "https://bogra.police.gov.bd" },
      { name: "সারিয়াকান্দি থানা", web: "https://bogra.police.gov.bd" },
      { name: "পাবনা সদর থানা", web: "https://pabna.police.gov.bd" },
      { name: "ঈশ্বরদী থানা", web: "https://pabna.police.gov.bd" },
      { name: "সিরাজগঞ্জ সদর থানা", web: "https://sirajganj.police.gov.bd" },
      { name: "উল্লাপাড়া থানা", web: "https://sirajganj.police.gov.bd" },
      { name: "নওগাঁ সদর থানা", web: "https://naogaon.police.gov.bd" },
      { name: "নাটোর সদর থানা", web: "https://natore.police.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ সদর থানা", web: "https://chapainawabganj.police.gov.bd" },
      { name: "জয়পুরহাট সদর থানা", web: "https://joypurhat.police.gov.bd" },
    ]
  },

  // ───── ব্যাংক ─────
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (রাজশাহী)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (রাজশাহী)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (রাজশাহী)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (রাজশাহী)", web: "https://www.rupalibank.org" },
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
      { name: "রাজশাহী জেলা ভূমি অফিস", web: "https://rajshahi.gov.bd/site/page/land" },
      { name: "বগুড়া জেলা ভূমি অফিস", web: "https://bogra.gov.bd/site/page/land" },
      { name: "পাবনা জেলা ভূমি অফিস", web: "https://pabna.gov.bd/site/page/land" },
      { name: "সিরাজগঞ্জ জেলা ভূমি অফিস", web: "https://sirajganj.gov.bd/site/page/land" },
      { name: "নওগাঁ জেলা ভূমি অফিস", web: "https://naogaon.gov.bd/site/page/land" },
      { name: "নাটোর জেলা ভূমি অফিস", web: "https://natore.gov.bd/site/page/land" },
      { name: "চাঁপাইনবাবগঞ্জ জেলা ভূমি অফিস", web: "https://chapainawabganj.gov.bd/site/page/land" },
      { name: "জয়পুরহাট জেলা ভূমি অফিস", web: "https://joypurhat.gov.bd/site/page/land" },
    ]
  },

  // ───── বাস সার্ভিস ─────
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "দেশ ট্রাভেলস (রাজশাহী)", web: "https://deshtravelsbd.com" },
      { name: "ন্যাশনাল ট্রাভেলস (রাজশাহী)", web: "https://nationaltravelsbd.com" },
      { name: "হানিফ এন্টারপ্রাইজ (রাজশাহী)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (রাজশাহী)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "গ্রিন লাইন (রাজশাহী)", web: "https://www.greenlinebd.com" },
      { name: "বিআরটিসি (রাজশাহী)", web: "https://www.brtc.gov.bd" },
      { name: "এসআর ট্রাভেলস (বগুড়া)", web: "https://www.facebook.com" },
      { name: "নাবিল পরিবহন (বগুড়া)", web: "https://www.facebook.com/NabilParibahan" },
    ]
  },

  // ───── ট্রেন সার্ভিস ─────
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "রাজশাহী রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "বগুড়া রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "পাবনা রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "সিরাজগঞ্জ রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "ঈশ্বরদী রেলওয়ে জংশন", web: "https://railway.gov.bd" },
      { name: "বনলতা এক্সপ্রেস (ঢাকা-রাজশাহী)", web: "https://eticket.railway.gov.bd" },
      { name: "সিল্কসিটি এক্সপ্রেস", web: "https://eticket.railway.gov.bd" },
      { name: "পদ্মা এক্সপ্রেস", web: "https://eticket.railway.gov.bd" },
      { name: "ই-টিকেটিং পোর্টাল", web: "https://eticket.railway.gov.bd" },
    ]
  },

  // ───── সংবাদপত্র ─────
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক সোনার দেশ (রাজশাহী)", web: "https://www.sonadeshnews.com" },
      { name: "দৈনিক রাজশাহী বার্তা", web: "https://www.rajshahionline.com" },
      { name: "দৈনিক বগুড়া বার্তা", web: "https://www.facebook.com" },
      { name: "দৈনিক উত্তরবঙ্গ সংবাদ", web: "https://www.uttarbangasangbad.com" },
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
      { name: "র‌্যাব-৫ (রাজশাহী সদর দপ্তর)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৫ (বগুড়া ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৫ (পাবনা ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৫ (সিরাজগঞ্জ ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৫ (নওগাঁ ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৫ (চাঁপাইনবাবগঞ্জ ক্যাম্প)", web: "https://www.rab.gov.bd" },
    ]
  },

  // ───── বিজিবি অফিস ─────
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি সেক্টর সদর দপ্তর, রাজশাহী", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন, চাঁপাইনবাবগঞ্জ", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন, নওগাঁ", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন, রাজশাহী", web: "https://www.bgb.gov.bd" },
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
      { name: "কোডেক (রাজশাহী)", web: "https://www.codec-bd.org" },
    ]
  },

  // ───── সরকারি হাসপাতাল ─────
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "রাজশাহী মেডিকেল কলেজ হাসপাতাল", web: "https://rmch.gov.bd" },
      { name: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল, বগুড়া", web: "https://szmc.gov.bd" },
      { name: "পাবনা মানসিক হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "পাবনা সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "সিরাজগঞ্জ সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "নওগাঁ সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "নাটোর সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "জয়পুরহাট সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "ঈশ্বরদী উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
    ]
  },

  // ───── বেসরকারি হাসপাতাল ─────
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "ইসলামী ব্যাংক হাসপাতাল, রাজশাহী", web: "https://www.ibbl.com.bd" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার, রাজশাহী", web: "https://www.populardiagnostic.com" },
      { name: "রাজশাহী নার্সিং হোম", web: "https://www.facebook.com" },
      { name: "শাহ মখদুম হাসপাতাল, রাজশাহী", web: "https://www.facebook.com" },
      { name: "বগুড়া শহীদ জিয়া মেডিকেল কলেজ হাসপাতাল", web: "https://szmc.gov.bd" },
      { name: "পাবনা ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com" },
      { name: "নর্থ বেঙ্গল মেডিকেল কলেজ হাসপাতাল", web: "https://www.facebook.com" },
      { name: "ল্যাব এইড ডায়াগনস্টিক (রাজশাহী)", web: "https://www.labaiddx.com" },
    ]
  },

  // ───── পোস্ট অফিস ─────
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "রাজশাহী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "বগুড়া জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "পাবনা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "সিরাজগঞ্জ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নওগাঁ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নাটোর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "জয়পুরহাট জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },

  // ───── বিদ্যুৎ অফিস ─────
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "নর্থ ওয়েস্ট পাওয়ার জেনারেশন কোম্পানি (NWPGCL)", web: "https://www.nwpgcl.gov.bd" },
      { name: "নর্দান ইলেকট্রিসিটি সাপ্লাই (NESCO)", web: "https://www.nesco.gov.bd" },
      { name: "রাজশাহী পল্লী বিদ্যুৎ সমিতি-১", web: "https://www.reb.gov.bd" },
      { name: "রাজশাহী পল্লী বিদ্যুৎ সমিতি-২", web: "https://www.reb.gov.bd" },
      { name: "বগুড়া পল্লী বিদ্যুৎ সমিতি-১", web: "https://www.reb.gov.bd" },
      { name: "বগুড়া পল্লী বিদ্যুৎ সমিতি-২", web: "https://www.reb.gov.bd" },
      { name: "পাবনা পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "সিরাজগঞ্জ পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "নওগাঁ পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
    ]
  },

  // ───── ফায়ার সার্ভিস ─────
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "রাজশাহী ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "বগুড়া ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "পাবনা ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "সিরাজগঞ্জ ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "নওগাঁ ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "নাটোর ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "জয়পুরহাট ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
    ]
  },

  // ───── আদালত ─────
  {
    name: "আদালত",
    items: [
      { name: "রাজশাহী জেলা জজ কোর্ট", web: "https://districtjudge.rajshahi.gov.bd" },
      { name: "বগুড়া জেলা জজ কোর্ট", web: "https://districtjudge.bogra.gov.bd" },
      { name: "পাবনা জেলা জজ কোর্ট", web: "https://districtjudge.pabna.gov.bd" },
      { name: "সিরাজগঞ্জ জেলা জজ কোর্ট", web: "https://districtjudge.sirajganj.gov.bd" },
      { name: "নওগাঁ জেলা জজ কোর্ট", web: "https://districtjudge.naogaon.gov.bd" },
      { name: "নাটোর জেলা জজ কোর্ট", web: "https://districtjudge.natore.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ জেলা জজ কোর্ট", web: "https://districtjudge.chapainawabganj.gov.bd" },
      { name: "জয়পুরহাট জেলা জজ কোর্ট", web: "https://districtjudge.joypurhat.gov.bd" },
    ]
  },

  // ───── এয়ারপোর্ট ─────
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "রাজশাহী শাহ মখদুম বিমানবন্দর", web: "https://www.caab.gov.bd" },
      { name: "বাংলাদেশ বেসামরিক বিমান চলাচল কর্তৃপক্ষ", web: "https://www.caab.gov.bd" },
      { name: "বিমান বাংলাদেশ এয়ারলাইন্স (রাজশাহী)", web: "https://www.biman-airlines.com" },
    ]
  },

  // ───── পোর্ট ─────
  {
    name: "পোর্ট",
    items: [
      { name: "রাজশাহী নদীবন্দর", web: "https://www.biwta.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ নদীবন্দর", web: "https://www.biwta.gov.bd" },
      { name: "সিরাজগঞ্জ নদীবন্দর", web: "https://www.biwta.gov.bd" },
      { name: "বাংলাদেশ অভ্যন্তরীণ নৌ পরিবহন কর্তৃপক্ষ (BIWTA)", web: "https://www.biwta.gov.bd" },
    ]
  },

  // ───── ট্যুরিস্ট স্পট ─────
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "মহাস্থানগড়, বগুড়া", web: "https://archaeology.gov.bd" },
      { name: "পাহাড়পুর বৌদ্ধ বিহার, নওগাঁ", web: "https://archaeology.gov.bd" },
      { name: "পুঠিয়া রাজবাড়ী, রাজশাহী", web: "https://rajshahi.gov.bd" },
      { name: "হার্ডিঞ্জ ব্রিজ, পাকশী (পাবনা)", web: "https://pabna.gov.bd" },
      { name: "বরেন্দ্র গবেষণা জাদুঘর, রাজশাহী", web: "https://www.ru.ac.bd" },
      { name: "শাহ মখদুম মাজার, রাজশাহী", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "চাঁপাইনবাবগঞ্জ আমবাগান ও ছোট সোনা মসজিদ", web: "https://archaeology.gov.bd" },
      { name: "নাটোর রাজবাড়ী", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "রাজশাহী চিড়িয়াখানা", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "বঙ্গবন্ধু সেতু, সিরাজগঞ্জ", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ───── অ্যাম্বুলেন্স সার্ভিস ─────
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "রাজশাহী মেডিকেল অ্যাম্বুলেন্স সার্ভিস", web: "https://rmch.gov.bd" },
      { name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (রাজশাহী)", web: "https://www.bdrcs.org" },
      { name: "জাতীয় স্বাস্থ্য বাতায়ন (১৬২৬৩)", web: "https://www.dghs.gov.bd" },
      { name: "বগুড়া সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://dghs.gov.bd" },
      { name: "পাবনা সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://dghs.gov.bd" },
    ]
  },

  // ───── ক্লিনিক ─────
  {
    name: "ক্লিনিক",
    items: [
      { name: "রাজশাহী মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.dghs.gov.bd" },
      { name: "রাজশাহী ডায়াবেটিক সমিতি হাসপাতাল", web: "https://www.facebook.com" },
      { name: "বগুড়া মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.dghs.gov.bd" },
      { name: "পাবনা মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.dghs.gov.bd" },
      { name: "নওগাঁ ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com" },
      { name: "সিরাজগঞ্জ ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com" },
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
      { name: "ভেটেরিনারি ট্রেনিং ইনস্টিটিউট, বগুড়া", web: "https://www.dls.gov.bd" },
    ]
  },

  // ───── পানি সরবরাহ ─────
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "রাজশাহী ওয়াসা", web: "https://www.rwasa.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, রাজশাহী (DPHE)", web: "https://www.dphe.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, বগুড়া", web: "https://www.dphe.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, পাবনা", web: "https://www.dphe.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, সিরাজগঞ্জ", web: "https://www.dphe.gov.bd" },
    ]
  },

  // ───── গ্যাস সরবরাহ ─────
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড (PGCL)", web: "https://www.pgcl.com.bd" },
      { name: "পেট্রোবাংলা (আঞ্চলিক অফিস, রাজশাহী)", web: "https://www.petrobangla.org.bd" },
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
      { name: "বিটিসিএল (রাজশাহী)", web: "https://www.btcl.gov.bd" },
    ]
  },

  // ───── বীমা ─────
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (রাজশাহী)", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন (রাজশাহী)", web: "https://www.sbc.gov.bd" },
      { name: "মেঘনা লাইফ ইন্স্যুরেন্স (রাজশাহী)", web: "https://www.meghnalife.com" },
      { name: "গ্রিন ডেল্টা ইন্স্যুরেন্স (রাজশাহী)", web: "https://www.greendeltains.com.bd" },
      { name: "ইসলামী কমার্শিয়াল ইন্স্যুরেন্স (রাজশাহী)", web: "https://www.islamiins.com.bd" },
    ]
  },

  // ───── সমবায় ─────
  {
    name: "সমবায়",
    items: [
      { name: "রাজশাহী বিভাগীয় সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "রাজশাহী জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "বগুড়া জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "পাবনা জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "সিরাজগঞ্জ জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "নওগাঁ জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
    ]
  },

  // ───── ধর্মীয় স্থান ─────
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "শাহ মখদুম মাজার, রাজশাহী", web: "https://www.islamicfoundation.gov.bd" },
      { name: "ছোট সোনা মসজিদ, চাঁপাইনবাবগঞ্জ", web: "https://archaeology.gov.bd" },
      { name: "রাজশাহী কেন্দ্রীয় জামে মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "পুঠিয়া শিব মন্দির ও রাজবাড়ী মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "নাটোর রাজবাড়ী মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "বগুড়া কেন্দ্রীয় মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "পাবনা কেন্দ্রীয় মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "মহাস্থানগড় মাজার (বগুড়া)", web: "https://archaeology.gov.bd" },
    ]
  },

  // ───── জনপ্রতিনিধি ─────
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "রাজশাহী সিটি কর্পোরেশন", web: "https://rajshahicity.gov.bd" },
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
      { name: "পবা উপজেলা পরিষদ (রাজশাহী)", web: "http://poba.rajshahi.gov.bd" },
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
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
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