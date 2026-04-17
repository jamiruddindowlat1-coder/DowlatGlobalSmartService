import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#e91e63';
const ICON = '🔤';

const subCategories = [
  {
    name: 'ইংরেজি শিক্ষা',
    items: [
      { name: 'Duolingo', web: 'https://www.duolingo.com' },
      { name: 'BBC Learning English', web: 'https://www.bbc.co.uk/learningenglish' },
      { name: 'British Council', web: 'https://www.britishcouncil.org' },
      { name: 'EnglishClub', web: 'https://www.englishclub.com' },
      { name: 'Grammarly', web: 'https://www.grammarly.com' },
      { name: 'Cambridge English', web: 'https://www.cambridgeenglish.org' },
      { name: 'VOA Learning English', web: 'https://learningenglish.voanews.com' },
      { name: 'Perfect English Grammar', web: 'https://www.perfect-english-grammar.com' },
      { name: 'English Grammar in Use', web: 'https://www.cambridge.org/elt/blog/category/grammar' },
      { name: 'Coursera English', web: 'https://www.coursera.org/courses?query=english' },
      { name: 'Englisch-Hilfen', web: 'https://www.englisch-hilfen.de/en' },
      { name: 'IELTS.org', web: 'https://www.ielts.org' },
      { name: 'TOEFL (ETS)', web: 'https://www.ets.org/toefl' },
    ],
  },
  {
    name: 'আরবি শিক্ষা',
    items: [
      { name: 'Madinah Arabic', web: 'https://www.madinaharabic.com' },
      { name: 'ArabicPod101', web: 'https://www.arabicpod101.com' },
      { name: 'Quran Arabic', web: 'https://quran.com' },
      { name: 'Learn Arabic Online', web: 'https://www.learnarabiconline.com' },
      { name: 'Arabic Online', web: 'https://arabic.online' },
      { name: 'Bayyinah TV', web: 'https://www.bayyinahtv.com' },
      { name: 'ArabicHub', web: 'https://www.arabichub.com' },
      { name: 'Nassra Arabic', web: 'https://www.nassra.com' },
    ],
  },
  {
    name: 'হিন্দি শিক্ষা',
    items: [
      { name: 'HindiPod101', web: 'https://www.hindipod101.com' },
      { name: 'Learn Hindi Online', web: 'https://www.learnhindionline.com' },
      { name: 'Rosetta Stone Hindi', web: 'https://www.rosettastone.com/learn/hindi' },
      { name: 'Hindi Shabdkosh', web: 'https://www.shabdkosh.com' },
      { name: 'e-Hindi', web: 'https://www.e-hindi.in' },
      { name: 'Hindi Online', web: 'https://www.hindionline.eu' },
    ],
  },
  {
    name: 'বাংলা শিক্ষা',
    items: [
      { name: 'Bangla Academy', web: 'https://www.banglaacademy.org.bd' },
      { name: 'Bengali Pod101', web: 'https://www.bengalipod101.com' },
      { name: 'Amar Bangla', web: 'https://www.amarbangla.net' },
      { name: 'Shudhashabd', web: 'https://www.shudhashabd.com' },
      { name: 'Bengali Language Course', web: 'https://lear101.com/bengali' },
    ],
  },
  {
    name: 'চীনা ভাষা',
    items: [
      { name: 'HSK Academy', web: 'https://www.hsk.academy' },
      { name: 'ChinesePod', web: 'https://chinesepod.com' },
      { name: 'HelloChinese', web: 'https://www.hellochinese.cc' },
      { name: 'Yoyo Chinese', web: 'https://www.yoyochinese.com' },
      { name: 'Chinese Class 101', web: 'https://www.chineseclass101.com' },
      { name: 'MDBG Dictionary', web: 'https://www.mdbg.net' },
      { name: 'Skritter', web: 'https://skritter.com' },
    ],
  },
  {
    name: 'জাপানি ভাষা',
    items: [
      { name: 'JapanesePod101', web: 'https://www.japanesepod101.com' },
      { name: 'NHK World Japanese', web: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/' },
      { name: 'Tofugu', web: 'https://www.tofugu.com' },
      { name: 'Jisho Dictionary', web: 'https://jisho.org' },
      { name: 'WaniKani', web: 'https://www.wanikani.com' },
      { name: 'Genki Online', web: 'https://genki.japantimes.co.jp' },
      { name: 'Anki Japanese', web: 'https://apps.ankiweb.net' },
    ],
  },
  {
    name: 'কোরিয়ান ভাষা',
    items: [
      { name: 'KoreanClass101', web: 'https://www.koreanclass101.com' },
      { name: 'Talk To Me In Korean', web: 'https://talktomeinkorean.com' },
      { name: 'TOPIK Guide', web: 'https://www.topikguide.com' },
      { name: 'Naver Dictionary', web: 'https://dict.naver.com' },
      { name: 'How to Study Korean', web: 'https://www.howtostudykorean.com' },
      { name: 'Sogang Korean', web: 'https://korean.sogang.ac.kr' },
    ],
  },
  {
    name: 'ফরাসি ভাষা',
    items: [
      { name: 'Alliance Française', web: 'https://www.alliancefrancaise.net' },
      { name: 'FrenchPod101', web: 'https://www.frenchpod101.com' },
      { name: 'Babbel French', web: 'https://www.babbel.com/learn-french' },
      { name: 'Bonjour de France', web: 'https://www.bonjourdefrance.com' },
      { name: 'TV5Monde Langue Française', web: 'https://langue.tv5monde.com' },
      { name: 'DELF Preparation', web: 'https://www.ciep.fr/delf-dalf' },
    ],
  },
  {
    name: 'স্প্যানিশ ভাষা',
    items: [
      { name: 'SpanishPod101', web: 'https://www.spanishpod101.com' },
      { name: 'StudySpanish', web: 'https://www.studyspanish.com' },
      { name: 'Cervantes Institute', web: 'https://www.cervantes.es' },
      { name: 'SpanishDict', web: 'https://www.spanishdict.com' },
      { name: 'Fluencia', web: 'https://fluencia.com' },
      { name: 'Notes in Spanish', web: 'https://www.notesinspanish.com' },
    ],
  },
  {
    name: 'জার্মান ভাষা',
    items: [
      { name: 'GermanPod101', web: 'https://www.germanpod101.com' },
      { name: 'Deutsche Welle Learn German', web: 'https://www.dw.com/en/learn-german/s-2469' },
      { name: 'Goethe Institut', web: 'https://www.goethe.de/en/spr/kur.html' },
      { name: 'Lingolia German', web: 'https://deutsch.lingolia.com/en' },
      { name: 'Easy German', web: 'https://www.easygerman.org' },
      { name: 'German Verbs', web: 'https://www.verbix.com/languages/german' },
    ],
  },
  {
    name: 'রাশিয়ান ভাষা',
    items: [
      { name: 'RussianPod101', web: 'https://www.russianpod101.com' },
      { name: 'Master Russian', web: 'https://www.masterrussian.com' },
      { name: 'Russian for Free', web: 'https://www.russianforfree.com' },
      { name: 'Russki Yazik', web: 'https://www.russisch-fuer-alle.de/en' },
      { name: 'Learn Russian Online', web: 'https://learnrussian.rt.com' },
    ],
  },
  {
    name: 'পর্তুগিজ ভাষা',
    items: [
      { name: 'PortuguesePod101', web: 'https://www.portuguesepod101.com' },
      { name: 'Practice Portuguese', web: 'https://www.practiceportuguese.com' },
      { name: 'Português Para Estrangeiros', web: 'https://www.portugueseforspanishspeakers.com' },
      { name: 'Ciberdúvidas', web: 'https://ciberduvidas.iscte-iul.pt' },
      { name: 'Camões Instituto', web: 'https://www.instituto-camoes.pt' },
    ],
  },
  {
    name: 'ইতালিয়ান ভাষা',
    items: [
      { name: 'ItalianPod101', web: 'https://www.italianpod101.com' },
      { name: 'Imparare Italiano', web: 'https://www.imparareitaliano.com' },
      { name: 'One World Italiano', web: 'https://www.oneworlditaliano.com' },
      { name: 'Dante Alighieri', web: 'https://www.dantealighieri.it' },
      { name: 'Italian Grammar', web: 'https://www.italian-grammar.net' },
    ],
  },
  {
    name: 'তুর্কি ভাষা',
    items: [
      { name: 'TurkishClass101', web: 'https://www.turkishclass101.com' },
      { name: 'Learn Turkish Online', web: 'https://www.turkishexplained.com' },
      { name: 'Yunus Emre Institute', web: 'https://www.yee.org.tr/en' },
      { name: 'Turkish Tea Time', web: 'https://turkishteatime.com' },
      { name: 'TDK Sözlük', web: 'https://sozluk.gov.tr' },
    ],
  },
  {
    name: 'ফার্সি ভাষা',
    items: [
      { name: 'PersianPod101', web: 'https://www.persianpod101.com' },
      { name: 'Learn Persian Online', web: 'https://www.learnpersianonline.com' },
      { name: 'Chai and Conversation', web: 'https://chaiandconversation.com' },
      { name: 'Farsi School', web: 'https://www.farsischool.com' },
    ],
  },
  {
    name: 'উর্দু ভাষা',
    items: [
      { name: 'UrduPod101', web: 'https://www.urdupod101.com' },
      { name: 'Learn Urdu Online', web: 'https://www.learnurdoonline.com' },
      { name: 'Urdu Gah', web: 'https://www.urdugah.com' },
      { name: 'Rekhta Urdu', web: 'https://www.rekhta.org' },
    ],
  },
  {
    name: 'হিব্রু ভাষা',
    items: [
      { name: 'HebrewPod101', web: 'https://www.hebrewpod101.com' },
      { name: 'Learn Hebrew', web: 'https://www.learnhebrew.org.il' },
      { name: 'Hebrew Online', web: 'https://www.hebrew-online.com' },
      { name: 'Pealim', web: 'https://www.pealim.com' },
    ],
  },
  {
    name: 'সুইডিশ ভাষা',
    items: [
      { name: 'SwedishPod101', web: 'https://www.swedishpod101.com' },
      { name: 'Swedish Institute', web: 'https://si.se/en' },
      { name: 'Learn Swedish Online', web: 'https://www.learnswedishonline.com' },
      { name: 'Folkets Lexikon', web: 'https://folkets-lexikon.csc.kth.se/folkets' },
    ],
  },
  {
    name: 'ডাচ ভাষা',
    items: [
      { name: 'DutchPod101', web: 'https://www.dutchpod101.com' },
      { name: 'Dutch Grammar', web: 'https://www.dutchgrammar.com' },
      { name: 'NT2 Taalmenu', web: 'https://www.taalmenu.nl' },
      { name: 'Learn Dutch Online', web: 'https://www.learndutchonline.nl' },
    ],
  },
  {
    name: 'গ্রিক ভাষা',
    items: [
      { name: 'GreekPod101', web: 'https://www.greekpod101.com' },
      { name: 'Kypros Net Greek', web: 'https://www.kypros.org/LearnGreek' },
      { name: 'Greek Online', web: 'https://www.greek-language.gr/greekLang/index.html' },
      { name: 'GreekGate', web: 'https://greekgate.org' },
    ],
  },
  {
    name: 'ইন্দোনেশিয়ান ভাষা',
    items: [
      { name: 'IndonesianPod101', web: 'https://www.indonesianpod101.com' },
      { name: 'Learn Indonesian', web: 'https://www.learnindone.com' },
      { name: 'KBBI Online', web: 'https://kbbi.kemdikbud.go.id' },
      { name: 'Transparent Indonesian', web: 'https://www.transparent.com/learn-indonesian' },
    ],
  },
  {
    name: 'মালয় ভাষা',
    items: [
      { name: 'MalayPod101', web: 'https://www.malaypod101.com' },
      { name: 'Dewan Bahasa', web: 'https://prpm.dbp.gov.my' },
      { name: 'Learn Malay', web: 'https://www.learnmalay.net' },
    ],
  },
  {
    name: 'থাই ভাষা',
    items: [
      { name: 'ThaiPod101', web: 'https://www.thaipod101.com' },
      { name: 'Learn Thai from a White Guy', web: 'https://www.learnthaifromawhiteguy.com' },
      { name: 'Thai Language', web: 'https://www.thai-language.com' },
      { name: 'Ling Thai', web: 'https://ling-app.com/th' },
    ],
  },
  {
    name: 'ভিয়েতনামি ভাষা',
    items: [
      { name: 'VietnamesePod101', web: 'https://www.vietnamesepod101.com' },
      { name: 'Learn Vietnamese Online', web: 'https://www.learnvietnamese.org' },
      { name: 'Tiếng Việt', web: 'https://tiengviet.icu' },
    ],
  },
  {
    name: 'হিন্দুস্তানি/পাঞ্জাবি',
    items: [
      { name: 'PunjabiPod101', web: 'https://www.punjabipod101.com' },
      { name: 'Learn Punjabi', web: 'https://www.learnpunjabi.org' },
      { name: 'Punjabi University', web: 'https://www.punjabiuniversity.ac.in' },
    ],
  },
  {
    name: 'সোয়াহিলি ভাষা',
    items: [
      { name: 'SwahiliPod101', web: 'https://www.swahilipod101.com' },
      { name: 'Kamusi Swahili', web: 'https://kamusi.org' },
      { name: 'Learn Swahili', web: 'https://www.learnswahilionline.com' },
    ],
  },
  {
    name: 'অনুবাদ টুলস',
    items: [
      { name: 'Google Translate', web: 'https://translate.google.com' },
      { name: 'DeepL Translator', web: 'https://www.deepl.com/translator' },
      { name: 'Microsoft Translator', web: 'https://www.bing.com/translator' },
      { name: 'Reverso', web: 'https://www.reverso.net' },
      { name: 'Yandex Translate', web: 'https://translate.yandex.com' },
      { name: 'Papago (Naver)', web: 'https://papago.naver.com' },
      { name: 'Linguee', web: 'https://www.linguee.com' },
      { name: 'iTranslate', web: 'https://www.itranslate.com' },
      { name: 'Collins Dictionary', web: 'https://www.collinsdictionary.com' },
      { name: 'WordReference', web: 'https://www.wordreference.com' },
    ],
  },
  {
    name: 'বহুভাষা প্ল্যাটফর্ম',
    items: [
      { name: 'Duolingo', web: 'https://www.duolingo.com' },
      { name: 'Babbel', web: 'https://www.babbel.com' },
      { name: 'Rosetta Stone', web: 'https://www.rosettastone.com' },
      { name: 'Pimsleur', web: 'https://www.pimsleur.com' },
      { name: 'Memrise', web: 'https://www.memrise.com' },
      { name: 'Busuu', web: 'https://www.busuu.com' },
      { name: 'italki', web: 'https://www.italki.com' },
      { name: 'Preply', web: 'https://preply.com' },
      { name: 'Tandem', web: 'https://www.tandem.net' },
      { name: 'HelloTalk', web: 'https://www.hellotalk.com' },
      { name: 'Clozemaster', web: 'https://www.clozemaster.com' },
      { name: 'LingQ', web: 'https://www.lingq.com' },
    ],
  },
];

const LanguagePortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`ভাষা শিক্ষা - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default LanguagePortal;