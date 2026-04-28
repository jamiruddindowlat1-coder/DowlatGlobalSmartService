import React from 'react';

const secretariats = [
  { name: 'বাংলাদেশ সচিবালয়', en: 'Bangladesh Secretariat', url: 'https://cabinet.gov.bd', icon: '🏢', desc: 'কেন্দ্রীয় সচিবালয়' },
  { name: 'জনপ্রশাসন মন্ত্রণালয়', en: 'Ministry of Public Administration', url: 'https://mopa.gov.bd', icon: '📋', desc: 'সরকারি কর্মকর্তা নিয়োগ ও বদলি' },
  { name: 'বাংলাদেশ পাবলিক সার্ভিস কমিশন (BPSC)', en: 'Bangladesh Public Service Commission', url: 'https://bpsc.gov.bd', icon: '🎓', desc: 'BCS ও সরকারি নিয়োগ পরীক্ষা' },
  { name: 'সরকারি কর্ম কমিশন সচিবালয়', en: 'PSC Secretariat', url: 'https://bpsc.gov.bd', icon: '🏛️', desc: 'কর্ম কমিশন সচিবালয়' },
  { name: 'জাতীয় সংসদ সচিবালয়', en: 'National Parliament Secretariat', url: 'https://parliament.portal.gov.bd/', icon: '🏗️', desc: 'জাতীয় সংসদের কার্যালয়' },
  { name: 'রাষ্ট্রপতির কার্যালয়', en: "President's Office (Bangabhaban)", url: 'https://bangabhaban.gov.bd', icon: '👑', desc: 'বঙ্গভবন' },
  { name: 'প্রধানমন্ত্রীর কার্যালয়', en: "Prime Minister's Office", url: 'https://pmo.gov.bd', icon: '⭐', desc: 'প্রধানমন্ত্রীর দপ্তর' },
  { name: 'বাংলাদেশ নির্বাচন কমিশন', en: 'Bangladesh Election Commission', url: 'https://ecs.gov.bd', icon: '🗳️', desc: 'নির্বাচন পরিচালনা কমিশন' },
  { name: 'দুর্নীতি দমন কমিশন (দুদক)', en: 'Anti-Corruption Commission', url: 'https://acc.org.bd', icon: '⚖️', desc: 'দুদক' },
  { name: 'মহা হিসাব নিরীক্ষক ও নিয়ন্ত্রক', en: 'Comptroller & Auditor General', url: 'https://cga.gov.bd/', icon: '🔍', desc: 'CAG অফিস' },
  { name: 'বাংলাদেশ সুপ্রিম কোর্ট', en: 'Supreme Court of Bangladesh', url: 'https://supremecourt.gov.bd', icon: '⚖️', desc: 'হাইকোর্ট ও আপিল বিভাগ' },
  { name: 'সরকারি মুদ্রণালয়', en: 'Government Press', url: 'https://bgpress.dpp.gov.bd/', icon: '🖨️', desc: 'সরকারি মুদ্রণ অফিস' },
  { name: 'বাংলাদেশ সরকারি তথ্য বাতায়ন', en: 'Bangladesh National Portal', url: 'https://bangladesh.gov.bd', icon: '🌐', desc: 'সকল সরকারি সেবার তথ্য' },
  { name: 'জাতীয় রাজস্ব বোর্ড (NBR)', en: 'National Board of Revenue', url: 'https://nbr.gov.bd', icon: '💵', desc: 'কর ও শুল্ক বিভাগ' },
  { name: 'বাংলাদেশ ব্যাংক', en: 'Bangladesh Bank', url: 'https://bangladesh-bank.portal.gov.bd/', icon: '🏦', desc: 'কেন্দ্রীয় ব্যাংক' },
  { name: 'পরিকল্পনা কমিশন', en: 'Planning Commission', url: 'https://plancomm.gov.bd', icon: '📊', desc: 'জাতীয় পরিকল্পনা সংস্থা' },
  { name: 'বাংলাদেশ পরিসংখ্যান ব্যুরো (BBS)', en: 'Bangladesh Bureau of Statistics', url: 'https://bbs.gov.bd', icon: '📈', desc: 'জাতীয় পরিসংখ্যান' },
  { name: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)', en: 'BRTA', url: 'https://brta.gov.bd', icon: '🚗', desc: 'যানবাহন নিবন্ধন ও লাইসেন্স' },
  { name: 'ঢাকা উত্তর সিটি কর্পোরেশন', en: 'DNCC', url: 'https://dncc.gov.bd', icon: '🏙️', desc: 'ঢাকা উত্তর সিটি কর্পোরেশন' },
  { name: 'ঢাকা দক্ষিণ সিটি কর্পোরেশন', en: 'DSCC', url: 'https://dscc.gov.bd', icon: '🌆', desc: 'ঢাকা দক্ষিণ সিটি কর্পোরেশন' },
  { name: 'চট্টগ্রাম সিটি কর্পোরেশন', en: 'CCC', url: 'https://ccc.gov.bd', icon: '🌊', desc: 'চট্টগ্রাম সিটি কর্পোরেশন' },
  { name: 'রাজধানী উন্নয়ন কর্তৃপক্ষ (RAJUK)', en: 'RAJUK', url: 'https://rajuk.gov.bd', icon: '🏗️', desc: 'ঢাকা নগর উন্নয়ন কর্তৃপক্ষ' },
  { name: 'বাংলাদেশ রপ্তানি উন্নয়ন ব্যুরো', en: 'Export Promotion Bureau', url: 'https://epb.gov.bd', icon: '📦', desc: 'রপ্তানি উন্নয়ন সংস্থা' },
  { name: 'বিনিয়োগ উন্নয়ন কর্তৃপক্ষ (BIDA)', en: 'BIDA', url: 'https://bida.gov.bd', icon: '💼', desc: 'বিদেশি বিনিয়োগ উন্নয়ন সংস্থা' },
];

const secretariatsExtra = [
  { name: 'রাষ্ট্রপতির কার্যালয়', en: 'Bangabhaban', url: 'https://bangabhaban.gov.bd', icon: '🏛️', desc: 'গণপ্রজাতন্ত্রী বাংলাদেশের রাষ্ট্রপতির কার্যালয়' },
  { name: 'প্রধানমন্ত্রীর কার্যালয়', en: "Prime Minister's Office", url: 'https://pmo.gov.bd', icon: '🏢', desc: 'প্রধানমন্ত্রীর কার্যালয়' },
  { name: 'মন্ত্রিপরিষদ বিভাগ', en: 'Cabinet Division', url: 'https://cabinet.gov.bd', icon: '🗂️', desc: 'মন্ত্রিপরিষদ বিভাগ' },
  { name: 'সশস্ত্র বাহিনী বিভাগ', en: 'Armed Forces Division', url: 'https://afd.portal.gov.bd', icon: '🎖️', desc: 'সশস্ত্র বাহিনী বিভাগ' },
  { name: 'জনপ্রশাসন মন্ত্রণালয়', en: 'Ministry of Public Administration', url: 'https://mopa.gov.bd', icon: '🏗️', desc: 'জনপ্রশাসন ও সরকারি কর্মচারী ব্যবস্থাপনা' },
  { name: 'পরিকল্পনা বিভাগ', en: 'Planning Division', url: 'https://plancomm.gov.bd', icon: '📊', desc: 'জাতীয় পরিকল্পনা কমিশন ও পরিকল্পনা বিভাগ' },
  { name: 'পরিসংখ্যান ও তথ্য ব্যবস্থাপনা বিভাগ', en: 'Statistics & Informatics Division', url: 'https://sid.gov.bd', icon: '📈', desc: 'পরিসংখ্যান ও তথ্য ব্যবস্থাপনা বিভাগ' },
  { name: 'বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন বিভাগ', en: 'IMED', url: 'https://imed.gov.bd', icon: '🔍', desc: 'উন্নয়ন প্রকল্প বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন' },
  { name: 'অর্থ বিভাগ', en: 'Finance Division', url: 'https://mof.gov.bd', icon: '💰', desc: 'অর্থ মন্ত্রণালয় – অর্থ বিভাগ' },
  { name: 'অর্থনৈতিক সম্পর্ক বিভাগ (ERD)', en: 'Economic Relations Division', url: 'https://erd.gov.bd', icon: '🤝', desc: 'বৈদেশিক সহায়তা ও অর্থনৈতিক সম্পর্ক বিভাগ' },
  { name: 'আর্থিক প্রতিষ্ঠান বিভাগ', en: 'Financial Institutions Division', url: 'https://fid.gov.bd', icon: '🏦', desc: 'ব্যাংক ও আর্থিক প্রতিষ্ঠান বিভাগ' },
  { name: 'অভ্যন্তরীণ সম্পদ বিভাগ', en: 'Internal Resources Division', url: 'https://ird.gov.bd', icon: '🗃️', desc: 'জাতীয় রাজস্ব বোর্ড ও অভ্যন্তরীণ সম্পদ' },
  { name: 'বাণিজ্য মন্ত্রণালয়', en: 'Ministry of Commerce', url: 'https://mincom.gov.bd', icon: '🛒', desc: 'আমদানি-রপ্তানি ও বাণিজ্য নীতিমালা' },
  { name: 'শিল্প মন্ত্রণালয়', en: 'Ministry of Industries', url: 'https://moind.gov.bd', icon: '🏭', desc: 'শিল্প উন্নয়ন ও ব্যবস্থাপনা' },
  { name: 'স্থানীয় সরকার বিভাগ', en: 'Local Government Division', url: 'https://lgd.gov.bd', icon: '🏘️', desc: 'স্থানীয় সরকার ও পৌরসভা ব্যবস্থাপনা' },
  { name: 'পল্লী উন্নয়ন ও সমবায় বিভাগ', en: 'Rural Development & Co-operatives Division', url: 'https://rdcd.gov.bd', icon: '🌾', desc: 'পল্লী উন্নয়ন ও সমবায় বিভাগ' },
  { name: 'ভূমি মন্ত্রণালয়', en: 'Ministry of Land', url: 'https://minland.gov.bd', icon: '🗺️', desc: 'ভূমি ব্যবস্থাপনা ও রেকর্ড' },
  { name: 'গৃহায়ন ও গণপূর্ত মন্ত্রণালয়', en: 'Ministry of Housing & Public Works', url: 'https://mohpw.gov.bd', icon: '🏗️', desc: 'গৃহায়ন ও সরকারি নির্মাণ কার্যক্রম' },
  { name: 'শিক্ষা মন্ত্রণালয়', en: 'Ministry of Education', url: 'https://moedu.gov.bd', icon: '🎓', desc: 'মাধ্যমিক ও উচ্চ শিক্ষা মন্ত্রণালয়' },
  { name: 'মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ', en: 'Secondary & Higher Education Division', url: 'https://shed.gov.bd', icon: '📚', desc: 'মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ' },
  { name: 'কারিগরি ও মাদ্রাসা শিক্ষা বিভাগ', en: 'Technical & Madrasa Education Division', url: 'https://tmed.gov.bd', icon: '🔧', desc: 'কারিগরি ও মাদ্রাসা শিক্ষা বিভাগ' },
  { name: 'প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়', en: 'Ministry of Primary & Mass Education', url: 'https://mopme.gov.bd', icon: '✏️', desc: 'প্রাথমিক শিক্ষা ও সাক্ষরতা কার্যক্রম' },
  { name: 'বিজ্ঞান ও প্রযুক্তি মন্ত্রণালয়', en: 'Ministry of Science & Technology', url: 'https://most.gov.bd', icon: '🔬', desc: 'বিজ্ঞান ও প্রযুক্তি গবেষণা ও উন্নয়ন' },
  { name: 'তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ', en: 'ICT Division', url: 'https://ictd.gov.bd', icon: '💻', desc: 'ডিজিটাল বাংলাদেশ ও আইসিটি উন্নয়ন' },
  { name: 'ডাক ও টেলিযোগাযোগ বিভাগ', en: 'Posts & Telecommunications Division', url: 'https://ptd.gov.bd', icon: '📡', desc: 'ডাক ও টেলিযোগাযোগ সেবা' },
  { name: 'তথ্য ও সম্প্রচার মন্ত্রণালয়', en: 'Ministry of Information & Broadcasting', url: 'https://mib.gov.bd', icon: '📺', desc: 'গণমাধ্যম, রেডিও ও টেলিভিশন নিয়ন্ত্রণ' },
  { name: 'বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়', en: 'Ministry of Power, Energy & Mineral Resources', url: 'https://poweren.portal.gov.bd', icon: '⚡', desc: 'বিদ্যুৎ ও জ্বালানি নীতিমালা' },
  { name: 'বিদ্যুৎ বিভাগ', en: 'Power Division', url: 'https://powerdivision.gov.bd', icon: '🔌', desc: 'বিদ্যুৎ উৎপাদন ও বিতরণ' },
  { name: 'জ্বালানি ও খনিজ সম্পদ বিভাগ', en: 'Energy & Mineral Resources Division', url: 'https://emrd.gov.bd', icon: '⛽', desc: 'তেল, গ্যাস ও খনিজ সম্পদ' },
  { name: 'কৃষি মন্ত্রণালয়', en: 'Ministry of Agriculture', url: 'https://moa.gov.bd', icon: '🌾', desc: 'কৃষি উন্নয়ন ও খাদ্য নিরাপত্তা' },
  { name: 'খাদ্য মন্ত্রণালয়', en: 'Ministry of Food', url: 'https://mofood.gov.bd', icon: '🍚', desc: 'খাদ্য নিরাপত্তা ও মজুদ ব্যবস্থাপনা' },
  { name: 'মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়', en: 'Ministry of Fisheries & Livestock', url: 'https://mofl.gov.bd', icon: '🐟', desc: 'মৎস্য ও প্রাণিসম্পদ উন্নয়ন' },
  { name: 'পানি সম্পদ মন্ত্রণালয়', en: 'Ministry of Water Resources', url: 'https://mowr.gov.bd', icon: '💧', desc: 'পানি সম্পদ উন্নয়ন ও ব্যবস্থাপনা' },
  { name: 'পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়', en: 'Ministry of Environment, Forest & Climate Change', url: 'https://moef.gov.bd', icon: '🌿', desc: 'পরিবেশ সংরক্ষণ ও জলবায়ু পরিবর্তন' },
  { name: 'বস্ত্র ও পাট মন্ত্রণালয়', en: 'Ministry of Textiles & Jute', url: 'https://motj.gov.bd', icon: '🧵', desc: 'বস্ত্রশিল্প ও পাট খাত উন্নয়ন' },
  { name: 'সড়ক পরিবহন ও সেতু মন্ত্রণালয়', en: 'Ministry of Road Transport & Bridges', url: 'https://mortb.gov.bd', icon: '🛣️', desc: 'সড়ক, মহাসড়ক ও সেতু ব্যবস্থাপনা' },
  { name: 'সেতু বিভাগ', en: 'Bridges Division', url: 'https://bridgesdivision.gov.bd', icon: '🌉', desc: 'সেতু নির্মাণ ও ব্যবস্থাপনা বিভাগ' },
  { name: 'সড়ক পরিবহন ও মহাসড়ক বিভাগ', en: 'Road Transport & Highways Division', url: 'https://rthd.gov.bd', icon: '🚗', desc: 'সড়ক পরিবহন ও মহাসড়ক বিভাগ' },
  { name: 'রেলপথ মন্ত্রণালয়', en: 'Ministry of Railways', url: 'https://railway.gov.bd', icon: '🚆', desc: 'রেলওয়ে পরিবহন ব্যবস্থাপনা' },
  { name: 'নৌপরিবহন মন্ত্রণালয়', en: 'Ministry of Shipping', url: 'https://mos.gov.bd', icon: '🚢', desc: 'নৌ-পরিবহন ও বন্দর ব্যবস্থাপনা' },
  { name: 'বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়', en: 'Ministry of Civil Aviation & Tourism', url: 'https://mocat.gov.bd', icon: '✈️', desc: 'বিমান পরিবহন ও পর্যটন উন্নয়ন' },
  { name: 'আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়', en: 'Ministry of Law, Justice & Parliamentary Affairs', url: 'https://minlaw.gov.bd', icon: '⚖️', desc: 'আইন প্রণয়ন, বিচার ও সংসদ বিষয়ক' },
  { name: 'স্বরাষ্ট্র মন্ত্রণালয়', en: 'Ministry of Home Affairs', url: 'https://moha.gov.bd', icon: '🔒', desc: 'আইনশৃঙ্খলা রক্ষা ও অভ্যন্তরীণ নিরাপত্তা' },
  { name: 'জননিরাপত্তা বিভাগ', en: 'Public Security Division', url: 'https://mhapsd.gov.bd', icon: '👮', desc: 'পুলিশ ও জননিরাপত্তা বিভাগ' },
  { name: 'সুরক্ষা সেবা বিভাগ', en: 'Security Services Division', url: 'https://ssd.gov.bd', icon: '🛡️', desc: 'পাসপোর্ট, ইমিগ্রেশন ও সুরক্ষা সেবা' },
  { name: 'প্রতিরক্ষা মন্ত্রণালয়', en: 'Ministry of Defence', url: 'https://mod.gov.bd', icon: '🛡️', desc: 'জাতীয় প্রতিরক্ষা ব্যবস্থাপনা' },
  { name: 'স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়', en: 'Ministry of Health & Family Welfare', url: 'https://mohfw.gov.bd', icon: '🏥', desc: 'স্বাস্থ্যসেবা ও পরিবার পরিকল্পনা' },
  { name: 'স্বাস্থ্য সেবা বিভাগ', en: 'Health Services Division', url: 'https://hsd.gov.bd', icon: '💊', desc: 'জনস্বাস্থ্য সেবা ও হাসপাতাল ব্যবস্থাপনা' },
  { name: 'স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ', en: 'Medical Education & Family Welfare Division', url: 'https://mefwd.gov.bd', icon: '👨‍⚕️', desc: 'চিকিৎসা শিক্ষা ও পরিবার কল্যাণ' },
  { name: 'সমাজকল্যাণ মন্ত্রণালয়', en: 'Ministry of Social Welfare', url: 'https://msw.gov.bd', icon: '🤲', desc: 'সামাজিক সুরক্ষা ও কল্যাণমূলক কার্যক্রম' },
  { name: 'মহিলা ও শিশু বিষয়ক মন্ত্রণালয়', en: 'Ministry of Women & Children Affairs', url: 'https://mowca.gov.bd', icon: '👩‍👧', desc: 'নারী উন্নয়ন ও শিশু অধিকার সুরক্ষা' },
  { name: 'শ্রম ও কর্মসংস্থান মন্ত্রণালয়', en: 'Ministry of Labour & Employment', url: 'https://mole.gov.bd', icon: '👷', desc: 'শ্রমিক অধিকার ও কর্মসংস্থান উন্নয়ন' },
  { name: 'দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়', en: 'Ministry of Disaster Management & Relief', url: 'https://modmr.gov.bd', icon: '🆘', desc: 'দুর্যোগ প্রতিরোধ ও ত্রাণ কার্যক্রম' },
  { name: 'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়', en: 'Ministry of Expatriates Welfare & Overseas Employment', url: 'https://probashi.gov.bd', icon: '🌍', desc: 'প্রবাসী কর্মীদের কল্যাণ ও বিদেশে কর্মসংস্থান' },
  { name: 'সংস্কৃতি বিষয়ক মন্ত্রণালয়', en: 'Ministry of Cultural Affairs', url: 'https://moca.gov.bd', icon: '🎭', desc: 'সাংস্কৃতিক ঐতিহ্য সংরক্ষণ ও উন্নয়ন' },
  { name: 'ধর্ম বিষয়ক মন্ত্রণালয়', en: 'Ministry of Religious Affairs', url: 'https://mora.gov.bd', icon: '🕌', desc: 'ধর্মীয় কার্যক্রম ও হজ ব্যবস্থাপনা' },
  { name: 'যুব ও ক্রীড়া মন্ত্রণালয়', en: 'Ministry of Youth & Sports', url: 'https://moys.gov.bd', icon: '⚽', desc: 'যুব উন্নয়ন ও ক্রীড়া কার্যক্রম' },
  { name: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়', en: 'Ministry of Liberation War Affairs', url: 'https://molwa.gov.bd', icon: '🏅', desc: 'মুক্তিযোদ্ধাদের সম্মান ও কল্যাণ' },
  { name: 'পররাষ্ট্র মন্ত্রণালয়', en: 'Ministry of Foreign Affairs', url: 'https://mofa.gov.bd', icon: '🌐', desc: 'কূটনৈতিক সম্পর্ক ও বৈদেশিক নীতি' },
  { name: 'পার্বত্য চট্টগ্রাম বিষয়ক মন্ত্রণালয়', en: 'Ministry of Chittagong Hill Tracts Affairs', url: 'https://mochta.gov.bd', icon: '🏔️', desc: 'পার্বত্য চট্টগ্রাম উন্নয়ন ও শান্তি' },
];

/* ================= MERGED ================= */
// Deduplicate by URL
const seen = new Set();
const allSecretariats = [...secretariats, ...secretariatsExtra].filter(s => {
  if (seen.has(s.url)) return false;
  seen.add(s.url);
  return true;
});

const GOLD = '#ffce00';

const BDAllSecretary = ({ lang = 'bn' }) => {
  return (
    <div style={{ padding: '10px 0' }}>
      <div style={{
        textAlign: 'center', marginBottom: '24px',
        background: 'linear-gradient(135deg, #1a237e, #283593)',
        borderRadius: '12px', padding: '18px',
        border: `1px solid ${GOLD}`,
      }}>
        <div style={{ fontSize: '36px', marginBottom: '6px' }}>🏢</div>
        <h2 style={{ color: GOLD, margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
          {lang === 'bn' ? 'বাংলাদেশ সচিবালয় ও সরকারি দপ্তর' : 'Bangladesh Secretariat & Govt. Offices'}
        </h2>
        <p style={{ color: '#ccc', fontSize: '13px', margin: '6px 0 0' }}>
          {lang === 'bn'
            ? `মোট ${allSecretariats.length}টি সচিবালয় ও মন্ত্রণালয়`
            : `Total ${allSecretariats.length} Secretariats & Ministries`}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
        gap: '12px',
      }}>
        {allSecretariats.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,206,0,0.2)',
              borderRadius: '10px',
              padding: '12px 14px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,206,0,0.1)';
              e.currentTarget.style.borderColor = GOLD;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,206,0,0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '26px', minWidth: '32px', textAlign: 'center', marginTop: '2px' }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontSize: '12.5px', fontWeight: '600', lineHeight: '1.4' }}>
                {lang === 'bn' ? s.name : s.en}
              </div>
              <div style={{ color: '#aaa', fontSize: '11px', marginTop: '3px' }}>
                {lang === 'bn' ? s.desc : s.url.replace('https://', '')}
              </div>
              <div style={{ color: GOLD, fontSize: '10.5px', marginTop: '2px', opacity: 0.7 }}>
                {s.url.replace('https://', '')} ↗
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BDAllSecretary;