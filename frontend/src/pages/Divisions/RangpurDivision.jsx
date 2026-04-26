import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#27ae60";
const ICON = "🏞️";

const subCategories = [
  {
    name: "সরকারি স্কুল (রংপুর)",
    items: [
      { name: "রংপুর জিলা স্কুল", web: "https://dshe.gov.bd" },
      { name: "রংপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "কারমাইকেল সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "রংপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "মিঠাপুকুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (দিনাজপুর)",
    items: [
      { name: "দিনাজপুর জিলা স্কুল", web: "https://dshe.gov.bd" },
      { name: "দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "বিরামপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পার্বতীপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (গাইবান্ধা)",
    items: [
      { name: "গাইবান্ধা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "গাইবান্ধা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সুন্দরগঞ্জ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (কুড়িগ্রাম)",
    items: [
      { name: "কুড়িগ্রাম সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "কুড়িগ্রাম সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নাগেশ্বরী পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (লালমনিরহাট)",
    items: [
      { name: "লালমনিরহাট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "লালমনিরহাট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পাটগ্রাম পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (নীলফামারী)",
    items: [
      { name: "নীলফামারী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "নীলফামারী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সৈয়দপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (পঞ্চগড়)",
    items: [
      { name: "পঞ্চগড় সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পঞ্চগড় সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "তেঁতুলিয়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি স্কুল (ঠাকুরগাঁও)",
    items: [
      { name: "ঠাকুরগাঁও সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "ঠাকুরগাঁও সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "পীরগঞ্জ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "রংপুর ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ", web: "https://www.rcpsc.edu.bd" },
      { name: "দিনাজপুর মিশন স্কুল", web: "https://dshe.gov.bd" },
      { name: "রংপুর আদর্শ উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
      { name: "সেন্ট ফিলিপস স্কুল (দিনাজপুর)", web: "https://dshe.gov.bd" },
      { name: "পুলিশ লাইনস স্কুল ও কলেজ (রংপুর)", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "কারমাইকেল কলেজ (রংপুর)", web: "https://www.carmichaelcollege.ac.bd" },
      { name: "রংপুর সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "দিনাজপুর সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "গাইবান্ধা সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "কুড়িগ্রাম সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "লালমনিরহাট সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "নীলফামারী সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "পঞ্চগড় সরকারি কলেজ", web: "https://dshe.gov.bd" },
      { name: "ঠাকুরগাঁও সরকারি কলেজ", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "রংপুর ক্যান্টনমেন্ট কলেজ", web: "https://dshe.gov.bd" },
      { name: "দিনাজপুর সিটি কলেজ", web: "https://dshe.gov.bd" },
      { name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি কলেজ", web: "https://dshe.gov.bd" },
      { name: "পঞ্চগড় আদর্শ কলেজ", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "মাদ্রাসা",
    items: [
      { name: "রংপুর আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "দিনাজপুর আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "গাইবান্ধা আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "কুড়িগ্রাম আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
      { name: "পঞ্চগড় আলিয়া মাদ্রাসা", web: "https://www.bmeb.gov.bd" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বেগম রোকেয়া বিশ্ববিদ্যালয় (রংপুর)", web: "https://www.brur.ac.bd" },
      { name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (দিনাজপুর)", web: "https://www.hstu.ac.bd" },
      { name: "রংপুর মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
      { name: "দিনাজপুর মেডিকেল কলেজ", web: "https://www.dghs.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "প্রাইম ইউনিভার্সিটি (রংপুর ক্যাম্পাস)", web: "https://www.primeuniversity.edu.bd" },
      { name: "নর্দার্ন ইউনিভার্সিটি (রংপুর)", web: "https://www.northern.edu.bd" },
      { name: "রংপুর ইউনিভার্সিটি", web: "https://www.ru.ac.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "রংপুর সদর উপজেলা", web: "https://rangpur.gov.bd" },
      { name: "মিঠাপুকুর উপজেলা", web: "https://mithapukur.rangpur.gov.bd" },
      { name: "তারাগঞ্জ উপজেলা", web: "https://taraganj.rangpur.gov.bd" },
      { name: "বদরগঞ্জ উপজেলা", web: "https://badarganj.rangpur.gov.bd" },
      { name: "গঙ্গাচড়া উপজেলা", web: "https://gangachara.rangpur.gov.bd" },
      { name: "কাউনিয়া উপজেলা", web: "https://kaunia.rangpur.gov.bd" },
      { name: "পীরগঞ্জ উপজেলা (রংপুর)", web: "https://pirganj.rangpur.gov.bd" },
      { name: "পীরগাছা উপজেলা", web: "https://pirgacha.rangpur.gov.bd" },
      { name: "দিনাজপুর সদর উপজেলা", web: "https://dinajpur.gov.bd" },
      { name: "গাইবান্ধা সদর উপজেলা", web: "https://gaibandha.gov.bd" },
      { name: "কুড়িগ্রাম সদর উপজেলা", web: "https://kurigram.gov.bd" },
      { name: "লালমনিরহাট সদর উপজেলা", web: "https://lalmonirhat.gov.bd" },
      { name: "নীলফামারী সদর উপজেলা", web: "https://nilphamari.gov.bd" },
      { name: "পঞ্চগড় সদর উপজেলা", web: "https://panchagarh.gov.bd" },
      { name: "ঠাকুরগাঁও সদর উপজেলা", web: "https://thakurgaon.gov.bd" },
    ]
  },
  {
    name: "থানা",
    items: [
      { name: "কোতোয়ালি থানা (রংপুর)", web: "https://rangpurmetro.police.gov.bd" },
      { name: "তাজহাট থানা", web: "https://rangpurmetro.police.gov.bd" },
      { name: "হারাগাছ থানা", web: "https://rangpurmetro.police.gov.bd" },
      { name: "মাহিগঞ্জ থানা", web: "https://rangpurmetro.police.gov.bd" },
      { name: "কোতোয়ালি থানা (দিনাজপুর)", web: "https://police.gov.bd" },
      { name: "কোতোয়ালি থানা (গাইবান্ধা)", web: "https://police.gov.bd" },
      { name: "কোতোয়ালি থানা (কুড়িগ্রাম)", web: "https://police.gov.bd" },
      { name: "কোতোয়ালি থানা (ঠাকুরগাঁও)", web: "https://police.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "বাংলাদেশ ব্যাংক (রংপুর অফিস)", web: "https://www.bb.org.bd" },
      { name: "সোনালী ব্যাংক (রংপুর)", web: "https://www.sonalibank.com.bd" },
      { name: "জনতা ব্যাংক (রংপুর)", web: "https://www.jb.com.bd" },
      { name: "অগ্রণী ব্যাংক (রংপুর)", web: "https://www.agranibank.org" },
      { name: "রূপালী ব্যাংক (রংপুর)", web: "https://www.rupalibank.org" },
      { name: "ডাচ-বাংলা ব্যাংক (রংপুর)", web: "https://www.dutchbanglabank.com" },
      { name: "ইসলামী ব্যাংক (রংপুর)", web: "https://www.islamibankbd.com" },
      { name: "ব্র্যাক ব্যাংক (রংপুর)", web: "https://www.bracbank.com" },
      { name: "কৃষি ব্যাংক (রংপুর)", web: "https://www.krishibank.org.bd" },
      { name: "রাজশাহী কৃষি উন্নয়ন ব্যাংক (RAKUB - রংপুর)", web: "https://www.rakub.org.bd" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "রংপুর জেলা ভূমি অফিস", web: "https://land.rangpur.gov.bd" },
      { name: "দিনাজপুর জেলা ভূমি অফিস", web: "https://land.dinajpur.gov.bd" },
      { name: "গাইবান্ধা জেলা ভূমি অফিস", web: "https://land.gaibandha.gov.bd" },
      { name: "কুড়িগ্রাম জেলা ভূমি অফিস", web: "https://land.kurigram.gov.bd" },
      { name: "লালমনিরহাট জেলা ভূমি অফিস", web: "https://land.lalmonirhat.gov.bd" },
      { name: "নীলফামারী জেলা ভূমি অফিস", web: "https://land.nilphamari.gov.bd" },
      { name: "পঞ্চগড় জেলা ভূমি অফিস", web: "https://land.panchagarh.gov.bd" },
      { name: "ঠাকুরগাঁও জেলা ভূমি অফিস", web: "https://land.thakurgaon.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (রংপুর রুট)", web: "https://www.hanifenterprisebd.com" },
      { name: "শ্যামলী পরিবহন (রংপুর রুট)", web: "https://www.shyamoliparibahan-bd.com" },
      { name: "নাবিল পরিবহন", web: "https://www.facebook.com/nabilparibahan" },
      { name: "বিআরটিসি (রংপুর)", web: "https://www.brtc.gov.bd" },
      { name: "এস.আর. ট্রাভেলস", web: "https://www.facebook.com/SRTravels.bd" },
      { name: "আগমনী পরিবহন", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে (ই-টিকিট)", web: "https://eticket.railway.gov.bd" },
      { name: "রংপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "দিনাজপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "সৈয়দপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" },
      { name: "পার্বতীপুর রেলওয়ে জংশন", web: "https://railway.gov.bd" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক যুগের আলো (রংপুর)", web: "https://www.jugerpalo.com" },
      { name: "দৈনিক করতোয়া (দিনাজপুর)", web: "https://www.dailykaratoa.com" },
      { name: "দৈনিক উত্তরবঙ্গ সংবাদ", web: "https://www.uttorbongosangbad.com" },
      { name: "দৈনিক রংপুর", web: "https://www.dailyrangpur.com" },
      { name: "প্রথম আলো (উত্তরাঞ্চল)", web: "https://www.prothomalo.com" },
      { name: "দৈনিক তিস্তা সংবাদ", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-১৩ (রংপুর)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-১৩ ক্যাম্প (দিনাজপুর)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-১৩ ক্যাম্প (গাইবান্ধা)", web: "https://www.rab.gov.bd" },
    ]
  },
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি রংপুর রিজিওন", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ৫১ ব্যাটালিয়ন (দিনাজপুর)", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ৪৫ ব্যাটালিয়ন (লালমনিরহাট)", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ৫২ ব্যাটালিয়ন (পঞ্চগড়)", web: "https://www.bgb.gov.bd" },
      { name: "বিজিবি ৫৬ ব্যাটালিয়ন (কুড়িগ্রাম)", web: "https://www.bgb.gov.bd" },
    ]
  },
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (রংপুর বিভাগীয় অফিস)", web: "https://www.brac.net" },
      { name: "আশা (রংপুর আঞ্চলিক অফিস)", web: "https://www.asa.org.bd" },
      { name: "গ্রামীণ ব্যাংক (রংপুর জোন)", web: "https://www.grameen.com" },
      { name: "রংপুর উন্নয়ন সংস্থা (RDS)", web: "https://dshe.gov.bd" },
      { name: "CARE Bangladesh (রংপুর)", web: "https://www.carebangladesh.org" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "রংপুর মেডিকেল কলেজ হাসপাতাল", web: "https://www.rmch.gov.bd" },
      { name: "দিনাজপুর মেডিকেল কলেজ হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "গাইবান্ধা সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "কুড়িগ্রাম সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "লালমনিরহাট সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "নীলফামারী সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "পঞ্চগড় সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "ঠাকুরগাঁও সদর হাসপাতাল", web: "https://www.dghs.gov.bd" },
      { name: "সৈয়দপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.dghs.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (রংপুর)", web: "https://www.populardiagnostic.com" },
      { name: "ইবনে সিনা হাসপাতাল (রংপুর)", web: "https://www.ibnsinahospital.com" },
      { name: "শেফা হাসপাতাল (রংপুর)", web: "https://dshe.gov.bd" },
      { name: "মডার্ন ক্লিনিক (দিনাজপুর)", web: "https://dshe.gov.bd" },
      { name: "রংপুর ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "রংপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "দিনাজপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "গাইবান্ধা জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "কুড়িগ্রাম জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "লালমনিরহাট জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "নীলফামারী জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "পঞ্চগড় জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "ঠাকুরগাঁও জিপিও", web: "https://www.bangladeshpost.gov.bd" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "উত্তর-পশ্চিম জোন পাওয়ার ডিস্ট্রিবিউশন (NWZPDC)", web: "https://www.nwpgcl.gov.bd" },
      { name: "রংপুর পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "দিনাজপুর পল্লী বিদ্যুৎ সমিতি", web: "https://www.reb.gov.bd" },
      { name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (BPDB - রংপুর)", web: "https://www.bpdb.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স (রংপুর)", web: "https://www.fireservice.gov.bd" },
      { name: "দিনাজপুর ফায়ার স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "গাইবান্ধা ফায়ার স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "কুড়িগ্রাম ফায়ার স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "লালমনিরহাট ফায়ার স্টেশন", web: "https://www.fireservice.gov.bd" },
      { name: "সৈয়দপুর ফায়ার স্টেশন", web: "https://www.fireservice.gov.bd" },
    ]
  },
  {
    name: "আদালত",
    items: [
      { name: "রংপুর বিভাগীয় দায়রা জজ কোর্ট", web: "https://www.supremecourt.gov.bd" },
      { name: "রংপুর জেলা জজ কোর্ট", web: "https://districtjudge.rangpur.gov.bd" },
      { name: "দিনাজপুর জজ কোর্ট", web: "https://districtjudge.dinajpur.gov.bd" },
      { name: "গাইবান্ধা জজ কোর্ট", web: "https://districtjudge.gaibandha.gov.bd" },
      { name: "কুড়িগ্রাম জজ কোর্ট", web: "https://districtjudge.kurigram.gov.bd" },
      { name: "লালমনিরহাট জজ কোর্ট", web: "https://districtjudge.lalmonirhat.gov.bd" },
      { name: "নীলফামারী জজ কোর্ট", web: "https://districtjudge.nilphamari.gov.bd" },
      { name: "পঞ্চগড় জজ কোর্ট", web: "https://districtjudge.panchagarh.gov.bd" },
      { name: "ঠাকুরগাঁও জজ কোর্ট", web: "https://districtjudge.thakurgaon.gov.bd" },
    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "সৈয়দপুর বিমানবন্দর", web: "https://www.caab.gov.bd" },
      { name: "বিমান বাংলাদেশ এয়ারলাইন্স", web: "https://www.biman-airlines.com" },
      { name: "সিভিল এভিয়েশন অথরিটি (CAAB)", web: "https://www.caab.gov.bd" },
    ]
  },
  {
    name: "পোর্ট",
    items: [
      { name: "চিলমারী নদীবন্দর (কুড়িগ্রাম)", web: "https://www.biwta.gov.bd" },
      { name: "বিআইডব্লিউটিএ (রংপুর অফিস)", web: "https://www.biwta.gov.bd" },
      { name: "গাইবান্ধা নৌ-ঘাট", web: "https://www.biwta.gov.bd" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "তাজহাট জমিদার বাড়ি (রংপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "কান্তজিউ মন্দির (দিনাজপুর)", web: "https://www.archaeology.gov.bd" },
      { name: "রামসাগর জাতীয় উদ্যান (দিনাজপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "নীলসাগর (নীলফামারী)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "তিস্তা ব্যারেজ (লালমনিরহাট)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "পিকনিক স্পট বড়দরগাহ (দিনাজপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "ভিতরগড় দুর্গ (পঞ্চগড়)", web: "https://www.archaeology.gov.bd" },
      { name: "বাংলাবান্ধা জিরো পয়েন্ট (পঞ্চগড়)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "রংপুর চিড়িয়াখানা ও শিশু পার্ক", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "মহারাজার দিঘি (ঠাকুরগাঁও)", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "জাতীয় হেলথ হেল্পলাইন - ১৬০০০", web: "https://www.dghs.gov.bd" },
      { name: "ডিএমপি অ্যাম্বুলেন্স - ৯৯৯", web: "https://police.gov.bd" },
      { name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (রংপুর)", web: "https://www.bdrcs.org" },
      { name: "রংপুর মেডিকেল কলেজ হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.rmch.gov.bd" },
    ]
  },
  {
    name: "ক্লিনিক",
    items: [
      { name: "পপুলার ডায়াগনস্টিক (রংপুর)", web: "https://www.populardiagnostic.com" },
      { name: "ইবনে সিনা ডায়াগনস্টিক (রংপুর)", web: "https://www.ibnsinahospital.com" },
      { name: "মেডিকেল সেন্টার হাসপাতাল (দিনাজপুর)", web: "https://dshe.gov.bd" },
      { name: "আল-মানার হাসপাতাল (রংপুর)", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "প্রাণিসম্পদ অধিদপ্তর (রংপুর বিভাগীয় অফিস)", web: "https://www.dls.gov.bd" },
      { name: "রংপুর জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "দিনাজপুর জেলা প্রাণিসম্পদ অফিস", web: "https://www.dls.gov.bd" },
      { name: "কেন্দ্রীয় গো-প্রজনন ও দুগ্ধ খামার (সৈয়দপুর)", web: "https://www.dls.gov.bd" },
    ]
  },
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "রংপুর সিটি কর্পোরেশন (পানি বিভাগ)", web: "https://www.rcc.gov.bd" },
      { name: "রংপুর পৌরসভা পানি সরবরাহ", web: "https://rangpur.gov.bd" },
      { name: "দিনাজপুর পৌরসভা পানি সরবরাহ", web: "https://dinajpur.gov.bd" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর (DPHE - রংপুর)", web: "https://www.dphe.gov.bd" },
    ]
  },
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "পেট্রোবাংলা", web: "https://www.petrobangla.org.bd" },
      { name: "বাংলাদেশ গ্যাস ফিল্ডস কোম্পানি (BGFCL)", web: "https://www.bgfcl.org.bd" },
      { name: "এলপিজি অপারেটর অ্যাসোসিয়েশন (রংপুর)", web: "https://www.petrobangla.org.bd" },
    ]
  },
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন (রংপুর জোন)", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক (রংপুর)", web: "https://www.banglalink.net" },
      { name: "রবি আজিয়াটা (রংপুর)", web: "https://www.robi.com.bd" },
      { name: "টেলিটক বাংলাদেশ (রংপুর)", web: "https://www.teletalk.com.bd" },
      { name: "বিটিসিএল (রংপুর)", web: "https://www.btcl.gov.bd" },
    ]
  },
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (রংপুর)", web: "https://www.jbc.gov.bd" },
      { name: "সাধারণ বীমা কর্পোরেশন (রংপুর)", web: "https://www.sbc.gov.bd" },
      { name: "ডেলটা লাইফ ইন্স্যুরেন্স (রংপুর)", web: "https://www.deltalife.org" },
      { name: "মেটলাইফ বাংলাদেশ (রংপুর)", web: "https://www.metlife.com.bd" },
      { name: "পপুলার লাইফ ইন্স্যুরেন্স (রংপুর)", web: "https://www.popularlifebd.com" },
    ]
  },
  {
    name: "সমবায়",
    items: [
      { name: "সমবায় অধিদপ্তর (রংপুর বিভাগীয় অফিস)", web: "https://www.cooperatives.gov.bd" },
      { name: "রংপুর কেন্দ্রীয় সমবায় ব্যাংক", web: "https://www.cooperatives.gov.bd" },
      { name: "দিনাজপুর কেন্দ্রীয় সমবায় ব্যাংক", web: "https://www.cooperatives.gov.bd" },
    ]
  },
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "কান্তজিউ মন্দির (দিনাজপুর)", web: "https://www.archaeology.gov.bd" },
      { name: "রংপুর কেন্দ্রীয় জামে মসজিদ", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "শ্যামসুন্দর মন্দির (রংপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "চেহেলগাজী মসজিদ ও দরগাহ (দিনাজপুর)", web: "https://www.archaeology.gov.bd" },
      { name: "মির্জাপুর গির্জা (দিনাজপুর)", web: "https://www.bangladeshtourism.gov.bd" },
      { name: "ঠাকুরগাঁও রাজা টংকনাথের মন্দির", web: "https://www.bangladeshtourism.gov.bd" },
    ]
  },
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "রংপুর সিটি কর্পোরেশন (RCC)", web: "https://www.rcc.gov.bd" },
      { name: "রংপুর বিভাগীয় কমিশনারের কার্যালয়", web: "https://rangpurdiv.gov.bd" },
      { name: "রংপুর জেলা পরিষদ", web: "https://rangpur.gov.bd" },
      { name: "দিনাজপুর জেলা পরিষদ", web: "https://dinajpur.gov.bd" },
      { name: "জাতীয় সংসদ (বাংলাদেশ)", web: "https://www.parliament.gov.bd" },
    ]
  },
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
      { name: "রংপুর সদর উপজেলা পরিষদ", web: "https://rangpur.gov.bd" },
      { name: "মিঠাপুকুর উপজেলা পরিষদ", web: "https://mithapukur.rangpur.gov.bd" },
      { name: "পীরগঞ্জ উপজেলা পরিষদ (রংপুর)", web: "https://pirganj.rangpur.gov.bd" },
      { name: "গঙ্গাচড়া উপজেলা পরিষদ", web: "https://gangachara.rangpur.gov.bd" },
      { name: "দিনাজপুর সদর উপজেলা পরিষদ", web: "https://dinajpur.gov.bd" },
      { name: "গাইবান্ধা সদর উপজেলা পরিষদ", web: "https://gaibandha.gov.bd" },
      { name: "কুড়িগ্রাম সদর উপজেলা পরিষদ", web: "https://kurigram.gov.bd" },
      { name: "লালমনিরহাট সদর উপজেলা পরিষদ", web: "https://lalmonirhat.gov.bd" },
      { name: "নীলফামারী সদর উপজেলা পরিষদ", web: "https://nilphamari.gov.bd" },
      { name: "পঞ্চগড় সদর উপজেলা পরিষদ", web: "https://panchagarh.gov.bd" },
      { name: "ঠাকুরগাঁও সদর উপজেলা পরিষদ", web: "https://thakurgaon.gov.bd" },
      { name: "সৈয়দপুর উপজেলা পরিষদ", web: "https://saidpur.nilphamari.gov.bd" },
    ]
  },
];

const RangpurDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`রংপুর বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default RangpurDivision;