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

        
        this.columns.forEach(function(el){
            let newWinColumn = new ColumnWinInspector(el);

            this.winnerNum = newWinColumn.inspect();
            if (this.winnerNum > 0) {
                return;
            }
        })
    }

    checkForRowWin() {
        if(this.winnerNum !== 0){
            return;
        }
        
        let first = this.columns.slice(0, 3);
        let second = this.columns.slice(1, 4);
        let third = this.columns.slice(2, 5);
        let fourth = this.columns.slice(3, 6);
        let winArray = [first, second, third, fourth]

        winArray.forEach(function(row){
            let newWinRow = new RowWinInspector(row);
            this.winnerNum = newWinRow.inspect();
            if (this.winnerNum > 0) {
                return;
            }
        })
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
        console.log(currCol);
        return currCol.getTokenAt(row)
    }

    isColumnFull(col) {
        if (this.winnerNum === this.nameOne || this.winnerNum === this.nameTwo) {
            return true;
        }
        return col.isFull()
    }

}
