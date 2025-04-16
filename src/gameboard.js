import Ship from "./ship";

export default class Gameboard {
  #boardLength = 10;
  ships = [];

  constructor() {
    this.generateBoard();
  }

  generateBoard() {
    this.board = [];
    for (let i = 0; i < this.#boardLength; i++) {
      const row = [];
      for (let j = 0; j < this.#boardLength; j++) {
        row.push(new Tile());
      }
      this.board.push(row);
    }
  }

  placeShip(x, y, size, isHorizontal = true) {}

  receiveAttack(x, y) {}

  allShipsSunk() {}
}

class Tile {
  ship = null;
  attacked = false;
}
