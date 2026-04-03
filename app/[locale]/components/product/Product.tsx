'use client';

import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import DropdownSection from './DropdownSection';
import BenefitItem from './BenefitItem';
import { FaCheckCircle, FaMobileAlt, FaBarcode, FaCreditCard, FaWrench, FaGlobe } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';
import { buildPlanSignupUrl } from '@/data/site-links';
import type { Locale } from '@/config';

type ProductProps = {
  title: string;
  price: string;
  imageUrls: string[];
  oldPrice: number;
  description: string;
  badge?: string;
};

const Product: React.FC<ProductProps> = ({ title, price, oldPrice, imageUrls, description, badge }) => {
  const t = useTranslations('Product');
  const locale = useLocale() as Locale;

  return (
    <div className="min-md-screen pt-20 text-white bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-screen-2xl mx-auto py-16 px-6 lg:px-20">
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative">
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={3000}
              arrows={false}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              {imageUrls.map((url, index) => (
                <div key={index} className="relative">
                  {url.endsWith('.mp4') ? (
                    <video
                      src={url}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full object-cover mx-auto"
                      style={{ maxHeight: typeof window !== 'undefined' && window.innerWidth >= 768 ? '532px' : '300px' }}
                    />
                  ) : (
                    <img
                      src={url}
                      alt={`Product Image ${index + 1}`}
                      className="w-full object-cover mx-auto"
                      style={{ maxHeight: typeof window !== 'undefined' && window.innerWidth >= 768 ? '532px' : '300px' }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <p className="text-white text-lg font-semibold">{t('example', { index: index + 1 })}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute top-0 left-0 bg-orange text-white px-4 py-2 rounded-br-lg shadow-lg">
              {badge ?? t('badge')}
            </div>
          </div>

          <h1 className="text-4xl font-extrabold text-white mt-8 text-center">{title}</h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            {oldPrice > 0 ? <p className="text-3xl text-red-500 line-through">€{oldPrice}</p> : null}
            <p className="text-5xl font-bold text-green-500">€{price}</p>
          </div>

          <div className="mt-6 text-center">
            <a
              href={buildPlanSignupUrl(locale, 'samurai')}
              className="inline-block px-10 py-4 text-2xl rounded-full font-bold shadow-lg bg-gradient-to-r from-orange to-yellow-500 hover:from-orange-500 hover:to-orange-600 transition duration-300 w-full lg:w-auto"
            >
              {locale === 'bg' ? 'Избери план за тази карта' : 'Choose a plan for this card'}
            </a>
            <p className="mt-4 text-gray-300 text-sm">
              {locale === 'bg'
                ? 'Картата е най-силна, когато е свързана с дигитален профил, лийдове и анализи.'
                : 'The card works best when it is paired with the digital profile, lead capture, and analytics plan.'}
            </p>
          </div>

          <div className="mt-12">
            <Benefits />
          </div>

          <div className="mt-12 space-y-6">
            <DropdownSection title={t('sections.description')} isOpen={true} setIsOpen={() => undefined}>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </DropdownSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

function Benefits() {
  const t = useTranslations('Product.benefits');
  return (
    <div className="mt-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BenefitItem title={t('fast.title')} subtitle={t('fast.subtitle')} icon={FaWrench} />
        <BenefitItem title={t('payment.title')} subtitle={t('payment.subtitle')} icon={FaCreditCard} />
        <BenefitItem title={t('design.title')} subtitle={t('design.subtitle')} icon={FaMobileAlt} />
        <BenefitItem title={t('tech.title')} subtitle={t('tech.subtitle')} icon={FaBarcode} />
        <BenefitItem title={t('ready.title')} subtitle={t('ready.subtitle')} icon={FaCheckCircle} />
        <BenefitItem title={t('compatibility.title')} subtitle={t('compatibility.subtitle')} icon={FaGlobe} />
      </ul>
    </div>
  );
}
