import type { Metadata } from 'next';
import { locales, type Locale } from '@/config';
import { createPageMetadata } from '@/data/page-metadata';
import FeaturesPageClient from './FeaturesPageClient';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedLocale = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : 'bg';

  return createPageMetadata(resolvedLocale, 'features');
}

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
