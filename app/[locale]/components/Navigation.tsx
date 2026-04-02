'use client';

import React, { useEffect, useState } from 'react';
import { Link, usePathname } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { LangSwitcher } from './layout/LangSwitcher';
import { buildLoginUrl, buildPlansUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const desktopLinks = [
    { href: '/plans', label: t('menu.plans') },
    { href: '/features', label: t('menu.features') },
    { href: '/cards', label: t('menu.cards') },
    { href: '/contact', label: t('menu.contact') },
  ] as const;

  const mobileLinks = [
    { href: '/', label: t('menu.home') },
    { href: '/plans', label: t('menu.plans') },
    { href: '/features', label: t('menu.features') },
    { href: '/cards', label: t('menu.cards') },
    { href: '/askedQuestions', label: t('menu.faq') },
    { href: '/contact', label: t('menu.contact') },
  ] as const;

  const primaryCta = locale === 'bg' ? 'Започни със Samurai' : 'Start with Samurai';

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-black/72 backdrop-blur-xl' : 'bg-[#0a0d14]/92'
      }`}
      aria-label={t('aria.header')}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <Link href="/" className="block w-16 sm:w-20">
              <Image src="/navlogo.png" alt={t('logoAlt')} width={504} height={495} className="h-auto w-full" priority />
            </Link>
            <div className="hidden lg:block">
              <LangSwitcher setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <nav aria-label={t('aria.mainNav')}>
              <ul className="flex items-center gap-6">
                {desktopLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm font-medium text-white/82 transition hover:text-orange" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={buildPlansUrl(locale, 'samurai')}
              className="rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-4 py-2 text-sm font-bold text-black shadow-[0_10px_24px_rgba(245,158,11,0.18)]"
            >
              {primaryCta}
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={t('aria.toggleMenu')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            title={t('aria.toggleMenu')}
          >
            <span className="sr-only">{t('aria.toggleMenu')}</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>

          {isMenuOpen ? (
            <div className="absolute left-0 right-0 top-full mt-3 rounded-[1.5rem] border border-white/10 bg-gray-950/96 p-4 shadow-2xl lg:hidden">
              <div className="mb-4 flex items-center justify-between">
                <LangSwitcher setIsMenuOpen={setIsMenuOpen} />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={t('aria.closeMenu')}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-white"
                  title={t('aria.closeMenu')}
                >
                  {t('aria.closeMenu')}
                </button>
              </div>

              <nav aria-label={t('aria.mainNav')}>
                <ul className="space-y-2">
                  {mobileLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={buildLoginUrl(locale)}
                  className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90"
                >
                  {t('menu.login')}
                </a>
                <a
                  href={buildPlansUrl(locale, 'samurai')}
                  className="rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-4 py-3 text-center text-sm font-bold text-black"
                >
                  {primaryCta}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
