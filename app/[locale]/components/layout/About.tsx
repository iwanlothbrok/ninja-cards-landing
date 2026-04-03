'use client';

import { Link } from '@/navigation';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

type AboutContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  flowEyebrow: string;
  flowTitle: string;
  flowSteps: Array<{ index: string; title: string; text: string }>;
  videoEyebrow: string;
  videoTitle: string;
  videoText: string;
  processEyebrow: string;
  processTitle: string;
  processSteps: Array<{ index: string; title: string; text: string }>;
  winLabel: string;
  winTitle: string;
  winPoints: string[];
  resultLabel: string;
  resultValue: string;
  resultText: string;
  primaryCta: string;
  secondaryCta: string;
};

const sectionContent: Record<Locale, AboutContent> = {
  bg: {
    eyebrow: 'Как работи',
    title: 'Един tap. Един профил. Една ясна следваща стъпка.',
    subtitle:
      'Това е разликата между карта, която просто изглежда добре, и карта, която продължава разговора след срещата.',
    flowEyebrow: 'Какво вижда човекът отсреща',
    flowTitle: 'Flow-ът е ясен още в първите секунди.',
    flowSteps: [
      {
        index: '01',
        title: 'Tap или QR',
        text: 'Отваря се веднага, без app и без обяснения.',
      },
      {
        index: '02',
        title: 'Профилът ти',
        text: 'Всичко важно е на едно място и изглежда професионално.',
      },
      {
        index: '03',
        title: 'Запазване на контакт',
        text: 'Телефонът, имейлът и линковете се запазват лесно.',
      },
      {
        index: '04',
        title: 'Lead или follow-up',
        text: 'При Samurai интересът вече има посока и следваща стъпка.',
      },
    ],
    videoEyebrow: 'Виж го в действие',
    videoTitle: 'Това продава по-добре от дълго обяснение.',
    videoText: 'Видеото показва директно как човек стига от tap до профил, запазен контакт и действие.',
    processEyebrow: 'Как започваш',
    processTitle: 'Краткият път до Samurai',
    processSteps: [
      {
        index: '01',
        title: 'Избираш Samurai',
        text: 'Това е планът, когато искаш не само визитка, а реален follow-up.',
      },
      {
        index: '02',
        title: 'Стартираш 30 дни',
        text: 'Влизаш без голям риск и тестваш в реални срещи.',
      },
      {
        index: '03',
        title: 'Правим ти карта',
        text: 'Подготвяме визията, профила и следващата стъпка.',
      },
      {
        index: '04',
        title: 'Картата работи',
        text: 'Срещите се превръщат в запазени контакти и повече интерес.',
      },
    ],
    winLabel: 'Защо печели',
    winTitle: 'Samurai е силен, защото маха триенето точно когато интересът е най-топъл.',
    winPoints: [
      'По-малко изгубени контакти.',
      'По-лесен follow-up още след срещата.',
      'По-ясна бизнес стойност от обикновена хартиена визитка.',
    ],
    resultLabel: 'Реален резултат',
    resultValue: '200',
    resultText: 'сканирания за 30 дни означават 200 човека, които са отворили профила и са показали интерес.',
    primaryCta: 'Започни със Samurai',
    secondaryCta: 'Виж всички функции',
  },
  en: {
    eyebrow: 'How it works',
    title: 'One tap. One profile. One clear next step.',
    subtitle:
      'That is the difference between a card that only looks good and one that keeps the conversation moving after the meeting.',
    flowEyebrow: 'What the other person sees',
    flowTitle: 'The flow is clear within seconds.',
    flowSteps: [
      {
        index: '01',
        title: 'Tap or QR',
        text: 'It opens instantly with no app and no explanation.',
      },
      {
        index: '02',
        title: 'Your profile',
        text: 'Everything important is in one place and looks professional.',
      },
      {
        index: '03',
        title: 'Saved contact',
        text: 'Phone, email, and links are easy to keep.',
      },
      {
        index: '04',
        title: 'Lead or follow-up',
        text: 'With Samurai, interest now has a direction and a next step.',
      },
    ],
    videoEyebrow: 'See it in action',
    videoTitle: 'This sells better than a long explanation.',
    videoText: 'The video shows exactly how someone moves from a tap to your profile, a saved contact, and an action.',
    processEyebrow: 'How you start',
    processTitle: 'The short path to Samurai',
    processSteps: [
      {
        index: '01',
        title: 'Choose Samurai',
        text: 'This is the plan when you want more than a digital card.',
      },
      {
        index: '02',
        title: 'Start 30 days',
        text: 'You start with low risk and test it in real meetings.',
      },
      {
        index: '03',
        title: 'We design your card',
        text: 'We prepare the look, profile, and next step.',
      },
      {
        index: '04',
        title: 'The card works',
        text: 'Meetings turn into saved contacts and stronger interest.',
      },
    ],
    winLabel: 'Why it wins',
    winTitle: 'Samurai works because it removes friction right when interest is still warm.',
    winPoints: [
      'Fewer lost contacts.',
      'Easier follow-up right after the meeting.',
      'Clearer business value than a simple paper card.',
    ],
    resultLabel: 'Real result',
    resultValue: '200',
    resultText: 'scans in 30 days means 200 people opened the profile and showed interest.',
    primaryCta: 'Start with Samurai',
    secondaryCta: 'See all features',
  },
};

const About: React.FC = () => {
  const locale = useLocale() as Locale;
  const content = sectionContent[locale];

  return (
    <section className="bg-[#05070b] py-14 text-white sm:py-18">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange">{content.eyebrow}</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[2.9rem]">{content.title}</h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{content.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{content.flowEyebrow}</p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-white">{content.flowTitle}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.flowSteps.map((step) => (
                <div key={step.index} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-orange">{step.index}</div>
                  <h4 className="mt-3 text-lg font-bold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
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
            className="space-y-5"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0d13] shadow-[0_0_70px_rgba(251,146,60,0.06)]">
              <video className="block w-full rounded-[2rem]" src="/nfc-card.mp4" controls playsInline preload="metadata" />
            </div>
            <div className="rounded-[1.75rem] border border-amber-300/20 bg-amber-300/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{content.videoEyebrow}</p>
              <h3 className="mt-2 text-xl font-black text-white">{content.videoTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-200">{content.videoText}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{content.processEyebrow}</p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-white">{content.processTitle}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {content.processSteps.map((step) => (
                <div key={step.index} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-orange">{step.index}</div>
                  <h4 className="mt-3 text-lg font-bold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{content.winLabel}</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">{content.winTitle}</h3>
              <div className="mt-5 grid gap-3">
                {content.winPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-gray-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-300/25 bg-[linear-gradient(135deg,rgba(251,146,60,0.14),rgba(251,146,60,0.04))] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{content.resultLabel}</p>
              <div className="mt-3 text-5xl font-black text-white sm:text-6xl">{content.resultValue}</div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-100">{content.resultText}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
