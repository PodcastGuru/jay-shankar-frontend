'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export function useTranslation(namespace) {
  const { locale } = useLanguage();
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTranslations() {
      try {
        // Dynamically load the translation file based on current locale
        const response = await fetch(`/locales/${locale}/${namespace}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}/${namespace}:`, error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, [locale, namespace]);

  const t = (key) => {
    if (isLoading) return key;

    // Support nested keys like 'header.home'
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key; // Return the key if translation not found
    }
    
    return value || key;
  };
  
  return { t, isLoading };
}