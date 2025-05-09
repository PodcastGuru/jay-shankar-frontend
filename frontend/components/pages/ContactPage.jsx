// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
  
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     // Success scenario
//     setSubmitted(true);
//     setLoading(false);
//   };
  
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-[#efefed] min-h-[60vh] py-16 md:py-20 flex items-center justify-center">
//         <div className="container-custom flex items-center justify-center">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
//               Get in <span className="text-blue-500">Touch</span>
//             </h1>
//             <p className="text-lg text-neutral-700 mb-8">
//               We're here to answer your questions and provide the care you need. 
//               Reach out to our team for personalized nursing support across Pune and surrounding areas.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       {/* Contact Information and Form */}
//       <section className="py-16 bg-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Contact Information</h2>
              
//               <div className="space-y-8 mb-10">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-neutral-900 mb-1">Phone</h3>
//                     <p className="text-neutral-600 mb-1">Call us directly at:</p>
//                     <a href="tel:+918007889067" className="text-blue-500 font-medium hover:text-blue-700">+91 8007 889 067</a>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-neutral-900 mb-1">Email</h3>
//                     <p className="text-neutral-600 mb-1">Send us an email at:</p>
//                     <a href="mailto:support@jayshankarnursingbureau.com" className="text-blue-500 font-medium hover:text-blue-700">support@jayshankarnursingbureau.com</a>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-neutral-900 mb-1">Office Location</h3>
//                     <p className="text-neutral-600 mb-1">Visit our main office:</p>
//                     <address className="not-italic text-neutral-700">
//                       123 Koregaon Park<br />
//                       Pune, Maharashtra 411001<br />
//                       India
//                     </address>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-neutral-900 mb-1">Working Hours</h3>
//                     <p className="text-neutral-600 mb-1">Our office is open:</p>
//                     <p className="text-neutral-700">
//                       Monday - Friday: 9:00 AM - 7:00 PM<br />
//                       Saturday: 9:00 AM - 4:00 PM<br />
//                       <span className="text-blue-500 font-medium">24/7 Emergency Support Available</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-xl font-semibold text-neutral-900 mb-4">Connect With Us</h3>
//                 <div className="flex space-x-3">
//                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
//                       <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
//                     </svg>
//                   </a>
//                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
//                       <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
//                     </svg>
//                   </a>
//                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
//                       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
//                     </svg>
//                   </a>
//                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
//                       <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             {/* Contact Form */}
//             <div className="bg-[#f7fafc] p-8 rounded-lg shadow-sm">
//               {!submitted ? (
//                 <>
//                   <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div>
//                       <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">Your Name</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="John Doe"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                       <div>
//                         <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email Address</label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                           placeholder="your@email.com"
//                         />
//                       </div>
                      
//                       <div>
//                         <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Phone Number</label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                           placeholder="+91 xxxxx xxxxx"
//                         />
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="service" className="block text-neutral-700 font-medium mb-2">Service Needed</label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select a service</option>
//                         <option value="hospital">Hospital Care</option>
//                         <option value="home">Home Care</option>
//                         <option value="elder">Elder Care</option>
//                         <option value="post-surgery">Post-Surgery Care</option>
//                         <option value="chronic">Chronic Disease Management</option>
//                         <option value="palliative">Palliative Care</option>
//                         <option value="other">Other Services</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Your Message</label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows={5}
//                         className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Please describe your requirements..."
//                       ></textarea>
//                     </div>
                    
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
//                         loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//                       } transition-colors`}
//                     >
//                       {loading ? 'Sending...' : 'Send Message'}
//                     </button>
//                   </form>
//                 </>
//               ) : (
//                 <div className="text-center py-12">
//                   <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Message Sent Successfully!</h2>
//                   <p className="text-neutral-700 mb-6">
//                     Thank you for contacting us. Our team will get back to you soon.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSubmitted(false);
//                       setFormData({
//                         name: '',
//                         email: '',
//                         phone: '',
//                         service: '',
//                         message: ''
//                       });
//                     }}
//                     className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                   >
//                     <span>Send Another Message</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Map Section */}
//       <section className="py-12 bg-white">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Find Us</h2>
//             <p className="text-neutral-700">
//               Visit our office or request a home consultation. We're conveniently located in Koregaon Park to serve all of Pune and surrounding areas.
//             </p>
//           </div>
          
//           {/* Map Embed (updated to Pune, India location) */}
//           <div className="h-96 bg-neutral-200 rounded-lg overflow-hidden">
//             <iframe 
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6554370693632!2d73.88687607495914!3d18.53470638255537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12b6b65014d%3A0xaf956a41847a2d9b!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688973264095!5m2!1sen!2sin" 
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy"
//               title="Jay Shankar Nursing Bureau - Pune Office Location"
//             ></iframe>
//           </div>
//         </div>
//       </section>
      
//       {/* FAQ Section */}
//       <section className="py-16 bg-[#f7fafc]">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-neutral-700">
//               Quick answers to common questions about our nursing services in Pune
//             </p>
//           </div>
          
//           <div className="max-w-3xl mx-auto">
//             <div className="divide-y divide-neutral-200">
//               <div className="py-5">
//                 <h3 className="text-lg font-semibold text-neutral-900 mb-2">
//                   How quickly can you arrange nursing care in Pune?
//                 </h3>
//                 <p className="text-neutral-700">
//                   We can arrange standard nursing care within 24-48 hours throughout Pune city. For emergency situations, we offer expedited services and can often provide care within a few hours depending on location and specific needs.
//                 </p>
//               </div>
              
//               <div className="py-5">
//                 <h3 className="text-lg font-semibold text-neutral-900 mb-2">
//                   Are your nurses licensed and insured?
//                 </h3>
//                 <p className="text-neutral-700">
//                   Yes, all our nursing professionals are fully licensed according to Indian Nursing Council standards, insured, and have undergone thorough background checks. We only hire experienced professionals with proper credentials and regular training.
//                 </p>
//               </div>
              
//               <div className="py-5">
//                 <h3 className="text-lg font-semibold text-neutral-900 mb-2">
//                   Do you provide services in all areas of Pune?
//                 </h3>
//                 <p className="text-neutral-700">
//                   Yes, we serve all areas within Pune city and surrounding suburbs including Koregaon Park, Kalyani Nagar, Viman Nagar, Baner, Kothrud, Hadapsar, and Hinjewadi. We also provide services in nearby areas within Maharashtra.
//                 </p>
//               </div>
              
//               <div className="py-5">
//                 <h3 className="text-lg font-semibold text-neutral-900 mb-2">
//                   What payment methods do you accept?
//                 </h3>
//                 <p className="text-neutral-700">
//                   We accept multiple payment methods including credit/debit cards, UPI, net banking, and cash. We also work with health insurance providers and can help with insurance claim processes for eligible services.
//                 </p>
//               </div>
              
//               <div className="py-5">
//                 <h3 className="text-lg font-semibold text-neutral-900 mb-2">
//                   Can I change my nurse if I'm not satisfied?
//                 </h3>
//                 <p className="text-neutral-700">
//                   Absolutely. We prioritize the comfort and satisfaction of our patients. If you're not completely satisfied with your assigned nurse, simply contact our Pune office and we'll arrange a replacement as quickly as possible.
//                 </p>
//               </div>
//             </div>
            
//             <div className="mt-10 text-center">
//               <Link href="/faq" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors">
//                 <span>View All FAQs</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Emergency Contact CTA */}
//       <section className="py-12 bg-[#efefed] text-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">Need Emergency Care?</h2>
//               <p className="text-lg text-neutral-800 mb-0">
//                 Our 24/7 emergency support line is always ready to assist you with urgent healthcare needs anywhere in Pune.
//               </p>
//             </div>
//             <div className="text-center md:text-right">
//               <a href="tel:+918007889067" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span className="font-bold">Call Emergency Hotline</span>
//               </a>
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

export default function ContactPage() {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success scenario
    setSubmitted(true);
    setLoading(false);
  };
  
  // Define FAQ questions and answers
  const faqs = [
    {
      questionKey: 'faq.questions.0.question',
      answerKey: 'faq.questions.0.answer'
    },
    {
      questionKey: 'faq.questions.1.question',
      answerKey: 'faq.questions.1.answer'
    },
    {
      questionKey: 'faq.questions.2.question',
      answerKey: 'faq.questions.2.answer'
    },
    {
      questionKey: 'faq.questions.3.question',
      answerKey: 'faq.questions.3.answer'
    },
    {
      questionKey: 'faq.questions.4.question',
      answerKey: 'faq.questions.4.answer'
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#efefed] min-h-[60vh] py-16 md:py-20 flex items-center justify-center">
        <div className="container-custom flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              <span dangerouslySetInnerHTML={{ 
                __html: t('hero.title').replace('<0>', '<span class="text-blue-500">').replace('</0>', '</span>')
              }} />
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">{t('contactInfo.title')}</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{t('contactInfo.phone.title')}</h3>
                    <p className="text-neutral-600 mb-1">{t('contactInfo.phone.description')}</p>
                    <a href="tel:+918007889067" className="text-blue-500 font-medium hover:text-blue-700">+91 8007 889 067</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{t('contactInfo.email.title')}</h3>
                    <p className="text-neutral-600 mb-1">{t('contactInfo.email.description')}</p>
                    <a href="mailto:support@jayshankarnursingbureau.com" className="text-blue-500 font-medium hover:text-blue-700">support@jayshankarnursingbureau.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{t('contactInfo.location.title')}</h3>
                    <p className="text-neutral-600 mb-1">{t('contactInfo.location.description')}</p>
                    <address className="not-italic text-neutral-700" 
                      dangerouslySetInnerHTML={{ __html: t('contactInfo.location.address') }}>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{t('contactInfo.workingHours.title')}</h3>
                    <p className="text-neutral-600 mb-1">{t('contactInfo.workingHours.description')}</p>
                    <p className="text-neutral-700">
                      {t('contactInfo.workingHours.weekdays')}<br />
                      {t('contactInfo.workingHours.saturday')}<br />
                      <span className="text-blue-500 font-medium">{t('contactInfo.workingHours.support')}</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{t('contactInfo.connectWithUs')}</h3>
                <div className="flex space-x-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </a>
                  <a href="mailto:support@jayshankarnursingbureau.com" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-blue-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-[#f7fafc] p-8 rounded-lg shadow-sm">
              {!submitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">{t('contactForm.title')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">{t('contactForm.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t('contactForm.namePlaceholder')}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">{t('contactForm.email')}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder={t('contactForm.emailPlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">{t('contactForm.phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder={t('contactForm.phonePlaceholder')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-neutral-700 font-medium mb-2">{t('contactForm.service')}</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">{t('contactForm.selectService')}</option>
                        <option value="hospital">{t('contactForm.hospitalCare')}</option>
                        <option value="home">{t('contactForm.homeCare')}</option>
                        <option value="elder">{t('contactForm.elderCare')}</option>
                        <option value="post-surgery">{t('contactForm.postSurgeryCare')}</option>
                        <option value="chronic">{t('contactForm.chronicDisease')}</option>
                        <option value="palliative">{t('contactForm.palliativeCare')}</option>
                        <option value="other">{t('contactForm.otherServices')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">{t('contactForm.message')}</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t('contactForm.messagePlaceholder')}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
                        loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                      } transition-colors`}
                    >
                      {loading ? t('contactForm.sendingButton') : t('contactForm.sendButton')}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{t('contactForm.success.title')}</h2>
                  <p className="text-neutral-700 mb-6">
                    {t('contactForm.success.description')}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <span>{t('contactForm.success.button')}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{t('map.title')}</h2>
            <p className="text-neutral-700">
              {t('map.description')}
            </p>
          </div>
          
          {/* Map Embed (updated to Pune, India location) */}
          <div className="h-96 bg-neutral-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6554370693632!2d73.88687607495914!3d18.53470638255537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12b6b65014d%3A0xaf956a41847a2d9b!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688973264095!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Jay Shankar Nursing Bureau - Pune Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{t('faq.title')}</h2>
            <p className="text-neutral-700">
              {t('faq.subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-neutral-200">
              {faqs.map((faq, index) => (
                <div className="py-5" key={index}>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {t(faq.questionKey)}
                  </h3>
                  <p className="text-neutral-700">
                    {t(faq.answerKey)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link href="#" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors">
                <span>{t('faq.viewAll')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact CTA */}
      <section className="py-12 bg-[#efefed] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">{t('emergency.title')}</h2>
              <p className="text-lg text-neutral-800 mb-0">
                {t('emergency.description')}
              </p>
            </div>
            <div className="text-center md:text-right">
              <a href="tel:+918007889067" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold">{t('emergency.button')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}