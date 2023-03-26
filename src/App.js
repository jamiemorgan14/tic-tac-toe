import './App.css'
import { useState } from 'react';

// TODO: make board expandable like 3x3, 4x4, 5x10
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(square) {
    const nextSquares = squares.slice();
    nextSquares[square] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}
