import React, { useState, useEffect } from 'react';
import Board from '../components/tictactoe/Board';

const calculateWinner = (squares) => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
    
      return null; // No winner yet
};

const getRandomEmptySquare = (squares) => {
    const emptySquares = [];
    squares.forEach((square, index) => {
      if (!square) {
        emptySquares.push(index);
      }
    });
    return emptySquares.length > 0
      ? emptySquares[Math.floor(Math.random() * emptySquares.length)]
      : null;
  };
  
  const TicTacToePage = () => {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
  
    const winner = calculateWinner(squares);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
    useEffect(() => {
      if (!xIsNext && !winner) {
        // Computer's turn
        const timer = setTimeout(makeComputerMove, 1000);
        return () => clearTimeout(timer);
      }
    }, [xIsNext, winner]);
  
    const makeComputerMove = () => {
      if (!winner) {
        const emptySquareIndex = getRandomEmptySquare(squares);
        if (emptySquareIndex !== null) {
          const newSquares = squares.slice();
          newSquares[emptySquareIndex] = 'O';
          setSquares(newSquares);
          setXIsNext(true);
        }
      }
    };
  
    const handleClick = (index) => {
        if (squares[index] || winner || (!xIsNext) || isGameOver) {
          return;
        }
    
        const newSquares = squares.slice();
        newSquares[index] = 'X';
        setSquares(newSquares);
        setXIsNext(false);
    
        if (calculateWinner(newSquares) || newSquares.every(square => square !== null)) {
          setIsGameOver(true);
        }
      };
    
      const restartGame = () => {
        setSquares(initialSquares);
        setXIsNext(true);
        setIsGameOver(false);
      }; 
    
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold mb-6">Tic Tac Toe Game</h1>
          <div className="text-xl font-semibold mb-4">{status}</div>
          <Board squares={squares} onClick={handleClick} />
          {(winner || isGameOver) && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={restartGame}
            >
              Restart Game
            </button>
          )}
        </div>
      );
    };
    
    export default TicTacToePage;