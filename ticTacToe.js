export default class TicTacToe {
  constructor(board, cells, message) {
    this.board = board;
    this.cell = cells;
    this.message = message;
  }
  winingConbinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  cellClick(targetedCell) {
    if (
      this.board.classList.contains("player-circle-turn") &&
      !(
        targetedCell.classList.contains("x") ||
        targetedCell.classList.contains("circle")
      )
    ) {
      targetedCell.classList.add("circle");
    } else if (
      this.board.classList.contains("player-x-turn") &&
      !(
        targetedCell.classList.contains("x") ||
        targetedCell.classList.contains("circle")
      )
    ) {
      targetedCell.classList.add("x");
    } else {
      return;
    }
    if(this.checkForWinConditions()) this.gameEnds(false);
    if(this.draw()) this.gameEnds(true);

    this.changeCurrentPlayer();
  }

  changeCurrentPlayer() {
    if (this.board.classList.contains("player-circle-turn"))
      return this.board.classList.replace(
        "player-circle-turn",
        "player-x-turn"
      );
    if (this.board.classList.contains("player-x-turn"))
      this.board.classList.replace("player-x-turn", "player-circle-turn");
  }

  clearBoard() {
    this.cell.forEach((cell) => {
      if (!cell.classList.contains("x") && !cell.classList.contains("circle"))
        return;
      cell.classList.remove("x", "circle");
    });
  }

  gameReset() {
    this.claerBoard();
    if (this.board.classList.contains("player-x-turn")) return;
    this.changeCurrentPlayer();
  }

  checkForWinConditions() {
    let currentClass;
    if (this.board.classList.contains("player-x-turn")) currentClass = "x";
    if (this.board.classList.contains("player-circle-turn"))
      currentClass = "circle";
    return this.winingConbinations.some((element) => {
      return element.every((index) => {
        return this.cell[index].classList.contains(currentClass);
      });
    });
  }
  draw() {
    return [...this.cell].every((element) => {
      return (
        element.classList.contains("x") || element.classList.contains("circle")
      );
    });
  }

  gameEnds(draw) {
    if (draw) {
      console.log("draw");
      this.message.innerText = "It's a draw";
    } else {
      if (this.board.classList.contains("player-x-turn")) {
        console.log("x win");
        this.message.innerText = "X win";
      }
      if (this.board.classList.contains("player-circle-turn")) {
        console.log("circle win");
        this.message.innerText = "Circle win";
      }
    }
  }
}
