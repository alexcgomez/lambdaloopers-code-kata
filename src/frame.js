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
        if (this.rolls.length > 1 && this.rolls.reduce((acc, roll) => acc + roll, 0) === 10) {
            this.spare = true
        }
        this.rolls.push(pins)
    }

    isCompleted() {
        return this.rolls.length === 2;
    }
}

module.exports = Frame