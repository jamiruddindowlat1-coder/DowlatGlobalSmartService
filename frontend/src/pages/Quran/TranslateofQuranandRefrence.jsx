import React, { useState } from "react";

/* =========================
   DATA
========================= */
const QURAN_SITES = [
  {
    category: "📖 অনলাইন কুরআন পড়ুন",
    color: "#1a6b3a",
    items: [
      { name: "Al-Quran.info", url: "https://al-quran.info", desc: "বাংলা অনুবাদসহ সম্পূর্ণ কুরআন" },
      { name: "Quran.com", url: "https://quran.com", desc: "আরবি + অনুবাদ + তাফসির" },
      { name: "IslamicFinder Quran", url: "https://www.islamicfinder.org/quran", desc: "সূরা ও আয়াত খোঁজার সুবিধা" },
      { name: "iQuran Online", url: "https://www.iquranpro.com", desc: "সুন্দর ইন্টারফেসে কুরআন তেলাওয়াত" },
      { name: "Tanzil Quran", url: "https://tanzil.net", desc: "বিশুদ্ধ আরবি টেক্সট" },
      { name: "Quran KS", url: "https://quran.ksu.edu.sa", desc: "তিলাওয়াত + অনুবাদ" },
    ],
  },
  {
    category: "🎧 অডিও তেলাওয়াত",
    color: "#8e44ad",
    items: [
      { name: "MP3Quran.net", url: "https://mp3quran.net/ar", desc: "বিখ্যাত কারীদের তেলাওয়াত" },
      { name: "Quran Central", url: "https://qurancentral.com", desc: "হাই-কোয়ালিটি অডিও" },
      { name: "EveryAyah.com", url: "https://everyayah.com", desc: "আয়াত ভিত্তিক অডিও" },
      { name: "Mishary Rashid", url: "https://mp3quran.net/mishary", desc: "মিশারি রাশিদ" },
    ],
  },
];

/* =========================
   SURAH LIST
========================= */
const SURAHS = [
{num:1,name:"আল-ফাতিহা",en:"Al-Fatiha",meaningBn:"সূচনা / আরম্ভ",meaningEn:"The Opening",ayat:7},
{num:2,name:"আল-বাকারা",en:"Al-Baqarah",meaningBn:"গরু",meaningEn:"The Cow",ayat:286},
{num:3,name:"আলে-ইমরান",en:"Aal-E-Imran",meaningBn:"ইমরান পরিবারের লোক",meaningEn:"Family of Imran",ayat:200},
{num:4,name:"আন-নিসা",en:"An-Nisa",meaningBn:"নারীগণ",meaningEn:"The Women",ayat:176},
{num:5,name:"আল-মায়িদা",en:"Al-Ma'idah",meaningBn:"খাদ্যপূর্ণ দস্তরখানা",meaningEn:"The Table Spread",ayat:120},
{num:6,name:"আল-আনআম",en:"Al-An'am",meaningBn:"গৃহপালিত পশু",meaningEn:"The Cattle",ayat:165},
{num:7,name:"আল-আরাফ",en:"Al-A'raf",meaningBn:"উঁচু স্থান",meaningEn:"The Heights",ayat:206},
{num:8,name:"আল-আনফাল",en:"Al-Anfal",meaningBn:"যুদ্ধলব্ধ সম্পদ",meaningEn:"The Spoils of War",ayat:75},
{num:9,name:"আত-তাওবা",en:"At-Tawbah",meaningBn:"অনুশোচনা / তওবা",meaningEn:"Repentance",ayat:129},
{num:10,name:"ইউনুস",en:"Yunus",meaningBn:"নবি ইউনুস (আঃ)",meaningEn:"Prophet Jonah",ayat:109},
{num:11,name:"হুদ",en:"Hud",meaningBn:"নবি হুদ (আঃ)",meaningEn:"Prophet Hud",ayat:123},
{num:12,name:"ইউসুফ",en:"Yusuf",meaningBn:"নবি ইউসুফ (আঃ)",meaningEn:"Prophet Joseph",ayat:111},
{num:13,name:"আর-রাদ",en:"Ar-Ra'd",meaningBn:"বজ্রধ্বনি",meaningEn:"The Thunder",ayat:43},
{num:14,name:"ইব্রাহিম",en:"Ibrahim",meaningBn:"নবি ইব্রাহিম (আঃ)",meaningEn:"Abraham",ayat:52},
{num:15,name:"আল-হিজর",en:"Al-Hijr",meaningBn:"পাথুরে অঞ্চল",meaningEn:"The Rocky Tract",ayat:99},
{num:16,name:"আন-নাহল",en:"An-Nahl",meaningBn:"মৌমাছি",meaningEn:"The Bee",ayat:128},
{num:17,name:"আল-ইসরা",en:"Al-Isra",meaningBn:"রাত্রি ভ্রমণ",meaningEn:"The Night Journey",ayat:111},
{num:18,name:"আল-কাহফ",en:"Al-Kahf",meaningBn:"গুহা",meaningEn:"The Cave",ayat:110},
{num:19,name:"মারইয়াম",en:"Maryam",meaningBn:"মারইয়াম (আঃ)",meaningEn:"Mary",ayat:98},
{num:20,name:"ত্ব-হা",en:"Ta-Ha",meaningBn:"রহস্যময় অক্ষর",meaningEn:"Ta-Ha",ayat:135},
{num:21,name:"আল-আম্বিয়া",en:"Al-Anbiya",meaningBn:"নবীগণ",meaningEn:"The Prophets",ayat:112},
{num:22,name:"আল-হাজ্জ",en:"Al-Hajj",meaningBn:"হজ",meaningEn:"The Pilgrimage",ayat:78},
{num:23,name:"আল-মুমিনুন",en:"Al-Mu'minun",meaningBn:"মুমিনগণ",meaningEn:"The Believers",ayat:118},
{num:24,name:"আন-নূর",en:"An-Nur",meaningBn:"আলো",meaningEn:"The Light",ayat:64},
{num:25,name:"আল-ফুরকান",en:"Al-Furqan",meaningBn:"সত্য-মিথ্যার পার্থক্যকারী",meaningEn:"The Criterion",ayat:77},
{num:26,name:"আশ-শুআরা",en:"Ash-Shu'ara",meaningBn:"কবিগণ",meaningEn:"The Poets",ayat:227},
{num:27,name:"আন-নামল",en:"An-Naml",meaningBn:"পিঁপড়া",meaningEn:"The Ant",ayat:93},
{num:28,name:"আল-কাসাস",en:"Al-Qasas",meaningBn:"কাহিনী",meaningEn:"The Stories",ayat:88},
{num:29,name:"আল-আনকাবুত",en:"Al-Ankabut",meaningBn:"মাকড়সা",meaningEn:"The Spider",ayat:69},
{num:30,name:"আর-রুম",en:"Ar-Rum",meaningBn:"রোমান সাম্রাজ্য",meaningEn:"The Romans",ayat:60},
{num:31,name:"লুকমান",en:"Luqman",meaningBn:"লুকমান",meaningEn:"Luqman",ayat:34},
{num:32,name:"আস-সাজদা",en:"As-Sajdah",meaningBn:"সিজদা",meaningEn:"The Prostration",ayat:30},
{num:33,name:"আল-আহযাব",en:"Al-Ahzab",meaningBn:"জোটবদ্ধ বাহিনী",meaningEn:"The Combined Forces",ayat:73},
{num:34,name:"সাবা",en:"Saba",meaningBn:"সাবা জাতি",meaningEn:"Sheba",ayat:54},
{num:35,name:"ফাতির",en:"Fatir",meaningBn:"সৃষ্টিকর্তা",meaningEn:"The Originator",ayat:45},
{num:36,name:"ইয়াসিন",en:"Ya-Sin",meaningBn:"রহস্যময় অক্ষর",meaningEn:"Ya-Sin",ayat:83},
{num:37,name:"আস-সাফফাত",en:"As-Saffat",meaningBn:"সারিবদ্ধগণ",meaningEn:"Those Ranged in Ranks",ayat:182},
{num:38,name:"সোয়াদ",en:"Sad",meaningBn:"রহস্যময় অক্ষর",meaningEn:"Sad",ayat:88},
{num:39,name:"আয-যুমার",en:"Az-Zumar",meaningBn:"দলসমূহ",meaningEn:"The Groups",ayat:75},
{num:40,name:"গাফির",en:"Ghafir",meaningBn:"ক্ষমাকারী",meaningEn:"The Forgiver",ayat:85},
{num:41,name:"ফুস্সিলাত",en:"Fussilat",meaningBn:"বিস্তারিত বর্ণিত",meaningEn:"Explained in Detail",ayat:54},
{num:42,name:"আশ-শূরা",en:"Ash-Shura",meaningBn:"পরামর্শ",meaningEn:"The Consultation",ayat:53},
{num:43,name:"আয-যুখরুফ",en:"Az-Zukhruf",meaningBn:"সোনার অলংকার",meaningEn:"The Gold Adornments",ayat:89},
{num:44,name:"আদ-দুখান",en:"Ad-Dukhan",meaningBn:"ধোঁয়া",meaningEn:"The Smoke",ayat:59},
{num:45,name:"আল-জাসিয়া",en:"Al-Jathiyah",meaningBn:"নতজানু",meaningEn:"The Crouching",ayat:37},
{num:46,name:"আল-আহকাফ",en:"Al-Ahqaf",meaningBn:"বালুর পাহাড়",meaningEn:"The Wind-Curved Sandhills",ayat:35},
{num:47,name:"মুহাম্মদ",en:"Muhammad",meaningBn:"নবী মুহাম্মদ (সাঃ)",meaningEn:"Muhammad",ayat:38},
{num:48,name:"আল-ফাতহ",en:"Al-Fath",meaningBn:"বিজয়",meaningEn:"The Victory",ayat:29},
{num:49,name:"আল-হুজুরাত",en:"Al-Hujurat",meaningBn:"কক্ষসমূহ",meaningEn:"The Rooms",ayat:18},
{num:50,name:"ক্বাফ",en:"Qaf",meaningBn:"রহস্যময় অক্ষর",meaningEn:"Qaf",ayat:45},
{num:51,name:"আয-যারিয়াত",en:"Adh-Dhariyat",meaningBn:"ঝঞ্ঝাবায়ু",meaningEn:"The Winnowing Winds",ayat:60},
{num:52,name:"আত-তুর",en:"At-Tur",meaningBn:"পাহাড়",meaningEn:"The Mount",ayat:49},
{num:53,name:"আন-নাজম",en:"An-Najm",meaningBn:"তারকা",meaningEn:"The Star",ayat:62},
{num:54,name:"আল-কামার",en:"Al-Qamar",meaningBn:"চাঁদ",meaningEn:"The Moon",ayat:55},
{num:55,name:"আর-রাহমান",en:"Ar-Rahman",meaningBn:"পরম দয়ালু আল্লাহ",meaningEn:"The Most Merciful",ayat:78},
{num:56,name:"আল-ওয়াকিয়া",en:"Al-Waqi'ah",meaningBn:"মহাঘটনা",meaningEn:"The Inevitable",ayat:96},
{num:57,name:"আল-হাদিদ",en:"Al-Hadid",meaningBn:"লোহা",meaningEn:"The Iron",ayat:29},
{num:58,name:"আল-মুজাদালা",en:"Al-Mujadila",meaningBn:"বিতর্ককারিণী",meaningEn:"The Pleading Woman",ayat:22},
{num:59,name:"আল-হাশর",en:"Al-Hashr",meaningBn:"সমাবেশ",meaningEn:"The Exile",ayat:24},
{num:60,name:"আল-মুমতাহানা",en:"Al-Mumtahanah",meaningBn:"পরীক্ষিত নারী",meaningEn:"She that is to be Examined",ayat:13},
{num:61,name:"আস-সাফ",en:"As-Saf",meaningBn:"সারিবদ্ধ",meaningEn:"The Ranks",ayat:14},
{num:62,name:"আল-জুমুআ",en:"Al-Jumu'ah",meaningBn:"শুক্রবার",meaningEn:"Friday",ayat:11},
{num:63,name:"আল-মুনাফিকুন",en:"Al-Munafiqun",meaningBn:"কপটাচারী",meaningEn:"The Hypocrites",ayat:11},
{num:64,name:"আত-তাগাবুন",en:"At-Taghabun",meaningBn:"পারস্পরিক ক্ষতি",meaningEn:"Mutual Disillusion",ayat:18},
{num:65,name:"আত-তালাক",en:"At-Talaq",meaningBn:"তালাক",meaningEn:"The Divorce",ayat:12},
{num:66,name:"আত-তাহরিম",en:"At-Tahrim",meaningBn:"নিষিদ্ধকরণ",meaningEn:"The Prohibition",ayat:12},
{num:67,name:"আল-মুলক",en:"Al-Mulk",meaningBn:"রাজত্ব",meaningEn:"The Kingdom",ayat:30},
{num:68,name:"আল-কালাম",en:"Al-Qalam",meaningBn:"কলম",meaningEn:"The Pen",ayat:52},
{num:69,name:"আল-হাক্কা",en:"Al-Haqqah",meaningBn:"অবশ্যম্ভাবী",meaningEn:"The Reality",ayat:52},
{num:70,name:"আল-মাআরিজ",en:"Al-Ma'arij",meaningBn:"উর্ধ্বারোহণের সোপান",meaningEn:"The Ascending Stairways",ayat:44},
{num:71,name:"নূহ",en:"Nuh",meaningBn:"নবি নূহ (আঃ)",meaningEn:"Noah",ayat:28},
{num:72,name:"আল-জিন",en:"Al-Jinn",meaningBn:"জিন",meaningEn:"The Jinn",ayat:28},
{num:73,name:"আল-মুযযাম্মিল",en:"Al-Muzzammil",meaningBn:"চাদর আবৃত",meaningEn:"The Enshrouded One",ayat:20},
{num:74,name:"আল-মুদ্দাস্সির",en:"Al-Muddaththir",meaningBn:"পোশাকাবৃত",meaningEn:"The Cloaked One",ayat:56},
{num:75,name:"আল-কিয়ামা",en:"Al-Qiyamah",meaningBn:"পুনরুত্থান",meaningEn:"The Resurrection",ayat:40},
{num:76,name:"আল-ইনসান",en:"Al-Insan",meaningBn:"মানুষ",meaningEn:"Man",ayat:31},
{num:77,name:"আল-মুরসালাত",en:"Al-Mursalat",meaningBn:"প্রেরিত বায়ু",meaningEn:"Those Sent Forth",ayat:50},
{num:78,name:"আন-নাবা",en:"An-Naba",meaningBn:"মহা সংবাদ",meaningEn:"The Great News",ayat:40},
{num:79,name:"আন-নাযিআত",en:"An-Nazi'at",meaningBn:"যারা টেনে বের করে",meaningEn:"Those Who Drag Forth",ayat:46},
{num:80,name:"আবাসা",en:"Abasa",meaningBn:"ভ্রুকুঞ্চন করলেন",meaningEn:"He Frowned",ayat:42},
{num:81,name:"আত-তাকউইর",en:"At-Takwir",meaningBn:"আচ্ছাদিতকরণ",meaningEn:"The Overthrowing",ayat:29},
{num:82,name:"আল-ইনফিতার",en:"Al-Infitar",meaningBn:"বিদীর্ণ হওয়া",meaningEn:"The Cleaving",ayat:19},
{num:83,name:"আল-মুতাফফিফিন",en:"Al-Mutaffifin",meaningBn:"মাপে কম দেওয়া",meaningEn:"The Defrauding",ayat:36},
{num:84,name:"আল-ইনশিকাক",en:"Al-Inshiqaq",meaningBn:"বিভক্ত হওয়া",meaningEn:"The Sundering",ayat:25},
{num:85,name:"আল-বুরুজ",en:"Al-Buruj",meaningBn:"রাশিচক্র",meaningEn:"The Mansions of the Stars",ayat:22},
{num:86,name:"আত-তারিক",en:"At-Tariq",meaningBn:"রাতের আগন্তুক",meaningEn:"The Morning Star",ayat:17},
{num:87,name:"আল-আলা",en:"Al-A'la",meaningBn:"সর্বোচ্চ",meaningEn:"The Most High",ayat:19},
{num:88,name:"আল-গাশিয়া",en:"Al-Ghashiyah",meaningBn:"বিভীষিকা",meaningEn:"The Overwhelming",ayat:26},
{num:89,name:"আল-ফাজর",en:"Al-Fajr",meaningBn:"ভোর",meaningEn:"The Dawn",ayat:30},
{num:90,name:"আল-বালাদ",en:"Al-Balad",meaningBn:"শহর",meaningEn:"The City",ayat:20},
{num:91,name:"আশ-শামস",en:"Ash-Shams",meaningBn:"সূর্য",meaningEn:"The Sun",ayat:15},
{num:92,name:"আল-লাইল",en:"Al-Layl",meaningBn:"রাত",meaningEn:"The Night",ayat:21},
{num:93,name:"আদ-দুহা",en:"Ad-Duhaa",meaningBn:"পূর্বাহ্ন",meaningEn:"The Morning Hours",ayat:11},
{num:94,name:"আশ-শারহ",en:"Ash-Sharh",meaningBn:"বক্ষ উন্মোচন",meaningEn:"The Relief",ayat:8},
{num:95,name:"আত-তিন",en:"At-Tin",meaningBn:"ডুমুর",meaningEn:"The Fig",ayat:8},
{num:96,name:"আল-আলাক",en:"Al-Alaq",meaningBn:"রক্তপিণ্ড",meaningEn:"The Clot",ayat:19},
{num:97,name:"আল-কদর",en:"Al-Qadr",meaningBn:"মহিমান্বিত রাত",meaningEn:"The Power",ayat:5},
{num:98,name:"আল-বাইয়িনা",en:"Al-Bayyinah",meaningBn:"সুস্পষ্ট প্রমাণ",meaningEn:"The Clear Proof",ayat:8},
{num:99,name:"আয-যিলযাল",en:"Az-Zalzalah",meaningBn:"ভূমিকম্প",meaningEn:"The Earthquake",ayat:8},
{num:100,name:"আল-আদিয়াত",en:"Al-Adiyat",meaningBn:"দৌড়ন্ত ঘোড়া",meaningEn:"The Courser",ayat:11},
{num:101,name:"আল-কারিআ",en:"Al-Qari'ah",meaningBn:"মহাবিপদ",meaningEn:"The Calamity",ayat:11},
{num:102,name:"আত-তাকাসুর",en:"At-Takathur",meaningBn:"প্রাচুর্যের প্রতিযোগিতা",meaningEn:"The Rivalry in World Increase",ayat:8},
{num:103,name:"আল-আসর",en:"Al-Asr",meaningBn:"যুগ / সময়",meaningEn:"The Declining Day",ayat:3},
{num:104,name:"আল-হুমাযা",en:"Al-Humazah",meaningBn:"পরনিন্দাকারী",meaningEn:"The Traducer",ayat:9},
{num:105,name:"আল-ফিল",en:"Al-Fil",meaningBn:"হাতি",meaningEn:"The Elephant",ayat:5},
{num:106,name:"কুরাইশ",en:"Quraysh",meaningBn:"কুরাইশ গোত্র",meaningEn:"Quraysh",ayat:4},
{num:107,name:"আল-মাউন",en:"Al-Ma'un",meaningBn:"ছোট উপকার",meaningEn:"The Small Kindnesses",ayat:7},
{num:108,name:"আল-কাউসার",en:"Al-Kawthar",meaningBn:"প্রাচুর্য",meaningEn:"Abundance",ayat:3},
{num:109,name:"আল-কাফিরুন",en:"Al-Kafirun",meaningBn:"অবিশ্বাসীগণ",meaningEn:"The Disbelievers",ayat:6},
{num:110,name:"আন-নাসর",en:"An-Nasr",meaningBn:"সাহায্য",meaningEn:"The Divine Support",ayat:3},
{num:111,name:"আল-মাসাদ",en:"Al-Masad",meaningBn:"আঁশ তন্তু",meaningEn:"The Palm Fibre",ayat:5},
{num:112,name:"আল-ইখলাস",en:"Al-Ikhlas",meaningBn:"একত্ববাদ",meaningEn:"Sincerity / Oneness",ayat:4},
{num:113,name:"আল-ফালাক",en:"Al-Falaq",meaningBn:"ভোর",meaningEn:"The Dawn",ayat:5},
{num:114,name:"আন-নাস",en:"An-Nas",meaningBn:"মানবজাতি",meaningEn:"Mankind",ayat:6},
];

/* =========================
   AI REFERENCE FINDER SECTION
========================= */
const EXAMPLES = [
  "বন্যায় ক্ষতিগ্রস্ত মানুষদের সাহায্য করা",
  "পিতামাতার প্রতি সদ্ব্যবহার",
  "মিথ্যা ও প্রতারণার পরিণাম",
  "রমজানে রোজার ফজিলত",
  "দুর্নীতি ও অন্যায়",
  "পরিবেশ রক্ষা",
];

const AIReferenceFinder = () => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const findReferences = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);

    const prompt = `আপনি একজন ইসলামিক স্কলার। নিচের বিষয় বা ঘটনার সাথে সম্পর্কিত কুরআনের আয়াত এবং হাদিসের রেফারেন্স বাংলায় দিন।

বিষয়/ঘটনা: "${topic}"

নিচের ফরম্যাটে উত্তর দিন:

## কুরআনের আয়াত
প্রতিটি আয়াতের জন্য:
- আরবি আয়াত
- বাংলা অনুবাদ
- সূরার নাম ও আয়াত নম্বর
- সংক্ষিপ্ত প্রাসঙ্গিকতা

## হাদিসের রেফারেন্স
প্রতিটি হাদিসের জন্য:
- হাদিসের বাংলা অনুবাদ
- রাবি ও সূত্র (বুখারি/মুসলিম/তিরমিযি ইত্যাদি হাদিস নম্বরসহ)
- সংক্ষিপ্ত প্রাসঙ্গিকতা

## ইসলামিক দৃষ্টিভঙ্গি
৩-৪ বাক্যে সারসংক্ষেপ।

কমপক্ষে ৩টি আয়াত ও ৩টি হাদিস দিন। শুধুমাত্র সহিহ রেফারেন্স দিন।`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map((i) => i.text || "").join("") || "";
      if (!text) throw new Error("কোনো উত্তর পাওয়া যায়নি।");
      setResult(text);
    } catch (err) {
      setError(err.message || "সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const parseResult = (text) => {
    const sections = text.split(/##\s+/);
    return sections
      .filter((s) => s.trim())
      .map((s, i) => {
        const nl = s.indexOf("\n");
        const heading = nl > -1 ? s.substring(0, nl).trim() : s.trim();
        const body = nl > -1 ? s.substring(nl).trim() : "";
        const icons = { "কুরআন": "📖", "হাদিস": "📜", "ইসলামিক": "🕌", "দৃষ্টিভঙ্গি": "🕌" };
        let icon = "📄";
        for (const [k, v] of Object.entries(icons)) {
          if (heading.includes(k)) { icon = v; break; }
        }
        return { heading, body, icon, key: i };
      });
  };

  return (
    <div style={aiStyles.wrapper}>
      {/* Header */}
      <div style={aiStyles.header}>
        <div style={aiStyles.arabic}>الْقُرْآنُ وَالْحَدِيثُ</div>
        <div style={aiStyles.title}>🤖 AI কুরআন ও হাদিস রেফারেন্স ফাইন্ডার</div>
        <div style={aiStyles.subtitle}>
          সমসাময়িক যেকোনো ঘটনা বা বিষয় লিখুন — প্রাসঙ্গিক আয়াত ও হাদিস খুঁজে পাবেন
        </div>
      </div>

      {/* Example buttons */}
      <div style={aiStyles.exLabel}>উদাহরণ বিষয়:</div>
      <div style={aiStyles.exRow}>
        {EXAMPLES.map((ex, i) => (
          <button key={i} style={aiStyles.exBtn} onClick={() => { setTopic(ex); setResult(null); }}>
            {ex}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={aiStyles.inputBox}>
        <label style={aiStyles.label}>আপনার ঘটনা বা বিষয়টি বাংলায় লিখুন:</label>
        <textarea
          style={aiStyles.textarea}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="যেমন: আজকে দেশে ভয়াবহ বন্যা হয়েছে। হাজার হাজার মানুষ গৃহহীন। এই পরিস্থিতিতে ইসলামের দৃষ্টিতে আমাদের করণীয় কী..."
          rows={4}
          onKeyDown={(e) => { if (e.ctrlKey && e.key === "Enter") findReferences(); }}
        />
        <div style={aiStyles.btnRow}>
          <button
            style={{ ...aiStyles.btnMain, opacity: (loading || !topic.trim()) ? 0.65 : 1, cursor: (loading || !topic.trim()) ? "not-allowed" : "pointer" }}
            onClick={findReferences}
            disabled={loading || !topic.trim()}
          >
            {loading ? "⏳ খোঁজা হচ্ছে..." : "🔍 রেফারেন্স খুঁজুন"}
          </button>
          <button
            style={aiStyles.btnClear}
            onClick={() => { setTopic(""); setResult(null); setError(null); }}
          >
            পরিষ্কার করুন
          </button>
        </div>
        <div style={aiStyles.hint}>টিপস: Ctrl + Enter চাপলেও সার্চ হবে</div>
      </div>

      {/* Loading */}
      {loading && (
        <div style={aiStyles.loadingBox}>
          <div style={aiStyles.spinnerWrap}>
            <div style={aiStyles.spinner} />
          </div>
          <div style={{ fontSize: 14, color: "#555" }}>কুরআন ও হাদিস থেকে রেফারেন্স বের করা হচ্ছে...</div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={aiStyles.errorBox}>⚠️ {error}</div>
      )}

      {/* Result */}
      {result && (
        <div>
          <div style={aiStyles.topicBadge}>
            <span style={{ color: "#888" }}>বিষয়:</span>
            <strong style={{ marginLeft: 6, color: "#222" }}>
              {topic.length > 90 ? topic.substring(0, 90) + "..." : topic}
            </strong>
          </div>
          {parseResult(result).map((sec) => (
            <div key={sec.key} style={aiStyles.resultCard}>
              <div style={aiStyles.resultHeader}>
                {sec.icon} {sec.heading}
              </div>
              <div style={aiStyles.resultBody}>
                {sec.body.split("\n").map((line, li) => (
                  <p key={li} style={{ margin: "3px 0", lineHeight: 1.85 }}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const aiStyles = {
  wrapper: { fontFamily: "'Noto Sans Bengali', sans-serif", padding: "10px 0" },
  header: {
    background: "linear-gradient(135deg, #0d3d22, #1a6b3a)",
    borderRadius: 10,
    padding: "20px 24px",
    textAlign: "center",
    marginBottom: 16,
  },
  arabic: { color: "#c5a059", fontSize: 18, marginBottom: 6, letterSpacing: 1 },
  title: { color: "#fff", fontWeight: "700", fontSize: 15, marginBottom: 4 },
  subtitle: { color: "rgba(255,255,255,0.72)", fontSize: 12 },

  exLabel: { fontSize: 12, color: "#777", marginBottom: 7 },
  exRow: { display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 14 },
  exBtn: {
    fontSize: 12, padding: "5px 11px",
    border: "1px solid #ccc", borderRadius: 20,
    background: "#f5f5f5", cursor: "pointer",
    fontFamily: "inherit", color: "#444",
  },

  inputBox: {
    border: "1px solid #ddd", borderRadius: 10,
    padding: "14px 16px", marginBottom: 14, background: "#fafafa",
  },
  label: { fontSize: 13, color: "#555", display: "block", marginBottom: 7 },
  textarea: {
    width: "100%", minHeight: 90, resize: "vertical",
    border: "1px solid #ddd", borderRadius: 8,
    padding: "10px 12px", fontSize: 14,
    fontFamily: "'Noto Sans Bengali', sans-serif",
    lineHeight: 1.7, boxSizing: "border-box",
    background: "#fff",
  },
  btnRow: { display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" },
  btnMain: {
    background: "#1a6b3a", color: "#fff",
    border: "none", borderRadius: 8,
    padding: "10px 20px", fontSize: 14,
    fontFamily: "inherit", fontWeight: "600",
  },
  btnClear: {
    background: "transparent", color: "#666",
    border: "1px solid #ccc", borderRadius: 8,
    padding: "10px 16px", fontSize: 14,
    fontFamily: "inherit", cursor: "pointer",
  },
  hint: { fontSize: 11, color: "#aaa", marginTop: 6 },

  loadingBox: {
    background: "#f0f7f3", borderRadius: 10,
    padding: "24px", textAlign: "center", marginBottom: 12,
  },
  spinnerWrap: { marginBottom: 10 },
  spinner: {
    width: 26, height: 26,
    border: "3px solid #cce8d8",
    borderTopColor: "#1a6b3a",
    borderRadius: "50%",
    animation: "spin 0.75s linear infinite",
    margin: "0 auto",
  },
  errorBox: {
    background: "#fff0f0", border: "1px solid #ffcccc",
    borderRadius: 8, padding: "12px 16px",
    fontSize: 13, color: "#c0392b", marginBottom: 12,
  },
  topicBadge: {
    background: "#f5f5f5", border: "1px solid #e0e0e0",
    borderRadius: 8, padding: "8px 14px",
    fontSize: 13, marginBottom: 12,
    display: "flex", alignItems: "center", flexWrap: "wrap",
  },
  resultCard: {
    border: "1px solid #ddd", borderRadius: 10,
    overflow: "hidden", marginBottom: 12,
  },
  resultHeader: {
    background: "#1a6b3a", color: "#fff",
    padding: "10px 16px", fontSize: 14, fontWeight: "600",
  },
  resultBody: {
    padding: "12px 16px", fontSize: 14,
    color: "#333", lineHeight: 1.85,
  },
};

/* =========================
   MAIN COMPONENT
========================= */
const Quran = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  const filteredSites = QURAN_SITES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (i) =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.desc.includes(search)
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div style={styles.wrapper}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* Banner */}
      <div style={styles.banner}>
        <div style={styles.arabicText}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <div style={styles.bannerSub}>পবিত্র কুরআন শরীফ পোর্টাল</div>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabRow}>
        {[
          { key: "home",      label: "🏠 কুরআন সাইট" },
          { key: "reference", label: "🤖 AI রেফারেন্স" },
          { key: "surahs",    label: "📜 সূরা তালিকা" },
        ].map((tab) => (
          <button
            key={tab.key}
            style={{ ...styles.tabBtn, ...(activeTab === tab.key ? styles.tabActive : {}) }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search (shown on home & surahs) */}
      {activeTab !== "reference" && (
        <input
          type="text"
          placeholder="🔍 সার্চ করুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      )}

      {/* HOME TAB */}
      {activeTab === "home" && (
        <div style={styles.mainGrid}>
          {/* Left: site links */}
          <div>
            {filteredSites.map((cat, ci) => (
              <div key={ci} style={styles.catBlock}>
                <h3 style={{ ...styles.catTitle, color: cat.color, borderLeftColor: cat.color }}>
                  {cat.category}
                </h3>
                <div style={styles.cardGrid}>
                  {cat.items.map((item, ii) => (
                    <a key={ii} href={item.url} target="_blank" rel="noopener noreferrer" style={styles.card}>
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

          {/* Right: quick surah list */}
          <div>
            <h3 style={styles.surahTitle}>📜 সূরা তালিকা</h3>
            <div style={styles.surahGrid}>
              {SURAHS.slice(0, 20).map((surah) => (
                <a
                  key={surah.num}
                  href={`https://quran.com/${surah.num}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.surahCard}
                >
                  <span style={styles.surahNum}>{surah.num}</span>
                  <span style={styles.surahName}>
                    {surah.name}<br />
                    <small style={{ fontSize: 11, opacity: 0.7 }}>{surah.en}</small>
                  </span>
                  <span style={styles.surahAyat}>{surah.ayat} আয়াত</span>
                </a>
              ))}
              <button style={styles.viewAllBtn} onClick={() => setActiveTab("surahs")}>
                সব সূরা দেখুন →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI REFERENCE TAB */}
      {activeTab === "reference" && <AIReferenceFinder />}

      {/* SURAHS TAB */}
      {activeTab === "surahs" && (
        <div>
          <div style={styles.surahTitle}>📜 সম্পূর্ণ সূরা তালিকা ({SURAHS.filter(s =>
            s.name.includes(search) || s.en.toLowerCase().includes(search.toLowerCase()) || String(s.num).includes(search)
          ).length}টি)</div>
          <div style={styles.surahGridFull}>
            {SURAHS.filter(s =>
              s.name.includes(search) ||
              s.en.toLowerCase().includes(search.toLowerCase()) ||
              String(s.num).includes(search)
            ).map((surah) => (
              <a
                key={surah.num}
                href={`https://quran.com/${surah.num}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.surahCard}
              >
                <span style={styles.surahNum}>{surah.num}</span>
                <span style={styles.surahName}>
                  {surah.name}<br />
                  <small style={{ fontSize: 11, opacity: 0.7 }}>{surah.en}</small>
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
  wrapper: { fontFamily: "'Noto Sans Bengali', sans-serif", padding: "10px 0" },
  banner: {
    background: "linear-gradient(135deg, #1a6b3a, #0d4a28)",
    borderRadius: 10, padding: 24,
    textAlign: "center", marginBottom: 20,
  },
  arabicText: { color: "#c5a059", fontSize: 22, marginBottom: 8 },
  bannerSub: { color: "#fff", fontWeight: "700" },

  tabRow: { display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" },
  tabBtn: {
    padding: "9px 18px",
    border: "1px solid #ddd", borderRadius: 8,
    background: "#f5f5f5", cursor: "pointer",
    fontSize: 13, fontFamily: "'Noto Sans Bengali', sans-serif",
    fontWeight: "500", color: "#555",
  },
  tabActive: { background: "#1a6b3a", color: "#fff", border: "1px solid #1a6b3a" },

  search: {
    width: "100%", padding: 10, marginBottom: 20,
    border: "1px solid #ddd", borderRadius: 8,
    fontSize: 14, fontFamily: "inherit", boxSizing: "border-box",
  },

  mainGrid: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 },

  catBlock: { marginBottom: 20 },
  catTitle: { borderLeft: "4px solid", paddingLeft: 10, marginBottom: 10 },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 10 },
  card: {
    padding: 10, border: "1px solid #ddd",
    borderRadius: 6, textDecoration: "none", color: "inherit",
    display: "block", background: "#fff",
  },
  cardDot: { width: 6, height: 6, borderRadius: "50%", marginBottom: 5 },
  cardName: { fontWeight: "700", fontSize: 14, color: "#222" },
  cardDesc: { fontSize: 12, color: "#666", margin: "4px 0" },
  cardTag: { fontSize: 12, fontWeight: "600" },

  surahTitle: { fontWeight: "800", marginBottom: 10, fontSize: 15, color: "#222" },
  surahGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 8 },
  surahGridFull: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8 },
  surahCard: {
    display: "flex", flexDirection: "column", gap: 4,
    padding: 10, border: "1px solid #ddd",
    borderRadius: 6, textDecoration: "none", color: "inherit",
    background: "#fff",
  },
  surahNum: { fontWeight: "700", color: "#1a6b3a", fontSize: 13 },
  surahName: { fontWeight: "600", fontSize: 13, color: "#222" },
  surahAyat: { fontSize: 11, color: "#888" },

  viewAllBtn: {
    padding: "10px", border: "1px dashed #1a6b3a",
    borderRadius: 6, background: "#f0f9f4",
    color: "#1a6b3a", cursor: "pointer",
    fontSize: 13, fontFamily: "inherit", fontWeight: "600",
    textAlign: "center",
  },
};

export default Quran;