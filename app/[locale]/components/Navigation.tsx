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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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

        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 bg-black/72 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex h-full max-w-7xl flex-col px-4 pb-4 pt-24">
            <div className="flex-1 overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b0f16] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
              <div className="phi-stack">
                <div className="flex items-center justify-between gap-4">
                  <LangSwitcher setIsMenuOpen={setIsMenuOpen} />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={t('aria.closeMenu')}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white"
                    title={t('aria.closeMenu')}
                  >
                    {t('aria.closeMenu')}
                  </button>
                </div>

                <nav aria-label={t('aria.mainNav')}>
                  <ul className="phi-stack">
                    {mobileLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          className="block rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-base font-semibold text-white transition hover:bg-white/8"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="grid gap-3">
                  <a
                    href={buildPlansUrl(locale, 'samurai')}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-4 text-base font-black text-black shadow-[0_14px_36px_rgba(245,158,11,0.24)]"
                  >
                    {primaryCta}
                  </a>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={buildLoginUrl(locale)}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-4 text-center text-sm font-semibold text-white/90"
                    >
                      {t('menu.login')}
                    </a>
                    <a
                      href={buildPlansUrl(locale)}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-4 text-center text-sm font-semibold text-white/90"
                    >
                      {t('menu.plans')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
