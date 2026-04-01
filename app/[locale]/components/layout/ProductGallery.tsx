'use client';

import { getSalesContent } from '@/data/sales-content';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const styles = [
  { key: 'personalized', label: 'Personalized', src: '/cards/personalized.png' },
  { key: 'pulse-green', label: 'Ninja Pulse Green', src: '/cards/circles-green.png' },
  { key: 'pulse-orange', label: 'Ninja Pulse Orange', src: '/cards/circles-orange.png' },
  { key: 'flow', label: 'Ninja Flow', src: '/cards/women-colors.png' },
  { key: 'inferno', label: 'Ninja Inferno', src: '/cards/gradient-lines-red.png' },
  { key: 'legacy', label: 'Ninja Legacy', src: '/cards/money.png' },
] as const;

export default function ProductGallery() {
  const locale = useLocale() as Locale;
  const content = getSalesContent(locale).cardSupport;
  const [selectedStyle, setSelectedStyle] = useState<(typeof styles)[number]>(styles[0]);
  const productDetails =
    locale === 'bg'
      ? [
          'Премиум NFC карта с QR fallback за всеки телефон.',
          'Свързана с дигитален профил, който редактираш по всяко време.',
          'Подходяща за networking, продажби, събития и личен бранд.',
        ]
      : [
          'Premium NFC card with QR fallback for every phone.',
          'Linked to a digital profile you can update anytime.',
          'Built for networking, sales, events, and personal branding.',
        ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-950 to-black px-4 py-16 text-gray-200 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-4">
            <div className="absolute -inset-6 bg-gradient-to-br from-orange/20 via-transparent to-yellow-500/15 blur-3xl" />
            <div className="relative h-[220px] overflow-hidden rounded-[1.25rem] sm:h-[300px]">
              <Image src={selectedStyle.src} alt={selectedStyle.label} fill className="object-contain" priority />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {styles.map((style) => (
              <button
                key={style.key}
                onClick={() => setSelectedStyle(style)}
                className={`rounded-full border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
                  style.key === selectedStyle.key
                    ? 'border-orange bg-orange/15 text-white'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {style.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange">{content.eyebrow}</p>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{content.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{content.subtitle}</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              {locale === 'bg' ? 'Какво получаваш' : 'What you get'}
            </p>
            <ul className="mt-4 space-y-3">
              {productDetails.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                  <span className="mt-0.5 text-orange">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{content.supportTitle}</p>
            <ul className="mt-4 space-y-3">
              {content.supportBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                  <span className="mt-0.5 text-orange">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-gray-400">{content.pricingNote}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/cards"
              className="rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3.5 text-center text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:px-7 sm:text-base"
            >
              {content.primaryCta}
            </Link>
            <a
              href={buildPlanSignupUrl(locale, 'samurai')}
              className="rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/5 sm:px-7 sm:text-base"
            >
              {content.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
