export default class Ship {
  hitCount = 0;

  constructor(length = 2) {
    this.length = length;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount >= this.length;
  }
}