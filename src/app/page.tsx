import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MenuSection from '@/components/sections/MenuSection';
import InfoSection from '@/components/sections/InfoSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ImmersiveFooterSection from '@/components/sections/ImmersiveFooterSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <TestimonialSection />
      <InfoSection />
      <ImmersiveFooterSection />
      <Footer />
    </main>
  );
}
