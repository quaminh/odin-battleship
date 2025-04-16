import Gameboard from "./gameboard";

test('create gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board.length).toBe(10);
  expect(gameboard.board[0].length).toBe(10);
  expect(gameboard.board[0][0].ship).toBeNull();
});

// test('place ship horizontal', () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(0, 0, 3, true);
//   expect(gameboard.board[0][0].ship).not.toBeNull();
//   expect(gameboard.board[0][1].ship).not.toBeNull();
//   expect(gameboard.board[0][2].ship).not.toBeNull();
// });

// test('place ship vertical', () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(0, 0, 3, false);
//   expect(gameboard.board[0][0].ship).not.toBeNull();
//   expect(gameboard.board[1][0].ship).not.toBeNull();
//   expect(gameboard.board[2][0].ship).not.toBeNull();
// });

// test('prevent placing ship on top of another ship', () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(5, 5, 3, true);
//   expect(gameboard.placeShip(5, 5, 2, true)).toBe(false);
//   expect(gameboard.placeShip(5, 7, 2, true)).toBe(false);
//   expect(gameboard.placeShip(4, 5, 2, true)).toBe(false);
// });

// test('prevent placing ship out of bounds', () => {
//   const gameboard = new Gameboard();
//   expect(gameboard.placeShip(10, 0, 2, true)).toBe(false);
//   expect(gameboard.placeShip(0, 10, 2, true)).toBe(false);
// });

// test('prevent placing ship that would extend out of bounds', () => {
//   const gameboard = new Gameboard();
//   expect(gameboard.placeShip(9, 9, 2, true)).toBe(false);
//   expect(gameboard.placeShip(9, 9, 2, false)).toBe(false);
//   expect(gameboard.board[9][9].ship).toBeNull();
// });

// test('receive attack and hit', () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(0, 0, 2, false);
//   expect(gameboard.receiveAttack(0, 0)).toBe(true);
//   expect(gameboard.receiveAttack(1, 0)).toBe(true);
//   expect(gameboard.board[0][0].ship.hitCount).toBe(2);
// });

// test('receive attack and miss', () => {
//   const gameboard = new Gameboard();
//   expect(gameboard.receiveAttack(0, 0)).toBe(false);
// });

// test('check all ships sunk with one ship', () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(0, 0, 2, true);
//   gameboard.receiveAttack(0, 0);
//   gameboard.receiveAttack(0, 1);
//   expect(gameboard.allShipsSunk()).toBe(true);
// });

// test ('check all ships sunk with multiple ships', () => {
//   const gameboard = new Gameboard();
//   gameboard.placeShip(0, 0, 2, true);
//   gameboard.placeShip(1, 0, 2, true);
//   gameboard.placeShip(2, 0, 2, false);
//   gameboard.receiveAttack(0, 0);
//   gameboard.receiveAttack(0, 1);
//   gameboard.receiveAttack(1, 0);
//   gameboard.receiveAttack(1, 1);
//   gameboard.receiveAttack(2, 0);
//   gameboard.receiveAttack(3, 0);
//   expect(gameboard.allShipsSunk()).toBe(true);
// });