import { startGame } from "./contorller/controller.js";
import { renderBoard } from "./ui/dom.js";

import "./styles.css";

function main() {
    let players = startGame();
    let XrandomNumber;
    let YrandomNumber;
    let isDuplicate = false;

    let axis = "x";
    let shipLengths = [4, 5, 3, 3, 2];
    let currentShipIndex = 0;

    let isPlacementPhase = true;

    const popupDialog = document.querySelector("#winnerDialog");
    const announceWinner = document.querySelector("#announceWinner");
    const playAgainButton = document.querySelector("#playAgainButton");

    let rotateAxis = document.getElementById("rotate-btn");

    const renderUI = () => {
        renderBoard(
            "human-board",
            players.human.gameboard,
            isPlacementPhase ? handlePlacement : null,
        )
        renderBoard(
            "computer-board",
            players.computer.gameboard,
            handleAttack
        )
    }

    const handleAttack = (coordinates) => {
        players.computer.gameboard.receiveAttack(coordinates);
        renderUI();
        if (players.computer.gameboard.allShipsSunk()) {
            
            popupDialog.showModal();
            announceWinner.textContent = "Human wins!";
            return;
        }

        do {
            XrandomNumber = Math.floor(Math.random() * 10);
            YrandomNumber = Math.floor(Math.random() * 10);
            let inMissingShots = players.human.gameboard.missingShots.some(missArray => {
                let condition = players.human.gameboard.areArraysEqual(missArray, [XrandomNumber, YrandomNumber]);
                return condition;
            })
            let inSuccessfulShots = players.human.gameboard.successfulShots.some(hitArray => {
                let condition = players.human.gameboard.areArraysEqual(hitArray, [XrandomNumber, YrandomNumber]);
                return condition;
            })
            isDuplicate = inMissingShots || inSuccessfulShots;
        } while (isDuplicate);

        players.human.gameboard.receiveAttack([XrandomNumber, YrandomNumber]);
        renderUI();
        if (players.human.gameboard.allShipsSunk()) {
            
            popupDialog.showModal();
            announceWinner.textContent = "Computer wins!";
            return;
        }
    }

    playAgainButton.addEventListener("click", () => {
        players = startGame();
        currentShipIndex = 0;
        isPlacementPhase = true;
        axis = "x";
        rotateAxis.textContent = "Rotate Axis X";

        let shipHarbour = document.getElementById("ship-harbour");
        shipHarbour.style.display = "flex";
        let computerBoard = document.getElementById("computer-board");
        computerBoard.style.display = "none";

        let fleetChildren = document.getElementById("fleet").children;
        for (let child of fleetChildren) child.classList.remove("active");
        fleetChildren[0].classList.add("active");

        popupDialog.close();
        renderUI();
    })

    rotateAxis.addEventListener("click", () => {
        if (axis === "x") {
            axis = "y";
            rotateAxis.textContent = "Rotate Axis Y"
        } else {
            axis = "x";
            rotateAxis.textContent = "Rotate Axis X";
        }
    })

    const handlePlacement = (coordinates) => {
        if (players.human.gameboard.placeShip(
            coordinates,
            shipLengths[currentShipIndex],
            axis
        )) {
            let fleet = document.getElementById("fleet");
            let fleetChildren = fleet.children;
            fleetChildren[currentShipIndex].classList.remove("active");
            currentShipIndex++;

            if (currentShipIndex < 5) {
                fleetChildren[currentShipIndex].classList.remove("active");
            }

            if (currentShipIndex === 5) {
                let shipHarbour = document.getElementById("ship-harbour");
                shipHarbour.style.display = "none";
                let computerBoard = document.getElementById("computer-board");
                setTimeout(() => {
                    computerBoard.style.display = "grid";
                }, 2000);

                isPlacementPhase = false;
            }

            renderUI();
        }
    }

    renderUI();
}

main();
