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
        if(pins === 10) {
            this.strike = true;
            return this.rolls = [10, 0];
        }
        this.rolls.push(pins)
        if (this.rolls[0] + this.rolls[1] === 10) {
            this.spare = true
        }
    }

    isCompleted() {
        return this.rolls.length === 2;
    }
}

module.exports = Frame