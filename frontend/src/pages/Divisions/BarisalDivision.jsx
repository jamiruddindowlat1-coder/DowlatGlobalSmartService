import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#34495e";
const ICON = "🏛️";

const subCategories = [
  // ──────────────── সরকারি স্কুল (জেলা ভিত্তিক) ────────────────
  {
    name: "সরকারি স্কুল (বরিশাল)",
    items: [
      { name: "বরিশাল জিলা স্কুল", web: "https://bzsb.edu.bd/" },
      { name: "বরিশাল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/BarishalGovt.GirlsHighSchool/" },
      { name: "বরিশাল সরকারি মডেল স্কুল অ্যান্ড কলেজ", web: "https://www.bgmsc.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (পটুয়াখালী)",
    items: [
      { name: "পটুয়াখালী জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পটুয়াখালী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/425827086367564/" },
    ]
  },
  {
    name: "সরকারি স্কুল (ভোলা)",
    items: [
      { name: "ভোলা জিলা স্কুল", web: "https://www.facebook.com/people/%E0%A6%AD%E0%A7%87%E0%A6%BE%E0%A6%B2%E0%A6%BE-%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2-%E0%A7%AE%E0%A7%AA/100064422983213/?locale=bn_IN#" },
      { name: "ভোলা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://bgghsbhola.gov.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (পিরোজপুর)",
    items: [
      { name: "পিরোজপুর সরকারি উচ্চ স্কুল", web: "http://www.pirojpurgovtschool.edu.bd/https://www.dshe.gov.bd" },
      { name: "পিরোজপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (ঝালকাঠি)",
    items: [
      { name: "ঝালকাঠি জিলা স্কুল", web: "https://www.bssnews.net/bangla/national/292818" },
      { name: "ঝালকাঠি সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://eurobanglatimes.com/2024/01/16/%E0%A6%9D%E0%A6%BE%E0%A6%B2%E0%A6%95%E0%A6%BE%E0%A6%A0%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%B9%E0%A6%B0%E0%A6%9A%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0/" },
    ]
  },
  {
    name: "সরকারি স্কুল (বরগুনা)",
    items: [
      { name: "বরগুনা জিলা স্কুল", web: "https://www.barisalboard.gov.bd/100154" },
      { name: "বরগুনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.barisalboard.gov.bd/100155" },
    ]
  },

  // ──────────────── বেসরকারি স্কুল ────────────────
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "বরিশাল ক্যাডেট কলেজ", web: "https://www.barisalboard.gov.bd/100443" },
      { name: "অক্সফোর্ড মিশন স্কুল (বরিশাল)", web: "https://www.facebook.com/Oxfordmissionhigh/" },
      { name: "Barishal Govt. Model School & College", web: "https://www.bgmsc.edu.bd/" },
    ]
  },

  // ──────────────── সরকারি কলেজ ────────────────
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "বরিশাল সরকারি কলেজ", web: "http://www.gbc.gov.bd/" }, // ✅ verified
        { name: "সরকারি ব্রজমোহন কলেজ (বরিশাল)", web: "https://bmcollege.site/" }, // ✅ verified
        { name: "পটুয়াখালী সরকারি কলেজ", web: "https://patuakhaligovtcollege.edu.bd/" }, 
        { name: "ভোলা সরকারি কলেজ", web: "https://bholagovtcollege.edu.bd/" },
        { name: "পিরোজপুর সরকারি মহিলা কলেজ", web: "https://pgmc.college.gov.bd/" },
        { name: "ঝালকাঠি সরকারি কলেজ", web: "https://www.jgc.edu.bd/" },
        { name: "বরগুনা সরকারি কলেজ", web: "https://bargunagovcollege.edu.bd/" },
        { name: "সরকারি সোহরাওয়ার্দী কলেজ ", web: "https://gssc.college.gov.bd/" },
        { name: "Govt,B.M,College,Barishal", web: "https://www.bmcollege.gov.bd/" },
        { name: "পিরোজপুর সরকারি টেকনিক্যাল স্কুল ও কলেজ", web: "https://tsc.pirojpur.gov.bd/" },
    
      ]
  },

  // ──────────────── বেসরকারি কলেজ ────────────────
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "বরিশাল ইন্টারন্যাশনাল কলেজ", web: "https://barisal-eng.portal.gov.bd/" },
        { name: "চাঁদমারী কলেজ (বরিশাল)", web: "https://www.dshe.gov.bd" },
        { name: "পটুয়াখালী কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ──────────────── মাদ্রাসা ────────────────
  {
    name: "মাদ্রাসা",
    items: [
      { name: "বরিশাল সরকারি আলিয়া মাদ্রাসা", web: "https://www.islamicfoundation.gov.bd" },
      { name: "পটুয়াখালী আলিয়া মাদ্রাসা", web: "https://www.facebook.com/LiliputFarhan/videos/alia-madrasah-life/875714298686619/" },
      { name: "ভোলা আলিয়া মাদ্রাসা", web: "https://www.facebook.com/groups/2773981629439476/" },
      { name: "পিরোজপুর দারুল উলুম মাদ্রাসা", web: "https://www.facebook.com/p/%E0%A6%AA%E0%A6%BF%E0%A6%B0%E0%A7%8B%E0%A6%9C%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%B2-%E0%A6%89%E0%A6%B2%E0%A7%81%E0%A6%AE-%E0%A6%95%E0%A6%93%E0%A6%AE%E0%A7%80-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BE-%E0%A6%A8%E0%A6%93%E0%A6%97%E0%A6%BE%E0%A6%81-61584112567347/" },
      { name: "দারুল উলূম বালিপাড়া কওমী মাদরাসা", web: "https://dubqm.com/" },
    ]
  },

  // ──────────────── সরকারি বিশ্ববিদ্যালয় ────────────────
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বরিশাল বিশ্ববিদ্যালয়", web: "https://www.bu.ac.bd" },
      { name: "শেরেবাংলা কৃষি বিশ্ববিদ্যালয় (বরিশাল)", web: "https://www.sau.edu.bd" },
      { name: "বরিশাল মেডিকেল কলেজ", web: "https://www.sbmc.edu.bd/" },
      { name: "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", web: "https://www.pstu.ac.bd" },
    ]
  },

  // ──────────────── বেসরকারি বিশ্ববিদ্যালয় ────────────────
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "গ্লোবাল ইউনিভার্সিটি বাংলাদেশ (বরিশাল)", web: "https://ugv.edu.bd/" },
      { name: "বরিশাল ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://bu.ac.bd/" },
    ]
  },

  // ──────────────── উপজেলা ────────────────
  {
    name: "উপজেলা",
    items: [
      { name: "বরিশাল সদর উপজেলা", web: "https://barisalsadar.barisal.gov.bd/" },
      { name: "বাকেরগঞ্জ উপজেলা", web: "https://bakerganj.barisal.gov.bd" },
      { name: "বাবুগঞ্জ উপজেলা", web: "https://babuganj.barisal.gov.bd" },
      { name: "বানারীপাড়া উপজেলা", web: "https://banaripara.barisal.gov.bd" },
      { name: "গৌরনদী উপজেলা", web: "https://gaurnadi.barisal.gov.bd" },
      { name: "আগৈলঝাড়া উপজেলা", web: "https://agailjhara.barisal.gov.bd/" },
      { name: "মেহেন্দিগঞ্জ উপজেলা", web: "https://mehendiganj.barisal.gov.bd" },
      { name: "মুলাদী উপজেলা", web: "https://muladi.barisal.gov.bd" },
      { name: "হিজলা উপজেলা", web: "https://hizla.barisal.gov.bd/" },
      { name: "উজিরপুর উপজেলা", web: "https://uzirpur.barisal.gov.bd" },
      { name: "পটুয়াখালী সদর উপজেলা", web: "https://sadar.patuakhali.gov.bd" },
      { name: "কলাপাড়া উপজেলা", web: "https://kalapara.patuakhali.gov.bd" },
      { name: "গলাচিপা উপজেলা", web: "https://galachipa.patuakhali.gov.bd" },
      { name: "বাউফল উপজেলা", web: "https://bauphal.patuakhali.gov.bd" },
      { name: "দশমিনা উপজেলা", web: "https://dashmina.patuakhali.gov.bd" },
      { name: "মির্জাগঞ্জ উপজেলা", web: "https://mirzaganj.patuakhali.gov.bd" },
      { name: "দুমকি উপজেলা", web: "https://dumki.patuakhali.gov.bd" },
      { name: "রাঙ্গাবালী উপজেলা", web: "https://rangabali.patuakhali.gov.bd" },
      { name: "ভোলা সদর উপজেলা", web: "https://sadar.bhola.gov.bd" },
      { name: "বোরহানউদ্দিন উপজেলা", web: "https://borhanuddin.bhola.gov.bd" },
      { name: "চরফ্যাশন উপজেলা", web: "https://charfasson.bhola.gov.bd" },
      { name: "দৌলতখান উপজেলা", web: "https://daulatkhan.bhola.gov.bd" },
      { name: "লালমোহন উপজেলা", web: "https://lalmohan.bhola.gov.bd" },
      { name: "মনপুরা উপজেলা", web: "https://manpura.bhola.gov.bd" },
      { name: "তজুমুদ্দিন উপজেলা", web: "https://tajumuddin.bhola.gov.bd" },
      { name: "পিরোজপুর সদর উপজেলা", web: "https://sadar.pirojpur.gov.bd" },
      { name: "নাজিরপুর উপজেলা", web: "https://nazirpur.pirojpur.gov.bd" },
      { name: "কাউখালী উপজেলা", web: "https://kawkhali.pirojpur.gov.bd" },
      { name: "ভান্ডারিয়া উপজেলা", web: "https://bhandaria.pirojpur.gov.bd" },
      { name: "মঠবাড়িয়া উপজেলা", web: "https://mathbaria.pirojpur.gov.bd" },
      { name: "নেছারাবাদ উপজেলা", web: "https://nesarabad.pirojpur.gov.bd" },
      { name: "ইন্দুরকানী উপজেলা", web: "https://indurkani.pirojpur.gov.bd" },
      { name: "ঝালকাঠি সদর উপজেলা", web: "https://sadar.jhalokati.gov.bd" },
      { name: "কাঠালিয়া উপজেলা", web: "https://kathalia.jhalokati.gov.bd" },
      { name: "নলছিটি উপজেলা", web: "https://nalchiti.jhalokati.gov.bd" },
      { name: "রাজাপুর উপজেলা", web: "https://rajapur.jhalokati.gov.bd" },
      { name: "বরগুনা সদর উপজেলা", web: "https://sadar.barguna.gov.bd" },
      { name: "আমতলী উপজেলা", web: "https://amtali.barguna.gov.bd" },
      { name: "বামনা উপজেলা", web: "https://bamna.barguna.gov.bd" },
      { name: "বেতাগী উপজেলা", web: "https://betagi.barguna.gov.bd" },
      { name: "পাথরঘাটা উপজেলা", web: "https://patharghata.barguna.gov.bd" },
      { name: "তালতলী উপজেলা", web: "https://taltali.barguna.gov.bd" },
    ]
  },

  // ──────────────── থানা ────────────────
  {
    name: "থানা",
    items: [
      { name: "বরিশাল কোতোয়ালি থানা", web: "https://www.police.gov.bd" },
      { name: "বন্দর থানা (বরিশাল)", web: "https://www.police.gov.bd" },
      { name: "কাউনিয়া থানা (বরিশাল)", web: "https://www.police.gov.bd" },
      { name: "পটুয়াখালী সদর থানা", web: "https://www.police.gov.bd" },
      { name: "ভোলা সদর থানা", web: "https://www.police.gov.bd" },
      { name: "পিরোজপুর সদর থানা", web: "https://www.police.gov.bd" },
      { name: "ঝালকাঠি সদর থানা", web: "https://www.police.gov.bd" },
      { name: "বরগুনা সদর থানা", web: "https://www.police.gov.bd" },
    ]
  },

  // ──────────────── ব্যাংক ────────────────
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (বরিশাল)", web: "https://www.sonalibank.com.bd" },
        { name: "জনতা ব্যাংক (বরিশাল)", web: "https://www.jb.com.bd" },
        { name: "অগ্রণী ব্যাংক (বরিশাল)", web: "https://www.agranibank.org" },
        { name: "রূপালী ব্যাংক (বরিশাল)", web: "https://rupalibank.com.bd/homepage_n.php?cbsid=3210" },
        { name: "ইসলামী ব্যাংক (বরিশাল)", web: "https://www.islamibankbd.com" },
        { name: "ডাচ-বাংলা ব্যাংক (বরিশাল)", web: "https://www.dutchbanglabank.com" },
        { name: "ব্র্যাক ব্যাংক (বরিশাল)", web: "https://www.bracbank.com" },
        { name: "বাংলাদেশ কৃষি ব্যাংক (বরিশাল)", web: "https://barisaldiv.krishibank.gov.bd/" },
    ]
  },

  // ──────────────── ভূমি অফিস ────────────────
  {
    name: "ভূমি অফিস",
    items: [
      { name: "বরিশাল জেলা ভূমি অফিস", web: "https://acl.barisalsadar.barisal.gov.bd/" },
      { name: "পটুয়াখালী জেলা ভূমি অফিস", web: "https://acl.sadar.patuakhali.gov.bd" },
      { name: "ভোলা জেলা ভূমি অফিস", web: "https://acl.sadar.bhola.gov.bd/" },
      { name: "পিরোজপুর জেলা ভূমি অফিস", web: "https://acl.sadar.pirojpur.gov.bd/" },
      { name: "ঝালকাঠি জেলা ভূমি অফিস", web: "https://acl.sadar.jhalakathi.gov.bd/" },
      { name: "বরগুনা জেলা ভূমি অফিস", web: "https://acl.sadar.barguna.gov.bd/" },
    ]
  },

  // ──────────────── বাস সার্ভিস ────────────────
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (বরিশাল)", web: "https://www.facebook.com/p/Hanif-Enterprise-Barishal-Counter-100090118989230/" },
      { name: "সাকুরা পরিবহন (বরিশাল)", web: "https://www.facebook.com/p/%E0%A6%B8%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%BE-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%B9%E0%A6%A8-100066416363180/" },
      { name: "বিআরটিসি (বরিশাল)", web: "https://brtcdepot.barisal.gov.bd/https://www.brtc.gov.bd" },
      { name: "ঈগল পরিবহন (বরিশাল)", web: "https://www.eagleparibahan.com/" },
      { name: "গ্রীন লাইন পরিবহন (বরিশাল)", web: "https://greenlinebd.com/" },
    ]
  },

  // ──────────────── ট্রেন সার্ভিস ────────────────
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে (বরিশাল)", web: "https://www.railway.gov.bd" },
      { name: "বরিশাল রেলওয়ে স্টেশন", web: "https://www.railway.gov.bd" },
    ]
  },

  // ──────────────── লঞ্চ সার্ভিস ────────────────
  {
    name: "লঞ্চ সার্ভিস",
    items: [
      { name: "বিআইডব্লিউটিএ (লঞ্চ সার্ভিস)", web: "https://biwta.gov.bd/" },
      { name: "সুন্দরবন লঞ্চ সার্ভিস", web: "https://www.facebook.com/MvSundarban16/" },
      { name: "পারাবত লঞ্চ সার্ভিস", web: "https://bdtechdiary.com/%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%AC%E0%A6%A4-%E0%A7%A7%E0%A7%AE-%E0%A6%95%E0%A7%87%E0%A6%AC%E0%A6%BF%E0%A6%A8-%E0%A6%AC%E0%A7%81%E0%A6%95%E0%A6%BF%E0%A6%82-%E0%A6%AD%E0%A6%BE%E0%A6%A1/" },
      { name: "কীর্তনখোলা লঞ্চ সার্ভিস", web: "https://travelinfo.com.bd/m-v-kirtonkhola-10-launch-dhaka-to-barisal-launch-schedule-and-price/" },
      { name: "এমভি মানামী লঞ্চ সার্ভিস", web: "https://mvmanami.com/" },
    ]
  },

  // ──────────────── সংবাদপত্র ────────────────
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক বরিশাল", web: "https://dainikbarishal24.com/" },
      { name: "আজকের বার্তা (বরিশাল)", web: "https://dailyajkerbarta.com/" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
      { name: "দৈনিক কালের কণ্ঠ", web: "https://www.kalerkantho.com" },
      { name: "দৈনিক ইনকিলাব", web: "https://www.dailyinqilab.com" },
      { name: "দৈনিক যুগান্তর", web: "https://www.jugantor.com" },
    ]
  },

  // ──────────────── র‌্যাব ইন্সটিটিউট ────────────────
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-৮ (বরিশাল)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৮ (ভোলা ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৮ (পটুয়াখালী ক্যাম্প)", web: "https://www.rab.gov.bd" },
    ]
  },

  // ──────────────── বিজিবি অফিস ────────────────
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি ব্যাটালিয়ন (বরিশাল)", web: "https://bgb.barisal.gov.bd/" },
      { name: "বিজিবি ব্যাটালিয়ন (পটুয়াখালী)", web: "http://bgb.portal.gov.bd/pages/news/6922da05933eb65569e01e23https://www.bgb.gov.bd" },
    ]
  },

  // ──────────────── এনজিও অফিস ────────────────
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (বরিশাল বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "আশা (বরিশাল)", web: "https://www.asa.org.bd" },
      { name: "গ্রামীণ ব্যাংক (বরিশাল)", web: "https://www.facebook.com/p/%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A7%80%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95-%E0%A6%AC%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2-%E0%A6%AF%E0%A7%8B%E0%A6%A8-100063482505270/" },
      { name: "প্রশিকা (বরিশাল)", web: "https://www.proshika.org" },
    ]
  },

  // ──────────────── সরকারি হাসপাতাল ────────────────
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "শেরেবাংলা মেডিকেল কলেজ হাসপাতাল (বরিশাল)", web: "https://sbmch.barisal.gov.bd/" },
      { name: "বরিশাল সদর হাসপাতাল", web: "https://www.barisalpedia.net.bd/barisalpedia/index.php/%E0%A6%AC%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2_%E0%A6%B8%E0%A6%A6%E0%A6%B0_%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%B2" },
      { name: "পটুয়াখালী সদর হাসপাতাল", web: "https://dghs.patuakhali.gov.bd" },
      { name: "ভোলা সদর হাসপাতাল", web: "https://health.sadar.bhola.gov.bd/" },
      { name: "পিরোজপুর সদর হাসপাতাল", web: "https://sadar.pirojpur.gov.bd/pages/static-pages/697887d235ce18e1c0663724" },
      { name: "ঝালকাঠি সদর হাসপাতাল", web: "https://health.sadar.jhalakathi.gov.bd/" },
      { name: "বরগুনা সদর হাসপাতাল", web: "https://hospital.barguna.gov.bd/" },
    ]
  },

  // ──────────────── বেসরকারি হাসপাতাল ────────────────
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "বরিশাল ক্লিনিক অ্যান্ড ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com/p/%E0%A6%AC%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2-%E0%A6%B9%E0%A7%87%E0%A6%B2%E0%A6%A5-%E0%A6%95%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%A8%E0%A6%BF%E0%A6%95-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%A1%E0%A6%BE%E0%A6%97%E0%A7%8B%E0%A6%A8%E0%A6%BF%E0%A6%B8%E0%A6%9F%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-100089858645373/https://www.facebook.com" },
      { name: "ইবনে সিনা হাসপাতাল (বরিশাল)", web: "https://ibnsinatrust.com/contact.php" },
      { name: "আল-মদিনা হাসপাতাল (বরিশাল)", web: "https://www.facebook.com/p/%E0%A6%86%E0%A6%B2-%E0%A6%AE%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A6%BE-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AD%E0%A7%87%E0%A6%9F-%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%B2-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%A1%E0%A6%BE%E0%A7%9F%E0%A6%BE%E0%A6%97%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-100070653467814/" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (বরিশাল)", web: "https://www.facebook.com/popularbarishal/?locale=bn_INhttps://www.populardiagnostic.com" },
    ]
  },

  // ──────────────── পোস্ট অফিস ────────────────
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "বরিশাল জিপিও", web: "https://post.barisal.gov.bd/" },
      { name: "পটুয়াখালী জিপিও", web: "https://posthpo.patuakhali.gov.bd/" },
      { name: "ভোলা জিপিও", web: "https://post.bhola.gov.bd/" },
      { name: "পিরোজপুর জিপিও", web: "http://bdpost.portal.gov.bd/pages/static-pages/6922dc7a933eb65569e1093e" },
      { name: "ঝালকাঠি জিপিও", web: "https://jhalakathi.gov.bd/" },
      { name: "বরগুনা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },

  // ──────────────── বিদ্যুৎ অফিস ────────────────
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "বিপিডিবি বরিশাল বিভাগীয় অফিস", web: "https://bpdb.gov.bd/" },
      { name: "বিপিডিবি পটুয়াখালী অফিস", web: "https://brdb.patuakhali.gov.bd/" },
      { name: "বিপিডিবি ভোলা অফিস", web: "https://pdb.bhola.gov.bd/" },
      { name: "পল্লী বিদ্যুৎ সমিতি (বরিশাল)", web: "https://pbs1.barisal.gov.bd/" },
    ]
  },

  // ──────────────── ফায়ার সার্ভিস ────────────────
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "বরিশাল ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://fireservice.barisaldiv.gov.bd/https://www.fireservice.gov.bd" },
      { name: "পটুয়াখালী ফায়ার সার্ভিস", web: "https://fireservice.patuakhali.gov.bd/" },
      { name: "ভোলা ফায়ার সার্ভিস", web: "https://fireservice.bhola.gov.bd/" },
      { name: "পিরোজপুর ফায়ার সার্ভিস", web: "https://fireservice.pirojpur.gov.bd/" },
      { name: "ঝালকাঠি ফায়ার সার্ভিস", web: "https://fireservice.jhalakathi.gov.bd/" },
      { name: "বরগুনা ফায়ার সার্ভিস", web: "https://fireservice.barguna.gov.bd/" },
    ]
  },

  // ──────────────── আদালত ────────────────
  {
    name: "আদালত",
    items: [
      { name: "বরিশাল জেলা ও দায়রা জজ আদালত", web: "https://barishal.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "বরিশাল চিফ জুডিশিয়াল ম্যাজিস্ট্রেট আদালত", web: "https://barishal.judiciary.gov.bd/bn/menu/page/chief-judicial-magistrate-court" },
      { name: "পটুয়াখালী জেলা আদালত", web: "https://patuakhali.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "ভোলা জেলা আদালত", web: "https://bhola.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "পিরোজপুর জেলা আদালত", web: "https://pirojpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "ঝালকাঠি জেলা আদালত", web: "https://jhalokati.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "বরগুনা জেলা আদালত", web: "https://barguna.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
    ]
  },

  // ──────────────── এয়ারপোর্ট ────────────────
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "বরিশাল বিমানবন্দর", web: "https://www.airpaz.com/bn/airports/barisal-airport-bzl" },
    ]
  },

  // ──────────────── পোর্ট ────────────────
  {
    name: "পোর্ট",
    items: [
      { name: "বরিশাল নদীবন্দর (বিআইডব্লিউটিএ)", web: "https://biwta.barisal.gov.bd/" },
      { name: "পটুয়াখালী নদীবন্দর", web: "https://biwta.patuakhali.gov.bd/" },
      { name: "পায়রা সমুদ্রবন্দর (পটুয়াখালী)", web: "https://ppa.gov.bd/" },
    ]
  },

  // ──────────────── ট্যুরিস্ট স্পট ────────────────
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "কুয়াকাটা সমুদ্র সৈকত", web: "https://parjatan.gov.bd/pages/static-pages/6922dca2933eb65569e115f8" },
      { name: "দুর্গাসাগর দিঘী (বরিশাল)", web: "https://vromonguide.com/place/durga-sagar" },
      { name: "মনপুরা দ্বীপ (ভোলা)", web: "https://vromonguide.com/place/manpura-island-bhola" },
      { name: "শাপলার বিল (বরিশাল)", web: "https://vromonguide.com/place/shapla-gram-satla" },
      { name: "লালদিয়া বনাঞ্চল (ভোলা)", web: "https://vromonguide.com/destination/forest" },
      { name: "পায়রা সমুদ্রসৈকত (পটুয়াখালী)", web: "https://vromonguide.com/place/payra-sea-port-patuakhalihttps://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ──────────────── অ্যাম্বুলেন্স সার্ভিস ────────────────
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "বরিশাল রেড ক্রিসেন্ট অ্যাম্বুলেন্স", web: "https://www.hellodoctorzone.com/%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%8F%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%B8%E0%A6%BE%E0%A6%B0/" },
      { name: "শেরেবাংলা মেডিকেল অ্যাম্বুলেন্স সার্ভিস", web: "https://easydoctorseba.com/ambulances/17" },
      { name: "জাতীয় জরুরি সেবা ৯৯৯ (বরিশাল)", web: "https://fireservice.barisal.gov.bd/pages/static-pages/697895c735ce18e1c066b8d7" },
    ]
  },

  // ──────────────── ক্লিনিক ────────────────
  {
    name: "ক্লিনিক",
    items: [
      { name: "মেরি স্টোপস ক্লিনিক (বরিশাল)", web: "https://mariestopes.org.bd/find-us/clinics/marie-stopes-clinic-barisal/" },
      { name: "মা ও শিশু কল্যাণ কেন্দ্র (বরিশাল)", web: "https://fpo.barisal.gov.bd/pages/notices/%E0%A6%AC%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A3-%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0-%E0%A6%8F%E0%A6%AC%E0%A6%82-%E0%A6%AE%E0%A6%BE-%E0%A6%93-%E0%A6%B6%E0%A6%BF%E0%A6%B6%E0%A7%81-%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A3-%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9%E0%A7%87-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BE-%E0%A6%9C%E0%A7%8B%E0%A6%B0%E0%A6%A6%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A6%B0%E0%A6%BE-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B8%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A7%87-mu1nhc-69ba311af45c1c5f83c4644a" },
      { name: "পরিবার পরিকল্পনা ক্লিনিক (বরিশাল)", web: "https://fpo.barisal.gov.bd/" },
    ]
  },

  // ──────────────── ভেটেরিনারি সার্ভিস ────────────────
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "বরিশাল জেলা প্রাণিসম্পদ অফিস", web: "https://dls.barisal.gov.bd/" },
      { name: "পটুয়াখালী জেলা প্রাণিসম্পদ অফিস", web: "https://dls.patuakhali.gov.bd/" },
      { name: "ভোলা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.bhola.gov.bd/" },
    ]
  },

  // ──────────────── পানি সরবরাহ ────────────────
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "বরিশাল সিটি কর্পোরেশন পানি সরবরাহ", web: "https://www.barishalcity.gov.bd/info/%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%B9-%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%97" },
      { name: "বরিশাল ওয়াসা", web: "https://bwdb.barisal.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর (বরিশাল)", web: "https://dphe.barisal.gov.bd/" },
    ]
  },

  // ──────────────── গ্যাস সরবরাহ ────────────────
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি (বরিশাল)", web: "https://bgdcl.gov.bd/" },
      { name: "রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানি (বরিশাল)", web: "https://rpgcl.org.bd/" },
    ]
  },

  // ──────────────── টেলিকম ────────────────
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন সার্ভিস সেন্টার (বরিশাল)", web: "https://bn.amarsim.com/%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A7%80%E0%A6%A3%E0%A6%AB%E0%A7%8B%E0%A6%A8-%E0%A6%95%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%AE%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A7%87%E0%A6%AF%E0%A6%BC/" },
      { name: "রবি সার্ভিস সেন্টার (বরিশাল)", web: "https://www.robi.com.bd/en/robi-sheba-locator" },
      { name: "বাংলালিংক সার্ভিস সেন্টার (বরিশাল)", web: "https://barisal-sadar.infoisinfo.com.bd/card/banglalink-point-customer-care-service/1336" },
      { name: "টেলিটক সার্ভিস সেন্টার (বরিশাল)", web: "https://teletalk.com.bd/bn/customer-care-center" },
      { name: "বিটিসিএল (বরিশাল)", web: "https://btcl.barisal.gov.bd/" },
    ]
  },

  // ──────────────── বীমা ────────────────
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (বরিশাল)", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন (বরিশাল)", web: "https://www.sbc.gov.bd" },
      { name: "মেটলাইফ বাংলাদেশ (বরিশাল)", web: "https://www.metlife.com.bd" },
    ]
  },

  // ──────────────── সমবায় ────────────────
  {
    name: "সমবায়",
    items: [
      { name: "বরিশাল জেলা সমবায় অফিস", web: "https://jbc.gov.bd/pages/static-pages/6922e041933eb65569e26396" },
      { name: "পটুয়াখালী জেলা সমবায় অফিস", web: "https://cooparative.patuakhali.gov.bd/" },
      { name: "বাংলাদেশ পল্লী উন্নয়ন বোর্ড (বরিশাল)", web: "https://brdb.barisal.gov.bd/" },
    ]
  },

  // ──────────────── ধর্মীয় স্থান ────────────────
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "বরিশাল কেন্দ্রীয় জামে মসজিদ", web: "https://vromonguide.com/place/guthia-mosque" },
      { name: "অক্সফোর্ড মিশন চার্চ (বরিশাল)", web: "https://vromonguide.com/place/oxford-mission-church" },
      { name: "বরিশাল হিন্দু মন্দির", web: "https://yellowpages-bn.cybo.com/BD/%E0%A6%AC%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2/%E0%A6%B9%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%81-%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0/" },
      { name: "কুয়াকাটা রাখাইন বৌদ্ধ মন্দির", web: "https://m.somewhereinblog.net/mobile/blog/rupanjummo/30199273" },
    ]
  },

  // ──────────────── জনপ্রতিনিধি ────────────────
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "বরিশাল সিটি কর্পোরেশন মেয়র", web: "https://barishalcity.gov.bd/info/%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BE" },
      { name: "বরিশাল জেলা পরিষদ", web: "https://zp.barishal.gov.bd/" },
      { name: "পটুয়াখালী জেলা পরিষদ", web: "https://zp.patuakhali.gov.bd/" },
      { name: "ভোলা জেলা পরিষদ", web: "https://zp.bhola.gov.bd/" },
      { name: "পিরোজপুর জেলা পরিষদ", web: "https://zp.pirojpur.gov.bd/" },
      { name: "ঝালকাঠি জেলা পরিষদ", web: "https://zp.jhalakathi.gov.bd/" },
      { name: "বরগুনা জেলা পরিষদ", web: "https://zp.barguna.gov.bd/" },
    ]
  },

  // ──────────────── উপজেলা চেয়ারম্যান ────────────────
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "বরিশাল সদর উপজেলা চেয়ারম্যান", web: "https://barisalsadar.barisal.gov.bd/pages/static-pages/6978a32335ce18e1c0672320" },
      { name: "বাকেরগঞ্জ উপজেলা চেয়ারম্যান", web: "https://bakerganj.barisal.gov.bd" },
      { name: "পটুয়াখালী সদর উপজেলা চেয়ারম্যান", web: "https://sadar.patuakhali.gov.bd" },
      { name: "ভোলা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.bhola.gov.bd" },
      { name: "পিরোজপুর সদর উপজেলা চেয়ারম্যান", web: "https://sadar.pirojpur.gov.bd" },
      { name: "ঝালকাঠি সদর উপজেলা চেয়ারম্যান", web: "https://sadar.jhalakathi.gov.bd/pages/leaders" },
      { name: "বরগুনা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.barguna.gov.bd" },
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