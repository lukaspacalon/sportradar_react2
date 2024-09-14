import ScoreboardStore from './ScoreboardStore';

test('should add a new match to the store', () => {
  const store = new ScoreboardStore();
  store.addMatch('Mexico', 'Canada');
  const summary = store.getSummary();

  expect(summary.length).toBe(1);
  expect(summary[0].homeTeam).toBe('Mexico');
  expect(summary[0].awayTeam).toBe('Canada');
});

test('should update the score of a match', () => {
  const store = new ScoreboardStore();
  store.addMatch('Mexico', 'Canada');
  store.updateScore(0, 2, 3);

  const summary = store.getSummary();
  expect(summary[0].homeScore).toBe(2);
  expect(summary[0].awayScore).toBe(3);
});

test('should finish (remove) a match from the store', () => {
  const store = new ScoreboardStore();
  store.addMatch('Mexico', 'Canada');
  store.finishMatch(0);

  const summary = store.getSummary();
  expect(summary.length).toBe(0);
});
