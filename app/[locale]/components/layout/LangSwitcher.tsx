'use client';

import { Link, usePathname } from '@/navigation';
import { locales } from '@/config';

export type LinkHref = React.ComponentProps<typeof Link>['href'];

function stripLocale(pathname: string): { locale: string | null; path: string } {
  for (const loc of locales) {
    const prefix = `/${loc}`;
    if (pathname === prefix) return { locale: loc, path: '/' };
    if (pathname.startsWith(prefix + '/')) return { locale: loc, path: pathname.slice(prefix.length) };
  }
  return { locale: null, path: pathname };
}

function buildHrefForCurrentRoute(fullPathname: string): LinkHref {
  const { path } = stripLocale(fullPathname || '/');
  const productMatch = path.match(/^\/products\/cards\/([^\/?#]+)/);

  if (productMatch) {
    const [, id] = productMatch;
    return { pathname: '/products/cards/[id]', params: { id } } as const;
  }

  return (path || '/') as LinkHref;
}

export function LangSwitcher({ setIsMenuOpen }: { setIsMenuOpen: (v: boolean) => void }) {
  const pathname = usePathname() ?? '/';

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => {
        const isActive = pathname.startsWith(`/${locale}`);
        const href = buildHrefForCurrentRoute(pathname);

        return (
          <Link
            key={locale}
            href={href}
            locale={locale}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-xl border px-3 py-2 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
              isActive
                ? 'border-orange bg-gradient-to-r from-orange via-yellow-400 to-orange text-white shadow-[0_8px_16px_rgba(255,140,0,0.28)]'
                : 'border-orange/30 text-orange hover:border-orange/70 hover:bg-orange/5'
            }`}
            onClick={() => setIsMenuOpen(false)}
            style={{ minWidth: 50, textAlign: 'center' }}
          >
            <span>{locale}</span>
          </Link>
        );
      })}
    </div>
  );
}
