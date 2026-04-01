import About from './components/layout/About';
import Pricing from './components/Pricings';
import ProductGallery from './components/layout/ProductGallery';
import SocialProof from './components/layout/SocialProof';
import CTASection from './components/layout/CTASection';
import FAQSection from './components/layout/FAQSection';
import Hero from './components/layout/Hero';
import { locales } from '@/config';

export function generateStaticParams() {
  return (locales as readonly string[]).map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <>
      <div data-section="hero" id="hero">
        <Hero />
      </div>
      <SocialProof />
      <div data-section="pricing" id="pricing">
        <Pricing />
      </div>
      <About />
      <ProductGallery />
      <div data-section="cta" id="cta">
        <CTASection />
        <FAQSection />
      </div>
    </>
  );
}
