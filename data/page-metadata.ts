import type { Metadata } from 'next';
import type { Locale } from '@/config';
import { SITE_BASE_URL, buildMarketingUrl } from '@/data/site-links';

type PageKey = 'home' | 'plans' | 'features' | 'cards' | 'contact';

type PageMetadataContent = {
  title: string;
  description: string;
  path: string;
};

const metadataContent: Record<Locale, Record<PageKey, PageMetadataContent>> = {
  en: {
    home: {
      title: 'Ninja Cards | NFC Business Cards That Turn Meetings Into Leads',
      description:
        'Ninja Cards helps solo professionals turn meetings into saved contacts, profile visits, and real leads with NFC business cards and Samurai digital profiles.',
      path: '/',
    },
    plans: {
      title: 'Ninja Cards Plans | Samurai vs Shinobi vs Shogun',
      description:
        'Compare Ninja Cards plans and see why Samurai is the best choice for solo professionals who want lead capture, analytics, and stronger follow-up.',
      path: '/plans',
    },
    features: {
      title: 'Ninja Cards Features | Lead Capture, Analytics, and Follow-Up',
      description:
        'See how Ninja Cards helps professionals share faster, capture leads, track engagement, and turn networking into measurable follow-up.',
      path: '/features',
    },
    cards: {
      title: 'Ninja Cards Designs | NFC Business Card Styles for Samurai',
      description:
        'Explore Ninja Cards NFC card designs and choose the style that fits your brand, then pair it with Samurai to turn scans into real sales conversations.',
      path: '/cards',
    },
    contact: {
      title: 'Contact Ninja Cards | Start Samurai or Talk About Team Rollout',
      description:
        'Talk to Ninja Cards about the right setup for your business card, your first Samurai plan, or a Shogun pilot for your team.',
      path: '/contact',
    },
  },
  bg: {
    home: {
      title: 'Ninja Cards | NFC визитки, които превръщат срещите в лийдове',
      description:
        'Ninja Cards помага на индивидуални професионалисти да превръщат срещите в запазени контакти, нови посещения на профила и реални лийдове чрез NFC визитки и Samurai профил.',
      path: '/',
    },
    plans: {
      title: 'Планове на Ninja Cards | Samurai срещу Shinobi и Shogun',
      description:
        'Сравни плановете на Ninja Cards и виж защо Samurai е най-силният избор за индивидуални професионалисти, които искат лийдове, анализи и по-силен follow-up.',
      path: '/plans',
    },
    features: {
      title: 'Функции на Ninja Cards | Лийдове, анализи и follow-up',
      description:
        'Виж как Ninja Cards помага да споделяш по-бързо, да събираш лийдове, да следиш интереса и да превръщаш networking-а в измерим резултат.',
      path: '/features',
    },
    cards: {
      title: 'Дизайни на Ninja Cards | NFC визитки за Samurai',
      description:
        'Разгледай дизайните на NFC визитките на Ninja Cards и избери стил, който пасва на твоя бранд, а Samurai ще превърне сканиранията в реални разговори.',
      path: '/cards',
    },
    contact: {
      title: 'Контакт с Ninja Cards | Започни със Samurai или питай за екип',
      description:
        'Свържи се с Ninja Cards, за да избереш правилната визитка, да стартираш със Samurai или да обсъдим Shogun пилот за екип.',
      path: '/contact',
    },
  },
};

export function createPageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = metadataContent[locale][page];
  const url = buildMarketingUrl(locale, content.path);

  return {
    metadataBase: new URL(SITE_BASE_URL),
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages: {
        bg: buildMarketingUrl('bg', content.path),
        en: buildMarketingUrl('en', content.path),
      },
    },
    openGraph: {
      type: 'website',
      title: content.title,
      description: content.description,
      url,
      siteName: 'Ninja Cards',
    },
    twitter: {
      card: 'summary',
      title: content.title,
      description: content.description,
    },
  };
}
