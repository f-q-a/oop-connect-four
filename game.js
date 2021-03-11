

export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = this.nameOne;
        this.columns = []
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column())
        }
        
    }

    getName () {
        return `${this.nameOne} vs ${this.nameTwo}`;
    }

    playInColumn () {
        if (this.currPlayer === this.nameOne) {
            add(this.currPlayer);
            this.currPlayer = this.nameTwo;
        } else  {
            add(this.currPlayer);
            this.currPlayer = this.nameOne;
        }
    }

    getTokenAt(row, col){

    }


}
