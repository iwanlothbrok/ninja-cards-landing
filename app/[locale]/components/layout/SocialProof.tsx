'use client';

import type { Locale } from '@/config';
import Image from 'next/image';
import { useLocale } from 'next-intl';

const logos = [
  { src: '/clients/home2you.svg', alt: 'Home 2 You' },
  { src: '/clients/night-out.svg', alt: 'Entrepreneurs Night Out' },
  { src: '/clients/veliko-tarnovo.svg', alt: 'Veliko Tarnovo' },
  { src: '/clients/winners.svg', alt: 'Winners Group' },
  { src: '/clients/inv.png', alt: 'Invest Club' },
];

type SocialCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats: Array<{ value: string; label: string }>;
  anchorEyebrow: string;
  anchorTitle: string;
  anchorText: string;
  anchorPoints: string[];
  logosLabel: string;
  testimonialsTitle: string;
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
    metric: string;
  }>;
};

export default function SocialProof() {
  const locale = useLocale() as Locale;
  const copy: SocialCopy =
    locale === 'bg'
      ? {
          eyebrow: 'Доказателство',
          title: 'Не е просто модерна визитка. Това е по-силен follow-up след добра среща.',
          subtitle:
            'Вместо контакт, който се губи, Ninja Card превръща интереса в запазен контакт, сканиране и реална следваща стъпка.',
          stats: [
            { value: '15 806', label: 'сканирания до момента' },
            { value: '270+', label: 'активни дигитални карти' },
            { value: 'Postbank', label: 'доказан екипен rollout' },
          ],
          anchorEyebrow: 'Какво това показва',
          anchorTitle: 'Когато срещата е добра, Ninja Card прави по-лесно тя да продължи.',
          anchorText:
            'При правилно използване едно сканиране не е празно число. Това е човек, който е влязъл в профила ти, видял е следващата стъпка и е показал реален интерес.',
          anchorPoints: [
            'Митко Абаджиев: контакт почти след всяка среща чрез lead form.',
            'Емо Ангелов: 500+ сканирания на профила и 10/10 оценка.',
            'Валери Денисенко: 200 сканирания за 1 месец и силен входящ интерес.',
          ],
          logosLabel: 'Използвано от екипи и бизнеси, които искат по-силен first impression.',
          testimonialsTitle: 'Реални думи от клиенти',
          testimonials: [
            {
              quote: 'На почти всяка среща си тръгвам с нов контакт, защото хората попълват формата веднага.',
              name: 'Митко Абаджиев',
              role: 'финансов консултант',
              metric: '10/10 за lead capture',
            },
            {
              quote: 'Имам над 500 сканирания на профила си и за мен това е 10 от 10.',
              name: 'Емо Ангелов',
              role: 'XAXX',
              metric: '500+ scans',
            },
            {
              quote: 'За един месец направих 200 сканирания. Това са 200 човека, които реално влязоха и проявиха интерес.',
              name: 'Валери Денисенко',
              role: 'sales / networking use case',
              metric: '200 scans in 30 days',
            },
          ],
        }
      : {
          eyebrow: 'Proof',
          title: 'This is not just a modern business card. It creates a stronger follow-up after a good meeting.',
          subtitle:
            'Instead of a contact that gets lost, Ninja Card turns interest into a saved contact, a scan, and a clear next step.',
          stats: [
            { value: '15,806', label: 'total scans so far' },
            { value: '270+', label: 'active digital cards' },
            { value: 'Postbank', label: 'proven team rollout' },
          ],
          anchorEyebrow: 'What this proves',
          anchorTitle: 'When the meeting goes well, Ninja Card makes it easier for the conversation to continue.',
          anchorText:
            'Used the right way, a scan is not vanity. It is a person who opened your profile, saw the next step, and showed real interest.',
          anchorPoints: [
            'Matey Abadjiev: a contact from almost every meeting through the lead form.',
            'Emo Angelov: 500+ profile scans and a 10/10 rating.',
            'Valeri Denisenko: 200 scans in 1 month and strong inbound interest.',
          ],
          logosLabel: 'Used by teams and businesses that want a stronger first impression.',
          testimonialsTitle: 'Real words from customers',
          testimonials: [
            {
              quote: 'On almost every meeting, I leave with a new contact because people fill in the form on the spot.',
              name: 'Matey Abadjiev',
              role: 'finance consultant',
              metric: '10/10 for lead capture',
            },
            {
              quote: 'My profile has over 500 scans, and for me this is a 10 out of 10.',
              name: 'Emo Angelov',
              role: 'XAXX',
              metric: '500+ scans',
            },
            {
              quote: 'In one month I got 200 scans. That means 200 people actually opened the profile and showed interest.',
              name: 'Valeri Denisenko',
              role: 'sales / networking use case',
              metric: '200 scans in 30 days',
            },
          ],
        };

  return (
    <section className="border-y border-white/8 bg-[#080b10] py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.subtitle}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_0_80px_rgba(251,146,60,0.08)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-2xl font-black text-white sm:text-3xl">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.anchorEyebrow}</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">{copy.anchorTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-200">{copy.anchorText}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {copy.anchorPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-gray-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.logosLabel}</p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-2 py-4">
                <Image src={logo.src} alt={logo.alt} width={180} height={72} className="max-h-10 w-auto object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.testimonialsTitle}</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {copy.testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-6 text-gray-100">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-400">{item.role}</p>
                  </div>
                  <p className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">
                    {item.metric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
