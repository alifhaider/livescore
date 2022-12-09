import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";

const CATEGORIES = [
  { name: "Football", to: "/" },
  { name: "Hockey", to: "/hockey" },
  { name: "Cricket", to: "/cricket" },
  { name: "Basketball", to: "/basketball" },
  { name: "Tennis", to: "/tennis" },
];

function TabLink({
  to,
  children,
}: Omit<Parameters<typeof Link>["0"], "to"> & { to: string }) {
  const location = useLocation();
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`${to}/`);
  return (
    <Link
      prefetch="intent"
      className={clsx(
        "px-3 py-1 capitalize font-semibold text-sm bg-white border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-zinc-500 bg-slate-700 border-transparent",
        {
          "active text-white": isSelected,
          "text-green-500": !isSelected,
        }
      )}
      to={to}
    >
      {children}
    </Link>
  );
}

export function Category() {
  return (
    <div className="my-8 flex gap-4">
      {CATEGORIES.map((link, index) => (
        <TabLink key={link.to} to={link.to}>
          <p>{link.name}</p>
        </TabLink>
      ))}
    </div>
  );
}
