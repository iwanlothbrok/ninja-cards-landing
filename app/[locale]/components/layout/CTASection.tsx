'use client';

import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function CTASection() {
  const locale = useLocale() as Locale;

  const content =
    locale === 'bg'
      ? {
          eyebrow: 'Готови за старт',
          title: 'Започни сега, докато първата карта е безплатна и 30-дневната гаранция маха риска.',
          subtitle:
            'Не е нужно да вярваш на обещания. Тествай реалния flow за lead capture, follow-up и аналитики. Ако не ти носи повече лийдове до 30 дни, връщаме парите.',
          bullets: [
            '30 дни гаранция за повече лийдове или връщаме парите',
            'Сигурно продължение към ninjacardsnfc.com',
            'Безплатен пилот за екипи при нужда',
          ],
          primaryCta: 'Започни 30 дни безплатно',
          secondaryCta: 'Говори с нас за екип',
          note: 'Checkout и управлението на абонамента продължават в NinjaCardsNFC.com, където е и реалният продукт.',
          guarantee: 'Гаранцията важи за първите 30 дни от платения план Samurai. Ако го използваш реално и не виждаш повече лийдове, връщаме парите.',
        }
      : {
          eyebrow: 'Ready to start',
          title: 'Start now while the first card is free and the 30-day guarantee removes the risk.',
          subtitle:
            'You do not have to buy on faith. Test the real lead capture, follow-up, and analytics flow first. If it does not bring you more leads within 30 days, we give you your money back.',
          bullets: [
            '30-day more-leads guarantee or your money back',
            'Secure continuation on NinjaCardsNFC.com',
            'Free pilot available for teams',
          ],
          primaryCta: 'Start 30-day free trial',
          secondaryCta: 'Talk about team rollout',
          note: 'Checkout and subscription management continue on NinjaCardsNFC.com, where the actual product lives.',
          guarantee:
            'The guarantee applies to the first 30 days of the paid Samurai plan. If you use it in real meetings and do not see more leads, we give you your money back.',
        };

  return (
    <section className="relative overflow-hidden bg-[#05070b] py-14 text-white sm:py-18">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-orange/15 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(8,10,15,0.94)_40%)] px-6 py-8 sm:px-8 sm:py-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange">{content.eyebrow}</p>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{content.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{content.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.bullets.map((item) => (
              <div key={item} className="border-l border-white/10 px-2 text-center text-sm font-medium text-gray-100">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={buildPlanSignupUrl(locale, 'samurai')}
              className="rounded-full bg-gradient-to-r from-orange via-amber-500 to-yellow-500 px-6 py-3.5 text-center text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:px-7 sm:text-base"
            >
              {content.primaryCta}
            </a>
            <a
              href={ENTERPRISE_CONTACT_URL}
              className="rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/5 sm:px-7 sm:text-base"
            >
              {content.secondaryCta}
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">{content.note}</p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-6 text-gray-500">{content.guarantee}</p>
        </motion.div>
      </div>
    </section>
  );
}
