// config.ts
import { defineRouting } from 'next-intl/routing';

export const locales = ['bg', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'bg';

export const routing = defineRouting({
    locales,
    defaultLocale: 'bg',
    localePrefix: 'always',
    pathnames: {
        '/': '/',
        '/plans': '/plans',
        '/features': '/features',
        '/contact': '/contact',
        '/askedQuestions': '/askedQuestions',
        '/cards': '/cards',
        '/products/cards': '/products/cards',
        '/products/all': '/products/all',
        '/privacy/PrivacyPolicy': '/privacy/PrivacyPolicy',
        '/privacy/TermsOfUse': '/privacy/TermsOfUse',
        '/privacy/CookiePolicy': '/privacy/CookiePolicy',
        '/products/cards/[id]': '/products/cards/[id]',
    }
});
