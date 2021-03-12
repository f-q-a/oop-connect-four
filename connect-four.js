import { Game } from './game.js'

let game = undefined;

function updateUi() {

    if (game === undefined) {
        document.getElementById(`board-holder`).classList.add(`is-invisible`);
    } else {

        document.getElementById(`board-holder`).classList.remove(`is-invisible`);
        
        const gameName = document.getElementById('game-name');
        gameName.innerHTML = game.getName();
        console.log(game.getName());

        if (game.currPlayer === game.nameTwo) {
            document.getElementById('click-targets').classList.add('red');
            document.getElementById('click-targets').classList.remove('black');
        } else {
            document.getElementById('click-targets').classList.add('black')
            document.getElementById('click-targets').classList.remove('red');
        }
        
    }


    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            const square = document.getElementById(`square-${i}-${j}`);
            square.innerHTML = " ";
            const playerNumber = game.getTokenAt(i, j);
            console.log(playerNumber);

            let thisCol = document.getElementById(`column-${j}`)
            if (game.isColumnFull(game.columns[j]) === true) {
                thisCol.classList.add('full');
            } else {
                thisCol.classList.remove('full');
            }

            if (playerNumber === game.nameOne) {
                const currToken = document.createElement(`div`);
                currToken.classList.add(`token`);
                currToken.classList.add(`black`);
                square.appendChild(currToken);
            } else if(playerNumber === game.nameTwo){
                const currToken = document.createElement(`div`);
                currToken.classList.add(`token`);
                currToken.classList.add(`red`);
                square.appendChild(currToken);
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {

    const playerOne = document.getElementById('player-1-name');
    const playerTwo = document.getElementById('player-2-name');

    function readyPlayer() {
        if (playerOne.value.length === 0 || playerTwo.value.length === 0) {
            document.getElementById('new-game').disabled = true;
        } else {
            document.getElementById('new-game').disabled = false;
        }
    }

    playerOne.addEventListener('keyup', () => {
        readyPlayer()
    })

    playerTwo.addEventListener('keyup', () => {
        readyPlayer()
    })

    document.getElementById(`new-game`).addEventListener(`click`, event => {
        game = new Game(playerOne.value, playerTwo.value);
        playerOne.value = ``;
        playerTwo.value = ``;
        document.getElementById(`new-game`).disabled = true;
        updateUi();

    })

    document.getElementById(`click-targets`).addEventListener(`click`, event => {
        let col = 0;
        if (!event.target.id.startsWith('column-')) {
            return
        } else {
            col = Number.parseInt(event.target.id[event.target.id.length - 1]);
        }

        game.playInColumn(col);

        updateUi();
    })


})
