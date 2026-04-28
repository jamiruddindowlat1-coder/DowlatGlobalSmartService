import React, { useState } from 'react';

const jobCategories = [
  {
    category: 'সরকারি চাকরি পোর্টাল',
    enCategory: 'Govt Job Portals',
    icon: '🏛️',
    color: '#1565c0',
    jobs: [
      { name: 'বাংলাদেশ সরকারি চাকরির ওয়েবসাইট', en: 'Bangladesh Govt Jobs', url: 'https://jobsgovbd.info/', desc: 'সব সরকারি চাকরির বিজ্ঞপ্তি' },
      { name: 'সরকারি কর্ম কমিশন (BPSC)', en: 'BPSC Official Site', url: 'https://bpsc.gov.bd', desc: 'BCS ও ক্যাডার নিয়োগ' },
      { name: 'জনপ্রশাসন মন্ত্রণালয়', en: 'Ministry of Public Admin', url: 'https://mopa.gov.bd', desc: 'সরকারি কর্মকর্তা নিয়োগ' },
      { name: 'সরকারি চাকরির তথ্য বাতায়ন', en: 'Govt Job Portal', url: 'https://bangladesh.gov.bd/pages/job-tender-announcements', desc: 'সকল সরকারি নিয়োগ বিজ্ঞপ্তি' },
    ]
  },
  {
    category: 'BCS ও ক্যাডার',
    enCategory: 'BCS & Cadre',
    icon: '🎖️',
    color: '#6a1b9a',
    jobs: [
      { name: 'BCS প্রস্তুতি পোর্টাল', en: 'BCS Preparation Portal', url: 'https://bpsc.gov.bd', desc: 'BCS পরীক্ষার সার্কুলার ও সিলেবাস' },
      { name: 'BCS প্রিলিমিনারি সিলেবাস', en: 'BCS Preliminary Syllabus', url: 'https://bpsc.gov.bd/site/page/syllabus', desc: '৪৬তম BCS প্রিলিমিনারি সিলেবাস' },
      { name: 'PSC Circular', en: 'PSC Job Circular', url: 'https://bpsc.gov.bd', desc: 'BPSC সার্কুলার ও নোটিশ' },
      { name: 'BCS ক্যাডার তালিকা', en: 'BCS Cadre List', url: 'https://bpsc.gov.bd', desc: '২৮টি ক্যাডার সার্ভিসের তথ্য' },
    ]
  },
  {
    category: 'ব্যাংকিং চাকরি',
    enCategory: 'Banking Jobs',
    icon: '🏦',
    color: '#1b5e20',
    jobs: [
      { name: 'বাংলাদেশ ব্যাংক নিয়োগ', en: 'Bangladesh Bank Recruitment', url: 'https://erecruitment.bb.org.bd', desc: 'কেন্দ্রীয় ব্যাংক নিয়োগ' },
      { name: 'সোনালী ব্যাংক নিয়োগ', en: 'Sonali Bank Jobs', url: 'https://sonalibank.com.bd', desc: 'সোনালী ব্যাংক লিমিটেড' },
      { name: 'অগ্রণী ব্যাংক নিয়োগ', en: 'Agrani Bank Jobs', url: 'https://www.agranibank.org/index.php/home/career', desc: 'অগ্রণী ব্যাংক লিমিটেড' },
      { name: 'জনতা ব্যাংক নিয়োগ', en: 'Janata Bank Jobs', url: 'https://jb.com.bd', desc: 'জনতা ব্যাংক লিমিটেড' },
      { name: 'রূপালী ব্যাংক নিয়োগ', en: 'Rupali Bank Jobs', url: 'https://rupalibank.com.bd/notice_jquery.php?type=20', desc: 'রূপালী ব্যাংক লিমিটেড' },
      { name: 'BDBL নিয়োগ', en: 'BDBL Jobs', url: 'https://bdbl.com.bd', desc: 'বাংলাদেশ ডেভেলপমেন্ট ব্যাংক' },
      { name: 'BD JOBS', en: 'BDBL Jobs', url: 'https://bdjobs.com/h/', desc: '' },
      { name: 'BD GOVT Info', en: 'BDBL Jobs', url: 'https://bdgovt.info/', desc: 'JOBS' },
      { name: 'BD JOBS PLAN', en: 'BDBL Jobs', url: 'https://www.bdjobsplan.com/', desc: 'JOBS' },
      { name: 'SHOMVOB', en: 'BDBL Jobs', url: '', desc: 'https://shomvob.com/' },
      { name: 'BD JOBS', en: 'Bdjobs', url: 'https://bdjobs.com/', desc: 'Largest job portal in Bangladesh' },
      { name: 'Chakri.com', en: 'Chakri Jobs', url: 'https://www.chakri.com/', desc: 'Popular job site' },
      { name: 'Chakrir Khobor', en: 'ChakrirKhobor', url: 'https://chakrirkhobor.net/', desc: 'Govt job circular' },
      { name: 'All Jobs BD', en: 'AllJobsBD', url: 'https://alljobsbd.com/', desc: 'Govt + Private jobs' },
      { name: 'Jobs Test BD', en: 'JobsTestBD', url: 'https://jobstestbd.com/', desc: 'Exam & job updates' },
      { name: 'BD Career', en: 'BDCareer', url: 'https://bdcareer.org/', desc: 'Job circular & result' },
      { name: 'BD Govt Job Circular', en: 'Govt Jobs BD', url: 'https://bdgovtjob.net/', desc: 'Govt job news' },
      { name: 'Chakri Bakri', en: 'ChakriBakri', url: 'https://chakribakri.com/', desc: 'Job circular site' },
      { name: 'Chakri News', en: 'ChakriNews', url: 'https://chakrirkhobor.com.bd/', desc: 'Latest job updates' },
      { name: 'CareerJet BD', en: 'CareerJet', url: 'https://www.careerjet.com.bd/', desc: 'International job aggregator' },
      { name: 'Indeed BD', en: 'Indeed Bangladesh', url: 'https://www.indeed.com/q-dhaka-bangladesh-jobs.html?vjk=e06a41de951cc795', desc: 'Global job platform' },
      { name: 'LinkedIn Jobs', en: 'LinkedIn', url: 'https://www.linkedin.com/jobs/', desc: 'Professional jobs platform' },
      { name: 'BPATC Jobs', en: 'BPATC', url: 'https://bpatc.teletalk.com.bd/', desc: 'Govt training & jobs' },
      { name: 'Bangladesh Bank Jobs', en: 'BB Jobs', url: 'https://www.facebook.com/erecruitment.bb.org.bd/', desc: 'Bank job circular' },
      { name: 'Public Service Commission', en: 'PSC', url: 'https://bpsc.gov.bd/', desc: 'BCS & govt jobs' },
      { name: 'Teletalk Apply', en: 'Teletalk Jobs', url: 'http://alljobs.teletalk.com.bd/', desc: 'Govt job application' },
      { name: 'Glassdoor', en: 'Glassdoor', url: 'https://www.glassdoor.com/', desc: 'Salary & company review' },
      { name: 'Remote OK', en: 'RemoteOK', url: 'https://remoteok.com/', desc: 'Remote jobs' },
      { name: 'Upwork', en: 'Upwork', url: 'https://www.upwork.com/', desc: 'Freelancing platform' },
      { name: 'Fiverr', en: 'Fiverr', url: 'https://www.fiverr.com/', desc: 'Freelance marketplace' },
    ]
  },
  {
    category: 'শিক্ষা প্রতিষ্ঠান নিয়োগ',
    enCategory: 'Educational Jobs',
    icon: '📚',
    color: '#e65100',
    jobs: [
      { name: 'বেসরকারি শিক্ষক নিবন্ধন (NTRCA)', en: 'NTRCA - Teacher Registration', url: 'https://ntrca.gov.bd', desc: 'শিক্ষক নিবন্ধন ও নিয়োগ' },
      { name: 'প্রাথমিক শিক্ষক নিয়োগ', en: 'Primary Teacher Recruitment', url: 'https://dpe.gov.bd', desc: 'প্রাথমিক বিদ্যালয় শিক্ষক নিয়োগ' },
      { name: 'বিশ্ববিদ্যালয় নিয়োগ (UGC)', en: 'UGC University Jobs', url: 'https://ugc.gov.bd', desc: 'পাবলিক বিশ্ববিদ্যালয়ের নিয়োগ' },
      { name: 'মাদ্রাসা শিক্ষক নিয়োগ', en: 'Madrasah Teacher Jobs', url: 'https://bmeb.gov.bd', desc: 'মাদ্রাসা শিক্ষা বোর্ড নিয়োগ' },
    ]
  },
  {
    category: 'প্রতিরক্ষা ও আইনশৃঙ্খলা',
    enCategory: 'Defense & Law Enforcement',
    icon: '⚔️',
    color: '#b71c1c',
    jobs: [
      { name: 'বাংলাদেশ সেনাবাহিনী', en: 'Bangladesh Army', url: 'https://www.army.mil.bd', desc: 'সেনাবাহিনীতে ভর্তি তথ্য' },
      { name: 'বাংলাদেশ নৌবাহিনী', en: 'Bangladesh Navy', url: 'https://www.navy.mil.bd/', desc: 'নৌবাহিনী নিয়োগ' },
      { name: 'বাংলাদেশ বিমানবাহিনী', en: 'Bangladesh Air Force', url: 'https://baf.mil.bd', desc: 'বিমানবাহিনী নিয়োগ' },
      { name: 'বাংলাদেশ পুলিশ নিয়োগ', en: 'Bangladesh Police', url: 'https://bdgovtnotice.com/police-job-circular/', desc: 'পুলিশ কনস্টেবল ও SI নিয়োগ' },
      { name: 'র‍্যাব (RAB) নিয়োগ', en: 'RAB Recruitment', url: 'র‍্যাব (RAB) নিয়োগ', desc: 'র‍্যাপিড অ্যাকশন ব্যাটালিয়ন' },
      { name: 'বর্ডার গার্ড বাংলাদেশ (BGB)', en: 'BGB Recruitment', url: 'https://bgb.gov.bd', desc: 'সীমান্ত রক্ষী বাহিনী' },
    ]
  },
  {
    category: 'প্রবাসী কর্মসংস্থান',
    enCategory: 'Overseas Employment',
    icon: '✈️',
    color: '#00695c',
    jobs: [
      { name: 'BMET (প্রবাসী কল্যাণ)', en: 'Bureau of Manpower (BMET)', url: 'https://bmet.gov.bd', desc: 'বিদেশে কর্মসংস্থানের সুযোগ' },
      { name: 'BOESL নিয়োগ', en: 'BOESL Jobs', url: 'https://boesl.gov.bd', desc: 'সরকারি বিদেশে কর্মী প্রেরণ' },
      { name: 'প্রবাসী কল্যাণ ব্যাংক', en: 'Probashi Kallyan Bank', url: 'https://pkb.gov.bd', desc: 'প্রবাসী লোন ও সেবা' },
      { name: 'বৈদেশিক কর্মসংস্থান তথ্য', en: 'Foreign Employment Info', url: 'https://probashi.gov.bd', desc: 'বিদেশে চাকরির সুযোগ ও তথ্য' },
    ]
  },
  {
    category: 'বেসরকারি চাকরি পোর্টাল',
    enCategory: 'Private Job Portals',
    icon: '💼',
    color: '#f57f17',
    jobs: [
      { name: 'BDjobs.com', en: 'BDjobs.com', url: 'https://bdjobs.com', desc: 'বাংলাদেশের সেরা চাকরির ওয়েবসাইট' },
      { name: 'Chakri.com', en: 'Chakri.com', url: 'https://www.chakrir.com/', desc: 'চাকরি খোঁজার পোর্টাল' },
      { name: 'Prothom Alo Jobs', en: 'Prothom Alo Jobs', url: 'https://www.prothomalo.com/chakri', desc: 'প্রথম আলো চাকরির বিজ্ঞাপন' },
      { name: 'Shajgoj Career', en: 'Shajgoj Career', url: 'https://www.shajgoj.com/career/', desc: 'অনলাইন জব পোর্টাল' },
      { name: 'LinkedIn Bangladesh', en: 'LinkedIn Bangladesh', url: 'https://linkedin.com', desc: 'পেশাদার নেটওয়ার্কিং ও চাকরি' },
      { name: 'Kormo Jobs', en: 'Kormo Jobs', url: 'https://kormo.org/', desc: 'গুগলের চাকরির অ্যাপ' },
    ]
  },
  {
    category: 'দক্ষতা উন্নয়ন ও প্রশিক্ষণ',
    enCategory: 'Skills & Training',
    icon: '🎓',
    color: '#37474f',
    jobs: [
      { name: 'কারিগরি শিক্ষা বোর্ড (BTEB)', en: 'Technical Education Board', url: 'https://bteb.gov.bd', desc: 'কারিগরি ডিপ্লোমা ও প্রশিক্ষণ' },
      { name: 'NSDA (জাতীয় দক্ষতা উন্নয়ন)', en: 'NSDA Skills Development', url: 'https://nsda.gov.bd', desc: 'জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ' },
      { name: 'Youth Development (DYD)', en: 'Dept. of Youth Development', url: 'https://dyd.gov.bd', desc: 'যুব উন্নয়ন অধিদপ্তর প্রশিক্ষণ' },
      { name: 'শিল্প মন্ত্রণালয় প্রশিক্ষণ', en: 'Industries Ministry Training', url: 'https://moind.gov.bd', desc: 'শিল্প খাতে দক্ষতা প্রশিক্ষণ' },
    ]
  },
 {
     category: 'Foreign Career Opportunity',
    enCategory: 'All Category Job Portals',
    icon: '🎓',
    color: '#37474f',
    jobs: [
      { name:'Fiverr', url:'https://www.fiverr.com/', desc:'ফ্রিল্যান্স মার্কেটপ্লেস', cat:'Freelance', color:'#1DBF73' },
  { name:'Upwork', url:'https://www.upwork.com/', desc:'ফ্রিল্যান্স কাজের প্ল্যাটফর্ম', cat:'Freelance', color:'#6FDA44' },
  { name:'Toptal', url:'https://www.toptal.com/', desc:'এলিট ফ্রিল্যান্সার নেটওয়ার্ক', cat:'Freelance', color:'#204ECF' },
  { name:'Freelancer', url:'https://www.freelancer.com/', desc:'ফ্রিল্যান্স প্রজেক্ট মার্কেটপ্লেস', cat:'Freelance', color:'#29B2FE' },
  { name:'99designs', url:'https://99designs.com/', desc:'ডিজাইন কন্টেস্ট প্ল্যাটফর্ম', cat:'Freelance', color:'#F7233F' },
  { name:'PeoplePerHour', url:'https://www.peopleperhour.com/', desc:'হাওয়ারলি ফ্রিল্যান্স সার্ভিস', cat:'Freelance', color:'#FF7C1F' },

  { name:'Amazon', url:'https://www.amazon.com/', desc:'বিশ্বের বৃহত্তম ই-কমার্স', cat:'E-Commerce', color:'#FF9900' },
  { name:'eBay', url:'https://www.ebay.com/', desc:'অনলাইন নিলাম ও শপিং', cat:'E-Commerce', color:'#E53238' },
  { name:'Etsy', url:'https://www.etsy.com/', desc:'হ্যান্ডমেড ও ভিনটেজ মার্কেট', cat:'E-Commerce', color:'#F16521' },
  { name:'AliExpress', url:'https://www.aliexpress.com/', desc:'গ্লোবাল চায়নিজ রিটেইল', cat:'E-Commerce', color:'#FF4747' },
  { name:'Shopify', url:'https://www.shopify.com/', desc:'ই-কমার্স স্টোর বিল্ডার', cat:'E-Commerce', color:'#96BF48' },
  { name:'Walmart', url:'https://www.walmart.com/', desc:'বড় রিটেইল স্টোর অনলাইন', cat:'E-Commerce', color:'#0071CE' },

  { name:'Coursera', url:'https://www.coursera.org/', desc:'অনলাইন কোর্স ও সার্টিফিকেট', cat:'Education', color:'#0056D2' },
  { name:'Udemy', url:'https://www.udemy.com/', desc:'সব বিষয়ে অনলাইন কোর্স', cat:'Education', color:'#A435F0' },
  { name:'edX', url:'https://www.edx.org/', desc:'বিশ্ববিদ্যালয় অনলাইন কোর্স', cat:'Education', color:'#02262B' },
  { name:'Khan Academy', url:'https://www.khanacademy.org/', desc:'বিনামূল্যে শিক্ষা প্ল্যাটফর্ম', cat:'Education', color:'#14BF96' },
  { name:'Skillshare', url:'https://www.skillshare.com/', desc:'ক্রিয়েটিভ স্কিল শেখার সাইট', cat:'Education', color:'#F8C041' },
  { name:'LinkedIn Learning', url:'https://www.linkedin.com/learning/', desc:'প্রফেশনাল স্কিল ডেভেলপমেন্ট', cat:'Education', color:'#0A66C2' },
  { name:'Duolingo', url:'https://www.duolingo.com/', desc:'গেমিফাইড ভাষা শিক্ষা', cat:'Education', color:'#58CC02' },

  { name:'GitHub', url:'https://github.com/', desc:'কোড হোস্টিং ও কোলাবরেশন', cat:'Tech & Dev', color:'#181717' },
  { name:'Stack Overflow', url:'https://stackoverflow.com/', desc:'ডেভেলপার Q&A কমিউনিটি', cat:'Tech & Dev', color:'#F48024' },
  { name:'AWS', url:'https://aws.amazon.com/', desc:'আমাজন ক্লাউড সার্ভিস', cat:'Tech & Dev', color:'#FF9900' },
  { name:'Google Cloud', url:'https://cloud.google.com/', desc:'গুগল ক্লাউড প্ল্যাটফর্ম', cat:'Tech & Dev', color:'#4285F4' },
  { name:'Vercel', url:'https://vercel.com/', desc:'ফ্রন্টএন্ড ডিপ্লয় প্ল্যাটফর্ম', cat:'Tech & Dev', color:'#000000' },
  { name:'Netlify', url:'https://www.netlify.com/', desc:'জ্যামস্ট্যাক হোস্টিং', cat:'Tech & Dev', color:'#00C7B7' },
  { name:'Replit', url:'https://replit.com/', desc:'অনলাইন কোডিং পরিবেশ', cat:'Tech & Dev', color:'#F26207' },
  { name:'HuggingFace', url:'https://huggingface.co/', desc:'এআই মডেল হাব', cat:'Tech & Dev', color:'#FFD21E' },

  { name:'PayPal', url:'https://www.paypal.com/', desc:'অনলাইন পেমেন্ট সিস্টেম', cat:'Finance', color:'#00457C' },
  { name:'Stripe', url:'https://stripe.com/', desc:'ডেভেলপার পেমেন্ট গেটওয়ে', cat:'Finance', color:'#635BFF' },
  { name:'Wise', url:'https://wise.com/', desc:'আন্তর্জাতিক মানি ট্রান্সফার', cat:'Finance', color:'#9FE870' },
  { name:'Coinbase', url:'https://www.coinbase.com/', desc:'ক্রিপ্টো এক্সচেঞ্জ', cat:'Finance', color:'#0052FF' },
  { name:'Revolut', url:'https://www.revolut.com/', desc:'ডিজিটাল ব্যাংকিং', cat:'Finance', color:'#191C1F' },
  { name:'Binance', url:'https://www.binance.com/', desc:'বৃহত্তম ক্রিপ্টো এক্সচেঞ্জ', cat:'Finance', color:'#F0B90B' },

  { name:'Upwork Talent', url:'https://www.upwork.com/', desc:'ট্যালেন্ট হায়ারিং', cat:'Jobs & HR', color:'#6FDA44' },
  { name:'LinkedIn', url:'https://www.linkedin.com/', desc:'প্রফেশনাল নেটওয়ার্কিং', cat:'Jobs & HR', color:'#0A66C2' },
  { name:'Indeed', url:'https://www.indeed.com/', desc:'চাকরির সার্চ ইঞ্জিন', cat:'Jobs & HR', color:'#2164F3' },
  { name:'Glassdoor', url:'https://www.glassdoor.com/', desc:'কোম্পানি রিভিউ ও চাকরি', cat:'Jobs & HR', color:'#0CAA41' },
  { name:'Remote.co', url:'https://remote.co/', desc:'রিমোট জব বোর্ড', cat:'Jobs & HR', color:'#00B4A0' },
  { name:'AngelList', url:'https://angel.co/', desc:'স্টার্টআপ জব মার্কেট', cat:'Jobs & HR', color:'#000000' },

  { name:'Netflix', url:'https://www.netflix.com/', desc:'স্ট্রিমিং ভিডিও সার্ভিস', cat:'Media & Streaming', color:'#E50914' },
  { name:'Spotify', url:'https://www.spotify.com/', desc:'মিউজিক স্ট্রিমিং', cat:'Media & Streaming', color:'#1DB954' },
  { name:'YouTube', url:'https://www.youtube.com/', desc:'ভিডিও শেয়ারিং প্ল্যাটফর্ম', cat:'Media & Streaming', color:'#FF0000' },
  { name:'Twitch', url:'https://www.twitch.tv/', desc:'লাইভ গেমিং স্ট্রিমিং', cat:'Media & Streaming', color:'#9146FF' },
  { name:'Disney+', url:'https://www.disneyplus.com/', desc:'ডিজনি স্ট্রিমিং সার্ভিস', cat:'Media & Streaming', color:'#113CCF' },
  { name:'SoundCloud', url:'https://soundcloud.com/', desc:'ইন্ডিপেন্ডেন্ট মিউজিক', cat:'Media & Streaming', color:'#FF5500' },

  { name:'Airbnb', url:'https://www.airbnb.com/', desc:'হোম ও রুম রেন্টাল', cat:'Travel & Hospitality', color:'#FF5A5F' },
  { name:'Booking.com', url:'https://www.booking.com/', desc:'হোটেল বুকিং প্ল্যাটফর্ম', cat:'Travel & Hospitality', color:'#003580' },
  { name:'Expedia', url:'https://www.expedia.com/', desc:'ট্রাভেল বুকিং সাইট', cat:'Travel & Hospitality', color:'#00355F' },
  { name:'Tripadvisor', url:'https://www.tripadvisor.com/', desc:'ট্রাভেল রিভিউ ও বুকিং', cat:'Travel & Hospitality', color:'#34E0A1' },
  { name:'Skyscanner', url:'https://www.skyscanner.com/', desc:'ফ্লাইট সার্চ ইঞ্জিন', cat:'Travel & Hospitality', color:'#0770E3' },

  { name:'Uber', url:'https://www.uber.com/', desc:'রাইড-শেয়ারিং অ্যাপ', cat:'Transport', color:'#000000' },
  { name:'Lyft', url:'https://www.lyft.com/', desc:'রাইড-শেয়ারিং সার্ভিস', cat:'Transport', color:'#FF00BF' },
  { name:'DoorDash', url:'https://www.doordash.com/', desc:'ফুড ডেলিভারি', cat:'Transport', color:'#FF3008' },
  { name:'Instacart', url:'https://www.instacart.com/', desc:'গ্রোসারি ডেলিভারি', cat:'Transport', color:'#43B02A' },
  { name:'FedEx', url:'https://www.fedex.com/', desc:'কুরিয়ার ও শিপিং', cat:'Transport', color:'#4D148C' },

  { name:'Canva', url:'https://www.canva.com/', desc:'অনলাইন গ্রাফিক ডিজাইন', cat:'Design & Creative', color:'#00C4CC' },
  { name:'Adobe', url:'https://www.adobe.com/', desc:'ক্রিয়েটিভ সফটওয়্যার স্যুট', cat:'Design & Creative', color:'#FF0000' },
  { name:'Figma', url:'https://www.figma.com/', desc:'ইউআই/ইউএক্স ডিজাইন টুল', cat:'Design & Creative', color:'#F24E1E' },
  { name:'Behance', url:'https://www.behance.net/', desc:'ডিজাইন পোর্টফোলিও', cat:'Design & Creative', color:'#1769FF' },
  { name:'Dribbble', url:'https://dribbble.com/', desc:'ডিজাইনার কমিউনিটি', cat:'Design & Creative', color:'#EA4C89' },
  { name:'Shutterstock', url:'https://www.shutterstock.com/', desc:'স্টক ফটো ও ভিডিও', cat:'Design & Creative', color:'#EE2020' },

  { name:'HubSpot', url:'https://www.hubspot.com/', desc:'সিআরএম ও মার্কেটিং টুল', cat:'Marketing', color:'#FF7A59' },
  { name:'Mailchimp', url:'https://mailchimp.com/', desc:'ইমেইল মার্কেটিং', cat:'Marketing', color:'#FFE01B' },
  { name:'SEMrush', url:'https://www.semrush.com/', desc:'এসইও ও মার্কেটিং অ্যানালিটিক্স', cat:'Marketing', color:'#FF642D' },
  { name:'Hootsuite', url:'https://hootsuite.com/', desc:'সোশ্যাল মিডিয়া ম্যানেজমেন্ট', cat:'Marketing', color:'#143059' },
  { name:'Ahrefs', url:'https://ahrefs.com/', desc:'এসইও টুলস ও ব্যাকলিংক', cat:'Marketing', color:'#FF7043' },
  { name:'Buffer', url:'https://buffer.com/', desc:'সোশ্যাল মিডিয়া শিডিউলার', cat:'Marketing', color:'#168EEA' },

  { name:'Slack', url:'https://slack.com/', desc:'টিম কমিউনিকেশন', cat:'Productivity', color:'#4A154B' },
  { name:'Notion', url:'https://www.notion.so/', desc:'অল-ইন-ওয়ান ওয়ার্কস্পেস', cat:'Productivity', color:'#000000' },
  { name:'Trello', url:'https://trello.com/', desc:'কানবান প্রজেক্ট ম্যানেজমেন্ট', cat:'Productivity', color:'#0052CC' },
  { name:'Asana', url:'https://asana.com/', desc:'টাস্ক ও প্রজেক্ট ট্র্যাকিং', cat:'Productivity', color:'#F06A6A' },
  { name:'Zoom', url:'https://zoom.us/', desc:'ভিডিও কনফারেন্সিং', cat:'Productivity', color:'#2D8CFF' },
  { name:'Dropbox', url:'https://www.dropbox.com/', desc:'ক্লাউড ফাইল স্টোরেজ', cat:'Productivity', color:'#0061FF' },

  { name:'Telemedicine.com', url:'https://www.teladoc.com/', desc:'অনলাইন ডাক্তার পরামর্শ', cat:'Health', color:'#00B4D8' },
  { name:'Headspace', url:'https://www.headspace.com/', desc:'মেডিটেশন ও মাইন্ডফুলনেস', cat:'Health', color:'#F47D31' },
  { name:'MyFitnessPal', url:'https://www.myfitnesspal.com/', desc:'ক্যালরি ট্র্যাকার', cat:'Health', color:'#00ACED' },
  { name:'Calm', url:'https://www.calm.com/', desc:'স্লিপ ও মেডিটেশন', cat:'Health', color:'#6B6FF6' },
  { name:'Noom', url:'https://www.noom.com/', desc:'ওজন কমানোর প্রোগ্রাম', cat:'Health', color:'#2ECC40' },

  { name:'Twilio', url:'https://www.twilio.com/', desc:'ক্লাউড কমিউনিকেশন এপিআই', cat:'AI & APIs', color:'#F22F46' },
  { name:'OpenAI', url:'https://openai.com/', desc:'এআই রিসার্চ ও প্রোডাক্ট', cat:'AI & APIs', color:'#412991' },
  { name:'Anthropic', url:'https://www.anthropic.com/', desc:'এআই সেফটি ও ক্লড', cat:'AI & APIs', color:'#D97706' },
  { name:'Midjourney', url:'https://www.midjourney.com/', desc:'এআই ইমেজ জেনারেশন', cat:'AI & APIs', color:'#000000' },
  { name:'Replicate', url:'https://replicate.com/', desc:'এআই মডেল ডিপ্লয়মেন্ট', cat:'AI & APIs', color:'#000000' },
  { name:'Hugging Face', url:'https://huggingface.co/', desc:'ওপেন সোর্স এআই মডেল', cat:'AI & APIs', color:'#FFD21E' },
    ]
  },

];

const BDAllJobServices = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const GOLD = '#ffce00';

  return (
    <div style={{ padding: '10px 0' }}>
      <div style={{
        textAlign: 'center', marginBottom: '24px',
        background: 'linear-gradient(135deg, #1a237e, #283593)',
        borderRadius: '12px', padding: '18px',
        border: `1px solid ${GOLD}`,
      }}>
        <div style={{ fontSize: '36px', marginBottom: '6px' }}>💼</div>
        <h2 style={{ color: GOLD, margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
          {lang === 'bn' ? 'বাংলাদেশের সকল চাকরি সেবা' : 'All Job Services of Bangladesh'}
        </h2>
        <p style={{ color: '#ccc', fontSize: '13px', margin: '6px 0 0' }}>
          {lang === 'bn' ? 'সরকারি ও বেসরকারি সকল চাকরির তথ্য এক জায়গায়' : 'Govt & private job information in one place'}
        </p>
      </div>

      {/* Category filter buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', justifyContent: 'center' }}>
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            padding: '6px 14px', borderRadius: '20px', border: 'none',
            background: activeCategory === null ? GOLD : 'rgba(255,255,255,0.1)',
            color: activeCategory === null ? '#000' : '#fff',
            cursor: 'pointer', fontSize: '12px', fontWeight: 'bold',
          }}
        >
          {lang === 'bn' ? '📋 সব চাকরি' : '📋 All Jobs'}
        </button>
        {jobCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(activeCategory === i ? null : i)}
            style={{
              padding: '6px 14px', borderRadius: '20px', border: 'none',
              background: activeCategory === i ? GOLD : 'rgba(255,255,255,0.1)',
              color: activeCategory === i ? '#000' : '#fff',
              cursor: 'pointer', fontSize: '12px', fontWeight: 'bold',
            }}
          >
            {cat.icon} {lang === 'bn' ? cat.category : cat.enCategory}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      {jobCategories
        .filter((_, i) => activeCategory === null || activeCategory === i)
        .map((cat, ci) => (
          <div key={ci} style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '12px', padding: '10px 14px',
              background: `linear-gradient(135deg, ${cat.color}33, ${cat.color}11)`,
              borderRadius: '8px', borderLeft: `4px solid ${cat.color}`,
            }}>
              <span style={{ fontSize: '22px' }}>{cat.icon}</span>
              <h3 style={{ color: '#fff', margin: 0, fontSize: '15px', fontWeight: 'bold' }}>
                {lang === 'bn' ? cat.category : cat.enCategory}
              </h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '10px',
            }}>
              {cat.jobs.map((j, ji) => (
                <a
                  key={ji}
                  href={j.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', flexDirection: 'column', gap: '4px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px', padding: '12px 14px',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${cat.color}22`;
                    e.currentTarget.style.borderColor = cat.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600' }}>
                    {lang === 'bn' ? j.name : j.en}
                  </div>
                  <div style={{ color: '#aaa', fontSize: '11px' }}>
                    {lang === 'bn' ? j.desc : j.url.replace('https://', '')}
                  </div>
                  <div style={{ color: GOLD, fontSize: '10.5px', marginTop: '2px' }}>
                    {j.url.replace('https://', '')} ↗
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BDAllJobServices;
