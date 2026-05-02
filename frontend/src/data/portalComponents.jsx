import React, { lazy } from 'react';

const safeLazy = (importFn) => lazy(() => importFn().catch((err) => {
    console.error("Import Error:", err);
    return { default: () => <div style={{padding: '40px', color: '#ff4444', textAlign: 'center'}}>Module Load Error. Check file path.</div> };
}));

export const PORTAL_COMPONENTS = {
  dhaka: safeLazy(() => import('../pages/Divisions/DhakaDivision')),
  chittagong: safeLazy(() => import('../pages/Divisions/ChittagongDivision')),
  rajshahi: safeLazy(() => import('../pages/Divisions/RajshahiDivision')),
  khulna: safeLazy(() => import('../pages/Divisions/KhulnaDivision')),
  sylhet: safeLazy(() => import('../pages/Divisions/SylhetDivision')),
  barisal: safeLazy(() => import('../pages/Divisions/BarisalDivision')),
  rangpur: safeLazy(() => import('../pages/Divisions/RangpurDivision')),
  mymensingh: safeLazy(() => import('../pages/Divisions/MymensinghDivision')),
  all_coaching: safeLazy(() => import('../pages/AllCoachingCommunication/AllCoaching')),
  coaching_english: safeLazy(() => import('../pages/AllCoachingCommunication/EnglishAll')),
  coaching_hsc: safeLazy(() => import('../pages/AllCoachingCommunication/HscSubjectAll')),
  coaching_ssc: safeLazy(() => import('../pages/AllCoachingCommunication/SSCSubjectAll')),
  games_index: safeLazy(() => import('../pages/GamesWorld/BDGamesindex')),
  games_mobile: safeLazy(() => import('../pages/GamesWorld/Mobile&PCGames')),
  games_physical: safeLazy(() => import('../pages/GamesWorld/PhysicalGamesofWorld')),
  comedy_main: safeLazy(() => import('../pages/ComadyWorld/ComedyWorld')),
  comedy_index: safeLazy(() => import('../pages/ComadyWorld/BDComadyIndex')),
  social_main: safeLazy(() => import('../pages/SocialMediaWorld/SocialMedia')),
  social_index: safeLazy(() => import('../pages/SocialMediaWorld/SocialMediaIndex')),
  comm_main: safeLazy(() => import('../pages/WorldCommunication/Communication')),
  comm_tel: safeLazy(() => import('../pages/WorldCommunication/WorldTel')),
  news_bd_index: safeLazy(() => import('../pages/WorldNewsPaper/BDNewsPapersIndex')),
  news_world: safeLazy(() => import('../pages/WorldNewsPaper/WorldNews')),
  share_m_main: safeLazy(() => import('../pages/ShareMarketServicePortal/ShareMarket')),
  share_m_index: safeLazy(() => import('../pages/ShareMarketServicePortal/ShareIndex')),
  share_m_news: safeLazy(() => import('../pages/ShareMarketServicePortal/ShareNewsIPOBD')),
  share_w_main: safeLazy(() => import('../pages/ShareWorld/ShareWorld')),
  share_w_index: safeLazy(() => import('../pages/ShareWorld/WorldShareIndex')),
  share_w_news: safeLazy(() => import('../pages/ShareWorld/WorldShareNews')),
  lang_world: safeLazy(() => import('../pages/LanguageWorld/LanguageWorld')),
  lang_converter: safeLazy(() => import('../pages/LanguageWorld/AllLanguageConverter')),
  biz_main: safeLazy(() => import('../pages/OnlineBusiness/OnlineBusiness')),
  biz_index: safeLazy(() => import('../pages/OnlineBusiness/OnlineBusinessIndex')),
  soft_worlds: safeLazy(() => import('../pages/SoftwareWorlds/SoftwareWorlds')),
  soft_learning: safeLazy(() => import('../pages/SoftwareWorlds/SoftwareLearningIndex')),
  tourist_main: safeLazy(() => import('../pages/TouristWorld/TouristWorld')),
  tourist_comm: safeLazy(() => import('../pages/TouristWorld/TuristCommunicationIndex')),
  tourist_scene: safeLazy(() => import('../pages/TouristWorld/TuristScenariousIndex')),
  bdtv: safeLazy(() => import('../pages/BdTvAllChannel/BDTvIndex')),
  hadith: safeLazy(() => import('../pages/Hadith/Hadith')),
  tutorial: safeLazy(() => import('../pages/OnlineTutorial/OnlineTutorial')),
  waz: safeLazy(() => import('../pages/WazMahfil/WazMahfil')),
  worldcup: safeLazy(() => import('../pages/WorldCup/WorldCup')),
  worldtv: safeLazy(() => import('../pages/WorldTvChannel/WorldTvIndex')),
  quran: safeLazy(() => import('../pages/Quran/Quran')),
  quran_translate: safeLazy(() => import('../pages/Quran/TranslateofQuranandRefrence')),
  bd_all_ministry: safeLazy(() => import('../pages/Divisions/DhakaDivision')), // Placeholder if needed
  bd_all_secretary: safeLazy(() => import('../pages/Divisions/DhakaDivision')), // Placeholder
  bd_citizen_services: safeLazy(() => import('../pages/Divisions/DhakaDivision')), // Placeholder
  bd_job_services: safeLazy(() => import('../pages/Divisions/DhakaDivision')), // Placeholder
};
