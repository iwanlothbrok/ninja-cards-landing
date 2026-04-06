'use client';

import { Link } from '@/navigation';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function About() {
  const locale = useLocale() as Locale;

  const content =
    locale === 'bg'
      ? {
          eyebrow: 'Как работи',
          title: 'Как работи Ninja Card след самото докосване',
          subtitle: 'Процесът е прост, а точно това го прави силен в реални срещи.',
          intro:
            'Важното не е само картата да се отвори. Важното е какво става след това: човекът да те запази, да види контактите ти и да има причина да продължи разговора.',
          steps: [
            { index: '01', title: 'Докосване', text: 'Профилът се отваря веднага.' },
            { index: '02', title: 'Профил', text: 'Изглежда професионално и подредено.' },
            { index: '03', title: 'Контакт', text: 'Запазва се лесно в телефона.' },
            { index: '04', title: 'Следваща стъпка', text: 'Samurai насочва разговора нататък.' },
          ],
          valueTitle: 'Защо това работи',
          valuePoints: ['По-малко триене', 'По-лесно запазване на контакт', 'По-силен последващ контакт'],
          videoEyebrow: 'Виж го в действие',
          videoTitle: 'Видеото обяснява повече от дълъг текст.',
          videoText: 'Ще видиш как човек стига от докосване до профил, контакт и ясна следваща стъпка.',
          processTitle: 'Как започваш със Samurai',
          process: ['Избираш Samurai', 'Стартираш 30 дни', 'Правим картата', 'Започваш да я ползваш'],
          resultLabel: 'Как да го разбираш',
          resultValue: '200',
          resultText: 'сканирания означават 200 човека, които са отворили профила и са показали интерес.',
          primaryCta: 'Започни със Samurai',
          secondaryCta: 'Виж функциите',
        }
      : {
          eyebrow: 'How it works',
          title: 'How Ninja Card works after the first tap',
          subtitle: 'The flow is simple, and that is exactly why it works in real meetings.',
          intro:
            'What matters is not only that the card opens. What matters is what happens after that: the person saves you, sees your information, and has a reason to continue the conversation.',
          steps: [
            { index: '01', title: 'Tap', text: 'The profile opens instantly.' },
            { index: '02', title: 'Profile', text: 'It looks professional and clear.' },
            { index: '03', title: 'Contact', text: 'It is easy to save on the phone.' },
            { index: '04', title: 'Next step', text: 'Samurai keeps the conversation moving.' },
          ],
          valueTitle: 'Why this works',
          valuePoints: ['Less friction', 'Easier contact saving', 'Stronger follow-up'],
          videoEyebrow: 'See it in action',
          videoTitle: 'The video explains it better than a long paragraph.',
          videoText: 'You can see how someone moves from a tap to a profile, a saved contact, and a next step.',
          processTitle: 'How you start with Samurai',
          process: ['Choose Samurai', 'Start 30 days', 'We design the card', 'You start using it'],
          resultLabel: 'How to read it',
          resultValue: '200',
          resultText: 'scans means 200 people opened the profile and showed interest.',
          primaryCta: 'Start with Samurai',
          secondaryCta: 'See features',
        };

  return (
    <section className="bg-[#05070b] py-12 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center phi-stack"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange">{content.eyebrow}</p>
          <h2 className="phi-heading text-3xl font-black sm:text-4xl">{content.title}</h2>
          <p className="phi-copy mx-auto text-sm text-gray-300">{content.subtitle}</p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="phi-copy-wide text-sm text-gray-200">{content.intro}</p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {content.steps.map((step) => (
                <div key={step.index} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-orange">{step.index}</div>
                  <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.valueTitle}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {content.valuePoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-gray-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildPlanSignupUrl(locale, 'samurai')}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange via-amber-400 to-yellow-300 px-7 py-4 text-sm font-black text-black shadow-[0_14px_40px_rgba(245,158,11,0.3)] ring-2 ring-amber-200/30 transition-transform hover:scale-[1.03] sm:px-8 sm:text-base"
              >
                {content.primaryCta}
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/15 sm:px-8 sm:text-base"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0d13] shadow-[0_0_70px_rgba(251,146,60,0.06)]">
              <video className="block w-full rounded-[2rem]" src="/nfc-card.mp4" controls playsInline preload="metadata" />
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr,auto]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{content.videoEyebrow}</p>
                <h3 className="mt-2 text-xl font-black text-white">{content.videoTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">{content.videoText}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-orange">{content.processTitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {content.process.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-amber-300/25 bg-[linear-gradient(135deg,rgba(251,146,60,0.14),rgba(251,146,60,0.04))] p-5 sm:w-[180px]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.resultLabel}</p>
                <div className="mt-2 text-5xl font-black text-white">{content.resultValue}</div>
                <p className="mt-2 text-sm leading-6 text-gray-100">{content.resultText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
