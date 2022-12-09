import { Match } from "~/components/match";
import { getDateList, stringifiedDay, stringifiedMonth } from "~/utils/helper";

import { TMatch } from "~/utils/types";

const MATCHES: TMatch[] = [
  { teams: ["Brazil", "Croatia"], time: "02:00", score: [0, 0] },
  { teams: ["Argentina", "Nederlands"], time: "1:00", score: [0, 0] },
];

function CalenderTab() {
  const date = new Date();
  const dateList: Array<Date> = getDateList(date);

  return (
    <div className="px-2 flex items-center justify-around gap-4">
      <p>Live</p>
      {dateList.map((dateStr) => {
        const month = dateStr.toLocaleString("default", { month: "short" });
        const day = dateStr.toLocaleString("default", { weekday: "short" });
        const date = dateStr.toLocaleString("default", { day: "numeric" });
        let displayDay = day;
        if (dateStr.toDateString() === new Date().toDateString()) {
          displayDay = "Today";
        }
        return (
          <>
            <div className="flex flex-col items-center">
              <p className="text-sm">{displayDay}</p>
              <div className="flex gap-1 text-xs">
                <p>{date}</p>
                <p>{month}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default function Index() {
  return (
    <div className="flex flex-col gap-2 flex-auto w-64 border-2 border-solid border-zinc-500 rounded-lg px-1 py-2">
      <CalenderTab />
      {MATCHES.map((match) => (
        <Match teams={match.teams} time={match.time} score={match.score} />
      ))}
    </div>
  );
}
