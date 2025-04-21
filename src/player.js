import Gameboard from './gameboard';

export default class Player {
  gameboard = new Gameboard();
  
  constructor(name) {
    this.name = name;
  }
}