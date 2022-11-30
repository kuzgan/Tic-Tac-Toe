import TicTacToe from "./ticTacToe.js";

const message = document.querySelector("#text");
const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

const game = new TicTacToe(board, cells, message);
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    game.cellClick(cell);
  });
});
