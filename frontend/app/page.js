import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import './globals.css'
import ServiceCards from '@/components/home/ServiceCards';
import NursingServices from '@/components/home/NursingServices';
import CompassionateCareSection from '@/components/home/CompassionateCareSection';
import NursingServiceFeature from '@/components/home/NursingServiceFeature';

export default function Home() {
  return (
    <Layout title="MediCare Nursing - Professional Healthcare Staffing Solutions">
      <Hero />
      <ServiceCards />
      <NursingServices />
      <CompassionateCareSection />
      <NursingServiceFeature />
      {/* <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials /> */}
    </Layout>
  );
}