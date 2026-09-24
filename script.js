const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    return {
        getBoard: () => board,
        resetBoard: () => board = ["", "", "", "", "", "", "", "", ""]
    }
})();

function createPlayer(name, marker) {
    return { name, marker }
}

const player1 = createPlayer("player1", "X");
const player2 = createPlayer("player2", "0")

(function GameController(player1Name, player2Name) {

})();

console.log(player1.name, player1.marker)