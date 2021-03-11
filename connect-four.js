import { Game } from './game.js'

let game = undefined;

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

    

    

})