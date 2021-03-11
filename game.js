class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
    }

    getName () {
        return `${this.nameOne} vs ${this.nameTwo}`;
    }
}