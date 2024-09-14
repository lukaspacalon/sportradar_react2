import { Match } from '../models/Match';

export class ScoreboardStore {
  constructor() {
    this.matches = [];
  }

  // Start a new game with initial score 0 - 0
  addMatch(homeTeam, awayTeam) {
    const newMatch = new Match(homeTeam, awayTeam);
    this.matches.push(newMatch);
  }

  // Update the score of a match by index
  updateScore(index, homeScore, awayScore) {
    const match = this.matches[index];
    if (match) {
      match.updateScore(homeScore, awayScore);
    }
  }

  // Finish a match (remove it from live matches)
  finishMatch(index) {
    if (this.matches[index]) {
      this.matches.splice(index, 1); // Remove the match from the list
    }
  }

  // Get the sorted summary of live matches by total score and start time
  getLiveSummary() {
    return [...this.matches].sort((a, b) => {
      const totalScoreA = a.getTotalScore();
      const totalScoreB = b.getTotalScore();
      return totalScoreB - totalScoreA || b.startTime - a.startTime;
    });
  }
}
