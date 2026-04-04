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
          eyebrow: 'Старт',
          title: 'Започни Samurai за 30 дни и виж как работи в реални срещи.',
          subtitle: 'Идеята е проста: тестваш, виждаш резултат и преценяваш дали това е правилната следваща стъпка за теб.',
          bullets: ['30 дни тест', 'Нисък риск', 'Продължаваш в плановете'],
          primaryCta: 'Започни 30 дни',
          secondaryCta: 'Виж плановете',
        }
      : {
          eyebrow: 'Start',
          title: 'Start Samurai for 30 days and see how it works in real meetings.',
          subtitle: 'The idea is simple: test it, see the interest, and keep it only if it feels like the right next step.',
          bullets: ['30-day trial', 'Low risk', 'Continue in plans'],
          primaryCta: 'Start 30 days',
          secondaryCta: 'See plans',
        };

  return (
    <section className="relative overflow-hidden bg-[#05070b] py-12 text-white sm:py-14">
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
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-200">{content.subtitle}</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {content.bullets.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm font-semibold text-gray-100">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={buildPlanSignupUrl(locale, 'samurai')}
              className="rounded-full bg-gradient-to-r from-orange via-amber-400 to-yellow-300 px-7 py-4 text-center text-sm font-black text-black shadow-[0_14px_40px_rgba(245,158,11,0.3)] ring-2 ring-amber-200/30 transition-transform hover:scale-[1.03] sm:px-8 sm:text-base"
            >
              {content.primaryCta}
            </a>
            <a
              href={ENTERPRISE_CONTACT_URL}
              className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/15 sm:px-8 sm:text-base"
            >
              {content.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
