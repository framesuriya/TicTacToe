import React from 'react';

import './History.scss';

const getRow = (history, move) => // move = index
  Math.floor(history[move].squareSelected / 3) + 1;

// hint create helper to calculate Col
const getCol = (history, move) => {
  return (history[move].squareSelected % 3) +1;
}

function History({ history, onClick }) {
  const moves = history.map((i, move) => {
    const moveRow = getRow(history, move);
    const moveCol = getCol(history, move);

    const desc = move ? `Go to move #${move} (Row : ${moveRow}, Col : ${moveCol})`:'Restart';

    return <li key={move}>
      <button onClick={()=>onClick(move)}>{desc}</button>
      </li>;
  });

  return (
    <div className="history">
      <ul>{moves}</ul>
    </div>
  );
}

export default History;
