import About from './components/layout/About';
import Pricing from './components/Pricings';
import SocialProof from './components/layout/SocialProof';
import CTASection from './components/layout/CTASection';
import FAQSection from './components/layout/FAQSection';
import Hero from './components/layout/Hero';
import { locales, type Locale } from '@/config';
import { createPageMetadata } from '@/data/page-metadata';
import type { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  return (locales as readonly string[]).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedLocale = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : 'bg';

  return createPageMetadata(resolvedLocale, 'home');
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
      <div data-section="cta" id="cta">
        <CTASection />
        <FAQSection />
      </div>
    </>
  );
}
