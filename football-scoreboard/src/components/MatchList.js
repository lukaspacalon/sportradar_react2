import React from 'react';

const MatchList = ({ matches, onUpdateScore, onFinishMatch }) => {
  if (matches.length === 0) {
    return <div>No live matches.</div>;
  }

  return (
    <div>
      {matches.map((match, index) => (
        <div key={index}>
          <span>{match.getMatchSummary()}</span>
          <input
            type="number"
            placeholder="Home Score"
            value={match.homeScore}
            onChange={(e) => onUpdateScore(index, e.target.value, match.awayScore)}
          />
          <input
            type="number"
            placeholder="Away Score"
            value={match.awayScore}
            onChange={(e) => onUpdateScore(index, match.homeScore, e.target.value)}
          />
          <button onClick={() => onFinishMatch(index)}>Finish Match</button>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
