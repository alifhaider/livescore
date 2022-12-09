import type { MetaFunction } from '@remix-run/node';
import styles from './styles/app.css';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Header } from './components/header';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Livescore App',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  console.log(styles);
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
