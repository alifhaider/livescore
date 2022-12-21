import type { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

export function Layout({ children }: TProps) {
  return (
    <div className="px-2 py-4 border-solid border-1 border-zinc-400">
      {children}
    </div>
  );
}
