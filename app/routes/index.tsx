import { MatchFeed } from '~/components/match';

const MATCHES = [
  {
    roundName: 'Semi-Final',
    tournamentName: 'World Cup 2022',
    teams: ['Team A', 'Team B'],
    time: new Date(Date.now()),
    score: [0, 0],
  },
  {
    roundName: 'Semi-Final',
    tournamentName: 'World Cup 2022',
    teams: ['Team C', 'Team D'],
    time: new Date(Date.now() + 3 * 60 * 1000),
    score: [0, 0],
  },
  {
    roundName: 'Group Match',
    tournamentName: 'Premier League',
    teams: ['Team AB', 'Team CD'],
    time: new Date(Date.now() + 4 * 24 * 60 * 34 * 1000),
    score: [0, 0],
  },
  {
    roundName: 'Final',
    tournamentName: 'World Cup 2022',
    teams: ['Team C', 'Team B'],
    time: new Date('December 18, 2022 09:00:00'),
    score: [0, 0],
  },
  {
    roundName: '3rd Place',
    tournamentName: 'World Cup 2022',
    teams: ['Team A', 'Team D'],
    time: new Date('December 17, 2022 09:00:00'),
    score: [0, 0],
  },
];

export default function Index() {
  return (
    <div className="flex flex-col gap-2 flex-auto w-64 border-2 border-solid border-zinc-500 rounded-lg px-1 py-2">
      <MatchFeed matches={MATCHES} />
    </div>
  );
}
