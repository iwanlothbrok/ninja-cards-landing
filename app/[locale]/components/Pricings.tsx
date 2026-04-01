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
          title: 'За повечето хора правилният избор е Samurai',
          subline:
            'Shinobi е добър старт, ако искаш просто дигитална визитка. Samurai е изборът, ако искаш картата да носи реална бизнес стойност след срещата.',
          pricingNote: 'Първата карта е безплатна с индивидуален профил. Платените планове се тестват 30 дни.',
          shinobiLabel: 'Ако искаш само присъствие',
          shinobiText: 'Получаваш дигитален профил и стилна NFC карта, но без инструментите, които движат следващата стъпка.',
          samuraiLabel: 'Ако искаш реален резултат',
          samuraiText: 'Получаваш лийд форма, анализи, branding и по-силен follow-up. Това е планът за хора, които не искат добрата среща да приключи само с размяна на контакт.',
          samuraiCase: 'При брокери средно 45 нови profile views на месец показват, че картата продължава да работи и след първия контакт.',
          samuraiRisk: '30 дни тест на платените планове. Ако не е за теб, спираш.',
          teamTitle: 'За екипи и компании',
          teamText:
            'Shogun е за централизирано управление, фирмен брандинг и екипни анализи. За по-голям rollout започваме с безплатен пилот.',
          teamCta: 'Поискай безплатен пилот',
        }
      : {
          eyebrow: 'Plans',
          title: 'For most people, Samurai is the right choice',
          subline:
            'Shinobi is a good start if you only want a digital business card. Samurai is the choice if you want the card to create real business value after the meeting.',
          pricingNote: 'First card free with an individual profile. Paid plans can be tested for 30 days.',
          shinobiLabel: 'If you only want presence',
          shinobiText: 'You get a digital profile and a polished NFC card, but without the tools that drive the next step.',
          samuraiLabel: 'If you want a real result',
          samuraiText: 'You get lead forms, analytics, branding, and stronger follow-up. This is the plan for people who do not want a strong meeting to end with contact sharing alone.',
          samuraiCase: 'For brokers, an average of 45 new profile views per month shows the card keeps working after the first contact.',
          samuraiRisk: '30-day test on paid plans. If it is not for you, stop anytime.',
          teamTitle: 'For teams and companies',
          teamText:
            'Shogun is for centralized management, company branding, and team analytics. For larger rollouts, we start with a free pilot.',
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
          <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.subline}</p>
          <p className="mt-3 text-sm leading-6 text-gray-500">{copy.pricingNote}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr,1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{copy.shinobiLabel}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">{shinobi.title}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{shinobi.tagline}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">{copy.shinobiText}</p>

            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {shinobi.highlights.slice(0, 4).map((feature: string) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-gray-200">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildPlanSignupUrl(locale, 'shinobi')}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
            >
              {shinobi.button}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-amber-400/80 bg-[linear-gradient(135deg,rgba(245,158,11,0.14),rgba(0,0,0,0.92)_40%)] p-6 shadow-[0_0_50px_rgba(245,158,11,0.12)] sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            <div className="inline-flex rounded-full bg-amber-300 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-black">
              {samurai.badge}
            </div>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr,0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">{copy.samuraiLabel}</p>
                <h3 className="mt-3 max-w-xl text-3xl font-black leading-[1.02] text-white sm:text-4xl">
                  {samurai.tagline}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-amber-50/90 sm:text-base">{copy.samuraiText}</p>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-black text-white">€8.9</div>
                  <p className="pb-1 text-sm uppercase tracking-[0.18em] text-amber-100">/ {pricingT('month')}</p>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-300">{t('freeFirstMonth')}</p>
                <p className="mt-5 max-w-xl border-l-2 border-amber-300 pl-4 text-sm leading-6 text-white/90">
                  {copy.samuraiCase}
                </p>
                <p className="mt-4 text-sm leading-6 text-amber-100/90">{copy.samuraiRisk}</p>

                <a
                  href={buildPlanSignupUrl(locale, 'samurai')}
                  className="mt-8 inline-flex min-w-[220px] items-center justify-center rounded-full bg-amber-300 px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-105 sm:text-base"
                >
                  {samurai.button}
                </a>
              </div>

              <div className="grid content-start gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">{t('blocks.bestFor')}</p>
                  <ul className="mt-4 space-y-3">
                    {samurai.bestFor.slice(0, 3).map((item: string) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-100">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">{t('blocks.highlights')}</p>
                  <ul className="mt-4 space-y-3">
                    {samurai.highlights.slice(0, 4).map((item: string) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-100">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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
