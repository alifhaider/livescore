import { Match } from "~/components/match";

import { TMatch } from "~/utils/types";

const MATCHES:TMatch[] = [
  {teams: ['Brazil', 'Croatia'], time: '02:00', score: [0,0]},
  {teams: ['Argentina', 'Nederlands'], time:'1:00', score:[0,0]}
]

export default function Index() {
  return <div className="flex flex-col gap-2 flex-auto w-64 border-2 border-solid border-zinc-500 rounded-lg px-1 py-2">
    {MATCHES.map(match =>(
     <Match teams={match.teams} time={match.time} score={match.score} /> 
    ))}
  </div>;
}
