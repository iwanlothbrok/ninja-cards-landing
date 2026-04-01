'use client';

import { Link } from '@/navigation';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { useLocale } from 'next-intl';

const heroContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    proof: string;
    primaryCta: string;
    secondaryCta: string;
    microproof: Array<{ value: string; label: string }>;
    floatingStat: string;
    floatingLabel: string;
    visualAlt: string;
  }
> = {
  bg: {
    eyebrow: 'NFC карта за реални лийдове',
    title: 'Визитката се губи. Ninja Card превръща срещата в лийд.',
    subtitle:
      'Един tap отваря профила, запазва контакта и при Samurai събира интерес още на място.',
    proof:
      'Trivium, Home2You, Broadway Estate и една от най-големите банки в България вече го използват.',
    primaryCta: 'Започни със Samurai',
    secondaryCta: 'Виж плановете',
    microproof: [
      { value: '15 806', label: 'сканирания' },
      { value: '270+', label: 'активни карти' },
      { value: 'Без app', label: 'за клиента' },
    ],
    floatingStat: '45',
    floatingLabel: 'profile views месечно средно при брокери',
    visualAlt: 'Екип на Ninja Card на събитие с карти в ръка',
  },
  en: {
    eyebrow: 'NFC card for real leads',
    title: 'Paper cards get lost. Ninja Card turns the meeting into a lead.',
    subtitle:
      'One tap opens your profile, saves your contact details, and with Samurai captures interest on the spot.',
    proof:
      'Already used by Trivium, Home2You, Broadway Estate, and one of the largest banks in Bulgaria.',
    primaryCta: 'Start with Samurai',
    secondaryCta: 'See plans',
    microproof: [
      { value: '15,806', label: 'scans' },
      { value: '270+', label: 'active cards' },
      { value: 'No app', label: 'for the recipient' },
    ],
    floatingStat: '45',
    floatingLabel: 'average monthly profile views for brokers',
    visualAlt: 'Ninja Card team at a live event holding cards',
  },
};

export const Hero: React.FC = () => {
  const locale = useLocale() as Locale;
  const content = heroContent[locale];

  return (
    <section className="relative overflow-hidden bg-[#06080d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.10),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.05),transparent_22%)]" />

      <div className="relative z-10 px-4 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr,0.96fr] lg:items-center">
          <div className="max-w-[44rem]">
            <p className="mb-4 inline-flex rounded-full border border-orange/25 bg-orange/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange sm:text-xs">
              {content.eyebrow}
            </p>

            <h1 className="max-w-[42rem] text-4xl font-black leading-[0.94] text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.8rem]">
              {content.title}
            </h1>

            <p className="mt-5 max-w-[34rem] text-base leading-7 text-gray-300 sm:text-lg">
              {content.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange via-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_30px_rgba(245,158,11,0.18)] transition-transform hover:scale-[1.02] sm:px-7 sm:text-base"
              >
                {content.primaryCta}
              </a>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center rounded-full border border-white/14 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:px-7 sm:text-base"
              >
                {content.secondaryCta}
              </Link>
            </div>

            <p className="mt-6 max-w-[34rem] text-sm leading-6 text-gray-400">{content.proof}</p>

            <div className="mt-8 flex max-w-[34rem] flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-3">
              {content.microproof.map((item) => (
                <div key={item.label}>
                  <div className="text-xl font-black text-white">{item.value}</div>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[760px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0f16] shadow-[0_0_70px_rgba(251,146,60,0.05)]">
              <img
                src="/header.webp"
                alt={content.visualAlt}
                className="block h-[340px] w-full object-cover object-center sm:h-[420px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/12 via-transparent to-black/8" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/72 to-transparent px-5 pb-5 pt-20 sm:px-6 sm:pb-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-[320px] rounded-[1.25rem] border border-white/10 bg-black/58 px-4 py-3 backdrop-blur-sm">
                    <div className="text-3xl font-black text-orange">{content.floatingStat}</div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-gray-200">
                      {content.floatingLabel}
                    </p>
                  </div>
                  <div className="inline-flex w-fit rounded-full border border-white/12 bg-black/58 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm">
                    {content.microproof[2].value} {content.microproof[2].label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
