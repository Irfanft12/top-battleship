import gameboard from "../factories/gameboard.js";

test("received attack", () => {
    const board = gameboard();
    board.placeShip([0, 3], 2);
    expect(board.receiveAttack([0, 3])).toBe(true);
});
test("multiple ship position", () => {
    const board = gameboard();
    board.placeShip([0, 0], 3);
    board.placeShip([0, 4], 4);
    expect(board.receiveAttack([0, 0])).toBe(true);
});
test("two ships of same length", () => {
    const board = gameboard();
    board.placeShip([0, 0], 3);
    board.placeShip([0, 4], 3);
    expect(board.shipsWithPositions.length).toBe(2);
});
test("calculate next coordinates", () => {
    const board = gameboard();
    board.placeShip([0, 0], 3);
    expect(board.shipsWithPositions[0].shipCoordinates.length).toBe(3);
});
test("calculate next coordinates' direction", () => {
    const board = gameboard();
    board.placeShip([0, 0], 3, "y");
    expect(board.shipsWithPositions[0].shipCoordinates[2]).toEqual([0, 2]);
});
test("determine the attacked ship", () => {
    const board = gameboard();
    board.placeShip([0, 0], 3);
    board.receiveAttack([2, 0]);
    expect(board.shipsWithPositions[0].myShip.timesHit()).toBe(1);
});
test("keep record of missed shots", () => {
    const board = gameboard();
    board.placeShip([0, 0], 3);
    board.receiveAttack([3, 3]);
    expect(board.missingShots[0]).toEqual([3, 3]);
});
test("all ships sunk", () => {
    const board = gameboard();
    board.placeShip([0, 0], 1);
    board.placeShip([1, 0], 1);
    board.receiveAttack([0, 0]);
    expect(board.allShipsSunk()).toBe(false);
    board.receiveAttack([1, 0]);
    expect(board.allShipsSunk()).toBe(true);
});