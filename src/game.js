class Game {
    currentScore;

    constructor() {
        this.currentScore = 0;
    }

    roll(pins) {
        this.currentScore += pins;
    }
}

module.exports = Game;