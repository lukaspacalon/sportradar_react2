import React, { useState } from 'react';
import MatchForm from './MatchForm';
import MatchList from './MatchList';

const Scoreboard = () => {
  const [matches, setMatches] = useState([]);

  const addMatch = (homeTeam, awayTeam) => {
    setMatches([
      ...matches,
      {
        homeTeam,
        awayTeam,
        homeScore: 0,
        awayScore: 0,
        startTime: new Date(),
      },
    ]);
  };

  const updateScore = (homeScore, awayScore) => {
    setMatches(matches.map((match, index) => ({
      ...match,
      homeScore: parseInt(homeScore, 10) || match.homeScore,
      awayScore: parseInt(awayScore, 10) || match.awayScore,
    })));
  };

  const finishMatch = (index) => {
    setMatches(matches.filter((_, i) => i !== index));
  };

  const sortedMatches = [...matches].sort((a, b) => {
    const totalScoreA = a.homeScore + a.awayScore;
    const totalScoreB = b.homeScore + b.awayScore;
    return totalScoreB - totalScoreA || b.startTime - a.startTime;
  });

  return (
    <div>
      <MatchForm onAddMatch={addMatch} onUpdateScore={updateScore} />
      <MatchList matches={sortedMatches} onFinishMatch={finishMatch} />
    </div>
  );
};

export default Scoreboard;
