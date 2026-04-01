'use client';

import Pricing from '@/app/[locale]/components/Pricings';
import { getSalesContent } from '@/data/sales-content';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

export default function PlansPage() {
  const locale = useLocale() as Locale;
  const content = getSalesContent(locale).plansPage;
  const compare = useTranslations('ComparePlans');
  const features = compare.raw('features') as Array<{ label: string; availableIn: string[] }>;

  return (
    <div className="bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-gray-950 to-black px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange">{content.eyebrow}</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{content.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg">{content.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">{content.pricingNote}</p>
        </div>
      </section>

      <Pricing />

      <section className="bg-gradient-to-b from-black via-gray-950 to-black px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black md:text-5xl">{content.comparisonTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-400 md:text-lg">{content.comparisonSubtitle}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.slice(0, 10).map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-white">{feature.label}</p>
                  <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-orange">
                    {feature.availableIn.join(' / ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{content.teamTitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{content.teamText}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildPlanSignupUrl(locale, 'samurai')}
                  className="rounded-2xl bg-gradient-to-r from-orange via-amber-500 to-yellow-500 px-6 py-4 text-center font-bold text-black transition-transform hover:scale-[1.02]"
                >
                  {locale === 'bg' ? 'Избери Samurai' : 'Choose Samurai'}
                </a>
                <a
                  href={ENTERPRISE_CONTACT_URL}
                  className="rounded-2xl border border-white/15 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/5"
                >
                  {content.teamCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
