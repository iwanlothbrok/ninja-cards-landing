'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { LandingProduct } from '@/data/products';
import type { Locale } from '@/config';

interface ProductItemProps {
  product: LandingProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const t = useTranslations('ProductItem');
  const locale = useLocale() as Locale;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 50, scale: 0.95 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
    >
      <div className="bg-white">
        <div className="w-full h-72 bg-white rounded-t-lg overflow-hidden">
          <Link href={`/products/cards/${product.id}` as any}>
            <img
              src={product.image}
              alt={t('alt.productImage', { name: product.name })}
              className="w-full h-80 object-center object-contain transition-transform duration-500 transform hover:scale-110"
            />
          </Link>
        </div>
      </div>

      <div className="p-5 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-black transition-colors duration-300 group-hover:text-orange-400">
          {product.name}
        </h2>
        {product.oldPriceBgn ? (
          <p className="text-3xl text-red-500 line-through">{product.oldPriceBgn} {t('currency')}</p>
        ) : null}
        <p className="text-2xl font-semibold text-green-500 mt-2">
          {product.priceBgn.toFixed(2)} {t('currency')}
        </p>
        <p className="text-gray-500 mt-3">{product.shortDescription}</p>

        <Link
          href={`/products/cards/${product.id}` as any}
          className="mt-5 inline-block px-6 py-3 bg-orange text-white font-medium rounded-lg shadow-md hover:bg-orange hover:shadow-lg transition-transform transform hover:scale-110"
        >
          {t('cta.learnMore')}
        </Link>
        <Link
          href="/plans"
          className="mt-3 inline-block px-5 py-2 border border-black/10 text-black font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
        >
          {product.badge
            ? locale === 'bg'
              ? 'Комбинирай с план'
              : 'Match with a plan'
            : locale === 'bg'
              ? 'Виж плановете'
              : 'View plans'}
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductItem;
