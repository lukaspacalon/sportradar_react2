class ScoreboardStore {
    constructor() {
      this.matches = [];
    }
  
    // Start a new game with initial score 0 - 0
    addMatch(homeTeam, awayTeam) {
      const newMatch = {
        homeTeam,
        awayTeam,
        homeScore: 0,
        awayScore: 0,
        startTime: new Date(),
      };
      this.matches.push(newMatch);
    }
  
    // Update the score of a match by index
    updateScore(index, homeScore, awayScore) {
      if (this.matches[index]) {
        this.matches[index].homeScore = parseInt(homeScore, 10);
        this.matches[index].awayScore = parseInt(awayScore, 10);
      }
    }
  
    // Finish a match (remove it from the store) by index
    finishMatch(index) {
      if (this.matches[index]) {
        this.matches.splice(index, 1);
      }
    }
  
    // Get the sorted summary of matches
    getSummary() {
      return [...this.matches].sort((a, b) => {
        const totalScoreA = a.homeScore + a.awayScore;
        const totalScoreB = b.homeScore + b.awayScore;
        return totalScoreB - totalScoreA || b.startTime - a.startTime;
      });
    }
  }
  
  export default ScoreboardStore;
  