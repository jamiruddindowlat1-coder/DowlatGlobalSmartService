import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#8e44ad";
const ICON = "🏛️";

const subCategories = [
  // ───── সরকারি স্কুল (জেলা-ভিত্তিক) ─────
  {
    name: "সরকারি স্কুল (ময়মনসিংহ)",
    items: [
      { name: "ময়মনসিংহ জিলা স্কুল", web: "http://mjs.edu.bd" },
      { name: "বিদ্যাময়ী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://vidyamayee.edu.bd" },
      { name: "ময়মনসিংহ সরকারি বালক উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "গৌরীপুর সরকারি আর কে মডেল উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মুক্তাগাছা পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ত্রিশাল সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ভালুকা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ফুলবাড়িয়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "গফরগাঁও সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (জামালপুর)",
    items: [
      { name: "জামালপুর জিলা স্কুল", web: "http://jamalpurzillaschool.edu.bd" },
      { name: "জামালপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সরিষাবাড়ী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মেলান্দহ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ইসলামপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মাদারগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (শেরপুর)",
    items: [
      { name: "শেরপুর সরকারি ভিক্টোরিয়া একাডেমি", web: "http://sherpurgva.edu.bd" },
      { name: "শেরপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নালিতাবাড়ী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নকলা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ঝিনাইগাতী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (নেত্রকোণা)",
    items: [
      { name: "নেত্রকোণা দত্ত উচ্চ বিদ্যালয় (সরকারি)", web: "https://dshe.gov.bd" },
      { name: "নেত্রকোণা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "কেন্দুয়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মোহনগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "আটপাড়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পূর্বধলা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── বেসরকারি স্কুল ─────
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "ময়মনসিংহ হলি ক্রস স্কুল", web: "https://dshe.gov.bd" },
      { name: "ময়মনসিংহ মিশন উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সেন্ট যোসেফ স্কুল, ময়মনসিংহ", web: "https://dshe.gov.bd" },
      { name: "কৃষি বিশ্ববিদ্যালয় স্কুল ও কলেজ", web: "https://dshe.gov.bd" },
      { name: "জামালপুর সরকারি অ্যাডওয়ার্ড উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নেত্রকোণা দত্ত হাই স্কুল", web: "https://dshe.gov.bd" },
      { name: "শেরপুর পৌর উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── সরকারি কলেজ ─────
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "আনন্দ মোহন কলেজ, ময়মনসিংহ", web: "http://anandamohancollege.gov.bd" },
      { name: "মুমিনুন্নিসা সরকারি মহিলা কলেজ", web: "http://mmwc.edu.bd" },
      { name: "সরকারি আশেক মাহমুদ কলেজ, জামালপুর", web: "http://gamc.gov.bd" },
      { name: "জামালপুর সরকারি মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "শেরপুর সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "নেত্রকোণা সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "নেত্রকোণা সরকারি মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "গৌরীপুর সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "মুক্তাগাছা সরকারি কলেজ", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── বেসরকারি কলেজ ─────
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "ময়মনসিংহ গার্লস কলেজ", web: "https://dshe.gov.bd" },
      { name: "ময়মনসিংহ পলিটেকনিক কলেজ", web: "https://dshe.gov.bd" },
      { name: "জামালপুর বিন্দুবাসিনী কলেজ", web: "https://dshe.gov.bd" },
      { name: "শেরপুর সরকারি মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "নেত্রকোণা মহিলা কলেজ", web: "https://dshe.gov.bd" },
      { name: "ত্রিশাল ডিগ্রি কলেজ", web: "https://dshe.gov.bd" },
      { name: "কেন্দুয়া কলেজ", web: "https://dshe.gov.bd" },
    ]
  },

  // ───── মাদ্রাসা ─────
  {
    name: "মাদ্রাসা",
    items: [
      { name: "জামিয়া ইসলামিয়া ময়মনসিংহ", web: "https://bmeb.gov.bd" },
      { name: "ময়মনসিংহ জিলা মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "জামালপুর সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "শেরপুর সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "নেত্রকোণা সরকারি আলিয়া মাদ্রাসা", web: "https://bmeb.gov.bd" },
      { name: "দারুল উলূম মাদ্রাসা, ময়মনসিংহ", web: "https://bmeb.gov.bd" },
      { name: "ইসলামিয়া কামিল মাদ্রাসা, জামালপুর", web: "https://bmeb.gov.bd" },
      { name: "মোহনগঞ্জ আলিম মাদ্রাসা", web: "https://bmeb.gov.bd" },
    ]
  },

  // ───── সরকারি বিশ্ববিদ্যালয় ─────
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)", web: "https://www.bau.edu.bd" },
      { name: "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়", web: "https://jkkniu.edu.bd" },
      { name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়, জামালপুর", web: "https://bsmrstu.edu.bd" },
      { name: "শেখ হাসিনা বিশ্ববিদ্যালয়, নেত্রকোণা", web: "https://shu.ac.bd" },
      { name: "ময়মনসিংহ মেডিকেল কলেজ (সরকারি)", web: "https://mmch.gov.bd" },
    ]
  },

  // ───── বেসরকারি বিশ্ববিদ্যালয় ─────
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "ময়মনসিংহ ইঞ্জিনিয়ারিং কলেজ", web: "https://mec.edu.bd" },
      { name: "ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (ময়মনসিংহ ক্যাম্পাস)", web: "https://daffodilvarsity.edu.bd" },
      { name: "নর্দান ইউনিভার্সিটি (জামালপুর)", web: "https://nub.ac.bd" },
      { name: "ইসলামী আরবী বিশ্ববিদ্যালয় (অধিভুক্ত মাদ্রাসা)", web: "https://iau.ac.bd" },
    ]
  },

  // ───── উপজেলা ─────
  {
    name: "উপজেলা",
    items: [
      { name: "ময়মনসিংহ সদর উপজেলা", web: "https://mymensingh.gov.bd" },
      { name: "ত্রিশাল উপজেলা", web: "http://trishal.mymensingh.gov.bd" },
      { name: "মুক্তাগাছা উপজেলা", web: "http://muktagacha.mymensingh.gov.bd" },
      { name: "ফুলবাড়িয়া উপজেলা", web: "http://fulbaria.mymensingh.gov.bd" },
      { name: "গফরগাঁও উপজেলা", web: "http://gafargaon.mymensingh.gov.bd" },
      { name: "ভালুকা উপজেলা", web: "http://bhaluka.mymensingh.gov.bd" },
      { name: "গৌরীপুর উপজেলা", web: "http://gouripur.mymensingh.gov.bd" },
      { name: "ঈশ্বরগঞ্জ উপজেলা", web: "http://ishwarganj.mymensingh.gov.bd" },
      { name: "নান্দাইল উপজেলা", web: "http://nandail.mymensingh.gov.bd" },
      { name: "হালুয়াঘাট উপজেলা", web: "http://haluaghat.mymensingh.gov.bd" },
      { name: "ধোবাউড়া উপজেলা", web: "http://dhobaura.mymensingh.gov.bd" },
      { name: "ফুলপুর উপজেলা", web: "http://fulpur.mymensingh.gov.bd" },
      { name: "জামালপুর সদর উপজেলা", web: "https://jamalpur.gov.bd" },
      { name: "সরিষাবাড়ী উপজেলা", web: "http://sarishabari.jamalpur.gov.bd" },
      { name: "মেলান্দহ উপজেলা", web: "http://melandah.jamalpur.gov.bd" },
      { name: "ইসলামপুর উপজেলা", web: "http://islampur.jamalpur.gov.bd" },
      { name: "মাদারগঞ্জ উপজেলা", web: "http://madarganj.jamalpur.gov.bd" },
      { name: "বকশীগঞ্জ উপজেলা", web: "http://bakshiganj.jamalpur.gov.bd" },
      { name: "দেওয়ানগঞ্জ উপজেলা", web: "http://dewanganj.jamalpur.gov.bd" },
      { name: "শেরপুর সদর উপজেলা", web: "https://sherpur.gov.bd" },
      { name: "নালিতাবাড়ী উপজেলা", web: "http://nalitabari.sherpur.gov.bd" },
      { name: "নকলা উপজেলা", web: "http://nakla.sherpur.gov.bd" },
      { name: "ঝিনাইগাতী উপজেলা", web: "http://jhinaigati.sherpur.gov.bd" },
      { name: "শ্রীবরদী উপজেলা", web: "http://sreebardi.sherpur.gov.bd" },
      { name: "নেত্রকোণা সদর উপজেলা", web: "https://netrokona.gov.bd" },
      { name: "কেন্দুয়া উপজেলা", web: "http://kendua.netrokona.gov.bd" },
      { name: "মোহনগঞ্জ উপজেলা", web: "http://mohanganj.netrokona.gov.bd" },
      { name: "আটপাড়া উপজেলা", web: "http://atpara.netrokona.gov.bd" },
      { name: "বারহাট্টা উপজেলা", web: "http://barhatta.netrokona.gov.bd" },
      { name: "পূর্বধলা উপজেলা", web: "http://purbadhala.netrokona.gov.bd" },
      { name: "দুর্গাপুর উপজেলা", web: "http://durgapur.netrokona.gov.bd" },
      { name: "কলমাকান্দা উপজেলা", web: "http://kalmakanda.netrokona.gov.bd" },
      { name: "খালিয়াজুরি উপজেলা", web: "http://khaliajuri.netrokona.gov.bd" },
      { name: "মদন উপজেলা", web: "http://madan.netrokona.gov.bd" },
    ]
  },

  // ───── থানা ─────
  {
    name: "থানা",
    items: [
      { name: "ময়মনসিংহ কোতোয়ালি থানা", web: "https://mymensingh.police.gov.bd" },
      { name: "ত্রিশাল থানা", web: "https://mymensingh.police.gov.bd" },
      { name: "মুক্তাগাছা থানা", web: "https://mymensingh.police.gov.bd" },
      { name: "ভালুকা থানা", web: "https://mymensingh.police.gov.bd" },
      { name: "গফরগাঁও থানা", web: "https://mymensingh.police.gov.bd" },
      { name: "গৌরীপুর থানা", web: "https://mymensingh.police.gov.bd" },
      { name: "জামালপুর কোতোয়ালি থানা", web: "https://jamalpur.police.gov.bd" },
      { name: "সরিষাবাড়ী থানা", web: "https://jamalpur.police.gov.bd" },
      { name: "ইসলামপুর থানা", web: "https://jamalpur.police.gov.bd" },
      { name: "শেরপুর কোতোয়ালি থানা", web: "https://sherpur.police.gov.bd" },
      { name: "নালিতাবাড়ী থানা", web: "https://sherpur.police.gov.bd" },
      { name: "নেত্রকোণা কোতোয়ালি থানা", web: "https://netrokona.police.gov.bd" },
      { name: "কেন্দুয়া থানা", web: "https://netrokona.police.gov.bd" },
      { name: "মোহনগঞ্জ থানা", web: "https://netrokona.police.gov.bd" },
    ]
  },

  // ───── ব্যাংক ─────
  {
    name: "ব্যাংক",
    items: [
      { name: "সোনালী ব্যাংক (ময়মনসিংহ)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (ময়মনসিংহ)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (ময়মনসিংহ)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (ময়মনসিংহ)", web: "https://www.rupalibank.org" },
      { name: "ডাচ-বাংলা ব্যাংক (ময়মনসিংহ)", web: "https://www.dutchbanglabank.com" },
      { name: "ইসলামী ব্যাংক (ময়মনসিংহ)", web: "https://www.islamibankbd.com" },
      { name: "ব্র্যাক ব্যাংক (ময়মনসিংহ)", web: "https://www.bracbank.com" },
      { name: "কৃষি ব্যাংক (ময়মনসিংহ)", web: "https://www.krishibank.org.bd" },
      { name: "সোনালী ব্যাংক (জামালপুর)", web: "https://www.sonalibank.com.bd" },
      { name: "সোনালী ব্যাংক (নেত্রকোণা)", web: "https://www.sonalibank.com.bd" },
    ]
  },

  // ───── ভূমি অফিস ─────
  {
    name: "ভূমি অফিস",
    items: [
      { name: "ময়মনসিংহ জেলা ভূমি অফিস", web: "https://mymensingh.gov.bd/site/page/land" },
      { name: "জামালপুর জেলা ভূমি অফিস", web: "https://jamalpur.gov.bd/site/page/land" },
      { name: "শেরপুর জেলা ভূমি অফিস", web: "https://sherpur.gov.bd/site/page/land" },
      { name: "নেত্রকোণা জেলা ভূমি অফিস", web: "https://netrokona.gov.bd/site/page/land" },
      { name: "ত্রিশাল উপজেলা ভূমি অফিস", web: "https://mymensingh.gov.bd" },
      { name: "মুক্তাগাছা উপজেলা ভূমি অফিস", web: "https://mymensingh.gov.bd" },
      { name: "কেন্দুয়া উপজেলা ভূমি অফিস", web: "https://netrokona.gov.bd" },
      { name: "সরিষাবাড়ী উপজেলা ভূমি অফিস", web: "https://jamalpur.gov.bd" },
    ]
  },

  // ───── বাস সার্ভিস ─────
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "এনা ট্রান্সপোর্ট (ময়মনসিংহ)", web: "https://enatransport.com" },
      { name: "সৌখিন পরিবহন", web: "https://shohoz.com" },
      { name: "বিআরটিসি (ময়মনসিংহ)", web: "https://www.brtc.gov.bd" },
      { name: "শামীম এন্টারপ্রাইজ", web: "https://www.facebook.com" },
      { name: "সিটি এক্সপ্রেস (ময়মনসিংহ)", web: "https://www.facebook.com" },
      { name: "হানিফ এন্টারপ্রাইজ (ময়মনসিংহ রুট)", web: "https://www.hanifenterprisebd.com" },
      { name: "ঢাকা-জামালপুর বাস সার্ভিস", web: "https://www.brtc.gov.bd" },
      { name: "ঢাকা-নেত্রকোণা বাস সার্ভিস", web: "https://www.brtc.gov.bd" },
    ]
  },

  // ───── ট্রেন সার্ভিস ─────
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "ময়মনসিংহ রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "জামালপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "শেরপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "গফরগাঁও রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "ভৈরব রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "অগ্নিবীণা এক্সপ্রেস", web: "https://eticket.railway.gov.bd" },
      { name: "তিস্তা এক্সপ্রেস", web: "https://eticket.railway.gov.bd" },
      { name: "ই-টিকেটিং পোর্টাল", web: "https://eticket.railway.gov.bd" },
    ]
  },

  // ───── সংবাদপত্র ─────
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক আজকের পত্রিকা (ময়মনসিংহ)", web: "https://www.ajkerpatrika.com" },
      { name: "দৈনিক ময়মনসিংহ", web: "https://www.dailymymensingh.com" },
      { name: "দৈনিক যুগান্তর (ময়মনসিংহ)", web: "https://www.jugantor.com" },
      { name: "প্রথম আলো (ময়মনসিংহ)", web: "https://www.prothomalo.com" },
      { name: "কালের কণ্ঠ (ময়মনসিংহ)", web: "https://www.kalerkantho.com" },
      { name: "দৈনিক জামালপুর বার্তা", web: "https://www.facebook.com" },
      { name: "দৈনিক নেত্রকোণা", web: "https://www.facebook.com" },
      { name: "দৈনিক শেরপুর বার্তা", web: "https://www.facebook.com" },
    ]
  },

  // ───── র‌্যাব ইন্সটিটিউট ─────
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-১৪ (ময়মনসিংহ সদর দপ্তর)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-১৪ (জামালপুর ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-১৪ (নেত্রকোণা ক্যাম্প)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-১৪ (শেরপুর ক্যাম্প)", web: "https://www.rab.gov.bd" },
    ]
  },

  // ───── বিজিবি অফিস ─────
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি সেক্টর সদর দপ্তর, ময়মনসিংহ", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন, শেরপুর", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন, নেত্রকোণা", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ব্যাটালিয়ন, জামালপুর", web: "https://www.bgb.gov.bd" },
    ]
  },

  // ───── এনজিও অফিস ─────
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (ময়মনসিংহ বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "আশা (ময়মনসিংহ)", web: "https://www.asa.org.bd" },
      { name: "গ্রামীণ ব্যাংক (ময়মনসিংহ)", web: "https://www.grameen.com" },
      { name: "প্রশিকা (ময়মনসিংহ)", web: "https://www.proshika.org" },
      { name: "কেয়ার বাংলাদেশ (ময়মনসিংহ)", web: "https://www.carebangladesh.org" },
      { name: "সেভ দ্য চিলড্রেন (ময়মনসিংহ)", web: "https://www.savethechildren.net/bd" },
      { name: "কোডেক (ময়মনসিংহ)", web: "https://www.codec-bd.org" },
    ]
  },

  // ───── সরকারি হাসপাতাল ─────
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল", web: "https://mmch.gov.bd" },
      { name: "জামালপুর জেনারেল হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "শেরপুর সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "নেত্রকোণা আধুনিক সদর হাসপাতাল", web: "https://dghs.gov.bd" },
      { name: "গৌরীপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
      { name: "ত্রিশাল উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
      { name: "মুক্তাগাছা উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
      { name: "নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
      { name: "কেন্দুয়া উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
      { name: "মোহনগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://dghs.gov.bd" },
    ]
  },

  // ───── বেসরকারি হাসপাতাল ─────
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "আনোয়ার খান মডার্ন হাসপাতাল, ময়মনসিংহ", web: "https://www.ankh.com.bd" },
      { name: "ময়মনসিংহ ডায়াবেটিক হাসপাতাল", web: "https://www.facebook.com" },
      { name: "সিটি হাসপাতাল, ময়মনসিংহ", web: "https://www.facebook.com" },
      { name: "ইসলামী ব্যাংক হাসপাতাল, ময়মনসিংহ", web: "https://www.ibbl.com.bd" },
      { name: "জামালপুর আধুনিক হাসপাতাল", web: "https://www.facebook.com" },
      { name: "নেত্রকোণা সেবা হাসপাতাল", web: "https://www.facebook.com" },
      { name: "শেরপুর ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার, ময়মনসিংহ", web: "https://www.populardiagnostic.com" },
    ]
  },

  // ───── পোস্ট অফিস ─────
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "ময়মনসিংহ জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "জামালপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "শেরপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নেত্রকোণা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ত্রিশাল পোস্ট অফিস", web: "https://www.bangladeshpost.gov.bd" },
      { name: "মুক্তাগাছা পোস্ট অফিস", web: "https://www.bangladeshpost.gov.bd" },
      { name: "মোহনগঞ্জ পোস্ট অফিস", web: "https://www.bangladeshpost.gov.bd" },
      { name: "কেন্দুয়া পোস্ট অফিস", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },

  // ───── বিদ্যুৎ অফিস ─────
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি-১", web: "https://mymensinghpbs.org.bd" },
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি-২", web: "https://www.reb.gov.bd" },
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি-৩", web: "https://www.reb.gov.bd" },
      { name: "জামালপুর পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "শেরপুর পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "নেত্রকোণা পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "বিপিডিবি ময়মনসিংহ", web: "https://www.bpdb.gov.bd" },
    ]
  },

  // ───── ফায়ার সার্ভিস ─────
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ময়মনসিংহ ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "জামালপুর ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "শেরপুর ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "নেত্রকোণা ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "ত্রিশাল ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "ভালুকা ফায়ার সার্ভিস স্টেশন", web: "https://www.fireservice.gov.bd" },
    ]
  },

  // ───── আদালত ─────
  {
    name: "আদালত",
    items: [
      { name: "ময়মনসিংহ জেলা জজ কোর্ট", web: "https://districtjudge.mymensingh.gov.bd" },
      { name: "জামালপুর জেলা জজ কোর্ট", web: "https://districtjudge.jamalpur.gov.bd" },
      { name: "শেরপুর জেলা জজ কোর্ট", web: "https://districtjudge.sherpur.gov.bd" },
      { name: "নেত্রকোণা জেলা জজ কোর্ট", web: "https://districtjudge.netrokona.gov.bd" },
      { name: "ময়মনসিংহ চিফ জুডিশিয়াল ম্যাজিস্ট্রেট আদালত", web: "https://mymensingh.gov.bd" },
      { name: "জামালপুর চিফ জুডিশিয়াল ম্যাজিস্ট্রেট আদালত", web: "https://jamalpur.gov.bd" },
    ]
  },

  // ───── পোর্ট ─────
  {
    name: "পোর্ট",
    items: [
      { name: "বাংলাদেশ অভ্যন্তরীণ নৌ পরিবহন কর্তৃপক্ষ (BIWTA)", web: "https://www.biwta.gov.bd" },
      { name: "মোহনগঞ্জ নদীবন্দর (নেত্রকোণা)", web: "https://www.biwta.gov.bd" },
      { name: "জামালপুর ফেরিঘাট", web: "https://www.biwta.gov.bd" },
      { name: "ব্রহ্মপুত্র নদী পারাপার, ময়মনসিংহ", web: "https://www.biwta.gov.bd" },
    ]
  },

  // ───── ট্যুরিস্ট স্পট ─────
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "শশী লজ, ময়মনসিংহ", web: "https://archaeology.gov.bd" },
      { name: "জয়নুল আবেদিন সংগ্রহশালা", web: "https://archaeology.gov.bd" },
      { name: "বিরিশিরি (চীনা মাটির পাহাড়), নেত্রকোণা", web: "https://netrokona.gov.bd" },
      { name: "সোমেশ্বরী নদী ও বিজয়পুর পাহাড়", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মধুটিলা ইকোপার্ক, শেরপুর", web: "https://www.bforest.gov.bd" },
      { name: "গজনী অবকাশ কেন্দ্র, শেরপুর", web: "https://www.bforest.gov.bd" },
      { name: "ব্রহ্মপুত্র নদী তীর, ময়মনসিংহ", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "জাতীয় কবি কাজী নজরুল ইসলাম স্মৃতিকেন্দ্র, ত্রিশাল", web: "https://jkkniu.edu.bd" },
      { name: "মুক্তাগাছার মণ্ডা", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "হাজং রাজবাড়ী, নেত্রকোণা", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ───── অ্যাম্বুলেন্স সার্ভিস ─────
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "ময়মনসিংহ মেডিকেল অ্যাম্বুলেন্স সার্ভিস", web: "https://mmch.gov.bd" },
      { name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (ময়মনসিংহ)", web: "https://www.bdrcs.org" },
      { name: "জাতীয় স্বাস্থ্য বাতায়ন (১৬২৬৩)", web: "https://www.dghs.gov.bd" },
      { name: "জামালপুর সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://dghs.gov.bd" },
      { name: "নেত্রকোণা সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://dghs.gov.bd" },
    ]
  },

  // ───── ক্লিনিক ─────
  {
    name: "ক্লিনিক",
    items: [
      { name: "ময়মনসিংহ মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.dghs.gov.bd" },
      { name: "ময়মনসিংহ ডায়াবেটিক সমিতি হাসপাতাল", web: "https://www.facebook.com" },
      { name: "ময়মনসিংহ চক্ষু হাসপাতাল", web: "https://www.facebook.com" },
      { name: "জামালপুর মা ও শিশু কল্যাণ কেন্দ্র", web: "https://www.dghs.gov.bd" },
      { name: "নেত্রকোণা ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com" },
      { name: "শেরপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.dghs.gov.bd" },
    ]
  },

  // ───── ভেটেরিনারি সার্ভিস ─────
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "ময়মনসিংহ জেলা প্রাণিসম্পদ অফিস", web: "https://mymensingh.gov.bd" },
      { name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় ভেটেরিনারি ক্লিনিক", web: "https://www.bau.edu.bd" },
      { name: "জামালপুর জেলা প্রাণিসম্পদ অফিস", web: "https://jamalpur.gov.bd" },
      { name: "শেরপুর জেলা প্রাণিসম্পদ অফিস", web: "https://sherpur.gov.bd" },
      { name: "নেত্রকোণা জেলা প্রাণিসম্পদ অফিস", web: "https://netrokona.gov.bd" },
      { name: "ভেটেরিনারি ট্রেনিং ইনস্টিটিউট, ময়মনসিংহ", web: "https://www.dls.gov.bd" },
    ]
  },

  // ───── পানি সরবরাহ ─────
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "ময়মনসিংহ পৌরসভা পানি সরবরাহ", web: "https://mcc.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, ময়মনসিংহ (DPHE)", web: "https://www.dphe.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, জামালপুর", web: "https://www.dphe.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, শেরপুর", web: "https://www.dphe.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, নেত্রকোণা", web: "https://www.dphe.gov.bd" },
    ]
  },

  // ───── গ্যাস সরবরাহ ─────
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "তিতাস গ্যাস (ময়মনসিংহ অঞ্চল)", web: "https://www.titasgas.org.bd" },
      { name: "বাখরাবাদ গ্যাস সিস্টেম (ময়মনসিংহ)", web: "https://www.bgsl.com.bd" },
      { name: "পেট্রোবাংলা (আঞ্চলিক অফিস)", web: "https://www.petrobangla.org.bd" },
    ]
  },

  // ───── টেলিকম ─────
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন (ময়মনসিংহ)", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক (ময়মনসিংহ)", web: "https://www.banglalink.net" },
      { name: "রবি আজিয়াটা (ময়মনসিংহ)", web: "https://www.robi.com.bd" },
      { name: "টেলিটক বাংলাদেশ (ময়মনসিংহ)", web: "https://www.teletalk.com.bd" },
      { name: "বিটিসিএল (ময়মনসিংহ)", web: "https://www.btcl.gov.bd" },
    ]
  },

  // ───── বীমা ─────
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (ময়মনসিংহ)", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন (ময়মনসিংহ)", web: "https://www.sbc.gov.bd" },
      { name: "মেঘনা লাইফ ইন্স্যুরেন্স (ময়মনসিংহ)", web: "https://www.meghnalife.com" },
      { name: "প্রগ্রেসিভ লাইফ ইন্স্যুরেন্স (ময়মনসিংহ)", web: "https://www.progressivelifeins.com" },
      { name: "ইসলামী কমার্শিয়াল ইন্স্যুরেন্স (ময়মনসিংহ)", web: "https://www.islamiins.com.bd" },
    ]
  },

  // ───── সমবায় ─────
  {
    name: "সমবায়",
    items: [
      { name: "ময়মনসিংহ বিভাগীয় সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "ময়মনসিংহ জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "জামালপুর জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "শেরপুর জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
      { name: "নেত্রকোণা জেলা সমবায় অফিস", web: "https://www.cooperatives.gov.bd" },
    ]
  },

  // ───── ধর্মীয় স্থান ─────
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "ময়মনসিংহ কেন্দ্রীয় জামে মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "মুক্তাগাছা শিব মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "নেত্রকোণা কালী মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "দুর্গাপুর সাধু যোসেফ গির্জা", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "শেরপুর জামে মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "জামালপুর কেন্দ্রীয় মসজিদ", web: "https://www.islamicfoundation.gov.bd" },
      { name: "ময়মনসিংহ কালী মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "হাজং রাজবাড়ী মন্দির, নেত্রকোণা", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },

  // ───── জনপ্রতিনিধি ─────
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "ময়মনসিংহ সিটি কর্পোরেশন", web: "https://mcc.gov.bd" },
      { name: "ময়মনসিংহ জেলা পরিষদ", web: "https://mymensingh.gov.bd" },
      { name: "জামালপুর জেলা পরিষদ", web: "https://jamalpur.gov.bd" },
      { name: "শেরপুর জেলা পরিষদ", web: "https://sherpur.gov.bd" },
      { name: "নেত্রকোণা জেলা পরিষদ", web: "https://netrokona.gov.bd" },
      { name: "বাংলাদেশ নির্বাচন কমিশন (ময়মনসিংহ)", web: "https://www.ecs.gov.bd" },
      { name: "জাতীয় সংসদ", web: "https://www.parliament.gov.bd" },
    ]
  },

  // ───── উপজেলা চেয়ারম্যান ─────
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "ত্রিশাল উপজেলা পরিষদ", web: "http://trishal.mymensingh.gov.bd" },
      { name: "মুক্তাগাছা উপজেলা পরিষদ", web: "http://muktagacha.mymensingh.gov.bd" },
      { name: "ভালুকা উপজেলা পরিষদ", web: "http://bhaluka.mymensingh.gov.bd" },
      { name: "গফরগাঁও উপজেলা পরিষদ", web: "http://gafargaon.mymensingh.gov.bd" },
      { name: "গৌরীপুর উপজেলা পরিষদ", web: "http://gouripur.mymensingh.gov.bd" },
      { name: "ঈশ্বরগঞ্জ উপজেলা পরিষদ", web: "http://ishwarganj.mymensingh.gov.bd" },
      { name: "সরিষাবাড়ী উপজেলা পরিষদ (জামালপুর)", web: "http://sarishabari.jamalpur.gov.bd" },
      { name: "মেলান্দহ উপজেলা পরিষদ (জামালপুর)", web: "http://melandah.jamalpur.gov.bd" },
      { name: "ইসলামপুর উপজেলা পরিষদ (জামালপুর)", web: "http://islampur.jamalpur.gov.bd" },
      { name: "নালিতাবাড়ী উপজেলা পরিষদ (শেরপুর)", web: "http://nalitabari.sherpur.gov.bd" },
      { name: "নকলা উপজেলা পরিষদ (শেরপুর)", web: "http://nakla.sherpur.gov.bd" },
      { name: "ঝিনাইগাতী উপজেলা পরিষদ (শেরপুর)", web: "http://jhinaigati.sherpur.gov.bd" },
      { name: "কেন্দুয়া উপজেলা পরিষদ (নেত্রকোণা)", web: "http://kendua.netrokona.gov.bd" },
      { name: "মোহনগঞ্জ উপজেলা পরিষদ (নেত্রকোণা)", web: "http://mohanganj.netrokona.gov.bd" },
      { name: "দুর্গাপুর উপজেলা পরিষদ (নেত্রকোণা)", web: "http://durgapur.netrokona.gov.bd" },
      { name: "কলমাকান্দা উপজেলা পরিষদ (নেত্রকোণা)", web: "http://kalmakanda.netrokona.gov.bd" },
    ]
  },
];

const MymensinghDivision = () => {
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
          title={`ময়মনসিংহ বিভাগ - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default MymensinghDivision;