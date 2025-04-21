export default class ScreenController {
  renderBoardOne(board) {
    this.#renderBoard(board, "One");
  }

  renderBoardTwo(board) {
    this.#renderBoard(board, "Two");
  }

  #renderBoard(board, boardNum) {
    const boardDiv = document.querySelector(`#gameboard${boardNum}`);
    boardDiv.innerText = '';
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const boardCell = document.createElement("button");
        boardCell.classList.add("cell");
        boardCell.dataset.x = i;
        boardCell.dataset.y = j;
        if (board[i][j].ship) {
          if (board[i][j].attacked) boardCell.classList.add("hit");
          else boardCell.classList.add("ship");
        } else {
          if (board[i][j].attacked) boardCell.classList.add("miss");
          else boardCell.classList.add("water");
        }
        boardDiv.appendChild(boardCell);
      }
    }
  }
}
