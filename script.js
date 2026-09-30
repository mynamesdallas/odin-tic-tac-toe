const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    return {
        getBoard: () => board,
        resetBoard: () => board = ["", "", "", "", "", "", "", "", ""]
    }
})();

const  createPlayer = (name, marker) => ({ name: name, marker: marker });

const player1 = new createPlayer("player1", "X");
const player2 = new createPlayer("player2", "0")

(function GameController(player1Name, player2Name) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
});

console.log(player1.name, player1.marker)
console.log(player2.name, player2.marker)