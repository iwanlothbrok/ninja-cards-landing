import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/config';
import Navbar from './components/Navigation';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const metadataByLocale: Record<Locale, Metadata> = {
  bg: {
    title: 'Ninja Cards | NFC визитки и дигитални профили',
    description:
      'Ninja Cards помага на професионалисти и екипи да споделят контакти, профили и бранд присъствие чрез премиум NFC визитки и дигитални профили.',
    openGraph: {
      type: 'website',
      title: 'Ninja Cards | NFC визитки и дигитални профили',
      description:
        'Разгледай Ninja Cards: премиум NFC визитки и дигитални профили за професионалисти и екипи.',
      url: 'https://ninja-cards-landing.vercel.app/bg',
      siteName: 'Ninja Cards',
    },
  },
  en: {
    title: 'Ninja Cards | NFC Business Cards & Digital Profiles',
    description:
      'Ninja Cards helps modern teams share contacts, profiles, and brand identity through premium NFC business cards and digital profile experiences.',
    openGraph: {
      type: 'website',
      title: 'Ninja Cards | NFC Business Cards & Digital Profiles',
      description:
        'Explore Ninja Cards, premium NFC business cards and digital profile experiences for modern teams.',
      url: 'https://ninja-cards-landing.vercel.app/en',
      siteName: 'Ninja Cards',
    },
  },
};

export function generateStaticParams() {
  return (locales as readonly string[]).map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params: { locale: paramLocale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (locales as readonly string[]).includes(paramLocale)
    ? (paramLocale as Locale)
    : 'bg';

  return metadataByLocale[locale];
}

export default async function LocaleLayout({
  children,
  params: { locale: paramLocale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!(locales as readonly string[]).includes(paramLocale)) {
    notFound();
  }

  const locale = paramLocale as Locale;
  setRequestLocale(locale);
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11395955170"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11395955170');
        `}
      </Script>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div
          className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200 antialiased`}
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <CookieBanner />
      </NextIntlClientProvider>
    </>
  );
}
