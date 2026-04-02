'use client';

import Header from '../components/layout/Header';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function FeaturesPageClient() {
  const locale = useLocale() as Locale;
  const t = useTranslations('Features');

  const items = [1, 2, 3, 4, 5, 6].map((index) => ({
    header: t(`features.header${index}`),
    title: t(`features.mainHeader${index}`),
    description: t(`features.description${index}`),
    imagePath: `/features/0${index}.png`,
  }));

  const copy =
    locale === 'bg'
      ? {
          headerDescription:
            'Виж как Ninja Cards превръща NFC визитката в по-лесно запазване на контакт, повече интерес след срещата и по-ясна причина човек да се върне към профила ти.',
          eyebrow: 'Защо това конвертира',
          title: 'Функциите имат една задача: да превърнат добрата среща в следваща стъпка.',
          intro:
            'Тази страница трябва да продава резултат, а не просто списък с възможности. Покажи какво печелиш след сканирането: лийд, измерим интерес и по-силен follow-up.',
          proofTitle: 'Какво доказва, че това работи',
          proofItems: [
            '15 806 сканирания показват реална употреба, не просто красива визия.',
            '270+ активни карти показват, че продуктът се използва постоянно.',
            'Средно 45 нови profile views при брокери месечно показват, че картата продължава да работи и след срещата.',
          ],
          mainOfferTitle: 'Samurai е правилният избор за индивидуални професионалисти.',
          mainOfferBullets: [
            'Първа карта безплатно с един индивидуален профил',
            'Lead форма, анализи и premium брандинг в един план',
            'По-малко триене при споделяне и повече шанс за реален follow-up',
          ],
          mainOfferCta: 'Започни със Samurai',
          teamTitle: 'Shogun остава пътят за екипи и компании.',
          teamText:
            'Когато имаш нужда от централен контрол, фирмен брандинг и управление на повече профили, екипният rollout минава през Shogun и отделен разговор.',
          teamCta: 'Говори с нас за екип',
        }
      : {
          headerDescription:
            'See how Ninja Cards turns an NFC business card into easier contact saving, warmer post-meeting interest, and a clearer reason for someone to come back to your profile.',
          eyebrow: 'Why this converts',
          title: 'These features exist for one reason: to turn a strong meeting into a next step.',
          intro:
            'This page should sell an outcome, not just list capabilities. Show what happens after the scan: a lead, measurable interest, and a stronger follow-up path.',
          proofTitle: 'What proves this works',
          proofItems: [
            '15,806 scans show real usage, not just polished design.',
            '270+ active cards show the product is used consistently.',
            'An average of 45 new monthly profile views for brokers shows the card keeps working after the meeting.',
          ],
          mainOfferTitle: 'Samurai is the right choice for individual professionals.',
          mainOfferBullets: [
            'First card free with one individual profile',
            'Lead capture, analytics, and premium branding in one plan',
            'Less friction during sharing and a better chance of meaningful follow-up',
          ],
          mainOfferCta: 'Start with Samurai',
          teamTitle: 'Shogun stays the path for teams and companies.',
          teamText:
            'When you need centralized control, company branding, and management for more profiles, the team rollout belongs in a separate Shogun conversation.',
          teamCta: 'Talk to us about teams',
        };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        pageInformation={t('header.pageInformation')}
        textOne={t('header.textOne')}
        textTwo={t('header.textTwo')}
        textThree={t('header.textThree')}
        eyebrow={locale === 'bg' ? 'Samurai в действие' : 'Samurai in action'}
        description={copy.headerDescription}
      />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-gray-950 to-gray-900 p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-orange">{copy.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.intro}</p>
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

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{copy.proofTitle}</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {copy.proofItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-6 text-gray-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-amber-400/30 bg-gradient-to-br from-amber-500/15 via-orange/10 to-black p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              {locale === 'bg' ? 'Основна оферта' : 'Main offer'}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">{copy.mainOfferTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-200 sm:text-base">
              {copy.mainOfferBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={buildPlanSignupUrl(locale, 'samurai')}
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:text-base"
            >
              {copy.mainOfferCta}
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              {locale === 'bg' ? 'За екипи' : 'For teams'}
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">{copy.teamTitle}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.teamText}</p>
            <a
              href={ENTERPRISE_CONTACT_URL}
              className="mt-6 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
            >
              {copy.teamCta}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
