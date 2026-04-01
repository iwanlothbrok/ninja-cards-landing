import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import type { Locale } from '@/config';
import { buildPlanSignupUrl } from '@/data/site-links';

export default function JoinNowButton() {
  const t = useTranslations('BtnJoinNow');
  const locale = useLocale() as Locale;

  return (
    <div className="fixed bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0 md:w-auto">
      <Link
        href={buildPlanSignupUrl(locale, 'samurai')}
        className="group relative block w-full md:w-auto text-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-yellow-600 via-orange to-yellow-600 text-white font-bold text-base md:text-lg shadow-2xl transition-all duration-500 ease-out hover:scale-105 active:scale-95 overflow-hidden"
      >
        <span className="relative z-10 tracking-wide">{t('text')}</span>
      </Link>
    </div>
  );
}
