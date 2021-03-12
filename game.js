import {Column} from './column.js'

export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = this.nameOne;
        this.columns = [];
        this.winnerNum = 0;
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column());
        }


    }

    getName () {

        if (this.winnerNum === 3) {
            return `${this.nameOne} ties with ${this.nameTwo}`
        }

        return `${this.nameOne} vs ${this.nameTwo}`;
        
    }

    checkForTie() {
        if (this.columns.every(col => {
            col.isFull()
        })) {
          this.winnerNum = 3;
        }
        
    }

    playInColumn (index) {
        let currCol = this.columns[index];
        currCol.add(this.currPlayer)
        if (this.currPlayer === this.nameOne) {
            this.currPlayer = this.nameTwo;
        } else  {
            this.currPlayer = this.nameOne;
        }
       
        this.checkForTie()
    }


    getTokenAt(row, col){
        let currCol = this.columns[col];
        console.log(currCol);
        return currCol.getTokenAt(row)
    }

    isColumnFull(col) {
        return col.isFull()
    }

}
