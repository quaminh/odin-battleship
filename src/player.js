import Gameboard from './gameboard';

export default class Player {
  gameboard = new Gameboard();
  
  constructor(name) {
    this.name = name;
  }

  receiveComputerAttack() {
    let attacking = true;
    while (attacking) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      if (this.gameboard.board[x][y].attacked === false) {
        this.gameboard.receiveAttack(x, y);
        attacking = false;
      } 
    }
  }
}