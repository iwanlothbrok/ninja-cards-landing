'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Locale } from '@/config';
import { useLocale } from 'next-intl';

const content: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  }
> = {
  bg: {
    eyebrow: 'Възражения преди покупка',
    title: 'Най-честите въпроси преди човек да започне със Samurai',
    subtitle: 'Тук адресираме съмнението, което най-често спира покупката в последния момент.',
    items: [
      {
        question: 'Ще ми донесе ли реално повече лийдове?',
        answer:
          'Samurai не обещава магия. Той премахва триенето след срещата: профилът се отваря веднага, контактът се запазва лесно, а lead form и analytics правят интереса измерим и usable.',
      },
      {
        question: 'Ще го използват ли хората или ще го игнорират?',
        answer:
          'Точно затова NFC + QR работят по-добре от хартиена визитка. Един tap или scan е по-лесен от това човек да пази карта в портфейла и после да я търси.',
      },
      {
        question: 'Защо да не остана с хартиени визитки?',
        answer:
          'Хартиената визитка приключва в ръката на отсрещния. Ninja Card продължава след срещата: профил, записване на контакт, нови profile views и при Samurai - реален lead capture.',
      },
      {
        question: 'Трябва ли на клиента да му инсталира приложение?',
        answer:
          'Не. Профилът се отваря директно в браузър. Това е ключово, защото маха една от най-честите причини хората да не стигнат до следваща стъпка.',
      },
      {
        question: 'Какво става след 30-дневния тест?',
        answer:
          'Продължаваш само ако Samurai ти носи стойност. Ако не е правилният fit, спираш без дългосрочен риск. Това е причината началото да е толкова лесно за тестване.',
      },
    ],
  },
  en: {
    eyebrow: 'Buying objections',
    title: 'The most common questions people ask before starting with Samurai',
    subtitle: 'These are the doubts that usually slow down the decision right before purchase.',
    items: [
      {
        question: 'Will this actually help me get more leads?',
        answer:
          'Samurai does not promise magic. It removes friction after the meeting: the profile opens instantly, the contact is easy to save, and lead capture plus analytics make interest measurable and usable.',
      },
      {
        question: 'Will people actually use it or ignore it?',
        answer:
          'That is exactly why NFC plus QR works better than paper. One tap or scan is easier than keeping a paper card, remembering it later, and manually saving the contact.',
      },
      {
        question: 'Why not just keep using paper business cards?',
        answer:
          'A paper card usually ends in someone else’s hand. Ninja Card keeps working after the meeting: profile access, saved contact details, return visits, and with Samurai, real lead capture.',
      },
      {
        question: 'Does the other person need an app?',
        answer:
          'No. The profile opens directly in the browser. That matters because it removes one of the biggest reasons people never take the next step.',
      },
      {
        question: 'What happens after the 30-day free trial?',
        answer:
          'You continue only if Samurai is creating value for you. If it is not the right fit, you stop without long-term risk. That is what makes testing it such a low-friction decision.',
      },
    ],
  },
};

export default function FAQSection() {
  const locale = useLocale() as Locale;
  const page = content[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#05070b] pb-16 text-white sm:pb-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 border-t border-white/10 pt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{page.eyebrow}</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">{page.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{page.subtitle}</p>
        </div>

        <div className="space-y-2">
          {page.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-2 py-5 text-left sm:px-3"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-orange transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-2 py-4 text-sm leading-6 text-gray-300 sm:px-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
