import TicTacToe from "./ticTacToe.js";

const message = document.querySelector("#end-game-message");
const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const resetButton = message.firstElementChild.firstElementChild.nextElementSibling;

console.log(resetButton);

const game = new TicTacToe(board, cells, message);
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    game.cellClick(cell);
  });
});

resetButton.addEventListener("click", () => {
  game.clearBoard();
  game.message.classList.toggle("visible");
});
