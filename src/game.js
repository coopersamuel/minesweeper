/* eslint-disable no-console, no-unused-vars, capitalized-comments */

/* 
To play Minesweeper, we will create instances of MineSweeperGame in command line.
For example:
In the command line, navigate to the lib directory and run `node`
Run `.load game.js` to load the contents of this file.
Then create a Game instance and run commands like so:
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
When done run `.exit`
*/

import {Board} from './board';
const colors = require('colors'); // colors package does not support ES6 export

class Game {
    constructor (numberOfRows, numberOfColumns, numberOfBombs) {        
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);

        console.log('Current Board:');
        this._board.print();
    }

    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);

        /* eslint-disable */
        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log(colors.red('BLAM! You found a mine. Game over.\n'));

            // Shows the bombs for the final print
            this._board.showBombs();
            this._board.print();
        } else if (!this._board.hasSafeTiles()) {
            console.log(colors.blue('Well done, you\'ve cleared all of the safe tiles. You win!\n'));

            // Shows all flags for final print
            this._board.showFlags();
            this._board.print();
        } else {
            console.log('Current Board:');
            this._board.print();
        }
        /* eslint-enable */
    }

    flagTile(rowIndex, columnIndex) {
        this._board.setFlag(rowIndex,columnIndex);
        console.log('Current Board:');
        this._board.print();
    }
}

