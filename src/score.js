class Score {
    score;

    constructor() {
        this.score = 0;
    }

    updateScore(history) {
        this.score += history.reduce((acc, frame) => {
            return acc + frame.rolls[0] + (frame.rolls[1] ?? 0);
        }, 0);
    }
}

module.exports = Score;
