class Frame  {
    rolls;
    spare;
    strike;

    constructor() {
        this.rolls = [];
        this.spare = false;
        this.strike = false;
    }

    update(pins) {
        return this.rolls.push(pins);
    }

    isCompleted() {
        return this.rolls.length === 2;
    }
}

module.exports = Frame