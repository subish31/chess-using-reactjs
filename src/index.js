import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import black_rook from './BlackRook.png';
import black_knight from './BlackKnight.png';
import black_bishop from './BlackBishop.png';
import black_king from './BlackKing.png';
import black_queen from './BlackQueen.png';
import black_pawn from './BlackPawn.png';
import white_rook from './WhiteRook.png';
import white_knight from './WhiteKnight.png';
import white_bishop from './WhiteBishop.png';
import white_king from './WhiteKing.png';
import white_queen from './WhiteQueen.png';
import white_pawn from './WhitePawn.png';

const pieceImages = {
  black_king,
  black_queen,
  black_rook,
  black_bishop,
  black_knight,
  black_pawn,
  white_king,
  white_queen,
  white_rook,
  white_bishop,
  white_knight,
  white_pawn
};

const initialBoard = [
  ['black_rook', 'black_knight', 'black_bishop', 'black_queen', 'black_king', 'black_bishop', 'black_knight', 'black_rook'],
  ['black_pawn', 'black_pawn', 'black_pawn', 'black_pawn', 'black_pawn', 'black_pawn', 'black_pawn', 'black_pawn'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['white_pawn', 'white_pawn', 'white_pawn', 'white_pawn', 'white_pawn', 'white_pawn', 'white_pawn', 'white_pawn'],
  ['white_rook', 'white_knight', 'white_bishop', 'white_queen', 'white_king', 'white_bishop', 'white_knight', 'white_rook']
];

const Chessboard = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleCellClick = (row, col) => {
    if (board[row][col]) {
      setSelectedPiece([row, col]);
    } else {
      setSelectedPiece(null);
    }
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${selectedPiece && selectedPiece[0] === rowIndex && selectedPiece[1] === colIndex ? 'selected' : ''}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell && <img src={pieceImages[cell]} alt={cell} className="piece" />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
ReactDOM.render(<Chessboard/>,document.getElementById('root'));
