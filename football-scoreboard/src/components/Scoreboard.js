import React, { useState, useEffect } from 'react';
import MatchForm from './MatchForm';
import MatchList from './MatchList';
import { ScoreboardStore } from '../store/ScoreboardStore';

const Scoreboard = () => {
  const [store] = useState(() => new ScoreboardStore());
  const [matches, setMatches] = useState([]);

  // Sync the live matches with the store's data
  const refreshMatches = () => {
    setMatches(store.getLiveSummary());
  };

  const addMatch = (homeTeam, awayTeam) => {
    store.addMatch(homeTeam, awayTeam);
    refreshMatches();
  };

  const updateScore = (index, homeScore, awayScore) => {
    store.updateScore(index, homeScore, awayScore);
    refreshMatches();
  };

  const finishMatch = (index) => {
    store.finishMatch(index);
    refreshMatches();
  };

  useEffect(() => {
    refreshMatches();
  }, []);

  return (
    <div>
      <MatchForm onAddMatch={addMatch} />
      <MatchList matches={matches} onUpdateScore={updateScore} onFinishMatch={finishMatch} />
    </div>
  );
};

export default Scoreboard;
