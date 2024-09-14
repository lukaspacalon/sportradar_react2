import React from 'react';

const MatchList = ({ matches, onUpdateScore, onFinishMatch }) => {
  return (
    <div>
      <h2>Live Matches</h2>
      {matches.map((match, index) => (
        <div key={index}>
          <span>{match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}</span>
          <input
            type="number"
            placeholder="Home Score"
            onChange={(e) => onUpdateScore(index, e.target.value, match.awayScore)}
          />
          <input
            type="number"
            placeholder="Away Score"
            onChange={(e) => onUpdateScore(index, match.homeScore, e.target.value)}
          />
          <button onClick={() => onFinishMatch(index)}>Finish Match</button>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
