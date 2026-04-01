import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales, type Locale } from './config';

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const fromPath = typeof locale === 'string' ? locale : undefined;
  const negotiated = await requestLocale;
  const candidate = fromPath ?? negotiated ?? defaultLocale;

  const resolvedLocale = (locales as readonly string[]).includes(candidate)
    ? (candidate as Locale)
    : defaultLocale;

  const messages = (await import(`./messages/${resolvedLocale}.json`)).default;
  return { locale: resolvedLocale, messages } as const;
});
