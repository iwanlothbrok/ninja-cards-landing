import type { Metadata } from 'next';
import ChooseCard from '../components/cards/ChooseCard';
import { createPageMetadata } from '@/data/page-metadata';
import { locales, type Locale } from '@/config';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedLocale = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : 'bg';

  return createPageMetadata(resolvedLocale, 'cards');
}

export default function Page() {
  return (
    <div>
      <ChooseCard />
    </div>
  );
}
