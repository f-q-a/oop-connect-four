export class ColumnWinInspector{
    constructor(column){
        this.column = column;

    }
    inspect(){
        for(let i = 0; i < this.column.length - 4; i++){
            let tokenOne = this.column[i];
            let tokenTwo = this.column[i + 1];
            let tokenThree = this.column[i + 2];
            let tokenFour = this.column[i + 3];

            if(tokenOne === tokenTwo && tokenTwo === tokenThree && tokenThree === tokenFour){
                return tokenOne;
            }else{
                return 0;
            }
        }
    }
}
