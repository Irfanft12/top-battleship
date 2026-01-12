import gameboard from "./gameboard.js";

export function player(playerType) {
    const type = playerType;
    return {
        type,
        gameboard: gameboard()
    }
}