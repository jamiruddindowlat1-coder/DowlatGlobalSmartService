import React, { useState } from "react";
import Home from "./pages/Home";
import { AdProvider } from "./components/AdManager";
import { LanguageProvider } from "./contexts/LanguageContext";
import ServicePage from "./pages/ServicePage";

/* =========================
   PAGE CONSTANT
========================= */
const PAGES = {
  HOME: "home",
  SERVICE: "service",
};

/* =========================
   APP WRAPPER
========================= */
export default function App() {
  return (
    <LanguageProvider>
      <AdProvider>
        <AppContent />
      </AdProvider>
    </LanguageProvider>
  );
}

/* =========================
   MAIN APP
========================= */
function AppContent() {
  const [page, setPage] = useState(PAGES.HOME);

  return (
    <div style={{ minHeight: "100vh" }}>
      
      {/* 
          আমরা আগের ডাবল <Header /> এবং "App চলছে ✅" টেক্সটটি সরিয়ে দিয়েছি।
          এখন সরাসরি <Home /> এর ভেতর থেকেই ব্র্যান্ডিং দেখা যাবে। 
      */}

      {/* PAGES */}
      {page === PAGES.HOME && (
        <Home
          onNavigate={setPage}
        />
      )}

      {page === PAGES.SERVICE && (
        <ServicePage onBack={() => setPage(PAGES.HOME)} />
      )}

    </div>
  );
}