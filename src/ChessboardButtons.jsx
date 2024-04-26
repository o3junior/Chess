import React from 'react';

function ChessboardButtons() {
  const redirectToChessboardPage = () => {
    window.location.href = 'ChessHome.html'; 
  };

  return (
    <div>
      <button onClick={redirectToChessboardPage}>Chessboard</button>
      {}
    </div>
  );
}

export default ChessboardButtons;
