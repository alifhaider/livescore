import React, { ReactNode } from "react";

export function Layout({children}) {
  return (
    <div className="px-2 py-4 border-solid border-1 border-zinc-400">
      {children}
    </div>
  )

}