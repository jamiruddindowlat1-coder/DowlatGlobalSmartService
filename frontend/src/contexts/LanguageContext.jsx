/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

const translations = {
  bn: {
    academic: "একাডেমিক",
    admission: "ভর্তি",
    news_events: "সংবাদ",
    dhaka: "ঢাকা",
    chittagong: "চট্টগ্রাম",
    rajshahi: "রাজশাহী",
    khulna: "খুলনা",
    barisal: "বরিশাল",
    sylhet: "সিলেট",
    rangpur: "রংপুর",
    mymensingh: "ময়মনসিংহ",
    digital_service_center: "ডিজিটাল সেবা কেন্দ্র",
    branding_title: "দৌলত গ্লোবাল স্মার্ট সার্ভিস",
    all_rights_reserved: "সর্বস্বত্ব সংরক্ষিত",
    mobile_label: "মোবাইল",
    project_mobile: "+880 1715-487122",
    digital_directory_hero: "আপনার ডিজিটাল সেবা ডিরেক্টরি",
    search_across_all_divisions: "সারা বাংলাদেশের প্রতিষ্ঠানের তথ্য এখন আপনার হাতের মুঠোয়",
    divisions_title: "বিভাগ অনুযায়ী অনুসন্ধান"
  },
  en: {
    academic: "Academic",
    admission: "Admission",
    news_events: "News",
    dhaka: "Dhaka",
    chittagong: "Chittagong",
    rajshahi: "Rajshahi",
    khulna: "Khulna",
    barisal: "Barisal",
    sylhet: "Sylhet",
    rangpur: "Rangpur",
    mymensingh: "Mymensingh",
    digital_service_center: "Digital Service Center",
    branding_title: "DowlatGlobal Smart Service",
    all_rights_reserved: "All Rights Reserved",
    mobile_label: "Mobile",
    project_mobile: "+880 1715-487122",
    digital_directory_hero: "Your Digital Service Directory",
    search_across_all_divisions: "Services Across Bangladesh at Your Fingertips",
    divisions_title: "Browse by Division"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn");
  const t = (key) => translations[language][key] || key;
  const fontFamily = "'Noto Sans Bengali', sans-serif";
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, fontFamily }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;