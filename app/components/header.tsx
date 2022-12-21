import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';

const LINKS = [
  { name: 'LiveScore', to: '/' },
  { name: 'Scores', to: '/scores' },
  { name: 'Favourites', to: '/favourites' },
  { name: 'News', to: '/news' },
];

export function Header() {
  return (
    <header>
      <ul className="flex justify-between py-4">
        {LINKS.map((link, index) => (
          <NavLink key={link.to} to={link.to}>
            <span className="ml-2 text-base">{link.name}</span>
          </NavLink>
        ))}
      </ul>
    </header>
  );
}

function NavLink({
  to,
  children,
}: Omit<Parameters<typeof Link>['0'], 'to'> & { to: string }) {
  const location = useLocation();
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`${to}/`);
  return (
    <Link
      prefetch="intent"
      className={clsx(
        'block whitespace-nowrap text-lg font-medium hover:text-white focus:text-white focus:outline-none font-mono',
        {
          'active text-white': isSelected,
          'text-green-500': !isSelected,
        }
      )}
      to={to}
    >
      {children}
    </Link>
  );
}
