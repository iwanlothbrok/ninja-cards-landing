import Product from '@/app/[locale]/components/product/Product';
import HowToUse from '@/app/[locale]/components/product/HowToUse';
import RelatedProducts from '@/app/[locale]/components/product/RelatedProducts';
import { getLandingProduct, landingProducts } from '@/data/products';
import { locales } from '@/config';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    landingProducts.map((product) => ({
      locale,
      id: product.id,
    }))
  );
}

export const dynamicParams = false;

export default function ProductPageContent({
  params,
}: {
  params: { id: string };
}) {
  const product = getLandingProduct(params.id);
  if (!product) {
    notFound();
  }

  const relatedProducts = landingProducts.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="text-white min-h-screen">
      <Product
        title={product.name}
        price={product.priceEur.toString()}
        oldPrice={product.oldPriceEur ?? 0}
        imageUrls={product.gallery}
        description={product.description}
        badge={product.badge}
      />
      <HowToUse />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
