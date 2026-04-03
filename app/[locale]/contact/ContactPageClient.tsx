'use client';

import Header from '../components/layout/Header';
import { Link } from '@/navigation';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { useLocale } from 'next-intl';

const contactActions = [
  { label: 'Contact', value: 'Ivan Ivanov', href: 'mailto:ivan.ivanov@ninjacardsnfc.com' },
  { label: 'Phone', value: '+359 88 904 4614', href: 'tel:+359889044614' },
  { label: 'Email', value: 'ivan.ivanov@ninjacardsnfc.com', href: 'mailto:ivan.ivanov@ninjacardsnfc.com' },
  { label: 'Website', value: 'ninjacardsnfc.com', href: 'https://www.ninjacardsnfc.com' },
];

export default function ContactPageClient() {
  const locale = useLocale() as Locale;

  const copy =
    locale === 'bg'
      ? {
          headerDescription: 'Свържи се директно с Ivan Ivanov, ако искаш бърз старт със Samurai или правилната карта за теб и твоя екип.',
          soloEyebrow: 'За индивидуални професионалисти',
          soloTitle: 'Най-бързият път е да започнеш със Samurai.',
          soloText: 'Ако искаш по-силен follow-up, lead form и analytics след срещите, натам трябва да води страницата.',
          soloPrimary: 'Избери Samurai',
          soloSecondary: 'Виж дизайните',
          teamEyebrow: 'За екипи и компании',
          teamTitle: 'За rollout и фирмен setup пиши директно.',
          teamText: 'Когато търсиш повече профили, фирмен branding и централен контрол, говорим директно за rollout, а не през обща форма.',
          teamCta: 'Говори с нас за екип',
          proofTitle: 'Защо да действаш сега',
          proofItems: ['Първата карта е безплатна с един индивидуален профил.', 'Samurai се тества 30 дни.', '15 806 сканирания и 270+ активни карти показват реална употреба.'],
          contactTitle: 'Предпочиташ директен контакт?',
          contactText: 'Изпрати ни дали искаш една карта, Samurai старт или rollout за екип и ще върнем точна препоръка.',
        }
      : {
          headerDescription: 'Talk directly to Ivan Ivanov if you want a fast Samurai start or the right setup for your card and team.',
          soloEyebrow: 'For individual professionals',
          soloTitle: 'The fastest path is to start with Samurai.',
          soloText: 'If you want stronger follow-up, a lead form, and analytics after meetings, that is where the page should lead.',
          soloPrimary: 'Choose Samurai',
          soloSecondary: 'See card designs',
          teamEyebrow: 'For teams and companies',
          teamTitle: 'For rollout and company setup, contact us directly.',
          teamText: 'If you need more profiles, company branding, and central control, we should talk directly about rollout instead of sending you through a generic form.',
          teamCta: 'Talk to us about teams',
          proofTitle: 'Why act now',
          proofItems: ['Your first card is free with one individual profile.', 'Samurai can be tested for 30 days.', '15,806 scans and 270+ active cards show real usage.'],
          contactTitle: 'Prefer direct contact?',
          contactText: 'Tell us whether you want one card, a Samurai start, or a team rollout and we will recommend the right setup.',
        };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        pageInformation={locale === 'bg' ? 'Контакт' : 'Contact'}
        textOne="Samurai"
        textTwo={locale === 'bg' ? 'Екипен rollout' : 'Team rollout'}
        textThree={locale === 'bg' ? 'Бърз старт' : 'Fast start'}
        eyebrow={locale === 'bg' ? 'Следваща стъпка' : 'Next step'}
        description={copy.headerDescription}
      />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-6">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-amber-400/30 bg-gradient-to-br from-amber-500/15 via-orange/10 to-black p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-orange">{copy.soloEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{copy.soloTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.soloText}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="rounded-full bg-gradient-to-r from-amber-300 via-orange to-amber-500 px-6 py-3.5 text-center text-sm font-bold text-black"
              >
                {copy.soloPrimary}
              </a>
              <Link
                href="/cards"
                className="rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/5"
              >
                {copy.soloSecondary}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-orange">{copy.teamEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{copy.teamTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.teamText}</p>
            <a
              href={ENTERPRISE_CONTACT_URL}
              className="mt-6 inline-flex rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              {copy.teamCta}
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-orange">{copy.proofTitle}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {copy.proofItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-6 text-gray-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {contactActions.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-colors hover:border-orange/40"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-orange/80">{item.label}</p>
              <p className="text-2xl font-semibold text-white">{item.value}</p>
            </a>
          ))}
        </section>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="mb-3 text-3xl font-bold">{copy.contactTitle}</h2>
          <p className="mx-auto max-w-2xl text-gray-300">{copy.contactText}</p>
        </div>
      </main>
    </div>
  );
}
