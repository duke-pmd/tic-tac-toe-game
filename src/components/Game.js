import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [move, setMove] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    if (winner) return;
    if (!squares[i]) {
      setMove(move + 1);
      history.length = move + 1;
      setHistory(history);
      const newSquares = squares.map((square, index) => {
        if (index === i) {
          return xIsNext ? "X" : "O";
        }
        return square;
      });

      // re-render board with new move
      setSquares(newSquares);
      // save board to history
      setHistory((history) => {
        return [...history, newSquares];
      });
      // set next player
      setXIsNext(!xIsNext);
    }
  };

  //Restart game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setHistory([Array(9).fill(null)]);
    setMove(0);
  };

  // Next player does not change when undo move
  const handleUndoMove = (index, historyItem) => {
    setSquares(history[index]);
    setXIsNext(index % 2 === 0 ? true : false);
    setMove(index);
    // history.length = index + 1;
    // setHistory(history);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game-container">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <div className="game-history-container">
          <div className="game">
            <Board squares={squares} handleClick={handleClick} />
          </div>
          <div className="history-container">
            <History
              history={history}
              handleRestart={handleRestart}
              handleUndoMove={handleUndoMove}
            />
          </div>
        </div>
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
