// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function ServicesPage() {
//   const [activeTab, setActiveTab] = useState('hospital');

//   const services = {
//     hospital: [
//       {
//         id: 1,
//         title: "ICU & Critical Care",
//         description: "Specialized nursing support for critical care units with trained professionals experienced in ventilator management, cardiac monitoring, and emergency response.",
//         icon: "critical-care",
//         image: "/images/image-card-11.jpg"
//       },
//       {
//         id: 2,
//         title: "Surgical Support",
//         description: "Comprehensive pre and post-operative care to ensure successful recovery from surgical procedures with pain management and wound care expertise.",
//         icon: "surgical",
//         image: "/images/image-card-12.png"
//       },
//       {
//         id: 3,
//         title: "Medication Management",
//         description: "Professional administration of medications and monitoring for side effects, ensuring accurate dosages and proper medication schedules.",
//         icon: "medication",
//         image: "/images/image-card-13.png"
//       }
//     ],
//     home: [
//       {
//         id: 1,
//         title: "Elder Care",
//         description: "Compassionate in-home care for seniors, assisting with daily activities, mobility support, and personalized attention to maintain dignity and independence.",
//         icon: "elder",
//         image: "/images/old-lady.jpg"
//       },
//       {
//         id: 2,
//         title: "Rehabilitation Support",
//         description: "At-home rehabilitation services following surgeries or injuries, with specialized exercise programs and recovery monitoring.",
//         icon: "rehab",
//         image: "/images/patient1.png"
//       },
//       {
//         id: 3,
//         title: "Chronic Disease Management",
//         description: "Specialized care for patients with chronic conditions such as diabetes, heart disease, or respiratory conditions with regular monitoring and lifestyle guidance.",
//         icon: "chronic",
//         image: "/images/image-card-14.png"
//       }
//     ],
//     specialized: [
//       {
//         id: 1,
//         title: "Maternity & Newborn Care",
//         description: "Supportive care for new mothers and infants, including breastfeeding assistance, newborn monitoring, and postpartum recovery support.",
//         icon: "maternity",
//         image: "/images/image-card-15.jpg"
//       },
//       {
//         id: 2,
//         title: "Palliative Care",
//         description: "Compassionate end-of-life care focused on comfort, dignity, and quality of life for patients with serious illnesses and support for their families.",
//         icon: "palliative",
//         image: "/images/image-card-5.jpg"
//       },
//       {
//         id: 3,
//         title: "Mental Health Support",
//         description: "Specialized nursing care for individuals with mental health conditions, including medication management, emotional support, and crisis intervention.",
//         icon: "mental",
//         image: "/images/image-card-16.png"
//       }
//     ]
//   };

//   // SVG icons for service categories
//   const getIcon = (iconName) => {
//     const icons = {
//       "critical-care": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//         </svg>
//       ),
//       "surgical": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
//         </svg>
//       ),
//       "medication": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//         </svg>
//       ),
//       "elder": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       ),
//       "rehab": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       "chronic": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//         </svg>
//       ),
//       "maternity": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
//         </svg>
//       ),
//       "palliative": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//         </svg>
//       ),
//       "mental": (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//         </svg>
//       )
//     };
    
//     return icons[iconName] || icons["critical-care"];
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-[#efefed] min-w-screen">
//         <div className="container-custom min-h-[70vh] flex items-center justify-center">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
//               Our <span className="text-blue-500">Nursing Services</span>
//             </h1>
//             <p className="text-lg md:text-xl text-neutral-700 mb-10">
//               Jay Shankar Nursing Bureau provides compassionate, professional healthcare services 
//               tailored to your unique needs. From hospital support to home care, our expert team 
//               delivers quality nursing with empathy and excellence.
//             </p>
//             <Link 
//               href="/contact" 
//               className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
//             >
//               <span className="font-medium">Schedule a Consultation</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Service Categories */}
//       <section className="py-16 bg-white">
//         <div className="container-custom">
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-center mb-10">Choose Your Care Category</h2>
            
//             {/* Service Type Tabs */}
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               <button
//                 onClick={() => setActiveTab('hospital')}
//                 className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
//                   activeTab === 'hospital' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
//                 }`}
//               >
//                 Hospital Care
//               </button>
//               <button
//                 onClick={() => setActiveTab('home')}
//                 className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
//                   activeTab === 'home' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
//                 }`}
//               >
//                 Home Care
//               </button>
//               <button
//                 onClick={() => setActiveTab('specialized')}
//                 className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
//                   activeTab === 'specialized' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
//                 }`}
//               >
//                 Specialized Care
//               </button>
//             </div>
            
//             {/* Service Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services[activeTab].map((service) => (
//                 <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
//                   <div className="relative h-56">
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-500 mb-4">
//                       {getIcon(service.icon)}
//                     </div>
//                     <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
//                     <p className="text-neutral-600 mb-5">{service.description}</p>
//                     <Link 
//                       href={`/services/${service.id}`}
//                       className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
//                     >
//                       <span>Learn More</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Service Process */}
//       <section className="py-16 bg-[#f7fafc]">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">How Our Service Works</h2>
//             <p className="text-lg text-neutral-700">
//               We make quality healthcare accessible with a simple, transparent process
//               designed to match you with the perfect care solution.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//               <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
//               <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-3">Assessment</h3>
//               <p className="text-neutral-600">
//                 We evaluate your healthcare needs through a detailed consultation to understand specific requirements.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//               <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
//               <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-3">Care Planning</h3>
//               <p className="text-neutral-600">
//                 We develop a personalized care plan tailored to your medical needs and preferences.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//               <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
//               <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-3">Nurse Matching</h3>
//               <p className="text-neutral-600">
//                 We match you with qualified healthcare professionals who specialize in your specific care needs.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//               <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
//               <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-3">Ongoing Care</h3>
//               <p className="text-neutral-600">
//                 We provide continuous monitoring and adapt care as your health needs evolve over time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
//             <p className="text-lg text-neutral-700">
//               Hear from patients and families who have experienced our compassionate care
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-[#f7fafc] p-8 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               </div>
//               <blockquote className="mb-4 text-neutral-700">
//                 "The care my mother received was exceptional. The nurses were not only skilled but also genuinely compassionate. They made a difficult time much easier for our family."
//               </blockquote>
//               <div className="font-medium">
//                 <p className="text-blue-500">Rajesh Kumar</p>
//                 <p className="text-neutral-500 text-sm">Home Care Services</p>
//               </div>
//             </div>
            
//             <div className="bg-[#f7fafc] p-8 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               </div>
//               <blockquote className="mb-4 text-neutral-700">
//                 "After my surgery, I needed specialized care at home. The team from Jay Shankar provided excellent medical support and made my recovery smooth and comfortable."
//               </blockquote>
//               <div className="font-medium">
//                 <p className="text-blue-500">Priya Sharma</p>
//                 <p className="text-neutral-500 text-sm">Post-Surgery Care</p>
//               </div>
//             </div>
            
//             <div className="bg-[#f7fafc] p-8 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               </div>
//               <blockquote className="mb-4 text-neutral-700">
//                 "As a hospital administrator, I've been impressed with the professionalism and expertise of the nursing staff provided by Jay Shankar. They integrate seamlessly with our team."
//               </blockquote>
//               <div className="font-medium">
//                 <p className="text-blue-500">Dr. Anand Verma</p>
//                 <p className="text-neutral-500 text-sm">Hospital Staffing</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* CTA */}
//       <section className="py-16 bg-[#efefed] text-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Need Nursing Care?</h2>
//               <p className="text-lg text-black mb-6">
//                 Our team is ready to provide the compassionate, professional care you or your loved one deserves. 
//                 Contact us today to discuss your healthcare needs.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link href="/contact" className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors">
//                   Contact Us
//                 </Link>
//                 {/* <Link href="/tel:+1234567890" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
//                   Call Now
//                 </Link> */}
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-blue-400 p-4 rounded-lg">
//                   <div className="text-3xl font-bold mb-2">24/7</div>
//                   <p>Emergency Support Available</p>
//                 </div>
//                 <div className="bg-blue-400 p-4 rounded-lg">
//                   <div className="text-3xl font-bold mb-2">100+</div>
//                   <p>Experienced Nurses</p>
//                 </div>
//                 <div className="bg-blue-400 p-4 rounded-lg">
//                   <div className="text-3xl font-bold mb-2">15+</div>
//                   <p>Years of Experience</p>
//                 </div>
//                 <div className="bg-blue-400 p-4 rounded-lg">
//                   <div className="text-3xl font-bold mb-2">500+</div>
//                   <p>Satisfied Clients</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/lib/useTranslation';
export default function ServicesPage() {
  const { t } = useTranslation('services');
  const [activeTab, setActiveTab] = useState('hospital');

  // SVG icons for service categories
  const getIcon = (iconName) => {
    const icons = {
      "critical-care": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      "surgical": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      ),
      "medication": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      "elder": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      "rehab": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      "chronic": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      "maternity": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      "palliative": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ),
      "mental": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    };
    
    return icons[iconName] || icons["critical-care"];
  };

  // Define your hardcoded services with image paths and icons
  const services = {
    hospital: [
      {
        id: 1,
        titleKey: 'serviceTypes.hospital.0.title',
        descriptionKey: 'serviceTypes.hospital.0.description',
        image: "/images/image-card-11.jpg",
        icon: "critical-care"
      },
      {
        id: 2,
        titleKey: 'serviceTypes.hospital.1.title',
        descriptionKey: 'serviceTypes.hospital.1.description',
        image: "/images/image-card-12.png",
        icon: "surgical"
      },
      {
        id: 3,
        titleKey: 'serviceTypes.hospital.2.title',
        descriptionKey: 'serviceTypes.hospital.2.description',
        image: "/images/image-card-13.png",
        icon: "medication"
      }
    ],
    home: [
      {
        id: 1,
        titleKey: 'serviceTypes.home.0.title',
        descriptionKey: 'serviceTypes.home.0.description',
        image: "/images/old-lady.jpg",
        icon: "elder"
      },
      {
        id: 2,
        titleKey: 'serviceTypes.home.1.title',
        descriptionKey: 'serviceTypes.home.1.description',
        image: "/images/patient1.png",
        icon: "rehab"
      },
      {
        id: 3,
        titleKey: 'serviceTypes.home.2.title',
        descriptionKey: 'serviceTypes.home.2.description',
        image: "/images/image-card-14.png",
        icon: "chronic"
      }
    ],
    specialized: [
      {
        id: 1,
        titleKey: 'serviceTypes.specialized.0.title',
        descriptionKey: 'serviceTypes.specialized.0.description',
        image: "/images/image-card-15.jpg",
        icon: "maternity"
      },
      {
        id: 2,
        titleKey: 'serviceTypes.specialized.1.title',
        descriptionKey: 'serviceTypes.specialized.1.description',
        image: "/images/image-card-5.jpg",
        icon: "palliative"
      },
      {
        id: 3,
        titleKey: 'serviceTypes.specialized.2.title',
        descriptionKey: 'serviceTypes.specialized.2.description',
        image: "/images/image-card-16.png",
        icon: "mental"
      }
    ]
  };

  // Define process steps
  const processSteps = [
    {
      titleKey: 'process.steps.0.title',
      descriptionKey: 'process.steps.0.description',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      titleKey: 'process.steps.1.title',
      descriptionKey: 'process.steps.1.description',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      titleKey: 'process.steps.2.title',
      descriptionKey: 'process.steps.2.description',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      titleKey: 'process.steps.3.title',
      descriptionKey: 'process.steps.3.description',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quoteKey: 'testimonials.items.0.quote',
      nameKey: 'testimonials.items.0.name',
      serviceKey: 'testimonials.items.0.service'
    },
    {
      quoteKey: 'testimonials.items.1.quote',
      nameKey: 'testimonials.items.1.name',
      serviceKey: 'testimonials.items.1.service'
    },
    {
      quoteKey: 'testimonials.items.2.quote',
      nameKey: 'testimonials.items.2.name',
      serviceKey: 'testimonials.items.2.service'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#efefed] min-w-screen">
        <div className="container-custom min-h-[70vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              <span dangerouslySetInnerHTML={{ 
                __html: t('hero.title').replace('<0>', '<span class="text-blue-500">').replace('</0>', '</span>')
              }} />
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-10">
              {t('hero.description')}
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
            >
              <span className="font-medium">{t('hero.button')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-10">{t('categories.title')}</h2>
            
            {/* Service Type Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('hospital')}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  activeTab === 'hospital' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {t('categories.hospital')}
              </button>
              <button
                onClick={() => setActiveTab('home')}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  activeTab === 'home' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {t('categories.home')}
              </button>
              <button
                onClick={() => setActiveTab('specialized')}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  activeTab === 'specialized' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {t('categories.specialized')}
              </button>
            </div>
            
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services[activeTab].map((service) => (
                <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={t(service.titleKey)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-500 mb-4">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-3">{t(service.titleKey)}</h3>
                    <p className="text-neutral-600 mb-5">{t(service.descriptionKey)}</p>
                    <Link 
                      href={`#`}
                      className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
                    >
                      <span>{t('categories.learnMore')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('process.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('process.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
                <p className="text-neutral-600">
                  {t(step.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f7fafc] p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {/* Five stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 text-neutral-700">
                  "{t(testimonial.quoteKey)}"
                </blockquote>
                <div className="font-medium">
                  <p className="text-blue-500">{t(testimonial.nameKey)}</p>
                  <p className="text-neutral-500 text-sm">{t(testimonial.serviceKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-[#efefed] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-neutral-900">{t('cta.title')}</h2>
              <p className="text-lg text-black mb-6">
                {t('cta.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors">
                  {t('cta.button')}
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-400 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <p>{t('cta.stats.support')}</p>
                </div>
                <div className="bg-blue-400 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <p>{t('cta.stats.nurses')}</p>
                </div>
                <div className="bg-blue-400 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <p>{t('cta.stats.experience')}</p>
                </div>
                <div className="bg-blue-400 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <p>{t('cta.stats.clients')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}