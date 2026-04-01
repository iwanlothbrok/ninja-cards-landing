export type LandingProduct = {
  id: string;
  name: string;
  image: string;
  gallery: string[];
  priceBgn: number;
  oldPriceBgn?: number;
  shortDescription: string;
  description: string;
  badge?: string;
};

export const landingProducts: LandingProduct[] = [
  {
    id: 'personalized',
    name: 'Personalized Metal Card',
    image: '/cards/personalized.png',
    gallery: ['/cards/personalized.png', '/cards/mh-front-back.mp4', '/cards/wa-front-back.png'],
    priceBgn: 79,
    oldPriceBgn: 99,
    shortDescription: 'Premium NFC business card with custom branding and a polished metal finish.',
    description:
      'A premium presentation card for founders, sales teams, and consultants who want a memorable first impression. Customize the branding, connect it to your digital profile, and hand contacts a polished share experience.',
    badge: 'Best seller',
  },
  {
    id: 'pulse-green',
    name: 'Ninja Pulse Green',
    image: '/cards/circles-green.png',
    gallery: ['/cards/circles-green.png', '/cards/wa-front-back-1.png', '/cards/wa-front-back.png'],
    priceBgn: 39,
    shortDescription: 'A lightweight NFC card design built for fast, modern contact sharing.',
    description:
      'An affordable entry point for teams and solo professionals who want to replace paper cards with a bold, instantly shareable digital profile.',
  },
  {
    id: 'pulse-orange',
    name: 'Ninja Pulse Orange',
    image: '/cards/circles-orange.png',
    gallery: ['/cards/circles-orange.png', '/cards/wa-front-back.png', '/cards/gradient.png'],
    priceBgn: 39,
    shortDescription: 'A bright, high-contrast design for in-person events and networking.',
    description:
      'Built for attention in crowded rooms. The orange variant keeps the same fast NFC sharing flow with a warmer, more energetic presentation.',
  },
  {
    id: 'flow',
    name: 'Ninja Flow',
    image: '/cards/women-colors.png',
    gallery: ['/cards/women-colors.png', '/cards/gradient.png', '/cards/sky.png'],
    priceBgn: 45,
    shortDescription: 'A vibrant creative design for brands that want more personality.',
    description:
      'A softer and more colorful visual direction that still keeps the same contact-sharing and digital profile experience behind the card.',
  },
  {
    id: 'inferno',
    name: 'Ninja Inferno',
    image: '/cards/gradient-lines-red.png',
    gallery: ['/cards/gradient-lines-red.png', '/cards/money.png', '/cards/sky.png'],
    priceBgn: 45,
    shortDescription: 'A bold red gradient card aimed at high-energy brands and operators.',
    description:
      'A stronger visual style for people who want the card itself to stand out before the NFC experience even begins.',
  },
  {
    id: 'legacy',
    name: 'Ninja Legacy',
    image: '/cards/money.png',
    gallery: ['/cards/money.png', '/cards/personalized.png', '/cards/gradient.png'],
    priceBgn: 45,
    shortDescription: 'A premium-looking design built for executive and corporate use.',
    description:
      'A more classic, luxury-inspired presentation that fits consultants, managers, and premium service businesses.',
  },
];

export function getLandingProduct(id: string) {
  return landingProducts.find((product) => product.id === id);
}
