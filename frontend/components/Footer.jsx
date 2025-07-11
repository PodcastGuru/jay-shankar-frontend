
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../lib/useTranslation';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black pt-12 pb-6">
      {/* Blue top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-blue-500 rounded-b-xl"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
          {/* Company info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/Logo.png"
                alt="Jay Shankar Nursing Bureau"
                width={160}
                height={70}
                className="h-auto"
              />
            </Link>
            
            <p className="text-neutral-300 mb-8 max-w-md">
              {t('footer.companyDescription')}
            </p>
            
            {/* Contact details with translations */}
            <div className="space-y-3">
              <div className="flex items-center text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {/* <span href="tel:+919049852645">{t('footer.phoneNumber')}</span> */}
                <a href="tel:+919049852645" className="text-neutral-300 font-medium hover:text-white">{t('footer.phoneNumber')}</a>
              </div>
              
              <div className="flex items-center text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('footer.email')}</span>
              </div>
              
              <div className="flex items-center text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="text-white text-xl font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-neutral-300 hover:text-blue-400 transition-colors">
                {t('header.home')}
              </Link>
              <Link href="/services" className="text-neutral-300 hover:text-blue-400 transition-colors">
                {t('header.services')}
              </Link>
              <Link href="/contact" className="text-neutral-300 hover:text-blue-400 transition-colors">
                {t('header.contactUs')}
              </Link>
            </nav>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">{t('footer.followUs')}</h3>
            {/* Social media links remain unchanged */}
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                   <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                 </svg>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                   <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                 </svg>
               </a>
               <a href="mailto:support@jayshankarnursingbureau.com" className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                   <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                 </svg>
               </a>
               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                   <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
               </a>

            </div>
            
            {/* Service Areas with translations */}
            <div className="mt-8">
              <h3 className="text-white text-lg font-semibold mb-4">{t('footer.serviceAreas')}</h3>
              <ul className="text-neutral-400 text-sm grid grid-cols-2 gap-2">
                <li>{t('footer.areas.Uttamnagar')}</li>
                <li>{t('footer.areas.Warje Malwadi')}</li>
                <li>{t('footer.areas.Karvenagar')}</li>
                <li>{t('footer.areas.Kothrud')}</li>
                <li>{t('footer.areas.Deccan')}</li>
                {/* <li>{t('footer.areas.baner')}</li>
                <li>{t('footer.areas.kothrud')}</li>
                <li>{t('footer.areas.hinjewadi')}</li> */}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-neutral-800 py-6">
          <p className="text-neutral-400 text-sm text-center">
            © {currentYear} JAY SHANKAR NURSING BUREAU. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}