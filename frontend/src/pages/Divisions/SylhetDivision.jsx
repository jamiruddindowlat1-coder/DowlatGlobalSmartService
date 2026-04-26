import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#e67e22";
const ICON = "🏛️";

const subCategories = [
  // ===================== সরকারি স্কুল (জেলা অনুযায়ী) =====================
  {
    name: "সরকারি স্কুল (সিলেট)",
    items: [
      { name: "সিলেট সরকারি পাইলট উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "সিলেট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "রাজা জি.সি. উচ্চ বিদ্যালয় (সিলেট)", web: "https://www.dshe.gov.bd" },
      { name: "জকিগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "গোলাপগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (মৌলভীবাজার)",
    items: [
      { name: "মৌলভীবাজার জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "মৌলভীবাজার সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "শ্রীমঙ্গল সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "কুলাউড়া পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (হবিগঞ্জ)",
    items: [
      { name: "হবিগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "হবিগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "নবীগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মাধবপুর পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (সুনামগঞ্জ)",
    items: [
      { name: "সুনামগঞ্জ জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "সুনামগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "ছাতক পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "জগন্নাথপুর পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== বেসরকারি স্কুল =====================
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "সিলেট ক্যাডেট কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "ব্লু বার্ড স্কুল এন্ড কলেজ (সিলেট)", web: "https://www.dshe.gov.bd" },
      { name: "সিলেট ইন্টারন্যাশনাল স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "শ্রীমঙ্গল আদর্শ উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "হবিগঞ্জ মডার্ন স্কুল", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== সরকারি কলেজ =====================
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "সিলেট সরকারি কলেজ", web: "https://www.sylhetgovtcollege.edu.bd" },
      { name: "এমসি কলেজ সিলেট (মুরারি চাঁদ কলেজ)", web: "https://www.mccollege.edu.bd" },
      { name: "সিলেট সরকারি মহিলা কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "মৌলভীবাজার সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "হবিগঞ্জ সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "সুনামগঞ্জ সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "শ্রীমঙ্গল সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== বেসরকারি কলেজ =====================
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "সিলেট কমার্স কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "দরগাহ গেইট কলেজ (সিলেট)", web: "https://www.dshe.gov.bd" },
      { name: "জালালাবাদ ক্যান্টনমেন্ট পাবলিক স্কুল এন্ড কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "হবিগঞ্জ মহিলা কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "সুনামগঞ্জ মহিলা কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== মাদ্রাসা =====================
  {
    name: "মাদ্রাসা",
    items: [
      { name: "সিলেট আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "দারুল উলূম দেওবন্দ (সিলেট শাখা)", web: "https://www.bmeb.gov.bd" },
      { name: "মৌলভীবাজার আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "হবিগঞ্জ আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "সুনামগঞ্জ আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "শ্রীমঙ্গল আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
    ]
  },

  // ===================== সরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (SUST)", web: "https://www.sust.edu" },
      { name: "সিলেট কৃষি বিশ্ববিদ্যালয়", web: "https://www.sau.ac.bd" },
      { name: "সিলেট এমএজি ওসমানী মেডিকেল কলেজ", web: "https://www.osmmc.gov.bd" },
      { name: "শেখ হাসিনা মেডিকেল কলেজ (হবিগঞ্জ)", web: "https://www.dghs.gov.bd" },
    ]
  },

  // ===================== বেসরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "লিডিং ইউনিভার্সিটি (সিলেট)", web: "https://www.lus.ac.bd" },
      { name: "মেট্রোপলিটন ইউনিভার্সিটি (সিলেট)", web: "https://www.metrouni.edu.bd" },
      { name: "নর্থ ইস্ট ইউনিভার্সিটি বাংলাদেশ", web: "https://www.neub.edu.bd" },
      { name: "সিলেট ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.siu.edu.bd" },
    ]
  },

  // ===================== উপজেলা =====================
  {
    name: "উপজেলা",
    items: [
      { name: "সিলেট সদর উপজেলা", web: "https://sadar.sylhet.gov.bd" },
      { name: "বালাগঞ্জ উপজেলা", web: "https://balaganj.sylhet.gov.bd" },
      { name: "বিশ্বনাথ উপজেলা", web: "https://bishwanath.sylhet.gov.bd" },
      { name: "কোম্পানীগঞ্জ উপজেলা (সিলেট)", web: "https://companiganj.sylhet.gov.bd" },
      { name: "ফেঞ্চুগঞ্জ উপজেলা", web: "https://fenchuganj.sylhet.gov.bd" },
      { name: "গোলাপগঞ্জ উপজেলা", web: "https://golapganj.sylhet.gov.bd" },
      { name: "গোয়াইনঘাট উপজেলা", web: "https://gowainghat.sylhet.gov.bd" },
      { name: "জকিগঞ্জ উপজেলা", web: "https://jakiganj.sylhet.gov.bd" },
      { name: "কানাইঘাট উপজেলা", web: "https://kanaighat.sylhet.gov.bd" },
      { name: "ওসমানীনগর উপজেলা", web: "https://osmaninagar.sylhet.gov.bd" },
      { name: "বিয়ানীবাজার উপজেলা", web: "https://beanibazar.sylhet.gov.bd" },
      { name: "দক্ষিণ সুরমা উপজেলা", web: "https://dakshinsurama.sylhet.gov.bd" },
      { name: "জৈন্তাপুর উপজেলা", web: "https://jaintapur.sylhet.gov.bd" },
      { name: "মৌলভীবাজার সদর উপজেলা", web: "https://sadar.moulvibazar.gov.bd" },
      { name: "বড়লেখা উপজেলা", web: "https://barlekha.moulvibazar.gov.bd" },
      { name: "জুড়ী উপজেলা", web: "https://juri.moulvibazar.gov.bd" },
      { name: "কমলগঞ্জ উপজেলা", web: "https://kamalganj.moulvibazar.gov.bd" },
      { name: "কুলাউড়া উপজেলা", web: "https://kulaura.moulvibazar.gov.bd" },
      { name: "রাজনগর উপজেলা", web: "https://rajnagar.moulvibazar.gov.bd" },
      { name: "শ্রীমঙ্গল উপজেলা", web: "https://sreemangal.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ সদর উপজেলা", web: "https://sadar.habiganj.gov.bd" },
      { name: "আজমিরীগঞ্জ উপজেলা", web: "https://ajmiriganj.habiganj.gov.bd" },
      { name: "বাহুবল উপজেলা", web: "https://bahubal.habiganj.gov.bd" },
      { name: "বানিয়াচং উপজেলা", web: "https://baniachang.habiganj.gov.bd" },
      { name: "চুনারুঘাট উপজেলা", web: "https://chunarughat.habiganj.gov.bd" },
      { name: "লাখাই উপজেলা", web: "https://lakhai.habiganj.gov.bd" },
      { name: "মাধবপুর উপজেলা", web: "https://madhabpur.habiganj.gov.bd" },
      { name: "নবীগঞ্জ উপজেলা", web: "https://nabiganj.habiganj.gov.bd" },
      { name: "শায়েস্তাগঞ্জ উপজেলা", web: "https://shayestaganj.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ সদর উপজেলা", web: "https://sadar.sunamganj.gov.bd" },
      { name: "বিশ্বম্ভরপুর উপজেলা", web: "https://bishambharpur.sunamganj.gov.bd" },
      { name: "ছাতক উপজেলা", web: "https://chhatak.sunamganj.gov.bd" },
      { name: "দিরাই উপজেলা", web: "https://dirai.sunamganj.gov.bd" },
      { name: "দোয়ারাবাজার উপজেলা", web: "https://doarabazar.sunamganj.gov.bd" },
      { name: "জামালগঞ্জ উপজেলা", web: "https://jamalganj.sunamganj.gov.bd" },
      { name: "জগন্নাথপুর উপজেলা", web: "https://jagannathpur.sunamganj.gov.bd" },
      { name: "শাল্লা উপজেলা", web: "https://shalla.sunamganj.gov.bd" },
      { name: "তাহিরপুর উপজেলা", web: "https://tahirpur.sunamganj.gov.bd" },
      { name: "ধর্মপাশা উপজেলা", web: "https://dharmapasha.sunamganj.gov.bd" },
      { name: "দক্ষিণ সুনামগঞ্জ উপজেলা", web: "https://dakshinsunamganj.sunamganj.gov.bd" },
    ]
  },

  // ===================== থানা =====================
  {
    name: "থানা",
    items: [
      { name: "সিলেট কোতয়ালি থানা", web: "https://www.police.gov.bd" },
      { name: "জালালাবাদ থানা (সিলেট)", web: "https://www.police.gov.bd" },
      { name: "এয়ারপোর্ট থানা (সিলেট)", web: "https://www.police.gov.bd" },
      { name: "শাহপরান থানা (সিলেট)", web: "https://www.police.gov.bd" },
      { name: "মৌলভীবাজার সদর থানা", web: "https://www.police.gov.bd" },
      { name: "শ্রীমঙ্গল থানা", web: "https://www.police.gov.bd" },
      { name: "হবিগঞ্জ সদর থানা", web: "https://www.police.gov.bd" },
      { name: "চুনারুঘাট থানা", web: "https://www.police.gov.bd" },
      { name: "সুনামগঞ্জ সদর থানা", web: "https://www.police.gov.bd" },
      { name: "ছাতক থানা", web: "https://www.police.gov.bd" },
    ]
  },

  // ===================== ব্যাংক =====================
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (সিলেট)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (সিলেট)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (সিলেট)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (সিলেট)", web: "https://www.rupalibank.org" },
      { name: "ইসলামী ব্যাংক (সিলেট)", web: "https://www.islamibankbd.com" },
      { name: "ডাচ-বাংলা ব্যাংক (সিলেট)", web: "https://www.dutchbanglabank.com" },
      { name: "ব্র্যাক ব্যাংক (সিলেট)", web: "https://www.bracbank.com" },
      { name: "ব্যাংক এশিয়া (সিলেট)", web: "https://www.bankasia-bd.com" },
      { name: "বাংলাদেশ কৃষি ব্যাংক (সিলেট)", web: "https://www.krishibank.org.bd" },
      { name: "প্রাইম ব্যাংক (সিলেট)", web: "https://www.primebank.com.bd" },
    ]
  },

  // ===================== ভূমি অফিস =====================
  {
    name: "ভূমি অফিস",
    items: [
      { name: "সিলেট জেলা ভূমি অফিস", web: "https://land.sylhet.gov.bd" },
      { name: "মৌলভীবাজার জেলা ভূমি অফিস", web: "https://land.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ জেলা ভূমি অফিস", web: "https://land.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ জেলা ভূমি অফিস", web: "https://land.sunamganj.gov.bd" },
    ]
  },

  // ===================== বাস সার্ভিস =====================
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (সিলেট)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (সিলেট)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "এনা পরিবহন (সিলেট)", web: "https://www.facebook.com/ENATransport" },
      { name: "বিআরটিসি (সিলেট)", web: "https://www.brtc.gov.bd" },
      { name: "সৌদিয়া পরিবহন (সিলেট-ঢাকা)", web: "https://www.facebook.com" },
      { name: "লন্ডনী এক্সপ্রেস (সিলেট)", web: "https://www.facebook.com" },
      { name: "গ্রিন লাইন (সিলেট)", web: "https://www.greenlinebd.com" },
    ]
  },

  // ===================== ট্রেন সার্ভিস =====================
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "সিলেট রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "উপবন এক্সপ্রেস (সিলেট-ঢাকা)", web: "https://railway.gov.bd" },
      { name: "জয়ন্তিকা এক্সপ্রেস (সিলেট-ঢাকা)", web: "https://railway.gov.bd" },
      { name: "পারাবত এক্সপ্রেস (সিলেট-চট্টগ্রাম)", web: "https://railway.gov.bd" },
      { name: "কুশিয়ারা এক্সপ্রেস (সিলেট-আখাউড়া)", web: "https://railway.gov.bd" },
    ]
  },

  // ===================== সংবাদপত্র =====================
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক সিলেটের ডাক", web: "https://www.sylheterdak.com.bd" },
      { name: "দৈনিক জালালাবাদ", web: "https://www.facebook.com/dailyjalalabad" },
      { name: "দৈনিক সিলেট মিরর", web: "https://www.sylhetmirror.com" },
      { name: "দৈনিক নয়া দিগন্ত (সিলেট)", web: "https://www.dailynayadiganta.com" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
      { name: "দৈনিক যুগভেরী (সিলেট)", web: "https://www.jugabheri.com" },
      { name: "সিলেট টুডে", web: "https://www.sylhettoday24.news" },
    ]
  },

  // ===================== র‌্যাব ইন্সটিটিউট =====================
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-৯ (সিলেট)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৯ ক্যাম্প (মৌলভীবাজার)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৯ ক্যাম্প (হবিগঞ্জ)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৯ ক্যাম্প (সুনামগঞ্জ)", web: "https://www.rab.gov.bd" },
    ]
  },

  // ===================== বিজিবি অফিস =====================
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি সিলেট সেক্টর সদর দপ্তর", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ৪৬ ব্যাটালিয়ন (সিলেট)", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি জকিগঞ্জ ব্যাটালিয়ন", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি হবিগঞ্জ ব্যাটালিয়ন", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি সুনামগঞ্জ ব্যাটালিয়ন", web: "https://www.bgb.gov.bd" },
    ]
  },

  // ===================== এনজিও অফিস =====================
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (সিলেট বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "গ্রামীণ ব্যাংক (সিলেট)", web: "https://www.grameen.com" },
      { name: "আশা (সিলেট)", web: "https://www.asa.org.bd" },
      { name: "কারিতাস বাংলাদেশ (সিলেট)", web: "https://www.caritasbd.org" },
      { name: "সিএনআরএস (সিলেট)", web: "https://www.cnrs-bd.org" },
      { name: "প্রশিকা (সিলেট)", web: "https://www.proshika.org" },
    ]
  },

  // ===================== সরকারি হাসপাতাল =====================
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "সিলেট এমএজি ওসমানী মেডিকেল কলেজ হাসপাতাল", web: "https://www.osmmc.gov.bd" },
      { name: "মৌলভীবাজার সদর হাসপাতাল", web: "https://dghs.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ সদর হাসপাতাল", web: "https://dghs.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ সদর হাসপাতাল", web: "https://dghs.sunamganj.gov.bd" },
      { name: "শ্রীমঙ্গল উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.dghs.gov.bd" },
      { name: "ছাতক উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.dghs.gov.bd" },
    ]
  },

  // ===================== বেসরকারি হাসপাতাল =====================
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "নর্থ ইস্ট মেডিকেল কলেজ হাসপাতাল (সিলেট)", web: "https://www.nemch.ac.bd" },
      { name: "পার্কভিউ মেডিকেল কলেজ হাসপাতাল (সিলেট)", web: "https://www.parkviewhospital.com.bd" },
      { name: "ইবনে সিনা হাসপাতাল (সিলেট)", web: "https://www.ibnsinabd.com" },
      { name: "মাউন্ট আডোরা হাসপাতাল (সিলেট)", web: "https://www.mountadora.com" },
      { name: "ল্যাব এইড হাসপাতাল (সিলেট)", web: "https://www.labaidgroup.com" },
      { name: "জালালাবাদ রাগীব রাবেয়া মেডিকেল কলেজ", web: "https://www.jrrmc.edu.bd" },
    ]
  },

  // ===================== পোস্ট অফিস =====================
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "সিলেট জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "মৌলভীবাজার প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "হবিগঞ্জ প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "সুনামগঞ্জ প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "শ্রীমঙ্গল ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },

  // ===================== বিদ্যুৎ অফিস =====================
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "বিদ্যুৎ উন্নয়ন বোর্ড (সিলেট)", web: "https://www.bpdb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (সিলেট)", web: "https://www.reb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (মৌলভীবাজার)", web: "https://www.reb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (হবিগঞ্জ)", web: "https://www.reb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (সুনামগঞ্জ)", web: "https://www.reb.gov.bd" },
    ]
  },

  // ===================== ফায়ার সার্ভিস =====================
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "সিলেট ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" },
      { name: "মৌলভীবাজার ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "হবিগঞ্জ ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "সুনামগঞ্জ ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "শ্রীমঙ্গল ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },

  // ===================== আদালত =====================
  {
    name: "আদালত",
    items: [
      { name: "সিলেট জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "মৌলভীবাজার জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "হবিগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "সুনামগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
    ]
  },

  // ===================== এয়ারপোর্ট =====================
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "ওসমানী আন্তর্জাতিক বিমানবন্দর (সিলেট)", web: "https://www.caab.gov.bd" },
      { name: "বাংলাদেশ বিমান (সিলেট অফিস)", web: "https://www.biman-airlines.com" },
    ]
  },

  // ===================== পোর্ট =====================
  {
    name: "পোর্ট",
    items: [
      { name: "সিলেট কাস্টমস হাউস (স্থলবন্দর)", web: "https://www.customs.gov.bd" },
      { name: "তামাবিল স্থলবন্দর (সিলেট)", web: "https://www.biwta.gov.bd" },
      { name: "জকিগঞ্জ নদীবন্দর (কুশিয়ারা)", web: "https://www.biwta.gov.bd" },
      { name: "ছাতক নদীবন্দর (সুনামগঞ্জ)", web: "https://www.biwta.gov.bd" },
    ]
  },

  // ===================== ট্যুরিস্ট স্পট =====================
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "জাফলং (সিলেট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "রাতারগুল সোয়াম্প ফরেস্ট", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "বিছানাকান্দি (সিলেট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "শ্রীমঙ্গল চা বাগান", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "হাকালুকি হাওর (মৌলভীবাজার)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "টাঙ্গুয়ার হাওর (সুনামগঞ্জ)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "লাউয়াছড়া জাতীয় উদ্যান", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মাধবকুণ্ড জলপ্রপাত (মৌলভীবাজার)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "হজরত শাহজালালের মাজার (সিলেট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "সাদাপাথর (কোম্পানীগঞ্জ)", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ===================== অ্যাম্বুলেন্স সার্ভিস =====================
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "জরুরি অ্যাম্বুলেন্স - ১৯৯", web: "tel:199" },
      { name: "ওসমানী হাসপাতাল অ্যাম্বুলেন্স (সিলেট)", web: "https://www.osmmc.gov.bd" },
      { name: "বাংলাদেশ রেড ক্রিসেন্ট (সিলেট)", web: "https://www.bdrcs.org" },
      { name: "সিলেট সিটি কর্পোরেশন অ্যাম্বুলেন্স", web: "https://www.sylhetcity.gov.bd" },
    ]
  },

  // ===================== ক্লিনিক =====================
  {
    name: "ক্লিনিক",
    items: [
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (সিলেট)", web: "https://www.populardiagnostic.com" },
      { name: "ল্যাব এইড ডায়াগনস্টিক (সিলেট)", web: "https://www.labaidgroup.com" },
      { name: "ইবনে সিনা ডায়াগনস্টিক (সিলেট)", web: "https://www.ibnsinabd.com" },
      { name: "শেফা ক্লিনিক (সিলেট)", web: "https://www.facebook.com" },
      { name: "সিটি ক্লিনিক (শ্রীমঙ্গল)", web: "https://www.facebook.com" },
    ]
  },

  // ===================== ভেটেরিনারি সার্ভিস =====================
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "সিলেট জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "মৌলভীবাজার জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "হবিগঞ্জ জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "সুনামগঞ্জ জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "শ্রীমঙ্গল ভেটেরিনারি হাসপাতাল", web: "https://www.dls.gov.bd" },
    ]
  },

  // ===================== পানি সরবরাহ =====================
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "সিলেট সিটি কর্পোরেশন পানি সরবরাহ", web: "https://www.sylhetcity.gov.bd" },
      { name: "মৌলভীবাজার পৌরসভা পানি সরবরাহ", web: "https://www.moulvibazar.gov.bd" },
      { name: "বাংলাদেশ পানি উন্নয়ন বোর্ড (সিলেট)", web: "https://www.bwdb.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর (সিলেট)", web: "https://www.dphe.gov.bd" },
    ]
  },

  // ===================== গ্যাস সরবরাহ =====================
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "জালালাবাদ গ্যাস ট্রান্সমিশন এন্ড ডিস্ট্রিবিউশন (JGTDSL)", web: "https://www.jalalabadgas.org.bd" },
      { name: "বাংলাদেশ গ্যাস ফিল্ড কোম্পানি (BGFCL) - সিলেট", web: "https://www.bgfcl.org.bd" },
    ]
  },

  // ===================== টেলিকম =====================
  {
    name: "টেলিকম",
    items: [
      { name: "বাংলাদেশ টেলিযোগাযোগ কোম্পানি (BTCL) - সিলেট", web: "https://www.btcl.gov.bd" },
      { name: "গ্রামীণফোন কাস্টমার কেয়ার (সিলেট)", web: "https://www.grameenphone.com" },
      { name: "রবি আজিয়াটা (সিলেট)", web: "https://www.robi.com.bd" },
      { name: "বাংলালিংক (সিলেট)", web: "https://www.banglalink.net" },
      { name: "টেলিটক (সিলেট)", web: "https://www.teletalk.com.bd" },
    ]
  },

  // ===================== বীমা =====================
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (সিলেট)", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন (সিলেট)", web: "https://www.sbc.gov.bd" },
      { name: "মেটলাইফ বাংলাদেশ (সিলেট)", web: "https://www.metlife.com.bd" },
      { name: "ডেল্টা লাইফ ইন্স্যুরেন্স (সিলেট)", web: "https://www.deltalife.org" },
      { name: "প্রাইম ইন্স্যুরেন্স (সিলেট)", web: "https://www.primeisurance.com" },
    ]
  },

  // ===================== সমবায় =====================
  {
    name: "সমবায়",
    items: [
      { name: "সিলেট জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "মৌলভীবাজার জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "হবিগঞ্জ জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "সুনামগঞ্জ জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "বাংলাদেশ পল্লী উন্নয়ন বোর্ড - BRDB (সিলেট)", web: "https://www.brdb.gov.bd" },
    ]
  },

  // ===================== ধর্মীয় স্থান =====================
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "হযরত শাহজালাল (র.) এর মাজার (সিলেট)", web: "https://www.islamicfoundation.gov.bd" },
      { name: "হযরত শাহ পরান (র.) এর মাজার (সিলেট)", web: "https://www.islamicfoundation.gov.bd" },
      { name: "সিলেট শাহী ঈদগাহ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "মনিপুরি মন্দির (মৌলভীবাজার)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "শ্রীমঙ্গল বৌদ্ধ বিহার", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "জৈন্তাপুর রাজবাড়ী মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ===================== জনপ্রতিনিধি =====================
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "সিলেট সিটি কর্পোরেশন মেয়র", web: "https://www.sylhetcity.gov.bd" },
      { name: "মৌলভীবাজার পৌরসভা চেয়ারম্যান", web: "https://www.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ পৌরসভা চেয়ারম্যান", web: "https://www.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ পৌরসভা চেয়ারম্যান", web: "https://www.sunamganj.gov.bd" },
      { name: "সিলেট জেলা পরিষদ চেয়ারম্যান", web: "https://www.sylhet.gov.bd" },
      { name: "বাংলাদেশ জাতীয় সংসদ (সিলেট বিভাগ)", web: "https://www.parliament.gov.bd" },
    ]
  },

  // ===================== উপজেলা চেয়ারম্যান =====================
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "সিলেট সদর উপজেলা চেয়ারম্যান", web: "https://sadar.sylhet.gov.bd" },
      { name: "গোলাপগঞ্জ উপজেলা চেয়ারম্যান", web: "https://golapganj.sylhet.gov.bd" },
      { name: "বিয়ানীবাজার উপজেলা চেয়ারম্যান", web: "https://beanibazar.sylhet.gov.bd" },
      { name: "জকিগঞ্জ উপজেলা চেয়ারম্যান", web: "https://jakiganj.sylhet.gov.bd" },
      { name: "মৌলভীবাজার সদর উপজেলা চেয়ারম্যান", web: "https://sadar.moulvibazar.gov.bd" },
      { name: "শ্রীমঙ্গল উপজেলা চেয়ারম্যান", web: "https://sreemangal.moulvibazar.gov.bd" },
      { name: "কুলাউড়া উপজেলা চেয়ারম্যান", web: "https://kulaura.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ সদর উপজেলা চেয়ারম্যান", web: "https://sadar.habiganj.gov.bd" },
      { name: "চুনারুঘাট উপজেলা চেয়ারম্যান", web: "https://chunarughat.habiganj.gov.bd" },
      { name: "নবীগঞ্জ উপজেলা চেয়ারম্যান", web: "https://nabiganj.habiganj.gov.bd" },
      { name: "সুনামগঞ্জ সদর উপজেলা চেয়ারম্যান", web: "https://sadar.sunamganj.gov.bd" },
      { name: "ছাতক উপজেলা চেয়ারম্যান", web: "https://chhatak.sunamganj.gov.bd" },
      { name: "জগন্নাথপুর উপজেলা চেয়ারম্যান", web: "https://jagannathpur.sunamganj.gov.bd" },
      { name: "তাহিরপুর উপজেলা চেয়ারম্যান", web: "https://tahirpur.sunamganj.gov.bd" },
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