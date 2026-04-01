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
    <div className="flex items-center gap-3">
      {locales.map((locale) => {
        const isActive = pathname.startsWith(`/${locale}`);
        const href = buildHrefForCurrentRoute(pathname);

        return (
          <Link
            key={locale}
            href={href}
            locale={locale}
            aria-current={isActive ? 'page' : undefined}
            className={`relative px-4 py-2 rounded-lg border text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
              isActive
                ? 'border-orange bg-gradient-to-r from-orange via-yellow-400 to-orange text-white shadow-[0_8px_16px_rgba(255,140,0,0.4)] scale-110 backdrop-blur-sm'
                : 'border-orange/40 text-orange hover:border-orange/80 hover:bg-orange/5 hover:shadow-[0_4px_12px_rgba(255,140,0,0.2)] hover:scale-105'
            }`}
            onClick={() => setIsMenuOpen(false)}
            style={{ minWidth: 50, textAlign: 'center' }}
          >
            {isActive ? (
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-orange to-yellow-400 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg animate-pulse">
                *
              </span>
            ) : null}
            <span className="drop-shadow-lg">{locale}</span>
          </Link>
        );
      })}
    </div>
  );
}
