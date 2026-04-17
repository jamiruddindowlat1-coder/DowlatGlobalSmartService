import { useState } from "react";

const gamesData = [
  {
    category: "⚽ টিম স্পোর্টস",
    color: "#1D9E75",
    bg: "#E1F5EE",
    games: [
      { name: "ফুটবল (Soccer)",    origin: "বিশ্বব্যাপী",          video: "https://www.youtube.com/results?search_query=football+sport+highlights" },
      { name: "ক্রিকেট",           origin: "ইংল্যান্ড",            video: "https://www.youtube.com/results?search_query=cricket+match+highlights" },
      { name: "বাস্কেটবল",         origin: "আমেরিকা",              video: "https://www.youtube.com/results?search_query=basketball+game+highlights" },
      { name: "ভলিবল",             origin: "আমেরিকা",              video: "https://www.youtube.com/results?search_query=volleyball+match+highlights" },
      { name: "রাগবি",             origin: "ইংল্যান্ড",            video: "https://www.youtube.com/results?search_query=rugby+match+highlights" },
      { name: "আমেরিকান ফুটবল",    origin: "আমেরিকা",              video: "https://www.youtube.com/results?search_query=american+football+highlights" },
      { name: "বেসবল",             origin: "আমেরিকা",              video: "https://www.youtube.com/results?search_query=baseball+game+highlights" },
      { name: "হ্যান্ডবল",         origin: "ইউরোপ",               video: "https://www.youtube.com/results?search_query=handball+match+highlights" },
      { name: "ফিল্ড হকি",         origin: "ভারত/ইংল্যান্ড",      video: "https://www.youtube.com/results?search_query=field+hockey+highlights" },
      { name: "আইস হকি",           origin: "কানাডা",               video: "https://www.youtube.com/results?search_query=ice+hockey+highlights" },
      { name: "নেটবল",             origin: "ইংল্যান্ড",            video: "https://www.youtube.com/results?search_query=netball+match+highlights" },
      { name: "ওয়াটার পোলো",       origin: "ইংল্যান্ড",            video: "https://www.youtube.com/results?search_query=water+polo+highlights" },
      { name: "লাক্রোস",           origin: "আমেরিকা",              video: "https://www.youtube.com/results?search_query=lacrosse+game+highlights" },
      { name: "আলটিমেট ফ্রিসবি",   origin: "আমেরিকা",              video: "https://www.youtube.com/results?search_query=ultimate+frisbee+highlights" },
      { name: "কাবাডি",            origin: "ভারত/বাংলাদেশ",        video: "https://www.youtube.com/results?search_query=kabaddi+match+highlights" },
      { name: "খো খো",             origin: "ভারত",                 video: "https://www.youtube.com/results?search_query=kho+kho+game+highlights" },
      { name: "সেপাক তাকরাও",      origin: "দক্ষিণ-পূর্ব এশিয়া", video: "https://www.youtube.com/results?search_query=sepak+takraw+highlights" },
      { name: "গায়েলিক ফুটবল",    origin: "আয়ারল্যান্ড",         video: "https://www.youtube.com/results?search_query=gaelic+football+highlights" },
      { name: "হার্লিং",           origin: "আয়ারল্যান্ড",         video: "https://www.youtube.com/results?search_query=hurling+match+highlights" },
      { name: "অস্ট্রেলিয়ান ফুটবল", origin: "অস্ট্রেলিয়া",       video: "https://www.youtube.com/results?search_query=australian+rules+football+highlights" },
    ],
  },
  {
    category: "🎾 র‍্যাকেট খেলা",
    color: "#185FA5",
    bg: "#E6F1FB",
    games: [
      { name: "টেনিস",         origin: "ফ্রান্স/ইংল্যান্ড", video: "https://www.youtube.com/results?search_query=tennis+match+highlights" },
      { name: "ব্যাডমিন্টন",   origin: "ভারত/ইংল্যান্ড",   video: "https://www.youtube.com/results?search_query=badminton+match+highlights" },
      { name: "টেবিল টেনিস",   origin: "ইংল্যান্ড",        video: "https://www.youtube.com/results?search_query=table+tennis+highlights" },
      { name: "স্কোয়াশ",      origin: "ইংল্যান্ড",        video: "https://www.youtube.com/results?search_query=squash+sport+highlights" },
      { name: "র‍্যাকেটবল",    origin: "আমেরিকা",          video: "https://www.youtube.com/results?search_query=racquetball+highlights" },
      { name: "পিকলবল",        origin: "আমেরিকা",          video: "https://www.youtube.com/results?search_query=pickleball+highlights" },
      { name: "প্যাডেল টেনিস", origin: "স্পেন",            video: "https://www.youtube.com/results?search_query=padel+tennis+highlights" },
    ],
  },
  {
    category: "🥊 কমব্যাট স্পোর্টস",
    color: "#D85A30",
    bg: "#FAECE7",
    games: [
      { name: "বক্সিং",         origin: "গ্রিস",          video: "https://www.youtube.com/results?search_query=boxing+match+highlights" },
      { name: "রেসলিং",         origin: "প্রাচীন গ্রিস",  video: "https://www.youtube.com/results?search_query=wrestling+match+highlights" },
      { name: "জুডো",           origin: "জাপান",          video: "https://www.youtube.com/results?search_query=judo+match+highlights" },
      { name: "কারাতে",         origin: "জাপান/ওকিনাওয়া", video: "https://www.youtube.com/results?search_query=karate+match+highlights" },
      { name: "তায়কোয়ান্দো",   origin: "কোরিয়া",        video: "https://www.youtube.com/results?search_query=taekwondo+match+highlights" },
      { name: "কুং ফু",         origin: "চীন",            video: "https://www.youtube.com/results?search_query=kung+fu+martial+arts" },
      { name: "মুয়াই থাই",      origin: "থাইল্যান্ড",    video: "https://www.youtube.com/results?search_query=muay+thai+fight+highlights" },
      { name: "ক্যাপোইরা",      origin: "ব্রাজিল",        video: "https://www.youtube.com/results?search_query=capoeira+highlights" },
      { name: "সুমো",           origin: "জাপান",          video: "https://www.youtube.com/results?search_query=sumo+wrestling+highlights" },
      { name: "ফেন্সিং",        origin: "ইউরোপ",          video: "https://www.youtube.com/results?search_query=fencing+sport+highlights" },
      { name: "এমএমএ",          origin: "আমেরিকা",        video: "https://www.youtube.com/results?search_query=mma+fight+highlights" },
      { name: "কুস্তি (ডেসি)",  origin: "দক্ষিণ এশিয়া",  video: "https://www.youtube.com/results?search_query=kushti+pehlwani+wrestling" },
      { name: "আইকিডো",         origin: "জাপান",          video: "https://www.youtube.com/results?search_query=aikido+martial+arts" },
      { name: "হাপকিডো",        origin: "কোরিয়া",        video: "https://www.youtube.com/results?search_query=hapkido+martial+arts" },
    ],
  },
  {
    category: "🏃 অ্যাথলেটিক্স",
    color: "#3B6D11",
    bg: "#EAF3DE",
    games: [
      { name: "স্প্রিন্ট / দৌড়", origin: "প্রাচীন গ্রিস",       video: "https://www.youtube.com/results?search_query=sprint+100m+race+highlights" },
      { name: "ম্যারাথন",         origin: "গ্রিস",               video: "https://www.youtube.com/results?search_query=marathon+race+highlights" },
      { name: "হার্ডলস",          origin: "ইংল্যান্ড",           video: "https://www.youtube.com/results?search_query=hurdles+race+highlights" },
      { name: "হাই জাম্প",        origin: "আন্তর্জাতিক",        video: "https://www.youtube.com/results?search_query=high+jump+highlights" },
      { name: "লং জাম্প",         origin: "প্রাচীন গ্রিস",       video: "https://www.youtube.com/results?search_query=long+jump+highlights" },
      { name: "ট্রিপল জাম্প",     origin: "আন্তর্জাতিক",        video: "https://www.youtube.com/results?search_query=triple+jump+highlights" },
      { name: "পোল ভল্ট",         origin: "নেদারল্যান্ড",       video: "https://www.youtube.com/results?search_query=pole+vault+highlights" },
      { name: "শট পুট",           origin: "স্কটল্যান্ড",        video: "https://www.youtube.com/results?search_query=shot+put+highlights" },
      { name: "ডিসকাস থ্রো",      origin: "প্রাচীন গ্রিস",       video: "https://www.youtube.com/results?search_query=discus+throw+highlights" },
      { name: "জ্যাভেলিন থ্রো",   origin: "প্রাচীন গ্রিস",       video: "https://www.youtube.com/results?search_query=javelin+throw+highlights" },
      { name: "হ্যামার থ্রো",     origin: "আয়ারল্যান্ড/স্কটল্যান্ড", video: "https://www.youtube.com/results?search_query=hammer+throw+highlights" },
      { name: "ডেকাথলন",          origin: "আন্তর্জাতিক",        video: "https://www.youtube.com/results?search_query=decathlon+highlights" },
      { name: "রেস ওয়াকিং",      origin: "আন্তর্জাতিক",        video: "https://www.youtube.com/results?search_query=race+walking+highlights" },
    ],
  },
  {
    category: "🏊 জলক্রীড়া",
    color: "#0F6E56",
    bg: "#E1F5EE",
    games: [
      { name: "সাঁতার",                  origin: "বিশ্বব্যাপী",       video: "https://www.youtube.com/results?search_query=swimming+competition+highlights" },
      { name: "ডাইভিং",                  origin: "ইউরোপ",             video: "https://www.youtube.com/results?search_query=diving+sport+highlights" },
      { name: "সিঙ্ক্রোনাইজড সাঁতার",   origin: "আমেরিকা/কানাডা",   video: "https://www.youtube.com/results?search_query=synchronized+swimming+highlights" },
      { name: "রোয়িং",                  origin: "ইংল্যান্ড",         video: "https://www.youtube.com/results?search_query=rowing+sport+highlights" },
      { name: "কায়াকিং / ক্যানোয়িং",   origin: "আর্কটিক",          video: "https://www.youtube.com/results?search_query=kayaking+canoeing+highlights" },
      { name: "সার্ফিং",                 origin: "হাওয়াই",           video: "https://www.youtube.com/results?search_query=surfing+highlights" },
      { name: "ওয়াটার স্কিইং",          origin: "আমেরিকা",           video: "https://www.youtube.com/results?search_query=water+skiing+highlights" },
      { name: "ওয়েকবোর্ডিং",           origin: "আমেরিকা",           video: "https://www.youtube.com/results?search_query=wakeboarding+highlights" },
      { name: "সেলিং",                   origin: "নেদারল্যান্ড",     video: "https://www.youtube.com/results?search_query=sailing+sport+highlights" },
    ],
  },
  {
    category: "🏋️ শক্তি ও জিমন্যাস্টিক্স",
    color: "#534AB7",
    bg: "#EEEDFE",
    games: [
      { name: "জিমন্যাস্টিক্স",          origin: "প্রাচীন গ্রিস", video: "https://www.youtube.com/results?search_query=gymnastics+highlights" },
      { name: "ভারোত্তোলন",              origin: "প্রাচীন গ্রিস", video: "https://www.youtube.com/results?search_query=weightlifting+highlights" },
      { name: "পাওয়ারলিফটিং",           origin: "আমেরিকা",       video: "https://www.youtube.com/results?search_query=powerlifting+highlights" },
      { name: "ট্র্যাম্পোলিন",           origin: "আমেরিকা",       video: "https://www.youtube.com/results?search_query=trampoline+gymnastics+highlights" },
      { name: "রিদমিক জিমন্যাস্টিক্স",  origin: "রাশিয়া",        video: "https://www.youtube.com/results?search_query=rhythmic+gymnastics+highlights" },
      { name: "আর্ম রেসলিং",             origin: "আমেরিকা",       video: "https://www.youtube.com/results?search_query=arm+wrestling+highlights" },
      { name: "রোপ ক্লাইম্বিং",          origin: "প্রাচীন গ্রিস", video: "https://www.youtube.com/results?search_query=rope+climbing+competition" },
    ],
  },
  {
    category: "⛷️ শীতকালীন খেলা",
    color: "#0C447C",
    bg: "#E6F1FB",
    games: [
      { name: "আলপাইন স্কিইং",       origin: "নরওয়ে",         video: "https://www.youtube.com/results?search_query=alpine+skiing+highlights" },
      { name: "ক্রস-কান্ট্রি স্কিইং", origin: "নরওয়ে",         video: "https://www.youtube.com/results?search_query=cross+country+skiing+highlights" },
      { name: "স্নোবোর্ডিং",         origin: "আমেরিকা",        video: "https://www.youtube.com/results?search_query=snowboarding+highlights" },
      { name: "ফিগার স্কেটিং",        origin: "ইংল্যান্ড",     video: "https://www.youtube.com/results?search_query=figure+skating+highlights" },
      { name: "স্পিড স্কেটিং",        origin: "নেদারল্যান্ড",  video: "https://www.youtube.com/results?search_query=speed+skating+highlights" },
      { name: "বায়াথলন",             origin: "নরওয়ে",         video: "https://www.youtube.com/results?search_query=biathlon+highlights" },
      { name: "লুজ",                  origin: "ইউরোপ",          video: "https://www.youtube.com/results?search_query=luge+sport+highlights" },
      { name: "ববস্লেড",             origin: "সুইজারল্যান্ড",  video: "https://www.youtube.com/results?search_query=bobsled+highlights" },
      { name: "কার্লিং",             origin: "স্কটল্যান্ড",    video: "https://www.youtube.com/results?search_query=curling+sport+highlights" },
    ],
  },
  {
    category: "🎯 লক্ষ্য ও নির্ভুলতা",
    color: "#BA7517",
    bg: "#FAEEDA",
    games: [
      { name: "তীরন্দাজি",           origin: "প্রাচীন মিশর",  video: "https://www.youtube.com/results?search_query=archery+highlights" },
      { name: "গল্ফ",                origin: "স্কটল্যান্ড",   video: "https://www.youtube.com/results?search_query=golf+highlights" },
      { name: "বিলিয়ার্ড / স্নুকার", origin: "ইংল্যান্ড",    video: "https://www.youtube.com/results?search_query=snooker+billiards+highlights" },
      { name: "বোলিং",               origin: "মিশর",          video: "https://www.youtube.com/results?search_query=bowling+highlights" },
      { name: "ক্রোকেট",             origin: "ফ্রান্স",       video: "https://www.youtube.com/results?search_query=croquet+sport" },
      { name: "পেটাঙ্ক / বোচে",      origin: "ফ্রান্স",       video: "https://www.youtube.com/results?search_query=petanque+boules+sport" },
      { name: "ডার্টস",              origin: "ইংল্যান্ড",     video: "https://www.youtube.com/results?search_query=darts+match+highlights" },
      { name: "হর্সশু পিচিং",        origin: "রোম",           video: "https://www.youtube.com/results?search_query=horseshoe+pitching" },
    ],
  },
  {
    category: "🏅 ঐতিহ্যবাহী ও লোক খেলা",
    color: "#993556",
    bg: "#FBEAF0",
    games: [
      { name: "হা-ডু-ডু (কাবাডি)", origin: "বাংলাদেশ",          video: "https://www.youtube.com/results?search_query=ha+du+du+kabaddi+bangladesh" },
      { name: "দাড়িয়াবান্ধা",      origin: "বাংলাদেশ",          video: "https://www.youtube.com/results?search_query=dariyabandha+bangladesh+game" },
      { name: "গোল্লাছুট",          origin: "বাংলাদেশ/ভারত",    video: "https://www.youtube.com/results?search_query=gollachut+bangla+game" },
      { name: "মার্বেল খেলা",        origin: "বিশ্বব্যাপী",      video: "https://www.youtube.com/results?search_query=marble+game+highlights" },
      { name: "লাটিম",               origin: "বিশ্বব্যাপী",      video: "https://www.youtube.com/results?search_query=spinning+top+latim+game" },
      { name: "গিলি-ডান্ডা",         origin: "ভারত/পাকিস্তান",  video: "https://www.youtube.com/results?search_query=gilli+danda+game" },
      { name: "পোলো",                origin: "পার্শিয়া",         video: "https://www.youtube.com/results?search_query=polo+sport+highlights" },
      { name: "হর্স রেসিং",          origin: "মধ্যপ্রাচ্য",      video: "https://www.youtube.com/results?search_query=horse+racing+highlights" },
      { name: "বুল রাইডিং",          origin: "মেক্সিকো",         video: "https://www.youtube.com/results?search_query=bull+riding+highlights" },
      { name: "রডিও",                origin: "আমেরিকা/মেক্সিকো", video: "https://www.youtube.com/results?search_query=rodeo+highlights" },
      { name: "ঘুড়ি লড়াই",          origin: "চীন/দক্ষিণ এশিয়া", video: "https://www.youtube.com/results?search_query=kite+fighting+highlights" },
      { name: "টাগ অব ওয়ার",        origin: "প্রাচীন মিশর/গ্রিস", video: "https://www.youtube.com/results?search_query=tug+of+war+highlights" },
    ],
  },
  {
    category: "🚴 সাইক্লিং ও মোটর",
    color: "#3C3489",
    bg: "#EEEDFE",
    games: [
      { name: "রোড সাইক্লিং",      origin: "ফ্রান্স",    video: "https://www.youtube.com/results?search_query=road+cycling+race+highlights" },
      { name: "ট্র্যাক সাইক্লিং",  origin: "ইউরোপ",     video: "https://www.youtube.com/results?search_query=track+cycling+highlights" },
      { name: "মাউন্টেন বাইকিং",   origin: "আমেরিকা",   video: "https://www.youtube.com/results?search_query=mountain+biking+highlights" },
      { name: "বিএমএক্স",           origin: "আমেরিকা",   video: "https://www.youtube.com/results?search_query=bmx+highlights" },
      { name: "মোটর রেসিং (F1)",    origin: "ইউরোপ",     video: "https://www.youtube.com/results?search_query=formula+1+race+highlights" },
      { name: "মোটোক্রস",           origin: "ইংল্যান্ড", video: "https://www.youtube.com/results?search_query=motocross+highlights" },
      { name: "রেলি রেসিং",         origin: "ফ্রান্স",   video: "https://www.youtube.com/results?search_query=rally+racing+highlights" },
    ],
  },
  {
    category: "🧗 এক্সট্রিম ও আউটডোর",
    color: "#27500A",
    bg: "#EAF3DE",
    games: [
      { name: "রক ক্লাইম্বিং",         origin: "ইউরোপ",         video: "https://www.youtube.com/results?search_query=rock+climbing+highlights" },
      { name: "স্কেটবোর্ডিং",          origin: "আমেরিকা",       video: "https://www.youtube.com/results?search_query=skateboarding+highlights" },
      { name: "পার্কুর",               origin: "ফ্রান্স",        video: "https://www.youtube.com/results?search_query=parkour+highlights" },
      { name: "স্কাইডাইভিং",           origin: "আমেরিকা",       video: "https://www.youtube.com/results?search_query=skydiving+highlights" },
      { name: "প্যারাগ্লাইডিং",        origin: "ইউরোপ",         video: "https://www.youtube.com/results?search_query=paragliding+highlights" },
      { name: "বাঞ্জি জাম্পিং",        origin: "নিউজিল্যান্ড",  video: "https://www.youtube.com/results?search_query=bungee+jumping+highlights" },
      { name: "হোয়াইট ওয়াটার রাফটিং", origin: "আমেরিকা",      video: "https://www.youtube.com/results?search_query=whitewater+rafting+highlights" },
      { name: "হাইকিং / ট্রেকিং",      origin: "বিশ্বব্যাপী",  video: "https://www.youtube.com/results?search_query=hiking+trekking+highlights" },
      { name: "ওরিয়েন্টিয়ারিং",       origin: "নরওয়ে",        video: "https://www.youtube.com/results?search_query=orienteering+sport" },
    ],
  },
  {
    category: "♟️ বোর্ড ও ঐতিহ্যবাহী টেবিল খেলা",
    color: "#5F5E5A",
    bg: "#F1EFE8",
    games: [
      { name: "দাবা",       origin: "ভারত",            video: "https://www.youtube.com/results?search_query=chess+game+highlights" },
      { name: "কেরাম",      origin: "দক্ষিণ এশিয়া",   video: "https://www.youtube.com/results?search_query=carrom+board+game" },
      { name: "গো (গেম)",   origin: "চীন",             video: "https://www.youtube.com/results?search_query=go+board+game+highlights" },
      { name: "শিয়াংচি",   origin: "চীন",             video: "https://www.youtube.com/results?search_query=xiangqi+chinese+chess" },
      { name: "শোগি",       origin: "জাপান",           video: "https://www.youtube.com/results?search_query=shogi+japanese+chess" },
      { name: "মানকালা",    origin: "আফ্রিকা",         video: "https://www.youtube.com/results?search_query=mancala+game" },
      { name: "ব্যাকগ্যামন", origin: "মেসোপটেমিয়া",  video: "https://www.youtube.com/results?search_query=backgammon+game+highlights" },
    ],
  },
];

export default function PhysicalGamesofWorld() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("সব");

  const categories = ["সব", ...gamesData.map((g) => g.category)];

  const filtered = gamesData
    .filter((cat) => activeCategory === "সব" || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      games: cat.games.filter(
        (g) =>
          g.name.toLowerCase().includes(search.toLowerCase()) ||
          g.origin.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.games.length > 0);

  const totalGames = gamesData.reduce((acc, c) => acc + c.games.length, 0);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 960, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px", color: "#1a1a1a" }}>
          🌍 বিশ্বের সকল শারীরিক খেলার তালিকা
        </h1>
        <p style={{ margin: "0 0 1rem", color: "#666", fontSize: 13 }}>
          মোট {totalGames}+ খেলা · {gamesData.length}টি ক্যাটাগরি · প্রতিটিতে 🎬 ভিডিও লিঙ্ক
        </p>

        <input
          type="text"
          placeholder="খেলা বা উৎস দেশ দিয়ে খুঁজুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            fontSize: 14,
            border: "1.5px solid #ddd",
            borderRadius: 10,
            outline: "none",
            boxSizing: "border-box",
            marginBottom: "1rem",
          }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "5px 12px",
                fontSize: 11,
                border: "1.5px solid",
                borderColor: activeCategory === cat ? "#1D9E75" : "#ddd",
                borderRadius: 20,
                background: activeCategory === cat ? "#E1F5EE" : "#fff",
                color: activeCategory === cat ? "#0F6E56" : "#444",
                cursor: "pointer",
                fontWeight: activeCategory === cat ? 700 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "#888", textAlign: "center", marginTop: 40 }}>কোনো খেলা পাওয়া যায়নি।</p>
      )}

      {filtered.map((cat) => (
        <div key={cat.category} style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: 15,
              fontWeight: 700,
              padding: "6px 14px",
              borderRadius: 8,
              display: "inline-block",
              background: cat.bg,
              color: cat.color,
              marginBottom: 12,
            }}
          >
            {cat.category}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: 10,
            }}
          >
            {cat.games.map((game) => (
              <a
                key={game.name}
                href={game.video}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  background: "#fff",
                  border: "1px solid #e8e8e8",
                  borderRadius: 10,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.color;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${cat.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e8e8e8";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", marginBottom: 4 }}>
                  {game.name}
                </div>
                <div style={{ fontSize: 11, color: "#999", marginBottom: 6 }}>📍 {game.origin}</div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#fff",
                    background: "#FF0000",
                    borderRadius: 5,
                    padding: "3px 8px",
                    display: "inline-block",
                    fontWeight: 600,
                  }}
                >
                  ▶ YouTube ভিডিও
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "2rem",
          padding: "12px 16px",
          background: "#fff3f3",
          border: "1px solid #ffcdd2",
          borderRadius: 10,
          fontSize: 12,
          color: "#c62828",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        🎬 প্রতিটি কার্ডে ক্লিক করলে YouTube-এ সরাসরি ভিডিও দেখতে পাবেন
      </div>
    </div>
  );
}