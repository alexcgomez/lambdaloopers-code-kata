class Frame {
    rolls;
    spare;
    strike;

    constructor() {
        this.rolls = [];
        this.spare = false;
        this.strike = false;
    }

    update(pins) {
        this.rolls.push(pins)
        if (this.rolls.reduce((acc, roll) => acc + roll, 0) === 10) {
            this.spare = true
        }
    }

    isCompleted() {
        return this.rolls.length === 2;
    }
}

module.exports = Frame