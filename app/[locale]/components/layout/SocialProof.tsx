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
          title: 'Не просто добра визия. Реална употреба и реален интерес.',
          subtitle:
            'Ninja Cards вече се използва в срещи, продажби и екипни процеси. Това има значение, защото стойността не е в самата карта, а в това колко по-лесно хората те запазват и се връщат към теб.',
          statLine: '15 806 сканирания и 270+ активни дигитални карти.',
          bankLine: 'Използвано от Trivium, Home2You, Broadway Estate и една от най-големите банки в България.',
        }
      : {
          eyebrow: 'Proof',
          title: 'Not just good design. Real usage and real interest.',
          subtitle:
            'Ninja Cards is already used in meetings, sales, and team workflows. The value is not in the card alone. It is in how much easier it becomes for people to save you and return to your profile.',
          statLine: '15,806 scans and 270+ active digital cards.',
          bankLine: 'Used by Trivium, Home2You, Broadway Estate, and one of the largest banks in Bulgaria.',
        };

  return (
    <section className="bg-black py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{copy.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{copy.title}</h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{copy.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex min-h-20 items-center justify-center rounded-2xl border border-white/5 bg-black/20 px-4 py-5"
            >
              <Image src={logo.src} alt={logo.alt} width={180} height={72} className="max-h-10 w-auto object-contain opacity-80" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[0.7fr,1.3fr] lg:items-start">
          <div>
            <div className="text-4xl font-black text-white">{copy.statLine}</div>
          </div>
          <p className="text-sm leading-6 text-gray-400 sm:text-base">{copy.bankLine}</p>
        </div>
      </div>
    </section>
  );
}
