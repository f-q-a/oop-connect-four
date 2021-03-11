
export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = this.playerOne;
    }

    getName () {
        return `${this.nameOne} vs ${this.nameTwo}`;
    }

    playInColumn () {
        if (this.currPlayer === this.playerOne) {
            this.currPlayer = this.playerTwo;
        } else  {
            this.currPlayer = this.playerOne;
        }
    }

    
}
