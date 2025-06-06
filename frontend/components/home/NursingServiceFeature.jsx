



'use client';
import Image from 'next/image';
import { useTranslation } from '../../lib/useTranslation';

export default function NursingServiceFeature() {
  const { t } = useTranslation('home');

  return (
    <section className="relative max-h-[100vh] overflow-hidden py-12 md:py-16 bg-white rounded-3xl shadow-lg">
      {/* Background image */}
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="py-12 md:py-16 pr-4 md:pr-12 relative z-10">
            {/* Background decorative circles */}
            <div className="absolute left-0 top-1/4 w-28 h-28 border-2 border-blue-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute left-12 bottom-1/4 w-16 h-16 border-2 border-blue-100 rounded-full opacity-20 -z-10"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3">
              {t('nursingServiceFeature.unmatched')}
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-6">
              {t('nursingServiceFeature.services')}
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-neutral-800 mb-4">
              {t('nursingServiceFeature.whyChoose')}
            </h3>

            <div className="text-neutral-700 leading-relaxed mb-6 space-y-2">
              <p>{t('nursingServiceFeature.intro')}</p>

              <ul className="list-none pl-0">
                {(Array.isArray(t('nursingServiceFeature.bullets', { returnObjects: true }))
                  ? t('nursingServiceFeature.bullets', { returnObjects: true })
                  : []
                ).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p>{t('nursingServiceFeature.footer')}</p>
            </div>


          </div>

          {/* Right Image */}
          <div className="h-full flex items-center justify-center relative">
            <div className="relative h-full w-full md:h-[50vh] overflow-hidden">
              <Image
                src="/images/nusring-team.jpg"
                alt="Nurse caring for elderly patient"
                fill
                priority
                className="object-cover object-center rounded-l-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Very light blue background */}
      <div className="absolute inset-0 bg-blue-50 -z-20"></div>
    </section>
  );
}