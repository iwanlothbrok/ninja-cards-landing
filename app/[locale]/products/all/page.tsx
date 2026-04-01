'use client';

import ProductList from '@/app/[locale]/products/ProductList';
import Header from '@/app/[locale]/components/layout/Header';
import { useTranslations } from 'next-intl';
import { landingProducts } from '@/data/products';

export default function AllProductsPage() {
  const t = useTranslations('AllProductsPage');

  return (
    <>
      <Header
        pageInformation={t('header.pageInformation')}
        textOne={t('header.textOne')}
        textTwo={t('header.textTwo')}
        textThree={t('header.textThree')}
      />
      <div className="container mx-auto pb-20">
        <ProductList products={landingProducts} />
      </div>
    </>
  );
}
