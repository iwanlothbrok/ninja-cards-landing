import type { Locale } from '@/config';

export const SITE_BASE_URL = 'https://ninja-cards-landing.vercel.app';
export const APP_BASE_URL = 'https://www.ninjacardsnfc.com';
export const LOGIN_URL = `${APP_BASE_URL}/bg/login`;
export const ENTERPRISE_CONTACT_URL = `${APP_BASE_URL}/plans`;

type PlanKey = 'shinobi' | 'samurai' | 'shogun';

function buildAbsoluteUrl(baseUrl: string, locale: Locale, path: string, params?: Record<string, string>) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(`/${locale}${normalizedPath}`, baseUrl);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}

function buildAbsoluteAppUrl(path: string, params?: Record<string, string>) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(normalizedPath, APP_BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}

export function buildMarketingPath(locale: Locale, path: string, params?: Record<string, string>) {
  const absoluteUrl = buildAbsoluteUrl(SITE_BASE_URL, locale, path, params);
  const { pathname, search } = new URL(absoluteUrl);
  return `${pathname}${search}`;
}

export function buildMarketingUrl(locale: Locale, path: string, params?: Record<string, string>) {
  return buildAbsoluteUrl(SITE_BASE_URL, locale, path, params);
}

export function buildLoginUrl(locale: Locale) {
  return buildAbsoluteUrl(APP_BASE_URL, locale, '/login');
}

export function buildPlansUrl(locale: Locale, plan?: PlanKey) {
  return buildMarketingPath(locale, '/plans', plan ? { plan } : undefined);
}

export function buildAppPlansUrl(plan?: PlanKey) {
  return buildAbsoluteAppUrl('/plans', plan ? { plan } : undefined);
}

export function buildPlanSignupUrl(_locale: Locale, plan: PlanKey) {
  return buildAppPlansUrl(plan);
}
