import React, { useState,useEffect } from 'react';

import Header from './componets/Header';
import Board from './componets/Board';
import Status from './componets/Status';
import History from './componets/History';
import Square from './componets/Square';
import { calculateWinner, DEAD_WINNER } from './utils/helpers'

const initialBoard = Array(9).fill(null);
const initialStatus = {
  winner: null,
  turn: 'X',
};
function App() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(initialStatus);
  const [nextTurn,setNextTurn] = useState(true)
  const [gameHistory, setGameHistory] = useState([
    {
      squaresList: initialBoard,
      squareSelected: null,
    },
  ]);
  function onBoardClick(i) {
    const selectedSquare = gameHistory[step].squaresList[i];

    if (selectedSquare || status.winner) return;

    const history = gameHistory.slice(0,step + 1);
    const current = history[history.length-1];
    const squares = current.squaresList.slice();
    squares[i] = nextTurn ? 'X':'O'

    setGameHistory(
      history.concat({
        squaresList:squares,
        squareSelected:i
      })
    );

    setStep(history.length)
    setNextTurn(!nextTurn)
  }

  function onStepClick(step)  {
    setGameHistory(gameHistory.slice(0, step+1));
    setStep(step);
    setNextTurn(step % 2 === 0);
  }

  useEffect(() => {
    const current = gameHistory[step]
    const winner = calculateWinner(current.squaresList)
    if (winner) {
      setStatus({winner:winner});
      return;
    }
    if (step > 8) {
      const deadWinner = {player:DEAD_WINNER}
      setStatus({winner:deadWinner})
      return;
    }
    setStatus({turn:nextTurn ? 'X' : 'O'});
  }, [step, gameHistory, nextTurn]);

  
  return (
    <>
      <Header />
      <Status player={status?.winner?.player} turn={status.turn} />
      <Board history={gameHistory} step={step} onClick={onBoardClick} winnerLine={status?.winner?.line}/>
      <History history={gameHistory} onClick={onStepClick}/>
    </>
  );
}

export default App;
