'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LandingProduct } from '@/data/products';

interface RelatedProductsProps {
  products: LandingProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const t = useTranslations('RelatedProducts');

  return (
    <div className="mt-6">
      <h3 className="text-3xl font-semibold text-white mb-8 text-center">{t('title')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="w-full h-56 bg-gray-100 rounded-t-lg overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover transition-transform duration-500 transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <Link href={`/products/cards/${product.id}`} className="text-white bg-orange px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                  {t('view')}
                </Link>
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange">
                {product.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
