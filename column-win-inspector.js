export class ColumnWinInspector {
    constructor(column) {
        this.column = column;

    }
    inspect() {
        for (let i = 0; i <= 2; i++) {
            let tokenOne = this.column.getTokenAt(i);

            let tokenTwo = this.column.getTokenAt(i + 1);

            let tokenThree = this.column.getTokenAt(i + 2);

            let tokenFour = this.column.getTokenAt(i + 3);


            if (tokenOne === tokenTwo && tokenTwo === tokenThree && tokenThree === tokenFour && tokenFour !== null) {

                return tokenOne;
            }
        }
        return 0;
    }

}
