import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const PORTAL_NAME = 'বাংলাদেশ সংবাদ';
const COLOR = '#2471a3';
const ICON = '📰';

const categories = [
  {
    name: 'জাতীয় বাংলা দৈনিক',
    items: [
      { name: 'প্রথম আলো', web: 'https://www.prothomalo.com' },
      { name: 'কালের কণ্ঠ', web: 'https://www.kalerkantho.com' },
      { name: 'যুগান্তর', web: 'https://www.jugantor.com' },
      { name: 'ইত্তেফাক', web: 'https://www.ittefaq.com.bd' },
      { name: 'সমকাল', web: 'https://samakal.com' },
      { name: 'মানবজমিন', web: 'https://mzamin.com' },
      { name: 'আমাদের সময়', web: 'https://www.amadershomoy.com' },
      { name: 'নয়া দিগন্ত', web: 'https://www.dailynayadiganta.com' },
      { name: 'সংগ্রাম', web: 'https://dailysangram.com/' },
      { name: 'ইনকিলাব', web: 'https://www.dailyinqilab.com' },
      { name: 'জনকণ্ঠ', web: 'https://www.dailyjanakantha.com' },
      { name: 'বাংলাদেশ প্রতিদিন', web: 'https://www.bd-pratidin.com' },
      { name: 'দেশ রূপান্তর', web: 'https://www.deshrupantor.com' },
      { name: 'আলোকিত বাংলাদেশ', web: 'https://www.alokitobangladesh.com' },
      { name: 'বণিক বার্তা', web: 'https://www.bonikbarta.net' },
      { name: 'আজকের পত্রিকা', web: 'https://www.ajkerpatrika.com' },
      { name: 'আমাদের বার্তা', web: 'https://www.amaderbarta.net' },
      { name: 'দিনকাল', web: 'https://www.dainikdinkal.net' },
      { name: 'ডেইলি বাংলাদেশ', web: 'https://www.daily-bangladesh.com' },
      { name: 'দৈনিক বাংলা', web: 'https://www.dainikbangla.com.bd' },
      { name: 'আজকের বাংলাদেশ', web: 'https://www.ajkerbangladesh.com.bd' },
    ],
  },
  {
    name: 'জাতীয় ইংরেজি দৈনিক',
    items: [
      { name: 'The Daily Star', web: 'https://www.thedailystar.net' },
      { name: 'The Business Standard', web: 'https://www.tbsnews.net' },
      { name: 'The Financial Express', web: 'https://thefinancialexpress.com.bd' },
      { name: 'The Daily Sun', web: 'https://www.daily-sun.com' },
      { name: 'New Age', web: 'https://www.newagebd.net' },
      { name: 'The Independent', web: 'https://www.facebook.com/theindependentbd/?locale=bn_IN' },
      { name: 'Dhaka Tribune', web: 'https://www.dhakatribune.com' },
      { name: 'Bangladesh Post', web: 'https://www.bangladeshpost.net' },
      { name: 'The Business Post', web: 'https://www.facebook.com/thebusinesspostbd/' },
      { name: 'Observer BD', web: 'https://www.observerbd.com' },
    ],
  },
  {
    name: 'অনলাইন নিউজ পোর্টাল',
    items: [
      { name: 'বিডিনিউজ২৪', web: 'https://bangla.bdnews24.com' },
      { name: 'বাংলা ট্রিবিউন', web: 'https://www.banglatribune.com' },
      { name: 'রাইজিং বিডি', web: 'https://www.risingbd.com' },
      { name: 'জাগো নিউজ', web: 'https://www.jagonews24.com' },
      { name: 'বার্তা২৪', web: 'https://barta24.com' },
      { name: 'ঢাকা পোস্ট', web: 'https://www.dhakapost.com' },
      { name: 'নিউজবাংলা২৪', web: 'https://newsbangla24.com' },
      { name: 'সারাবাংলা', web: 'https://sarabangla.net' },
      { name: 'বাংলানিউজ২৪', web: 'https://www.banglanews24.com' },
      { name: 'সময় নিউজ', web: 'https://www.somoynews.tv' },
      { name: 'একুশে টিভি অনলাইন', web: 'https://www.ekushey-tv.com' },
      { name: 'চ্যানেল আই অনলাইন', web: 'https://www.channelionline.com' },
      { name: 'ইউএনবি', web: 'https://unb.com.bd' },
      { name: 'দ্যা ডেইলি ক্যাম্পাস', web: 'https://thedailycampus.com' },
      { name: 'নিউজ২৪', web: 'https://www.news24bd.tv' },
      { name: 'একাত্তর নিউজ', web: 'https://ekattor.tv' },
      { name: 'নাগরিক নিউজ', web: 'https://www.nagorikbd.com' },
      { name: 'বাংলাদেশ জার্নাল', web: 'https://www.bd-journal.com' },
      { name: 'দৈনিক আলোর পথ', web: 'https://www.alopath.com' },
    ],
  },
  {
    name: 'টেলিভিশন চ্যানেল নিউজ',
    items: [
      { name: 'Somoy TV', web: 'https://www.somoynews.tv' },
      { name: 'Channel 24', web: 'https://www.channel24bd.tv' },
      { name: 'Jamuna TV', web: 'https://www.jamuna.tv' },
      { name: 'Ekattor TV', web: 'https://ekattor.tv' },
      { name: 'Independent TV', web: 'https://www.itvbd.com' },
      { name: 'SA TV', web: 'https://www.satv.tv' },
      { name: 'RTV', web: 'https://rtvonline.com/' },
      { name: 'NTV', web: 'https://www.ntvbd.com' },
      { name: 'Channel i', web: 'https://www.channelionline.com' },
      { name: 'Desh TV', web: 'https://www.deshtv.com' },
    ],
  },
  {
    name: 'সরকারি ও রাষ্ট্রীয়',
    items: [
      { name: 'বাংলাদেশ সংবাদ সংস্থা (BSS)', web: 'https://www.bssnews.net' },
      { name: 'বাংলাদেশ বেতার', web: 'https://betar.gov.bd/' },
      { name: 'বাংলাদেশ টেলিভিশন (BTV)', web: 'https://btv.gov.bd/' },
      { name: 'তথ্য অধিদফতর', web: 'https://pressinform.gov.bd/' },
    ],
  },
  {
    name: 'আঞ্চলিক - ঢাকা',
    items: [
      { name: 'ঢাকা টাইমস', web: 'https://www.dhakatimes24.com' },
      { name: 'ঢাকা মেইল', web: 'https://www.dhakamail.com' },
      { name: 'ঢাকা পোস্ট', web: 'https://www.dhakapost.com' },
      { name: 'ঢাকা ট্রিবিউন', web: 'https://www.dhakatribune.com' },
      { name: 'ঢাকা নিউজ', web: 'https://dhakanews24.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - চট্টগ্রাম',
    items: [
      { name: 'দৈনিক পূর্বকোণ', web: 'https://dainikpurbokone.net/' },
      { name: 'দৈনিক আজাদী', web: 'https://www.dainikazadi.net' },
      { name: 'সুপ্রভাত বাংলাদেশ', web: 'https://www.suprobhat.com' },
      { name: 'দৈনিক পত্রিকা চট্টগ্রাম', web: 'https://www.dainikpatrika.com' },
      { name: 'চট্টগ্রাম প্রতিদিন', web: 'https://ctgpratidin.com' },
      { name: 'কক্সবাজার নিউজ', web: 'https://www.facebook.com/coxsbazarnewscbn/?locale=bn_IN' },
    ],
  },
  {
    name: 'আঞ্চলিক - সিলেট',
    items: [
      { name: 'দৈনিক সিলেট', web: 'https://www.dailysylhet.com' },
      { name: 'সিলেটের ডাক', web: 'https://www.sylheterdak.com.bd' },
      { name: 'জালালাবাদ', web: 'https://www.jalalabad.net' },
      { name: 'সিলেট মিরর', web: 'https://sylhetmirror.com' },
      { name: 'সিলেট টুডে', web: 'https://sylhetmirror.com/' },
      { name: 'মৌলভীবাজার নিউজ', web: 'https://moulvibazar.gov.bd/' },
      { name: 'হবিগঞ্জ নিউজ', web: 'https://habiganjnews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - রাজশাহী',
    items: [
      { name: 'দৈনিক সোনার দেশ', web: 'https://www.sonardesh.com' },
      { name: 'দৈনিক রাজশাহী', web: 'https://www.dailyrajshahi.com' },
      { name: 'রাজশাহী নিউজ', web: 'https://rajshahinews.com' },
      { name: 'দৈনিক সিল্কসিটি', web: 'https://silkcitynews.com' },
      { name: 'নাটোর নিউজ', web: 'https://natorenews.com' },
      { name: 'চাঁপাইনবাবগঞ্জ নিউজ', web: 'https://chapainews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - খুলনা',
    items: [
      { name: 'দৈনিক খুলনা', web: 'https://www.dailykhulna.com' },
      { name: 'খুলনা গেজেট', web: 'https://www.khulnagazette.com' },
      { name: 'সুন্দরবন নিউজ', web: 'https://www.facebook.com/Sundarbannews/videos/' },
      { name: 'সাতক্ষীরা নিউজ', web: 'https://satkhiranews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - বরিশাল',
    items: [
      { name: 'দৈনিক বরিশাল', web: 'https://www.facebook.com/DailyBarishalBD/' },
      { name: 'আজকের বরিশাল', web: 'https://www.facebook.com/groups/161490717519469/' },
      { name: 'পটুয়াখালী নিউজ', web: 'https://patuakhalinews.com' },
      { name: 'ভোলা নিউজ', web: 'https://bholanews.com' },
      { name: 'পিরোজপুর নিউজ', web: 'https://pirojpurnews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - রংপুর',
    items: [
      { name: 'দৈনিক রংপুর', web: 'https://www.facebook.com/DailyRangpurCom/reels/' },
      { name: 'দৈনিক উত্তরবাংলা', web: 'https://www.facebook.com/uttorbangla/' },
      { name: 'দিনাজপুর নিউজ', web: 'https://dinajpurnews.net/' },
      { name: 'গাইবান্ধা নিউজ', web: 'https://gaibandhanews.com' },
      { name: 'কুড়িগ্রাম নিউজ', web: 'https://kurigramnews.com' },
      { name: 'লালমনিরহাট নিউজ', web: 'https://lalmonirhatnews.com' },
      { name: 'পঞ্চগড় নিউজ', web: 'https://panchagarhnews.com/lander?oref=https%3A%2F%2Fwww.google.com%2F' },
    ],
  },
  {
    name: 'আঞ্চলিক - ময়মনসিংহ',
    items: [
      { name: 'আজকের ময়মনসিংহ', web: 'https://www.facebook.com/ajkermymensinghbd/photos/httpsajkermymensinghcomfollowers%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AE%E0%A7%87%E0%A6%B0-%E0%A6%A1%E0%A6%BE%E0%A6%95/690067060696716/' },
      { name: 'ময়মনসিংহ প্রতিদিন', web: 'https://mymensinghpratidin.com' },
      { name: 'নেত্রকোনা নিউজ', web: 'https://www.netrokonanews.com/' },
      { name: 'শেরপুর নিউজ', web: 'https://www.jagonews24.com/bangladesh/mymensingh/sherpur' },
      { name: 'কিশোরগঞ্জ নিউজ', web: 'https://kishoreganjnews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - কুমিল্লা',
    items: [
      { name: 'দৈনিক কুমিল্লা', web: 'https://dailycomillanews.com/' },
      { name: 'কুমিল্লার কাগজ', web: 'https://comillarkagoj.com' },
      { name: 'কুমিল্লা নিউজ', web: 'https://cumillanews24.com' },
      { name: 'ব্রাহ্মণবাড়িয়া নিউজ', web: 'https://brahmanbarianews.com' },
      { name: 'চাঁদপুর নিউজ', web: 'https://chandpurnews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - নোয়াখালী',
    items: [
      { name: 'নোয়াখালী নিউজ', web: 'https://noakhali-news.com' },
      { name: 'লক্ষ্মীপুর নিউজ', web: 'https://www.lakshmipurnews.com/country-news' },
    ],
  },
  {
    name: 'আঞ্চলিক - ফরিদপুর ও মাদারীপুর',
    items: [
      { name: 'গোপালগঞ্জ নিউজ', web: 'https://gopalganj.gov.bd/' },
      { name: 'রাজবাড়ী নিউজ', web: 'https://rajbarinews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - টাঙ্গাইল ও মানিকগঞ্জ',
    items: [
      { name: 'টাঙ্গাইল নিউজ', web: 'https://tangailnewsbd.com/' },
      { name: 'মুন্সীগঞ্জ নিউজ', web: 'https://www.facebook.com/m.news52/' },
      { name: 'নারায়ণগঞ্জ নিউজ', web: 'https://narayanganjnews.com' },
      { name: 'গাজীপুর নিউজ', web: 'https://gazipurnews.com' },
    ],
  },
  {
    name: 'আঞ্চলিক - পার্বত্য চট্টগ্রাম',
    items: [
      { name: 'হিল ভয়েস', web: 'https://hillvoice.net' },
      { name: 'বান্দরবান নিউজ', web: 'https://bandarbannews.com' },
      { name: 'CHT News', web: 'https://chtnews.com' },
    ],
  },
  {
    name: 'ব্যবসা ও অর্থনীতি',
    items: [
      { name: 'বণিক বার্তা', web: 'https://www.bonikbarta.net' },
      { name: 'The Financial Express', web: 'https://thefinancialexpress.com.bd' },
      { name: 'The Business Standard', web: 'https://www.tbsnews.net' },
      { name: 'শেয়ার বিজ', web: 'https://sharebiz.net' },
      { name: 'দৈনিক শেয়ারবাজার', web: 'https://www.sharebazar24.com' },
      { name: 'ঢাকা স্টক এক্সচেঞ্জ', web: 'https://www.dsebd.org' },
      { name: 'অর্থসংবাদ', web: 'https://orthosongbad.com/' },
      { name: 'বিজনেস আওয়ার', web: 'https://www.businesshour24.com' },
      { name: 'অর্থনীতি প্রতিদিন', web: 'https://arthonitipratidin.com' },
    ],
  },
  {
    name: 'খেলাধুলা',
    items: [
      { name: 'প্রথম আলো খেলা', web: 'https://www.prothomalo.com/sports' },
      { name: 'ক্রিকেট বাংলাদেশ', web: 'https://www.cricketbd.com' },
      { name: 'Cricfrenzy BD', web: 'https://www.cricfrenzy.com' },
      { name: 'খেলার মাঠ', web: 'https://www.facebook.com/Khelarmath/' },
      { name: 'বিডি স্পোর্টস', web: 'https://www.facebook.com/sports24team/' },
      { name: 'সোনালী স্পোর্টস', web: 'https://sonalinews.com/sports' },
    ],
  },
  {
    name: 'ধর্ম ও ইসলামী সংবাদ',
    items: [
      { name: 'ইসলাম টাইমস', web: 'https://www.islamtimes.com/' },
      { name: 'আওয়ার ইসলাম', web: 'https://www.ourislam24.com' },
      { name: 'দৈনিক ইনকিলাব', web: 'https://www.dailyinqilab.com' },
      { name: 'ইসলামী বার্তা', web: 'https://bn.quora.com/profile/Islam-Barta-1' },
    ],
  },
  {
    name: 'শিক্ষা ও ক্যাম্পাস',
    items: [
      { name: 'দ্যা ডেইলি ক্যাম্পাস', web: 'https://thedailycampus.com' },
      { name: 'ক্যাম্পাস লাইভ', web: 'https://www.campusreport24.com/' },
      { name: 'প্রথম আলো শিক্ষা', web: 'https://www.prothomalo.com/education' },
    ],
  },
  {
    name: 'স্বাস্থ্য সংবাদ',
    items: [
      { name: 'মেডিভয়েস', web: 'https://medivoicebd.com' },
    ],
  },
  {
    name: 'বিনোদন ও সংস্কৃতি',
    items: [
      { name: 'বিনোদন বার্তা', web: 'https://binodonbartabd.com/category/%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE/' },
      { name: 'বাংলানিউজ বিনোদন', web: 'https://www.banglanews24.com/entertainment' },
      { name: 'প্রথম আলো বিনোদন', web: 'https://www.prothomalo.com/entertainment' },
    ],
  },
  {
    name: 'প্রযুক্তি সংবাদ',
    items: [
      { name: 'টেকশহর', web: 'https://www.techshohor.com' },
    ],
  },
  {
    name: 'সাপ্তাহিক ও ম্যাগাজিন',
    items: [
      { name: 'সাপ্তাহিক ২০০০', web: 'https://www.bangladeshinside.com/category/shaptahik2000' },
      { name: 'কিশোর আলো', web: 'https://www.kishoralo.com' },
    ],
  },
  {
    name: 'প্রবাসী বাংলাদেশি সংবাদ',
    items: [
      { name: 'NRB News', web: 'https://www.nrbnews.com' },
      { name: 'প্রবাস বাংলা', web: 'https://probashbd.com/' },
      { name: 'USA Bangla News', web: 'https://usabanglanews.com' },
      { name: 'Europe Bangla', web: 'https://europebangla.com' },
    ],
  },
];

const WorldNewsPortal = () => {
  const [selectedSub, setSelectedSub] = useState(null);
  if (!categories) return null;
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {categories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: '#c5a059', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`${PORTAL_NAME} - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default WorldNewsPortal;