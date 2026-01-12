import { player } from "../factories/player";

test("create real player", () => {
    const realPlayer = player("real");
    expect(realPlayer.type).toBe("real");
});

test("create computer player", () => {
    const computerPlayer = player("computer");
    expect(computerPlayer.type).toBe("computer");
});

test("player has a gameboard", () => {
    const realPlayer = player("real");
    expect(realPlayer.gameboard).toBeDefined();
    expect(realPlayer.gameboard).toHaveProperty("placeShip");
});