import type { ReactNode } from 'react';

<<<<<<< HEAD
type TProps = {
  children: ReactNode;
};

export function Layout({ children }: TProps) {
=======
export function Layout({ children }) {
>>>>>>> 3f2ca2b8ffb5a52e0a4b38f46ed040ee44d31cb1
  return (
    <div className="px-2 py-4 border-solid border-1 border-zinc-400">
      {children}
    </div>
  );
}
