'use client';

import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from '@/navigation';
import type { Locale } from '@/config';
import { useLocale } from 'next-intl';

const copyByLocale: Record<Locale, { button: string; decline: string; text: string; link: string }> = {
  bg: {
    button: 'Разбрах',
    decline: 'Отказ',
    text: 'Използваме бисквитки за по-добро изживяване.',
    link: 'Повече',
  },
  en: {
    button: 'Got it',
    decline: 'Decline',
    text: 'We use cookies for a better experience.',
    link: 'More',
  },
};

export default function CookieBanner() {
  const locale = useLocale() as Locale;
  const copy = copyByLocale[locale];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 3500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText={copy.button}
      declineButtonText={copy.decline}
      enableDeclineButton
      expires={150}
      style={{
        left: '16px',
        right: '16px',
        bottom: '16px',
        width: 'auto',
        maxWidth: '420px',
        marginLeft: 'auto',
        background: 'rgba(10,13,20,0.92)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
        padding: '12px 14px',
        alignItems: 'center',
      }}
      contentStyle={{
        margin: 0,
        flex: '1 1 auto',
        fontSize: '13px',
        lineHeight: '1.5',
        color: 'rgba(255,255,255,0.85)',
      }}
      buttonStyle={{
        color: '#111',
        background: '#f59e0b',
        borderRadius: '9999px',
        padding: '8px 14px',
        fontWeight: 700,
        fontSize: '13px',
        margin: 0,
      }}
      declineButtonStyle={{
        color: 'rgba(255,255,255,0.88)',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '9999px',
        padding: '8px 14px',
        fontWeight: 600,
        fontSize: '13px',
        marginLeft: '8px',
      }}
    >
      {copy.text}{' '}
      <Link href="/privacy/CookiePolicy" className="underline underline-offset-4 text-white">
        {copy.link}
      </Link>
    </CookieConsent>
  );
}
