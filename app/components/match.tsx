import { TMatch } from "~/utils/types";

export function Match({ teams, time, score }: TMatch) {
  return (
    <div className="flex gap-2 items-center bg-zinc-700 rounded-md">
      <p className="flex-none p-4 w-16">{time}</p>
      <div className="flex-auto w-32">
        <ul>
          <li>{teams[0]}</li>
          <li>{teams[1]}</li>
        </ul>
      </div>
      <div className="flex-none w-4">F</div>
    </div>
  );
}
