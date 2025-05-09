



'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { useTranslation } from '../lib/useTranslation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, changeLanguage } = useLanguage();
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    changeLanguage(locale === 'en' ? 'mr' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-[#efefed]'
    }`}>
      <div className="container-custom h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <Image 
                src="/images/Logo.png" 
                alt="MediCare Nursing" 
                width={150} 
                height={150} 
                className="mr-2"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600'
              }`}>
              {t('header.home')}
            </Link>
            <Link href="/services" className={`font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600'
              }`}>
              {t('header.services')}
            </Link>
            <Link href="/contact" className={`font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600'
              }`}>
              {t('header.contactUs')}
            </Link>
          </nav>

          {/* Language Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
            >
              {t('header.language')}
            </button>
            
            <Link href="/contact" className="btn-primary">
              {t('header.bookNurse')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6 transition-colors text-primary-700"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-0 pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            <Link href="/" 
              className="text-neutral-800 hover:text-primary-600 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <Link href="/services" 
              className="text-neutral-800 hover:text-primary-600 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.services')}
            </Link>
            <Link href="/contact" 
              className="text-neutral-800 hover:text-primary-600 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.contactUs')}
            </Link>
            <button 
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="text-left text-neutral-800 hover:text-primary-600 font-medium text-lg"
            >
              {t('header.language')}
            </button>
            <Link href="/contact" 
              className="btn-primary text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.bookNurse')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}