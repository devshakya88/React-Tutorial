import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setgameBoard] = useState(initalGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setgameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      prevGameBoard[rowIndex][colIndex] = "X";
      return prevGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {initalGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
