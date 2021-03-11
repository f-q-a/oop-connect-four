import Game  from './game.js'

let game = undefined;

function updateUi(){
    if(game === undefined){
        document.getElementById(`board-holder`).classList.add(`is-invisible`);
    }else{
        document.getElementById(`board-holder`).classList.remove(`is-invisible`);
    }
}

window.addEventListener('DOMContentLoaded', () => {

    const playerOne = document.getElementById('player-1-name');
    const playerTwo = document.getElementById('player-2-name');


    document.getElementById('form-holder').addEventListener('keyup', () => {

        if (playerOne.value && playerTwo.value) {
            document.getElementById('new-game').disabled = false;
        } else {
            document.getElementById('new-game').disabled = true;
        }

    })
    document.getElementById(`new-game`).addEventListener(`click`, event => {
        game = new Game('', '');
        document.getElementById(`new-game`).disabled = true;
        updateUi();

    })




})
