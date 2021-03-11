
export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = this.nameOne;
    }

    getName () {
        return `${this.nameOne} vs ${this.nameTwo}`;
    }

    playInColumn () {
        if (this.currPlayer === 1) {
            this.currPlayer = 2;
        } else  {
            this.currPlayer = 1;
        }
    }


}
