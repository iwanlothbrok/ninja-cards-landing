import React from 'react';

interface HeaderProps {
  pageInformation: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  eyebrow?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  pageInformation,
  textOne,
  textTwo,
  textThree,
  eyebrow = 'Ninja Cards',
  description = 'Built for fast sharing, clean follow-up, and a stronger first impression.',
}) => {
  const items = [textOne, textTwo, textThree].filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/header.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-20 sm:pt-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-orange/90">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {pageInformation}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-200 sm:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
