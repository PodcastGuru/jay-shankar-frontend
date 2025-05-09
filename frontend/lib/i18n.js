import enCommon from '../public/locales/en/common.json';
import enHome from '../public/locales/en/home.json';
import mrCommon from '../public/locales/mr/common.json';
import mrHome from '../public/locales/mr/home.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
  },
  mr: {
    common: mrCommon,
    home: mrHome,
  }
};

export function useTranslation(locale, namespace) {
  const translations = resources[locale]?.[namespace] || {};
  
  const t = (key) => {
    // Support nested keys like 'header.home'
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key; // Return the key if translation not found
    }
    
    return value || key;
  };
  
  return { t };
}