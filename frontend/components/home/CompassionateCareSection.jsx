// // 'use client';
// // import { useState, useRef } from 'react';
// // import Image from 'next/image';

// // export default function CompassionateCareSection() {
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const videoRef = useRef(null);

// //   const handlePlayVideo = () => {
// //     if (videoRef.current) {
// //       if (isPlaying) {
// //         videoRef.current.pause();
// //       } else {
// //         videoRef.current.play();
// //       }
// //       setIsPlaying(!isPlaying);
// //     }
// //   };

// //   return (
// //     <section className="relative w-full overflow-hidden rounded-3xl my-12 md:my-16">
// //       {/* Background image */}
// //       <div className="relative w-full h-[600px] md:h-[650px]">
// //         <Image
// //           src="/images/image-card-9.jpg"
// //           alt="Healthcare professionals"
// //           fill
// //           priority
// //           className="object-cover"
// //         />
// //         {/* Lighter overlay on the entire image */}
// //         <div className="absolute inset-0 bg-black/20"></div>
// //       </div>

// //       {/* Content overlay - now with more transparent background */}
// //       <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-6 text-center">
// //         {/* Inner content container with semi-transparent background */}
// //         <div className="w-full max-w-5xl p-8 rounded-3xl bg-black/30 backdrop-blur-sm">

// //           {/* Heading */}
// //           <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-semibold mb-5">
// //             Experience Compassionate Care
// //           </h2>
          
// //           {/* Description */}
// //           <p className="max-w-2xl mx-auto mb-12 text-lg">
// //             Jay Shankar Nursing Bureau transforms your healthcare experience with dedicated support 
// //             in hospitals and personalized assistance for elderly patients in their homes. Our specialized 
// //             nursing services ensure that every patient receives comprehensive care tailored to their 
// //             unique health requirements.
// //           </p>
          
// //           {/* Stats section */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4 w-full max-w-4xl mx-auto relative">
// //             <div className="flex flex-col items-center">
// //               <h3 className="text-4xl text-white md:text-5xl font-bold mb-2">100+</h3>
// //               <p className="text-center">Skilled Nurses Ready</p>
// //             </div>
            
// //             <div className="flex flex-col items-center">
// //               <h3 className="text-4xl text-white md:text-5xl font-bold mb-2">500+</h3>
// //               <p className="text-center">Happy Clients Served</p>
// //             </div>
            
// //             <div className="flex flex-col items-center">
// //               <h3 className="text-4xl text-white md:text-5xl font-bold mb-2">200+</h3>
// //               <p className="text-center">Personalized Care Plans</p>
// //             </div>
            
// //             <div className="flex flex-col items-center">
// //               <h3 className="text-4xl text-white md:text-5xl font-bold mb-2">30+</h3>
// //               <p className="text-center">Years of Care Experience</p>
// //             </div>
          
// //             {/* Dividers between stats */}
// //             <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-white/30"></div>
// //             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30"></div>
// //             <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-white/30"></div>
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Hidden video player that appears when play is clicked */}
// //       <div className={`absolute inset-0 bg-black ${isPlaying ? 'opacity-100 z-20' : 'opacity-0 -z-10'} transition-opacity duration-300`}>
// //         <video
// //           ref={videoRef}
// //           className="w-full h-full object-cover"
// //           controls={isPlaying}
// //           onEnded={() => setIsPlaying(false)}
// //         >
// //           <source src="/videos/nursing-care.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
        
// //         {/* Close button */}
// //         {isPlaying && (
// //           <button
// //             onClick={() => setIsPlaying(false)}
// //             className="absolute top-4 right-4 z-30 bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
// //             aria-label="Close video"
// //           >
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //             </svg>
// //           </button>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }



// // CompassionateCareSection.jsx
// 'use client';
// import { useState, useRef } from 'react';
// import Image from 'next/image';

// export default function CompassionateCareSection() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlayVideo = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <section className="relative w-full overflow-hidden rounded-3xl py-8 my-6 md:my-12 lg:my-16">
//       {/* Background image */}
//       <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
//         <Image
//           src="/images/image-card-9.jpg"
//           alt="Healthcare professionals"
//           priority
//           className="object-cover"
//           fill={true}
//         />
//         {/* Lighter overlay on the entire image */}
//         <div className="absolute inset-0 bg-black/20"></div>
//       </div>

//       {/* Content overlay */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-3 sm:px-4 md:px-6 text-center">
//         {/* Inner content container with semi-transparent background */}
//         <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8 rounded-3xl bg-black/30 backdrop-blur-sm">

//           {/* Heading */}
//           <h2 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-5">
//             Experience Compassionate Care
//           </h2>
          
//           {/* Description */}
//           <p className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base md:text-lg">
//             Jay Shankar Nursing Bureau transforms your healthcare experience with dedicated support 
//             in hospitals and personalized assistance for elderly patients in their homes. Our specialized 
//             nursing services ensure that every patient receives comprehensive care tailored to their 
//             unique health requirements.
//           </p>
          
//           {/* Stats section - revised for mobile */}
//           <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 w-full max-w-4xl mx-auto relative">
//             <div className="flex flex-col items-center p-2">
//               <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">100+</h3>
//               <p className="text-center text-xs sm:text-sm md:text-base">Skilled Nurses Ready</p>
//             </div>
            
//             <div className="flex flex-col items-center p-2">
//               <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">500+</h3>
//               <p className="text-center text-xs sm:text-sm md:text-base">Happy Clients Served</p>
//             </div>
            
//             <div className="flex flex-col items-center p-2">
//               <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">200+</h3>
//               <p className="text-center text-xs sm:text-sm md:text-base">Personalized Care Plans</p>
//             </div>
            
//             <div className="flex flex-col items-center p-2">
//               <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">30+</h3>
//               <p className="text-center text-xs sm:text-sm md:text-base">Years of Care Experience</p>
//             </div>
          
//             {/* Horizontal dividers for mobile (between rows) */}
//             <div className="col-span-2 block sm:hidden h-px bg-white/30 -mt-2"></div>
            
//             {/* Vertical dividers - only visible on larger screens */}
//             {/* <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-white/30"></div>
//             <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30"></div>
//             <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-white/30"></div> */}
//           </div>
//         </div>
//       </div>
      
//       {/* Hidden video player that appears when play is clicked */}
//       {/* <div className={`absolute inset-0 bg-black ${isPlaying ? 'opacity-100 z-20' : 'opacity-0 -z-10'} transition-opacity duration-300`}>
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           controls={isPlaying}
//           onEnded={() => setIsPlaying(false)}
//         >
//           <source src="/videos/nursing-care.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
        

//         {isPlaying && (
//           <button
//             onClick={() => setIsPlaying(false)}
//             className="absolute top-4 right-4 z-30 bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
//             aria-label="Close video"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         )}
//       </div> */}
//     </section>
//   );
// }






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
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">100+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.skilledNurses')}</p>
            </div>
            
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">500+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.happyClients')}</p>
            </div>
            
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">200+</h3>
              <p className="text-center text-xs sm:text-sm md:text-base">{t('compassionateCare.carePlans')}</p>
            </div>
            
            <div className="flex flex-col items-center p-2">
              <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">30+</h3>
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