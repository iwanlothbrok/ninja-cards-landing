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
          eyebrow: 'Samurai',
          title: 'Samurai е най-добрият план, ако искаш срещата да продължи и след края й.',
          subtitle: 'Shinobi е добър старт. Samurai добавя форма за контакт, статистика и по-силен последващ контакт.',
          points: ['Форма за контакт', 'Статистика', 'По-силен последващ контакт'],
          compareTitle: 'Shinobi е стартът. Samurai е планът с реална бизнес стойност.',
          compareCards: [
            { title: 'Shinobi', text: 'Дигитална визитка и изчистен профил.' },
            { title: 'Samurai', text: 'Профил, интерес и ясна следваща стъпка.' },
          ],
          cta: 'Започни 30 дни',
        }
      : {
          eyebrow: 'Samurai',
          title: 'Samurai is the best plan if you want the meeting to keep working after it ends.',
          subtitle: 'Shinobi is a good start. Samurai adds lead forms, analytics, and stronger follow-up.',
          points: ['Lead form', 'Analytics', 'Stronger follow-up'],
          compareTitle: 'Shinobi is the start. Samurai is the plan with real business value.',
          compareCards: [
            { title: 'Shinobi', text: 'A digital business card and a clean profile.' },
            { title: 'Samurai', text: 'A profile, interest, and a clear next step.' },
          ],
          cta: 'Start 30 days',
        };

  return (
    <div className="bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-gray-950 to-black px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange">{content.eyebrow}</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{content.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg">{content.subtitle}</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange">{trustCopy.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{trustCopy.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{trustCopy.subtitle}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {trustCopy.points.map((item: string) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold text-gray-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-amber-300/40 bg-amber-300/5 p-6">
              <h3 className="text-xl font-black text-white">{trustCopy.compareTitle}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {trustCopy.compareCards.map((item: { title: string; text: string }) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="mt-6 inline-flex rounded-full bg-gradient-to-r from-orange via-amber-400 to-yellow-300 px-7 py-4 text-sm font-black text-black shadow-[0_14px_40px_rgba(245,158,11,0.3)] ring-2 ring-amber-200/30 transition-transform hover:scale-[1.03] sm:px-8 sm:text-base"
              >
                {trustCopy.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="bg-gradient-to-b from-black via-gray-950 to-black px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black md:text-5xl">{content.comparisonTitle}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.slice(0, 8).map((feature, index) => (
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
                  <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-orange">{feature.availableIn.join(' / ')}</p>
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
                  className="rounded-full bg-gradient-to-r from-orange via-amber-400 to-yellow-300 px-7 py-4 text-center text-sm font-black text-black shadow-[0_14px_40px_rgba(245,158,11,0.3)] ring-2 ring-amber-200/30 transition-transform hover:scale-[1.03] sm:px-8 sm:text-base"
                >
                  {trustCopy.cta}
                </a>
                <a
                  href={ENTERPRISE_CONTACT_URL}
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/15 sm:px-8 sm:text-base"
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
