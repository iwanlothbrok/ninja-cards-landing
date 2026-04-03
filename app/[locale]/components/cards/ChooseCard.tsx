'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import { landingProducts } from '@/data/products';
import { buildPlanSignupUrl, buildPlansUrl } from '@/data/site-links';
import type { Locale } from '@/config';

const pageCopy: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    primaryCta: string;
    proofLabel: string;
    proofItems: string[];
    supportTitle: string;
    supportText: string;
    learnMore: string;
    seePlan: string;
  }
> = {
  bg: {
    title: 'Избери дизайн. Samurai прави картата полезна.',
    subtitle:
      'Всички цени тук са в евро. Избираш визията тук, а ако искаш реален follow-up, lead form и analytics, нататък страницата трябва да води към Samurai.',
    primaryCta: 'Започни със Samurai',
    proofLabel: 'Кратко и ясно',
    proofItems: ['Дизайнът прави първото впечатление.', 'Samurai прави следващата стъпка.', 'Postbank е proof, че има място и за екипи.'],
    supportTitle: 'За тази карта',
    supportText: 'Тук избираш само визията. Планът, lead form-ата и analytics са в Samurai.',
    learnMore: 'Научи повече',
    seePlan: 'Виж Samurai',
  },
  en: {
    title: 'Choose a design. Samurai makes the card useful.',
    subtitle:
      'All prices here are in euro. You choose the visual here, and if you want real follow-up, lead forms, and analytics, the page should lead to Samurai.',
    primaryCta: 'Start with Samurai',
    proofLabel: 'Short and clear',
    proofItems: ['Design creates the first impression.', 'Samurai creates the next step.', 'Postbank is proof this also works for teams.'],
    supportTitle: 'For this card',
    supportText: 'You choose the visual here. The plan, lead form, and analytics live inside Samurai.',
    learnMore: 'Learn more',
    seePlan: 'See Samurai',
  },
};

const ChooseCard: React.FC = () => {
  const locale = useLocale() as Locale;
  const copy = pageCopy[locale];

  return (
    <div className="min-h-screen bg-black px-4 py-16 pt-24 text-white sm:py-20 sm:pt-28">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-500/10 blur-3xl delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl space-y-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange">{locale === 'bg' ? 'Дизайни на карти' : 'Card designs'}</p>
          <h1 className="mt-4 bg-gradient-to-r from-amber-200 via-amber-400 to-orange bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-300 sm:text-base">{copy.subtitle}</p>
          <a
            href={buildPlanSignupUrl(locale, 'samurai')}
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3.5 text-sm font-bold text-black sm:text-base"
          >
            {copy.primaryCta}
          </a>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[0.9fr,1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.proofLabel}</p>
            <p className="mt-3 text-sm leading-6 text-gray-300">{copy.supportText}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.proofItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {landingProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{product.shortDescription}</p>
                </div>
                <div className="flex items-center gap-3">
                  {product.oldPriceEur ? <span className="text-sm text-red-400 line-through">€{product.oldPriceEur}</span> : null}
                  <span className="text-2xl font-black text-amber-300">€{product.priceEur}</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-300">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">{copy.supportTitle}</p>
                  <p className="mt-2">{product.description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={{
                      pathname: '/products/cards/[id]',
                      params: { id: product.id },
                    }}
                    className="flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm hover:bg-white/15"
                  >
                    {copy.learnMore}
                  </Link>
                  <a
                    href={buildPlansUrl(locale, 'samurai')}
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 via-orange to-amber-600 px-5 py-3 text-center text-sm font-bold text-black"
                  >
                    {copy.seePlan}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
