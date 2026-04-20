import React, { useState } from "react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap');
  `}</style>
);

/* =========================
   অনলাইন কুরআন সাইট
========================= */
const QURAN_SITES = [
  {
    category: "📖 অনলাইন কুরআন পড়ুন",
    color: "#1a6b3a",
    items: [
      { name: "Al-Quran.info", url: "https://al-quran.info", desc: "বাংলা অনুবাদসহ সম্পূর্ণ কুরআন" },
      { name: "Quran.com", url: "https://quran.com", desc: "আরবি + অনুবাদ + তাফসির" },
      { name: "IslamicFinder Quran", url: "https://www.islamicfinder.org/quran", desc: "সূরা ও আয়াত খোঁজার সুবিধা" },
      { name: "iQuran Online", url: "https://www.iquranpro.com", desc: "সুন্দর ইন্টারফেসে কুরআন" },
      { name: "Tanzil Quran", url: "https://tanzil.net", desc: "বিশুদ্ধ আরবি টেক্সট" },
      { name: "Quran KS", url: "https://quran.ksu.edu.sa", desc: "তিলাওয়াত + অনুবাদ" },
      { name: "QuranExplorer", url: "https://www.quranexplorer.com", desc: "ইন্টারেক্টিভ কুরআন এক্সপ্লোরার" },
      { name: "Quran.nu", url: "https://quran.nu", desc: "সহজ পাঠ ইন্টারফেস" },
    ],
  },
];

/* =========================
   বিশ্বের সেরা কারীদের তেলাওয়াত
========================= */
const RECITERS = [
  {
    name: "আব্দুল ওয়ালি আল-কারনি",
    nameAr: "عبد الولي الأركاني",
    nameEn: "Abdul Wali Al-Arkani",
    country: "🇾🇪 ইয়েমেন",
    desc: "অত্যন্ত হৃদয়গ্রাহী ও আবেগময় তেলাওয়াত। বিশ্বব্যাপী লক্ষ লক্ষ মানুষের পছন্দের কারী।",
    url: "https://mp3quran.net/ar/waly",
    url2: "https://qurancentral.com/reciter/abdul-wali-al-arkani/",
    color: "#1a6b3a",
    featured: true,
  },
  {
    name: "মিশারি রাশিদ আল-আফাসি",
    nameAr: "مشاري راشد العفاسي",
    nameEn: "Mishary Rashid Al-Afasy",
    country: "🇰🇼 কুয়েত",
    desc: "বিশ্বের সবচেয়ে জনপ্রিয় কারীদের একজন। সুরেলা ও স্পষ্ট উচ্চারণে পরিচিত।",
    url: "https://mp3quran.net/ar/Afasi",
    url2: "https://qurancentral.com/reciter/mishary-rashid-alafasy/",
    color: "#8e44ad",
  },
  {
    name: "আব্দুর রহমান আস-সুদাইস",
    nameAr: "عبد الرحمن السديس",
    nameEn: "Abdul Rahman Al-Sudais",
    country: "🇸🇦 সৌদি আরব",
    desc: "মক্কার মসজিদুল হারামের প্রধান ইমাম। গভীর ও ক্ষমতাশালী কণ্ঠস্বর।",
    url: "https://mp3quran.net/ar/Sudais",
    url2: "https://qurancentral.com/reciter/abdurrahman-as-sudais/",
    color: "#c0392b",
  },
  {
    name: "সা'দ আল-গামিদি",
    nameAr: "سعد الغامدي",
    nameEn: "Saad Al-Ghamdi",
    country: "🇸🇦 সৌদি আরব",
    desc: "শান্ত ও গভীর কণ্ঠে তেলাওয়াত। তাহাজ্জুদ ও তারাবির জন্য বিখ্যাত।",
    url: "https://mp3quran.net/ar/Ghamdi",
    url2: "https://qurancentral.com/reciter/saad-al-ghamdi/",
    color: "#2980b9",
  },
  {
    name: "মাহির আল-মুয়াইকলি",
    nameAr: "ماهر المعيقلي",
    nameEn: "Maher Al-Muaiqly",
    country: "🇸🇦 সৌদি আরব",
    desc: "মসজিদুল হারামের ইমাম। সুন্দর মাকাম ও হৃদয়স্পর্শী আদায়ের জন্য পরিচিত।",
    url: "https://mp3quran.net/ar/Muaiqly",
    url2: "https://qurancentral.com/reciter/maher-al-muaiqly/",
    color: "#d35400",
  },
  {
    name: "সাউদ আশ-শুরাইম",
    nameAr: "سعود الشريم",
    nameEn: "Saud Al-Shuraim",
    country: "🇸🇦 সৌদি আরব",
    desc: "শক্তিশালী ও ওজনদার কণ্ঠ। মসজিদুল হারামের সাবেক ইমাম।",
    url: "https://mp3quran.net/ar/Shraym",
    url2: "https://qurancentral.com/reciter/saud-al-shuraim/",
    color: "#16a085",
  },
  {
    name: "আব্দুল বাসিত আব্দুস সামাদ",
    nameAr: "عبد الباسط عبد الصمد",
    nameEn: "Abdul Basit Abdus Samad",
    country: "🇪🇬 মিশর",
    desc: "কুরআন তেলাওয়াতের কিংবদন্তি। মুজাওয়াদ শৈলীতে অতুলনীয়। সারা বিশ্বে সমাদৃত।",
    url: "https://mp3quran.net/ar/Abdul_Basit",
    url2: "https://qurancentral.com/reciter/abdul-basit-abdus-samad/",
    color: "#6c3483",
  },
  {
    name: "মুহাম্মদ সিদ্দিক আল-মিনশাওয়ি",
    nameAr: "محمد صديق المنشاوي",
    nameEn: "Muhammad Siddiq Al-Minshawi",
    country: "🇪🇬 মিশর",
    desc: "মিশরের কিংবদন্তি কারী। মুরাত্তাল ও মুজাওয়াদ উভয় শৈলীতে অনন্য।",
    url: "https://mp3quran.net/ar/Minshawy",
    url2: "https://qurancentral.com/reciter/muhammad-siddiq-al-minshawi/",
    color: "#1a5276",
  },
  {
    name: "মাহমুদ খলিল আল-হুসারি",
    nameAr: "محمود خليل الحصري",
    nameEn: "Mahmoud Khalil Al-Hussary",
    country: "🇪🇬 মিশর",
    desc: "তাজবিদের জন্য বিখ্যাত। শিক্ষার্থীদের জন্য আদর্শ তেলাওয়াত।",
    url: "https://mp3quran.net/ar/Husary",
    url2: "https://qurancentral.com/reciter/mahmoud-khalil-al-hussary/",
    color: "#7b7d7d",
  },
  {
    name: "আলি আব্দুর রহমান আল-হুদাইফি",
    nameAr: "علي عبد الرحمن الحذيفي",
    nameEn: "Ali Abdur Rahman Al-Hudhaify",
    country: "🇸🇦 সৌদি আরব",
    desc: "মসজিদে নববীর ইমাম। শান্ত ও গম্ভীর কণ্ঠে তেলাওয়াত।",
    url: "https://mp3quran.net/ar/Hudhaify",
    url2: "https://qurancentral.com/reciter/ali-abdur-rahman-al-hudhaify/",
    color: "#117a65",
  },
  {
    name: "ইয়াসির আল-দৌসারি",
    nameAr: "ياسر الدوسري",
    nameEn: "Yasser Al-Dosari",
    country: "🇸🇦 সৌদি আরব",
    desc: "আধুনিক প্রজন্মের প্রিয় কারী। আবেগময় ও সুরেলা তেলাওয়াত।",
    url: "https://mp3quran.net/ar/Dosari",
    url2: "https://qurancentral.com/reciter/yasser-al-dosari/",
    color: "#943126",
  },
  {
    name: "নাসের আল-কাতামি",
    nameAr: "ناصر القطامي",
    nameEn: "Nasser Al-Qatami",
    country: "🇸🇦 সৌদি আরব",
    desc: "কান্নার তেলাওয়াতের জন্য বিখ্যাত। অত্যন্ত হৃদয়গ্রাহী।",
    url: "https://mp3quran.net/ar/Qtami",
    url2: "https://qurancentral.com/reciter/nasser-al-qatami/",
    color: "#1f618d",
  },
  {
    name: "ফারিস আব্বাদ",
    nameAr: "فارس عباد",
    nameEn: "Fares Abbad",
    country: "🇩🇿 আলজেরিয়া",
    desc: "আলজেরিয়ার বিখ্যাত কারী। শক্তিশালী ও আবেগময় কণ্ঠস্বর।",
    url: "https://mp3quran.net/ar/Fares",
    url2: "https://qurancentral.com/reciter/fares-abbad/",
    color: "#784212",
  },
  {
    name: "খালিদ আল-জলিল",
    nameAr: "خالد الجليل",
    nameEn: "Khalid Al-Jalil",
    country: "🇸🇦 সৌদি আরব",
    desc: "হৃদয়স্পর্শী ও মৌলিক শৈলীর তেলাওয়াত। রাতের নামাজে অনন্য।",
    url: "https://mp3quran.net/ar/Jleel",
    url2: "https://qurancentral.com/reciter/khalid-al-jalil/",
    color: "#0b5345",
  },
  {
    name: "বান্দার বালিলাহ",
    nameAr: "بندر بليلة",
    nameEn: "Bandar Baleela",
    country: "🇸🇦 সৌদি আরব",
    desc: "মসজিদুল হারামের ইমাম। সুমিষ্ট ও মনোরম তেলাওয়াত।",
    url: "https://mp3quran.net/ar/Baleelah",
    url2: "https://qurancentral.com/reciter/bandar-baleela/",
    color: "#4a235a",
  },
  {
    name: "আহমেদ আল-আজমি",
    nameAr: "أحمد العجمي",
    nameEn: "Ahmad Al-Ajmi",
    country: "🇰🇼 কুয়েত",
    desc: "কোমল ও আধ্যাত্মিক কণ্ঠে তেলাওয়াত। রাতের ইবাদতের জন্য বিশেষ উপযুক্ত।",
    url: "https://mp3quran.net/ar/Ajmi",
    url2: "https://qurancentral.com/reciter/ahmed-al-ajmi/",
    color: "#1b4f72",
  },
];

/* =========================
   সূরা তালিকা (১১৪টি)
========================= */
const SURAHS = [
{num:1,name:"আল-ফাতিহা",en:"Al-Fatiha",ayat:7},
{num:2,name:"আল-বাকারা",en:"Al-Baqarah",ayat:286},
{num:3,name:"আলে-ইমরান",en:"Aal-E-Imran",ayat:200},
{num:4,name:"আন-নিসা",en:"An-Nisa",ayat:176},
{num:5,name:"আল-মায়িদা",en:"Al-Ma'idah",ayat:120},
{num:6,name:"আল-আনআম",en:"Al-An'am",ayat:165},
{num:7,name:"আল-আরাফ",en:"Al-A'raf",ayat:206},
{num:8,name:"আল-আনফাল",en:"Al-Anfal",ayat:75},
{num:9,name:"আত-তাওবা",en:"At-Tawbah",ayat:129},
{num:10,name:"ইউনুস",en:"Yunus",ayat:109},
{num:11,name:"হুদ",en:"Hud",ayat:123},
{num:12,name:"ইউসুফ",en:"Yusuf",ayat:111},
{num:13,name:"আর-রাদ",en:"Ar-Ra'd",ayat:43},
{num:14,name:"ইব্রাহিম",en:"Ibrahim",ayat:52},
{num:15,name:"আল-হিজর",en:"Al-Hijr",ayat:99},
{num:16,name:"আন-নাহল",en:"An-Nahl",ayat:128},
{num:17,name:"আল-ইসরা",en:"Al-Isra",ayat:111},
{num:18,name:"আল-কাহফ",en:"Al-Kahf",ayat:110},
{num:19,name:"মারইয়াম",en:"Maryam",ayat:98},
{num:20,name:"ত্ব-হা",en:"Ta-Ha",ayat:135},
{num:21,name:"আল-আম্বিয়া",en:"Al-Anbiya",ayat:112},
{num:22,name:"আল-হাজ্জ",en:"Al-Hajj",ayat:78},
{num:23,name:"আল-মুমিনুন",en:"Al-Mu'minun",ayat:118},
{num:24,name:"আন-নূর",en:"An-Nur",ayat:64},
{num:25,name:"আল-ফুরকান",en:"Al-Furqan",ayat:77},
{num:26,name:"আশ-শুআরা",en:"Ash-Shu'ara",ayat:227},
{num:27,name:"আন-নামল",en:"An-Naml",ayat:93},
{num:28,name:"আল-কাসাস",en:"Al-Qasas",ayat:88},
{num:29,name:"আল-আনকাবুত",en:"Al-Ankabut",ayat:69},
{num:30,name:"আর-রুম",en:"Ar-Rum",ayat:60},
{num:31,name:"লুকমান",en:"Luqman",ayat:34},
{num:32,name:"আস-সাজদা",en:"As-Sajdah",ayat:30},
{num:33,name:"আল-আহযাব",en:"Al-Ahzab",ayat:73},
{num:34,name:"সাবা",en:"Saba",ayat:54},
{num:35,name:"ফাতির",en:"Fatir",ayat:45},
{num:36,name:"ইয়াসিন",en:"Ya-Sin",ayat:83},
{num:37,name:"আস-সাফফাত",en:"As-Saffat",ayat:182},
{num:38,name:"সোয়াদ",en:"Sad",ayat:88},
{num:39,name:"আয-যুমার",en:"Az-Zumar",ayat:75},
{num:40,name:"গাফির",en:"Ghafir",ayat:85},
{num:41,name:"ফুস্সিলাত",en:"Fussilat",ayat:54},
{num:42,name:"আশ-শূরা",en:"Ash-Shura",ayat:53},
{num:43,name:"আয-যুখরুফ",en:"Az-Zukhruf",ayat:89},
{num:44,name:"আদ-দুখান",en:"Ad-Dukhan",ayat:59},
{num:45,name:"আল-জাসিয়া",en:"Al-Jathiyah",ayat:37},
{num:46,name:"আল-আহকাফ",en:"Al-Ahqaf",ayat:35},
{num:47,name:"মুহাম্মদ",en:"Muhammad",ayat:38},
{num:48,name:"আল-ফাতহ",en:"Al-Fath",ayat:29},
{num:49,name:"আল-হুজুরাত",en:"Al-Hujurat",ayat:18},
{num:50,name:"ক্বাফ",en:"Qaf",ayat:45},
{num:51,name:"আয-যারিয়াত",en:"Adh-Dhariyat",ayat:60},
{num:52,name:"আত-তুর",en:"At-Tur",ayat:49},
{num:53,name:"আন-নাজম",en:"An-Najm",ayat:62},
{num:54,name:"আল-কামার",en:"Al-Qamar",ayat:55},
{num:55,name:"আর-রাহমান",en:"Ar-Rahman",ayat:78},
{num:56,name:"আল-ওয়াকিয়া",en:"Al-Waqi'ah",ayat:96},
{num:57,name:"আল-হাদিদ",en:"Al-Hadid",ayat:29},
{num:58,name:"আল-মুজাদালা",en:"Al-Mujadila",ayat:22},
{num:59,name:"আল-হাশর",en:"Al-Hashr",ayat:24},
{num:60,name:"আল-মুমতাহানা",en:"Al-Mumtahanah",ayat:13},
{num:61,name:"আস-সাফ",en:"As-Saf",ayat:14},
{num:62,name:"আল-জুমুআ",en:"Al-Jumu'ah",ayat:11},
{num:63,name:"আল-মুনাফিকুন",en:"Al-Munafiqun",ayat:11},
{num:64,name:"আত-তাগাবুন",en:"At-Taghabun",ayat:18},
{num:65,name:"আত-তালাক",en:"At-Talaq",ayat:12},
{num:66,name:"আত-তাহরিম",en:"At-Tahrim",ayat:12},
{num:67,name:"আল-মুলক",en:"Al-Mulk",ayat:30},
{num:68,name:"আল-কালাম",en:"Al-Qalam",ayat:52},
{num:69,name:"আল-হাক্কা",en:"Al-Haqqah",ayat:52},
{num:70,name:"আল-মাআরিজ",en:"Al-Ma'arij",ayat:44},
{num:71,name:"নূহ",en:"Nuh",ayat:28},
{num:72,name:"আল-জিন",en:"Al-Jinn",ayat:28},
{num:73,name:"আল-মুযযাম্মিল",en:"Al-Muzzammil",ayat:20},
{num:74,name:"আল-মুদ্দাস্সির",en:"Al-Muddaththir",ayat:56},
{num:75,name:"আল-কিয়ামা",en:"Al-Qiyamah",ayat:40},
{num:76,name:"আল-ইনসান",en:"Al-Insan",ayat:31},
{num:77,name:"আল-মুরসালাত",en:"Al-Mursalat",ayat:50},
{num:78,name:"আন-নাবা",en:"An-Naba",ayat:40},
{num:79,name:"আন-নাযিআত",en:"An-Nazi'at",ayat:46},
{num:80,name:"আবাসা",en:"Abasa",ayat:42},
{num:81,name:"আত-তাকউইর",en:"At-Takwir",ayat:29},
{num:82,name:"আল-ইনফিতার",en:"Al-Infitar",ayat:19},
{num:83,name:"আল-মুতাফফিফিন",en:"Al-Mutaffifin",ayat:36},
{num:84,name:"আল-ইনশিকাক",en:"Al-Inshiqaq",ayat:25},
{num:85,name:"আল-বুরুজ",en:"Al-Buruj",ayat:22},
{num:86,name:"আত-তারিক",en:"At-Tariq",ayat:17},
{num:87,name:"আল-আলা",en:"Al-A'la",ayat:19},
{num:88,name:"আল-গাশিয়া",en:"Al-Ghashiyah",ayat:26},
{num:89,name:"আল-ফাজর",en:"Al-Fajr",ayat:30},
{num:90,name:"আল-বালাদ",en:"Al-Balad",ayat:20},
{num:91,name:"আশ-শামস",en:"Ash-Shams",ayat:15},
{num:92,name:"আল-লাইল",en:"Al-Layl",ayat:21},
{num:93,name:"আদ-দুহা",en:"Ad-Duhaa",ayat:11},
{num:94,name:"আশ-শারহ",en:"Ash-Sharh",ayat:8},
{num:95,name:"আত-তিন",en:"At-Tin",ayat:8},
{num:96,name:"আল-আলাক",en:"Al-Alaq",ayat:19},
{num:97,name:"আল-কদর",en:"Al-Qadr",ayat:5},
{num:98,name:"আল-বাইয়িনা",en:"Al-Bayyinah",ayat:8},
{num:99,name:"আয-যিলযাল",en:"Az-Zalzalah",ayat:8},
{num:100,name:"আল-আদিয়াত",en:"Al-Adiyat",ayat:11},
{num:101,name:"আল-কারিআ",en:"Al-Qari'ah",ayat:11},
{num:102,name:"আত-তাকাসুর",en:"At-Takathur",ayat:8},
{num:103,name:"আল-আসর",en:"Al-Asr",ayat:3},
{num:104,name:"আল-হুমাযা",en:"Al-Humazah",ayat:9},
{num:105,name:"আল-ফিল",en:"Al-Fil",ayat:5},
{num:106,name:"কুরাইশ",en:"Quraysh",ayat:4},
{num:107,name:"আল-মাউন",en:"Al-Ma'un",ayat:7},
{num:108,name:"আল-কাউসার",en:"Al-Kawthar",ayat:3},
{num:109,name:"আল-কাফিরুন",en:"Al-Kafirun",ayat:6},
{num:110,name:"আন-নাসর",en:"An-Nasr",ayat:3},
{num:111,name:"আল-মাসাদ",en:"Al-Masad",ayat:5},
{num:112,name:"আল-ইখলাস",en:"Al-Ikhlas",ayat:4},
{num:113,name:"আল-ফালাক",en:"Al-Falaq",ayat:5},
{num:114,name:"আন-নাস",en:"An-Nas",ayat:6},
];

/* =========================
   MAIN COMPONENT
========================= */
const Quran = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  const filteredSites = QURAN_SITES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (i) => i.name.toLowerCase().includes(search.toLowerCase()) || i.desc.includes(search)
    ),
  })).filter((cat) => cat.items.length > 0);

  const filteredReciters = RECITERS.filter(
    (r) =>
      r.name.includes(search) ||
      r.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      r.country.includes(search) ||
      r.desc.includes(search)
  );

  const filteredSurahs = SURAHS.filter(
    (s) =>
      s.name.includes(search) ||
      s.en.toLowerCase().includes(search.toLowerCase()) ||
      String(s.num).includes(search)
  );

  return (
    <div style={styles.wrapper}>
      <FontLoader />
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .reciter-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.12) !important; }
        .site-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important; }
        .surah-card:hover { border-color: #1a6b3a !important; }
      `}</style>

      {/* ব্যানার */}
      <div style={styles.banner}>
        <div style={styles.arabicText}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <div style={styles.bannerTitle}>পবিত্র কুরআন শরীফ পোর্টাল</div>
        <div style={styles.bannerSub}>কুরআন পড়ুন • বিশ্বসেরা তেলাওয়াত শুনুন • সূরা খুঁজুন</div>
      </div>

      {/* ট্যাব */}
      <div style={styles.tabRow}>
        {[
          { key: "home",     label: "🏠 কুরআন সাইট" },
          { key: "reciters", label: "🎧 বিশ্বসেরা তেলাওয়াত" },
          { key: "surahs",   label: "📜 সূরা তালিকা" },
        ].map((tab) => (
          <button
            key={tab.key}
            style={{ ...styles.tabBtn, ...(activeTab === tab.key ? styles.tabBtnActive : {}) }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* সার্চ */}
      <input
        type="text"
        placeholder="🔍 সার্চ করুন..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* ========== HOME TAB ========== */}
      {activeTab === "home" && (
        <div>
          {filteredSites.map((cat, ci) => (
            <div key={ci} style={styles.catBlock}>
              <h3 style={{ ...styles.catTitle, color: cat.color, borderLeftColor: cat.color }}>
                {cat.category}
              </h3>
              <div style={styles.cardGrid}>
                {cat.items.map((item, ii) => (
                  <a key={ii} href={item.url} target="_blank" rel="noopener noreferrer"
                    style={styles.card} className="site-card">
                    <div style={{ ...styles.cardDot, background: cat.color }} />
                    <div style={styles.cardName}>{item.name}</div>
                    <div style={styles.cardDesc}>{item.desc}</div>
                    <div style={{ ...styles.cardTag, color: cat.color }}>ভিজিট করুন →</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========== RECITERS TAB ========== */}
      {activeTab === "reciters" && (
        <div>
          <div style={styles.reciterHeader}>
            <span style={{ color: "#c5a059", fontFamily: "'Amiri', serif", fontSize: 18 }}>أَحْسَنُ الْأَصْوَاتِ</span>
            <span style={{ color: "#555", fontSize: 13, marginLeft: 12 }}>বিশ্বের সেরা কারীদের সম্পূর্ণ কুরআন তেলাওয়াত</span>
          </div>

          {filteredReciters.length === 0 && (
            <div style={styles.emptyMsg}>কোনো ফলাফল পাওয়া যায়নি।</div>
          )}

          <div style={styles.reciterGrid}>
            {filteredReciters.map((r, i) => (
              <div key={i} className="reciter-card"
                style={{ ...styles.reciterCard, borderTop: `4px solid ${r.color}`, ...(r.featured ? styles.featuredCard : {}) }}>
                {r.featured && (
                  <div style={styles.featuredBadge}>⭐ বিশেষ পছন্দ</div>
                )}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                  <div style={{ ...styles.reciterIcon, background: r.color }}>
                    {r.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={styles.reciterName}>{r.name}</div>
                    <div style={styles.reciterAr}>{r.nameAr}</div>
                    <div style={styles.reciterEn}>{r.nameEn}</div>
                  </div>
                </div>
                <div style={styles.reciterCountry}>{r.country}</div>
                <div style={styles.reciterDesc}>{r.desc}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer"
                    style={{ ...styles.reciterBtn, background: r.color }}>
                    🎧 MP3 Quran
                  </a>
                  <a href={r.url2} target="_blank" rel="noopener noreferrer"
                    style={styles.reciterBtn2}>
                    🔗 Quran Central
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* অতিরিক্ত অডিও সাইট */}
          <div style={{ marginTop: 24, background: "#f0f7f3", borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ fontWeight: 700, color: "#1a6b3a", marginBottom: 10, fontSize: 14 }}>
              🌐 আরও তেলাওয়াত খুঁজুন
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { name: "MP3Quran.net", url: "https://mp3quran.net/ar", desc: "সব কারীর তালিকা" },
                { name: "Quran Central", url: "https://qurancentral.com", desc: "হাই-কোয়ালিটি অডিও" },
                { name: "EveryAyah.com", url: "https://everyayah.com", desc: "আয়াত ভিত্তিক অডিও" },
                { name: "Quran.com Audio", url: "https://quran.com", desc: "অনলাইন প্লেয়ার" },
              ].map((site, i) => (
                <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
                  style={styles.extraSiteBtn}>
                  {site.name} — {site.desc} →
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========== SURAHS TAB ========== */}
      {activeTab === "surahs" && (
        <div>
          <div style={styles.surahCount}>
            মোট {filteredSurahs.length}টি সূরা
          </div>
          <div style={styles.surahGrid}>
            {filteredSurahs.map((surah) => (
              <a key={surah.num} href={`https://quran.com/${surah.num}`}
                target="_blank" rel="noopener noreferrer"
                style={styles.surahCard} className="surah-card">
                <span style={styles.surahNum}>{surah.num}</span>
                <span style={styles.surahName}>
                  {surah.name}
                  <br />
                  <small style={{ fontSize: 10, opacity: 0.65 }}>{surah.en}</small>
                </span>
                <span style={styles.surahAyat}>{surah.ayat} আয়াত</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================
   STYLES
========================= */
const styles = {
  wrapper: {
    fontFamily: "'Noto Sans Bengali', 'Segoe UI', sans-serif",
    padding: "10px 0",
    maxWidth: 1100,
    margin: "0 auto",
  },
  banner: {
    background: "linear-gradient(135deg, #1a6b3a, #0d4a28)",
    borderRadius: 12,
    padding: "24px 20px",
    textAlign: "center",
    marginBottom: 20,
  },
  arabicText: { color: "#c5a059", fontSize: 22, fontFamily: "'Amiri', serif", marginBottom: 8 },
  bannerTitle: { color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 4 },
  bannerSub: { color: "rgba(255,255,255,0.75)", fontSize: 13 },

  tabRow: { display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" },
  tabBtn: {
    padding: "9px 18px",
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#f5f5f5",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "'Noto Sans Bengali', sans-serif",
    fontWeight: 500,
    color: "#555",
  },
  tabBtnActive: { background: "#1a6b3a", color: "#fff", border: "1px solid #1a6b3a" },

  search: {
    width: "100%",
    padding: "10px 14px",
    marginBottom: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "'Noto Sans Bengali', sans-serif",
    boxSizing: "border-box",
  },
  emptyMsg: { textAlign: "center", color: "#999", padding: "40px 0", fontSize: 14 },

  // Site cards
  catBlock: { marginBottom: 24 },
  catTitle: { borderLeft: "4px solid", paddingLeft: 10, marginBottom: 12, fontSize: 15, fontWeight: 700 },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 10 },
  card: {
    padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 8,
    textDecoration: "none", color: "inherit", display: "block", background: "#fff",
    transition: "box-shadow 0.15s, transform 0.15s",
  },
  cardDot: { width: 7, height: 7, borderRadius: "50%", marginBottom: 6 },
  cardName: { fontWeight: 700, fontSize: 14, marginBottom: 4, color: "#222" },
  cardDesc: { fontSize: 12, color: "#666", marginBottom: 6, lineHeight: 1.5 },
  cardTag: { fontSize: 12, fontWeight: 600 },

  // Reciters
  reciterHeader: {
    background: "#fdf9f0",
    border: "1px solid #e8d9b0",
    borderRadius: 8,
    padding: "10px 14px",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  reciterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: 14,
  },
  reciterCard: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: 10,
    padding: "14px 16px",
    position: "relative",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  featuredCard: {
    background: "#f6fff9",
    border: "1px solid #b2dfcb",
    boxShadow: "0 4px 16px rgba(26,107,58,0.12)",
  },
  featuredBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    background: "#ffce00",
    color: "#333",
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 8px",
    borderRadius: 20,
  },
  reciterIcon: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  },
  reciterName: { fontWeight: 700, fontSize: 14, color: "#1a1a1a", marginBottom: 2 },
  reciterAr: { fontSize: 13, color: "#555", fontFamily: "'Amiri', serif" },
  reciterEn: { fontSize: 11, color: "#888" },
  reciterCountry: { fontSize: 12, color: "#777", margin: "6px 0 4px" },
  reciterDesc: { fontSize: 12, color: "#555", lineHeight: 1.6 },
  reciterBtn: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 6,
    color: "#fff",
    fontSize: 12,
    textDecoration: "none",
    fontWeight: 600,
  },
  reciterBtn2: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 6,
    color: "#1a6b3a",
    fontSize: 12,
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid #1a6b3a",
    background: "transparent",
  },
  extraSiteBtn: {
    display: "inline-block",
    padding: "7px 12px",
    background: "#fff",
    border: "1px solid #c8e6c9",
    borderRadius: 6,
    fontSize: 12,
    color: "#1a6b3a",
    textDecoration: "none",
    fontWeight: 500,
  },

  // Surahs
  surahCount: { color: "#888", fontSize: 13, marginBottom: 10 },
  surahGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 8 },
  surahCard: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "10px 12px",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    textDecoration: "none",
    color: "inherit",
    background: "#fff",
    transition: "border-color 0.15s",
  },
  surahNum: {
    background: "#1a6b3a",
    color: "#fff",
    width: 26,
    height: 26,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 700,
    flexShrink: 0,
  },
  surahName: { fontWeight: 600, fontSize: 13, color: "#222", lineHeight: 1.6 },
  surahAyat: { fontSize: 11, color: "#888" },
};

export default Quran;