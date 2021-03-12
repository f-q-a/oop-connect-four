export class RowWinInspector {
    constructor (columns) {
        this.columns = columns; // [[col1(1,2,1,2,2,1,2)][col2(2,1,2,1,2,2,2)]]
    }

    inspect() {
        let [first, second, third, fourth] = this.columns
        for (let i = 0; i < this.columns.length; i++) {
            if (first[i] === second[i] && second[i] === third[i] && third[i] === fourth[i]) {
                return first[i]
            } else {
                return 0
            }
        }
    }
}