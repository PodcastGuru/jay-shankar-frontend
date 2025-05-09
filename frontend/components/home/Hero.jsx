

'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/lib/useTranslation';

export default function Hero() {
  const heroRef = useRef(null);
  const { t } = useTranslation('home');

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
    }
    
    setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transition = 'opacity 0.8s ease-in-out';
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (heroRef.current) {
        observer.observe(heroRef.current);
      }

      return () => {
        if (heroRef.current) {
          observer.unobserve(heroRef.current);
        }
      };
    }, 100);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative bg-[#efefed] min-h-[100vh] flex items-center w-full"
    >
      <div className="w-full relative z-10 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative pl-4 md:pl-16 lg:pl-24 z-10">
              {/* Background circle */}
              <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full opacity-60 -z-10"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-neutral-900">
                {t('hero.experience')}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-primary-400">
                {t('hero.compassionate')}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
                {t('hero.nursingCare')}
              </h1>
              
              <p className="text-lg md:text-lg mb-8 text-neutral-800 max-w-lg">
                {t('hero.description')}
              </p>
            </div>
            
            {/* Right section with blue background and medical cross */}
            <div className="hidden md:block relative pr-0">
              <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] bg-[#00a3d9] rounded-l-3xl overflow-hidden">
                <Image 
                  src="/images/Hero-Section.png" 
                  alt="Nursing Services" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}