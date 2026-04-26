import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#34495e";
const ICON = "🏛️";

const subCategories = [
  // ──────────────── সরকারি স্কুল (জেলা ভিত্তিক) ────────────────
  {
    name: "সরকারি স্কুল (বরিশাল)",
    items: [
      { name: "বরিশাল জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বরিশাল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "বরিশাল সরকারি মডেল স্কুল অ্যান্ড কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (পটুয়াখালী)",
    items: [
      { name: "পটুয়াখালী জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পটুয়াখালী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (ভোলা)",
    items: [
      { name: "ভোলা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "ভোলা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (পিরোজপুর)",
    items: [
      { name: "পিরোজপুর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "পিরোজপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (ঝালকাঠি)",
    items: [
      { name: "ঝালকাঠি জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "ঝালকাঠি সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (বরগুনা)",
    items: [
      { name: "বরগুনা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বরগুনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ──────────────── বেসরকারি স্কুল ────────────────
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "বরিশাল ক্যাডেট কলেজ", web: "https://www.bcc.edu.bd" },
      { name: "অক্সফোর্ড মিশন স্কুল (বরিশাল)", web: "https://www.dshe.gov.bd" },
      { name: "বরিশাল জিলা প্রাইমারি স্কুল", web: "https://www.dpe.gov.bd" },
    ]
  },

  // ──────────────── সরকারি কলেজ ────────────────
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "বরিশাল সরকারি কলেজ", web: "https://www.barisalgovtcollege.edu.bd" },
      { name: "সরকারি ব্রজমোহন কলেজ (বরিশাল)", web: "https://www.bmcollege.edu.bd" },
      { name: "পটুয়াখালী সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "ভোলা সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "পিরোজপুর সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "ঝালকাঠি সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "বরগুনা সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ──────────────── বেসরকারি কলেজ ────────────────
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "বরিশাল ইন্টারন্যাশনাল কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "চাঁদমারী কলেজ (বরিশাল)", web: "https://www.dshe.gov.bd" },
      { name: "পটুয়াখালী কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ──────────────── মাদ্রাসা ────────────────
  {
    name: "মাদ্রাসা",
    items: [
      { name: "বরিশাল সরকারি আলিয়া মাদ্রাসা", web: "https://www.islamicfoundation.gov.bd" },
      { name: "পটুয়াখালী আলিয়া মাদ্রাসা", web: "https://www.islamicfoundation.gov.bd" },
      { name: "ভোলা আলিয়া মাদ্রাসা", web: "https://www.islamicfoundation.gov.bd" },
      { name: "পিরোজপুর দারুল উলুম মাদ্রাসা", web: "https://www.islamicfoundation.gov.bd" },
    ]
  },

  // ──────────────── সরকারি বিশ্ববিদ্যালয় ────────────────
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বরিশাল বিশ্ববিদ্যালয়", web: "https://www.bu.ac.bd" },
      { name: "শেরেবাংলা কৃষি বিশ্ববিদ্যালয় (বরিশাল)", web: "https://www.sau.edu.bd" },
      { name: "বরিশাল মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
      { name: "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", web: "https://www.pstu.ac.bd" },
    ]
  },

  // ──────────────── বেসরকারি বিশ্ববিদ্যালয় ────────────────
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "গ্লোবাল ইউনিভার্সিটি বাংলাদেশ (বরিশাল)", web: "https://www.ugc.gov.bd" },
      { name: "বরিশাল ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.ugc.gov.bd" },
    ]
  },

  // ──────────────── উপজেলা ────────────────
  {
    name: "উপজেলা",
    items: [
      { name: "বরিশাল সদর উপজেলা", web: "https://sadar.barisal.gov.bd" },
      { name: "বাকেরগঞ্জ উপজেলা", web: "https://bakerganj.barisal.gov.bd" },
      { name: "বাবুগঞ্জ উপজেলা", web: "https://babuganj.barisal.gov.bd" },
      { name: "বানারীপাড়া উপজেলা", web: "https://banaripara.barisal.gov.bd" },
      { name: "গৌরনদী উপজেলা", web: "https://gaurnadi.barisal.gov.bd" },
      { name: "আগৈলঝাড়া উপজেলা", web: "https://agailjhara.barisal.gov.bd" },
      { name: "মেহেন্দিগঞ্জ উপজেলা", web: "https://mehendiganj.barisal.gov.bd" },
      { name: "মুলাদী উপজেলা", web: "https://muladi.barisal.gov.bd" },
      { name: "হিজলা উপজেলা", web: "https://hijla.barisal.gov.bd" },
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
      { name: "রূপালী ব্যাংক (বরিশাল)", web: "https://www.rupalibank.org" },
      { name: "ইসলামী ব্যাংক (বরিশাল)", web: "https://www.islamibankbd.com" },
      { name: "ডাচ-বাংলা ব্যাংক (বরিশাল)", web: "https://www.dutchbanglabank.com" },
      { name: "ব্র্যাক ব্যাংক (বরিশাল)", web: "https://www.bracbank.com" },
      { name: "বাংলাদেশ কৃষি ব্যাংক (বরিশাল)", web: "https://www.krishibank.org.bd" },
    ]
  },

  // ──────────────── ভূমি অফিস ────────────────
  {
    name: "ভূমি অফিস",
    items: [
      { name: "বরিশাল জেলা ভূমি অফিস", web: "https://land.barisal.gov.bd" },
      { name: "পটুয়াখালী জেলা ভূমি অফিস", web: "https://land.patuakhali.gov.bd" },
      { name: "ভোলা জেলা ভূমি অফিস", web: "https://land.bhola.gov.bd" },
      { name: "পিরোজপুর জেলা ভূমি অফিস", web: "https://land.pirojpur.gov.bd" },
      { name: "ঝালকাঠি জেলা ভূমি অফিস", web: "https://land.jhalokati.gov.bd" },
      { name: "বরগুনা জেলা ভূমি অফিস", web: "https://land.barguna.gov.bd" },
    ]
  },

  // ──────────────── বাস সার্ভিস ────────────────
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (বরিশাল)", web: "https://www.hanifenterprisebd.com" },
      { name: "সাকুরা পরিবহন (বরিশাল)", web: "https://www.facebook.com/sakuraparibahan" },
      { name: "বিআরটিসি (বরিশাল)", web: "https://www.brtc.gov.bd" },
      { name: "ঈগল পরিবহন (বরিশাল)", web: "https://www.facebook.com" },
      { name: "গ্রীন লাইন পরিবহন (বরিশাল)", web: "https://www.greenlinesbd.com" },
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
      { name: "বিআইডব্লিউটিএ (লঞ্চ সার্ভিস)", web: "https://www.biwta.gov.bd" },
      { name: "সুন্দরবন লঞ্চ সার্ভিস", web: "https://www.facebook.com/sundarbanlaunche" },
      { name: "পারাবত লঞ্চ সার্ভিস", web: "https://www.facebook.com/parabatlaunche" },
      { name: "কীর্তনখোলা লঞ্চ সার্ভিস", web: "https://www.biwta.gov.bd" },
      { name: "এমভি মানামী লঞ্চ সার্ভিস", web: "https://www.biwta.gov.bd" },
    ]
  },

  // ──────────────── সংবাদপত্র ────────────────
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক বরিশাল", web: "https://www.facebook.com/dailybarisal" },
      { name: "আজকের বার্তা (বরিশাল)", web: "https://www.facebook.com/ajkerbartabarisal" },
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
      { name: "বিজিবি ব্যাটালিয়ন (বরিশাল)", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন (পটুয়াখালী)", web: "https://www.bgb.gov.bd" },
    ]
  },

  // ──────────────── এনজিও অফিস ────────────────
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (বরিশাল বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "আশা (বরিশাল)", web: "https://www.asa.org.bd" },
      { name: "গ্রামীণ ব্যাংক (বরিশাল)", web: "https://www.grameen.com" },
      { name: "প্রশিকা (বরিশাল)", web: "https://www.proshika.org" },
    ]
  },

  // ──────────────── সরকারি হাসপাতাল ────────────────
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "শেরেবাংলা মেডিকেল কলেজ হাসপাতাল (বরিশাল)", web: "https://www.sbmch.gov.bd" },
      { name: "বরিশাল সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "পটুয়াখালী সদর হাসপাতাল", web: "https://dghs.patuakhali.gov.bd" },
      { name: "ভোলা সদর হাসপাতাল", web: "https://dghs.bhola.gov.bd" },
      { name: "পিরোজপুর সদর হাসপাতাল", web: "https://dghs.pirojpur.gov.bd" },
      { name: "ঝালকাঠি সদর হাসপাতাল", web: "https://dghs.jhalokati.gov.bd" },
      { name: "বরগুনা সদর হাসপাতাল", web: "https://dghs.barguna.gov.bd" },
    ]
  },

  // ──────────────── বেসরকারি হাসপাতাল ────────────────
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "বরিশাল ক্লিনিক অ্যান্ড ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com" },
      { name: "ইবনে সিনা হাসপাতাল (বরিশাল)", web: "https://www.ibnsinahospital.com" },
      { name: "আল-মদিনা হাসপাতাল (বরিশাল)", web: "https://www.facebook.com" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (বরিশাল)", web: "https://www.populardiagnostic.com" },
    ]
  },

  // ──────────────── পোস্ট অফিস ────────────────
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "বরিশাল জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "পটুয়াখালী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ভোলা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "পিরোজপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ঝালকাঠি জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "বরগুনা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },

  // ──────────────── বিদ্যুৎ অফিস ────────────────
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "বিপিডিবি বরিশাল বিভাগীয় অফিস", web: "https://www.bpdb.gov.bd" },
      { name: "বিপিডিবি পটুয়াখালী অফিস", web: "https://www.bpdb.gov.bd" },
      { name: "বিপিডিবি ভোলা অফিস", web: "https://www.bpdb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (বরিশাল)", web: "https://www.reb.gov.bd" },
    ]
  },

  // ──────────────── ফায়ার সার্ভিস ────────────────
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "বরিশাল ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" },
      { name: "পটুয়াখালী ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "ভোলা ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "পিরোজপুর ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "ঝালকাঠি ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "বরগুনা ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },

  // ──────────────── আদালত ────────────────
  {
    name: "আদালত",
    items: [
      { name: "বরিশাল জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.gov.bd" },
      { name: "বরিশাল চিফ জুডিশিয়াল ম্যাজিস্ট্রেট আদালত", web: "https://www.judiciary.gov.bd" },
      { name: "পটুয়াখালী জেলা আদালত", web: "https://www.judiciary.gov.bd" },
      { name: "ভোলা জেলা আদালত", web: "https://www.judiciary.gov.bd" },
      { name: "পিরোজপুর জেলা আদালত", web: "https://www.judiciary.gov.bd" },
      { name: "ঝালকাঠি জেলা আদালত", web: "https://www.judiciary.gov.bd" },
      { name: "বরগুনা জেলা আদালত", web: "https://www.judiciary.gov.bd" },
    ]
  },

  // ──────────────── এয়ারপোর্ট ────────────────
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "বরিশাল বিমানবন্দর", web: "https://www.caab.gov.bd" },
    ]
  },

  // ──────────────── পোর্ট ────────────────
  {
    name: "পোর্ট",
    items: [
      { name: "বরিশাল নদীবন্দর (বিআইডব্লিউটিএ)", web: "https://www.biwta.gov.bd" },
      { name: "পটুয়াখালী নদীবন্দর", web: "https://www.biwta.gov.bd" },
      { name: "পায়রা সমুদ্রবন্দর (পটুয়াখালী)", web: "https://www.payraport.gov.bd" },
    ]
  },

  // ──────────────── ট্যুরিস্ট স্পট ────────────────
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "কুয়াকাটা সমুদ্র সৈকত", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "দুর্গাসাগর দিঘী (বরিশাল)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মনপুরা দ্বীপ (ভোলা)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "শাপলার বিল (বরিশাল)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "লালদিয়া বনাঞ্চল (ভোলা)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "পায়রা সমুদ্রসৈকত (পটুয়াখালী)", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ──────────────── অ্যাম্বুলেন্স সার্ভিস ────────────────
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "বরিশাল রেড ক্রিসেন্ট অ্যাম্বুলেন্স", web: "https://www.bdrcs.org" },
      { name: "শেরেবাংলা মেডিকেল অ্যাম্বুলেন্স সার্ভিস", web: "https://www.sbmch.gov.bd" },
      { name: "জাতীয় জরুরি সেবা ৯৯৯ (বরিশাল)", web: "https://www.999.gov.bd" },
    ]
  },

  // ──────────────── ক্লিনিক ────────────────
  {
    name: "ক্লিনিক",
    items: [
      { name: "মেরি স্টোপস ক্লিনিক (বরিশাল)", web: "https://www.mariestopes.org.bd" },
      { name: "মা ও শিশু কল্যাণ কেন্দ্র (বরিশাল)", web: "https://www.dghs.gov.bd" },
      { name: "পরিবার পরিকল্পনা ক্লিনিক (বরিশাল)", web: "https://www.niport.gov.bd" },
    ]
  },

  // ──────────────── ভেটেরিনারি সার্ভিস ────────────────
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "বরিশাল জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "পটুয়াখালী জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "ভোলা জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
    ]
  },

  // ──────────────── পানি সরবরাহ ────────────────
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "বরিশাল সিটি কর্পোরেশন পানি সরবরাহ", web: "https://www.bcc.gov.bd" },
      { name: "বরিশাল ওয়াসা", web: "https://www.wasa.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর (বরিশাল)", web: "https://www.dphe.gov.bd" },
    ]
  },

  // ──────────────── গ্যাস সরবরাহ ────────────────
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি (বরিশাল)", web: "https://www.bgdcl.com" },
      { name: "রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানি (বরিশাল)", web: "https://www.rpgcl.gov.bd" },
    ]
  },

  // ──────────────── টেলিকম ────────────────
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন সার্ভিস সেন্টার (বরিশাল)", web: "https://www.grameenphone.com" },
      { name: "রবি সার্ভিস সেন্টার (বরিশাল)", web: "https://www.robi.com.bd" },
      { name: "বাংলালিংক সার্ভিস সেন্টার (বরিশাল)", web: "https://www.banglalink.net" },
      { name: "টেলিটক সার্ভিস সেন্টার (বরিশাল)", web: "https://www.teletalk.com.bd" },
      { name: "বিটিসিএল (বরিশাল)", web: "https://www.btcl.gov.bd" },
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
      { name: "বরিশাল জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "পটুয়াখালী জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "বাংলাদেশ পল্লী উন্নয়ন বোর্ড (বরিশাল)", web: "https://www.brdb.gov.bd" },
    ]
  },

  // ──────────────── ধর্মীয় স্থান ────────────────
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "বরিশাল কেন্দ্রীয় জামে মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "অক্সফোর্ড মিশন চার্চ (বরিশাল)", web: "https://www.facebook.com" },
      { name: "বরিশাল হিন্দু মন্দির", web: "https://www.facebook.com" },
      { name: "কুয়াকাটা রাখাইন বৌদ্ধ মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ──────────────── জনপ্রতিনিধি ────────────────
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "বরিশাল সিটি কর্পোরেশন মেয়র", web: "https://www.bcc.gov.bd" },
      { name: "বরিশাল জেলা পরিষদ", web: "https://www.barisal.gov.bd" },
      { name: "পটুয়াখালী জেলা পরিষদ", web: "https://www.patuakhali.gov.bd" },
      { name: "ভোলা জেলা পরিষদ", web: "https://www.bhola.gov.bd" },
      { name: "পিরোজপুর জেলা পরিষদ", web: "https://www.pirojpur.gov.bd" },
      { name: "ঝালকাঠি জেলা পরিষদ", web: "https://www.jhalokati.gov.bd" },
      { name: "বরগুনা জেলা পরিষদ", web: "https://www.barguna.gov.bd" },
    ]
  },

  // ──────────────── উপজেলা চেয়ারম্যান ────────────────
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "বরিশাল সদর উপজেলা চেয়ারম্যান", web: "https://sadar.barisal.gov.bd" },
      { name: "বাকেরগঞ্জ উপজেলা চেয়ারম্যান", web: "https://bakerganj.barisal.gov.bd" },
      { name: "পটুয়াখালী সদর উপজেলা চেয়ারম্যান", web: "https://sadar.patuakhali.gov.bd" },
      { name: "ভোলা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.bhola.gov.bd" },
      { name: "পিরোজপুর সদর উপজেলা চেয়ারম্যান", web: "https://sadar.pirojpur.gov.bd" },
      { name: "ঝালকাঠি সদর উপজেলা চেয়ারম্যান", web: "https://sadar.jhalokati.gov.bd" },
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