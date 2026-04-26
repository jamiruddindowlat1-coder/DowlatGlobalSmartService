import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#1abc9c";
const ICON = "🏛️";

const subCategories = [
  // ===================== সরকারি স্কুল (জেলা অনুযায়ী) =====================
  {
    name: "সরকারি স্কুল (খুলনা)",
    items: [
      { name: "খুলনা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "খুলনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "খুলনা সরকারি করোনেশন মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "সুন্দরবন আদর্শ মাধ্যমিক বিদ্যালয় (খুলনা)", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (বাগেরহাট)",
    items: [
      { name: "বাগেরহাট জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "বাগেরহাট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মোড়েলগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (সাতক্ষীরা)",
    items: [
      { name: "সাতক্ষীরা জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "সাতক্ষীরা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "কালীগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (যশোর)",
    items: [
      { name: "যশোর জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "যশোর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "অভয়নগর পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "চৌগাছা পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (নড়াইল)",
    items: [
      { name: "নড়াইল জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "নড়াইল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "লোহাগড়া পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (মাগুরা)",
    items: [
      { name: "মাগুরা সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মাগুরা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "শালিখা পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (ঝিনাইদহ)",
    items: [
      { name: "ঝিনাইদহ সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "ঝিনাইদহ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "কালীগঞ্জ পাইলট মাধ্যমিক বিদ্যালয় (ঝিনাইদহ)", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (কুষ্টিয়া)",
    items: [
      { name: "কুষ্টিয়া জিলা স্কুল", web: "https://www.dshe.gov.bd" },
      { name: "কুষ্টিয়া সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "কুমারখালী পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (চুয়াডাঙ্গা)",
    items: [
      { name: "চুয়াডাঙ্গা সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "চুয়াডাঙ্গা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "আলমডাঙ্গা পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (মেহেরপুর)",
    items: [
      { name: "মেহেরপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "মেহেরপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
      { name: "গাংনী পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== বেসরকারি স্কুল =====================
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "খুলনা পাবলিক স্কুল এন্ড কলেজ", web: "https://www.kpsc.edu.bd" },
      { name: "বিএল স্কুল এন্ড কলেজ (খুলনা)", web: "https://www.dshe.gov.bd" },
      { name: "যশোর ক্যান্টনমেন্ট পাবলিক স্কুল", web: "https://www.jcps.edu.bd" },
      { name: "কুষ্টিয়া ইসলামিক একাডেমি", web: "https://www.dshe.gov.bd" },
      { name: "সাতক্ষীরা আদর্শ উচ্চ বিদ্যালয়", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== সরকারি কলেজ =====================
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "খুলনা সরকারি বি.এল. কলেজ", web: "https://www.blcollege.edu.bd" },
      { name: "খুলনা সরকারি মহিলা কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "যশোর সরকারি মাইকেল মধুসূদন কলেজ", web: "https://www.mmcollege.edu.bd" },
      { name: "কুষ্টিয়া সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "সাতক্ষীরা সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "বাগেরহাট সরকারি পিসি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "ঝিনাইদহ সরকারি কে.সি. কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "নড়াইল সরকারি ভিক্টোরিয়া কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "মাগুরা সরকারি হোসেন শহীদ সোহরাওয়ার্দী কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "চুয়াডাঙ্গা সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "মেহেরপুর সরকারি কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== বেসরকারি কলেজ =====================
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "খুলনা আজম খান কমার্স কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "দৌলতপুর মুসলিম পাইলট হাই স্কুল এন্ড কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "যশোর ক্যান্টনমেন্ট কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "কুষ্টিয়া সিটি কলেজ", web: "https://www.dshe.gov.bd" },
      { name: "সাতক্ষীরা মডেল কলেজ", web: "https://www.dshe.gov.bd" },
    ]
  },

  // ===================== মাদ্রাসা =====================
  {
    name: "মাদ্রাসা",
    items: [
      { name: "খুলনা আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "যশোর কামিল মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "কুষ্টিয়া আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "সাতক্ষীরা আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "বাগেরহাট আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "ঝিনাইদহ আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
    ]
  },

  // ===================== সরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "খুলনা বিশ্ববিদ্যালয়", web: "https://www.ku.ac.bd" },
      { name: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)", web: "https://www.kuet.ac.bd" },
      { name: "ইসলামী বিশ্ববিদ্যালয় কুষ্টিয়া", web: "https://www.iu.ac.bd" },
      { name: "খুলনা মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
      { name: "শেখ হাসিনা মেডিকেল কলেজ (যশোর)", web: "https://www.dghs.gov.bd" },
    ]
  },

  // ===================== বেসরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "নর্দার্ন ইউনিভার্সিটি অব বিজনেস এন্ড টেকনোলজি (খুলনা)", web: "https://www.nubtkhulna.ac.bd" },
      { name: "খুলনা ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.kiu.ac.bd" },
      { name: "সাউদার্ন ইউনিভার্সিটি (খুলনা)", web: "https://www.southern.edu.bd" },
      { name: "নর্থ ওয়েস্টার্ন ইউনিভার্সিটি (খুলনা)", web: "https://www.nwu.ac.bd" },
    ]
  },

  // ===================== উপজেলা =====================
  {
    name: "উপজেলা",
    items: [
      { name: "খুলনা সদর উপজেলা", web: "https://sadar.khulna.gov.bd" },
      { name: "বটিয়াঘাটা উপজেলা", web: "https://batiaghata.khulna.gov.bd" },
      { name: "ডুমুরিয়া উপজেলা", web: "https://dumuria.khulna.gov.bd" },
      { name: "দিঘলিয়া উপজেলা", web: "https://dighalia.khulna.gov.bd" },
      { name: "পাইকগাছা উপজেলা", web: "https://paikgachha.khulna.gov.bd" },
      { name: "ফুলতলা উপজেলা", web: "https://phultala.khulna.gov.bd" },
      { name: "তেরখাদা উপজেলা", web: "https://terokhada.khulna.gov.bd" },
      { name: "দাকোপ উপজেলা", web: "https://dacope.khulna.gov.bd" },
      { name: "কয়রা উপজেলা", web: "https://koyra.khulna.gov.bd" },
      { name: "যশোর সদর উপজেলা", web: "https://sadar.jessore.gov.bd" },
      { name: "অভয়নগর উপজেলা", web: "https://abhaynagar.jessore.gov.bd" },
      { name: "বাঘারপাড়া উপজেলা", web: "https://bagharpara.jessore.gov.bd" },
      { name: "চৌগাছা উপজেলা", web: "https://chaugachha.jessore.gov.bd" },
      { name: "ঝিকরগাছা উপজেলা", web: "https://jhikargachha.jessore.gov.bd" },
      { name: "কেশবপুর উপজেলা", web: "https://keshabpur.jessore.gov.bd" },
      { name: "মণিরামপুর উপজেলা", web: "https://manirampur.jessore.gov.bd" },
      { name: "শার্শা উপজেলা", web: "https://sharsha.jessore.gov.bd" },
      { name: "কুষ্টিয়া সদর উপজেলা", web: "https://sadar.kushtia.gov.bd" },
      { name: "কুমারখালী উপজেলা", web: "https://kumarkhali.kushtia.gov.bd" },
      { name: "খোকসা উপজেলা", web: "https://khoksa.kushtia.gov.bd" },
      { name: "দৌলতপুর উপজেলা", web: "https://daulatpur.kushtia.gov.bd" },
      { name: "মিরপুর উপজেলা", web: "https://mirpur.kushtia.gov.bd" },
      { name: "ভেড়ামারা উপজেলা", web: "https://bheramara.kushtia.gov.bd" },
      { name: "সাতক্ষীরা সদর উপজেলা", web: "https://sadar.satkhira.gov.bd" },
      { name: "আশাশুনি উপজেলা", web: "https://assasuni.satkhira.gov.bd" },
      { name: "দেবহাটা উপজেলা", web: "https://debhata.satkhira.gov.bd" },
      { name: "কালিগঞ্জ উপজেলা", web: "https://kaliganj.satkhira.gov.bd" },
      { name: "কলারোয়া উপজেলা", web: "https://kolaroa.satkhira.gov.bd" },
      { name: "শ্যামনগর উপজেলা", web: "https://shyamnagar.satkhira.gov.bd" },
      { name: "তালা উপজেলা", web: "https://tala.satkhira.gov.bd" },
      { name: "বাগেরহাট সদর উপজেলা", web: "https://sadar.bagerhat.gov.bd" },
      { name: "ফকিরহাট উপজেলা", web: "https://fakirhat.bagerhat.gov.bd" },
      { name: "মোংলা উপজেলা", web: "https://mongla.bagerhat.gov.bd" },
      { name: "মোড়েলগঞ্জ উপজেলা", web: "https://morrelganj.bagerhat.gov.bd" },
      { name: "রামপাল উপজেলা", web: "https://rampal.bagerhat.gov.bd" },
      { name: "শরণখোলা উপজেলা", web: "https://sharankhola.bagerhat.gov.bd" },
      { name: "ঝিনাইদহ সদর উপজেলা", web: "https://sadar.jhenaidah.gov.bd" },
      { name: "কালীগঞ্জ উপজেলা (ঝিনাইদহ)", web: "https://kaliganj.jhenaidah.gov.bd" },
      { name: "কোটচাঁদপুর উপজেলা", web: "https://kotchandpur.jhenaidah.gov.bd" },
      { name: "মহেশপুর উপজেলা", web: "https://maheshpur.jhenaidah.gov.bd" },
      { name: "শৈলকুপা উপজেলা", web: "https://shailkupa.jhenaidah.gov.bd" },
      { name: "হরিণাকুন্ডু উপজেলা", web: "https://harinakunda.jhenaidah.gov.bd" },
      { name: "নড়াইল সদর উপজেলা", web: "https://sadar.narail.gov.bd" },
      { name: "কালিয়া উপজেলা", web: "https://kalia.narail.gov.bd" },
      { name: "লোহাগড়া উপজেলা", web: "https://lohagara.narail.gov.bd" },
      { name: "মাগুরা সদর উপজেলা", web: "https://sadar.magura.gov.bd" },
      { name: "মহম্মদপুর উপজেলা", web: "https://mohammadpur.magura.gov.bd" },
      { name: "শালিখা উপজেলা", web: "https://shalikha.magura.gov.bd" },
      { name: "শ্রীপুর উপজেলা", web: "https://sreepur.magura.gov.bd" },
      { name: "চুয়াডাঙ্গা সদর উপজেলা", web: "https://sadar.chuadanga.gov.bd" },
      { name: "আলমডাঙ্গা উপজেলা", web: "https://alamdanga.chuadanga.gov.bd" },
      { name: "দামুড়হুদা উপজেলা", web: "https://damurhuda.chuadanga.gov.bd" },
      { name: "জীবননগর উপজেলা", web: "https://jibannagor.chuadanga.gov.bd" },
      { name: "মেহেরপুর সদর উপজেলা", web: "https://sadar.meherpur.gov.bd" },
      { name: "গাংনী উপজেলা", web: "https://gangni.meherpur.gov.bd" },
      { name: "মুজিবনগর উপজেলা", web: "https://mujibnagar.meherpur.gov.bd" },
    ]
  },

  // ===================== থানা =====================
  {
    name: "থানা",
    items: [
      { name: "খুলনা সদর থানা", web: "https://www.police.gov.bd" },
      { name: "সোনাডাঙ্গা থানা (খুলনা)", web: "https://www.police.gov.bd" },
      { name: "খালিশপুর থানা (খুলনা)", web: "https://www.police.gov.bd" },
      { name: "দৌলতপুর থানা (খুলনা)", web: "https://www.police.gov.bd" },
      { name: "যশোর কোতয়ালি থানা", web: "https://www.police.gov.bd" },
      { name: "কুষ্টিয়া কোতয়ালি থানা", web: "https://www.police.gov.bd" },
      { name: "সাতক্ষীরা সদর থানা", web: "https://www.police.gov.bd" },
      { name: "বাগেরহাট সদর থানা", web: "https://www.police.gov.bd" },
      { name: "ঝিনাইদহ সদর থানা", web: "https://www.police.gov.bd" },
      { name: "নড়াইল সদর থানা", web: "https://www.police.gov.bd" },
      { name: "মাগুরা সদর থানা", web: "https://www.police.gov.bd" },
      { name: "চুয়াডাঙ্গা সদর থানা", web: "https://www.police.gov.bd" },
      { name: "মেহেরপুর সদর থানা", web: "https://www.police.gov.bd" },
    ]
  },

  // ===================== ব্যাংক =====================
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (খুলনা)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (খুলনা)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (খুলনা)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (খুলনা)", web: "https://www.rupalibank.org" },
      { name: "ইসলামী ব্যাংক (খুলনা)", web: "https://www.islamibankbd.com" },
      { name: "ডাচ-বাংলা ব্যাংক (খুলনা)", web: "https://www.dutchbanglabank.com" },
      { name: "ব্র্যাক ব্যাংক (খুলনা)", web: "https://www.bracbank.com" },
      { name: "প্রাইম ব্যাংক (খুলনা)", web: "https://www.primebank.com.bd" },
      { name: "ব্যাংক এশিয়া (খুলনা)", web: "https://www.bankasia-bd.com" },
      { name: "ইউসিবি (খুলনা)", web: "https://www.ucb.com.bd" },
      { name: "বাংলাদেশ কৃষি ব্যাংক (খুলনা)", web: "https://www.krishibank.org.bd" },
      { name: "রাকাব ব্যাংক (খুলনা)", web: "https://www.rakub.org.bd" },
    ]
  },

  // ===================== ভূমি অফিস =====================
  {
    name: "ভূমি অফিস",
    items: [
      { name: "খুলনা জেলা ভূমি অফিস", web: "https://land.khulna.gov.bd" },
      { name: "যশোর জেলা ভূমি অফিস", web: "https://land.jessore.gov.bd" },
      { name: "কুষ্টিয়া জেলা ভূমি অফিস", web: "https://land.kushtia.gov.bd" },
      { name: "সাতক্ষীরা জেলা ভূমি অফিস", web: "https://land.satkhira.gov.bd" },
      { name: "বাগেরহাট জেলা ভূমি অফিস", web: "https://land.bagerhat.gov.bd" },
      { name: "ঝিনাইদহ জেলা ভূমি অফিস", web: "https://land.jhenaidah.gov.bd" },
      { name: "নড়াইল জেলা ভূমি অফিস", web: "https://land.narail.gov.bd" },
      { name: "মাগুরা জেলা ভূমি অফিস", web: "https://land.magura.gov.bd" },
      { name: "চুয়াডাঙ্গা জেলা ভূমি অফিস", web: "https://land.chuadanga.gov.bd" },
      { name: "মেহেরপুর জেলা ভূমি অফিস", web: "https://land.meherpur.gov.bd" },
    ]
  },

  // ===================== বাস সার্ভিস =====================
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (খুলনা)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (খুলনা)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "সোহাগ পরিবহন (খুলনা)", web: "https://www.facebook.com/sohagparibahan" },
      { name: "বিআরটিসি (খুলনা)", web: "https://www.brtc.gov.bd" },
      { name: "ইগল পরিবহন (খুলনা-ঢাকা)", web: "https://www.facebook.com/eagleparibuahan" },
      { name: "গ্রিন লাইন পরিবহন (খুলনা)", web: "https://www.greenlinebd.com" },
      { name: "সুন্দরবন এক্সপ্রেস (খুলনা)", web: "https://www.facebook.com" },
    ]
  },

  // ===================== ট্রেন সার্ভিস =====================
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" },
      { name: "খুলনা রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "যশোর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "কুষ্টিয়া রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "সুন্দরবন এক্সপ্রেস (খুলনা-ঢাকা)", web: "https://railway.gov.bd" },
      { name: "চিত্রা এক্সপ্রেস (খুলনা-ঢাকা)", web: "https://railway.gov.bd" },
      { name: "সাগরদাড়ি এক্সপ্রেস (খুলনা-যশোর)", web: "https://railway.gov.bd" },
    ]
  },

  // ===================== সংবাদপত্র =====================
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক পূর্বাঞ্চল (খুলনা)", web: "https://www.facebook.com/dailypurbanchal" },
      { name: "দৈনিক সংগ্রাম (খুলনা)", web: "https://www.dailysangram.com" },
      { name: "দৈনিক জনকণ্ঠ", web: "https://www.dailyjanakantha.com" },
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },
      { name: "দৈনিক কালের কণ্ঠ", web: "https://www.kalerkantho.com" },
      { name: "দৈনিক যশোর বার্তা", web: "https://www.facebook.com" },
      { name: "খুলনা গেজেট", web: "https://www.khulnagazette.com" },
      { name: "দৈনিক সুন্দরবন (খুলনা)", web: "https://www.dailysundarbannews.com" },
    ]
  },

  // ===================== র‌্যাব ইন্সটিটিউট =====================
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-৬ (খুলনা)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৬ ক্যাম্প (যশোর)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৬ ক্যাম্প (কুষ্টিয়া)", web: "https://www.rab.gov.bd" },
    ]
  },

  // ===================== বিজিবি অফিস =====================
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি ৪১ ব্যাটালিয়ন (খুলনা)", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি সাতক্ষীরা সেক্টর", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি যশোর ব্যাটালিয়ন", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি কুষ্টিয়া সেক্টর", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি চুয়াডাঙ্গা ব্যাটালিয়ন", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি মেহেরপুর ব্যাটালিয়ন", web: "https://www.bgb.gov.bd" },
    ]
  },

  // ===================== এনজিও অফিস =====================
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (খুলনা বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "গ্রামীণ ব্যাংক (খুলনা)", web: "https://www.grameen.com" },
      { name: "আশা (খুলনা)", web: "https://www.asa.org.bd" },
      { name: "প্রশিকা (খুলনা)", web: "https://www.proshika.org" },
      { name: "সুশীলন (খুলনা)", web: "https://www.sushilon.org" },
      { name: "রূপান্তর (খুলনা)", web: "https://www.rupantar.org" },
      { name: "উদ্দীপন (খুলনা)", web: "https://www.uddipan.org" },
    ]
  },

  // ===================== সরকারি হাসপাতাল =====================
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "খুলনা মেডিকেল কলেজ হাসপাতাল", web: "https://www.kmch.gov.bd" },
      { name: "যশোর সদর হাসপাতাল", web: "https://dghs.jessore.gov.bd" },
      { name: "কুষ্টিয়া মেডিকেল কলেজ হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "সাতক্ষীরা সদর হাসপাতাল", web: "https://dghs.satkhira.gov.bd" },
      { name: "বাগেরহাট সদর হাসপাতাল", web: "https://dghs.bagerhat.gov.bd" },
      { name: "ঝিনাইদহ সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "নড়াইল সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "মাগুরা সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "চুয়াডাঙ্গা সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "মেহেরপুর সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
    ]
  },

  // ===================== বেসরকারি হাসপাতাল =====================
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "আদ-দ্বীন মেডিকেল কলেজ হাসপাতাল (খুলনা)", web: "https://www.addinwelfare.org" },
      { name: "গাজী মেডিকেল কলেজ হাসপাতাল (খুলনা)", web: "https://www.gazimedical.com" },
      { name: "খুলনা সিটি মেডিকেল কলেজ হাসপাতাল", web: "https://www.kcmch.edu.bd" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (খুলনা)", web: "https://www.populardiagnostic.com" },
      { name: "ইবনে সিনা হাসপাতাল (খুলনা)", web: "https://www.ibnsinabd.com" },
      { name: "শমরিতা হাসপাতাল (যশোর)", web: "https://www.samaritan-hospital.com" },
    ]
  },

  // ===================== পোস্ট অফিস =====================
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "খুলনা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "যশোর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "কুষ্টিয়া জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "সাতক্ষীরা প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "বাগেরহাট প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ঝিনাইদহ প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নড়াইল প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "মাগুরা প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "চুয়াডাঙ্গা প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
      { name: "মেহেরপুর প্রধান ডাকঘর", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },

  // ===================== বিদ্যুৎ অফিস =====================
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন (WZPDCL)", web: "https://www.wzpdcl.org.bd" },
      { name: "বিদ্যুৎ উন্নয়ন বোর্ড (খুলনা)", web: "https://www.bpdb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (যশোর)", web: "https://www.reb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (কুষ্টিয়া)", web: "https://www.reb.gov.bd" },
      { name: "পল্লী বিদ্যুৎ সমিতি (সাতক্ষীরা)", web: "https://www.reb.gov.bd" },
    ]
  },

  // ===================== ফায়ার সার্ভিস =====================
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "খুলনা ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" },
      { name: "যশোর ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "কুষ্টিয়া ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "সাতক্ষীরা ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "বাগেরহাট ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
      { name: "ঝিনাইদহ ফায়ার সার্ভিস", web: "https://www.fireservice.gov.bd" },
    ]
  },

  // ===================== আদালত =====================
  {
    name: "আদালত",
    items: [
      { name: "খুলনা জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "যশোর জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "কুষ্টিয়া জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "সাতক্ষীরা জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "বাগেরহাট জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "ঝিনাইদহ জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "নড়াইল জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "মাগুরা জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "চুয়াডাঙ্গা জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
      { name: "মেহেরপুর জেলা ও দায়রা জজ আদালত", web: "https://www.judiciary.org.bd" },
    ]
  },

  // ===================== এয়ারপোর্ট =====================
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "যশোর বিমানবন্দর (জেএসআর)", web: "https://www.caab.gov.bd" },
      { name: "বাংলাদেশ বিমান বাহিনী (খুলনা)", web: "https://www.baf.mil.bd" },
    ]
  },

  // ===================== পোর্ট =====================
  {
    name: "পোর্ট",
    items: [
      { name: "মোংলা সমুদ্রবন্দর", web: "https://www.mpa.gov.bd" },
      { name: "মোংলা বন্দর কর্তৃপক্ষ", web: "https://www.mpa.gov.bd" },
      { name: "খুলনা নদীবন্দর", web: "https://www.biwta.gov.bd" },
    ]
  },

  // ===================== ট্যুরিস্ট স্পট =====================
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "সুন্দরবন ম্যানগ্রোভ ফরেস্ট", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "ষাট গম্বুজ মসজিদ (বাগেরহাট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "খান জাহান আলীর মাজার (বাগেরহাট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "কুষ্টিয়া লালন আখড়া (ছেঁউড়িয়া)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "রবীন্দ্রনাথের কুঠিবাড়ি (শিলাইদহ)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মুজিবনগর স্মৃতিসৌধ (মেহেরপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "সাগরকন্যা কুয়াকাটা (পটুয়াখালী)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "দর্শনা জিরো পয়েন্ট (চুয়াডাঙ্গা)", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ===================== অ্যাম্বুলেন্স সার্ভিস =====================
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "জরুরি অ্যাম্বুলেন্স - ১৯৯", web: "tel:199" },
      { name: "খুলনা মেডিকেল অ্যাম্বুলেন্স", web: "https://www.kmch.gov.bd" },
      { name: "বাংলাদেশ রেড ক্রিসেন্ট (খুলনা)", web: "https://www.bdrcs.org" },
      { name: "প্রজন্ম অ্যাম্বুলেন্স সার্ভিস (খুলনা)", web: "https://www.facebook.com" },
      { name: "আদ-দ্বীন অ্যাম্বুলেন্স (খুলনা)", web: "https://www.addinwelfare.org" },
    ]
  },

  // ===================== ক্লিনিক =====================
  {
    name: "ক্লিনিক",
    items: [
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (খুলনা)", web: "https://www.populardiagnostic.com" },
      { name: "ল্যাব এইড (খুলনা)", web: "https://www.labaidgroup.com" },
      { name: "এনাম মেডিকেল কলেজ ক্লিনিক (খুলনা)", web: "https://www.facebook.com" },
      { name: "ক্লিনিক প্লাস (যশোর)", web: "https://www.facebook.com" },
      { name: "ডিজিটাল ডায়াগনস্টিক ল্যাব (কুষ্টিয়া)", web: "https://www.facebook.com" },
    ]
  },

  // ===================== ভেটেরিনারি সার্ভিস =====================
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "খুলনা জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "যশোর জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "কুষ্টিয়া জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "সাতক্ষীরা জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "বাগেরহাট জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "সুন্দরবন ভেটেরিনারি ক্লিনিক (মোংলা)", web: "https://www.dls.gov.bd" },
    ]
  },

  // ===================== পানি সরবরাহ =====================
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "খুলনা ওয়াসা (KWASA)", web: "https://www.kwasa.org.bd" },
      { name: "যশোর পৌরসভা পানি সরবরাহ", web: "https://www.jessore.gov.bd" },
      { name: "কুষ্টিয়া পৌরসভা পানি সরবরাহ", web: "https://www.kushtia.gov.bd" },
      { name: "বাংলাদেশ পানি উন্নয়ন বোর্ড (খুলনা)", web: "https://www.bwdb.gov.bd" },
    ]
  },

  // ===================== গ্যাস সরবরাহ =====================
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড (WGCL)", web: "https://www.wgcl.gov.bd" },
      { name: "রূপান্তরিত প্রাকৃতিক গ্যাস কো. (RPGCL)", web: "https://www.rpgcl.gov.bd" },
    ]
  },

  // ===================== টেলিকম =====================
  {
    name: "টেলিকম",
    items: [
      { name: "বাংলাদেশ টেলিযোগাযোগ কোম্পানি (BTCL) - খুলনা", web: "https://www.btcl.gov.bd" },
      { name: "গ্রামীণফোন কাস্টমার কেয়ার (খুলনা)", web: "https://www.grameenphone.com" },
      { name: "রবি আজিয়াটা (খুলনা)", web: "https://www.robi.com.bd" },
      { name: "বাংলালিংক (খুলনা)", web: "https://www.banglalink.net" },
      { name: "টেলিটক বাংলাদেশ (খুলনা)", web: "https://www.teletalk.com.bd" },
    ]
  },

  // ===================== বীমা =====================
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (খুলনা)", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন (খুলনা)", web: "https://www.sbc.gov.bd" },
      { name: "মেটলাইফ বাংলাদেশ (খুলনা)", web: "https://www.metlife.com.bd" },
      { name: "ডেল্টা লাইফ ইন্স্যুরেন্স (খুলনা)", web: "https://www.deltalife.org" },
      { name: "প্রগতি ইন্স্যুরেন্স (খুলনা)", web: "https://www.pragatiins.com" },
    ]
  },

  // ===================== সমবায় =====================
  {
    name: "সমবায়",
    items: [
      { name: "খুলনা জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "যশোর জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "কুষ্টিয়া জেলা সমবায় অফিস", web: "https://www.coop.gov.bd" },
      { name: "বাংলাদেশ পল্লী উন্নয়ন বোর্ড - BRDB (খুলনা)", web: "https://www.brdb.gov.bd" },
      { name: "সুন্দরবন কো-অপারেটিভ (বাগেরহাট)", web: "https://www.coop.gov.bd" },
    ]
  },

  // ===================== ধর্মীয় স্থান =====================
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "ষাট গম্বুজ মসজিদ (বাগেরহাট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "খুলনা সার্কিট হাউস মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "কুষ্টিয়া লালন শাহের মাজার", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "খান জাহান আলীর দরগাহ (বাগেরহাট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "যশোর শ্রী শ্রী জগন্নাথ মন্দির", web: "https://www.hindutemple.org.bd" },
      { name: "খুলনা সেন্ট যোসেফস চার্চ", web: "https://www.facebook.com" },
      { name: "মেহেরপুর প্রাচীন মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
    ]
  },

  // ===================== জনপ্রতিনিধি =====================
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "খুলনা সিটি কর্পোরেশন মেয়র", web: "https://www.khulnacity.org" },
      { name: "যশোর পৌরসভা চেয়ারম্যান", web: "https://www.jessore.gov.bd" },
      { name: "কুষ্টিয়া পৌরসভা চেয়ারম্যান", web: "https://www.kushtia.gov.bd" },
      { name: "খুলনা জেলা পরিষদ চেয়ারম্যান", web: "https://www.khulna.gov.bd" },
      { name: "যশোর জেলা পরিষদ চেয়ারম্যান", web: "https://www.jessore.gov.bd" },
      { name: "বাংলাদেশ জাতীয় সংসদ (খুলনা বিভাগ)", web: "https://www.parliament.gov.bd" },
    ]
  },

  // ===================== উপজেলা চেয়ারম্যান =====================
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "খুলনা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.khulna.gov.bd" },
      { name: "ডুমুরিয়া উপজেলা চেয়ারম্যান", web: "https://dumuria.khulna.gov.bd" },
      { name: "বটিয়াঘাটা উপজেলা চেয়ারম্যান", web: "https://batiaghata.khulna.gov.bd" },
      { name: "যশোর সদর উপজেলা চেয়ারম্যান", web: "https://sadar.jessore.gov.bd" },
      { name: "কুষ্টিয়া সদর উপজেলা চেয়ারম্যান", web: "https://sadar.kushtia.gov.bd" },
      { name: "সাতক্ষীরা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.satkhira.gov.bd" },
      { name: "বাগেরহাট সদর উপজেলা চেয়ারম্যান", web: "https://sadar.bagerhat.gov.bd" },
      { name: "ঝিনাইদহ সদর উপজেলা চেয়ারম্যান", web: "https://sadar.jhenaidah.gov.bd" },
      { name: "নড়াইল সদর উপজেলা চেয়ারম্যান", web: "https://sadar.narail.gov.bd" },
      { name: "মাগুরা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.magura.gov.bd" },
      { name: "চুয়াডাঙ্গা সদর উপজেলা চেয়ারম্যান", web: "https://sadar.chuadanga.gov.bd" },
      { name: "মেহেরপুর সদর উপজেলা চেয়ারম্যান", web: "https://sadar.meherpur.gov.bd" },
    ]
  },
];

const KhulnaDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`খুলনা বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default KhulnaDivision;