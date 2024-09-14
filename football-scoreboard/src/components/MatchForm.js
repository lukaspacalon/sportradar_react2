import React, { useState } from 'react';

const MatchForm = ({ onAddMatch, onUpdateScore }) => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const handleAddMatch = () => {
    onAddMatch(homeTeam, awayTeam);
    setHomeTeam('');
    setAwayTeam('');
  };

  const handleUpdateScore = () => {
    onUpdateScore(homeScore, awayScore);
    setHomeScore('');
    setAwayScore('');
  };

  return (
    <div>
      <h2>Add New Match</h2>
      <input
        type="text"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
        placeholder="Home Team"
      />
      <input
        type="text"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
        placeholder="Away Team"
      />
      <button onClick={handleAddMatch}>Add Match</button>

      <h2>Update Score</h2>
      <input
        type="number"
        value={homeScore}
        onChange={(e) => setHomeScore(e.target.value)}
        placeholder="Home Score"
      />
      <input
        type="number"
        value={awayScore}
        onChange={(e) => setAwayScore(e.target.value)}
        placeholder="Away Score"
      />
      <button onClick={handleUpdateScore}>Update Score</button>
    </div>
  );
};

export default MatchForm;
