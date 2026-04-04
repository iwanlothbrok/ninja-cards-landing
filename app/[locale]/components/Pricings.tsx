'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';

export default function Pricing() {
  const t = useTranslations('ChoosePlanSection');
  const pricingT = useTranslations('Pricing');
  const locale = useLocale() as Locale;

  const shinobi = t.raw('plans.shinobi');
  const samurai = t.raw('plans.samurai');
  const shogun = t.raw('plans.shogun');

  const copy =
    locale === 'bg'
      ? {
          eyebrow: 'Планове',
          title: 'Избери според целта си, не според броя функции',
          subline:
            'Shinobi е за присъствие. Samurai е за хора, които искат срещата да продължи с реален интерес, контакт и последващо действие.',
          pricingNote: 'Пробваш Samurai 30 дни с нисък риск и продължаваш само ако ти носи стойност.',
          comparisonLabel: 'Бързо сравнение',
          shinobiTitle: 'Shinobi',
          shinobiTagline: 'За личен профил и стилна NFC карта.',
          shinobiPrice: 'Безплатно',
          shinobiMeta: 'за първа карта',
          shinobiDescription: 'Подходящ е, ако искаш дигитална визитка и лесно споделяне, но не ти трябват форма за контакт и статистика.',
          shinobiHighlights: shinobi.highlights.slice(0, 3),
          shinobiCta: 'Виж стартовия план',
          samuraiTitle: 'Samurai',
          samuraiTagline: 'Най-добрият избор за продажби, срещи и реално продължение на разговора.',
          samuraiPrice: '€8.9',
          samuraiMeta: `на ${pricingT('month')}`,
          samuraiDescription:
            'Получаваш форма за контакт, статистика, брандиране и по-ясна следваща стъпка веднага след срещата.',
          samuraiHighlights: [
            '30 дни тест',
            'Форма за контакт',
            'Статистика и история на действията',
            'Брандиране с твое лого и цветове',
          ],
          samuraiSupport: 'Ако искаш да тестваш дали картата може да носи реални запитвания, това е правилният старт.',
          samuraiCta: 'Започни 30 дни безплатно',
          teamTitle: 'За екипи и компании',
          teamText:
            'Shogun остава опцията за по-големи екипи, фирмено брандиране и централно управление на картите.',
          teamCta: 'Поискай безплатен пилот',
        }
      : {
          eyebrow: 'Plans',
          title: 'Choose based on the outcome you want',
          subline:
            'Shinobi is for presence. Samurai is for people who want the meeting to continue into real interest, a lead, and follow-up.',
          pricingNote: 'Try Samurai free for 30 days and keep it only if it helps you convert more conversations.',
          comparisonLabel: 'Quick comparison',
          shinobiTitle: 'Shinobi',
          shinobiTagline: 'For one digital profile and a polished NFC card.',
          shinobiPrice: 'Free',
          shinobiMeta: 'for your first card',
          shinobiDescription:
            'Best if you only need a modern digital business card and easy sharing without lead capture or analytics.',
          shinobiHighlights: shinobi.highlights.slice(0, 3),
          shinobiCta: 'See starter plan',
          samuraiTitle: 'Samurai',
          samuraiTagline: 'The strongest option for sales, meetings, and real follow-up.',
          samuraiPrice: '€8.9',
          samuraiMeta: `per ${pricingT('month')}`,
          samuraiDescription:
            'You get lead forms, analytics, branding, and a much clearer next step while the conversation is still warm.',
          samuraiHighlights: [
            '30-day free trial',
            'Lead capture form',
            'Analytics and interaction history',
            'Branding with your logo and colors',
          ],
          samuraiSupport:
            'If you want to test whether the card can create real demand instead of only sharing contact details, start here.',
          samuraiCta: 'Start 30-day free trial',
          teamTitle: 'For teams and companies',
          teamText:
            'Shogun stays the option for larger teams, company branding, and centralized card management.',
          teamCta: 'Ask for a free pilot',
        };

  return (
    <section id="pricing" className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange">{copy.eyebrow}</p>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[2.8rem]">{copy.title}</h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.subline}</p>
          <p className="mt-3 text-sm leading-6 text-gray-500">{copy.pricingNote}</p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-white/10 bg-[#0b0d12] p-6 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{copy.comparisonLabel}</p>
            <h3 className="mt-4 text-2xl font-black text-white">{copy.shinobiTitle}</h3>
            <p className="mt-2 text-base font-semibold text-white/90">{copy.shinobiTagline}</p>

            <div className="mt-5 flex items-end gap-2">
              <div className="text-4xl font-black text-white">{copy.shinobiPrice}</div>
              <p className="pb-1 text-sm uppercase tracking-[0.18em] text-gray-400">{copy.shinobiMeta}</p>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-300">{copy.shinobiDescription}</p>

            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {copy.shinobiHighlights.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-gray-200">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildPlanSignupUrl(locale, 'shinobi')}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
            >
              {copy.shinobiCta}
            </a>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-amber-300/50 bg-[linear-gradient(180deg,rgba(245,158,11,0.08),rgba(12,12,14,0.98)_30%)] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/15 pb-5">
              <div>
                <div className="inline-flex rounded-full bg-amber-300 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-black">
                  {samurai.badge}
                </div>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-[2rem]">{copy.samuraiTitle}</h3>
                <p className="mt-2 max-w-xl text-base font-semibold leading-6 text-white/92">{copy.samuraiTagline}</p>
              </div>

              <div className="min-w-[140px] text-left sm:text-right">
                <div className="text-4xl font-black text-white">{copy.samuraiPrice}</div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-amber-100">{copy.samuraiMeta}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              <div>
                <p className="max-w-xl text-sm leading-6 text-gray-200">{copy.samuraiDescription}</p>
                <p className="mt-5 max-w-xl text-sm leading-6 text-amber-100/90">{copy.samuraiSupport}</p>

                <a
                  href={buildPlanSignupUrl(locale, 'samurai')}
                  className="mt-7 inline-flex min-w-[240px] items-center justify-center rounded-full bg-amber-300 px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-105 sm:text-base"
                >
                  {copy.samuraiCta}
                </a>
              </div>

              <div className="grid content-start gap-4">
                {copy.samuraiHighlights.map((item: string) => (
                  <div key={item} className="border-l border-amber-300/40 pl-4">
                    <p className="text-sm font-semibold leading-6 text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{shogun.badge}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{copy.teamTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">{copy.teamText}</p>
          </div>

          <a
            href={ENTERPRISE_CONTACT_URL}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
          >
            {copy.teamCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
