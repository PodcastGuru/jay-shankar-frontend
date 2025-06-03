

'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from '../../lib/useTranslation';

export default function CompassionateCareSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { t } = useTranslation('home');

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded-3xl py-8 my-6 md:my-12 lg:my-16">
      {/* Background image */}
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
        <Image
          src="/images/image-card-9.jpg"
          alt="Healthcare professionals"
          priority
          className="object-cover"
          fill={true}
        />
        {/* Lighter overlay on the entire image */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-3 sm:px-4 md:px-6 text-center">
        {/* Inner content container with semi-transparent background */}
        <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8 rounded-3xl bg-black/30 backdrop-blur-sm">

          {/* Heading */}
          <h2 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-5">
            {t('compassionateCare.title')}
          </h2>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base md:text-lg">
            {t('compassionateCare.description')}
          </p>
          
          {/* Stats section - revised for mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 w-full max-w-4xl mx-auto relative">
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">50+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.skilledNurses')}</p>
            </div>
            
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">500+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.happyClients')}</p>
            </div>
            
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">20+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.carePlans')}</p>
            </div>
            
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">10+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.yearsExperience')}</p>
            </div>
          
            {/* Horizontal dividers for mobile (between rows) */}
            <div className="col-span-2 block sm:hidden h-px bg-white/30 -mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}