// 'use client';

// import { useEffect, useRef } from 'react';
// import Image from 'next/image';

// const features = [
//   {
//     title: 'Qualified Professionals',
//     description: 'Our team consists of certified nurses and healthcare professionals with extensive experience.',
//     icon: '/images/icons/certificate.svg',
//   },
//   {
//     title: '24/7 Availability',
//     description: 'Our services are available round the clock to address your healthcare needs at any time.',
//     icon: '/images/icons/24-hours.svg',
//   },
//   {
//     title: 'Personalized Care',
//     description: 'We develop customized care plans tailored to each patients specific healthcare requirements.',
//     icon: '/images/icons/care-plan.svg',
//   },
//   {
//     title: 'Quick Response',
//     description: 'Our rapid response team ensures that urgent staffing needs are met promptly.',
//     icon: '/images/icons/fast-response.svg',
//   },
// ];

// export default function WhyChooseUs() {
//   const sectionRef = useRef(null);
//   const featureRefs = useRef([]);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === sectionRef.current) {
//               entry.target.classList.add('fade-in');
//             } else if (entry.target === imageRef.current) {
//               entry.target.classList.add('slide-in-right');
//               entry.target.classList.add('opacity-100');
//             } else {
//               entry.target.classList.add('slide-up');
//               entry.target.classList.add('opacity-100');
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     if (imageRef.current) {
//       observer.observe(imageRef.current);
//     }

//     featureRefs.current.forEach((ref) => {
//       if (ref) {
//         observer.observe(ref);
//       }
//     });

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//       if (imageRef.current) {
//         observer.unobserve(imageRef.current);
//       }
//       featureRefs.current.forEach((ref) => {
//         if (ref) {
//           observer.unobserve(ref);
//         }
//       });
//     };
//   }, []);

//   return (
//     <section className="section-padding bg-white">
//       <div 
//         ref={sectionRef} 
//         className="container-custom opacity-0"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Why Choose Us</span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading Nursing Service Provider for Over 15 Years</h2>
//             <p className="text-lg text-neutral-600 mb-8">
//               We are committed to providing exceptional healthcare services with compassion and professionalism. Our team of dedicated nurses ensures the highest quality of care for our patients.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index}
//                   ref={(el) => (featureRefs.current[index] = el)}
//                   className="flex items-start opacity-0 transform translate-y-10 transition-all duration-700"
//                   style={{ transitionDelay: `${150 * index}ms` }}
//                 >
//                   <div className="mr-4 bg-primary-100 p-3 rounded-lg">
//                     <Image 
//                       src={feature.icon} 
//                       alt=""
//                       width={24}
//                       height={24}
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2 text-primary-700">{feature.title}</h3>
//                     <p className="text-neutral-600">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div 
//             ref={imageRef}
//             className="relative h-[500px] opacity-0 transform translate-x-10 transition-all duration-700"
//           >
//             <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary-100 rounded-lg z-0"></div>
//             <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-secondary-100 rounded-lg z-0"></div>
//             <div className="relative z-10 h-full shadow-xl rounded-lg overflow-hidden">
//               <Image 
//                 src="/images/nurse-team.jpg" 
//                 alt="Our nursing team"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }