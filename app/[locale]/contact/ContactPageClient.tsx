'use client';

import Header from '../components/layout/Header';
import { Link } from '@/navigation';
import { buildPlanSignupUrl, ENTERPRISE_CONTACT_URL } from '@/data/site-links';
import type { Locale } from '@/config';
import { useLocale } from 'next-intl';

const contactActions = [
  { label: 'Email', value: 'hello@ninjacardsnfc.com', href: 'mailto:hello@ninjacardsnfc.com' },
  { label: 'Phone', value: '+359 89 898 6947', href: 'tel:+359898986947' },
  { label: 'Instagram', value: '@ninja.cards', href: 'https://www.instagram.com/ninja.cards' },
  { label: 'LinkedIn', value: 'Ninja Cards', href: 'https://www.linkedin.com/company/106287992' },
];

export default function ContactPageClient() {
  const locale = useLocale() as Locale;

  const copy =
    locale === 'bg'
      ? {
          headerDescription:
            'Тази страница трябва да помага на клиента да направи следваща стъпка: да избере Samurai, да поиска помощ за правилния дизайн или да отвори разговор за екипен rollout.',
          soloEyebrow: 'За индивидуални професионалисти',
          soloTitle: 'Най-бързият път е да започнеш със Samurai.',
          soloText:
            'Ако искаш визитката ти да води до по-лесно запазване на контакт, лийд форма и измерим интерес след срещата, започни от плана и после избери дизайна.',
          soloPrimary: 'Избери Samurai',
          soloSecondary: 'Виж дизайните',
          teamEyebrow: 'За екипи и компании',
          teamTitle: 'Shogun е отделният разговор за пилот и rollout.',
          teamText:
            'Когато търсиш централен контрол, фирмен брандинг и управление на повече профили, използвай директния екипен контакт вместо обща заявка.',
          teamCta: 'Говори с нас за екип',
          proofTitle: 'Защо да действаш сега',
          proofItems: [
            'Първата карта е безплатна с един индивидуален профил.',
            'Платените планове се тестват 30 дни с нисък риск.',
            '15 806 сканирания и 270+ активни карти показват реална употреба.',
          ],
          contactTitle: 'Предпочиташ директен контакт?',
          contactText:
            'Изпрати ни стил на картата, брой профили и бранд насока. Така ще ти върнем по-точна препоръка вместо общ отговор.',
        }
      : {
          headerDescription:
            'This page should help the buyer take the next step: choose Samurai, ask for the right card style, or open a team-rollout conversation.',
          soloEyebrow: 'For individual professionals',
          soloTitle: 'The fastest path is to start with Samurai.',
          soloText:
            'If you want your business card to lead to easier contact saving, lead capture, and measurable post-meeting interest, start with the plan and then choose the card design.',
          soloPrimary: 'Choose Samurai',
          soloSecondary: 'See card designs',
          teamEyebrow: 'For teams and companies',
          teamTitle: 'Shogun is the separate conversation for pilots and rollout.',
          teamText:
            'When you need centralized control, company branding, and management for more profiles, use the direct team-sales path instead of a generic inquiry.',
          teamCta: 'Talk to us about teams',
          proofTitle: 'Why act now',
          proofItems: [
            'Your first card is free with one individual profile.',
            'Paid plans can be tested for 30 days with low risk.',
            '15,806 scans and 270+ active cards show real-world usage.',
          ],
          contactTitle: 'Prefer direct contact?',
          contactText:
            'Send us the card style, quantity, and branding direction you want so we can recommend the right setup instead of sending a generic reply.',
        };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        pageInformation={locale === 'bg' ? 'Контакт' : 'Contact'}
        textOne={locale === 'bg' ? 'Samurai' : 'Samurai'}
        textTwo={locale === 'bg' ? 'Екипен пилот' : 'Team pilot'}
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
