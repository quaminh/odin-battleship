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

  placeShip(x, y, size, isHorizontal = true) {
    if (x < 0 || x >= this.#boardLength || y < 0 || y >= this.#boardLength)
      return false;
    if (isHorizontal) {
      if (y + size - 1 >= this.#boardLength) return false;
      for (let i = 0; i < size; i++) {
        if (this.board[x][y + i].ship) return false;
      }
      const ship = new Ship(size);
      this.ships.push(ship);
      for (let i = 0; i < size; i++) {
        this.board[x][y + i].ship = ship;
      }
    } else {
      if (x + size - 1 >= this.#boardLength) return false;
      for (let i = 0; i < size; i++) {
        if (this.board[x + i][y].ship) return false;
      }
      const ship = new Ship(size);
      this.ships.push(ship);
      for (let i = 0; i < size; i++) {
        this.board[x + i][y].ship = ship;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    const tile = this.board[x][y];
    if (tile.attacked) return false;
    tile.attacked = true;
    if (tile.ship) tile.ship.hit();
    return true;
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].isSunk()) return false;
    }
    return true;
  }
}

class Tile {
  ship = null;
  attacked = false;
}
