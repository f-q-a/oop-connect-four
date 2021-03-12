import {Column} from './column.js'
import {ColumnWinInspector} from './column-win-inspector.js'
import {RowWinInspector} from './row-win-inspector.js'

export class Game {
    constructor (playerOne, playerTwo) {
        this.nameOne = playerOne;
        this.nameTwo = playerTwo;
        this.currPlayer = this.nameOne;
        this.columns = [];
        this.winnerNum = 0;
        this.winnerNum;
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column());
        }



    }
    checkForTie() {
        if (this.columns.every(col => col.isFull())) {
          this.winnerNum = 3;
        }

    }


    getName () {

        if (this.winnerNum === 3) {
            return `${this.nameOne} ties with ${this.nameTwo}`
        }
        if (this.winnerNum === this.nameTwo) {
            return `${this.nameTwo} wins!`
        }
        if (this.winnerNum === this.nameOne) {
            return `${this.nameOne} wins`
        }

        return `${this.nameOne} vs ${this.nameTwo}`;

    }


    checkForColumnWin(){
        if(this.winnerNum !== 0){
            return;
        }
        for(let i = 0; i < this.columns.length; i++){
            const col = this.columns[i];
            const currCol = new ColumnWinInspector(col);
            const winnerNumber = currCol.inspect();
            if(winnerNumber == this.nameOne || winnerNumber == this.nameTwo){
                this.winnerNum = winnerNumber;
                break;
            }
        }
    }

    checkForRowWin() {
        if(this.winnerNum !== 0){
            return;
        }

        let first = this.columns.slice(0, 4);
        let second = this.columns.slice(1, 5);
        let third = this.columns.slice(2, 6);
        let fourth = this.columns.slice(3, 7);
        let winArray = [first, second, third, fourth]

        for(let i = 0; i < winArray.length; i++){
            const row = winArray[i];
            const currRow = new RowWinInspector(row);

            const winnerNumber = currRow.inspect();
            console.log(winnerNumber);
            if(winnerNumber == this.nameOne || winnerNumber == this.nameTwo){
                this.winnerNum = winnerNumber;
                console.log(this.winnerNum);
                break;
            }
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

        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();

    }


    getTokenAt(row, col){
        let currCol = this.columns[col];
        return currCol.getTokenAt(row)
    }

    isColumnFull(col) {
        if (this.winnerNum === this.nameOne || this.winnerNum === this.nameTwo) {
            return true;
        }
        return col.isFull()
    }

}
