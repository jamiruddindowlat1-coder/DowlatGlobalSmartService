import React from 'react';

export const FOLDER_ICONS = {
  'বিভাগসমূহ':'🗺️','Divisions':'🗺️','কোচিং':'📚','Coaching':'📚',
  'গেমস ওয়ার্ল্ড':'🎮','Games World':'🎮','কমেডি ওয়ার্ল্ড':'😂','Comedy World':'😂',
  'অনলাইন বিজনেস':'💼','Online Business':'💼','অনলাইন টিউটোরিয়াল':'🎓','Online Tutorial':'🎓',
  'কমিউনিকেশন':'📞','Communication':'📞','নিউজ পেপার':'📰','News Paper':'📰',
  'শেয়ার মার্কেট':'📈','Share Market':'📈','শেয়ার ওয়ার্ল্ড':'🌍','Share World':'🌍',
  'সোশ্যাল মিডিয়া':'📱','Social Media':'📱','ল্যাঙ্গুয়েজ':'🌐','Language':'🌐',
  'সফটওয়্যার':'💻','Software':'💻','ট্যুরিস্ট ওয়ার্ল্ড':'✈️','Tourist World':'✈️',
  'বিডি টিভি':'📺','BD TV':'📺','হাদিস':'📜','Hadith':'📜',
  'কুরআন':'📖','Quran':'📖','ওয়াজ মাহফিল':'🎙️','Waz Mahfil':'🎙️',
  'ওয়ার্ল্ড কাপ':'⚽','World Cup':'⚽','ওয়ার্ল্ড টিভি':'🌏','World TV':'🌏',
  'মন্ত্রণালয় ও সচিবালয়':'🏛️','Ministry & Secretariat':'🏛️',
  'বিডি সেবাসমূহ':'🧑‍💼','BD Services':'🧑‍💼',
};

export const StyledTitle = ({ GOLD }) => (
  <h1 style={{
    margin: '0',
    display: 'flex',
    alignItems: 'baseline',
    gap: '12px'
  }}>
    <span style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '48px',
      fontWeight: '800',
      letterSpacing: '1px',
      lineHeight: 1,
      background: 'linear-gradient(to bottom, #4ade80 50%, #ffffff 50%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      DOWLAT
    </span>
    <span style={{
      fontFamily: "'Arial Black', Impact, sans-serif",
      fontSize: '38px',
      fontWeight: '900',
      fontStyle: 'italic',
      letterSpacing: '-1px',
      lineHeight: 1,
      background: 'linear-gradient(to bottom, #3b82f6 50%, #ffffff 50%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      GLOBAL SMART SERVICE
    </span>
  </h1>
);

export const RealisticEarthLogo = ({ size = 95 }) => (
  <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: `${size*0.75}px`, height: `${size*0.75}px`, background: 'url("https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png")', backgroundSize: 'cover', borderRadius: '50%', boxShadow: 'inset -5px -5px 25px rgba(0,0,0,0.9), 0 0 45px rgba(79, 172, 254, 0.7)', zIndex: 2, animation: 'pulseEarth 4s infinite alternate' }}></div>
    <div style={{ position: 'absolute', width: '100%', height: '100%', animation: 'rotateOrbit 12s linear infinite', zIndex: 5, display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: `-12px`, display: 'flex', gap: '2px', fontWeight: '900', fontSize: '18px' }}>
        <span style={{ color: '#ff3333', textShadow: '0 0 10px #ff3333' }}>D</span>
        <span style={{ color: '#33ff33', textShadow: '0 0 10px #33ff33' }}>G</span>
        <span style={{ color: '#3333ff', textShadow: '0 0 10px #3333ff' }}>S</span>
        <span style={{ color: '#ffff33', textShadow: '0 0 10px #ffff33' }}>S</span>
      </div>
    </div>
  </div>
);

export const CONTENT_DATA = {
    bn: {
      subtitle: "ডিজিটাল বাংলাদেশের আধুনিক স্মার্ট সমাধান",
      footer: "© ২০২৪ - DOWLAT GLOBAL SMART SERVICE | সর্বস্বত্ব সংরক্ষিত",
      welcome: "ডিজিটাল স্মার্ট পোর্টালে স্বাগতম",
      instruction: "সার্ভিসগুলো দেখার জন্য মেনু বার ব্যবহার করুন।",
      btn_close: "বন্ধ করুন",
      btn_switch: "English",
      folders: [
        { 
          name: 'বিভাগসমূহ', 
          subs: [
            {n:'ঢাকা বিভাগ',k:'dhaka', items:['সরকারি স্কুল (ঢাকা)','সরকারি স্কুল (গাজীপুর)','সরকারি স্কুল (নারায়ণগঞ্জ)','সরকারি স্কুল (মানিকগঞ্জ)','সরকারি স্কুল (মুন্সিগঞ্জ)','সরকারি স্কুল (নরসিংদী)','সরকারি স্কুল (টাঙ্গাইল)','সরকারি স্কুল (কিশোরগঞ্জ)','সরকারি স্কুল (ফরিদপুর)','সরকারি স্কুল (গোপালগঞ্জ)','সরকারি স্কুল (মাদারীপুর)','সরকারি স্কুল (রাজবাড়ী)','সরকারি স্কুল (শরীয়তপুর)','বেসরকারি স্কুল','সরকারি কলেজ','বেসরকারি কলেজ','মাদ্রাসা','সরকারি বিশ্ববিদ্যালয়','বেসরকারি বিশ্ববিদ্যালয়','উপজেলা','থানা','ব্যাংক','ভূমি অফিস','বাস সার্ভিস','ট্রেন সার্ভিস','সংবাদপত্র','র‌্যাব ইন্সটিটিউট','বিজিবি অফিস','এনজিও অফিস','সরকারি হাসপাতাল','বেসরকারি হাসপাতাল','পোস্ট অফিস','বিদ্যুৎ অফিস','ফায়ার সার্ভিস','আদালত','এয়ারপোর্ট','পোর্ট','ট্যুরিস্ট স্পট','অ্যাম্বুলেন্স সার্ভিস','ক্লিনিক','ভেটেরিনারি সার্ভিস','পানি সরবরাহ','গ্যাস সরবরাহ','টেলিকম','বীমা','সমবায়','জনপ্রতিনিধি','উপজেলা চেয়ারম্যান']},
            {n:'চট্টগ্রাম বিভাগ',k:'chittagong', items:['KG স্কুল (চট্টগ্রাম)','সরকারি স্কুল (চট্টগ্রাম)','সরকারি স্কুল (কুমিল্লা)','সরকারি স্কুল (কক্সবাজার)','সরকারি স্কুল (নোয়াখালী)','সরকারি স্কুল (ফেনী)','সরকারি স্কুল (ব্রাহ্মণবাড়িয়া)','সরকারি স্কুল (চাঁদপুর)','সরকারি স্কুল (লক্ষ্মীপুর)','সরকারি স্কুল (রাঙামাটি)','সরকারি স্কুল (খাগড়াছড়ি)','সরকারি স্কুল (বান্দরবান)','বেসরকারি স্কুল','সরকারি কলেজ','বেসরকারি কলেজ','মাদ্রাসা','সরকারি বিশ্ববিদ্যালয়','বেসরকারি বিশ্ববিদ্যালয়','উপজেলা','থানা','ব্যাংক','ভূমি অফিস']},
            {n:'রাজশাহী বিভাগ',k:'rajshahi', items:['সরকারি স্কুল (রাজশাহী)','সরকারি স্কুল (বগুড়া)','সরকারি স্কুল (পাবনা)','সরকারি স্কুল (সিরাজগঞ্জ)','সরকারি স্কুল (নওগাঁ)','সরকারি স্কুল (নাটোর)','সরকারি স্কুল (চাঁপাইনবাবগঞ্জ)','সরকারি স্কুল (জয়পুরহাট)','বেসরকারি স্কুল','সরকারি কলেজ','বেসরকারি কলেজ','মাদ্রাসা','সরকারি বিশ্ববিদ্যালয়','বেসরকারি বিশ্ববিদ্যালয়','উপজেলা','থানা','ব্যাংক','ভূমি অফিস','বাস সার্ভিস','ট্রেন সার্ভিস','সংবাদপত্র','র‌্যাব ইন্সটিটিউট','বিজিবি অফিস','এনজিও অফিস','সরকারি হাসপাতাল','বেসরকারি হাসপাতাল','পোস্ট অফিস','বিদ্যুৎ অফিস','ফায়ার সার্ভিস','আদালত','এয়ারপোর্ট','পোর্ট','ট্যুরিস্ট স্পট','অ্যাম্বুলেন্স সার্ভিস','ক্লিনিক','ভেটেরিনারি সার্ভিস','পানি সরবরাহ','গ্যাস সরবরাহ','টেলিকম','বীমা','সমবায়','ধর্মীয় স্থান','জনপ্রতিনিধি','উপজেলা চেয়ারম্যান']},
            {n:'খুলনা বিভাগ',k:'khulna', items:['সরকারি স্কুল (খুলনা)','সরকারি স্কুল (বাগেরহাট)','সরকারি স্কুল (সাতক্ষীরা)','সরকারি স্কুল (যশোর)','সরকারি স্কুল (নড়াইল)','সরকারি স্কুল (মাগুরা)','সরকারি স্কুল (ঝিনাইদহ)','সরকারি স্কুল (কুষ্টিয়া)','সরকারি স্কুল (চুয়াডাঙ্গা)','সরকারি স্কুল (মেহেরপুর)','বেসরকারি স্কুল','সরকারি কলেজ','বেসরকারি কলেজ','মাদ্রাসা','সরকারি বিশ্ববিদ্যালয়','বেসরকারি বিশ্ববিদ্যালয়','উপজেলা','থানা','ব্যাংক','ভূমি অফিস','বাস সার্ভিস','ট্রেন সার্ভিস','সংবাদপত্র','র‌্যাব','বিজিবি','এনজিও','সরকারি হাসপাতাল','বেসরকারি হাসপাতাল','পোস্ট অফিস','বিদ্যুৎ অফিস','ফায়ার সার্ভিস','আদালত','এয়ারপোর্ট','পোর্ট','ট্যুরিস্ট স্পট','অ্যাম্বুলেন্স সার্ভিস','ক্লিনিক','ভেটেরিনারি সার্ভিস','পানি সরবরাহ','গ্যাস সরবরাহ','টেলিকম','বীমা','সমবায়']},
            {n:'সিলেট বিভাগ',k:'sylhet', items:['চা বাগান','জাফলং','শাহজালাল মাজার']},
            {n:'বরিশাল বিভাগ',k:'barisal', items:['লঞ্চ সার্ভিস','ভাসমান বাজার','মেডিকেল']},
            {n:'রংপুর বিভাগ',k:'rangpur', items:['ভিন্ন জগত','রক মিউজিয়াম','কারমাইকেল কলেজ']},
            {n:'ময়মনসিংহ বিভাগ',k:'mymensingh', items:['জয়নুল আবেদীন গ্যালারি','অग्रीकल्चर ইউনিভার্সিটি']}
          ] 
        },
        { 
          name: 'কোচিং', 
          subs: [
            {n:'সব কোচিং',k:'all_coaching', items:['উদ্ভাস','রেটিনা','ওমেকা','ইউসিসি']},
            {n:'ইংরেজি অল',k:'coaching_english', items:['Mentors','Saifurs','Focus']},
            {n:'HSC সাবজেক্ট',k:'coaching_hsc', items:['Physics','Chemistry','Math']},
            {n:'SSC সাবজেক্ট',k:'coaching_ssc', items:['General Science','Math','English']}
          ] 
        },
        { 
          name: 'গেমস ওয়ার্ল্ড', 
          subs: [
            {n:'গেমস ইনডেক্স',k:'games_index', items:['Action','Racing','Sports']},
            {n:'মোবাইল ও পিসি',k:'games_mobile', items:['Android','iOS','Windows']},
            {n:'শারীরিক গেমস',k:'games_physical', items:['Football','Cricket','Kabaddi']}
          ] 
        },
        { name: 'কমেডি ওয়ার্ল্ড', subs: [{n:'কমেডি হোম',k:'comedy_main'},{n:'কমেডি ইনডেক্স',k:'comedy_index'}] },
        { name: 'অনলাইন বিজনেস', subs: [{n:'বিজনেস হোম',k:'biz_main'},{n:'বিজনেস ইনডেক্স',k:'biz_index'}] },
        { name: 'অনলাইন টিউটোরিয়াল', subs: [{n:'টিউটোরিয়াল হোম',k:'tutorial'}] },
        { name: 'কমিউনিকেশন', subs: [{n:'কন্টাক্ট',k:'comm_main'},{n:'ওয়ার্ল্ড টেল',k:'comm_tel'}] },
        { name: 'নিউজ পেপার', subs: [{n:'বিডি পেপার',k:'news_bd_index'},{n:'ওয়ার্ল্ড নিউজ',k:'news_world'}] },
        { name: 'শেয়ার মার্কেট', subs: [{n:'মার্কেট পোর্টাল',k:'share_m_main'},{n:'মার্কেট ইনডেক্স',k:'share_m_index'},{n:'মার্কেট নিউজ',k:'share_m_news'}] },
        { name: 'শেয়ার ওয়ার্ল্ড', subs: [{n:'শেয়ার হোম',k:'share_w_main'},{n:'গ্লোবাল ইনডেক্স',k:'share_w_index'},{n:'গ্লোবাল নিউজ',k:'share_w_news'}] },
        { name: 'সোশ্যাল মিডিয়া', subs: [{n:'মিডিয়া হোম',k:'social_main'},{n:'মিডিয়া ইনডেক্স',k:'social_index'}] },
        { name: 'ল্যাঙ্গুয়েজ', subs: [{n:'ল্যাঙ্গুয়েজ হোম',k:'lang_world'},{n:'কনভার্টার',k:'lang_converter'}] },
        { name: 'সফটওয়্যার', subs: [{n:'সফটওয়্যার হোম',k:'soft_worlds'},{n:'লার্নিং ইনডেক্স',k:'soft_learning'}] },
        { name: 'ট্যুরিস্ট ওয়ার্ল্ড', subs: [{n:'ট্যুরিস্ট হোম',k:'tourist_main'},{n:'ট্যুরিস্ট ইনফো',k:'tourist_comm'},{n:'ট্যুরিস্ট সিনারিও',k:'tourist_scene'}] },
        { name: 'বিডি টিভি', subs: [{n:'টিভি ইনডেক্স',k:'bdtv'}] },
        { name: 'হাদিস', subs: [{n:'আল হাদিস',k:'hadith'}] },
        { name: 'কুরআন', subs: [{n:'আল কুরআন',k:'quran'},{n:'অনুবাদ ও রেফারেন্স',k:'quran_translate'}]},
        { name: 'ওয়াজ মাহফিল', subs: [{n:'ওয়াজ মাহফিল',k:'waz'}] },
        { name: 'ওয়ার্ল্ড কাপ', subs: [{n:'স্পোর্টস সেন্টার',k:'worldcup'}] },
        { name: 'ওয়ার্ল্ড টিভি', subs: [{n:'গ্লোবাল টিভি',k:'worldtv'}] },
        { name: 'মন্ত্রণালয় ও সচিবালয়', subs: [{n:'সব মন্ত্রণালয়',k:'bd_all_ministry'},{n:'সব সচিবালয়',k:'bd_all_secretary'}] },
        { name: 'বিডি সেবাসমূহ', subs: [{n:'নাগরিক সেবা',k:'bd_citizen_services'},{n:'চাকরি সেবা',k:'bd_job_services'}] },
      ]
    },
    en: {
      subtitle: "Modern Smart Solutions for Digital Bangladesh",
      footer: "© 2024 - DOWLAT GLOBAL SMART SERVICE | All Rights Reserved",
      welcome: "Welcome to Digital Smart Portal",
      instruction: "Use the menu bar above to access all services.",
      btn_close: "Close",
      btn_switch: "বাংলায় দেখুন",
      folders: [
        { name: 'Divisions', subs: [{n:'Dhaka Division',k:'dhaka'},{n:'Chittagong Division',k:'chittagong'},{n:'Rajshahi Division',k:'rajshahi'},{n:'Khulna Division',k:'khulna'},{n:'Sylhet Division',k:'sylhet'},{n:'Barisal Division',k:'barisal'},{n:'Rangpur Division',k:'rangpur'},{n:'Mymensingh Division',k:'mymensingh'}] },
        { name: 'Coaching', subs: [{n:'All Coaching',k:'all_coaching'},{n:'English All',k:'coaching_english'},{n:'HSC Results',k:'coaching_hsc'},{n:'SSC Results',k:'coaching_ssc'}] },
        { name: 'Games World', subs: [{n:'Games Index',k:'games_index'},{n:'Mobile & PC',k:'games_mobile'},{n:'Physical Games',k:'games_physical'}] },
        { name: 'Comedy World', subs: [{n:'Comedy Home',k:'comedy_main'},{n:'Comedy Index',k:'comedy_index'}] },
        { name: 'Online Business', subs: [{n:'Business Home',k:'biz_main'},{n:'Business Index',k:'biz_index'}] },
        { name: 'Online Tutorial', subs: [{n:'Tutorial Home',k:'tutorial'}] },
        { name: 'Communication', subs: [{n:'Contact',k:'comm_main'},{n:'World Tel',k:'comm_tel'}] },
        { name: 'News Paper', subs: [{n:'BD Paper',k:'news_bd_index'},{n:'World News',k:'news_world'}] },
        { name: 'Share Market', subs: [{n:'Market Portal',k:'share_m_main'},{n:'Market Index',k:'share_m_index'},{n:'Market News',k:'share_m_news'}] },
        { name: 'Share World', subs: [{n:'Share Home',k:'share_w_main'},{n:'Global Index',k:'share_w_index'},{n:'Global News',k:'share_w_news'}] },
        { name: 'Social Media', subs: [{n:'Media Home',k:'social_main'},{n:'Media Index',k:'social_index'}] },
        { name: 'Language', subs: [{n:'Language Home',k:'lang_world'},{n:'Converter',k:'lang_converter'}] },
        { name: 'Software', subs: [{n:'Software Home',k:'soft_worlds'},{n:'Learning Index',k:'soft_learning'}] },
        { name: 'Tourist World', subs: [{n:'Tourist Home',k:'tourist_main'},{n:'Tourist Info',k:'tourist_comm'},{n:'Tourist Scenarios',k:'tourist_scene'}] },
        { name: 'BD TV', subs: [{n:'TV Index',k:'bdtv'}] },
        { name: 'Hadith', subs: [{n:'Al Hadith',k:'hadith'}] },
        { name: 'Quran', subs: [{n:'Holy Quran',k:'quran'},{n:'Translation & Reference',k:'quran_translate'}]},
        { name: 'Waz Mahfil', subs: [{n:'Islamic Waz',k:'waz'}] },
        { name: 'World Cup', subs: [{n:'Sports Center',k:'worldcup'}] },
        { name: 'World TV', subs: [{n:'Global TV',k:'worldtv'}] },
        { name: 'Ministry & Secretariat', subs: [{n:'All Ministries',k:'bd_all_ministry'},{n:'All Secretariats',k:'bd_all_secretary'}] },
        { name: 'BD Services', subs: [{n:'Citizen Services',k:'bd_citizen_services'},{n:'Job Services',k:'bd_job_services'}] },
      ]
    }
};
