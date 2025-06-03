


// 'use client';
// import { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useTranslation } from '@/lib/useTranslation';

// export default function Hero() {
//   const heroRef = useRef(null);
//   const { t } = useTranslation('home');

//   useEffect(() => {
//     if (heroRef.current) {
//       heroRef.current.style.opacity = '0';
//     }

//     setTimeout(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transition = 'opacity 0.8s ease-in-out';
//           }
//         },
//         { threshold: 0.1, rootMargin: '50px' }
//       );

//       if (heroRef.current) {
//         observer.observe(heroRef.current);
//       }

//       return () => {
//         if (heroRef.current) {
//           observer.unobserve(heroRef.current);
//         }
//       };
//     }, 100);
//   }, []);

//   // Safe way to get the description bullets
//   const getDescriptionBullets = () => {
//     try {
//       const bullets = t('hero.descriptionBullets', { returnObjects: true });
//       // Check if it's already an array
//       if (Array.isArray(bullets)) {
//         return bullets;
//       }
//       // If it's an object, convert to array
//       if (typeof bullets === 'object' && bullets !== null) {
//         return Object.values(bullets);
//       }
//       // Fallback to empty array
//       return [];
//     } catch (error) {
//       console.error('Error getting description bullets:', error);
//       return [];
//     }
//   };

//   return (
//     <section
//       ref={heroRef}
//       className="relative bg-[#efefed] min-h-[100vh] flex items-center w-full"
//     >
//       <div className="w-full relative z-10 py-16 md:py-20">
//         <div className="max-w-[1400px] mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="relative pl-4 md:pl-16 lg:pl-24 z-10">
//               {/* Background circle */}
//               <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full opacity-60 -z-10"></div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-neutral-900">
//                 {t('hero.experience')}
//               </h1>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-primary-400">
//                 {t('hero.compassionate')}
//               </h1>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
//                 {t('hero.nursingCare')}
//               </h1>

//               <p className="text-lg md:text-lg mb-4 text-neutral-800 max-w-lg">
//                 {t('hero.descriptionIntro')}
//               </p>
//               <ul className="list-none pl-0 text-lg md:text-lg mb-8 text-neutral-800 max-w-lg space-y-1">
//                 {getDescriptionBullets().map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right section with blue background and medical cross */}
//             <div className="hidden md:block relative pr-0">
//               <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] bg-[#00a3d9] rounded-l-3xl overflow-hidden">
//                 <Image
//                   src="/images/Hero-Section.png"
//                   alt="Nursing Services"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





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

  // Safe way to get the description bullets
  const getDescriptionBullets = () => {
    try {
      const bullets = t('hero.descriptionBullets', { returnObjects: true });
      // Check if it's already an array
      if (Array.isArray(bullets)) {
        return bullets;
      }
      // If it's an object, convert to array
      if (typeof bullets === 'object' && bullets !== null) {
        return Object.values(bullets);
      }
      // Fallback to empty array
      return [];
    } catch (error) {
      console.error('Error getting description bullets:', error);
      return [];
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100vh] flex items-center w-full overflow-hidden"
    >
      {/* Full width background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-image.jpg"
          alt="Nursing Services"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="w-full relative z-10 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="relative pl-4 md:mt-12 z-10">
              {/* Semi-transparent background with backdrop blur */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 max-w-2xl shadow-2xl border border-white/20">
                {/* Background circle with better contrast */}
                <div className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32 bg-blue-500/20 rounded-full backdrop-blur-sm -z-10"></div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-white font-bold">
                  {t('hero.experience')}
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-[#325e7d] font-bold">
                  {t('hero.compassionate')}
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white font-bold">
                  {t('hero.nursingCare')}
                </h1>

                <div className="border-t border-white/30 pt-6">
                  <p className="text-lg md:text-xl mb-4 text-gray-750 font-medium leading-relaxed">
                    {t('hero.descriptionIntro')}
                  </p>
                  <ul className="list-none pl-0 text-lg md:text-xl mb-0 text-gray-750  space-y-2">
                    {getDescriptionBullets().map((item, index) => (
                      <li key={index} className="font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side - empty space to let image show through */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}