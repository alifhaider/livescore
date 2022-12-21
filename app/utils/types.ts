export interface TMatchProps {
  matches: TMatch[];
}

export interface TMatch {
  roundName: string;
  tournamentName: string;
  teams: string[];
  time: Date;
  score: Array<number>;
}
