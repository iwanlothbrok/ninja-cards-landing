'use client';

import Pricing from '@/app/[locale]/components/Pricings';
import { getSalesContent } from '@/data/sales-content';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

type TrustCopy = {
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  winningTitle: string;
  winningPoints: string[];
  compareLabel: string;
  compareTitle: string;
  compareCards: Array<{ title: string; text: string }>;
  outcomeValue: string;
  outcomeLabel: string;
  cta: string;
};

export default function PlansPageClient() {
  const locale = useLocale() as Locale;
  const content = getSalesContent(locale).plansPage;
  const compare = useTranslations('ComparePlans');
  const features = compare.raw('features') as Array<{ label: string; availableIn: string[] }>;

  const trustCopy: TrustCopy =
    locale === 'bg'
      ? {
          eyebrow: 'Защо Samurai',
          title: 'Samurai е планът, който прави срещата ценна и след това, не само в момента.',
          text: 'Shinobi ти дава дигитална визитка. Samurai добавя причина хората да ти оставят интерес, да ти се върнат и да носи по-ясна бизнес стойност.',
          bullets: ['Lead form и улавяне на интерес', 'Analytics за сканирания и действия', 'Завършен branding flow след срещата'],
          winningTitle: 'Защо точно Samurai печели',
          winningPoints: [
            'Не спира до красив профил. Дава ти следваща стъпка.',
            'По-лесно се оправдава като бизнес инвестиция, а не просто като аксесоар.',
            'Това е планът, който най-бързо води до “окей, това искам”.',
          ],
          compareLabel: 'Shinobi vs Samurai',
          compareTitle: 'Shinobi е за присъствие. Samurai е за резултат.',
          compareCards: [
            {
              title: 'Shinobi',
              text: 'Дава ти clean дигитален профил и модерна карта.',
            },
            {
              title: 'Samurai',
              text: 'Дава ти профил, lead capture, analytics и по-силна причина разговорът да продължи.',
            },
          ],
          outcomeValue: '30 дни',
          outcomeLabel: 'да видиш повече interest, по-добър follow-up и по-ясна стойност',
          cta: 'Започни 30 дни безплатно',
        }
      : {
          eyebrow: 'Why Samurai',
          title: 'Samurai is the plan that keeps the meeting valuable after it ends, not only during the first impression.',
          text: 'Shinobi gives you a digital card. Samurai gives people a reason to leave interest, come back to you, and justify the card as a real business tool.',
          bullets: ['Lead form and interest capture', 'Analytics for scans and actions', 'A complete branded flow after the meeting'],
          winningTitle: 'Why Samurai wins',
          winningPoints: [
            'It does not stop at a nice profile. It gives you a next step.',
            'It is easier to justify as a business investment, not just a cool accessory.',
            'This is the plan that most quickly creates the feeling of “yes, this is the one.”',
          ],
          compareLabel: 'Shinobi vs Samurai',
          compareTitle: 'Shinobi is for presence. Samurai is for outcome.',
          compareCards: [
            {
              title: 'Shinobi',
              text: 'Gives you a clean digital profile and a modern card.',
            },
            {
              title: 'Samurai',
              text: 'Gives you the profile, lead capture, analytics, and a stronger reason for the conversation to continue.',
            },
          ],
          outcomeValue: '30 days',
          outcomeLabel: 'to see more interest, stronger follow-up, and clearer business value',
          cta: 'Start 30-day free trial',
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

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange">{trustCopy.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{trustCopy.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{trustCopy.text}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {trustCopy.bullets.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-amber-300/40 bg-amber-300/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{trustCopy.winningTitle}</p>
              <div className="mt-4 grid gap-4">
                {trustCopy.winningPoints.map((item) => (
                  <div key={item} className="border-l border-amber-300/40 pl-4 text-sm leading-6 text-gray-200">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{trustCopy.compareLabel}</p>
                <h3 className="mt-3 text-xl font-black text-white">{trustCopy.compareTitle}</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {trustCopy.compareCards.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4">
                  <div className="text-2xl font-black text-white">{trustCopy.outcomeValue}</div>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{trustCopy.outcomeLabel}</p>
                </div>
              </div>

              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="mt-6 inline-flex rounded-full bg-gradient-to-r from-orange via-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-bold text-black"
              >
                {trustCopy.cta}
              </a>
            </div>
          </div>
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
                  className="rounded-2xl bg-gradient-to-r from-orange via-amber-500 to-yellow-500 px-6 py-4 text-center font-bold text-black transition-transform hover:scale-[1.02]"
                >
                  {trustCopy.cta}
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
