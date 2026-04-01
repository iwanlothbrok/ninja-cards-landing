import type { Locale } from '@/config';

export const APP_BASE_URL = 'https://www.ninjacardsnfc.com';
export const LOGIN_URL = `${APP_BASE_URL}/bg/login`;
export const ENTERPRISE_CONTACT_URL = 'mailto:hello@ninjacardsnfc.com';

type PlanKey = 'shinobi' | 'samurai' | 'shogun';

function buildUrl(locale: Locale, path: string, params?: Record<string, string>) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(`/${locale}${normalizedPath}`, APP_BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}

export function buildLoginUrl(locale: Locale) {
  return buildUrl(locale, '/login');
}

export function buildPlansUrl(locale: Locale, plan?: PlanKey) {
  return buildUrl(locale, '/plans', plan ? { plan } : undefined);
}

export function buildPlanSignupUrl(locale: Locale, plan: PlanKey) {
  return buildPlansUrl(locale, plan);
}

