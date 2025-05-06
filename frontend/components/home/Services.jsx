// 'use client';
// import { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const services = [
//   {
//     id: 'hospital',
//     title: 'Hospital Staffing',
//     description: 'We provide qualified nurses and healthcare professionals to hospitals and clinics on short-term and long-term contracts.',
//     icon: '/images/icons/hospital.svg',
//     image: '/images/services/hospital-staffing.jpg'
//   },
//   {
//     id: 'home',
//     title: 'Home Care Services',
//     description: 'Our nurses provide personalized care in the comfort of your home, helping with medication, wounds, and monitoring vital signs.',
//     icon: '/images/icons/home-care.svg',
//     image: '/images/services/home-care.jpg'
//   },
//   {
//     id: 'elderly',
//     title: 'Elderly Care',
//     description: 'Specialized care for seniors, including assistance with daily activities, medication management, and companionship.',
//     icon: '/images/icons/elderly.svg',
//     image: '/images/services/elderly-care.jpg'
//   },
//   {
//     id: 'specialized',
//     title: 'Specialized Nursing',
//     description: 'Expert care for specific conditions such as post-surgery recovery, chronic disease management, and palliative care.',
//     icon: '/images/icons/specialized.svg',
//     image: '/images/services/specialized-nursing.jpg'
//   }
// ];

// export default function Services() {
//   const sectionRef = useRef(null);
//   const serviceRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('slide-up');
//             entry.target.classList.add('opacity-100');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     serviceRefs.current.forEach((ref) => {
//       if (ref) {
//         observer.observe(ref);
//       }
//     });

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
      
//       serviceRefs.current.forEach((ref) => {
//         if (ref) {
//           observer.unobserve(ref);
//         }
//       });
//     };
//   }, []);

//   return (
//     <section className="section-padding bg-neutral-50">
//       <div 
//         ref={sectionRef} 
//         className="container-custom opacity-0 transform translate-y-10 transition-all duration-700"
//       >
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Services</h2>
//           <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
//             MediCare Nursing provides a comprehensive range of professional nursing services to meet your healthcare needs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={service.id}
//               ref={(el) => (serviceRefs.current[index] = el)}
//               className="card group opacity-0 transform translate-y-10 transition-all duration-700"
//               style={{ transitionDelay: `${150 * index}ms` }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <Image 
//                   src={service.image} 
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
//                     <Image 
//                       src={service.icon} 
//                       alt=""
//                       width={24}
//                       height={24}
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-primary-700">{service.title}</h3>
//                 </div>
//                 <p className="text-neutral-600 mb-4">{service.description}</p>
//                 <Link href={`/services#${service.id}`} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
//                   Learn More
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link href="/services" className="btn-primary">
//             View All Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }