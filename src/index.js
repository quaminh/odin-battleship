import "./styles.css";
import Player from "./player";
import ScreenController from "./controller";

const controller = new ScreenController();
const playerOne = new Player("Player One");
const playerTwo = new Player("Player Two");

playerOne.gameboard.placeShip(5, 4, 4);
playerOne.gameboard.receiveAttack(5, 5);
playerOne.gameboard.receiveAttack(1, 1);
playerOne.gameboard.receiveAttack(6, 7);

controller.renderBoardOne(playerOne.gameboard.board);
controller.renderBoardTwo(playerTwo.gameboard.board);

function makeAttack(e) {
  let cell = e.target;
  if (!cell.classList.contains("cell")) return;
  const attackSuccess = playerTwo.gameboard.receiveAttack(
    cell.dataset.x,
    cell.dataset.y
  );
  if (attackSuccess) {
    playerOne.receiveComputerAttack();
    controller.renderBoardOne(playerOne.gameboard.board);
    controller.renderBoardTwo(playerTwo.gameboard.board);
  }
}
const boardDiv = document.querySelector("#gameboardTwo");
boardDiv.addEventListener("click", makeAttack);
