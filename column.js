

export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }

    add(currPlayer) {
        for (let index = 5; index >= 0; index -= 1) {
            if (this.tokens[index] === null) {
                this.tokens[index] = currPlayer
                break;
            }
        }
    }

    getTokenAt(row) {
        if (this.tokens[row] === null) {
            return null;
        } else {
            return this.tokens[row]
        }
    }

    isFull() {
        if (!this.tokens.includes(null)) {
            return true;
        } else {
            return false;
        }
    }
}
