import {Column} from './column.js'

export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = this.nameOne;
        this.columns = [];
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column().col);
        }


    }

    getName () {
        return `${this.nameOne} vs ${this.nameTwo}`;
    }

    playInColumn (index) {
        let currCol = this.columns[index];
        currCol.add(this.currPlayer)
        if (this.currPlayer === this.nameOne) {
            this.currPlayer = this.nameTwo;
        } else  {
            this.currPlayer = this.nameOne;
        }
    }

    getTokenAt(row, col){
        let currCol = this.columns[col]
    }


}
