import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#e67e22";
const ICON = "🏛️";

const subCategories = [
  // ===================== সরকারি স্কুল (জেলা অনুযায়ী) =====================
  {
    name: "সরকারি স্কুল (সিলেট)",
    items: [
      { name: "সিলেট সরকারি পাইলট উচ্চ বিদ্যালয়", web: "http://www.sylgovpilothss.edu.bd" },
    { name: "সিলেট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.gaghscsyl.edu.bd" },
    { name: "রাজা জি.সি. উচ্চ বিদ্যালয় (সিলেট)", web: "https://www.rgchighschool.edu.bd" },
    { name: "জকিগঞ্জ সরকারি বালক উচ্চ বিদ্যালয়", web: "https://zakiganj.sylhet.gov.bd/pages/education-institutes/%E0%A6%9C%E0%A6%95%E0%A6%BF%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%95-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC-%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F-c820b6-696cce2fa31054345f137174" }, // নিজস্ব সাইট নেই
    { name: "গোলাপগঞ্জ উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/%E0%A6%97%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A6%AA%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%97%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A6%AA%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%AC%E0%A7%80%E0%A6%B0%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%9C%E0%A6%AA%E0%A7%81%E0%A6%B0-100030605936621/" }, // নিজস্ব সাইট নেই
    ]
  },
  {
    name: "সরকারি স্কুল (মৌলভীবাজার)",
    items: [
      { name: "মৌলভীবাজার সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/livemghs/?locale=bn_IN" }, // edu.bd সাইট নেই
    { name: "আলী আমজাদ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.aliamzadgghsmb.edu.bd" }, // নাম সংশোধন করুন
    { name: "শ্রীমঙ্গল সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/sgghs129761/?locale=bn_IN" }, // নিজস্ব সাইট নেই
    { name: "কুলাউড়া পাইলট মাধ্যমিক বিদ্যালয়", web: "https://sreemangal.moulvibazar.gov.bd/pages/education-institutes/%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%80%E0%A6%AE%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%B2-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-1564f3-696cd4a6a31054345f137871" }, // নিজস্ব সাইট নেই
    ]
  },
  {
    name: "সরকারি স্কুল (হবিগঞ্জ)",
    items: [
      { name: "হবিগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.habiganjhsc.edu.bd/https://www.dshe.gov.bd" }, // নিজস্ব সাইট নেই
      { name: "বি.কে.জি.সি সরকারি বালিকা উচ্চ বিদ্যালয়, হবিগঞ্জ", web: "https://www.facebook.com/dcsarkar76/" }, // নাম সংশোধন, সাইট নেই
      { name: "নবীগঞ্জ যোগল কিশোর মডেল সরকারি উচ্চ বিদ্যালয়", web: "https://njkmhs.school.gov.bd/" }, // নিজস্ব সাইট নেই
      { name: "মাধবপুর পাইলট মাধ্যমিক বিদ্যালয়", web: "http://www.madhabpurpiloths.edu.bd" }, // ✅ সাইট
    ]
  },
  {
    name: "সরকারি স্কুল (সুনামগঞ্জ)",
    items: [
     { name: "সরকারি জুবিলী উচ্চ বিদ্যালয়, সুনামগঞ্জ", web: "http://www.gjhs.edu.bd" }, // নাম ও URL সংশোধন
     { name: "সরকারি সতীশ চন্দ্র বালিকা উচ্চ বিদ্যালয়, সুনামগঞ্জ", web: "https://www.facebook.com/gscghs1234/?locale=bn_IN" }, // নাম সংশোধন, নিজস্ব সাইট নেই
     { name: "ছাতক সরকারি বহুমুখী মডেল উচ্চ বিদ্যালয়", web: "https://www.cgbmhs.edu.bd" }, // নাম ও URL সংশোধন
     { name: "সরকারি যদুনাথ পাইলট মডেল উচ্চ বিদ্যালয়", web: "https://jpmhs.school.gov.bd/" }, // নিজস্ব সাইট নেই
    ]
  },

  // ===================== বেসরকারি স্কুল =====================
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "সিলেট ক্যাডেট কলেজ", web: "https://scc.army.mil.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "ব্লু বার্ড স্কুল এন্ড কলেজ (সিলেট)", web: "https://bbhsc.edu.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "সিলেট ইন্টারন্যাশনাল স্কুল এন্ড কলেজ", web: "https://www.facebook.com/sylhetinternationalschoolandcollege/?locale=bn_IN" }, // ✅ সাইট পাওয়া গেছে
      { name: "শ্রীমঙ্গল ইউনিয়ন আদর্শ উচ্চ বিদ্যালয়", web: "https://www.facebook.com/photo.php?fbid=4458175624416239&set=a.1375842505982915&type=3" }, // নিজস্ব সাইট নেই
      { name: "সানশাইন মডেল স্কুল এন্ড কলেজ,হবিগঞ্জ", web: "https://www.facebook.com/sunshinen1/?locale=bn_IN" }, // নিজস্ব সাইট নে
    ]
  },

  // ===================== সরকারি কলেজ =====================
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "সিলেট সরকারি কলেজ", web: "https://sylgovcollege.edu.bd" }, // URL সংশোধন
      { name: "এমসি কলেজ সিলেট (মুরারি চাঁদ কলেজ)", web: "https://mccollege.edu.bd" }, // ✅ সঠিক
      { name: "সিলেট সরকারি মহিলা কলেজ", web: "https://www.sgwc.edu.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "মৌলভীবাজার সরকারি কলেজ", web: "https://www.mbgc.gov.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "বৃন্দাবন সরকারি কলেজ, হবিগঞ্জ", web: "https://bgch.edu.bd/" }, // নাম ও URL সংশোধন
      { name: "সুনামগঞ্জ সরকারি কলেজ", web: "https://sugc.edu.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "শ্রীমঙ্গল সরকারি কলেজ", web: "https://sreegovtcollege.edu.bd" },
    ]
  },

  // ===================== বেসরকারি কলেজ =====================
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "সিলেট কমার্স কলেজ", web: "https://mrf-scc.edu.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "সিলেট সরকারি মহিলা কলেজ", web: "https://www.facebook.com/p/%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%AE%E0%A6%B9%E0%A6%BF%E0%A6%B2%E0%A6%BE-%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C-%E0%A6%93-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%A4%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%86%E0%A6%AA%E0%A6%A1%E0%A7%87%E0%A6%9F-%E0%A6%AA%E0%A7%8B%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A6%87-%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-61578925880328/" }, // নিজস্ব সাইট নেই
      { name: "জালালাবাদ ক্যান্টনমেন্ট পাবলিক স্কুল এন্ড কলেজ", web: "https://jcpscsylhet.edu.bd" }, // ✅ সাইট পাওয়া গেছে
      { name: "হবিগঞ্জ সরকারি মহিলা কলেজ", web: "https://hgmc.edu.bd" }, // নাম ও URL সংশোধন
      { name: "সুনামগঞ্জ সরকারি মহিলা কলেজ", web: "https://govtwcs.edu.bd" }, //
    ]
  },

  // ===================== মাদ্রাসা =====================
  {
    name: "মাদ্রাসা",
    items: [
      { name: "সিলেট আলিয়া মাদ্রাসা", web: "https://sylgovaliamadrasa.edu.bd/" },
      { name: "দারুল উলূম দেওবন্দ (সিলেট শাখা)", web: "https://m.somewhereinblog.net/mobile/blog/nurulamin007/29538270" },
      { name: "মৌলভীবাজার আলিয়া মাদ্রাসা", web: "https://www.facebook.com/MoulvibazarJameyaIslamiaDakhilMadrasa.official/" },
      { name: "হবিগঞ্জ আলিয়া মাদ্রাসা", web: "https://www.facebook.com/h.d.s.k.madrasha/posts/%E0%A6%B9%E0%A6%AC%E0%A6%BF%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%86%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%BE-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%B0-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%AD%E0%A6%AC%E0%A6%A8-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A7%8B%E0%A6%A7%E0%A6%A8/749401713869157/" },
      { name: "আলহেরা জামেয়া ইসলামিয়া ফাজিল মাদ্রাসা,", web: "https://www.facebook.com/groups/203234073143745/" },
      { name: "শ্রীমঙ্গল আনওয়ারুল উলুম ফাজিল (ডিগ্রী) মাদরাসা", web: "https://www.saufm.edu.bd/" },
    ]
  },

  // ===================== সরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (SUST)", web: "https://www.sust.edu/" },
      { name: "সিলেট কৃষি বিশ্ববিদ্যালয়", web: "https://www.sau.ac.bd" },
      { name: "সিলেট এমএজি ওসমানী মেডিকেল কলেজ", web: "https://somc.college.gov.bd/" },
      { name: "শেখ হাসিনা মেডিকেল কলেজ (হবিগঞ্জ)", web: "https://shmc.portal.gov.bd/" },
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
      { name: "দক্ষিণ সুনামগঞ্জ উপজেলা", web: "https://shantiganj.sunamganj.gov.bd/" },
    ]
  },

  // ===================== থানা =====================
  {
    name: "থানা",
    items: [
      { name: "সিলেট কোতয়ালি থানা", web: "https://bn.banglapedia.org/index.php?title=%E0%A6%95%E0%A7%8B%E0%A6%A4%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2%E0%A7%80_%E0%A6%AE%E0%A6%A1%E0%A7%87%E0%A6%B2_%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%BE_(%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F_%E0%A6%AE%E0%A7%87%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%A8)" },
      { name: "জালালাবাদ থানা (সিলেট)", web: "https://jalalabadpolice.sylhetsadar.sylhet.gov.bd/" },
      { name: "এয়ারপোর্ট থানা (সিলেট)", web: "https://bn.banglapedia.org/index.php?title=%E0%A6%AC%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%A8_%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0_%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%BE_(%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F_%E0%A6%AE%E0%A7%87%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%A8)" },
      { name: "শাহপরান থানা (সিলেট)", web: "https://shahporanpolice.sylhetsadar.sylhet.gov.bd/" },
      { name: "মৌলভীবাজার সদর থানা", web: "https://moulvibazarsadar.moulvibazar.gov.bd/" },
      { name: "শ্রীমঙ্গল থানা", web: "https://spolice.sreemangal.moulvibazar.gov.bd/" },
      { name: "হবিগঞ্জ সদর থানা", web: "https://police.habiganjsadar.habiganj.gov.bd/" },
      { name: "চুনারুঘাট থানা", web: "https://chunarughat.habiganj.gov.bd/pages/static-pages/696cb97fc4774958d7ba7c03" },
      { name: "সুনামগঞ্জ সদর থানা", web: "https://police.sadar.sunamganj.gov.bd/" },
      { name: "ছাতক থানা", web: "https://police.chhatak.sunamganj.gov.bd/" },
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
      { name: "সিলেট জেলা ভূমি অফিস", web: "https://acl.sylhetsadar.sylhet.gov.bd/https://land.sylhet.gov.bd" },
      { name: "মৌলভীবাজার জেলা ভূমি অফিস", web: "https://acl.moulvibazarsadar.moulvibazar.gov.bd/" },
      { name: "হবিগঞ্জ জেলা ভূমি অফিস", web: "https://acl.habiganjsadar.habiganj.gov.bd/" },
      { name: "সুনামগঞ্জ জেলা ভূমি অফিস", web: "https://acl.sadar.sunamganj.gov.bd/" },
    ]
  },

  // ===================== বাস সার্ভিস =====================
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (সিলেট)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (সিলেট)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "এনা পরিবহন (সিলেট)", web: "https://enatransport.com.bd/" },
      { name: "বিআরটিসি (সিলেট)", web: "https://brtc.sylhetdiv.gov.bd/" },
      { name: "সৌদিয়া পরিবহন (সিলেট-ঢাকা)", web: "https://visitplan.net/2024/12/16/saudia-paribahan-bus-counter-fare-info/" },
      { name: "লন্ডনী এক্সপ্রেস (সিলেট)", web: "https://lonexbd.com/" },
      { name: "গ্রিন লাইন (সিলেট)", web: "https://www.greenlinebd.com" },
    ]
  },

  // ===================== ট্রেন সার্ভিস =====================
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "সিলেট রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "উপবন এক্সপ্রেস (সিলেট-ঢাকা)", web: "https://bn.amartrain.com/%E0%A6%89%E0%A6%AA%E0%A6%AC%E0%A6%A8-%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8-%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%B8/" },
      { name: "জয়ন্তিকা এক্সপ্রেস (সিলেট-ঢাকা)", web: "https://ajkertrain.com/jayantika-express-train-schedule/" },
      { name: "পারাবত এক্সপ্রেস (সিলেট-চট্টগ্রাম)", web: "https://bn.amartrain.com/%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%AC%E0%A6%A4-%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8-%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%87%E0%A6%B0/" },
      { name: "কুশিয়ারা এক্সপ্রেস (সিলেট-আখাউড়া)", web: "https://www.facebook.com/p/%E0%A6%95%E0%A7%81%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%BE-%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8-100057305327269/" },
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
      { name: "র‌্যাব-৯ (সিলেট)", web: "https://rab.sylhet.gov.bd/" },
      { name: "র‌্যাব-৯ ক্যাম্প (মৌলভীবাজার)", web: "https://rab.moulvibazar.gov.bd/pages/static-pages/696cb576c4774958d7ba5e91" },
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
      { name: "সিএনআরএস (সিলেট)", web: "https://cnrs.org.bd/" },
      { name: "প্রশিকা (সিলেট)", web: "https://www.proshika.org" },
    ]
  },

  // ===================== সরকারি হাসপাতাল =====================
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "সিলেট এমএজি ওসমানী মেডিকেল কলেজ ও হাসপাতাল", web: "https://www.somch.gov.bd" },
      { name: "২৫০ শয্যা বিশিষ্ট জেলা হাসপাতাল, মৌলভীবাজার", web: "https://250hospital.moulvibazar.gov.bd" },
      { name: "আধুনিক জেলা সদর হাসপাতাল, হবিগঞ্জ", web: "https://hospital.habiganj.gov.bd" },
      { name: "২৫০ শয্যা বিশিষ্ট জেলা হাসপাতাল, সুনামগঞ্জ", web: "https://dss.sunamganj.gov.bd/pages/static-pages/696cb426c4774958d7ba38f9" }, // ⚠️ যাচাই করুন
      { name: "শ্রীমঙ্গল উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://health.sreemangal.moulvibazar.gov.bd" }, // ⚠️ যাচাই করুন
      { name: "ছাতক উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://health.chhatak.sunamganj.gov.bd" }, // ⚠️ যাচাই করুন
    ]
  },

  // ===================== বেসরকারি হাসপাতাল =====================
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "নর্থ ইষ্ট মেডিকেল কলেজ ও হাসপাতাল (সিলেট)", web: "https://www.nemc.edu.bd" },
    { name: "পার্কভিউ মেডিকেল কলেজ হাসপাতাল (সিলেট)", web: "https://www.pmch.edu.bd" },
    { name: "ইবনে সিনা হাসপাতাল (সিলেট)", web: "https://ibnsinahospitalsylhet.com.bd" },
    { name: "মাউন্ট আডোরা হাসপাতাল (সিলেট)", web: "https://www.mountadora.com" }, // ✅ ঠিক আছে
    { name: "ল্যাব এইড ডায়াগনস্টিক (সিলেট)", web: "https://labaid.com.bd/en/diagnostic/labaid-diagnostic-sylhet" },
    { name: "জালালাবাদ রাগীব-রাবেয়া মেডিকেল কলেজ ও হাসপাতাল", web: "https://www.jrrmc.edu.bd" }, // ✅ ঠিক আছে
    ]
  },

  // ===================== পোস্ট অফিস =====================
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "সিলেট জিপিও", web: "https://post.sylhet.gov.bd/" },
      { name: "মৌলভীবাজার প্রধান ডাকঘর", web: "https://post.moulvibazar.gov.bd/" },
      { name: "হবিগঞ্জ প্রধান ডাকঘর", web: "https://post.habiganj.gov.bd/" },
      { name: "সুনামগঞ্জ প্রধান ডাকঘর", web: "https://post.sunamganj.gov.bd/" },
      { name: "শ্রীমঙ্গল ডাকঘর", web: "https://post.moulvibazar.gov.bd/pages/static-pages/696ca222c4774958d7b93755" },
    ]
  },

  // ===================== বিদ্যুৎ অফিস =====================
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "বিদ্যুৎ উন্নয়ন বোর্ড - বিভাগীয় অফিস (সিলেট)", web: "https://pdb.sylhetdiv.gov.bd" },
    { name: "বিদ্যুৎ উন্নয়ন বোর্ড - জেলা অফিস (সিলেট)", web: "https://pdb.sylhet.gov.bd" },
    { name: "সিলেট পল্লী বিদ্যুৎ সমিতি-১", web: "https://pbs1.sylhet.gov.bd" },
    { name: "সিলেট পল্লী বিদ্যুৎ সমিতি-২", web: "https://pbs2.sylhet.gov.bd" },
    { name: "মৌলভীবাজার পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.moulvibazar.gov.bd" },
    { name: "হবিগঞ্জ পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.habiganj.gov.bd" },
    { name: "সুনামগঞ্জ পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.sunamganj.gov.bd" },
    ]
  },

  // ===================== ফায়ার সার্ভিস =====================
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স - বিভাগীয় অফিস (সিলেট)", web: "https://fireservice.sylhetdiv.gov.bd" },
    { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স - সিলেট জেলা", web: "https://fireservice.sylhet.gov.bd" },
    { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স - মৌলভীবাজার", web: "https://fireservice.moulvibazar.gov.bd" },
    { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স - হবিগঞ্জ", web: "https://fireservice.habiganj.gov.bd" },
    { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স - সুনামগঞ্জ", web: "https://fireservice.sunamganj.gov.bd" },
    ]
  },

  // ===================== আদালত =====================
  {
    name: "আদালত",
    items: [
      { name: "সিলেট জেলা ও দায়রা জজ আদালত", web: "https://sylhet.judiciary.gov.bd" },
{ name: "মৌলভীবাজার জেলা ও দায়রা জজ আদালত", web: "https://moulvibazar.judiciary.gov.bd" },
{ name: "হবিগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://habiganj.judiciary.gov.bd" },
{ name: "সুনামগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://sunamganj.judiciary.gov.bd" },
    ]
  },

  // ===================== এয়ারপোর্ট =====================
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "ওসমানী আন্তর্জাতিক বিমানবন্দর (সিলেট)", web: "http://caab.gov.bd/citizen/OIA.pdf" },
      { name: "বাংলাদেশ বিমান (সিলেট অফিস)", web: "https://biman.gov.bd/pages/office-citizen-charters/%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F-%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8-rq20z5-69c8aea034fc363bf32007c9https://www.biman-airlines.com" },
    ]
  },

  // ===================== পোর্ট =====================
  {
    name: "পোর্ট",
    items: [
      { name: "কাস্টমস, এক্সাইজ ও ভ্যাট কমিশনারেট (সিলেট)", web: "https://customs.sylhetdiv.gov.bd" },
    { name: "তামাবিল স্থলবন্দর (সিলেট)", web: "https://blpa.gov.bd" },
    { name: "জকিগঞ্জ স্থল শুল্ক স্টেশন (কুশিয়ারা, সিলেট)", web: "https://customs.sylhetdiv.gov.bd" },
    { name: "ছাতক স্থল শুল্ক স্টেশন (সুনামগঞ্জ)", web: "https://customs.sylhetdiv.gov.bd" },
    ]
  },

  // ===================== ট্যুরিস্ট স্পট =====================
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "জাফলং (সিলেট)", web: "https://www.youtube.com/watch?v=kLKAcuElD_8" },
      { name: "রাতারগুল সোয়াম্প ফরেস্ট", web: "https://www.youtube.com/watch?v=FLfCmmS_adk" },
      { name: "বিছানাকান্দি (সিলেট)", web: "https://www.youtube.com/watch?v=FIMwHk5CKP8" },
      { name: "শ্রীমঙ্গল চা বাগান", web: "https://www.youtube.com/watch?v=K5HASR2KotY" },
      { name: "হাকালুকি হাওর (মৌলভীবাজার)", web: "https://www.youtube.com/watch?v=mdE9oY5Jwx4https://www.youtube.com/watch?v=FLfCmmS_adk" },
      { name: "টাঙ্গুয়ার হাওর (সুনামগঞ্জ)", web: "টাঙ্গুয়ার হাওর (সুনামগঞ্জ)" },
      { name: "লাউয়াছড়া জাতীয় উদ্যান", web: "https://www.youtube.com/watch?v=DJPREVwk6UQ" },
      { name: "মাধবকুণ্ড জলপ্রপাত (মৌলভীবাজার)", web: "মাধবকুণ্ড জলপ্রপাত (মৌলভীবাজার)" },
      { name: "হজরত শাহজালালের মাজার (সিলেট)", web: "https://www.youtube.com/watch?v=BgFpWOwCW7Y" },
      { name: "সাদাপাথর (কোম্পানীগঞ্জ)", web: "https://www.youtube.com/watch?v=byo8Wd9Ar-Q" },
    ]
  },

  // ===================== অ্যাম্বুলেন্স সার্ভিস =====================
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "জরুরি অ্যাম্বুলেন্স - ১৯৯", web: "tel:199" }, // ✅ ঠিক আছে
    { name: "ওসমানী হাসপাতাল অ্যাম্বুলেন্স (সিলেট)", web: "https://www.somch.gov.bd" },
    { name: "বাংলাদেশ রেড ক্রিসেন্ট (সিলেট)", web: "https://bdrcs.org" },
    { name: "সিলেট সিটি কর্পোরেশন অ্যাম্বুলেন্স", web: "https://scc.gov.bd" },
    ]
  },

  // ===================== ক্লিনিক =====================
  {
    name: "ক্লিনিক",
    items: [
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (সিলেট)", web: "https://www.populardiagnostic.com" },
      { name: "ল্যাব এইড ডায়াগনস্টিক (সিলেট)", web: "https://www.labaidgroup.com" },
      { name: "ইবনে সিনা ডায়াগনস্টিক (সিলেট)", web: "https://ibnsinahospitalsylhet.com.bd/" },
      { name: "শেফা ক্লিনিক (সিলেট)", web: "https://www.facebook.com/shefamedicalsylhet/" },
      { name: "সিটি ক্লিনিক (শ্রীমঙ্গল)", web: "https://paibye.com/moulvibazar-sadar/diagnostic-center/city-diagnostic-and-consultation-center/" },
    ]
  },

  // ===================== ভেটেরিনারি সার্ভিস =====================
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "সিলেট জেলা প্রাণিসম্পদ অফিস", web: "https://dls.sylhet.gov.bd" },
    { name: "মৌলভীবাজার জেলা প্রাণিসম্পদ অফিস", web: "https://dls.moulvibazar.gov.bd" },
    { name: "হবিগঞ্জ জেলা প্রাণিসম্পদ অফিস", web: "https://dls.habiganj.gov.bd" },
    { name: "সুনামগঞ্জ জেলা প্রাণিসম্পদ অফিস", web: "https://dls.sunamganj.gov.bd" },
    ]
  },

  // ===================== পানি সরবরাহ =====================
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "সিলেট সিটি কর্পোরেশন (পানি সরবরাহ)", web: "https://scc.gov.bd" },
    { name: "মৌলভীবাজার পৌরসভা পানি সরবরাহ", web: "https://www.moulvibazar.gov.bd" }, // ⚠️ যাচাই করুন
    { name: "বাংলাদেশ পানি উন্নয়ন বোর্ড (সিলেট)", web: "https://bwdb.sylhet.gov.bd" },
    { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর (সিলেট)", web: "https://dphe.sylhet.gov.bd" },
    ]
  },

  // ===================== গ্যাস সরবরাহ =====================
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "জালালাবাদ গ্যাস ট্রান্সমিশন এন্ড ডিস্ট্রিবিউশন (JGTDSL)", web: "https://jgtdsl.gov.bd/pages/officers" },
      { name: "বাংলাদেশ গ্যাস ফিল্ড কোম্পানি (BGFCL) - সিলেট", web: "https://sgfl.portal.gov.bd/" },
    ]
  },

  // ===================== টেলিকম =====================
  {
    name: "টেলিকম",
    items: [
      { name: "বাংলাদেশ টেলিযোগাযোগ কোম্পানি (BTCL) - সিলেট", web: "https://btcl.sylhet.gov.bd/" },
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
      { name: "জীবন বীমা কর্পোরেশন (সিলেট)", web: "https://btcl.sylhet.gov.bd/" },
      { name: "সাধারণ বীমা কর্পোরেশন (সিলেট)", web: "https://sbc.gov.bd/" },
      { name: "মেটলাইফ বাংলাদেশ (সিলেট)", web: "https://www.metlife.com.bd/find-a-branch/" },
      { name: "ডেল্টা লাইফ ইন্স্যুরেন্স (সিলেট)", web: "https://www.deltalife.org" },
      { name: "প্রাইম ইন্স্যুরেন্স (সিলেট)", web: "https://www.primeislamilife.com/all_officedtl.php" },
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
      { name: "হযরত শাহজালাল (র.) এর মাজার (সিলেট)", web: "https://vromonguide.com/place/hazrat-shahjalal-mazar" },
      { name: "হযরত শাহ পরান (র.) এর মাজার (সিলেট)", web: "https://vromonguide.com/place/tomb-of-hazrat-shah-paranhttps://www.islamicfoundation.gov.bd" },
      { name: "সিলেট শাহী ঈদগাহ", web: "https://vromonguide.com/place/sylhet-shahi-eidgah" },
      { name: "মনিপুরি মন্দির (মৌলভীবাজার)", web: "https://mytourbd.com/content/details/3f1b1563-0f62-4e30-bca8-2e8b534539bdhttps://www.bangladeshtourism.gov.bd" },
      { name: "শ্রীমঙ্গল বৌদ্ধ বিহার", web: "https://www.youtube.com/watch?v=uTpjnmfXY9U" },
      { name: "জৈন্তাপুর রাজবাড়ী মন্দির", web: "https://www.youtube.com/watch?v=WftiI12pBVk" },
    ]
  },

  // ===================== জনপ্রতিনিধি =====================
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "সিলেট সিটি কর্পোরেশন মেয়র", web: "https://scc.gov.bd/pages/static-pages/6922e0cf933eb65569e28ab6" },
      { name: "মৌলভীবাজার পৌরসভা চেয়ারম্যান", web: "https://www.zpmoulvibazar.gov.bd/%E0%A6%85%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A7%9F%E0%A7%80-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%AF/https://www.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ পৌরসভা চেয়ারম্যান", web: "https://habiganjpourashava.gov.bd/2025/05/24/%E0%A6%B9%E0%A6%AC%E0%A6%BF%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%AA%E0%A7%8C%E0%A6%B0%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%B0-2/" },
      { name: "সুনামগঞ্জ পৌরসভা চেয়ারম্যান", web: "https://www.sunamganjpourashava.gov.bd/" },
      { name: "সিলেট জেলা পরিষদ চেয়ারম্যান", web: "https://zp.sylhet.gov.bd/views/staff-list" },
      { name: "বাংলাদেশ জাতীয় সংসদ (সিলেট বিভাগ)", web: "https://www.parliament.gov.bd/" },
    ]
  },

  // ===================== উপজেলা চেয়ারম্যান =====================
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "সিলেট সদর উপজেলা চেয়ারম্যান", web: "https://sylhetsadar.sylhet.gov.bd/" },
      { name: "গোলাপগঞ্জ উপজেলা চেয়ারম্যান", web: "https://golapganj.sylhet.gov.bd" },
      { name: "বিয়ানীবাজার উপজেলা চেয়ারম্যান", web: "https://beanibazar.sylhet.gov.bd" },
      { name: "জকিগঞ্জ উপজেলা চেয়ারম্যান", web: "https://jakiganj.sylhet.gov.bd" },
      { name: "মৌলভীবাজার সদর উপজেলা চেয়ারম্যান", web: "https://moulvibazarsadar.moulvibazar.gov.bd/" },
      { name: "শ্রীমঙ্গল উপজেলা চেয়ারম্যান", web: "https://sreemangal.moulvibazar.gov.bd" },
      { name: "কুলাউড়া উপজেলা চেয়ারম্যান", web: "https://kulaura.moulvibazar.gov.bd" },
      { name: "হবিগঞ্জ সদর উপজেলা চেয়ারম্যান", web: "https://habiganjsadar.habiganj.gov.bd/" },
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