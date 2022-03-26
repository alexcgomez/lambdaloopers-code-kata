class Game {
    currentScore;
    currentFrame;
    spare;

    constructor() {
        this.currentScore = 0;
        this.currentFrame = 1;
        this.spare = false;
    }

    roll(pins) {
        if (this.currentFrame === 2) {
            this.currentFrame = 1;
        } else {
            this.currentFrame += 1;
        }

        this.currentScore += pins;
    }

    score() {
        return this.currentScore;
    }
}

module.exports = Game;