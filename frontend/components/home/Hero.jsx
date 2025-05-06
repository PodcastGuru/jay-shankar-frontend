'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);

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
                Experience
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-primary-400">
                Compassionate
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
                Nursing Care
              </h1>
              
              <p className="text-lg md:text-lg mb-8 text-neutral-800 max-w-lg">
                Tailored to your specific needs, our team at Jay Shankar Nursing Bureau is here to provide the highest quality of service, whether in a hospital setting or for personalized assistance at home. Experience individualized attention that enhances the well-being of our patients.
              </p>
              
              {/* <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary-400 text-white rounded-full hover:bg-primary-500 transition-colors"
              >
                <span>Reach Out for Care</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link> */}
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