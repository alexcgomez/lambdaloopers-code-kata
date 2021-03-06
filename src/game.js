const Score = require("./score");
const Frame = require("./frame");

class Game {
    currentScore;
    currentFrame;
    history;

    constructor() {
        this.currentScore = new Score();
        this.currentFrame = new Frame();
        this.history = [];
    }

    roll(pins) {
        this.currentFrame.update(pins);

        if (this.currentFrame.isCompleted()) {
            this.history.push(this.currentFrame);
            this.currentFrame = new Frame();
            this.currentScore.updateScore(this.history);
        }
    }

    score() {
        return this.currentScore.score;
    }
}

module.exports = Game;