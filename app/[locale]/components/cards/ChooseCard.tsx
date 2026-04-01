'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { landingProducts } from '@/data/products';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';

const ChooseCard: React.FC = () => {
  const t = useTranslations('ChooseCard');
  const locale = useLocale() as Locale;

  return (
    <div className="min-h-screen bg-black px-4 py-16 pt-24 text-white sm:py-20 sm:pt-28">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl space-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-orange bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
            {t('pricing.subtitleFreeFirst', { price: 0 })}
          </p>
          <a
            href={buildPlanSignupUrl(locale, 'samurai')}
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3.5 text-sm font-bold text-black sm:text-base"
          >
            {locale === 'bg' ? 'Започни със Samurai' : 'Start with Samurai'}
          </a>
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
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/products/cards/${product.id}`}
                    className="flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm hover:bg-white/15"
                  >
                    Learn more
                  </Link>
                  <Link
                    href="/plans"
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 via-orange to-amber-600 px-5 py-3 text-center text-sm font-bold text-black"
                  >
                    {locale === 'bg' ? 'Виж плановете' : 'See plans'}
                  </Link>
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
