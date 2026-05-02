import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#27ae60";
const ICON = "🏞️";

const subCategories = [
  {
    name: "সরকারি স্কুল (রংপুর)",
    items: [
      { name: "রংপুর জিলা স্কুল", web: "http://www.rangpurzillaschool.edu.bd/" },
      { name: "রংপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www-rangpurgghs-edu-bd.translate.goog/?_x_tr_sch=http&_x_tr_sl=bn&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc" },
      { name: "কারমাইকেল কলেজিয়েট স্কুল এন্ড কলেজ", web: "https://ccsc.edu.bd/" },
      { name: "রংপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/p/Jaldhaka-government-model-pilot-high-school-100082841936713/" },
      { name: "মিঠাপুকুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/pilotschoolandcollege/" },
    ]
  },
  {
    name: "সরকারি স্কুল (দিনাজপুর)",
    items: [
      { name: "দিনাজপুর জিলা স্কুল", web: "https://dinajpurzillaschool.edu.bd/" },
      { name: "দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.dgghs.edu.bd/" },
      { name: "বিরামপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/Pilot.High.School.Birampur/" },
      { name: "পার্বতীপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/people/Parbatipur-Pilot-Girls-School/100076364255448/#" },
    ]
  },
  {
    name: "সরকারি স্কুল (গাইবান্ধা)",
    items: [
      { name: "গাইবান্ধা সরকারি উচ্চ বিদ্যালয়", web: "https://ggbhs.edu.bd/" },
      { name: "গাইবান্ধা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://ggghs.edu.bd/" },
      { name: "সুন্দরগঞ্জ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/samgbhs1/" },
    ]
  },
  {
    name: "সরকারি স্কুল (কুড়িগ্রাম)",
    items: [
      { name: "কুড়িগ্রাম সরকারি উচ্চ বিদ্যালয়", web: "http://www.kurigramghs.edu.bd/" },
      { name: "কুড়িগ্রাম সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.facebook.com/kgghsk/?locale=bn_IN" },
      { name: "নাগেশ্বরী পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/dmacademybd/?locale=bn_IN" },
    ]
  },
  {
    name: "সরকারি স্কুল (লালমনিরহাট)",
    items: [
      { name: "লালমনিরহাট সরকারি উচ্চ বিদ্যালয়", web: "https://www.lgbhs.edu.bd/" },
      { name: "লালমনিরহাট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://www.lalmonirhatgghschool.edu.bd/" },
      { name: "পাটগ্রাম পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://pgmphs.school.gov.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (নীলফামারী)",
    items: [
      { name: "নীলফামারী সরকারি উচ্চ বিদ্যালয়", web: "https://www.nghs1882.edu.bd/" },
      { name: "নীলফামারী সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.ngovghs.edu.bd/" },
      { name: "সৈয়দপুর পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.saidpurphschool.edu.bd/" },
    ]
  },
  {
    name: "সরকারি স্কুল (পঞ্চগড়)",
    items: [
      { name: "পঞ্চগড় সরকারি উচ্চ বিদ্যালয়", web: "http://www.pgghs.edu.bd/" },
      { name: "পঞ্চগড় সরকারি বালিকা উচ্চ বিদ্যালয়", web: "http://www.pgghs.edu.bd/" },
      { name: "তেঁতুলিয়া পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/tgpmhs/" },
    ]
  },
  {
    name: "সরকারি স্কুল (ঠাকুরগাঁও)",
    items: [
      { name: "ঠাকুরগাঁও সরকারি উচ্চ বিদ্যালয়", web: "https://www.tgbhs.edu.bd/" },
      { name: "ঠাকুরগাঁও সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.tgghs.edu.bd/" },
      { name: "পীরগঞ্জ পাইলট সরকারি উচ্চ বিদ্যালয়", web: "https://www.facebook.com/pirganjpilothighschool/" },
    ]
  },
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "রংপুর ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ", web: "http://cpscr.edu.bd/" },
      { name: "দিনাজপুর মিশন স্কুল", web: "https://www.facebook.com/p/SL-Mission-School-100063984551326/" },
      { name: "রংপুর আদর্শ উচ্চ বিদ্যালয়", web: "https://www.ahsr.edu.bd/" },
      { name: "সেন্ট ফিলিপস স্কুল (দিনাজপুর)", web: "https://spscdnj.edu.bd/" },
      { name: "পুলিশ লাইনস স্কুল ও কলেজ (রংপুর)", web: "https://www.plscr.edu.bd/" },
    ]
  },
  {
    name: "সরকারি কলেজ",
    items: [
      { name: "কারমাইকেল কলেজ (রংপুর)", web: "https://carmichael.college.gov.bd/" },
  { name: "রংপুর সরকারি কলেজ", web: "https://rangpur.college.gov.bd" },
  { name: "দিনাজপুর সরকারি কলেজ", web: "https://dgc.edu.bd" },
  { name: "গাইবান্ধা সরকারি কলেজ", web: "https://ggc.edu.bd" },
  { name: "কুড়িগ্রাম সরকারি কলেজ", web: "https://kurigramgc.college.gov.bd" },
  { name: "লালমনিরহাট সরকারি কলেজ", web: "https://lgc.college.gov.bd" },
  { name: "নীলফামারী সরকারি কলেজ", web: "https://ngc.edu.bd" },
  { name: "পঞ্চগড় সরকারি কলেজ", web: "https://mrgovtcollegepanchagarh.org" },
  { name: "ঠাকুরগাঁও সরকারি কলেজ", web: "https://tgc.edu.bd" },
    ]
  },
  {
    name: "বেসরকারি কলেজ",
    items: [
      { name: "রংপুর ক্যান্টনমেন্ট কলেজ", web: "http://cpscr.edu.bd/" },
      { name: "দিনাজপুর সিটি কলেজ", web: "https://dinajpurgcc.edu.bd/" },
      { name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি কলেজ", web: "https://www.hstu.ac.bd/" },
      { name: "বলরামপুর আদর্শ মহাবিদ্যালয়", web: "https://www.bpac.edu.bd/index.html" },
    ]
  },
  {
    name: "মাদ্রাসা",
    items: [
      { name: "Al Faiyaz Alia Madrasah", web: "https://www.facebook.com/p/Al-Faiyaz-Alia-Madrasah-100068366043273/" },
      { name: "দিনাজপুর আলিয়া মাদ্রাসা", web: "https://www.facebook.com/NurjahanMadrasah1965/" },
      { name: "Mahimagonj Alia Kamil Madrasah", web: "https://www.facebook.com/mahimagonjaliakamilmadrasah/" },
      { name: "কুড়িগ্রাম আলিয়া মাদ্রাসা", web: "https://www.facebook.com/groups/725719411323512/" },
      { name: "পঞ্চগড় নূরুন আলা নূর কামিল মাদ্‌রাসা", web: "https://126124.ebmeb.gov.bd/2100/history-of-institution.html" },
    ]
  },
  {
    name: "সরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "বেগম রোকেয়া বিশ্ববিদ্যালয় (রংপুর)", web: "https://www.brur.ac.bd" },
      { name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (দিনাজপুর)", web: "https://www.hstu.ac.bd" },
      { name: "রংপুর মেডিকেল কলেজ", web: "https://rpmc.edu.bd/" },
      { name: "দিনাজপুর মেডিকেল কলেজ", web: "https://djmc.edu.bd/" },
    ]
  },
  {
    name: "বেসরকারি বিশ্ববিদ্যালয়",
    items: [
      { name: "প্রাইম ইউনিভার্সিটি (রংপুর ক্যাম্পাস)", web: "https://www.primeuniversity.edu.bd" },
      { name: "নর্দার্ন ইউনিভার্সিটি (রংপুর)", web: "https://nub.ac.bd/" },
      { name: "রংপুর ইউনিভার্সিটি", web: "https://www.ru.ac.bd" },
    ]
  },
  {
    name: "উপজেলা",
    items: [
      { name: "রংপুর সদর উপজেলা", web: "https://rangpur.gov.bd" },
      { name: "মিঠাপুকুর উপজেলা", web: "https://mithapukur.rangpur.gov.bd" },
      { name: "তারাগঞ্জ উপজেলা", web: "https://taragonj.rangpur.gov.bd/" },
      { name: "বদরগঞ্জ উপজেলা", web: "https://badargonj.rangpur.gov.bd/" },
      { name: "গঙ্গাচড়া উপজেলা", web: "https://gangachara.rangpur.gov.bd" },
      { name: "কাউনিয়া উপজেলা", web: "https://kaunia.rangpur.gov.bd" },
      { name: "পীরগঞ্জ উপজেলা (রংপুর)", web: "https://pirgonj.rangpur.gov.bd/" },
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
      { name: "কোতোয়ালি থানা (রংপুর)", web: "https://police.rangpursadar.rangpur.gov.bd/" },
      { name: "তাজহাট থানা", web: "https://www.rpmp.gov.bd/index.php/home/tajhat_thana" },
      { name: "হারাগাছ থানা", web: "https://rpmp.gov.bd/index.php/home/haragach_thana" },
      { name: "মাহিগঞ্জ থানা", web: "https://rpmp.gov.bd/index.php/home/mahigonj_thana" },
      { name: "কোতোয়ালি থানা (দিনাজপুর)", web: "https://police.dinajpursadar.dinajpur.gov.bd/" },
      { name: "কোতোয়ালি থানা (গাইবান্ধা)", web: "https://gaibandha.gov.bd/pages/static-pages/69771cd0c4774958d7c06af4" },
      { name: "কোতোয়ালি থানা (কুড়িগ্রাম)", web: "https://www.facebook.com/kotwali.police/" },
      { name: "কোতোয়ালি থানা (ঠাকুরগাঁও)", web: "https://police.thakurgaonsadar.thakurgaon.gov.bd/" },
    ]
  },
  {
    name: "ব্যাংক",
    items: [
      { name: "বাংলাদেশ ব্যাংক (রংপুর অফিস)", web: "https://bb.rangpur.gov.bd/" },
      { name: "সোনালী ব্যাংক (রংপুর)", web: "https://www.banksbd.org/sbl/rangpur-branch-7330.html" },
      { name: "জনতা ব্যাংক (রংপুর)", web: "https://www.banksbd.org/jbl/branches/rangpur.html" },
      { name: "অগ্রণী ব্যাংক (রংপুর)", web: "https://www.agranibank.org/index.php/home/my_branch/69" },
      { name: "রূপালী ব্যাংক (রংপুর)", web: "https://www.banksbd.org/rbl/branches/rangpur.html" },
      { name: "ডাচ-বাংলা ব্যাংক (রংপুর)", web: "https://www.banksbd.org/dutch-bangla-bank/rangpur-branch-1209.html" },
      { name: "ইসলামী ব্যাংক (রংপুর)", web: "https://islamibankbd.com/branch/rangpur-bus-terminal-sub-branch-rangpur" },
      { name: "ব্র্যাক ব্যাংক (রংপুর)", web: "https://www.banksbd.org/brac/rangpur-branch-802.html" },
      { name: "কৃষি ব্যাংক (রংপুর)", web: "https://www.krishibank.org.bd/branches-offices/online-branches/" },
      { name: "রাজশাহী কৃষি উন্নয়ন ব্যাংক (RAKUB - রংপুর)", web: "https://www.banksbd.org/krishi-unnayan-bank/rangpur-branch-8180.html" },
    ]
  },
  {
    name: "ভূমি অফিস",
    items: [
      { name: "রংপুর জেলা ভূমি অফিস", web: "https://aclrmrc.rangpur.gov.bd/" },
      { name: "দিনাজপুর জেলা ভূমি অফিস", web: "https://acl.dinajpursadar.dinajpur.gov.bd/" },
      { name: "গাইবান্ধা জেলা ভূমি অফিস", web: "https://acl.gaibandhasadar.gaibandha.gov.bd/" },
      { name: "কুড়িগ্রাম জেলা ভূমি অফিস", web: "https://acl.kurigramsadar.kurigram.gov.bd/" },
      { name: "লালমনিরহাট জেলা ভূমি অফিস", web: "https://acl.sadar.lalmonirhat.gov.bd/" },
      { name: "নীলফামারী জেলা ভূমি অফিস", web: "https://acl.nilphamarisadar.nilphamari.gov.bd/" },
      { name: "পঞ্চগড় জেলা ভূমি অফিস", web: "https://acl.panchagarhsadar.panchagarh.gov.bd/" },
      { name: "ঠাকুরগাঁও জেলা ভূমি অফিস", web: "https://acl.thakurgaonsadar.thakurgaon.gov.bd/" },
    ]
  },
  {
    name: "বাস সার্ভিস",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ (রংপুর রুট)", web: "https://www.hanif-enterprise.com/booking/bus/search?fromcity=dhaka&tocity=rangpur" },
      { name: "শ্যামলী পরিবহন (রংপুর রুট)", web: "https://www.shyamoliparibahan-bd.com/" },
      { name: "নাবিল পরিবহন", web: "https://www.nabilparibahan.com/" },
      { name: "বিআরটিসি (রংপুর)", web: "https://brtcdepot.rangpur.gov.bd/" },
      { name: "এস.আর. ট্রাভেলস", web: "https://visitplan.net/2025/06/27/sr-travels-bus-counter-number/" },
      { name: "আগমনী পরিবহন", web: "https://visitplan.net/2025/05/11/agomoni-express-counter-number/" },
    ]
  },
  {
    name: "ট্রেন সার্ভিস",
    items: [
      { name: "বাংলাদেশ রেলওয়ে (ই-টিকিট)", web: "https://railway.gov.bd/pages/internal-eservices/%E0%A6%B0%E0%A7%87%E0%A6%B2%E0%A6%93%E0%A7%9F%E0%A7%87-%E0%A6%87-%E0%A6%9F%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%9F-95990f-6919973fdbfbab28cefef833" },
      { name: "রংপুর রেলওয়ে স্টেশন", web: "https://www.facebook.com/rnp.station/" },
      { name: "দিনাজপুর রেলওয়ে স্টেশন", web: "https://www.facebook.com/p/%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%9C%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%B0%E0%A7%87%E0%A6%B2%E0%A6%93%E0%A7%9F%E0%A7%87-%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B6%E0%A6%A8-Dinajpur-Railway-Station-61552127006914/" },
      { name: "সৈয়দপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd/pages/static-pages/691997a9933eb65569ddd94a" },
      { name: "পার্বতীপুর রেলওয়ে জংশন", web: "https://www.facebook.com/groups/rcxpres/" },
    ]
  },
  {
    name: "সংবাদপত্র",
    items: [
      { name: "দৈনিক যুগের আলো (রংপুর)", web: "https://www.facebook.com/dailyjugeralo/?locale=bn_IN" },
      { name: "দৈনিক করতোয়া (দিনাজপুর)", web: "https://www.ekaratoa.com/" },
      { name: "দৈনিক উত্তরবঙ্গ সংবাদ", web: "https://uttarbangasambad.com/" },
      { name: "দৈনিক রংপুর", web: "https://www.facebook.com/dainikrangpur/" },
      { name: "প্রথম আলো (উত্তরাঞ্চল)", web: "https://www.prothomalo.com/roundtable/7vngxrli27" },
      { name: "দৈনিক তিস্তা সংবাদ", web: "https://www.facebook.com/groups/2705839046368623/" },
    ]
  },
  {
    name: "র‌্যাব ইন্সটিটিউট",
    items: [
      { name: "র‌্যাব-১৩ (রংপুর)", web: "https://www.facebook.com/Rangpur.rab/" },
      { name: "র‌্যাব-১৩ ক্যাম্প (দিনাজপুর)", web: "https://www.facebook.com/RABHQ/posts/%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AC-%E0%A7%A7%E0%A7%A9-%E0%A6%B8%E0%A6%BF%E0%A6%AA%E0%A6%BF%E0%A6%B8%E0%A6%BF-%E0%A7%A7-%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%9C%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AA-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A7%83%E0%A6%95-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A6%BE%E0%A6%A8-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%BE%E0%A6%B2%E0%A6%A8%E0%A6%BE-%E0%A6%95%E0%A6%B0%E0%A7%87-%E0%A7%A8%E0%A7%AA%E0%A7%AA-%E0%A6%AC%E0%A7%8B%E0%A6%A4%E0%A6%B2-%E0%A6%AB%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A6%B2/122123093745241618/" },
      { name: "র‌্যাব-১৩ ক্যাম্প (গাইবান্ধা)", web: "https://www.facebook.com/Rangpur.rab/posts/%E0%A6%97%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A6%BE%E0%A7%9F-%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AC%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%87%E0%A6%B7-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87-%E0%A6%AB%E0%A7%87%E0%A6%B8%E0%A6%AC%E0%A7%81%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87-%E0%A6%AA%E0%A6%A6%E0%A7%8D%E0%A6%AE%E0%A6%BE-%E0%A6%B8%E0%A7%87%E0%A6%A4%E0%A7%81-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%BE%E0%A6%A3%E0%A7%87-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%81%E0%A6%B7%E0%A7%87/2456197921280592/" },
    ]
  },
  {
    name: "বিজিবি অফিস",
    items: [
      { name: "বিজিবি রংপুর রিজিওন", web: "https://bgb.rangpurdiv.gov.bd/" },
      { name: "বিজিবি ৫১ ব্যাটালিয়ন (দিনাজপুর)", web: "https://www.facebook.com/reel/2087071608701829/" },
      { name: "বিজিবি ৪৫ ব্যাটালিয়ন (লালমনিরহাট)", web: "https://lalmonirhat.gov.bd/" },
      { name: "বিজিবি ৫২ ব্যাটালিয়ন (পঞ্চগড়)", web: "https://www.facebook.com/BorderGuardBangladeshOfficial/posts/%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%A8-%E0%A7%AB%E0%A7%A8-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF-%E0%A6%8F%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%87%E0%A6%B7-%E0%A6%9F%E0%A6%B9%E0%A6%B2%E0%A6%A6%E0%A6%B2-%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-/1320076773483741/" },
      { name: "বিজিবি ৫৬ ব্যাটালিয়ন (কুড়িগ্রাম)", web: "https://bgb.kurigram.gov.bd/" },
    ]
  },
  {
    name: "এনজিও অফিস",
    items: [
      { name: "ব্র্যাক (রংপুর বিভাগীয় অফিস)", web: "https://blc.brac.net/locations/Rangpur" },
      { name: "আশা (রংপুর আঞ্চলিক অফিস)", web: "https://rdo.rangpurdiv.gov.bd/" },
      { name: "গ্রামীণ ব্যাংক (রংপুর জোন)", web: "https://grameenbank.org.bd/about/officeshttps://www.facebook.com/p/%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A7%80%E0%A6%A3-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95-%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%9C%E0%A7%8B%E0%A6%A8-61575718123240/" },
      { name: "রংপুর উন্নয়ন সংস্থা (RDS)", web: "https://www.rds-bd.org/" },
      { name: "CARE Bangladesh (রংপুর)", web: "https://www.carebangladesh.org/" },
    ]
  },
  {
    name: "সরকারি হাসপাতাল",
    items: [
      { name: "রংপুর মেডিকেল কলেজ হাসপাতাল", web: "https://www.rmch.gov.bd" },
      { name: "দিনাজপুর মেডিকেল কলেজ হাসপাতাল", web: "https://djmch.dinajpur.gov.bd/" },
      { name: "গাইবান্ধা সদর হাসপাতাল", web: "https://health.gaibandhasadar.gaibandha.gov.bd/" },
      { name: "কুড়িগ্রাম সদর হাসপাতাল", web: "https://hospital.kurigram.gov.bd/" },
      { name: "লালমনিরহাট সদর হাসপাতাল", web: "https://hospital.lalmonirhat.gov.bd/" },
      { name: "নীলফামারী সদর হাসপাতাল", web: "https://hospital.nilphamari.gov.bd/" },
      { name: "পঞ্চগড় সদর হাসপাতাল", web: "https://hospital.panchagarh.gov.bd/" },
      { name: "ঠাকুরগাঁও সদর হাসপাতাল", web: "https://hospital.thakurgaon.gov.bd/" },
      { name: "সৈয়দপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", web: "https://health.syedpur.nilphamari.gov.bd/" },
    ]
  },
  {
    name: "বেসরকারি হাসপাতাল",
    items: [
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (রংপুর)", web: "https://www.facebook.com/p/Popular-Diagnostic-Centre-Ltd-Rangpur-100092193315871/" },
      { name: "ইবনে সিনা হাসপাতাল (রংপুর)", web: "https://www.ibnsinatrust.com/view_departmentwiseDoctor.php?id=250" },
      { name: "শেফা হাসপাতাল (রংপুর)", web: "https://alshifa.archdx.com/" },
      { name: "মডার্ন ক্লিনিক (দিনাজপুর)", web: "https://www.facebook.com/100095222464358/posts/289009174283163/" },
      { name: "রংপুর ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://rangpursadar.rangpur.gov.bd/pages/static-pages/69772423c4774958d7c09afb" },
    ]
  },
  {
    name: "পোস্ট অফিস",
    items: [
      { name: "রংপুর জিপিও", web: "https://post.rangpur.gov.bd/" },
      { name: "দিনাজপুর জিপিও", web: "https://dpost.dinajpur.gov.bd/" },
      { name: "গাইবান্ধা জিপিও", web: "https://pio.gaibandhasadar.gaibandha.gov.bd/" },
      { name: "কুড়িগ্রাম জিপিও", web: "https://kurigram.gov.bd/" },
      { name: "লালমনিরহাট জিপিও", web: "https://pio.sadar.lalmonirhat.gov.bd/" },
      { name: "নীলফামারী জিপিও", web: "https://pio.nilphamarisadar.nilphamari.gov.bd/" },
      { name: "পঞ্চগড় জিপিও", web: "https://bdpost.gov.bd/" },
      { name: "ঠাকুরগাঁও জিপিও", web: "https://fpo.thakurgaon.gov.bd/" },
    ]
  },
  {
    name: "বিদ্যুৎ অফিস",
    items: [
      { name: "উত্তর-পশ্চিম জোন পাওয়ার ডিস্ট্রিবিউশন (NWZPDC)", web: "https://wzpdcl.org.bd/https://www.nwpgcl.gov.bd" },
      { name: "রংপুর পল্লী বিদ্যুৎ সমিতি", web: "https://pbs1.rangpur.gov.bd/" },
      { name: "দিনাজপুর পল্লী বিদ্যুৎ সমিতি", web: "https://pbs1.dinajpur.gov.bd/" },
      { name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (BPDB - রংপুর)", web: "https://pdb.rangpurdiv.gov.bd/" },
    ]
  },
  {
    name: "ফায়ার সার্ভিস",
    items: [
      { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স (রংপুর)", web: "https://fireservice.rangpur.gov.bd/" },
      { name: "দিনাজপুর ফায়ার স্টেশন", web: "https://fireservice.dinajpur.gov.bd/" },
      { name: "গাইবান্ধা ফায়ার স্টেশন", web: "https://fireservice.gaibandha.gov.bd/" },
      { name: "কুড়িগ্রাম ফায়ার স্টেশন", web: "https://fireservice.kurigram.gov.bd/" },
      { name: "লালমনিরহাট ফায়ার স্টেশন", web: "https://fireservice.lalmonirhat.gov.bd/" },
      { name: "সৈয়দপুর ফায়ার স্টেশন", web: "https://fireservice.syedpur.nilphamari.gov.bd/" },
    ]
  },
  {
    name: "আদালত",
    items: [
      { name: "রংপুর বিভাগীয় দায়রা জজ কোর্ট", web: "https://rangpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "রংপুর জেলা জজ কোর্ট", web: "https://rangpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "দিনাজপুর জজ কোর্ট", web: "https://dinajpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "গাইবান্ধা জজ কোর্ট", web: "https://gaibandha.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "কুড়িগ্রাম জজ কোর্ট", web: "https://kurigram.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "লালমনিরহাট জজ কোর্ট", web: "https://lalmonirhat.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court-stuff" },
      { name: "নীলফামারী জজ কোর্ট", web: "https://nilphamari.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "পঞ্চগড় জজ কোর্ট", web: "https://panchagarh.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
      { name: "ঠাকুরগাঁও জজ কোর্ট", web: "https://thakurgaon.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" },
    ]
  },
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "সৈয়দপুর বিমানবন্দর", web: "http://caab.gov.bd/citizen/SAIDPUR.pdf" },
      { name: "বিমান বাংলাদেশ এয়ারলাইন্স", web: "https://biman.gov.bd/" },
      { name: "সিভিল এভিয়েশন অথরিটি (CAAB)", web: "http://caab.gov.bd/" },
    ]
  },
  {
    name: "পোর্ট",
    items: [
      { name: "চিলমারী নদীবন্দর (কুড়িগ্রাম)", web: "https://kurigram.gov.bd/pages/tourist-spot/69770075c4774958d7bd5677" },
      { name: "বিআইডব্লিউটিএ (রংপুর অফিস)", web: "https://brta.rangpur.gov.bd/" },
      { name: "গাইবান্ধা নৌ-ঘাট", web: "https://vromonguide.com/place/balashi-ghat-gaibandha" },
    ]
  },
  {
    name: "ট্যুরিস্ট স্পট",
    items: [
      { name: "তাজহাট জমিদার বাড়ি (রংপুর)", web: "https://www.youtube.com/watch?v=gDQHctjZlaU" },
      { name: "কান্তজিউ মন্দির (দিনাজপুর)", web: "https://www.youtube.com/watch?v=r766p4totUw" },
      { name: "রামসাগর জাতীয় উদ্যান (দিনাজপুর)", web: "https://www.youtube.com/watch?v=bPHmcyZUX9E" },
      { name: "নীলসাগর (নীলফামারী)", web: "https://www.youtube.com/watch?v=tcuGG87kQHQ" },
      { name: "তিস্তা ব্যারেজ (লালমনিরহাট)", web: "https://www.youtube.com/watch?v=8cB2tGBJKUw" },
      { name: "পিকনিক স্পট বড়দরগাহ (দিনাজপুর)", web: "https://www.youtube.com/watch?v=z2MqzT3bJk0" },
      { name: "ভিতরগড় দুর্গ (পঞ্চগড়)", web: "https://www.youtube.com/watch?v=9OMiQGJKrfo" },
      { name: "বাংলাবান্ধা জিরো পয়েন্ট (পঞ্চগড়)", web: "https://www.youtube.com/watch?v=UhNQyCK2yzo" },
      { name: "রংপুর চিড়িয়াখানা ও শিশু পার্ক", web: "https://www.youtube.com/watch?v=od609EK6Aos" },
      { name: "মহারাজার দিঘি (ঠাকুরগাঁও)", web: "https://www.youtube.com/watch?v=jlWOCdfPVc4" },
    ]
  },
  {
    name: "অ্যাম্বুলেন্স সার্ভিস",
    items: [
      { name: "জাতীয় হেলথ হেল্পলাইন - ১৬০০০", web: "http://dghs.portal.gov.bd/pages/news/6922dc3e933eb65569e0f3c2" },
      { name: "ডিএমপি অ্যাম্বুলেন্স - ৯৯৯", web: "https://dmpnews.org/%E0%A6%9C%E0%A6%B0%E0%A7%81%E0%A6%B0%E0%A7%80-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%8B%E0%A6%9C%E0%A6%A8%E0%A7%87-%E0%A6%AE%E0%A6%A8%E0%A7%87-%E0%A6%B0%E0%A6%BE%E0%A6%96%E0%A7%81%E0%A6%A8/" },
      { name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স (রংপুর)", web: "https://www.facebook.com/BDRCS.rangpur/" },
      { name: "রংপুর মেডিকেল কলেজ হাসপাতাল অ্যাম্বুলেন্স", web: "https://www.facebook.com/100057055555643/posts/-%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%AE%E0%A7%87%E0%A6%A1%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B2-%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C-%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%B2-%E0%A6%9C%E0%A6%B0%E0%A7%81%E0%A6%B0%E0%A7%80-%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%97-0521-63063-%E0%A6%AE%E0%A7%87%E0%A6%A1%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B2-%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%9A%E0%A7%87%E0%A6%9E%E0%A7%8D%E0%A6%9C-0521-63097/1119706219941219/" },
    ]
  },
  {
    name: "ক্লিনিক",
    items: [
      { name: "পপুলার ডায়াগনস্টিক (রংপুর)", web: "https://www.populardiagnostic.com" },
      { name: "ইবনে সিনা ডায়াগনস্টিক (রংপুর)", web: "https://www.ibnsinatrust.com/view_departmentwiseDoctor.php?id=250" },
      { name: "মেডিকেল সেন্টার হাসপাতাল (দিনাজপুর)", web: "https://djmch.dinajpur.gov.bd/" },
      { name: "আল-মানার হাসপাতাল (রংপুর)", web: "https://almanarhospital.com/" },
    ]
  },
  {
    name: "ভেটেরিনারি সার্ভিস",
    items: [
      { name: "প্রাণিসম্পদ অধিদপ্তর (রংপুর বিভাগীয় অফিস)", web: "https://dls.rangpur.gov.bd/" },
      { name: "রংপুর জেলা প্রাণিসম্পদ অফিস", web: "https://dls.rangpur.gov.bd/" },
      { name: "দিনাজপুর জেলা প্রাণিসম্পদ অফিস", web: "https://dls.dinajpur.gov.bd/" },
      { name: "কেন্দ্রীয় গো-প্রজনন ও দুগ্ধ খামার (সৈয়দপুর)", web: "https://ccbs.gov.bd/pages/static-pages/6922de99933eb65569e1bdfa" },
    ]
  },
  {
    name: "পানি সরবরাহ",
    items: [
      { name: "রংপুর সিটি কর্পোরেশন (পানি বিভাগ)", web: "https://rpcc.gov.bd/pages/static-pages/6922de4f933eb65569e19c1f" },
      { name: "রংপুর পৌরসভা পানি সরবরাহ", web: "https://rpcc.gov.bd/pages/static-pages/6922de4f933eb65569e19c1f" },
      { name: "দিনাজপুর পৌরসভা পানি সরবরাহ", web: "https://dinajpursadar.dinajpur.gov.bd/pages/static-pages/6977536ec4774958d7c1c214" },
      { name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর (DPHE - রংপুর)", web: "https://dphe.rangpur.gov.bd/" },
    ]
  },
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "পেট্রোবাংলা", web: "https://petrobangla.org.bd/" },
      { name: "বাংলাদেশ গ্যাস ফিল্ডস কোম্পানি (BGFCL)", web: "https://bgfcl.portal.gov.bd/" },
      { name: "এলপিজি অপারেটর অ্যাসোসিয়েশন (রংপুর)", web: "https://www.lpgautogasbd.com/" },
    ]
  },
  {
    name: "টেলিকম",
    items: [
      { name: "গ্রামীণফোন (রংপুর জোন)", web: "https://www.grameenphone.com" },
      { name: "বাংলালিংক (রংপুর)", web: "https://www.banglalink.net" },
      { name: "রবি আজিয়াটা (রংপুর)", web: "https://www.robi.com.bd" },
      { name: "টেলিটক বাংলাদেশ (রংপুর)", web: "https://www.teletalk.com.bd" },
      { name: "বিটিসিএল (রংপুর)", web: "https://btcl.rangpur.gov.bd/" },
    ]
  },
  {
    name: "বীমা",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (রংপুর)", web: "https://www.facebook.com/jbcrro/?locale=bn_IN" },
      { name: "সাধারণ বীমা কর্পোরেশন (রংপুর)", web: "https://sbc.gov.bd/" },
      { name: "ডেলটা লাইফ ইন্স্যুরেন্স (রংপুর)", web: "https://www.deltalife.org/ordinary-life" },
      { name: "মেটলাইফ বাংলাদেশ (রংপুর)", web: "https://www.metlife.com.bd/find-a-branch/" },
      { name: "পপুলার লাইফ ইন্স্যুরেন্স (রংপুর)", web: "https://www.popularlifeins.com/" },
    ]
  },
  {
    name: "সমবায়",
    items: [
      { name: "সমবায় অধিদপ্তর (রংপুর বিভাগীয় অফিস)", web: "https://coop.rangpurdiv.gov.bd/" },
      { name: "রংপুর কেন্দ্রীয় সমবায় ব্যাংক", web: "https://coop.rangpurdiv.gov.bd/" },
      { name: "দিনাজপুর কেন্দ্রীয় সমবায় ব্যাংক", web: "https://cooperative.dinajpur.gov.bd/" },
    ]
  },
  {
    name: "ধর্মীয় স্থান",
    items: [
      { name: "কান্তজিউ মন্দির (দিনাজপুর)", web: "https://www.youtube.com/watch?v=P1XMgausTV4" },
      { name: "রংপুর কেন্দ্রীয় জামে মসজিদ", web: "https://www.youtube.com/watch?v=eF8s8-lq91s" },
      { name: "শ্যামসুন্দর মন্দির (রংপুর)", web: "https://www.youtube.com/watch?v=5YAvHRy7pQ8" },
      { name: "চেহেলগাজী মসজিদ ও দরগাহ (দিনাজপুর)", web: "https://www.youtube.com/watch?v=hEqux9HiH2Ihttps://www.archaeology.gov.bd" },
      { name: "মির্জাপুর (দিনাজপুর)", web: "https://www.youtube.com/watch?v=JHkRg5PoEOwhttps://www.bangladeshtourism.gov.bd" },
      { name: "ঠাকুরগাঁও রাজা টংকনাথের মন্দির", web: "https://www.youtube.com/watch?v=cOq-5pamZR8" },
    ]
  },
  {
    name: "জনপ্রতিনিধি",
    items: [
      { name: "রংপুর সিটি কর্পোরেশন (RCC)", web: "https://rpcc.gov.bd/" },
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
      { name: "পীরগঞ্জ উপজেলা পরিষদ (রংপুর)", web: "https://pirgonj.rangpur.gov.bd/" },
      { name: "গঙ্গাচড়া উপজেলা পরিষদ", web: "https://gangachara.rangpur.gov.bd" },
      { name: "দিনাজপুর সদর উপজেলা পরিষদ", web: "https://dinajpur.gov.bd" },
      { name: "গাইবান্ধা সদর উপজেলা পরিষদ", web: "https://gaibandha.gov.bd" },
      { name: "কুড়িগ্রাম সদর উপজেলা পরিষদ", web: "https://kurigram.gov.bd" },
      { name: "লালমনিরহাট সদর উপজেলা পরিষদ", web: "https://lalmonirhat.gov.bd" },
      { name: "নীলফামারী সদর উপজেলা পরিষদ", web: "https://nilphamari.gov.bd" },
      { name: "পঞ্চগড় সদর উপজেলা পরিষদ", web: "https://panchagarh.gov.bd" },
      { name: "ঠাকুরগাঁও সদর উপজেলা পরিষদ", web: "https://thakurgaon.gov.bd" },
      { name: "সৈয়দপুর উপজেলা পরিষদ", web: "https://syedpur.nilphamari.gov.bd/" },
    ]
  },
];

const RangpurDivision = () => {
  const [selectedSub, setSelectedSub] = useState(subCategories[0]);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
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