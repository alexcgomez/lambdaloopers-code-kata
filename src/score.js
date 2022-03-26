class Score {
    score;

    constructor() {
        this.score = 0;
    }

    updateScore(history) {
        this.score = history.reduce((acc, frame, index) => {
            if(history[index-1]?.strike) {
                acc += frame.rolls[0] + frame.rolls[1]
            }

            if(history[index-1]?.spare) {
                acc += frame.rolls[0]
            }
            return acc + frame.rolls[0] + frame.rolls[1];
        }, 0);
    }
}

module.exports = Score;
