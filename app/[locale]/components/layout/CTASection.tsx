'use client';

import { Link } from '@/navigation';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function CTASection() {
  const locale = useLocale() as Locale;

  const content =
    locale === 'bg'
      ? {
          eyebrow: 'Готови за старт',
          title: 'Ако искаш следващата ти визитка да води до контакт, лийд и follow-up, започни със Samurai.',
          subtitle:
            'Първата карта е безплатна с един индивидуален профил. Платените планове се тестват 30 дни, а за екипи започваме с безплатен пилот.',
          bullets: [
            'Започваш с нисък риск',
            'Получаваш реална следваща стъпка след среща',
            'Можеш да надградиш към екипен rollout',
          ],
          primaryCta: 'Избери Samurai',
          secondaryCta: 'Виж дизайните',
          note: 'Shogun е за екипи, фирмен брандинг и централизирано управление.',
        }
      : {
          eyebrow: 'Ready to start',
          title: 'If you want your next business card to lead to a saved contact, a lead, and follow-up, start with Samurai.',
          subtitle:
            'The first card is free with one individual profile. Paid plans can be tested for 30 days, and for teams we start with a free pilot.',
          bullets: [
            'Low-risk start',
            'A real next step after every strong meeting',
            'Room to scale into team rollout',
          ],
          primaryCta: 'Choose Samurai',
          secondaryCta: 'See designs',
          note: 'Shogun is for teams, company branding, and centralized management.',
        };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-16 text-white sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange">{content.eyebrow}</p>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{content.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{content.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.bullets.map((item) => (
              <div key={item} className="border-b border-white/10 pb-4 text-center text-sm font-medium text-gray-100">
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
            <Link
              href="/cards"
              className="rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/5 sm:px-7 sm:text-base"
            >
              {content.secondaryCta}
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">{content.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
