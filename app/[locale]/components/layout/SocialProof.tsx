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
          eyebrow: 'Доказателство и fit',
          title: 'Работи най-добре за хора и екипи, които печелят доверие в срещата и искат реален follow-up след нея.',
          subtitle:
            'Ако си консултант, търговец, основател или част от екип, който редовно се среща с клиенти, Ninja Cards прави следващата стъпка по-лесна от хартиена визитка.',
          statLine: '15 806 сканирания и 270+ активни дигитални карти.',
          bankLine: 'Използвано от Postbank за екипен rollout, както и от Trivium, Home2You и други бизнеси, които искат по-силен first impression и по-лесен follow-up.',
          fitTitle: 'Най-подходящо за',
          fitItems: ['консултанти и advisory услуги', 'търговци и account мениджъри', 'основатели, партньори и екипи'],
          proofTitle: 'Какво показват данните',
          proofItems: [
            'При Митко Абаджиев lead form-ата взима контакт почти от всяка среща.',
            'При Валери Денисенко 200 сканирания за 1 месец водят до 5 сделки.',
            'Използва се както за лични профили, така и за фирмен rollout, включително и в Postbank.',
          ],
          testimonialsTitle: 'Какво казват клиентите',
          testimonials: [
            {
              quote: 'На почти всяка среща си тръгвам с нов контакт, защото хората попълват формата веднага.',
              name: 'Митко Абаджиев',
              role: 'финансов консултант',
              metric: '10/10 за лесно събиране на контакти',
            },
            {
              quote: 'За един месец направих 200 сканирания и от тях ми излязоха 5 сделки.',
              name: 'Валери Денисенко',
              role: 'real estate agent',
              metric: '200 scans -> 5 deals',
            },
            {
              quote: 'Имам над 500 сканирания на профила си и за мен това е 10 от 10.',
              name: 'Емо Ангелов',
              role: 'XAXX',
              metric: '500 scans · 10/10',
            },
          ],
          caseStudyLabel: 'Мини кейс',
          caseStudyTitle: 'От сканиране до сделки в рамките на 30 дни.',
          caseStudyBody:
            'Валери Денисенко използва Ninja Card в реални срещи и за 1 месец прави 200 сканирания, от които идват 5 сделки. Това е силен пример, защото показва, че картата не спира до first impression, а помага разговорът да продължи до резултат.',
          caseStudyStat: '200 -> 5',
          caseStudyCaption: 'сканирания към сделки за 1 месец',
        }
      : {
          eyebrow: 'Proof and fit',
          title: 'It works best for people and teams who build trust in the meeting and want a real follow-up after it.',
          subtitle:
            'If you are a consultant, salesperson, founder, or part of a team that regularly meets prospects face to face, Ninja Cards makes the next step easier than a paper card.',
          statLine: '15,806 scans and 270+ active digital cards.',
          bankLine: 'Used by Postbank for team rollout, as well as by Trivium, Home2You, and businesses that want a stronger first impression and cleaner follow-up.',
          fitTitle: 'Best fit for',
          fitItems: ['consultants and advisory services', 'salespeople and account managers', 'founders, partners, and growing teams'],
          proofTitle: 'What the proof already shows',
          proofItems: [
            'Matey Abadjiev says the lead form captures contacts from almost every meeting.',
            'Valeri Denisenko generated 200 scans in 1 month and closed 5 deals from them.',
            'It already works for solo profiles and company rollout, including Postbank.',
          ],
          testimonialsTitle: 'What customers say',
          testimonials: [
            {
              quote: 'On almost every meeting, I leave with a new contact because people fill in the form on the spot.',
              name: 'Matey Abadjiev',
              role: 'finance consultant',
              metric: '10/10 for easy lead capture',
            },
            {
              quote: 'In one month I got 200 scans, and 5 deals came from them.',
              name: 'Valeri Denisenko',
              role: 'real estate agent',
              metric: '200 scans -> 5 deals',
            },
            {
              quote: 'My profile has over 500 scans, and for me this is a 10 out of 10.',
              name: 'Emo Angelov',
              role: 'XAXX',
              metric: '500 scans · 10/10',
            },
          ],
          caseStudyLabel: 'Mini case study',
          caseStudyTitle: 'From scans to deals within 30 days.',
          caseStudyBody:
            'Valeri Denisenko used Ninja Card in real meetings and generated 200 scans in 1 month, which led to 5 deals. That matters because it shows the card does not stop at the first impression. It helps the conversation continue into a measurable result.',
          caseStudyStat: '200 -> 5',
          caseStudyCaption: 'scans into deals in 1 month',
        };

  return (
    <section className="border-y border-white/8 bg-[#080b10] py-12 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{copy.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">{copy.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.subtitle}</p>

            <div className="mt-6 border-l border-orange/30 pl-4">
              <div className="text-3xl font-black text-white">{copy.statLine}</div>
              <p className="mt-2 text-sm leading-6 text-gray-400">{copy.bankLine}</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l border-white/10 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{copy.fitTitle}</p>
              <ul className="mt-4 space-y-3">
                {copy.fitItems.map((item) => (
                  <li key={item} className="text-sm leading-6 text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l border-white/10 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{copy.proofTitle}</p>
              <ul className="mt-4 space-y-3">
                {copy.proofItems.map((item) => (
                  <li key={item} className="text-sm leading-6 text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex min-h-16 items-center justify-center px-2 py-4 opacity-80">
              <Image src={logo.src} alt={logo.alt} width={180} height={72} className="max-h-10 w-auto object-contain opacity-80" />
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.testimonialsTitle}</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {copy.testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-6 text-gray-100">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-400">{item.role}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange">{item.metric}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{copy.caseStudyLabel}</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">{copy.caseStudyTitle}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">{copy.caseStudyBody}</p>
            </div>

            <div className="border-l border-orange/30 pl-5">
              <div className="text-5xl font-black text-orange">{copy.caseStudyStat}</div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-orange/80">{copy.caseStudyCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
