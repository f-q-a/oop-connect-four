export class RowWinInspector {
    constructor (columns) {
        this.columns = columns; // [[col1(1,2,1,2,2,1,2)][col2(2,1,2,1,2,2,2)]]
    }

    inspect() {
        let [first, second, third, fourth] = this.columns;

        for (let i = 0; i < 6 ; i++) {

            let checkFirst = first.getTokenAt(i);

            let checkSecond = second.getTokenAt(i);

            let checkThird = third.getTokenAt(i);

            let checkFourth = fourth.getTokenAt(i);

            if (checkFirst === checkSecond && checkSecond === checkThird && checkThird === checkFourth && checkFirst!== null) {
                return checkFirst;
            }
        }
        return 0;
    }
}
