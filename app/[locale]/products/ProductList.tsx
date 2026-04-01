'use client';

import React from 'react';
import ProductItem from './ProductItem';
import { LandingProduct } from '@/data/products';
import { useTranslations } from 'next-intl';

interface ProductListProps {
  products: LandingProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const t = useTranslations('ProductList');

  return (
    <div className="mt-5">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16"
        role="list"
        aria-label={t('aria.grid')}
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
