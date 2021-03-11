
export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = playerOne;
    }

    getName () {
        return `${this.nameOne} vs ${this.nameTwo}`;
    }

    playInColumn() {

    }
}
