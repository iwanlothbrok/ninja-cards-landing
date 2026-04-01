'use client';

import { useTranslations } from 'next-intl';

const cases = [
  { key: 'sales', emoji: 'Sales' },
  { key: 'marketing', emoji: 'Events' },
  { key: 'consultants', emoji: 'Consulting' },
  { key: 'entrepreneurs', emoji: 'Founders' },
];

export default function RealUseCases() {
  const t = useTranslations('RealUseCases');

  return (
    <section className="bg-black py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{t('title')}</p>
          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">{t('subtitle')}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cases.map((item) => (
            <article key={item.key} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">{item.emoji}</p>
              <h3 className="mt-3 text-lg font-bold text-white">{t(`${item.key}.title`)}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
                {[1, 2, 3].map((i) => (
                  <li key={i}>• {t(`${item.key}.points.${i}`)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
