import type { Locale } from '@/config';

type LocalizedBlock = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    stats: Array<{ value: string; label: string }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  platform: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  cardSupport: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportTitle: string;
    supportBullets: string[];
    primaryCta: string;
    secondaryCta: string;
    pricingNote: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  plansPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    comparisonTitle: string;
    comparisonSubtitle: string;
    pricingNote: string;
    teamTitle: string;
    teamText: string;
    teamCta: string;
  };
};

const content: Record<Locale, LocalizedBlock> = {
  en: {
    hero: {
      eyebrow: 'Most people choose Samurai',
      title: 'Get a digital business card that actually brings leads back.',
      subtitle:
        'For solo professionals, Samurai is the fastest way to look sharper, capture contacts, and track real interest after every meeting.',
      primaryCta: 'Start with Samurai',
      secondaryCta: 'See plans',
      tertiaryCta: 'Log in',
      stats: [
        { value: '30 days', label: 'trial on paid plans' },
        { value: '1st card free', label: 'with one individual profile' },
        { value: '€20', label: 'per extra card for 2+ profiles' },
      ],
    },
    proof: {
      eyebrow: 'Used by real businesses',
      title: 'Built for one-person sales first, ready for team rollout later',
      subtitle:
        'Start as an individual with Samurai, then scale into branded company management when your team needs more control.',
    },
    platform: {
      eyebrow: 'Why Samurai converts',
      title: 'One profile, one card, and the features that turn networking into follow-up.',
      subtitle:
        'Samurai is the offer to push because it adds the business features most people actually want after they meet someone.',
      bullets: [
        'Lead capture form',
        'Analytics and interaction history',
        'Logo and branding options',
        'Advanced links and sections',
        'Premium sharing with NFC card + QR',
        'Priority support',
      ],
      primaryCta: 'Choose Samurai',
      secondaryCta: 'See all features',
    },
    cardSupport: {
      eyebrow: 'Card designs',
      title: 'Your card is the trigger. Samurai is what makes it convert.',
      subtitle:
        'Pick a design that fits your style, but keep the offer simple: one profile gets the first card free, and extra cards are €20 each when buying 2 profiles or more.',
      supportTitle: 'Best for',
      supportBullets: [
        'solo professionals',
        'networking events',
        'premium personal branding',
      ],
      primaryCta: 'Explore designs',
      secondaryCta: 'Start Samurai',
      pricingNote: 'First card free with one individual profile. Buying 2 profiles or more? Each card is €20.',
    },
    cta: {
      eyebrow: 'Ready to start',
      title: 'Start with Samurai. Keep team growth as your next step.',
      subtitle:
        'The landing should help one person buy fast, while still showing companies that Ninja Cards is active and ready for bigger rollouts.',
      primaryCta: 'Go to Samurai',
      secondaryCta: 'Log in to profile',
      note: 'For teams, Shogun adds admin control, centralized analytics, and onboarding support.',
    },
    plansPage: {
      eyebrow: 'Plans',
      title: 'Samurai for individual growth. Shogun for team scale.',
      subtitle:
        'Choose the plan that fits now, but make Samurai the default if you want real conversion from meetings and networking.',
      comparisonTitle: 'What changes when you upgrade',
      comparisonSubtitle:
        'Shinobi is the starter. Samurai is the business choice. Shogun is for company-wide rollout.',
      pricingNote: 'Card pricing: first card free with one individual profile. For 2 or more profiles, each card is €20.',
      teamTitle: 'Need this for a bigger team?',
      teamText:
        'Shogun is built for companies that need centralized profile management, admin control, company branding, and team analytics.',
      teamCta: 'Talk to team sales',
    },
  },
  bg: {
    hero: {
      eyebrow: 'Най-често избират Samurai',
      title: 'Вземи дигитална визитка, която наистина връща лийдове.',
      subtitle:
        'За индивидуални професионалисти Samurai е най-бързият начин да изглеждаш по-силно, да събираш контакти и да следиш реалния интерес след всяка среща.',
      primaryCta: 'Започни със Samurai',
      secondaryCta: 'Виж плановете',
      tertiaryCta: 'Логин',
      stats: [
        { value: '30 дни', label: 'тест на платените планове' },
        { value: '1-ва карта безплатно', label: 'с един индивидуален профил' },
        { value: '€20', label: 'на допълнителна карта при 2+ профила' },
      ],
    },
    proof: {
      eyebrow: 'Използвано от реални бизнеси',
      title: 'Създадено първо за индивидуални продажби, готово и за екипен rollout',
      subtitle:
        'Започни като индивидуален потребител със Samurai, а после надгради към фирмено управление, когато екипът ти поиска повече контрол.',
    },
    platform: {
      eyebrow: 'Защо Samurai конвертира',
      title: 'Един профил, една карта и функциите, които превръщат networking-а във follow-up.',
      subtitle:
        'Samurai е правилната оферта за акцент, защото дава точно бизнес функциите, които повечето хора реално искат след среща.',
      bullets: [
        'Форма за събиране на лийдове',
        'Анализи и история на взаимодействията',
        'Лого и брандинг опции',
        'Разширени линкове и секции',
        'Премиум споделяне с NFC карта + QR',
        'Приоритетна поддръжка',
      ],
      primaryCta: 'Избери Samurai',
      secondaryCta: 'Виж всички функции',
    },
    cardSupport: {
      eyebrow: 'Дизайни на карти',
      title: 'Картата е trigger-ът. Samurai е това, което я кара да конвертира.',
      subtitle:
        'Избери дизайн, който пасва на стила ти, но офертата трябва да е проста: един профил получава първата карта безплатно, а всяка следваща карта е €20 при 2 или повече профила.',
      supportTitle: 'Най-подходящо за',
      supportBullets: [
        'индивидуални професионалисти',
        'networking събития',
        'премиум личен бранд',
      ],
      primaryCta: 'Разгледай дизайните',
      secondaryCta: 'Започни Samurai',
      pricingNote: 'Първата карта е безплатна с един индивидуален профил. При 2 или повече профила всяка карта е €20.',
    },
    cta: {
      eyebrow: 'Готови за старт',
      title: 'Започни със Samurai. Запази екипния upgrade за следващата стъпка.',
      subtitle:
        'Сайтът трябва да помага на един човек да купи бързо, като в същото време показва на фирмите, че Ninja Cards е активен и готов за по-големи rollouts.',
      primaryCta: 'Към Samurai',
      secondaryCta: 'Логин към профила',
      note: 'За екипи Shogun добавя админ контрол, централизирани анализи и onboarding поддръжка.',
    },
    plansPage: {
      eyebrow: 'Планове',
      title: 'Samurai за индивидуален растеж. Shogun за мащаб на екипа.',
      subtitle:
        'Избери плана, който ти пасва сега, но направи Samurai основния избор, ако искаш реална конверсия от срещи и networking.',
      comparisonTitle: 'Какво се променя при upgrade',
      comparisonSubtitle:
        'Shinobi е стартът. Samurai е бизнес изборът. Shogun е за фирмен rollout.',
      pricingNote: 'Цени на картите: първата карта е безплатна с един индивидуален профил. При 2 или повече профила всяка карта е €20.',
      teamTitle: 'Трябва ти това за по-голям екип?',
      teamText:
        'Shogun е създаден за компании, които искат централизирано управление на профили, админ контрол, фирмен брандинг и екипни анализи.',
      teamCta: 'Говори с екип продажби',
    },
  },
};

export function getSalesContent(locale: Locale) {
  return content[locale];
}
