const VOID = "0";
const NOUGHT = "1";
const CROSS = "2";

class Cell {
    constructor(element) {
        this.state = VOID;
        this.element = element;
    }

    capture(turn) {
        this.state = turn;

        switch (turn) {
            case NOUGHT: 
                this.element.classList.add("cell--nought");
                break;
            case CROSS: this.element.classList.add("cell--cross");
                break;
        }
    }
}

class Game {
    constructor() {
        
    }

    init() {
        
    }
}

const game = new Game();