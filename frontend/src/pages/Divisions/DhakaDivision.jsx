import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#e74c3c";
const ICON = "🏛️";

const subCategories = [
  {
    name: "সরকারি স্কুল (ঢাকা)",
    items: [
      { name: "ঢাকা কলেজিয়েট স্কুল", web: "https://www.facebook.com/dhakacollegiateschoolofficial/?locale=bn_INhttps://www.dcs.edu.bd" },

  { name: "গভর্নমেন্ট ল্যাবরেটরি হাই স্কুল", web: "https://www.facebook.com/p/Government-Laboratory-High-School-Govt-Lab-100069210338084/" },

  { name: "নবাবপুর সরকারি উচ্চ বিদ্যালয়", web: "http://www.nawabpurghs.edu.bd/" },

  { name: "মতিঝিল সরকারি বালক উচ্চ বিদ্যালয়", web: "https://www.mgbhs.edu.bd/" },

  { name: "মতিঝিল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://mgghs.edu.bd/https://mgghs.edu.bd" },

  { name: "আজিমপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.aggsc.edu.bd/" },

  { name: "নারিন্দা সরকারি উচ্চ বিদ্যালয়", web: "http://www.nghs.edu.bd/" },

  { name: "টিকাটুলি সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.kggst.edu.bd/" },

  { name: "ইডেন গার্লস স্কুল অ্যান্ড কলেজ", web: "https://www.edencollege.gov.bd" },

  { name: "ঢাকা গভর্নমেন্ট মুসলিম হাই স্কুল", web: "http://www.dgmhs.edu.bd/" },

  { name: "শের-ই-বাংলা নগর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.sbngghs.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (গাজীপুর)",
    items: [
      { name: "Collectorate School and College, Gazipur ", web: "https://www.cscg.edu.bd/" },

  { name: "কালীগঞ্জ আর.আর.এন পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/krrnpghskrrnpghs/" },

  { name: "কাপাসিয়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Kapasia-Govt-Pilot-High-School-100057602492324/" },

  { name: "শ্রীপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/sgphs.sreepur.gazipur/" },

  { name: "কালীগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Kaliganj-Government-Girls-High-School-Kaliganj-Gazipur-100063746065407/" },

  { name: "কালীগঞ্জ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },

  { name: "ভাওয়াল বদরে আলম সরকারি কলেজ (স্কুল শাখা)", web: "https://bbagc.edu.bd/" },

  { name: "টঙ্গী সরকারি উচ্চ বিদ্যালয়", web: "https://tgco.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (নারায়ণগঞ্জ)",
    items: [
    { name: "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর (DSHE)", web: "https://www.dshe.gov.bd" },

    // ───── District Education Board ─────
    { name: "ঢাকা শিক্ষা বোর্ড (Narayanganj অন্তর্ভুক্ত)", web: "https://dhakaeducationboard.gov.bd" },

    // ───── Schools (No official standalone sites → Gov reference used) ─────
    { name: "নারায়ণগঞ্জ জিলা স্কুল", web: "https://dhakaeducationboard.gov.bd" },

    { name: "নারায়ণগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/543171909641612/" },

    { name: "সোনারগাঁও পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://sonargaon.narayanganj.gov.bd/pages/education-institutes/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%97%E0%A6%BE%E0%A6%81-%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%B2%E0%A6%9F-%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-7db1bd-6995e3d435ce18e1c07b6770" },

    { name: "সোনারগাঁও জি.আর. ইনস্টিটিউশন", web: "https://www.facebook.com/Sonargagr/" },

    { name: "সোনার বাংলা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-100063462639907/" },

    { name: "মেঘনা শিল্প নগরী স্কুল অ্যান্ড কলেজ", web: "https://www.facebook.com/p/%E0%A6%AE%E0%A7%87%E0%A6%98%E0%A6%A8%E0%A6%BE-%E0%A6%B6%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A6%A8%E0%A6%97%E0%A6%B0%E0%A7%80-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C-100090253062540/" },

    { name: "কবি নজরুল স্কুল অ্যান্ড কলেজ", web: "https://www.facebook.com/knsc2500/" },

    { name: "শম্ভুপুরা উচ্চ বিদ্যালয়", web: "http://sphighschool.edu.bd/" },

    { name: "গোলাপাড়া উচ্চ বিদ্যালয়", web: "https://www.facebook.com/Goalpara.High.school.1996/" },

    { name: "মুক্তিযোদ্ধা স্মৃতি বিদ্যানিকেতন", web: "https://www.facebook.com/groups/621817177989222/" },

    { name: "ইসদাইর রাবেয়া হোসেন উচ্চ বিদ্যালয়", web: "https://deb112413.dhakaeducationboard.gov.bd/" },

    { name: "চিট্টরঞ্জন কটন মিলস উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Chittaronjon-Cotton-Mills-High-School-100054423102792/" },

    { name: "জেলা পুলিশ লাইন স্কুল, নারায়ণগঞ্জ", web: "https://www.facebook.com/policelinesschoolngonj/" },

    { name: "নওগাঁও উচ্চ বিদ্যালয়", web: "https://www.facebook.com/groups/3600464520017554/" },
    ]
  },
  {
    name: "সরকারি স্কুল (মানিকগঞ্জ)",
    items: [
{ name: "মানিকগঞ্জ জিলা স্কুল", web: "https://www.facebook.com/MGBHS" },
// Manikganj Govt. High School — Estd. 1884, অফিশিয়াল FB পেজ

{ name: "মানিকগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb110958.dhakaeducationboard.gov.bd" },
// EIIN: 110958 — বোর্ড সাইট আছে

{ name: "সিঙ্গাইর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/singairpilot" },
// Singair Govt. High School — 9,500+ likes

{ name: "মানিকগঞ্জ এস.কে. সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/pages/SK-Govt-Girls-High-School-Manikganj/114897865189264" },
// S.K. Govt Girls' High School Manikganj

{ name: "মানিকগঞ্জ মডেল হাই স্কুল", web: "https://deb110987.dhakaeducationboard.gov.bd" },
// বোর্ড সাইট

{ name: "ঘিওর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Ghior-DN-Pilot-High-School-100064094978021" },
// Ghior D.N Pilot High School — 7,000+ likes

{ name: "দৌলতপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/DaulatpurPSHighSchool" },
// Daulatpur P.S. High School

{ name: "হরিরামপুর সরকারি উচ্চ বিদ্যালয়", web: "https://deb110939.dhakaeducationboard.gov.bd" },
// বোর্ড সাইট — FB পেজ আলাদাভাবে পাওয়া যায়নি

{ name: "শিবালয় সরকারি উচ্চ বিদ্যালয়", web: "https://deb111031.dhakaeducationboard.gov.bd" },
// বোর্ড সাইট

{ name: "সাটুরিয়া সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Saturia-Govt-Model-Pilot-High-School-100057138802877" },
// Saturia Govt. Model Pilot High School — 3,700+ likes

{ name: "সরকারি টেক্সটাইল ভোকেশনাল ইনস্টিটিউট, মানিকগঞ্জ", web: "https://tvi.manikganj.gov.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (মুন্সিগঞ্জ)",
    items: [
      { name: "মুন্সিগঞ্জ জিলা স্কুল", web: "https://deb111138.dhakaeducationboard.gov.bd" },
{ name: "মুন্সিগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb111134.dhakaeducationboard.gov.bd" },
{ name: "শ্রীনগর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://deb111231.dhakaeducationboard.gov.bd" },
{ name: "টঙ্গিবাড়ী পাইলট উচ্চ বিদ্যালয়", web: "https://deb111238.dhakaeducationboard.gov.bd" },
{ name: "গজারিয়া পাইলট মডেল উচ্চ বিদ্যালয়", web: "https://deb111093.dhakaeducationboard.gov.bd" },
{ name: "সিরাজদিখান পাইলট উচ্চ বিদ্যালয়", web: "https://deb111175.dhakaeducationboard.gov.bd" },
{ name: "লৌহজং পাইলট উচ্চ বিদ্যালয়", web: "https://deb111113.dhakaeducationboard.gov.bd" },
{ name: "ইছাপুরা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/pages/288678121765325" },
// ইছাপুরা, সিরাজদিখান — FB community page
{ name: "কোর্টগাঁও উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
  ]
  },
  {
    name: "সরকারি স্কুল (নরসিংদী)",
    items: [// Facebook পেজ পাওয়া যায়নি

{ name: "নরসিংদী জিলা স্কুল", web: "https://deb112600.dhakaeducationboard.gov.bd" },
{ name: "নরসিংদী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/NarsingdiGovtGirlsHighSchoolNarsingdi" },
// নিজস্ব সাইট: ngghschool.edu.bd
{ name: "শিবপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://deb112640.dhakaeducationboard.gov.bd" },
{ name: "মনোহরদী সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/monohardipilothighschool0" },
{ name: "বেলাবো পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/BelaboSchool" },
{ name: "রায়পুরা পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
// Facebook পেজ পাওয়া যায়নি
{ name: "পলাশ সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "ঘোড়াশাল পাইলট উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "শিবপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/100054506947976" },
]
  },
  {
    name: "সরকারি স্কুল (টাঙ্গাইল)",
    items: [// Facebook পেজ পাওয়া যায়নি
// ===== সরকারি স্কুল (টাঙ্গাইল) =====
{ name: "টাঙ্গাইল জিলা স্কুল", web: "https://deb114680.dhakaeducationboard.gov.bd" },
{ name: "টাঙ্গাইল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb114681.dhakaeducationboard.gov.bd" },
{ name: "সখীপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://deb114857.dhakaeducationboard.gov.bd" },
{ name: "মির্জাপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://deb114793.dhakaeducationboard.gov.bd" },
{ name: "ঘাটাইল সরকারি উচ্চ বিদ্যালয়", web: "https://ggphs.edu.bd" },
// নিজস্ব ওয়েবসাইট আছে!
{ name: "ভূঞাপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/bgphs.edu" },
{ name: "মধুপুর সরকারি উচ্চ বিদ্যালয়", web: "https://deb114363.dhakaeducationboard.gov.bd" },
// Madhupur Rani Bhabani Model Govt. High School EIIN: 114363
{ name: "কালিহাতী পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/krsgphs" },
// কালিহাতী আর.এস. সরকারি পাইলট উচ্চ বিদ্যালয়
{ name: "দেলদুয়ার সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "নাগরপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
]
  },
  {
    name: " সরকারি স্কুল (কিশোরগঞ্জ)",
    items: [// Facebook পেজ পাওয়া যায়নি
// ===== সরকারি স্কুল (টাঙ্গাইল) =====
// ===== সরকারি স্কুল (কিশোরগঞ্জ) =====
{ name: "কিশোরগঞ্জ জিলা স্কুল", web: "https://www.facebook.com/KishoreganjGovtBoysHighSchool.1881" },
// EIIN: 110447
{ name: "কিশোরগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.kghschool.edu.bd" },
// নিজস্ব ওয়েবসাইট আছে!
{ name: "ভৈরব পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/bhairabkb" },
{ name: "ভৈরব সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "অষ্টগ্রাম সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "ইটনা সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "নিকলী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "বাজিতপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "হোসেনপুর সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/hgmpsc" },
{ name: "কুলিয়ারচর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
]
  },
  {
    name: "সরকারি স্কুল (ফরিদপুর)",
    items: [// Facebook পেজ পাওয়া যায়নি

{ name: "ফরিদপুর জিলা স্কুল", web: "https://deb108732.dhakaeducationboard.gov.bd" },
{ name: "ফরিদপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/faridpurgghs.official" },
// EIIN: 108745
{ name: "ভাঙ্গা পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://deb108759.dhakaeducationboard.gov.bd" },
{ name: "মধুখালী পাইলট উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "সদরপুর সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "চরভদ্রাসন সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "নগরকান্দা পাইলট উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "বোয়ালমারী সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "আলফাডাঙ্গা পাইলট উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
]
  },
  {
    name: "সরকারি স্কুল (গোপালগঞ্জ)",
    items: [

{ name: "গোপালগঞ্জ জিলা স্কুল", web: "https://deb109280.dhakaeducationboard.gov.bd" },
{ name: "গোপালগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb109281.dhakaeducationboard.gov.bd" },
{ name: "কোটালীপাড়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "মুকসুদপুর পাইলট উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "কাশিয়ানী সরকারি উচ্চ বিদ্যালয়", web: "https://deb109297.dhakaeducationboard.gov.bd" },
{ name: "টুঙ্গিপাড়া সরকারি উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "গোপালগঞ্জ মডেল উচ্চ বিদ্যালয়", web: "https://dshe.gov.bd" },
{ name: "গোপালগঞ্জ টেকনিক্যাল স্কুল অ্যান্ড কলেজ", web: "https://dshe.gov.bd" },
]
  },
  {
    name: "সরকারি স্কুল (মাদারীপুর)",
    items: [
// ===== সরকারি স্কুল (মাদারীপুর) =====
{ name: "মাদারীপুর জিলা স্কুল", web: "https://deb111398.dhakaeducationboard.gov.bd" },
{ name: "মাদারীপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb111399.dhakaeducationboard.gov.bd" },
{ name: "শিবচর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://deb111430.dhakaeducationboard.gov.bd" },
{ name: "কালকিনি পাইলট উচ্চ বিদ্যালয়", web: "https://www.kalkinipghs.edu.bd/" },
{ name: "রাজৈর পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/rajoirgirls/mentions/" },
{ name: "ডাসার উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/%E0%A6%B6%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A6%B0-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC-%E0%A6%A1%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%AA%E0%A7%81%E0%A6%B0-100076445349657/" },
{ name: "শিবচর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Government-Sheikh-Fajilatunnesa-pailot-girls-high-school-Shibchar-100063474791061/" },
{ name: "মাদারীপুর টেকনিক্যাল স্কুল অ্যান্ড কলেজ", web: "https://tscshibchar.madaripur.gov.bd/" },
]
  },
  {
    name: "সরকারি স্কুল (রাজবাড়ী)",
    items: [// Facebook পেজ পাওয়া যায়নি

{ name: "রাজবাড়ী সরকারি উচ্চ বিদ্যালয়", web: "https://deb113483.dhakaeducationboard.gov.bd" },
{ name: "রাজবাড়ী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb113484.dhakaeducationboard.gov.bd" },
{ name: "পাংশা পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.pgphs.edu.bd/" },
{ name: "কালুখালী সরকারি উচ্চ বিদ্যালয়", web: "https://kalukhali.rajbari.gov.bd/pages/education-institutes/%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%81%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A7%80-%E0%A6%86%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-bf7516-6995e39235ce18e1c07b4e26" },
{ name: "বালিয়াকান্দি পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/bpmhschool/" },
{ name: "গোয়ালন্দ পাইলট উচ্চ বিদ্যালয়", web: "https://goalanda.rajbari.gov.bd/pages/education-institutes/%E0%A6%97%E0%A7%8B%E0%A7%9F%E0%A6%BE%E0%A6%B2%E0%A6%A8%E0%A7%8D%E0%A6%A6-%E0%A6%A8%E0%A6%BE%E0%A6%9C%E0%A6%BF%E0%A6%B0-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%B2%E0%A6%9F-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%80-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-df978b-6995e3de35ce18e1c07b6b45" },
{ name: "পাংশা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Pangsha-Girls-Online-School-100064156417630/" },
{ name: "রাজবাড়ী টেকনিক্যাল স্কুল অ্যান্ড কলেজ", web: "https://tsc.rajbari.gov.bd/" },
]
  },
  {
    name: "সরকারি স্কুল (শরীয়তপুর)",
    items: [
// ===== সরকারি স্কুল (শরীয়তপুর) =====
{ name: "শরীয়তপুর সরকারি উচ্চ বিদ্যালয়", web: "https://deb113555.dhakaeducationboard.gov.bd" },
{ name: "শরীয়তপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://deb113556.dhakaeducationboard.gov.bd" },
{ name: "নড়িয়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.npghs.edu.bd/" },
{ name: "ভেদরগঞ্জ পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/bhederganjpilotschool/" },
{ name: "জাজিরা পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Zinzira-Pir-Mohammad-Pilot-Girls-High-School-100063983525579/" },
{ name: "গোসাইরহাট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/grhs.thakurpath/" },
{ name: "ডামুড্যা পাইলট উচ্চ বিদ্যালয়", web: "https://www.facebook.com/dpghschool/?locale=bn_IN" },
{ name: "শরীয়তপুর টেকনিক্যাল স্কুল অ্যান্ড কলেজ", web: "https://tsc.shariatpur.gov.bd/" },
    ]
  },
  {
    name: "বেসরকারি স্কুল",
    items: [
     { name: "ভিকারুননিসা নূন স্কুল ও কলেজ", web: "https://www.vnsc.edu.bd" },
{ name: "হলিক্রস স্কুল ও কলেজ", web: "https://holycrossgirlshighschool.com/" },
{ name: "সেন্ট জোসেফ উচ্চ মাধ্যমিক বিদ্যালয়", web: "https://sjs.edu.bd/new/index.php" },
{ name: "ঢাকা রেসিডেন্সিয়াল মডেল কলেজ", web: "https://drmc.edu.bd" },
{ name: "আইডিয়াল স্কুল ও কলেজ", web: "https://iscm.edu.bd/" },
{ name: "মনিপুর উচ্চ বিদ্যালয় ও কলেজ", web: "https://www.muvc.edu.bd/" },
{ name: "রাজউক উত্তরা মডেল কলেজ", web: "https://www.rajukcollege.edu.bd" },
{ name: "মাস্টারমাইন্ড স্কুল", web: "https://www.mastermindschool.edu.bd" },
{ name: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ", web: "https://www.noormohammadcollege.ac.bd/" },
{ name: "গভর্নমেন্ট ইসলামিয়া স্কুল অ্যান্ড কলেজ", web: "https://www.facebook.com/islamiagovt.highschool.1100/" },
{ name: "ওয়ারী ল' মডেল স্কুল", web: "https://www.modelacademy.edu.bd/" },
{ name: "ধানমন্ডি গভর্নমেন্ট বয়েজ হাই স্কুল", web: "http://www.dgbhs.edu.bd/" },
    
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "ভিকারুননিসা নূন স্কুল ও কলেজ", web: "https://www.vnsc.edu.bd" },

    { name: "হলিক্রস স্কুল ও কলেজ", web: "https://www.hcc.edu.bd" },

    { name: "সেন্ট জোসেফ উচ্চ মাধ্যমিক বিদ্যালয়", web: "https://www.sjs.edu.bd" },

    { name: "ঢাকা রেসিডেন্সিয়াল মডেল কলেজ", web: "https://drmc.edu.bd" },

    { name: "আইডিয়াল স্কুল ও কলেজ", web: "https://www.isc.edu.bd" },

    { name: "মনিপুর উচ্চ বিদ্যালয় ও কলেজ", web: "https://www.mhsc.edu.bd" },

    { name: "রাজউক উত্তরা মডেল কলেজ", web: "https://www.rajukcollege.edu.bd" },

    { name: "মাস্টারমাইন্ড স্কুল", web: "https://www.mastermindschool.edu.bd" },

    { name: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ", web: "https://www.bnmpc.edu.bd" },

    { name: "ঢাকা সিটি কলেজ", web: "https://www.dhakacitycollege.edu.bd/" },

    { name: "ঢাকা কমার্স কলেজ", web: "https://www.dcc.edu.bd/" },

    { name: "নটর ডেম কলেজ (স্কুল/একাডেমিক সেকশন)", web: "https://www.notredamecollege-dhaka.com" },

    { name: "সেন্ট গ্রেগরিজ হাই স্কুল", web: "https://sghscdhaka.edu.bd/" },

    { name: "সেন্ট ফ্রান্সিস জেভিয়ার্স গার্লস স্কুল", web: "https://dshe.gov.bd" },

    { name: "ওয়ারী ল' মডেল স্কুল", web: "https://dshe.gov.bd" },
    ]
  },
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "নটর ডেম কলেজ", web: "https://www.notredamedhaka.edu.bd" },

    { name: "হলিক্রস কলেজ", web: "https://www.facebook.com/geniusadmissioncare/?locale=bn_IN" },

    { name: "ঢাকা কমার্স কলেজ", web: "https://www.dcc.edu.bd" },

    { name: "আদমজী ক্যান্টনমেন্ট কলেজ", web: "https://www.acc.edu.bd" },

    { name: "মাইলস্টোন কলেজ", web: "https://www.milestonecollege.edu.bd" },

    { name: "ঢাকা সিটি কলেজ", web: "https://www.dccollege.edu.bd" },

    { name: "ঢাকা ইমপেরিয়াল কলেজ", web: "https://www.imperialcollege.edu.bd/" },

    { name: "ভিকারুননিসা নূন কলেজ", web: "https://www.vnsc.edu.bd" },

    { name: "ঢাকা কলেজ (স্কুল/কলেজ ইউনিট মিশ্র)", web: "https://www.dhakacollege.edu.bd" },

    { name: "সরকারি বাংলা কলেজ (মিশ্র তালিকায় থাকে)", web: "https://sarkaribanglacollege.gov.bd/" },

    { name: "সরকারি তিতুমীর কলেজ (প্রাইভেট না হলেও common list)", web: "https://www.gbtc.edu.bd" },

    { name: "বীরশ্রেষ্ঠ নূর মোহাম্মদ পাবলিক কলেজ", web: "https://www.bnmpc.edu.bd" },
    ]
  },
  {
    name: "মাদ্রাসা",
    items: [
      { name: "ঢাকা আলিয়া মাদ্রাসা", web: "https://www.dhkgovmalia.edu.bd/en" },

    { name: "লালবাগ শাহি জামে মসজিদ মাদ্রাসা (লালবাগ কোরআনিয়া)", web: "https://www.facebook.com/Jamiaquraniaarabialalbagh/" },

    { name: "জামিয়া রাহমানিয়া আরাবিয়া (ঢাকা)", web: "https://jamiarahmaniaarabia.com/" },

    { name: "দারুল উলুম হাটহাজারী (চট্টগ্রাম)", web: "https://darululoomhathazari.com/" },

    { name: "গাজীপুর আলিয়া মাদ্রাসা", web: "https://www.facebook.com/groups/gazipur.help/posts/4141199012780566/" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "ঢাকা বিশ্ববিদ্যালয়", web: "https://www.du.ac.bd" },
      { name: "বুয়েট (BUET)", web: "https://www.buet.ac.bd" },
      { name: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়", web: "https://www.juniv.edu" },
      { name: "জগন্নাথ বিশ্ববিদ্যালয়", web: "https://www.jnu.ac.bd" },
      { name: "ঢাকা মেডিকেল কলেজ", web: "https://dmc.gov.bd/" },
      { name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (ময়মনসিংহ)", web: "https://www.bau.edu.bd" },
      { name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (গোপালগঞ্জ)", web: "https://bsmrstu.portal.gov.bd/" },
    ]
  },
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
{ name: "নর্থ সাউথ বিশ্ববিদ্যালয়", web: "https://www.northsouth.edu" },

    { name: "ব্র্যাক বিশ্ববিদ্যালয়", web: "https://www.bracu.ac.bd" },

    { name: "ইন্ডিপেন্ডেন্ট ইউনিভার্সিটি বাংলাদেশ (IUB)", web: "https://www.iub.edu.bd" },

    { name: "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি বাংলাদেশ (AIUB)", web: "https://www.aiub.edu" },

    { name: "ইস্ট ওয়েস্ট ইউনিভার্সিটি", web: "https://www.ewubd.edu" },

    { name: "ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.daffodilvarsity.edu.bd" },

    { name: "ইউনাইটেড ইন্টারন্যাশনাল ইউনিভার্সিটি (UIU)", web: "https://www.uiu.ac.bd" },

    { name: "আহসানউল্লাহ ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (AUST)", web: "https://www.aust.edu" },

    { name: "ইউনিভার্সিটি অব লিবারেল আর্টস বাংলাদেশ (ULAB)", web: "https://www.ulab.edu.bd" },

    { name: "স্ট্যামফোর্ড ইউনিভার্সিটি বাংলাদেশ", web: "https://www.stamforduniversity.edu.bd" },

    { name: "প্রাইমএশিয়া ইউনিভার্সিটি", web: "https://www.primeasia.edu.bd" },

    { name: "ইন্টারন্যাশনাল ইসলামিক ইউনিভার্সিটি চট্টগ্রাম", web: "https://www.iiuc.ac.bd" },

    { name: "সাউথইস্ট ইউনিভার্সিটি", web: "https://www.seu.edu.bd" },

    { name: "সাউথ এশিয়ান ইউনিভার্সিটি", web: "https://www.sau.edu.bd" },

    { name: "গ্রীন ইউনিভার্সিটি বাংলাদেশ", web: "https://www.gr        een.edu.bd" },

    { name: "স্টেট ইউনিভার্সিটি অব বাংলাদেশ", web: "https://www.sub.edu.bd" },

    { name: "ইউনিভার্সিটি অব এশিয়া প্যাসিফিক", web: "https://www.uap-bd.edu" },

    { name: "ইউনিভার্সিটি অব ইনফরমেশন টেকনোলজি অ্যান্ড সায়েন্সেস (UITS)", web: "https://www.uits.edu.bd" }
,
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "সাভার উপজেলা", web: "https://savar.dhaka.gov.bd" },
      { name: "কেরানীগঞ্জ উপজেলা", web: "https://keraniganj.dhaka.gov.bd" },
      { name: "নবাবগঞ্জ উপজেলা", web: "https://nawabganj.dhaka.gov.bd" },
      { name: "দোহার উপজেলা", web: "https://dohar.dhaka.gov.bd" },
      { name: "গাজীপুর সদর উপজেলা", web: "https://gazipur.gov.bd" },
      { name: "কালীগঞ্জ উপজেলা (গাজীপুর)", web: "https://gazipur.gov.bd" },
      { name: "নারায়ণগঞ্জ সদর উপজেলা", web: "https://narayanganj.gov.bd" },
      { name: "সোনারগাঁও উপজেলা", web: "https://narayanganj.gov.bd" },
      { name: "মানিকগঞ্জ সদর উপজেলা", web: "https://manikganj.gov.bd" },
      { name: "মুন্সিগঞ্জ সদর উপজেলা", web: "https://munshiganj.gov.bd" },
      { name: "নরসিংদী সদর উপজেলা", web: "https://narsingdi.gov.bd" },
      { name: "টাঙ্গাইল সদর উপজেলা", web: "https://tangail.gov.bd" },
      { name: "কিশোরগঞ্জ সদর উপজেলা", web: "https://kishoreganj.gov.bd" },
      { name: "ফরিদপুর সদর উপজেলা", web: "https://faridpur.gov.bd" },
      { name: "গোপালগঞ্জ সদর উপজেলা", web: "https://gopalganj.gov.bd" },
      { name: "মাদারীপুর সদর উপজেলা", web: "https://madaripur.gov.bd" },
      { name: "রাজবাড়ী সদর উপজেলা", web: "https://rajbari.gov.bd" },
      { name: "শরীয়তপুর সদর উপজেলা", web: "https://shariatpur.gov.bd" },
    ]
  },
  {
    name: "থানা",
    items: [
      { name: "রমনা থানা", web: "https://dmp.gov.bd" },
      { name: "লালবাগ থানা", web: "https://dmp.gov.bd" },
      { name: "মতিঝিল থানা", web: "https://dmp.gov.bd" },
      { name: "তেজগাঁও থানা", web: "https://dmp.gov.bd" },
      { name: "ধানমন্ডি থানা", web: "https://dmp.gov.bd" },
      { name: "মিরপুর থানা", web: "https://dmp.gov.bd" },
      { name: "গুলশান থানা", web: "https://dmp.gov.bd" },
      { name: "উত্তরা থানা", web: "https://dmp.gov.bd" },
      { name: "মোহাম্মদপুর থানা", web: "https://dmp.gov.bd" },
      { name: "যাত্রাবাড়ী থানা", web: "https://dmp.gov.bd" },
      { name: "ডেমরা থানা", web: "https://dmp.gov.bd" },
      { name: "কদমতলী থানা", web: "https://dmp.gov.bd" },
      { name: "পল্লবী থানা", web: "https://dmp.gov.bd" },
      { name: "শাহ আলী থানা", web: "https://dmp.gov.bd" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
  { name: "বাংলাদেশ ব্যাংক (কেন্দ্রীয় ব্যাংক)", web: "https://www.bb.org.bd" },

    // ───── সরকারি ব্যাংক ─────
    { name: "সোনালী ব্যাংক", web: "https://www.sonalibank.com.bd" },

    { name: "জনতা ব্যাংক", web: "https://www.jb.com.bd" },

    { name: "অগ্রণী ব্যাংক", web: "https://www.agranibank.org" },

    { name: "রূপালী ব্যাংক", web: "https://www.rupalibank.org" },

    { name: "বেসিক ব্যাংক", web: "https://www.basicbanklimited.com" },

    // ───── ইসলামি ব্যাংক ─────
    { name: "ইসলামী ব্যাংক বাংলাদেশ লিমিটেড", web: "https://www.islamibankbd.com" },

    { name: "আল-আরাফাহ ইসলামী ব্যাংক", web: "https://www.aibl.com.bd/#gallery" },

    { name: "শাহজালাল ইসলামী ব্যাংক", web: "https://sjiblbd.com/" },

    { name: "ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক", web: "https://www.fsiblbd.com" },

    // ───── বেসরকারি ব্যাংক ─────
    { name: "ডাচ-বাংলা ব্যাংক", web: "https://www.dutchbanglabank.com/" },

    { name: "ব্র্যাক ব্যাংক", web: "https://www.bracbank.com" },

    { name: "পূবালী ব্যাংক", web: "https://www.pubalibangla.com" },

    { name: "এক্সিম ব্যাংক", web: "https://www.eximbankbd.com" },

    { name: "সিটি ব্যাংক", web: "https://www.thecitybank.com" },

    { name: "এনসিসি ব্যাংক", web: "https://www.nccbank.com.bd" },

    { name: "ঢাকা ব্যাংক", web: "https://www.dhakabankltd.com" },

    { name: "মিউচুয়াল ট্রাস্ট ব্যাংক (MTB)", web: "https://www.mutualtrustbank.com" },

    { name: "স্ট্যান্ডার্ড চার্টার্ড ব্যাংক (BD)", web: "https://www.sc.com/bd" },

    { name: "HSBC বাংলাদেশ", web: "https://www.hsbc.com.bd" },

    { name: "ওয়ান ব্যাংক", web: "https://www.onebank.com.bd" },

    { name: "সাউথইস্ট ব্যাংক", web: "https://www.southeastbank.com.bd" },

    { name: "প্রাইম ব্যাংক", web: "https://www.primebank.com.bd" },

    { name: "ইস্টার্ন ব্যাংক (EBL)", web: "https://www.ebl.com.bd" },

    { name: "উত্তরা ব্যাংক", web: "https://www.uttarabank-bd.com" },
    { name: "স্ট্যান্ডার্ড চার্টার্ড ব্যাংক বাংলাদেশ", web: "https://www.sc.com/bd" },

    { name: "HSBC বাংলাদেশ", web: "https://www.hsbc.com.bd" },

    { name: "সিটি ব্যাংক এন.এ (Citibank NA Bangladesh)", web: "https://www.citigroup.com/global/investor-relations" },

    { name: "হাবিব ব্যাংক লিমিটেড (Habib Bank Ltd)", web: "https://www.hbl.com" },

    { name: "স্টেট ব্যাংক অফ ইন্ডিয়া (SBI Bangladesh)", web: "https://bank.sbi/web/guest/international/branches/bangladesh" },

    { name: "ওরিয়েন্টাল ব্যাংক (now merged history branch reference)", web: "https://www.facebook.com/tbsnews.net/posts/bangladesh-bank-has-completed-the-merger-of-five-shariah-based-banks-by-reducing/1298764782298253/" },
  
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "ঢাকা জেলা ভূমি অফিস", web: "https://dhaka.gov.bd/pages/static-pages/6995ae3735ce18e1c0795cb0" },
      { name: "নারায়ণগঞ্জ জেলা ভূমি অফিস", web: "https://acl.narayanganjsadar.narayanganj.gov.bd" },
      { name: "গাজীপুর জেলা ভূমি অফিস", web: "https://land.gazipur.gov.bd" },
      { name: "মানিকগঞ্জ জেলা ভূমি অফিস", web: "https://land.manikganj.gov.bd" },
      { name: "মুন্সিগঞ্জ জেলা ভূমি অফিস", web: "https://land.munshiganj.gov.bd" },
      { name: "নরসিংদী জেলা ভূমি অফিস", web: "https://land.narsingdi.gov.bd" },
      { name: "টাঙ্গাইল জেলা ভূমি অফিস", web: "https://land.tangail.gov.bd" },
      { name: "কিশোরগঞ্জ জেলা ভূমি অফিস", web: "https://land.kishoreganj.gov.bd" },
      { name: "ফরিদপুর জেলা ভূমি অফিস", web: "https://land.faridpur.gov.bd" },
      { name: "গোপালগঞ্জ জেলা ভূমি অফিস", web: "https://land.gopalganj.gov.bd" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ", web: "https://www.hanifenterprisebd.com" },

    { name: "শ্যামলী পরিবহন", web: "https://www.shyamoliparibahan-bd.com" },

    { name: "গ্রিন লাইন পরিবহন", web: "https://www.greenlinebd.com" },

    { name: "বিআরটিসি (Bangladesh Road Transport Corporation)", web: "https://brtc.gov.bd/" },

    { name: "এনা পরিবহন", web: "https://enatransport.com.bd/" },

    { name: "সোহাগ পরিবহন", web: "https://shohagh.com/" },

    { name: "ঈগল পরিবহন", web: "https://www.eagleparibahan.com/" },

    { name: "লন্ডন এক্সপ্রেস", web: "https://lonexbd.com/" },

    { name: "দেশ ট্রাভেলস", web: "https://deshtravelsbd.com/" },

    { name: "Soudia Coach Service", web: "https://www.soudiabus.com/" },

    { name: "Royal Coach (Dhaka)", web: "https://www.royalcoach-bd.com/" },

    { name: "Keya Paribahan", web: "https://www.facebook.com/keyaparibahan" },

    { name: "Shyamoli NR Travels", web: "https://www.facebook.com/shyamolinr" },

    { name: "Eagle Paribahan (AC/Non-AC routes)", web: "https://www.facebook.com/eagleparibahan" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে (ই-টিকিট)", web: "https://eticket.railway.gov.bd" },
      { name: "কমলাপুর রেলওয়ে স্টেশন", web: "https://www.facebook.com/KamalapurRaiilwayStation/" },
      { name: "বিমানবন্দর রেলওয়ে স্টেশন", web: "https://www.facebook.com/AirportRailwayStation/" },
      { name: "মেট্রোরেল (DMTCL)", web: "https://dmtcl.gov.bd/" },
      { name: "বিআইডব্লিউটিসি (নৌপথ)", web: "https://dmtcl.gov.bd/" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" },

    { name: "কালের কণ্ঠ", web: "https://www.kalerkantho.com" },

    { name: "দৈনিক যুগান্তর", web: "https://www.jugantor.com" },

    { name: "সমকাল", web: "https://www.samakal.com" },

    { name: "বাংলাদেশ প্রতিদিন", web: "https://www.bd-pratidin.com" },

    { name: "ইত্তেফাক", web: "https://www.ittefaq.com.bd" },

    { name: "মানবজমিন", web: "https://www.mzamin.com" },

    { name: "ইনকিলাব", web: "https://www.dailyinqilab.com" },

    // ───── English Newspapers ─────
    { name: "The Daily Star", web: "https://www.thedailystar.net" },

    { name: "The Business Standard", web: "https://www.tbsnews.net" },

    { name: "Financial Express", web: "https://www.thefinancialexpress.com.bd" },

    { name: "Dhaka Tribune", web: "https://www.dhakatribune.com" },

    { name: "New Age", web: "https://www.newagebd.net" },

    // ───── Dhaka Division Regional Newspapers ─────
    { name: "ঢাকা পোস্ট", web: "https://www.dhakapost.com" },

    { name: "ঢাকা ট্রিবিউন (Dhaka Focus)", web: "https://www.dhakatribune.com" },

    { name: "ঢাকা টাইমস", web: "https://www.dhakatimes24.com" },

    { name: "ঢাকা রিপোর্টার্স ইউনিটি নিউজ", web: "https://www.dru.com.bd/" },

    { name: "নারায়ণগঞ্জ সংবাদ", web: "https://www.narayanganjtimes.com/" },

    { name: "গাজীপুর সংবাদ", web: "https://www.gazipurnews24.com" },

    { name: "মুন্সিগঞ্জ বার্তা", web: "https://www.munshiganjnews.com" },

    { name: "নরসিংদী প্রতিদিন", web: "https://www.facebook.com/narsingdipratidin/?locale=bn_IN" },

    { name: "মানিকগঞ্জ বার্তা", web: "https://www.facebook.com/mubarok.mahammed/" },

    { name: "টাঙ্গাইল টাইমস", web: "https://www.tangailtimes24.com" },
    ]
  },
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব সদর দপ্তর (ঢাকা)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-১ (ঢাকা)", web: "https://www.facebook.com/rab1uttara/?locale=bn_IN" },
      { name: "র‌্যাব-২ (ঢাকা)", web: "https://www.facebook.com/rab2online/?locale=bn_IN" },
      { name: "র‌্যাব-৩ (ঢাকা)", web: "https://www.facebook.com/RapidActionBattalion3/" },
      { name: "র‌্যাব-৪ (ঢাকা)", web: "https://www.facebook.com/rab4mirpur/" },
      { name: "র‌্যাব-১০ (নারায়ণগঞ্জ)", web: "https://www.facebook.com/rab10bd/?locale=bn_IN" },
      { name: "র‌্যাব-১১ (গাজীপুর)", web: "https://www.facebook.com/rab11narayangonj/?locale=bn_INhttps://www.rab.gov.bd" },
    ]
  },
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি সদর দপ্তর (ঢাকা)", web: "https://bgb.gov.bd/" },
      { name: "বিজিবি ঢাকা রিজিওন", web: "https://bgb.gov.bd/" },
      { name: "বিজিবি ৫ রাইফেলস ব্যাটালিয়ন (ঢাকা)", web: "https://bgb.gov.bd/pages/static-pages/6922dc97933eb65569e11218" },
    ]
  },
  {
    name: "এনজিও অফিস",
    items: [
       { name: "ব্র্যাক (BRAC)", web: "https://www.brac.net" },

    { name: "আশা (ASA)", web: "https://www.asa.org.bd" },

    { name: "গ্রামীণ ব্যাংক", web: "https://www.grameen.com" },

    { name: "প্রশিকা মানবিক উন্নয়ন কেন্দ্র", web: "https://www.proshika.org" },

    { name: "ক্যার বাংলাদেশ (CARE Bangladesh)", web: "https://www.carebangladesh.org" },

    { name: "সেভ দ্য চিলড্রেন বাংলাদেশ", web: "https://www.savethechildren.net/bangladesh" },

    { name: "অক্সফাম বাংলাদেশ", web: "https://www.oxfam.org/en/countries/bangladesh" },

    { name: "World Vision Bangladesh", web: "https://www.wvi.org/bangladesh" },

    { name: "Plan International Bangladesh", web: "https://plan-international.org/bangladesh" },

    { name: "RDRS Bangladesh", web: "https://www.rdrsbangladesh.org" },

    // ───── Dhaka-based NGOs ─────
    { name: "Dhaka Ahsania Mission", web: "https://www.ahsaniamission.org.bd" },

    { name: "TMSS (Thengamara Mohila Sabuj Sangha)", web: "https://www.tmss-bd.org" },

    { name: "Uttaran", web: "https://www.uttaran.net" },

    { name: "Shushilan", web: "https://www.shushilan.org" },

    { name: "FIVDB", web: "https://www.fivdb.org" },

    { name: "COAST Trust", web: "https://www.coastbd.net" },

    { name: "Caritas Bangladesh", web: "https://www.caritasbd.org" },

    { name: "YPSA (Young Power in Social Action)", web: "https://www.ypsa.org" },

    { name: "Friendship NGO", web: "https://www.friendship.ngo" },

    { name: "Bangladesh Rural Advancement Committee (BRAC Foundation)", web: "https://www.brac.net" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "ঢাকা মেডিকেল কলেজ হাসপাতাল", web: "https://dmc.gov.bd/" },
      { name: "স্যার সলিমুল্লাহ মেডিকেল কলেজ হাসপাতাল", web: "https://www.ssmc.gov.bd" },
      { name: "শহীদ সোহরাওয়ার্দী মেডিকেল কলেজ হাসপাতাল", web: "https://shsmc.college.gov.bd/" },
      { name: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU)", web: "https://www.bmu.ac.bd/" },
      { name: "জাতীয় হৃদরোগ ইনস্টিটিউট (NICVD)", web: "https://www.nicvd.gov.bd" },
      { name: "জাতীয় কিডনি ইনস্টিটিউট ও হাসপাতাল", web: "https://medi-wing.com/hospital-details/National-Institute-of-Kidney-Diseases-&-Urology" },
      { name: "জাতীয় চক্ষু বিজ্ঞান ইনস্টিটিউট", web: "https://nioh.gov.bd" },
      { name: "জাতীয় মানসিক স্বাস্থ্য ইনস্টিটিউট (NIMH)", web: "https://www.nimh.gov.bd" },
      { name: "নারায়ণগঞ্জ সদর হাসপাতাল", web: "https://hospital.narayanganj.gov.bd/" },
      { name: "গাজীপুর সদর হাসপাতাল", web: "https://sadar.gazipur.gov.bd/pages/hospitalclinic" },
      { name: "টাঙ্গাইল সদর হাসপাতাল", web: "https://hospital.tangail.gov.bd/" },
    ]
  },
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "স্কয়ার হাসপাতাল", web: "https://www.squarehospital.com" },

    { name: "ইউনাইটেড হাসপাতাল", web: "https://www.united.com.bd/our-concerns/united-hospital-ltd/" },

    { name: "এভারকেয়ার হাসপাতাল (পূর্বে অ্যাপোলো)", web: "https://www.evercarebd.com" },

    { name: "ল্যাবএইড হাসপাতাল", web: "https://www.labaidgroup.com" },

    { name: "ইবনে সিনা হাসপাতাল (ধানমন্ডি)", web: "https://seradoctor.com/blog-details/ibn-sina-hospital-dhanmondi-doctor-list" },

    { name: "পপুলার মেডিকেল কলেজ হাসপাতাল", web: "https://www.popular-hospital.com" },

    { name: "বিএমসি হাসপাতাল", web: "https://bmc-bd.org/" },

    { name: "বারডেম জেনারেল হাসপাতাল", web: "https://www.birdembd.org" },

    { name: "বাংলাদেশ স্পেশালাইজড হাসপাতাল", web: "https://www.bdspecializedhospital.com" },

    { name: "মনিকো ডায়াগনস্টিক অ্যান্ড হাসপাতাল", web: "https://www.facebook.com/MonicoPharmaLtd/" },

    // ───── Diagnostic + Hospital Chains ─────
    { name: "ল্যাবএইড ডায়াগনস্টিক", web: "https://labaiddiagnostics.com/" },

    { name: "ইবনে সিনা ডায়াগনস্টিক", web: "https://www.facebook.com/ibnsinactg/?locale=bn_IN" },

    { name: "মেডিনোভা মেডিকেল সার্ভিসেস", web: "https://www.fightingcancerbd.com/service-provider/diagnostic-center/medinova-medical-services-limited" },

    { name: "ডেলটা মেডিকেল কলেজ হাসপাতাল", web: "https://delta-hospital.com/" },

    { name: "ইউনিভার্সাল মেডিকেল কলেজ হাসপাতাল", web: "https://www.umchltd.com/" },

    { name: "আনোয়ার খান মডার্ন মেডিকেল কলেজ হাসপাতাল", web: "https://www.akmmch.com" },

    { name: "সেন্ট্রাল হাসপাতাল ঢাকা", web: "https://centralhospitalltdbd.com/" },

    { name: "শমরিতা হাসপাতাল", web: "https://www.samoritahospital.org/" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "ঢাকা জিপিও", web: "https://dhkgpo.pmgmetro.bdpost.gov.bd/" },
      { name: "নারায়ণগঞ্জ জিপিও", web: "https://post.narayanganj.gov.bd/" },
      { name: "গাজীপুর জিপিও", web: "https://www.bangladeshpost.gov.bd" },
      { name: "টাঙ্গাইল জিপিও", web: "https://tangail.gov.bd/pages/static-pages/6995e31b35ce18e1c07b3068" },
      { name: "ফরিদপুর জিপিও", web: "https://post.faridpur.gov.bd/" },
      { name: "কিশোরগঞ্জ জিপিও", web: "https://post.kishoreganj.gov.bd/" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (BPDB)", web: "https://bpdb.gov.bd/" },

    { name: "বাংলাদেশ পাওয়ার ডেভেলপমেন্ট বোর্ড (Generation)", web: "https://bpdb.gov.bd/" },

    { name: "পাওয়ার গ্রিড কোম্পানি বাংলাদেশ (PGCB)", web: "https://pgcb.gov.bd/" },

    { name: "বাংলাদেশ এনার্জি রেগুলেটরি কমিশন (BERC)", web: "https://berc.portal.gov.bd/pages/notices/695fc15fa31054345f10657d" },

    // ───── Dhaka Distribution Companies ─────
    { name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (DPDC)", web: "https://dpdc.gov.bd/" },

    { name: "ঢাকা ইলেকট্রিক সাপ্লাই কোম্পানি (DESCO)", web: "https://desco.gov.bd/" },

    // ───── Regional Distribution ─────
    { name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন (WZPDCL)", web: "https://wzpdcl.org.bd/" },

    { name: "নর্দার্ন ইলেকট্রিসিটি সাপ্লাই কোম্পানি (NESCO)", web: "https://nesco.gov.bd/" },

    { name: "পল্লী বিদ্যুৎ সমিতি (BREB)", web: "https://reb.gov.bd/" },

    // ───── Related Energy Organizations ─────
    { name: "বাংলাদেশ বিদ্যুৎ বিভাগ (Power Division)", web: "https://powerdivision.gov.bd" },

    { name: "Energy & Mineral Resources Division", web: "https://emrd.gov.bd" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স (সদর দপ্তর)", web: "https://fireservice.gov.bd/" },

    // ───── Dhaka Division Major Stations ─────
    { name: "ঢাকা ফায়ার সার্ভিস সদর দপ্তর (মতিঝিল)", web: "https://fireservice.dhaka.gov.bd/" },

    { name: "সিদ্দিকবাজার ফায়ার স্টেশন", web: "https://cdn.jagonews24.com/media/doc/2019April/fire%20stations&office-20190402134453.pdf" },

    { name: "তেজগাঁও ফায়ার স্টেশন", web: "https://fireservice.gov.bd/pages/static-pages/6922dcc6933eb65569e11fd1" },

    { name: "মিরপুর ফায়ার স্টেশন", web: "https://fireservicetc.portal.gov.bd/" },

    { name: "উত্তরা ফায়ার স্টেশন", web: "https://www.facebook.com/fscd.bd/posts/%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A6%BE-%E0%A6%AB%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B6%E0%A6%A8/2046113178959840/" },

    { name: "কোতোয়ালি (পুরান ঢাকা) ফায়ার স্টেশন", web: "https://fireservice.gov.bd/pages/static-pages/6922dcc6933eb65569e11fd1" },

    // ───── Surrounding Dhaka Division ─────
    { name: "নারায়ণগঞ্জ ফায়ার স্টেশন", web: "https://fireservice.narayanganj.gov.bd/" },

    { name: "গাজীপুর ফায়ার স্টেশন", web: "https://fireservice.gazipur.gov.bd/" },

    { name: "মানিকগঞ্জ ফায়ার স্টেশন", web: "https://fireservice.manikganj.gov.bd/" },

    { name: "মুন্সিগঞ্জ ফায়ার স্টেশন", web: "https://fireservice.munshiganj.gov.bd/" },

    { name: "নরসিংদী ফায়ার স্টেশন", web: "https://fireservice.narsingdi.gov.bd/" },

    { name: "টাঙ্গাইল ফায়ার স্টেশন", web: "https://fireservice.tangail.gov.bd/" },

    { name: "কিশোরগঞ্জ ফায়ার স্টেশন", web: "https://fireservice.kishoreganj.gov.bd/" },

    { name: "ফরিদপুর ফায়ার স্টেশন", web: "https://fireservice.faridpur.gov.bd/" },

    { name: "গোপালগঞ্জ ফায়ার স্টেশন", web: "https://fireservice.gopalganj.gov.bd/" },
    ]
  },
  {
    name: "আদালত",
    items: [
      { name: "বাংলাদেশ সুপ্রিম কোর্ট", web: "https://www.supremecourt.gov.bd" },

    { name: "হাইকোর্ট বিভাগ (Supreme Court)", web: "https://www.supremecourt.gov.bd/web/" },

    { name: "আপিল বিভাগ (Supreme Court)", web: "https://www.supremecourt.gov.bd/web/" },

    // ───── Dhaka Division District Courts ─────
    { name: "ঢাকা জেলা ও দায়রা জজ আদালত", web: "https://dhaka.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "নারায়ণগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://narayanganj.judiciary.gov.bd/bn/leader-district-judge" },

    { name: "গাজীপুর জেলা ও দায়রা জজ আদালত", web: "https://gazipur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "টাঙ্গাইল জেলা ও দায়রা জজ আদালত", web: "https://tangail.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court-stuff" },

    { name: "ফরিদপুর জেলা ও দায়রা জজ আদালত", web: "https://faridpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "কিশোরগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://kishoreganj.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "মুন্সিগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://munshiganj.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "মানিকগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://manikganj.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "নরসিংদী জেলা ও দায়রা জজ আদালত", web: "https://narsingdi.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "গোপালগঞ্জ জেলা ও দায়রা জজ আদালত", web: "https://gopalganj.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "মাদারীপুর জেলা ও দায়রা জজ আদালত", web: "https://madaripur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "রাজবাড়ী জেলা ও দায়রা জজ আদালত", web: "https://rajbari.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },

    { name: "শরীয়তপুর জেলা ও দায়রা জজ আদালত", web: "https://shariatpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }
,
    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর", web: "https://www.hsia.gov.bd" },
      { name: "বিমান বাংলাদেশ এয়ারলাইন্স", web: "https://www.biman-airlines.com/#gsc.tab=0" },
      { name: "সিভিল এভিয়েশন অথরিটি (CAAB)", web: "http://caab.gov.bd/" },
    ]
  },
  {
    name: "পোর্ট",
    items: [
      { name: "ঢাকা নদীবন্দর (সদরঘাট)", web: "https://www.facebook.com/watch/?v=1516904806809664" },
      { name: "নারায়ণগঞ্জ নদীবন্দর", web: "https://pqsriverport.narayanganj.gov.bd/" },
      { name: "বিআইডব্লিউটিএ (BIWTA)", web: "https://biwta.gov.bd/" },
      { name: "বিআইডব্লিউটিসি (BIWTC)", web: "https://biwtc.gov.bd/" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
        { name: "লালবাগ কেল্লা", web: "https://archaeology.gov.bd/pages/static-pages/6922e08d933eb65569e278b5" },

    { name: "আহসান মঞ্জিল (Pink Palace)", web: "https://www.ahsanmanzilticket.gov.bd/" },

    { name: "তারাবাগ প্রাসাদ (Dhaka Old Town Heritage)", web: "https://www.youtube.com/watch?v=uw72h6SeSZw" },

    { name: "হোসেনি দালান", web: "https://www.youtube.com/watch?v=qym_-AYs8Hs" },

    { name: "ঢাকা বিশ্ববিদ্যালয় এলাকা (Curzon Hall)", web: "https://www.youtube.com/watch?v=zxj644kkpkM" },

    // ───── National Monuments ─────
    { name: "জাতীয় সংসদ ভবন (Jatiyo Sangsad Bhaban)", web: "https://www.parliament.gov.bd" },

    { name: "জাতীয় স্মৃতিসৌধ (সাভার)", web: "https://www.youtube.com/watch?v=7Z9pmYJL3LA" },

    { name: "মুক্তিযুদ্ধ জাদুঘর", web: "https://www.youtube.com/watch?v=DjGeKL3L51Y" },

    // ───── Museums ─────
    { name: "বাংলাদেশ জাতীয় জাদুঘর", web: "https://www.youtube.com/watch?v=N5642IlXr6o" },

    { name: "সোনারগাঁও লোকশিল্প জাদুঘর", web: "https://www.youtube.com/watch?v=sZjqJRI15ME" },

    // ───── Parks & Recreation ─────
    { name: "জাতীয় চিড়িয়াখানা (Mirpur Zoo)", web: "https://www.youtube.com/watch?v=eOelikbO7dI" },

    { name: "বোটানিক্যাল গার্ডেন (মিরপুর)", web: "https://www.youtube.com/watch?v=jzBazlOBqlA" },

    { name: "রামনা পার্ক", web: "https://www.youtube.com/watch?v=r-OsQ0IdB-Q" },

    { name: "উদ্যান টাওয়ার (Hatirjheel Area)", web: "https://www.youtube.com/watch?v=a9E2BfQ3lYU" },

    // ───── Amusement Parks ─────
    { name: "ফ্যান্টাসি কিংডম (Savar)", web: "https://www.youtube.com/watch?v=df_axHYf-I4" },

    { name: "নন্দন পার্ক", web: "https://www.youtube.com/watch?v=yNtTX5aZBrQ" },

    { name: "শিশু পার্ক (Dhaka)", web: "https://www.youtube.com/watch?v=Bm7TAmloSrE" },

    // ───── Modern Attractions ─────
    { name: "বঙ্গবন্ধু নভোথিয়েটার", web: "https://www.youtube.com/watch?v=TwagB_qYip4" },

    { name: "হাতিরঝিল লেক ভিউ", web: "https://www.youtube.com/watch?v=NRImoXUNcSM" },

    { name: "ঢাকা বিশ্ববিদ্যালয় (TSC area)", web: "https://www.youtube.com/watch?v=CBwnVtUz-rM" },

    // ───── Sonargaon Area (Dhaka Division Heritage) ─────
    { name: "সোনারগাঁও পানাম নগর", web: "https://www.youtube.com/watch?v=RF8RKe57tY0" },

    { name: "সোনারগাঁও লোকশিল্প জাদুঘর", web: "https://www.youtube.com/watch?v=sZjqJRI15ME&t=17s" },
    ]
  },
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
  { name: "জাতীয় হেলথ হেল্পলাইন - ১৬০০০", web: "http://dghs.portal.gov.bd/pages/news/6922dc3e933eb65569e0f3c2" },

    { name: "জাতীয় জরুরি সেবা - ৯৯৯ (Police, Fire, Ambulance)", web: "https://www.police.gov.bd" },

    // ───── Major Hospital Ambulance (Dhaka) ─────
    { name: "স্কয়ার হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.squarehospital.com" },

    { name: "ইউনাইটেড হাসপাতাল অ্যাম্বুলেন্স", web: "https://24ambulance.com/united-hospital-ambulance/" },

    { name: "এভারকেয়ার হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.evercarebd.com" },

    { name: "ল্যাবএইড হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.labaidgroup.com" },

    { name: "ইবনে সিনা হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.medi-wing.com/medical-center-details/ibn-sina-diagnostic-imaging-center-dhanmondi" },

    { name: "বাংলাদেশ স্পেশালাইজড হাসপাতাল", web: "https://www.bdspecializedhospital.com" },

    // ───── Red Crescent & NGO Services ─────
    { name: "বাংলাদেশ রেড ক্রিসেন্ট অ্যাম্বুলেন্স সার্ভিস", web: "https://www.bdrcs.org" },

    { name: "BRAC Health Ambulance Service", web: "https://www.brac.net" },

    { name: "Friendship Ambulance Service", web: "https://www.friendship.ngo" },

    // ───── Private Ambulance Networks (Dhaka) ─────
    { name: "Dhaka Ambulance Service (Private)", web: "https://sasthyaseba.com/ambulance-service" },

    { name: "City Ambulance Service Dhaka", web: "https://sasthyaseba.com/ambulance-service" },

    { name: "Green Life Hospital Ambulance", web: "https://www.greenlifehospital.com.bd" },

    { name: "Popular Medical College Ambulance", web: "https://www.popular-hospital.com" },
    ]
  },
  {
    name: "ক্লিনিক",
    items: [
       { name: "পপুলার ডায়াগনস্টিক সেন্টার", web: "https://www.populardiagnostic.com" },

    { name: "ইবনে সিনা ডায়াগনস্টিক সেন্টার", web: "https://www.ibnsinatrust.com/" },

    { name: "ল্যাবএইড ডায়াগনস্টিক", web: "https://labaiddiagnostics.com/" },

    { name: "মেডিনোভা মেডিকেল সার্ভিসেস", web: "https://www.medinova.com.bd" },

    { name: "ডিএমএফআর মলিকুলার ল্যাব", web: "https://dhanmondisociety.org/blog-details/20" },

    // ───── Hospitals with Clinic Services ─────
    { name: "আল-রাজী হাসপাতাল", web: "https://inhealthylife.com/al-rajhi-hospital-farmgate-doctor-list/" },

    { name: "ডেলটা মেডিকেল কলেজ হাসপাতাল", web: "https://www.dlmch.edu.bd/" },

    { name: "বাংলাদেশ স্পেশালাইজড হাসপাতাল", web: "https://www.bdspecializedhospital.com" },

    { name: "ইউনাইটেড হাসপাতাল ক্লিনিক সার্ভিস", web: "https://www.facebook.com/unitedclinicallaboratory/" },

    { name: "স্কয়ার হাসপাতাল ক্লিনিক/ডায়াগনস্টিক", web: "https://www.squarehospital.com" },

    // ───── Additional Diagnostic Centers ─────
    { name: "ইনসাফ বারাকা ডায়াগনস্টিক", web: "https://www.insafbarakahospital.com" },

    { name: "জেনারেল ডায়াগনস্টিক সেন্টার", web: "https://healthcenterbd.com/general-diagnostic-centre-rangpur/" },

    { name: "জনসন ল্যাব ডায়াগনস্টিক", web: "https://johnsonsplace-dental-lab.com/" },
    ]
  },
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "প্রাণিসম্পদ অধিদপ্তর (সদর দপ্তর)", web: "https://dls.gov.bd/" },
      { name: "কেন্দ্রীয় ভেটেরিনারি হাসপাতাল (ঢাকা)", web: "https://cvh.dhakadiv.gov.bd/" },
      { name: "ঢাকা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.dhaka.gov.bd/" },
      { name: "বাংলাদেশ প্রাণিসম্পদ গবেষণা ইনস্টিটিউট (BLRI)", web: "https://blri.gov.bd/" },
    ]
  },
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "ঢাকা ওয়াসা (DWASA)", web: "https://dwasa.org.bd/" },
      { name: "নারায়ণগঞ্জ ওয়াসা", web: "https://www.wasa.narayanganj.gov.bd" },
      { name: "গাজীপুর সিটি কর্পোরেশন (পানি)", web: "https://gcc.gov.bd/pages/internal-eservices/%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%B0-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%8F%E0%A6%AC%E0%A6%82-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%86%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8-39e6b4-6922d991dbfbab28ce04df48" },
    { name: "নারায়ণগঞ্জ সিটি কর্পোরেশন (পানি সেবা)", web: "https://ncc.gov.bd/pages/static-pages/6922dc20933eb65569e0e887" },

    { name: "গাজীপুর সিটি কর্পোরেশন (পানি সেবা)", web: "https://gcc.gov.bd/pages/internal-eservices/%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%B0-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%8F%E0%A6%AC%E0%A6%82-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%86%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8-39e6b4-6922d991dbfbab28ce04df48" },

    { name: "ঢাকা উত্তর সিটি কর্পোরেশন (DNCC পানি/নাগরিক সেবা)", web: "https://dncc.gov.bd/" },

    { name: "ঢাকা দক্ষিণ সিটি কর্পোরেশন (DSCC পানি/নাগরিক সেবা)", web: "https://dscc.gov.bd/pages/static-pages/6922dd2f933eb65569e13d79" },

    // ───── Supporting National Authorities ─────
    { name: "স্থানীয় সরকার বিভাগ (LGD)", web: "https://lgd.gov.bd/" },

    { name: "বাংলাদেশ পানি উন্নয়ন বোর্ড (BWDB)", web: "https://www.bwdb.gov.bd/" },
    ]
  },
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "তিতাস গ্যাস ট্রান্সমিশন ও ডিস্ট্রিবিউশন", web: "https://www.titasgas.org.bd" },
      { name: "পেট্রোবাংলা", web: "https://petrobangla.org.bd/" },
      { name: "রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানি (RPGCL)", web: "https://rpgcl.org.bd/" },
    ]
  },
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক", web: "https://www.banglalink.net" },
      { name: "রবি আজিয়াটা", web: "https://www.robi.com.bd" },
      { name: "টেলিটক বাংলাদেশ", web: "https://www.teletalk.com.bd" },
      { name: "বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)", web: "https://btrc.gov.bd/" },
      { name: "বাংলাদেশ টেলিকমিউনিকেশন কোম্পানি (BTCL)", web: "https://btcl.portal.gov.bd/" },
    ]
  },
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (JBC)", web: "https://jbc.gov.bd/" },

    { name: "সাধারণ বীমা কর্পোরেশন (SBC)", web: "https://sbc.gov.bd/" },

    // ───── Major Life Insurance ─────
    { name: "ডেলটা লাইফ ইন্স্যুরেন্স", web: "https://www.deltalife.org/" },

    { name: "মেটলাইফ বাংলাদেশ", web: "https://www.metlife.com.bd/" },

    { name: "ন্যাশনাল লাইফ ইন্স্যুরেন্স", web: "https://www.nlibd.com/" },

    { name: "পপুলার লাইফ ইন্স্যুরেন্স", web: "https://www.popularlifeins.com/" },

    { name: "রূপালী লাইফ ইন্স্যুরেন্স", web: "https://rupaliinsurance.com/contact-us" },

    { name: "প্রগতি লাইফ ইন্স্যুরেন্স", web: "https://www.pragatilife.com/" },

    { name: "চার্টার্ড লাইফ ইন্স্যুরেন্স", web: "https://www.charteredlifebd.com/" },

    // ───── General Insurance Companies ─────
    { name: "গ্রীন ডেলটা ইন্স্যুরেন্স", web: "https://green-delta.com/" },

    { name: "প্রাইম ইন্স্যুরেন্স", web: "https://www.prime-insurance.net/" },

    { name: "ফেডারেল ইন্স্যুরেন্স", web: "https://federalinsubd.website/" },

    { name: "সিটি জেনারেল ইন্স্যুরেন্স", web: "https://www.cityinsurance.com.bd" },

    { name: "ইস্টার্ন ইন্স্যুরেন্স", web: "https://eiclbd.com/" },

    { name: "রূপালী ইন্স্যুরেন্স", web: "http://www.rupaliinsurance.com/" },

    { name: "নর্দান ইন্স্যুরেন্স", web: "https://niil.com.bd/" },
    ]
  },
  {
    name: "সমবায়",
    items: [
      { name: "জেলা সমবায় কার্যালয়, ঢাকা",          web: "https://coop.dhaka.gov.bd" },         // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, গাজীপুর",       web: "https://coop.gazipur.gov.bd" },       // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, নারায়ণগঞ্জ",   web: "https://coop.narayanganj.gov.bd" },   // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, মুন্সীগঞ্জ",    web: "https://coop.munshiganj.gov.bd" },    // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, মানিকগঞ্জ",    web: "https://coop.manikganj.gov.bd" },     // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, নরসিংদী",      web: "https://coop.narsingdi.gov.bd" },     // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, কিশোরগঞ্জ",    web: "https://coop.kishoreganj.gov.bd" },   // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, টাঙ্গাইল",     web: "https://coop.tangail.gov.bd" },       // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, ফরিদপুর",      web: "https://coop.faridpur.gov.bd" },      // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, মাদারীপুর",    web: "https://coop.madaripur.gov.bd" },     // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, শরীয়তপুর",    web: "https://coop.shariatpur.gov.bd" },    // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, রাজবাড়ী",     web: "https://coop.rajbari.gov.bd" },       // ✅ pattern
{ name: "জেলা সমবায় কার্যালয়, গোপালগঞ্জ",    web: "https://coop.gopalganj.gov.bd" }, 
    ]
  },
  {
    name: "ধর্মীয় স্থান",
    items: [
{ name: "বায়তুল মুকাররম জাতীয় মসজিদ", web: "https://www.youtube.com/watch?v=AeVKpZeeRjE" },

    { name: "তারা মসজিদ (আরমানিটোলা, ঢাকা)", web: "https://www.youtube.com/watch?v=z39zr1oFi3Q" },

    { name: "লালবাগ শাহী মসজিদ", web: "https://www.youtube.com/watch?v=O2n8Ihvm2Us&t=7s" },

    { name: "শাহবাগ কেন্দ্রীয় মসজিদ", web: "https://www.youtube.com/watch?v=l4gHv-gYsbg&t=7s" },

    // ───── Temples (Hindu Heritage) ─────
    { name: "ঢাকেশ্বরী জাতীয় মন্দির", web: "https://www.youtube.com/watch?v=iRZ8ME7bHFw" },

    { name: "রামকৃষ্ণ মিশন মন্দির (ঢাকা)", web: "https://www.youtube.com/watch?v=41x2PF8hxE4" },

    { name: "জয় কালী মন্দির (পুরান ঢাকা)", web: "https://www.youtube.com/watch?v=iFPoosbaU1I" },

    // ───── Churches ─────
    { name: "আর্মেনিয়ান চার্চ (ঢাকা)", web: "https://www.youtube.com/watch?v=NQLbJXbrlrI" },

    { name: "সেন্ট মেরি'স ক্যাথেড্রাল (ঢাকা)", web: "https://www.youtube.com/watch?v=qldi3YQ0vOQ" },

    { name: "হলি রোজারি চার্চ (ঢাকা)", web: "https://www.youtube.com/watch?v=5ovtzQ08yvo" },

    // ───── Buddhist Temples ─────
    { name: "ধর্মরাজিক বৌদ্ধ মন্দির (ঢাকা)", web: "https://www.youtube.com/watch?v=ZAcFKhNmgeU" },

    { name: "কমলাপুর বৌদ্ধ মন্দির", web: "https://www.youtube.com/watch?v=AjrYs7MffMU" },

    // ───── Heritage Religious Sites ─────
    { name: "বড় কাটরা মসজিদ", web: "https://www.youtube.com/watch?v=--PGKzLhFPY" },

    { name: "ছোট কাটরা মসজিদ", web: "https://www.youtube.com/watch?v=ZFyzG7pZtGU" },

    { name: "সাতগম্বুজ মসজিদ (লালবাগ)", web: "https://www.youtube.com/watch?v=Ll1Q1CGfqyE" },
    ]
  },
  {
    name: "জনপ্রতিনিধি",
    items: [
      
      { name: "জাতীয় সংসদ (বাংলাদেশ)", web: "https://www.parliament.gov.bd" },

    // ───── City Corporations (Dhaka Division) ─────
    { name: "ঢাকা উত্তর সিটি কর্পোরেশন (DNCC)", web: "https://dncc.gov.bd/" },

    { name: "ঢাকা দক্ষিণ সিটি কর্পোরেশন (DSCC)", web: "https://dscc.gov.bd/" },

    { name: "গাজীপুর সিটি কর্পোরেশন (GCC)", web: "https://gcc.gov.bd/" },

    { name: "নারায়ণগঞ্জ সিটি কর্পোরেশন (NCC)", web: "https://ncc.gov.bd/" },

    // ───── District Administration (Dhaka Division) ─────
    { name: "ঢাকা জেলা প্রশাসন", web: "https://www.dhaka.gov.bd" },

    { name: "নারায়ণগঞ্জ জেলা প্রশাসন", web: "https://www.narayanganj.gov.bd" },

    { name: "গাজীপুর জেলা প্রশাসন", web: "https://www.gazipur.gov.bd" },

    { name: "নরসিংদী জেলা প্রশাসন", web: "https://www.narsingdi.gov.bd" },

    { name: "টাঙ্গাইল জেলা প্রশাসন", web: "https://www.tangail.gov.bd" },

    { name: "মুন্সিগঞ্জ জেলা প্রশাসন", web: "https://www.munshiganj.gov.bd" },

    { name: "মানিকগঞ্জ জেলা প্রশাসন", web: "https://www.manikganj.gov.bd" },

    { name: "কিশোরগঞ্জ জেলা প্রশাসন", web: "https://www.kishoreganj.gov.bd" },

    { name: "ফরিদপুর জেলা প্রশাসন", web: "https://www.faridpur.gov.bd" },

    { name: "গোপালগঞ্জ জেলা প্রশাসন", web: "https://www.gopalganj.gov.bd" },

    { name: "মাদারীপুর জেলা প্রশাসন", web: "https://www.madaripur.gov.bd" },

    { name: "রাজবাড়ী জেলা প্রশাসন", web: "https://www.rajbari.gov.bd" },

    { name: "শরীয়তপুর জেলা প্রশাসন", web: "https://www.shariatpur.gov.bd" },
      { name: "জাতীয় সংসদ (বাংলাদেশ)", web: "https://www.parliament.gov.bd" },
     { name: "ঢাকা-১ (দোহার–নবাবগঞ্জ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-২ (কামরাঙ্গীরচর–হাজারীবাগ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৩ (কেরানীগঞ্জ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৪ (যাত্রাবাড়ী–শ্যামপুর)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৫ (গুলিস্তান–সবুজবাগ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৬ (মতিঝিল–কমলাপুর)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৭ (ধানমন্ডি–লালবাগ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৮ (রমনা–তেজগাঁও)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-৯ (মুগদা–সবুজবাগ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১০ (ধানমন্ডি–মোহাম্মদপুর)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১১ (মিরপুর)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১২ (পল্লবী–কালশী)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১৩ (উত্তরা–বাড্ডা অংশ)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১৪ (মিরপুর–শাহআলী)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১৫ (উত্তরা–বিমানবন্দর)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১৬ (উত্তরখান–দক্ষিণখান)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১৭ (গুলশান–বনানী)", web: "https://www.parliament.gov.bd" },
    { name: "ঢাকা-১৮ (উত্তরা–বাড্ডা)", web: "https://www.parliament.gov.bd" },

    // ───── Surrounding Districts ─────
    { name: "নারায়ণগঞ্জ-১", web: "https://www.parliament.gov.bd" },
    { name: "নারায়ণগঞ্জ-২", web: "https://www.parliament.gov.bd" },
    { name: "নারায়ণগঞ্জ-৩", web: "https://www.parliament.gov.bd" },

    { name: "গাজীপুর-১", web: "https://www.parliament.gov.bd" },
    { name: "গাজীপুর-২", web: "https://www.parliament.gov.bd" },
    { name: "গাজীপুর-৩", web: "https://www.parliament.gov.bd" },
    { name: "গাজীপুর-৪", web: "https://www.parliament.gov.bd" },
    { name: "গাজীপুর-৫", web: "https://www.parliament.gov.bd" },

    { name: "নরসিংদী-১", web: "https://www.parliament.gov.bd" },
    { name: "নরসিংদী-২", web: "https://www.parliament.gov.bd" },
    { name: "নরসিংদী-৩", web: "https://www.parliament.gov.bd" },
    { name: "নরসিংদী-৪", web: "https://www.parliament.gov.bd" },
    { name: "নরসিংদী-৫", web: "https://www.parliament.gov.bd" },
    ]
  },
  {
    name: "উপজেলা চেয়ারম্যান",
    items: [
   { name: "সাভার উপজেলা পরিষদ", web: "https://savar.dhaka.gov.bd" },
    { name: "কেরানীগঞ্জ উপজেলা পরিষদ", web: "https://keraniganj.dhaka.gov.bd" },
    { name: "দোহার উপজেলা পরিষদ", web: "https://dohar.dhaka.gov.bd" },
    { name: "নবাবগঞ্জ উপজেলা পরিষদ", web: "https://nawabganj.dhaka.gov.bd" },

    // ───── Gazipur ─────
    { name: "গাজীপুর সদর উপজেলা পরিষদ", web: "https://gazipur.gov.bd" },
    { name: "কালীগঞ্জ উপজেলা পরিষদ", web: "https://kaliganj.gazipur.gov.bd" },
    { name: "কাপাসিয়া উপজেলা পরিষদ", web: "https://kapasia.gazipur.gov.bd" },
    { name: "শ্রীপুর উপজেলা পরিষদ", web: "https://sreepur.gazipur.gov.bd" },

    // ───── Narayanganj ─────
    { name: "নারায়ণগঞ্জ সদর উপজেলা পরিষদ", web: "https://narayanganj.gov.bd" },
    { name: "আড়াইহাজার উপজেলা পরিষদ", web: "https://araihazar.narayanganj.gov.bd" },
    { name: "রূপগঞ্জ উপজেলা পরিষদ", web: "https://rupganj.narayanganj.gov.bd" },
    { name: "সোনারগাঁও উপজেলা পরিষদ", web: "https://sonargaon.narayanganj.gov.bd" },

    // ───── Manikganj ─────
    { name: "মানিকগঞ্জ সদর উপজেলা পরিষদ", web: "https://manikganj.gov.bd" },
    { name: "সিঙ্গাইর উপজেলা পরিষদ", web: "https://singair.manikganj.gov.bd" },
    { name: "শিবালয় উপজেলা পরিষদ", web: "https://shibaloy.manikganj.gov.bd" },
    { name: "হরিরামপুর উপজেলা পরিষদ", web: "https://harirampur.manikganj.gov.bd" },
    { name: "ঘিওর উপজেলা পরিষদ", web: "https://ghior.manikganj.gov.bd" },
    { name: "দৌলতপুর উপজেলা পরিষদ", web: "https://daulatpur.manikganj.gov.bd" },

    // ───── Munshiganj ─────
    { name: "মুন্সিগঞ্জ সদর উপজেলা পরিষদ", web: "https://munshiganj.gov.bd" },
    { name: "শ্রীনগর উপজেলা পরিষদ", web: "https://sreenagar.munshiganj.gov.bd" },
    { name: "লৌহজং উপজেলা পরিষদ", web: "https://lauhajang.munshiganj.gov.bd" },
    { name: "টঙ্গিবাড়ী উপজেলা পরিষদ", web: "https://tongibari.munshiganj.gov.bd" },
    { name: "গজারিয়া উপজেলা পরিষদ", web: "https://gajaria.munshiganj.gov.bd" },
    { name: "সিরাজদিখান উপজেলা পরিষদ", web: "https://sirajdikhan.munshiganj.gov.bd" },

    // ───── Narsingdi ─────
    { name: "নরসিংদী সদর উপজেলা পরিষদ", web: "https://narsingdi.gov.bd" },
    { name: "পলাশ উপজেলা পরিষদ", web: "https://palash.narsingdi.gov.bd" },
    { name: "রায়পুরা উপজেলা পরিষদ", web: "https://raipura.narsingdi.gov.bd" },
    { name: "মনোহরদী উপজেলা পরিষদ", web: "https://monohardi.narsingdi.gov.bd" },
    { name: "বেলাব উপজেলা পরিষদ", web: "https://belabo.narsingdi.gov.bd" },
    { name: "শিবপুর উপজেলা পরিষদ", web: "https://shibpur.narsingdi.gov.bd" },

    // ───── Tangail ─────
    { name: "টাঙ্গাইল সদর উপজেলা পরিষদ", web: "https://tangail.gov.bd" },
    { name: "মির্জাপুর উপজেলা পরিষদ", web: "https://mirzapur.tangail.gov.bd" },
    { name: "সখিপুর উপজেলা পরিষদ", web: "https://sakhipur.tangail.gov.bd" },
    { name: "গোপালপুর উপজেলা পরিষদ", web: "https://gopalpur.tangail.gov.bd" },
    { name: "ভূঞাপুর উপজেলা পরিষদ", web: "https://bhuapur.tangail.gov.bd" },
    { name: "কালিহাতী উপজেলা পরিষদ", web: "https://kalihati.tangail.gov.bd" },
    { name: "মধুপুর উপজেলা পরিষদ", web: "https://madhupur.tangail.gov.bd" },
    { name: "দেলদুয়ার উপজেলা পরিষদ", web: "https://deldur.tangail.gov.bd" },

    // ───── Kishoreganj ─────
    { name: "কিশোরগঞ্জ সদর উপজেলা পরিষদ", web: "https://kishoreganj.gov.bd" },
    { name: "ভৈরব উপজেলা পরিষদ", web: "https://bhairab.kishoreganj.gov.bd" },
    { name: "কুলিয়ারচর উপজেলা পরিষদ", web: "https://kuliarchar.kishoreganj.gov.bd" },
    { name: "হোসেনপুর উপজেলা পরিষদ", web: "https://hosenpur.kishoreganj.gov.bd" },
    { name: "পাকুন্দিয়া উপজেলা পরিষদ", web: "https://pakundia.kishoreganj.gov.bd" },

    // ───── Faridpur ─────
    { name: "ফরিদপুর সদর উপজেলা পরিষদ", web: "https://faridpur.gov.bd" },
    { name: "ভাঙ্গা উপজেলা পরিষদ", web: "https://bhanga.faridpur.gov.bd" },
    { name: "নগরকান্দা উপজেলা পরিষদ", web: "https://nagarkanda.faridpur.gov.bd" },

    // ───── Gopalganj ─────
    { name: "গোপালগঞ্জ সদর উপজেলা পরিষদ", web: "https://gopalganj.gov.bd" },
    { name: "কোটালীপাড়া উপজেলা পরিষদ", web: "https://kotalipara.gopalganj.gov.bd" },
    { name: "টুঙ্গিপাড়া উপজেলা পরিষদ", web: "https://tungipara.gopalganj.gov.bd" },

    // ───── Madaripur ─────
    { name: "মাদারীপুর সদর উপজেলা পরিষদ", web: "https://madaripur.gov.bd" },
    { name: "শিবচর উপজেলা পরিষদ", web: "https://shibchar.madaripur.gov.bd" },
    { name: "কালকিনি উপজেলা পরিষদ", web: "https://kalkini.madaripur.gov.bd" },

    // ───── Rajbari ─────
    { name: "রাজবাড়ী সদর উপজেলা পরিষদ", web: "https://rajbari.gov.bd" },
    { name: "পাংশা উপজেলা পরিষদ", web: "https://panga.rajbari.gov.bd" },
    { name: "বালিয়াকান্দি উপজেলা পরিষদ", web: "https://baliakandi.rajbari.gov.bd" },

    // ───── Shariatpur ─────
    { name: "শরীয়তপুর সদর উপজেলা পরিষদ", web: "https://shariatpur.gov.bd" },
    { name: "নড়িয়া উপজেলা পরিষদ", web: "https://naria.shariatpur.gov.bd" },
    { name: "ডামুড্যা উপজেলা পরিষদ", web: "https://damudya.shariatpur.gov.bd" },
    ]
  },
];

const DhakaDivision = () => {
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
        <ItemPanel items={selectedSub.items} title={`ঢাকা বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default DhakaDivision;