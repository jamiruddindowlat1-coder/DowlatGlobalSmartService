import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const PORTAL_NAME = 'বিশ্ব সংবাদ';
const COLOR = '#2471a3';
const ICON = '🌍';

const categories = [
  {
    name: 'যুক্তরাষ্ট্র (ইংরেজি)',
    items: [
      { name: 'The New York Times', web: 'https://www.nytimes.com' },
      { name: 'The Washington Post', web: 'https://www.washingtonpost.com' },
      { name: 'Wall Street Journal', web: 'https://www.wsj.com' },
      { name: 'USA Today', web: 'https://www.usatoday.com' },
      { name: 'Los Angeles Times', web: 'https://www.latimes.com' },
      { name: 'Chicago Tribune', web: 'https://www.chicagotribune.com' },
      { name: 'New York Post', web: 'https://nypost.com' },
      { name: 'Boston Globe', web: 'https://www.bostonglobe.com' },
      { name: 'San Francisco Chronicle', web: 'https://www.sfchronicle.com' },
      { name: 'Miami Herald', web: 'https://www.miamiherald.com' },
    ],
  },
  {
    name: 'যুক্তরাজ্য (ইংরেজি)',
    items: [
      { name: 'BBC News', web: 'https://www.bbc.com/news' },
      { name: 'The Guardian', web: 'https://www.theguardian.com' },
      { name: 'The Times', web: 'https://www.thetimes.co.uk' },
      { name: 'The Telegraph', web: 'https://www.telegraph.co.uk' },
      { name: 'The Independent', web: 'https://www.independent.co.uk' },
      { name: 'Daily Mail', web: 'https://www.dailymail.co.uk' },
      { name: 'The Sun', web: 'https://www.thesun.co.uk' },
      { name: 'Financial Times', web: 'https://www.ft.com' },
      { name: 'The Economist', web: 'https://www.economist.com' },
      { name: 'Sky News', web: 'https://news.sky.com' },
    ],
  },
  {
    name: 'আন্তর্জাতিক সংবাদ সংস্থা',
    items: [
      { name: 'Reuters', web: 'https://www.reuters.com' },
      { name: 'Associated Press (AP)', web: 'https://apnews.com' },
      { name: 'AFP', web: 'https://www.afp.com' },
      { name: 'Al Jazeera English', web: 'https://www.aljazeera.com' },
      { name: 'CNN', web: 'https://edition.cnn.com' },
      { name: 'BBC World', web: 'https://www.bbc.com/news/world' },
      { name: 'Deutsche Welle (DW)', web: 'https://www.dw.com/en' },
      { name: 'France 24 English', web: 'https://www.france24.com/en' },
      { name: 'Voice of America', web: 'https://www.voanews.com' },
      { name: 'Bloomberg', web: 'https://www.bloomberg.com' },
    ],
  },
  {
    name: 'ভারত (ইংরেজি)',
    items: [
      { name: 'The Hindu', web: 'https://www.thehindu.com' },
      { name: 'The Times of India', web: 'https://timesofindia.indiatimes.com' },
      { name: 'Hindustan Times', web: 'https://www.hindustantimes.com' },
      { name: 'Indian Express', web: 'https://indianexpress.com' },
      { name: 'NDTV', web: 'https://www.ndtv.com' },
      { name: 'The Wire', web: 'https://thewire.in' },
      { name: 'Scroll.in', web: 'https://scroll.in' },
      { name: 'LiveMint', web: 'https://www.livemint.com' },
      { name: 'Business Standard', web: 'https://www.business-standard.com' },
      { name: 'Economic Times', web: 'https://economictimes.indiatimes.com' },
    ],
  },
  {
    name: 'ভারত (হিন্দি)',
    items: [
      { name: 'Dainik Bhaskar', web: 'https://www.bhaskar.com' },
      { name: 'Amar Ujala', web: 'https://www.amarujala.com' },
      { name: 'Dainik Jagran', web: 'https://www.jagran.com' },
      { name: 'Navbharat Times', web: 'https://navbharattimes.indiatimes.com' },
      { name: 'Hindustan Hindi', web: 'https://www.livehindustan.com' },
      { name: 'Jansatta', web: 'https://www.jansatta.com' },
      { name: 'Punjab Kesari', web: 'https://www.punjabkesari.in' },
    ],
  },
  {
    name: 'পাকিস্তান',
    items: [
      { name: 'Dawn', web: 'https://www.dawn.com' },
      { name: 'The News International', web: 'https://www.thenews.com.pk' },
      { name: 'Geo News', web: 'https://www.geo.tv' },
      { name: 'Express Tribune', web: 'https://tribune.com.pk' },
      { name: 'ARY News', web: 'https://arynews.tv' },
      { name: 'Jang (উর্দু)', web: 'https://jang.com.pk' },
    ],
  },
  {
    name: 'মধ্যপ্রাচ্য (আরবি/ইংরেজি)',
    items: [
      { name: 'Al Jazeera Arabic', web: 'https://www.aljazeera.net' },
      { name: 'Al Arabiya', web: 'https://www.alarabiya.net' },
      { name: 'Gulf News', web: 'https://gulfnews.com' },
      { name: 'Arab News', web: 'https://www.arabnews.com' },
      { name: 'Khaleej Times', web: 'https://www.khaleejtimes.com' },
      { name: 'The National (UAE)', web: 'https://www.thenationalnews.com' },
      { name: 'Egypt Today', web: 'https://www.egypttoday.com' },
      { name: 'Daily Sabah (Turkey)', web: 'https://www.dailysabah.com' },
      { name: 'Hurriyet Daily News', web: 'https://www.hurriyetdailynews.com' },
    ],
  },
  {
    name: 'ইউরোপ (ইংরেজি)',
    items: [
      { name: 'Euronews', web: 'https://www.euronews.com' },
      { name: 'Politico Europe', web: 'https://www.politico.eu' },
      { name: 'The Local', web: 'https://www.thelocal.com' },
      { name: 'Irish Times', web: 'https://www.irishtimes.com' },
      { name: 'The Scotsman', web: 'https://www.scotsman.com' },
      { name: 'SwissInfo', web: 'https://www.swissinfo.ch/eng' },
      { name: 'Radio Free Europe', web: 'https://www.rferl.org' },
    ],
  },
  {
    name: 'ইউরোপ (স্থানীয় ভাষা)',
    items: [
      { name: 'Le Monde (ফরাসি)', web: 'https://www.lemonde.fr' },
      { name: 'Le Figaro (ফরাসি)', web: 'https://www.lefigaro.fr' },
      { name: 'Der Spiegel (জার্মান)', web: 'https://www.spiegel.de' },
      { name: 'Die Zeit (জার্মান)', web: 'https://www.zeit.de' },
      { name: 'El País (স্প্যানিশ)', web: 'https://elpais.com' },
      { name: 'El Mundo (স্প্যানিশ)', web: 'https://www.elmundo.es' },
      { name: 'La Repubblica (ইতালিয়ান)', web: 'https://www.repubblica.it' },
      { name: 'Corriere della Sera (ইতালিয়ান)', web: 'https://www.corriere.it' },
      { name: 'NRC (ডাচ)', web: 'https://www.nrc.nl' },
      { name: 'Aftonbladet (সুইডিশ)', web: 'https://www.aftonbladet.se' },
    ],
  },
  {
    name: 'রাশিয়া ও পূর্ব ইউরোপ',
    items: [
      { name: 'RT (Russia Today)', web: 'https://www.rt.com' },
      { name: 'TASS', web: 'https://tass.com' },
      { name: 'Pravda', web: 'https://www.pravda.com.ua' },
      { name: 'Kyiv Independent', web: 'https://kyivindependent.com' },
      { name: 'Moscow Times', web: 'https://www.themoscowtimes.com' },
      { name: 'Novaya Gazeta', web: 'https://novayagazeta.eu/en' },
    ],
  },
  {
    name: 'চীন ও পূর্ব এশিয়া',
    items: [
      { name: 'China Daily', web: 'https://www.chinadaily.com.cn' },
      { name: 'Xinhua News', web: 'https://english.news.cn' },
      { name: 'Global Times', web: 'https://www.globaltimes.cn' },
      { name: 'South China Morning Post', web: 'https://www.scmp.com' },
      { name: 'Japan Times', web: 'https://www.japantimes.co.jp' },
      { name: 'Asahi Shimbun', web: 'https://www.asahi.com/ajw' },
      { name: 'Korea Herald', web: 'https://www.koreaherald.com' },
      { name: 'Korea Times', web: 'https://www.koreatimes.co.kr' },
      { name: 'Taiwan News', web: 'https://www.taiwannews.com.tw' },
    ],
  },
  {
    name: 'দক্ষিণ-পূর্ব এশিয়া',
    items: [
      { name: 'Straits Times (সিঙ্গাপুর)', web: 'https://www.straitstimes.com' },
      { name: 'Channel NewsAsia', web: 'https://www.channelnewsasia.com' },
      { name: 'The Star (মালয়েশিয়া)', web: 'https://www.thestar.com.my' },
      { name: 'Bangkok Post (থাইল্যান্ড)', web: 'https://www.bangkokpost.com' },
      { name: 'Jakarta Post (ইন্দোনেশিয়া)', web: 'https://www.thejakartapost.com' },
      { name: 'Philippine Daily Inquirer', web: 'https://newsinfo.inquirer.net' },
      { name: 'Vietnam News', web: 'https://vietnamnews.vn' },
      { name: 'Myanmar Times', web: 'https://www.mmtimes.com' },
    ],
  },
  {
    name: 'আফ্রিকা',
    items: [
      { name: 'Daily Nation (কেনিয়া)', web: 'https://nation.africa' },
      { name: 'The East African', web: 'https://www.theeastafrican.co.ke' },
      { name: 'Mail & Guardian (দক্ষিণ আফ্রিকা)', web: 'https://mg.co.za' },
      { name: 'Daily Maverick', web: 'https://www.dailymaverick.co.za' },
      { name: 'Vanguard (নাইজেরিয়া)', web: 'https://www.vanguardngr.com' },
      { name: 'The Punch (নাইজেরিয়া)', web: 'https://punchng.com' },
      { name: 'Al-Ahram (মিশর)', web: 'https://english.ahram.org.eg' },
      { name: 'Africa News', web: 'https://www.africanews.com' },
    ],
  },
  {
    name: 'লাতিন আমেরিকা',
    items: [
      { name: 'El Universal (মেক্সিকো)', web: 'https://www.eluniversal.com.mx' },
      { name: 'Folha de S.Paulo (ব্রাজিল)', web: 'https://www.folha.uol.com.br' },
      { name: 'O Globo (ব্রাজিল)', web: 'https://oglobo.globo.com' },
      { name: 'Clarin (আর্জেন্টিনা)', web: 'https://www.clarin.com' },
      { name: 'La Nacion (আর্জেন্টিনা)', web: 'https://www.lanacion.com.ar' },
      { name: 'Mercopress', web: 'https://en.mercopress.com' },
    ],
  },
  {
    name: 'অস্ট্রেলিয়া ও ওশেনিয়া',
    items: [
      { name: 'ABC News Australia', web: 'https://www.abc.net.au/news' },
      { name: 'The Sydney Morning Herald', web: 'https://www.smh.com.au' },
      { name: 'The Australian', web: 'https://www.theaustralian.com.au' },
      { name: 'The Age', web: 'https://www.theage.com.au' },
      { name: 'NZ Herald (নিউজিল্যান্ড)', web: 'https://www.nzherald.co.nz' },
      { name: 'Stuff NZ', web: 'https://www.stuff.co.nz' },
    ],
  },
  {
    name: 'কানাডা',
    items: [
      { name: 'CBC News', web: 'https://www.cbc.ca/news' },
      { name: 'Globe and Mail', web: 'https://www.theglobeandmail.com' },
      { name: 'Toronto Star', web: 'https://www.thestar.com' },
      { name: 'National Post', web: 'https://nationalpost.com' },
      { name: 'CTV News', web: 'https://www.ctvnews.ca' },
      { name: 'Le Devoir (ফরাসি)', web: 'https://www.ledevoir.com' },
    ],
  },
  {
    name: 'বিজ্ঞান ও প্রযুক্তি সংবাদ',
    items: [
      { name: 'TechCrunch', web: 'https://techcrunch.com' },
      { name: 'Wired', web: 'https://www.wired.com' },
      { name: 'The Verge', web: 'https://www.theverge.com' },
      { name: 'Ars Technica', web: 'https://arstechnica.com' },
      { name: 'MIT Technology Review', web: 'https://www.technologyreview.com' },
      { name: 'Science Daily', web: 'https://www.sciencedaily.com' },
      { name: 'Nature News', web: 'https://www.nature.com/news' },
    ],
  },
  {
    name: 'আন্তর্জাতিক ব্যবসা ও অর্থনীতি',
    items: [
      { name: 'Bloomberg', web: 'https://www.bloomberg.com' },
      { name: 'Financial Times', web: 'https://www.ft.com' },
      { name: 'Forbes', web: 'https://www.forbes.com' },
      { name: 'Fortune', web: 'https://fortune.com' },
      { name: 'The Economist', web: 'https://www.economist.com' },
      { name: 'Business Insider', web: 'https://www.businessinsider.com' },
      { name: 'CNBC', web: 'https://www.cnbc.com' },
      { name: 'MarketWatch', web: 'https://www.marketwatch.com' },
    ],
  },
];

const WorldNewsPortal = () => {
  const [selectedSub, setSelectedSub] = useState(categories[0]);
  if (!categories) return null;
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
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