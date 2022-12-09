import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';

const LINKS = [
  { name: 'Livescore', to: '/' },
  { name: 'Scores', to: '/scores' },
  { name: 'Favourites', to: '/favourites' },
  { name: 'News', to: '/news' },
];

export function Header() {
  return (
    <header className="bg-white shadow">
      <ul className="hidden lg:flex">
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
        'underlined block whitespace-nowrap text-lg font-medium hover:text-secondary focus:text-secondary focus:outline-none font-mono',
        {
          'active text-secondary': isSelected,
          'text-primary': !isSelected,
        }
      )}
      to={to}
    >
      {children}
    </Link>
  );
}
