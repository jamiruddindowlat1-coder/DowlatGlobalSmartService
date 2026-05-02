import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { AdProvider } from "./components/AdManager";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NavigationProvider } from "./contexts/NavigationContext";

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <AdProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:divKey" element={<Home />} />
          </Routes>
        </AdProvider>
      </NavigationProvider>
    </LanguageProvider>
  );
}