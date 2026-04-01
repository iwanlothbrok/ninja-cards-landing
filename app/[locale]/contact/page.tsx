'use client';

import React from 'react';
import Header from '../components/layout/Header';
import { useTranslations } from 'next-intl';

const contactActions = [
  { label: 'Email', value: 'hello@ninjacardsnfc.com', href: 'mailto:hello@ninjacardsnfc.com' },
  { label: 'Phone', value: '+359 89 898 6947', href: 'tel:+359898986947' },
  { label: 'Instagram', value: '@ninja.cards', href: 'https://www.instagram.com/ninja.cards' },
  { label: 'LinkedIn', value: 'Ninja Cards', href: 'https://www.linkedin.com/company/106287992' },
];

const Contact: React.FC = () => {
  const t = useTranslations('Contact');

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        pageInformation={t('pageInformation')}
        textOne={t('textOne')}
        textTwo={t('textTwo')}
        textThree={t('textThree')}
      />
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {contactActions.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-8 hover:border-orange/40 transition-colors"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-orange/80 mb-3">{item.label}</p>
              <p className="text-2xl font-semibold text-white">{item.value}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Tell us what you need</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Share the card style, quantity, and branding direction you want. We will help you choose the right setup and next steps.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
