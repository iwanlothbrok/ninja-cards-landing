'use client';

import Header from '../components/layout/Header';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Features() {
  const locale = useLocale() as Locale;
  const t = useTranslations('Features');

  const items = [1, 2, 3, 4, 5, 6].map((index) => ({
    header: t(`features.header${index}`),
    title: t(`features.mainHeader${index}`),
    description: t(`features.description${index}`),
    imagePath: `/features/0${index}.png`,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        pageInformation={t('header.pageInformation')}
        textOne={t('header.textOne')}
        textTwo={t('header.textTwo')}
        textThree={t('header.textThree')}
      />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-gray-950 to-gray-900 p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange">
              {locale === 'bg' ? 'Защо работи' : 'Why it converts'}
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
              {locale === 'bg'
                ? 'Фокус върху функции, които реално помагат да печелиш повече контакти.'
                : 'Focused on the features that actually help you win more contacts.'}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">
              {locale === 'bg'
                ? 'Тази страница е опростена, за да покажe най-важното: споделяне, лийдове, бързи ъпдейти и по-силен професионален профил.'
                : 'This page stays simple on purpose: easy sharing, lead capture, quick updates, and a stronger professional profile.'}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
              >
                <div className="relative h-44 bg-black/40">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
                    {item.header}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-amber-400/30 bg-gradient-to-br from-amber-500/15 via-orange/10 to-black p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              {locale === 'bg' ? 'Основна оферта' : 'Main offer'}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              {locale === 'bg'
                ? 'Samurai е най-силният избор за индивидуални професионалисти.'
                : 'Samurai is the strongest choice for individual professionals.'}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-200 sm:text-base">
              <li>• {locale === 'bg' ? 'Първа карта безплатно с един индивидуален профил' : 'First card free with one individual profile'}</li>
              <li>• {locale === 'bg' ? 'При 2+ профила всяка карта е €20' : 'For 2+ profiles, each card is €20'}</li>
              <li>• {locale === 'bg' ? 'Лийд форма, анализи и премиум брандинг в един план' : 'Lead form, analytics, and premium branding in one plan'}</li>
            </ul>
            <a
              href={buildPlanSignupUrl(locale, 'samurai')}
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:text-base"
            >
              {locale === 'bg' ? 'Започни със Samurai' : 'Start with Samurai'}
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              {locale === 'bg' ? 'За екипи' : 'For teams'}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              {locale === 'bg' ? 'Shogun за компании и rollout на екипи.' : 'Shogun for companies and team rollout.'}
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">
              {locale === 'bg'
                ? 'Когато имаш нужда от централен контрол, фирмен брандинг и управление на повече профили, ние сме готови.'
                : 'When you need centralized control, company branding, and management for more profiles, the platform is ready.'}
            </p>
            <a
              href={ENTERPRISE_CONTACT_URL}
              className="mt-6 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
            >
              {locale === 'bg' ? 'Говори с нас за екип' : 'Talk to us about teams'}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
