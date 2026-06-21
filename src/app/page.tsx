import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MenuSection from '@/components/sections/MenuSection';
import InfoSection from '@/components/sections/InfoSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <InfoSection />
      <Footer />
    </main>
  );
}
