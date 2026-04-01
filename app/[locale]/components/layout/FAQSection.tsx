'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('LayoutFAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = ['one', 'two', 'three', 'four', 'five'];

  return (
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">{t('title')}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">{t('subtitle')}</p>
        </div>

        <div className="space-y-3">
          {items.map((key, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {t(`items.${key}.question`)}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-orange transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-gray-300 sm:px-6">
                        {t(`items.${key}.answer`)}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
