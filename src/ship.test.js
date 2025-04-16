import Ship from "./ship";

test('create ship of size 4', () => {
  const ship = new Ship(4);
  expect(ship.length).toBe(4);
});

test('calling hit', () => {
  const ship = new Ship(4);
  ship.hit();
  expect(ship.hitCount).toBe(1);
});

test('check if sunk', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});