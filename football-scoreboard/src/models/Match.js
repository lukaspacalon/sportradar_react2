export class Match {
    constructor(homeTeam, awayTeam) {
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.homeScore = 0;
      this.awayScore = 0;
      this.startTime = new Date();
    }
  
    // Update the scores for the match
    updateScore(homeScore, awayScore) {
      this.homeScore = parseInt(homeScore, 10);
      this.awayScore = parseInt(awayScore, 10);
    }
  
    // Calculate total score
    getTotalScore() {
      return this.homeScore + this.awayScore;
    }
  
    // Return formatted string of the match result
    getMatchSummary() {
      return `${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`;
    }
  }
  