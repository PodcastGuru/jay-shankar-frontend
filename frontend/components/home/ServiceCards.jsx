// 'use client';
// import { useState, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function ServiceCards() {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const cards = [
//     {
//       tag: "Expert Nursing Care",
//       title: "Compassionate Care",
//       description: "Our qualified professionals provide top-notch care in both hospitals and home settings.",
//       image: "/images/patient1.png"
//     },
//     {
//       tag: "Personalized Home Care",
//       title: "Premium Elder Care",
//       description: "Ensuring well-being with companionship and daily support.",
//       secondaryText: "Our committed professionals enhance your quality of life through personalized care tailored to your needs.",
//       image: "/images/old-lady.jpg"
//     }
//   ];
  
//   const handlePrev = () => {
//     setActiveIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
//   };
  
//   const handleNext = () => {
//     setActiveIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
//   };
  
//   return (
//     <section className="py-16 md:py-24 bg-white relative overflow-hidden">
//       {/* Dots pattern */}
//       <div className="absolute left-0 top-1/3 w-16 h-64">
//         <div className="grid grid-cols-5 gap-2">
//           {[...Array(25)].map((_, i) => (
//             <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
//           ))}
//         </div>
//       </div>
      
//       <div className="container-custom">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* Left Content - 5 columns */}
//           <div className="lg:col-span-5 pr-0 lg:pr-6">
//             <div className="inline-block">
//               <Link href="/about" className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors mb-6">
//                 About Us
//               </Link>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
//               Experience Tailored<br />
//               Nursing Services <span className="text-primary-400">at</span><br />
//               <span className="text-primary-400">Jay Shankar Nursing</span><br />
//               <span className="text-primary-400">Bureau.</span>
//             </h2>
            
//             <p className="text-neutral-700 mb-8 max-w-lg">
//               Navigating the complexities of healthcare can be challenging. Whether you need skilled professionals in a hospital or compassionate care for elderly patients at home, our dedicated team is committed to providing exceptional assistance with a personal touch.
//             </p>
            
//             <Link 
//               href="/contact" 
//               className="inline-flex items-center px-6 py-3 bg-primary-400 text-white rounded-full hover:bg-primary-500 transition-colors"
//             >
//               <span>Connect with Us</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </Link>
//           </div>
          
//           {/* Right Cards - 7 columns */}
//           <div className="lg:col-span-7 relative">
//             {/* Show both cards side by side on desktop, only active card on mobile */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* First Card - Always visible on desktop, visible when active on mobile */}
//               <div className={`${activeIndex === 0 ? 'block' : 'hidden lg:block'} transition-opacity duration-300`}>
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
//                   <div className="relative h-72 md:h-80">
//                     <Image 
//                       src={cards[0].image} 
//                       alt={cards[0].title} 
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                    
//                     {/* Tag */}
//                     <div className="absolute top-6 left-6">
//                       <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-primary-600 rounded-full text-sm font-medium">
//                         {cards[0].tag}
//                       </span>
//                     </div>
                    
//                     {/* Title */}
//                     <div className="absolute bottom-6 left-6 right-6">
//                       <h3 className="text-2xl font-bold text-white mb-2">{cards[0].title}</h3>
//                       <p className="text-white/90 text-sm">{cards[0].description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Second Card - Always visible on desktop, visible when active on mobile */}
//               <div className={`${activeIndex === 1 ? 'block' : 'hidden lg:block'} transition-opacity duration-300`}>
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
//                   <div className="relative h-72 md:h-80">
//                     <Image 
//                       src={cards[1].image} 
//                       alt={cards[1].title} 
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                    
//                     {/* Tag */}
//                     <div className="absolute top-6 left-6">
//                       <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-primary-600 rounded-full text-sm font-medium">
//                         {cards[1].tag}
//                       </span>
//                     </div>
                    
//                     {/* Title */}
//                     <div className="absolute bottom-6 left-6 right-6">
//                       <h3 className="text-2xl font-bold text-white mb-2">{cards[1].title}</h3>
//                       <p className="text-white/90 text-sm">{cards[1].description}</p>
//                     </div>
//                   </div>
                  
//                   {/* Additional content for second card */}
//                   <div className="p-6">
//                     <p className="text-neutral-700">{cards[1].secondaryText}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Navigation buttons - Only shown on mobile */}
//             <div className="flex justify-end mt-4 space-x-2 lg:hidden">
//               <button 
//                 onClick={handlePrev}
//                 className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//               <button 
//                 onClick={handleNext}
//                 className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
            
//             {/* Desktop Navigation buttons - positioned at the bottom right */}
//             <div className="hidden lg:flex justify-end mt-4 space-x-2">
//               <button 
//                 onClick={handlePrev}
//                 className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//               <button 
//                 onClick={handleNext}
//                 className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cards = [
    {
      tag: "Expert Nursing Care",
      title: "Compassionate Care",
      description: "Our qualified professionals provide top-notch care in both hospitals and home settings.",
      image: "/images/patient1.png"
    },
    {
      tag: "Personalized Home Care",
      title: "Premium Elder Care",
      description: "Ensuring well-being with companionship and daily support.",
      secondaryText: "Our committed professionals enhance your quality of life through personalized care tailored to your needs.",
      image: "/images/old-lady.jpg"
    }
  ];
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Dots pattern */}
      <div className="absolute left-0 top-1/3 w-16 h-64">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 5 columns */}
          <div className="lg:col-span-5 pr-0 lg:pr-6">
            <div className="inline-block">
              <Link href="/about" className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors mb-6">
                About Us
              </Link>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Experience Tailored<br />
              Nursing Services <span className="text-primary-400">at</span><br />
              <span className="text-primary-400">Jay Shankar Nursing</span><br />
              <span className="text-primary-400">Bureau.</span>
            </h2>
            
            <p className="text-neutral-700 mb-8 max-w-lg">
              Navigating the complexities of healthcare can be challenging. Whether you need skilled professionals in a hospital or compassionate care for elderly patients at home, our dedicated team is committed to providing exceptional assistance with a personal touch.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary-400 text-white rounded-full hover:bg-primary-500 transition-colors"
            >
              <span>Connect with Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Right Cards - 7 columns */}
          <div className="lg:col-span-7 relative">
            {/* Show both cards side by side on desktop, only active card on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First Card - Always visible on desktop, visible when active on mobile */}
              <div className={`${activeIndex === 0 ? 'block' : 'hidden lg:block'} transition-opacity duration-300`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                  {/* Full height image since there's no secondary text */}
                  <div className="relative h-full">
                    <Image 
                      src={cards[0].image} 
                      alt={cards[0].title} 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                    
                    {/* Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-primary-600 rounded-full text-sm font-medium">
                        {cards[0].tag}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{cards[0].title}</h3>
                      <p className="text-white/90 text-sm">{cards[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Card - Always visible on desktop, visible when active on mobile */}
              <div className={`${activeIndex === 1 ? 'block' : 'hidden lg:block'} transition-opacity duration-300`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                  <div className="relative h-72 md:h-80">
                    <Image 
                      src={cards[1].image} 
                      alt={cards[1].title} 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                    
                    {/* Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-primary-600 rounded-full text-sm font-medium">
                        {cards[1].tag}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{cards[1].title}</h3>
                      <p className="text-white/90 text-sm">{cards[1].description}</p>
                    </div>
                  </div>
                  
                  {/* Additional content for second card */}
                  {cards[1].secondaryText && (
                    <div className="p-6">
                      <p className="text-neutral-700">{cards[1].secondaryText}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Navigation buttons - Only shown on mobile */}
            <div className="flex justify-end mt-4 space-x-2 lg:hidden">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation buttons - positioned at the bottom right */}
            <div className="hidden lg:flex justify-end mt-4 space-x-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}