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
  }
> = {
  bg: {
    title: 'Избери дизайн, който пасва на твоя стил. Samurai е това, което го превръща в резултат.',
    subtitle:
      'Първата карта е подарък с един индивидуален профил, а после всеки следващ дизайн е €20. Използвай страницата, за да избереш визия, но запази Samurai като основната оферта за реален follow-up.',
    primaryCta: 'Започни със Samurai',
    proofLabel: 'Защо това работи',
    proofItems: [
      '15 806 сканирания показват, че картите се използват реално.',
      '270+ активни карти показват постоянна употреба, не еднократен интерес.',
      'Избери дизайн за впечатление, а Samurai за лийдове, анализи и следваща стъпка.',
    ],
    supportTitle: 'Кога да избереш първо дизайна',
    supportText:
      'Когато стилът е важен за личния бранд или за типа срещи, започни от дизайна. После върни клиента към плана, защото там е реалната бизнес стойност.',
  },
  en: {
    title: 'Choose a design that fits your style. Samurai is what turns it into a result.',
    subtitle:
      'Your first card is included with one individual profile, and every extra design is €20 after that. Use this page to pick the visual style, but keep Samurai as the main conversion offer.',
    primaryCta: 'Start with Samurai',
    proofLabel: 'Why this works',
    proofItems: [
      '15,806 scans show these cards are used in the real world.',
      '270+ active cards show ongoing demand, not one-off curiosity.',
      'Choose the design for first impression, and Samurai for leads, analytics, and next-step follow-up.',
    ],
    supportTitle: 'When to choose the design first',
    supportText:
      'If personal brand and event context matter most, start by choosing the look. Then bring the buyer back to the plan, because that is where the business value lives.',
  },
};

const ChooseCard: React.FC = () => {
  const locale = useLocale() as Locale;
  const copy = pageCopy[locale];

  return (
    <div className="min-h-screen bg-black px-4 py-16 pt-24 text-white sm:py-20 sm:pt-28">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl space-y-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange">
            {locale === 'bg' ? 'Дизайни на карти' : 'Card designs'}
          </p>
          <h1 className="mt-4 bg-gradient-to-r from-amber-200 via-amber-400 to-orange bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-300 sm:text-base">
            {copy.subtitle}
          </p>
          <a
            href={buildPlanSignupUrl(locale, 'samurai')}
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3.5 text-sm font-bold text-black sm:text-base"
          >
            {copy.primaryCta}
          </a>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.proofLabel}</p>
            <p className="mt-3 text-sm leading-6 text-gray-300">{copy.supportText}</p>
          </div>
          <div className="grid gap-4 md:col-span-2 md:grid-cols-3">
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
                  {product.oldPriceBgn ? (
                    <span className="text-sm text-red-400 line-through">{product.oldPriceBgn} BGN</span>
                  ) : null}
                  <span className="text-2xl font-black text-amber-300">{product.priceBgn} BGN</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-300">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
                    {copy.supportTitle}
                  </p>
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
                    {locale === 'bg' ? 'Научи повече' : 'Learn more'}
                  </Link>
                  <a
                    href={buildPlansUrl(locale, 'samurai')}
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 via-orange to-amber-600 px-5 py-3 text-center text-sm font-bold text-black"
                  >
                    {locale === 'bg' ? 'Виж Samurai' : 'See Samurai'}
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
