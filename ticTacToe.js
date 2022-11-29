export default class TicTacToe {
  winingConbinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  constructor(board, cells) {
    this.board = board;
    this.cell = cells;
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

  cellClick(targetedCell) {
    if (this.board.classList.contains("player-circle-turn"))
      targetedCell.classList.add("circle");
    if (this.board.classList.contains("player-x-turn"))
      targetedCell.classList.add("x");
    this.changeCurrentPlayer();
  }

  gameReset() {
    this.claerBoard();
    if (this.board.classList.contains("player-x-turn")) return;
    this.changeCurrentPlayer();
  }

  checkingForWinConditions(){
    
  }
}
