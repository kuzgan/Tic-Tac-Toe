import TicTacToe from "./ticTacToe.js";

const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

const game = new TicTacToe(board, cells);
console.dir(cells);
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    game.cellClick(cell);
  });
});


