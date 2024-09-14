import React, { useState } from 'react';

const MatchForm = ({ onAddMatch }) => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const handleAddMatch = () => {
    if (homeTeam && awayTeam) {
      onAddMatch(homeTeam, awayTeam);
      setHomeTeam('');
      setAwayTeam('');
    }
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
    </div>
  );
};

export default MatchForm;
