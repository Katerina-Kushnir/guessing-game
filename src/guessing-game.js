class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.solution = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.solution = Math.ceil((this.min + this.max) / 2);
        return this.solution;
    }    

    lower() {
        this.max = this.solution;
    }

    greater() {
        this.min = this.solution;
    }
}

module.exports = GuessingGame;


