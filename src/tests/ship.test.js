import ship from "../factories/ship";

// test("tells ship hit numbers", () => {
//     const myShip = ship();
//     expect(myShip.timesHit()).toBe(0);
//     myShip.hit();
//     expect(myShip.timesHit()).toBe(1);
// });

test("tells if ship is sunk", () => {
    const myShip = ship(2);
    expect(myShip.isSunk()).toBe(false);
    myShip.hit();
    expect(myShip.isSunk()).toBe(false);
    myShip.hit();
    expect(myShip.isSunk()).toBe(true);
});