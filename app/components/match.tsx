import React from 'react';
import type { TMatch, TMatchProps } from '~/utils/types';

export function MatchFeed({ matches }: TMatchProps) {
  const sortedMatches = matches.sort((a, b) => {
    const aTime = new Date(a.time);
    const bTime = new Date(b.time);
    return aTime.getTime() - bTime.getTime();
  });

  const matchesByTournament: { [key: string]: { [key: string]: TMatch[] } } =
    {};
  sortedMatches.forEach((match) => {
    if (!matchesByTournament[match.tournamentName]) {
      matchesByTournament[match.tournamentName] = {};
    }
    if (!matchesByTournament[match.tournamentName][match.roundName]) {
      matchesByTournament[match.tournamentName][match.roundName] = [];
    }
    matchesByTournament[match.tournamentName][match.roundName].push(match);
  });

  return (
    <ul className="flex flex-col gap-2">
      {Object.keys(matchesByTournament).map((tournamentName, index) => (
        <div
          key={index}
          className="flex p-1 flex-col gap-1 bg-zinc-700/10 border-zinc-700"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-xs text-slate-400">{tournamentName}</h1>
            <p>{'➡️'}</p>
          </div>
          {Object.keys(matchesByTournament[tournamentName]).map((roundName) => (
            <>
              <h3 className="text-sm text-slate-300 font-medium">
                {roundName}
              </h3>
              <ul className="flex flex-col gap-2">
                {matchesByTournament[tournamentName][roundName].map(
                  (match, index) => {
                    const { time, teams, score } = match;

                    const localTime = time.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    });
                    return (
                      <li
                        key={index}
                        className="group flex justify-between bg-zinc-700  hover:shadow-sm  gap-2 rounded-md p-2 cursor-pointer hover:bg-zinc-600"
                      >
                        <div className="flex items-center gap-2">
                          <p className="flex-none  p-2 text-xs w-16  text-zinc-400 group-hover:text-zinc-300">
                            {localTime}
                          </p>
                          <p className="text-sm leading-5 text-center text-zinc-300 group-hover:text-zinc-200">
                            {teams[0]}
                            <br />
                            {teams[1]}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="leading-5 text-zinc-400 group-hover:text-zinc-300 text-xs">
                            {score[0].toString()}
                            <br />
                            {score[1].toString()}
                          </p>
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
            </>
          ))}
        </div>
      ))}
    </ul>
  );
}

function App() {
  return <div></div>;
}

export default App;
