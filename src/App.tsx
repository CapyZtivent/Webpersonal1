import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GuideDescription } from './components/GuideDescription';
import { FreeProducts } from './components/FreeProducts';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <GuideDescription />
      <FreeProducts />
      <Services />
      <Testimonials />
      <CTASection />
      <SocialMedia />
      <Footer />
    </div>
  );
}
