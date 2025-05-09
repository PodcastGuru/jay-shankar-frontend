'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to English
  const [locale, setLocale] = useState('en');
  
  useEffect(() => {
    // Load language preference from localStorage on client side
    try {
      const savedLocale = localStorage.getItem('language') || 'en';
      setLocale(savedLocale);
    } catch (error) {
      // Handle localStorage not being available
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    try {
      localStorage.setItem('language', newLocale);
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}