import React from 'react';

const MatchList = ({ matches, onFinishMatch }) => {
  return (
    <div>
      <h2>Live Matches</h2>
      {matches.map((match, index) => (
        <div key={index}>
          <span>{match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}</span>
          <button onClick={() => onFinishMatch(index)}>Finish Match</button>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
