import { Game }  from './game.js'

let game = undefined;

function updateUi(){
    if(game === undefined){
        document.getElementById(`board-holder`).classList.add(`is-invisible`);
    }else{
        document.getElementById(`board-holder`).classList.remove(`is-invisible`);
        console.log(game.currPlayer)
        if (game.currPlayer === game.playerTwo) {
            document.getElementById('click-targets').classList.add('red');
            document.getElementById('click-targets').classList.remove('black');
        } else {
            document.getElementById('click-targets').classList.add('black')
            document.getElementById('click-targets').classList.remove('red');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {

    const playerOne = document.getElementById('player-1-name');
    const playerTwo = document.getElementById('player-2-name');

    function readyPlayer () {
        if (playerOne.value.length === 0 || playerTwo.value.length === 0) {
            document.getElementById('new-game').disabled = true;
        } else {
            document.getElementById('new-game').disabled = false; 
        }
    }

    playerOne.addEventListener('keyup', () => {
        readyPlayer()
    })

    playerOne.addEventListener('keyup', () => {
        readyPlayer()
    })

    document.getElementById(`new-game`).addEventListener(`click`, event => {
        game = new Game('', '');
        document.getElementById(`new-game`).disabled = true;
        updateUi();

    })

    document.getElementById(`click-targets`).addEventListener(`click`, event => {
        game.playInColumn();
        updateUi();
    })


})
