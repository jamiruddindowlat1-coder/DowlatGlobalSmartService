import React, { createContext, useContext, useState } from 'react';
import { CONTENT_DATA } from '../data/navigationData';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [lang, setLang] = useState('bn');
  const [activeSubKey, setActiveSubKey] = useState(null);
  
  const content = CONTENT_DATA[lang];
  const folderList = content.folders;

  return (
    <NavigationContext.Provider value={{ 
      lang, 
      setLang, 
      content, 
      folderList,
      activeSubKey,
      setActiveSubKey
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
