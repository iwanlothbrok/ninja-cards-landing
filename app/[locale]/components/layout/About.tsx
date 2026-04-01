'use client';

import { Link } from '@/navigation';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';

const sectionContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    steps: Array<{ index: string; title: string; text: string }>;
    reasonsTitle: string;
    reasons: Array<{ title: string; text: string }>;
    caseLabel: string;
    caseTitle: string;
    caseText: string;
    caseStat: string;
    caseStatLabel: string;
    primaryCta: string;
    secondaryCta: string;
  }
> = {
  bg: {
    eyebrow: 'Как работи',
    title: 'NFC картата е входът. Истинската стойност идва от това какво става след сканирането.',
    subtitle:
      'Когато някой докосне картата или сканира QR кода, не просто вижда контактите ти. Вижда профил, запазва те с един tap и при Samurai може да направи реална следваща стъпка.',
    intro:
      'Това е разликата между визитка, която изглежда добре, и визитка, която работи за теб след срещата.',
    steps: [
      {
        index: '01',
        title: 'Отваря се веднага',
        text: 'Без app, без ръчно въвеждане и без объркване как човек да те намери по-късно.',
      },
      {
        index: '02',
        title: 'Контактът се запазва лесно',
        text: 'Телефон, имейл, социални мрежи и линкове са на едно място и остават лесни за връщане.',
      },
      {
        index: '03',
        title: 'Интересът може да стане лийд',
        text: 'При Samurai вече не разчиташ само на добро впечатление. Имаш форма, анализи и причина разговорът да продължи.',
      },
    ],
    reasonsTitle: 'Защо това конвертира по-добре',
    reasons: [
      {
        title: 'По-малко триене',
        text: 'Един tap е по-силен от разменени думи, загубена визитка и забравен follow-up.',
      },
      {
        title: 'По-силен follow-up',
        text: 'Вместо просто да дадеш контакт, можеш да уловиш интереса докато срещата още е топла.',
      },
      {
        title: 'По-ясна стойност за бизнеса',
        text: 'Профилни гледания, запазени контакти и лийдове са много по-измерими от хартиена визитка.',
      },
    ],
    caseLabel: 'Кейс за брокери',
    caseTitle: 'При брокери това не е просто визитка. Това е източник на нов интерес всеки месец.',
    caseText:
      'По данните, които ми даде, брокерите правят средно 45 нови profile views на месец. Това е силен аргумент, защото показва, че картата не приключва в ръката на клиента, а продължава да връща хората към профила.',
    caseStat: '45',
    caseStatLabel: 'нови profile views средно на месец',
    primaryCta: 'Започни със Samurai',
    secondaryCta: 'Виж всички функции',
  },
  en: {
    eyebrow: 'How it works',
    title: 'The NFC card is the entry point. The real value comes from what happens after the scan.',
    subtitle:
      'When someone taps the card or scans the QR code, they do not just see your contact details. They open a profile, save you in one tap, and with Samurai they can take a real next step.',
    intro:
      'That is the difference between a business card that looks good and one that keeps working after the meeting.',
    steps: [
      {
        index: '01',
        title: 'It opens instantly',
        text: 'No app, no manual data entry, and no confusion about how to find you later.',
      },
      {
        index: '02',
        title: 'Your contact is easy to save',
        text: 'Phone, email, social links, and key actions stay in one place and are easy to return to.',
      },
      {
        index: '03',
        title: 'Interest can become a lead',
        text: 'With Samurai, you are no longer relying on a good impression alone. You have forms, analytics, and a reason for the conversation to continue.',
      },
    ],
    reasonsTitle: 'Why this converts better',
    reasons: [
      {
        title: 'Less friction',
        text: 'One tap beats exchanged words, lost paper cards, and forgotten follow-up.',
      },
      {
        title: 'Stronger follow-up',
        text: 'Instead of only giving your contact, you can capture interest while the meeting is still warm.',
      },
      {
        title: 'Clearer business value',
        text: 'Profile views, saved contacts, and leads are much easier to measure than a paper card.',
      },
    ],
    caseLabel: 'Broker case',
    caseTitle: 'For brokers, this is not just a card. It becomes a source of new interest every month.',
    caseText:
      'Based on the study you shared, brokers average 45 new profile views per month. That is powerful because it shows the card does not end in a client’s hand. It keeps pulling people back to the profile.',
    caseStat: '45',
    caseStatLabel: 'new profile views per month on average',
    primaryCta: 'Start with Samurai',
    secondaryCta: 'See all features',
  },
};

const About: React.FC = () => {
  const locale = useLocale() as Locale;
  const content = sectionContent[locale];

  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange">{content.eyebrow}</p>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{content.title}</h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{content.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="max-w-2xl text-lg leading-8 text-white/90">{content.intro}</p>

            <div className="mt-8 space-y-6">
              {content.steps.map((step) => (
                <div key={step.index} className="grid gap-3 border-b border-white/10 pb-6 sm:grid-cols-[64px,1fr]">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-orange">{step.index}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange via-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:px-7 sm:text-base"
              >
                {content.primaryCta}
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:px-7 sm:text-base"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_70px_rgba(251,146,60,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.12),transparent_45%)]" />
              <Image
                src="/realMockup.png"
                alt="Ninja Cards digital profile preview"
                width={880}
                height={1180}
                className="relative h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.95fr,1.05fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.reasonsTitle}</p>
            <div className="mt-6 grid gap-6">
              {content.reasons.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-orange/20 bg-orange/5 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.caseLabel}</p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-white">{content.caseTitle}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-200">{content.caseText}</p>

            <div className="mt-6 border-t border-orange/20 pt-6">
              <div className="text-5xl font-black text-orange">{content.caseStat}</div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-orange/80">{content.caseStatLabel}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
