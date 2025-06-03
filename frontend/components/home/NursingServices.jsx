




'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../../lib/useTranslation';

export default function NursingServices() {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const { t } = useTranslation('home');

  // Service cards data
  const services = [
    {
      id: 1,
      titleKey: "nursingServices.cards.rehabilitation",
      image: "/images/patient-care.jpg"
    },
    {
      id: 2,
      titleKey: "nursingServices.cards.skilledNursing",
      image: "/images/skill-nursing.jpeg"

    },
    {
      id: 3,
      titleKey: "nursingServices.cards.elderCare",
      image: "/images/image-card-6.png"

    },
    {
      id: 4,
      titleKey: "nursingServices.cards.compassionateSupport",
      image: "/images/baby-care.jpg"
    },
    {
      id: 5,

      titleKey: "nursingServices.cards.postSurgery",
      image: "/images/post-surgery-care.webp"
    },
    {
      id: 6,

      titleKey: "nursingServices.cards.dementiaCare",
      image: "/images/male-care-attendant.jpg"

    },
    {
      id: 7,
      titleKey: "nursingServices.cards.homeCare",
      image: "/images/image-card-4.jpg"

    },
    {
      id: 8,
      titleKey: "nursingServices.cards.personalizedCare",
      image: "/images/personalize-care.jpg"

    },
  ];

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
        setIsMobile(true);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
        setIsMobile(false);
      } else {
        setVisibleCards(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > services.length - visibleCards ? services.length - visibleCards : newIndex;
    });
  };

  const canGoNext = startIndex < services.length - visibleCards;
  const canGoPrev = startIndex > 0;

  return (
    <section className="py-30 md:py-24 bg-[#f5f6f9]">
      <div className="container-custom max-w-6xl mx-auto relative max-h-[100vh] overflow">
        {/* Blue decorative borders */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-blue-500 rounded-l-2xl"></div>
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-blue-500 rounded-r-2xl"></div>

        <div className="px-8 py-12">
          {/* Header with title and buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <Link href="/services" className="border border-neutral-400 text-neutral-700 rounded-full px-5 py-2 text-sm font-medium hover:bg-neutral-100 transition-colors">
                {t('nursingServices.title')}
              </Link>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800">
                {t('nursingServices.title')}
              </h2>
            </div>
            <Link href="/services" className="flex items-center text-white bg-blue-500 rounded-full px-5 py-2 hover:bg-blue-600 transition-colors">
              <span className="mr-2">{t('nursingServices.viewAll')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Service cards container */}
          <div className="relative overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCards)}%)`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full group">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={t(service.titleKey)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-bold">{t(service.titleKey)}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-start mt-8 space-x-2">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canGoPrev
                  ? 'border-blue-400 text-blue-500 hover:bg-blue-50'
                  : 'border-neutral-300 text-neutral-400 cursor-not-allowed'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${canGoNext
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-neutral-300 text-white cursor-not-allowed'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Description text */}
          <div className="mt-12 md:mt-16">
            <p className="text-neutral-700 text-center md:text-right max-w-3xl ml-auto">
              {t('nursingServices.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}