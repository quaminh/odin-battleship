export default class Ship {
  hitCount = 0;

  constructor(length) {
    if (length < 2) this.length = 2;
    else if (length > 5) this.length = 5;
    else this.length = length;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount >= this.length;
  }
}
