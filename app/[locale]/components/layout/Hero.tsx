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
    eyebrow: 'NFC карта за повече контакти',
    title: 'Ninja Card превръща добрата среща в реален интерес.',
    subtitle: 'С едно докосване човек отваря профила ти, запазва контакта и вижда как да продължи разговора.',
    proof: 'Използва се от Postbank, Trivium, Home2You и още бизнеси, които искат по-силен контакт след среща.',
    primaryCta: 'Започни със Samurai',
    secondaryCta: 'Виж плановете',
    microproof: [
      { value: '15 806', label: 'сканирания' },
      { value: '2 270+', label: 'активни карти' },
      { value: 'Без приложение', label: 'за клиента' },
    ],
    floatingStat: '2 270+',
    floatingLabel: 'активни карти при екипи и фирмени внедрявания',
    visualAlt: 'Екип на Ninja Card на събитие с карти в ръка',
  },
  en: {
    eyebrow: 'NFC card for real leads',
    title: 'Ninja Card turns a good meeting into real interest.',
    subtitle: 'One tap opens your profile, saves your contact, and gives the conversation a clear next step.',
    proof: 'Used by Postbank, Trivium, Home2You, and more businesses that want stronger follow-up after meetings.',
    primaryCta: 'Start with Samurai',
    secondaryCta: 'See plans',
    microproof: [
      { value: '15,806', label: 'scans' },
      { value: '2,270+', label: 'active cards' },
      { value: 'No app', label: 'for the recipient' },
    ],
    floatingStat: '2,270+',
    floatingLabel: 'active cards after team rollouts',
    visualAlt: 'Ninja Card team at a live event holding cards',
  },
};

export const Hero: React.FC = () => {
  const locale = useLocale() as Locale;
  const content = heroContent[locale];

  return (
    <section className="relative overflow-hidden bg-[#06080d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.06),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,13,0.92)_0%,rgba(6,8,13,0.86)_38%,rgba(6,8,13,0.42)_68%,rgba(6,8,13,0.18)_100%)]" />

      <div className="relative z-10 px-4 pb-14 pt-12 sm:pb-16 sm:pt-16 lg:px-8 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="max-w-[38rem]">
            <p className="mb-4 inline-flex rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange sm:text-xs">
              {content.eyebrow}
            </p>

            <h1 className="max-w-[34rem] text-4xl font-black leading-[0.94] text-white sm:text-5xl lg:text-[3.45rem] xl:text-[3.95rem]">
              {content.title}
            </h1>

            <p className="mt-5 max-w-[28rem] text-base leading-7 text-gray-200 sm:text-lg">{content.subtitle}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange via-amber-400 to-yellow-300 px-7 py-4 text-sm font-black text-black shadow-[0_14px_40px_rgba(245,158,11,0.3)] ring-2 ring-amber-200/30 transition-transform hover:scale-[1.03] sm:px-8 sm:text-base"
              >
                {content.primaryCta}
              </a>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/15 sm:px-8 sm:text-base"
              >
                {content.secondaryCta}
              </Link>
            </div>

            <p className="mt-6 max-w-[28rem] text-sm leading-6 text-gray-400">{content.proof}</p>

            <div className="mt-8 grid max-w-[28rem] grid-cols-3 gap-4 border-t border-white/10 pt-4">
              {content.microproof.map((item) => (
                <div key={item.label} className="min-w-0">
                  <div className="text-xl font-black text-white sm:text-2xl">{item.value}</div>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[820px]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0b0f16] shadow-[0_0_90px_rgba(251,146,60,0.07)]">
              <img
                src="/header.webp"
                alt={content.visualAlt}
                className="block h-[380px] w-full object-cover object-center sm:h-[500px] lg:h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-black/10" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/68 to-transparent px-5 pb-5 pt-24 sm:px-7 sm:pb-7">
                <div className="max-w-[320px]">
                  <div className="text-4xl font-black text-orange">{content.floatingStat}</div>
                  <p className="mt-1 max-w-[18rem] text-[11px] uppercase tracking-[0.16em] text-gray-200">
                    {content.floatingLabel}
                  </p>
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
