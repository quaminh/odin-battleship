import './styles.css';
import Player from './player';
import ScreenController from './controller';

const controller = new ScreenController();
const player = new Player('Player One');

player.gameboard.placeShip(5, 4, 4);
player.gameboard.receiveAttack(5, 5);
player.gameboard.receiveAttack(1, 1);
player.gameboard.receiveAttack(6, 7);

controller.renderBoardOne(player.gameboard.board);
controller.renderBoardTwo(player.gameboard.board);

function makeAttack(e) {
  let cell = e.target;
  if (!cell.classList.contains('cell')) return;
  player.gameboard.receiveAttack(cell.dataset.x, cell.dataset.y);
  controller.renderBoardTwo(player.gameboard.board);
}
const boardDiv = document.querySelector('#gameboardTwo');
boardDiv.addEventListener('click', makeAttack);