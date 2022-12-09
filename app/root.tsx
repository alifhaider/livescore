import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Header } from "./components/header";
import { Category } from "./components/category";
import { SearchBar } from "./components/searchbar";
import { News } from "./components/news";
import { Layout } from "./components/layout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "LiveScore",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  console.log(styles);
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-800 max-w-7xl mx-auto">
        <Header />
        <Category />
        <div className="flex gap-4">
          <SearchBar />
          <Outlet />
          <News />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
