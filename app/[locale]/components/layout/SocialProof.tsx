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

export default function SocialProof() {
  const locale = useLocale() as Locale;

  const copy =
    locale === 'bg'
      ? {
          eyebrow: 'Доказателство',
          title: 'Ninja Card вече се използва в реални срещи, екипи и продажбени разговори.',
          subtitle: 'След внедряването в Postbank вече говорим за 2 270+ активни карти и хиляди реални сканирания.',
          stats: [
            { value: '15 806', label: 'сканирания' },
            { value: '2 270+', label: 'активни карти' },
            { value: 'Postbank', label: 'фирмено внедряване' },
          ],
          proofTitle: 'Какво значат тези числа',
          proofText: 'Сканирането не е празна метрика. Това е човек, който е влязъл в профила ти, разгледал е информацията и е показал интерес.',
          testimonialsTitle: 'Какво казват клиентите',
          testimonials: [
            { quote: 'Почти всяка среща ми носи нов контакт.', name: 'Митко Абаджиев', metric: '10/10' },
            { quote: 'Над 500 сканирания на профила и за мен това е 10 от 10.', name: 'Емо Ангелов', metric: '500+ сканирания' },
            { quote: '200 сканирания за месец означават 200 реални влизания и интерес.', name: 'Валери Денисенко', metric: '200 сканирания' },
          ],
          logosLabel: 'Използвано от екипи и бизнеси, които искат по-силно първо впечатление и по-лесен последващ контакт',
        }
      : {
          eyebrow: 'Proof',
          title: 'Ninja Card is already used in real meetings, teams, and sales conversations.',
          subtitle: 'After the Postbank rollout, the number is now 2,270+ active cards and thousands of real scans.',
          stats: [
            { value: '15,806', label: 'scans' },
            { value: '2,270+', label: 'active cards' },
            { value: 'Postbank', label: 'team rollout' },
          ],
          proofTitle: 'What these numbers mean',
          proofText: 'A scan is not a vanity metric. It is a person who opened the profile, saw your information, and showed interest.',
          testimonialsTitle: 'What customers say',
          testimonials: [
            { quote: 'Almost every meeting gives me a new contact.', name: 'Matey Abadjiev', metric: '10/10' },
            { quote: '500+ profile scans and a 10 out of 10.', name: 'Emo Angelov', metric: '500+ scans' },
            { quote: '200 scans in a month means 200 real profile openings and interest.', name: 'Valeri Denisenko', metric: '200 scans' },
          ],
          logosLabel: 'Used by teams and businesses that want a stronger first impression and easier follow-up',
        };

  return (
    <section className="border-y border-white/8 bg-[#080b10] py-12 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300">{copy.subtitle}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {copy.stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <div className="text-2xl font-black text-white sm:text-3xl">{item.value}</div>
                  <p className="mt-2 text-sm text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{copy.proofTitle}</p>
              <p className="mt-3 text-sm leading-6 text-gray-100">{copy.proofText}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.logosLabel}</p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-2 py-4">
                <Image src={logo.src} alt={logo.alt} width={180} height={72} className="max-h-10 w-auto object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.testimonialsTitle}</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {copy.testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-6 text-gray-100">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <p className="text-sm font-bold text-white">{item.name}</p>
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
