import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#8e44ad";
const ICON = "🏛️";

const subCategories = [
  // ───── সরকারি স্কুল (জেলা-ভিত্তিক) ─────
  {
    name: "সরকারি স্কুল (ময়মনসিংহ)",
    items: [
  { name: "ময়মনসিংহ জিলা স্কুল", web: "https://www.facebook.com/our.mzs/" },
  { name: "বিদ্যাময়ী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://www.vidyamayee.edu.bd/", facebook: "https://facebook.com/237445103046295" },
  { name: "ময়মনসিংহ উচ্চ বিদ্যালয়", web: "https://www.mymensinghhighschool.edu.bd/" },
  { name: "গৌরীপুর রাজেন্দ্র কিশোর সরকারি উচ্চ বিদ্যালয়", web: "https://rkghs.school.gov.bd/" },
  { name: "নগেন্দ্র নারায়ণ পাইলট বালিকা উচ্চ বিদ্যালয়", web: "https://nnpghs.edu.bd/" },
  { name: "পোড়াবাড়ি উচ্চ বিদ্যালয়", web: "https://porabarihighschool.edu.bd/" },
  { name: "ভালুকা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://sib.gov.bd/notice_board/1112787472.pdf" },
  { name: "ফুলবাড়ীয়া সরকারি মডেল পাইলট উচ্চ বিদ্যালয়", web: "http://www.fgmphs.edu.bd/" },
  { name: "Gafaragaon Islamia Govt. High School", web: "https://gighs.school.gov.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (জামালপুর)",
    items: [
       { name: "জামালপুর জিলা স্কুল", web: "http://www.jzs.edu.bd" }, // ✅ verified
  { name: "জামালপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.jamalpurgghs.edu.bd/" }, // ⚠️ no official site
  { name: "সরিষাবাড়ী সরকারি উচ্চ বিদ্যালয়", web: "https://sggsc.college.gov.bd/" },
  { name: "মেলান্দহ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/muuphs/" },
  { name: "ইসলামপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.chhatakislampurhs.edu.bd/" },
  { name: "মাদারগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/1864334510408127/" },
    ]
  },
  {
    name: "সরকারি স্কুল (শেরপুর)",
    items: [
      { name: "শেরপুর সরকারি ভিক্টোরিয়া একাডেমি", web: "https://sgva.school.gov.bd/" },
      { name: "শেরপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://shgghs.school.gov.bd/" },
      { name: "নালিতাবাড়ী সরকারি উচ্চ বিদ্যালয়", web: "https://tscnalitabari.sherpur.gov.bd/" },
      { name: "নকলা সরকারি উচ্চ বিদ্যালয়", web: "https://naklagovtpilothighschool.edu.bd/" },
      { name: "ঝিনাইগাতী সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/jgmphs/" },
    ]
  },
  {
    name: "সরকারি স্কুল (নেত্রকোণা)",
    items: [
      { name: "নেত্রকোণা দত্ত উচ্চ বিদ্যালয় (সরকারি)", web: "https://dutt.edu.bd/" },
      { name: "নেত্রকোণা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.netrokonagghs.edu.bd/" },
      { name: "কেন্দুয়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://kenduajoyharispry.weebly.com/home.html" },
      { name: "মোহনগঞ্জ সরকারি উচ্চ বিদ্যালয়", web: "http://mpghs.edu.bd/" },
      { name: "আটপাড়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/atparahighschool/" },
      { name: "পূর্বধলা সরকারি উচ্চ বিদ্যালয়", web: "https://pjmgphs.school.gov.bd/" },
    ]
  },

  // ───── বেসরকারি স্কুল ─────
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "হলি ক্রস উচ্চ বালিকা বিদ্যালয়", web: "https://www.facebook.com/HolyCrossGirlsHighSchoolAdmissionCare/" },
      { name: "Mymensingh Laboratory High School", web: "https://www.facebook.com/OurMLHS/" },
      { name: "সেন্ট যোসেফ স্কুল, ময়মনসিংহ", web: "https://stjosephschool.edu.bd/" },
      { name: "Agricultural University High School", web: "https://www.facebook.com/kbhs1971/" },
      { name: "জামালপুর আদর্শ উচ্চ বিদ্যালয়", web: "https://www.jadhs.edu.bd/" },
      { name: "নেত্রকোণা দত্ত হাই স্কুল", web: "https://dshe.gov.bd" },
      { name: "শেরপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://shgghs.school.gov.bd/" },
      { name: "জামালপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://www.jamalpurgghs.edu.bd/" },
    ]
  },

  // ───── সরকারি কলেজ ─────
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "Ananda Mohan College", web: "https://www.anandamohangovtcollege.edu.bd/" },
      { name: "মুমিনুন্নিসা সরকারি মহিলা কলেজ", web: "https://www.anandamohangovtcollege.edu.bd/home/notice/show/270" },
      { name: "সরকারি আশেক মাহমুদ কলেজ, জামালপুর", web: "https://amc.edu.bd/" },
      { name: "জামালপুর সরকারি মহিলা কলেজ", web: "https://gzsmc.college.gov.bd/" },
      { name: "শেরপুর সরকারি কলেজ", web: "https://sherpurgovtcollege.edu.bd/" },
      { name: "নেত্রকোণা সরকারি কলেজ", web: "https://ngc.ac.bd/" },
      { name: "নেত্রকোণা সরকারি মহিলা কলেজ", web: "https://www.netrakonagmc.edu.bd/" },
      { name: "গৌরীপুর সরকারি কলেজ", web: "https://gouripur.college.gov.bd/" },
      { name: "মুক্তাগাছা সরকারি কলেজ", web: "https://gsscollege.gov.bd/" },
      { name: "শহীদ জিয়াউর রহমান কলেজ", web: "https://www.ziacollegejamalpur.edu.bd/" },
      { name: "Shahid Smriti Govt. College", web: "https://gsscollege.gov.bd/" },
      { name: "Kendua Govt College", web: "https://kenduagc.gov.bd/" },
    ]
  },

  // ───── বেসরকারি কলেজ ─────
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "ময়মনসিংহ গার্লস কলেজ", web: "https://deb111926.dhakaeducationboard.gov.bd/" },
      { name: "ময়মনসিংহ পলিটেকনিক কলেজ", web: "https://mpi.polytech.gov.bd/" },
      { name: "জামালপুর বিন্দুবাসিনী কলেজ", web: "https://dshe.gov.bd" },
      { name: "জামালপুর কালেক্টরেট স্কুল এন্ড কলেজ,", web: "https://www.facebook.com/jcscjamalpur/?locale=bn_IN" },
      { name: "নাসিরাবাদ কলেজ, ময়মনসিংহ", web: "https://ncmym.edu.bd/" },
      { name: "ত্রিশাল ডিগ্রি কলেজ", web: "https://tmdc.edu.bd/" },
      { name: "Ananda Mohan College", web: "https://www.anandamohangovtcollege.edu.bd/" },
    ]
  },

  // ───── মাদ্রাসা ─────
  {
    name: "মাদ্রাসা",
    items: [
      { name: "জামিয়া ইসলামিয়া ময়মনসিংহ", web: "https://www.facebook.com/Jamia.Islamia.Momenshahi/" },
      { name: "দারুল হিকমাহ্ মডেল মাদরাসা ও জিলা স্কুল মোড় মহিলা মাদরাসা ", web: "https://www.facebook.com/p/%E0%A6%A6%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%B2-%E0%A6%B9%E0%A6%BF%E0%A6%95%E0%A6%AE%E0%A6%BE%E0%A6%B9%E0%A7%8D-%E0%A6%AE%E0%A6%A1%E0%A7%87%E0%A6%B2-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BE-%E0%A6%93-%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2-%E0%A6%AE%E0%A7%8B%E0%A6%A1%E0%A6%BC-%E0%A6%AE%E0%A6%B9%E0%A6%BF%E0%A6%B2%E0%A6%BE-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BE-100089123023433/" },
      { name: "জামালপুর মডেল আলিম মাদ্রাসা", web: "https://www.facebook.com/jamalpur.model.alim.madrasah/" },
      { name: "SHERPUR SHAHIDIA KAMIL MADRASAH", web: "https://119774.ebmeb.gov.bd/" },
      { name: "নেত্রকোনা জামালুল কুরআন মাদ্রাসা", web: "https://www.facebook.com/njamalulquran1/?locale=bn_IN" },
      { name: "Al-Hera Darul Uloom Madrasa And Orphanage, Mymensingh", web: "https://www.sohopathi.com/al-hera-darul-uloom-madrasa-and-orphanage/" },
      { name: "দারুল উলূম নিযামিয়া মোমেনশাহী", web: "https://www.facebook.com/groups/994208570755053/" },
      { name: "মোহনগঞ্জ আলিম মাদ্রাসা", web: "https://www.facebook.com/people/%E0%A6%AE%E0%A7%8B%E0%A6%B9%E0%A6%A8%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%86%E0%A6%B2%E0%A6%BF%E0%A6%AE-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BE/100069120171768/#" },
    ]
  },

  // ───── সরকারি বিশ্ববিদ্যালয় ─────
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)", web: "https://www.bau.edu.bd" },
      { name: "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়", web: "https://jkkniu.edu.bd" },
      { name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়, জামালপুর", web: "https://bsmrstu.portal.gov.bd/" },
      { name: "Netrokona University", web: "https://neu.ac.bd/" },
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
      { name: "ইসলামী আরবী বিশ্ববিদ্যালয় (অধিভুক্ত মাদ্রাসা)", web: "http://iau.edu.bd/affiliation-dhaka/" },
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
      { name: "ময়মনসিংহ কোতোয়ালি থানা", web: "https://police.mymensinghsadar.mymensingh.gov.bd/" },
      { name: "ত্রিশাল থানা", web: "https://police.trishal.mymensingh.gov.bd/" },
      { name: "মুক্তাগাছা থানা", web: "https://police.muktagacha.mymensingh.gov.bd/" },
      { name: "ভালুকা থানা", web: "https://police.bhaluka.mymensingh.gov.bd/" },
      { name: "গফরগাঁও থানা", web: "https://police.gafargaon.mymensingh.gov.bd/https://mymensingh.police.gov.bd" },
      { name: "গৌরীপুর থানা", web: "https://police.gouripur.mymensingh.gov.bd/" },
      { name: "জামালপুর কোতোয়ালি থানা", web: "https://jamalpur.police.gov.bd/error" },
      { name: "সরিষাবাড়ী থানা", web: "https://police.sarishabari.jamalpur.gov.bd/" },
      { name: "ইসলামপুর থানা", web: "https://police.islampur.jamalpur.gov.bd/" },
      { name: "শেরপুর থানা", web: "https://police.sherpur.bogra.gov.bd/" },
      { name: "নালিতাবাড়ী থানা", web: "https://police.nalitabari.sherpur.gov.bd/" },
      { name: "নেত্রকোণা থানা", web: "https://police.netrokonasadar.netrokona.gov.bd/" },
      { name: "কেন্দুয়া থানা", web: "https://police.kendua.netrokona.gov.bd/" },
      { name: "মোহনগঞ্জ থানা", web: "https://police.mohongonj.netrokona.gov.bd/" },
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
      { name: "ময়মনসিংহ জেলা ভূমি অফিস", web: "https://acl.mymensinghsadar.mymensingh.gov.bd/" },
      { name: "জামালপুর জেলা ভূমি অফিস", web: "https://acl.jamalpursadar.jamalpur.gov.bd/" },
      { name: "শেরপুর জেলা ভূমি অফিস", web: "https://acl.sherpursadar.sherpur.gov.bd/" },
      { name: "নেত্রকোণা জেলা ভূমি অফিস", web: "https://acl.netrokonasadar.netrokona.gov.bd/" },
      { name: "ত্রিশাল উপজেলা ভূমি অফিস", web: "https://acl.trishal.mymensingh.gov.bd/" },
      { name: "মুক্তাগাছা উপজেলা ভূমি অফিস", web: "https://acl.muktagacha.mymensingh.gov.bd/" },
      { name: "কেন্দুয়া উপজেলা ভূমি অফিস", web: "https://acl.kendua.netrokona.gov.bd/" },
      { name: "সরিষাবাড়ী উপজেলা ভূমি অফিস", web: "https://acl.sarishabari.jamalpur.gov.bd/" },
    ]
  },

  // ───── বাস সার্ভিস ─────
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "এনা ট্রান্সপোর্ট (ময়মনসিংহ)", web: "https://enatransport.com.bd/" },
      { name: "সৌখিন পরিবহন", web: "https://shohoz.com" },
      { name: "বিআরটিসি (ময়মনসিংহ)", web: "https://brtcdepot.mymensingh.gov.bd/" },
      { name: "শামীম এন্টারপ্রাইজ", web: "https://mymensinghhelpline.com.bd/listing/sepl-shamim-enterprise-pvt-ltd-%E0%A6%B6%E0%A6%BE%E0%A6%AE%E0%A7%80%E0%A6%AE-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9C-%E0%A6%AA/" },
      { name: "সিটি এক্সপ্রেস (ময়মনসিংহ)", web: "https://cityexpress2.blogspot.com/" },
      { name: "হানিফ এন্টারপ্রাইজ (ময়মনসিংহ রুট)", web: "https://www.hanif-enterprise.com/" },
      { name: "Shahoz", web: "https://www.shohoz.com/bus-tickets" },
      { name: "ঢাকা-নেত্রকোণা বাস সার্ভিস", web: "https://www.facebook.com/groups/1051121198400385/posts/1202522263260277/" },
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
      { name: "ময়মনসিংহ প্রতিদিন", web: "https://mymensinghpratidin.com/" },
      { name: "দৈনিক যুগান্তর (ময়মনসিংহ)", web: "https://www.jugantor.com" },
      { name: "প্রথম আলো (ময়মনসিংহ)", web: "https://www.prothomalo.com" },
      { name: "কালের কণ্ঠ (ময়মনসিংহ)", web: "https://www.kalerkantho.com" },
      { name: "দৈনিক জামালপুর বার্তা", web: "https://jamalpurbarta.com/" },
      { name: "দৈনিক নেত্রকোণা", web: "https://www.facebook.com/dailynetrokona1/photos/" },
      { name: "দৈনিক শেরপুর বার্তা", web: "https://sherpurpratidin.com/" },
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
      { name: "বিজিবি সেক্টর সদর দপ্তর, ময়মনসিংহ", web: "https://bgb.mymensinghdiv.gov.bd/" },
      { name: "বিজিবি ব্যাটালিয়ন, শেরপুর", web: "https://bgb.gov.bd/pages/news/%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%B0-%E0%A6%AE%E0%A6%AF%E0%A6%BC%E0%A6%AE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%82%E0%A6%B9-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A7%A9%E0%A7%AF-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF-%E0%A6%A6%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%A3-%E0%A6%B6%E0%A7%87%E0%A6%B0%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%9D%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%87%E0%A6%97%E0%A6%BE%E0%A6%A4%E0%A6%BF-%E0%A6%B8%E0%A7%80%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%87-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A6%BE%E0%A6%A8-%E0%A6%9A%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87-%E0%A7%A9-%E0%A6%95%E0%A7%8B%E0%A6%9F%E0%A6%BF-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%AE%E0%A7%82%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%AF%E0%A6%BC-%E0%A6%93%E0%A6%B7%E0%A7%81%E0%A6%A7-%E0%A6%9C%E0%A6%AC%E0%A7%8D%E0%A6%A6-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87-ahrkq6-6996835134f8c2d85c43367e" },
      { name: "বিজিবি ব্যাটালিয়ন, নেত্রকোণা", web: "https://bgb.gov.bd/pages/news/6922d8f4933eb65569dfb7d0" },
      { name: "বিজিবি ব্যাটালিয়ন, জামালপুর", web: "https://bgb.jamalpur.gov.bd/" },
    ]
  },

  // ───── এনজিও অফিস ─────
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (ময়মনসিংহ বিভাগীয় অফিস)", web: "https://blc.brac.net/locations/Mymensingh" },
      { name: "আশা (ময়মনসিংহ)", web: "https://asa.org.bd/" },
      { name: "গ্রামীণ ব্যাংক (ময়মনসিংহ)", web: "https://www.grameen.com/category/news/" },
      { name: "প্রশিকা (ময়মনসিংহ)", web: "https://proshikabd.com/welcome/rhrdc" },
      { name: "কেয়ার বাংলাদেশ (ময়মনসিংহ)", web: "https://www.carebangladesh.org/project-details/3" },
      { name: "সেভ দ্য চিলড্রেন (ময়মনসিংহ)", web: "https://www.facebook.com/savethechildreninbangladesh/?locale=bn_IN" },
      { name: "কোডেক (ময়মনসিংহ)", web: "https://codec.org.bd/children-adolescent-and-youth-development-education-leadership-skill-moral-and-cultural-behaviour/" },
    ]
  },

  // ───── সরকারি হাসপাতাল ─────
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল", web: "https://mmch.gov.bd" },
      { name: "জামালপুর জেনারেল হাসপাতাল", web: "https://www.facebook.com/groups/812484897272194/" },
      { name: "শেরপুর সদর হাসপাতাল", web: "https://sherpursadar.sherpur.gov.bd/pages/static-pages/69709db6a31054345f160582" },
      { name: "নেত্রকোণা আধুনিক সদর হাসপাতাল", web: "https://www.facebook.com/p/Netrokona-District-Hospital-100081814486504/" },
      { name: "গৌরীপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.facebook.com/uhc.gouripur.mymensingh/" },
      { name: "ত্রিশাল উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.facebook.com/p/%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%95%E0%A6%AE%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%AE%E0%A7%9F%E0%A6%AE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%82%E0%A6%B9-61578193422597/" },
      { name: "মুক্তাগাছা উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.facebook.com/100077338695771/photos/" },
      { name: "নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.facebook.com/nalitabari.uhc.sherpur/" },
      { name: "কেন্দুয়া উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.facebook.com/100083212516500/photos/" },
      { name: "মোহনগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://www.facebook.com/p/%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%95%E0%A6%AE%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%AE%E0%A7%8B%E0%A6%B9%E0%A6%A8%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%A8%E0%A7%87%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A7%8B%E0%A6%A3%E0%A6%BE-100064889226175/" },
    ]
  },

  // ───── বেসরকারি হাসপাতাল ─────
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "আনোয়ার খান মডার্ন হাসপাতাল, ময়মনসিংহ", web: "https://akmmch.com/website/" },
      { name: "ময়মনসিংহ ডায়াবেটিক হাসপাতাল", web: "https://www.facebook.com/profile.php?id=100007542136833#" },
      { name: "সিটি হাসপাতাল, ময়মনসিংহ", web: "https://www.facebook.com/profile.php?id=61586428944310#" },
      { name: "ইসলামী ব্যাংক হাসপাতাল, ময়মনসিংহ", web: "https://archhms.com/hospital/profile/islami-bank-community-hospital-mymensingh-ltd." },
      { name: "জামালপুর আধুনিক হাসপাতাল", web: "https://daktarbooking.com/hospitals/jamalpur-sentral-haspatal-limited-jamalpur-bangladesh" },
      { name: "নেত্রকোণা সেবা হাসপাতাল", web: "https://www.facebook.com/p/Netrokona-District-Hospital-100081814486504/" },
      { name: "শেরপুর ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com/p/%E0%A6%B6%E0%A7%87%E0%A6%B0%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%AB%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A6%BF-%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%A8%E0%A6%BF%E0%A6%95-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%A1%E0%A6%BE%E0%A7%9F%E0%A6%BE%E0%A6%97%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-61576585838097/" },
      { name: "পপুলার ডায়াগনস্টিক সেন্টার, ময়মনসিংহ", web: "https://www.facebook.com/popular.mym/" },
    ]
  },

  // ───── পোস্ট অফিস ─────
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "ময়মনসিংহ জিপিও", web: "https://post.mymensingh.gov.bd/" },
      { name: "জামালপুর জিপিও", web: "https://bdpost.gov.bd/pages/static-pages/6922e10f933eb65569e29f1a" },
      { name: "শেরপুর জিপিও", web: "http://bdpost.portal.gov.bd/pages/static-pages/6922e064933eb65569e26d35" },
      { name: "নেত্রকোণা জিপিও", web: "http://bdpost.portal.gov.bd/pages/static-pages/6922e0f6933eb65569e2955c" },
      { name: "ত্রিশাল পোস্ট অফিস", web: "https://www.facebook.com/soruzalli/posts/%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%AA%E0%A7%8B%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8-%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%B6%E0%A6%BE%E0%A6%B2-%E0%A6%AE%E0%A7%9F%E0%A6%AE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%82%E0%A6%B9/3405093176322412/" },
      { name: "মুক্তাগাছা পোস্ট অফিস", web: "https://post.muktagacha.mymensingh.gov.bd/" },
      { name: "মোহনগঞ্জ পোস্ট অফিস", web: "https://post.mohongonj.netrokona.gov.bd/" },
      { name: "কেন্দুয়া পোস্ট অফিস", web: "https://post.kendua.netrokona.gov.bd/" },
    ]
  },

  // ───── বিদ্যুৎ অফিস ─────
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি-১", web: "https://pbs1.mymensingh.gov.bd/pages/officers" },
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি-২", web: "https://pbs2.mymensingh.gov.bd/" },
      { name: "ময়মনসিংহ পল্লী বিদ্যুৎ সমিতি-৩", web: "https://pbs3.mymensingh.gov.bd/" },
      { name: "জামালপুর পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.jamalpur.gov.bd/" },
      { name: "শেরপুর পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.sherpur.gov.bd/" },
      { name: "নেত্রকোণা পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.netrokona.gov.bd/" },
      { name: "বিপিডিবি ময়মনসিংহ", web: "https://pdb.mymensingh.gov.bd/" },
    ]
  },

  // ───── ফায়ার সার্ভিস ─────
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ময়মনসিংহ ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.mymensingh.gov.bd/" },
      { name: "জামালপুর ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.jamalpur.gov.bd/https://www.fireservice.gov.bd" },
      { name: "শেরপুর ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.sherpur.gov.bd/" },
      { name: "নেত্রকোণা ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.netrokona.gov.bd/" },
      { name: "ত্রিশাল ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.trishal.mymensingh.gov.bd/" },
      { name: "ভালুকা ফায়ার সার্ভিস স্টেশন", web: "https://fireservice.bhaluka.mymensingh.gov.bd/" },
    ]
  },

  // ───── আদালত ─────
  {
    name: "আদালত",
    items: [
      { name: "ময়মনসিংহ জেলা জজ কোর্ট", web: "https://mymensingh.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "জামালপুর জেলা জজ কোর্ট", web: "https://jamalpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "শেরপুর জেলা জজ কোর্ট", web: "https://sherpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "নেত্রকোণা জেলা জজ কোর্ট", web: "https://netrakona.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "ময়মনসিংহ চিফ জুডিশিয়াল ম্যাজিস্ট্রেট আদালত", web: "https://mymensingh.judiciary.gov.bd/bn/menu/page/chief-judicial-magistrate-court" },
      { name: "জামালপুর চিফ জুডিশিয়াল ম্যাজিস্ট্রেট আদালত", web: "https://jamalpur.judiciary.gov.bd/bn/menu/page/chief-judicial-magistrate-court" },
    ]
  },

  // ───── পোর্ট ─────
  {
    name: "পোর্ট",
    items: [
      { name: "বাংলাদেশ অভ্যন্তরীণ নৌ পরিবহন কর্তৃপক্ষ (BIWTA)", web: "https://biwta.gov.bd/" },
      { name: "মোহনগঞ্জ নদীবন্দর (নেত্রকোণা)", web: "https://police.mohongonj.netrokona.gov.bd/" },
      { name: "জামালপুর ফেরিঘাট", web: "https://www.facebook.com/pages/%E0%A6%AB%E0%A7%87%E0%A6%B0%E0%A7%80%E0%A6%98%E0%A6%BE%E0%A6%9F%20%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%80%E0%A6%9C,%20%E0%A6%B8%E0%A6%A6%E0%A6%B0,%20%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A5%A4/524544234374900/#" },
      { name: "ব্রহ্মপুত্র নদী পারাপার, ময়মনসিংহ", web: "https://charishwardiaup.mymensingh.gov.bd/pages/tourist-spot/%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A6%B9%E0%A7%8D%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A6%A4%E0%A7%8D%E0%A6%B0-%E0%A6%A8%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A6%B0-0de4b5-696f52adc4774958d7bb3f7f" },
    ]
  },

  // ───── ট্যুরিস্ট স্পট ─────
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "শশী লজ, ময়মনসিংহ", web: "https://www.youtube.com/watch?v=aMORbdCuq0g" },
      { name: "জয়নুল আবেদিন সংগ্রহশালা", web: "https://www.youtube.com/watch?v=7EI82bTQZ7w" },
      { name: "বিরিশিরি (চীনা মাটির পাহাড়), নেত্রকোণা", web: "https://www.youtube.com/watch?v=qXLFRSljtFc" },
      { name: "সোমেশ্বরী নদী ও বিজয়পুর পাহাড়", web: "https://www.youtube.com/watch?v=UvAa2vYW5e4" },
      { name: "মধুটিলা ইকোপার্ক, শেরপুর", web: "https://www.youtube.com/watch?v=FVhtcqjYxDw" },
      { name: "গজনী অবকাশ কেন্দ্র, শেরপুর", web: "https://www.youtube.com/watch?v=_lFLJl34CSg" },
      { name: "ব্রহ্মপুত্র নদী তীর, ময়মনসিংহ", web: "https://www.youtube.com/watch?v=I1pOMixfCEA" },
      { name: "জাতীয় কবি কাজী নজরুল ইসলাম স্মৃতিকেন্দ্র, ত্রিশাল", web: "https://www.youtube.com/watch?v=HOjaLAlLTzk" },
      { name: "মুক্তাগাছার মণ্ডা", web: "https://www.youtube.com/watch?v=n2hmWcLtE1c" },
      { name: "হাজং রাজবাড়ী, নেত্রকোণা", web: "https://www.youtube.com/watch?v=6Xec-8w6elo" },
    ]
  },

  // ───── অ্যাম্বুলেন্স সার্ভিস ─────
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "ময়মনসিংহ মেডিকেল অ্যাম্বুলেন্স সার্ভিস", web: "https://www.netseba.com/ambulance-mymonsingh/" },
      { name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (ময়মনসিংহ)", web: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (ময়মনসিংহ)" },
      { name: "জাতীয় স্বাস্থ্য বাতায়ন (১৬২৬৩)", web: "https://16263.dghs.gov.bd/" },
      { name: "জামালপুর সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.facebook.com/jamalpurambulanceservice24/?locale=bn_IN" },
      { name: "নেত্রকোণা সদর হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.facebook.com/photo/?fbid=583791273763579&set=a.358534589622583&locale=bn_IN" },
    ]
  },

  // ───── ক্লিনিক ─────
  {
    name: "ক্লিনিক",
    items: [
      { name: "ময়মনসিংহ মা ও শিশু কল্যাণ কেন্দ্র", web: "https://dgfp.gov.bd/pages/static-pages/6922df2f933eb65569e206fa" },
      { name: "ময়মনসিংহ ডায়াবেটিক সমিতি হাসপাতাল", web: "https://www.facebook.com/profile.php?id=100007542136833#" },
      { name: "ময়মনসিংহ চক্ষু হাসপাতাল", web: "https://www.facebook.com/p/Mymensingh-Eye-hospital-Retina-Center-61550887942132/" },
      { name: "জামালপুর মা ও শিশু কল্যাণ কেন্দ্র", web: "https://fpo.jamalpur.gov.bd/pages/photo-galleries/%E0%A6%AE%E0%A6%BE-%E0%A6%93-%E0%A6%B6%E0%A6%BF%E0%A6%B6%E0%A7%81-%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A3-%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%8F%E0%A6%B0-%E0%A6%B8%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%AE-%E0%A6%9A%E0%A6%B2%E0%A6%AE%E0%A6%BE%E0%A6%A8-2b4c5c-696f52ddc4774958d7bb5f45" },
      { name: "Prime Hospital & Diagnostic Center", web: "https://archhms.com/hospital/profile/prime-hospital-and-diagnostic-center" },
      { name: "শেরপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://health.sherpur.bogra.gov.bd/" },
    ]
  },

  // ───── ভেটেরিনারি সার্ভিস ─────
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "ময়মনসিংহ জেলা প্রাণিসম্পদ অফিস", web: "https://dls.mymensingh.gov.bd/" },
      { name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় ভেটেরিনারি ক্লিনিক", web: "https://fvs.bau.edu.bd/" },
      { name: "জামালপুর জেলা প্রাণিসম্পদ অফিস", web: "https://dls.jamalpur.gov.bd/" },
      { name: "শেরপুর জেলা প্রাণিসম্পদ অফিস", web: "https://dls.sherpur.gov.bd/" },
      { name: "নেত্রকোণা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.netrokona.gov.bd/" },
      { name: "ভেটেরিনারি ট্রেনিং ইনস্টিটিউট, ময়মনসিংহ", web: "https://vti.mymensingh.gov.bd/" },
    ]
  },

  // ───── পানি সরবরাহ ─────
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "ময়মনসিংহ পৌরসভা পানি সরবরাহ", web: "https://mcc.portal.gov.bd/pages/notices/%E0%A6%AE%E0%A6%AF%E0%A6%BC%E0%A6%AE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%82%E0%A6%B9-%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8%E0%A7%87-%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%B9-%E0%A6%B6%E0%A6%BE%E0%A6%96%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B2-%E0%A6%93-%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%B6%E0%A6%BE%E0%A6%96%E0%A6%BE%E0%A6%B0-%E0%A6%A6%E0%A7%8B%E0%A6%95%E0%A6%BE%E0%A6%A8-%E0%A6%AD%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE-%E0%A6%AC%E0%A7%83%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BF-v7k98w-69b139f4597178d62521eaa3" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, ময়মনসিংহ (DPHE)", web: "https://dphe.mymensingh.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, জামালপুর", web: "https://dphe.jamalpur.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, শেরপুর", web: "https://dphe.sherpur.gov.bd/" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর, নেত্রকোণা", web: "https://dphe.netrokona.gov.bd/" },
    ]
  },

  // ───── গ্যাস সরবরাহ ─────
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "তিতাস গ্যাস (ময়মনসিংহ অঞ্চল)", web: "https://tgttcl.mymensingh.gov.bd/" },
      { name: "বাখরাবাদ গ্যাস সিস্টেম (ময়মনসিংহ)", web: "https://bgdcl.gov.bd/" },
      { name: "পেট্রোবাংলা (আঞ্চলিক অফিস)", web: "https://petrobangla.org.bd/" },
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
      { name: "বিটিসিএল (ময়মনসিংহ)", web: "https://btcl.mymensingh.gov.bd/" },
    ]
  },

  // ───── বীমা ─────
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (ময়মনসিংহ)", web: "https://jbc.gov.bd/pages/static-pages/6922dc0f933eb65569e0e370" },
      { name: "সাধারণ বীমা কর্পোরেশন (ময়মনসিংহ)", web: "https://sbc.gov.bd/" },
      { name: "মেঘনা লাইফ ইন্স্যুরেন্স (ময়মনসিংহ)", web: "https://micl.com.bd/mymensingh-branch/" },
      { name: "প্রগ্রেসিভ লাইফ ইন্স্যুরেন্স (ময়মনসিংহ)", web: "https://www.facebook.com/61550285581687/posts/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A6%AD-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AB-%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%B8%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%95%E0%A7%8B%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%B2%E0%A6%BF%E0%A6%83-%E0%A6%8F%E0%A6%B0-%E0%A6%97%E0%A7%8C%E0%A6%B0%E0%A6%AC%E0%A6%AE%E0%A6%AF%E0%A6%BC-%E0%A7%A8%E0%A7%AB-%E0%A6%AC%E0%A6%9B%E0%A6%B0-%E0%A6%89%E0%A6%A6%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%A8-%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%B7%E0%A7%8D%E0%A6%A0%E0%A6%BE%E0%A6%A8%E0%A7%87-%E0%A6%95%E0%A7%8B%E0%A6%AE%E0%A7%8D%E0%A6%AA/122237715578009519/" },
      { name: "ইসলামী কমার্শিয়াল ইন্স্যুরেন্স (ময়মনসিংহ)", web: "https://www.mawbiz.com.bd/islami-commercial-insurance-co-ltd-mymensingh-branch" },
    ]
  },

  // ───── সমবায় ─────
  {
    name: "সমবায়",
    items: [
      { name: "ময়মনসিংহ বিভাগীয় সমবায় অফিস", web: "https://coop.mymensinghdiv.gov.bd/" },
      { name: "ময়মনসিংহ জেলা সমবায় অফিস", web: "https://coop.mymensingh.gov.bd/" },
      { name: "জামালপুর জেলা সমবায় অফিস", web: "https://coop.jamalpur.gov.bd/" },
      { name: "শেরপুর জেলা সমবায় অফিস", web: "https://coop.sherpur.gov.bd/" },
      { name: "নেত্রকোণা জেলা সমবায় অফিস", web: "https://coop.netrokona.gov.bd/" },
    ]
  },

  // ───── ধর্মীয় স্থান ─────
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "ময়মনসিংহ কেন্দ্রীয় জামে মসজিদ", web: "https://www.youtube.com/watch?v=FQjw-HJrec8" },
      { name: "মুক্তাগাছা শিব মন্দির", web: "https://www.youtube.com/watch?v=gJ603pelssE" },
      { name: "নেত্রকোণা কালী মন্দির", web: "https://www.youtube.com/watch?v=5oJYJtQJV3I" },
      { name: "দুর্গাপুর সাধু যোসেফ গির্জা", web: "https://www.youtube.com/watch?v=F90xYcl9aoA" },
      { name: "শেরপুর জামে মসজিদ", web: "https://www.youtube.com/watch?v=IZ_vtoNEUmI" },
      { name: "জামালপুর কেন্দ্রীয় মসজিদ", web: "https://www.youtube.com/watch?v=TaNfMy7mc40" },
      { name: "ময়মনসিংহ কালী মন্দির", web: "https://www.youtube.com/watch?v=ApIS-umEF2Y" },
      { name: "হাজং রাজবাড়ী মন্দির, নেত্রকোণা", web: "https://www.youtube.com/watch?v=zqyV8owqST8" },
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
      { name: "ঈশ্বরগঞ্জ উপজেলা পরিষদ", web: "https://iswarganj.mymensingh.gov.bd/" },
      { name: "সরিষাবাড়ী উপজেলা পরিষদ (জামালপুর)", web: "http://sarishabari.jamalpur.gov.bd" },
      { name: "মেলান্দহ উপজেলা পরিষদ (জামালপুর)", web: "http://melandah.jamalpur.gov.bd" },
      { name: "ইসলামপুর উপজেলা পরিষদ (জামালপুর)", web: "http://islampur.jamalpur.gov.bd" },
      { name: "নালিতাবাড়ী উপজেলা পরিষদ (শেরপুর)", web: "http://nalitabari.sherpur.gov.bd" },
      { name: "নকলা উপজেলা পরিষদ (শেরপুর)", web: "https://nokla.sherpur.gov.bd/" },
      { name: "ঝিনাইগাতী উপজেলা পরিষদ (শেরপুর)", web: "https://jhenaigati.sherpur.gov.bd/" },
      { name: "কেন্দুয়া উপজেলা পরিষদ (নেত্রকোণা)", web: "http://kendua.netrokona.gov.bd" },
      { name: "মোহনগঞ্জ উপজেলা পরিষদ (নেত্রকোণা)", web: "https://mohongonj.netrokona.gov.bd/" },
      { name: "দুর্গাপুর উপজেলা পরিষদ (নেত্রকোণা)", web: "http://durgapur.netrokona.gov.bd" },
      { name: "কলমাকান্দা উপজেলা পরিষদ (নেত্রকোণা)", web: "http://kalmakanda.netrokona.gov.bd" },
    ]
  },
];

const MymensinghDivision = () => {
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