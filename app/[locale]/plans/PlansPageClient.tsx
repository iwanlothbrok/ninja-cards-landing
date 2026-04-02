'use client';

import Pricing from '@/app/[locale]/components/Pricings';
import { getSalesContent } from '@/data/sales-content';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

export default function PlansPageClient() {
  const locale = useLocale() as Locale;
  const content = getSalesContent(locale).plansPage;
  const compare = useTranslations('ComparePlans');
  const features = compare.raw('features') as Array<{ label: string; availableIn: string[] }>;
  const trustCopy =
    locale === 'bg'
      ? {
          eyebrow: 'Защо това продава',
          title: 'Samurai е планът, който премества разговора от контакт към реален интерес.',
          text: 'Използвай плановете не само като ценова таблица, а като ясен избор: Shinobi е стартът, Samurai е офертата за реален резултат, а Shogun остава пътят за екипен rollout.',
        }
      : {
          eyebrow: 'Why this sells',
          title: 'Samurai is the plan that moves the conversation from contact sharing to real interest.',
          text: 'Use the plan page as more than a pricing table: Shinobi is the starter, Samurai is the business-choice offer, and Shogun stays the team-rollout path.',
        };

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

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange">{trustCopy.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">{trustCopy.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-300 sm:text-base">{trustCopy.text}</p>
        </div>
      </section>

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
                  {locale === 'bg' ? 'Започни 30 дни безплатно' : 'Start 30-day free trial'}
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
