import TicTacToe from "./ticTacToe.js";

const message = document.querySelector("#end-game-message");
const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

const a = message.firstElementChild.firstElementChild;
console.log(a);


const game = new TicTacToe(board, cells, message);
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    game.cellClick(cell);
  });
});
