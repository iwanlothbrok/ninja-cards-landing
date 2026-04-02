'use client';

import { Link } from '@/navigation';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

const sectionContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    videoEyebrow: string;
    videoTitle: string;
    videoText: string;
    processEyebrow: string;
    processTitle: string;
    processSteps: Array<{ index: string; title: string; text: string }>;
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
    videoEyebrow: 'Виж го в действие',
    videoTitle: 'Това е реалният flow, който продава по-добре от обяснение.',
    videoText: 'Видеото показва директно как човек стига от tap до профил, записване на контакт и следваща стъпка.',
    processEyebrow: 'Как започваш',
    processTitle: 'Пътят е прост: избираш план, стартираш 30 дни, правим ти персонализирана карта и тя започва да работи за нови лийдове.',
    processSteps: [
      {
        index: '01',
        title: 'Избираш правилния план',
        text: 'Започваш със Samurai, ако искаш не само визитка, а lead capture, follow-up и по-ясна стойност след всяка среща.',
      },
      {
        index: '02',
        title: 'Стартираш 30-дневния тест',
        text: 'Влизаш без голям риск, защото имаш време да използваш картата в реални срещи и да видиш дали ти носи повече лийдове.',
      },
      {
        index: '03',
        title: 'Правим ти персонализирана карта',
        text: 'Подготвяме визията, профила и next-step flow-а така, че картата да изглежда професионално и да е готова за реална употреба.',
      },
      {
        index: '04',
        title: 'Картата започва да работи за теб',
        text: 'Хората сканират, запазват контакта ти, попълват формата и добрите срещи се превръщат в по-силен pipeline.',
      },
    ],
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
    caseLabel: 'Реален резултат',
    caseTitle: 'Това не е само за брокери. Работи навсякъде, където срещата трябва да продължи в интерес.',
    caseText:
      'От финансови консултанти до екипи като Postbank, доказателството е едно и също: по-лесно запазване на контакт, по-малко триене и по-силен шанс разговорът да продължи след срещата.',
    caseStat: '5',
    caseStatLabel: 'сделки от 200 сканирания за 1 месец',
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
    videoEyebrow: 'See it in action',
    videoTitle: 'This is the real flow that sells better than a long explanation.',
    videoText: 'The video shows exactly how someone goes from a tap to your profile, saved contact details, and a clear next step.',
    processEyebrow: 'How you start',
    processTitle: 'The path is simple: choose a plan, start the 30-day run, we design your personalized card, and it starts working for more leads.',
    processSteps: [
      {
        index: '01',
        title: 'Choose the right plan',
        text: 'Start with Samurai if you want more than a digital card: lead capture, follow-up, and clearer value after every meeting.',
      },
      {
        index: '02',
        title: 'Start the 30-day trial',
        text: 'You begin with low risk because you have time to use the card in real meetings and see whether it creates more leads.',
      },
      {
        index: '03',
        title: 'We design your personalized card',
        text: 'We prepare the look, profile, and next-step flow so the card feels professional and is ready for real-world use.',
      },
      {
        index: '04',
        title: 'The card starts working for you',
        text: 'People scan, save your contact, fill in the form, and your best meetings turn into a stronger pipeline.',
      },
    ],
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
    caseLabel: 'Real outcome',
    caseTitle: 'This is not only for real estate. It works anywhere the meeting needs to continue into real interest.',
    caseText:
      'From finance consultants to teams like Postbank, the proof is the same: easier contact capture, less friction, and a stronger chance the conversation continues after the meeting.',
    caseStat: '5',
    caseStatLabel: 'deals from 200 scans in 1 month',
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
          <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[2.6rem]">{content.title}</h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{content.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="max-w-2xl text-lg leading-8 text-white/90">{content.intro}</p>

            <div className="mt-8 space-y-5">
              {content.steps.map((step) => (
                <div key={step.index} className="grid gap-3 border-b border-white/10 pb-5 sm:grid-cols-[56px,1fr]">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-orange/80">{step.index}</div>
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
            className="mx-auto w-full max-w-xl"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0d13] shadow-[0_0_70px_rgba(251,146,60,0.06)]">
              <video className="block w-full rounded-[2rem]" src="/nfc-card.mp4" controls playsInline preload="metadata" />
            </div>
            <div className="mt-5 border-l border-orange/30 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{content.videoEyebrow}</p>
              <h3 className="mt-2 text-xl font-black text-white">{content.videoTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">{content.videoText}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.processEyebrow}</p>
            <h3 className="mt-3 max-w-4xl text-2xl font-black leading-tight text-white">{content.processTitle}</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {content.processSteps.map((step) => (
                <div key={step.index} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-orange">{step.index}</div>
                  <h4 className="mt-3 text-lg font-bold text-white">{step.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.reasonsTitle}</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {content.reasons.map((item) => (
                <div key={item.title} className="border-l border-white/10 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l border-orange/30 pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{content.caseLabel}</p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-white">{content.caseTitle}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-200">{content.caseText}</p>

            <div className="mt-6">
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
