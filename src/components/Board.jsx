import React, { useState } from "react";
import Square from "./Square";

const Board = (props) => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(false);

  const [p1Wins, setP1Wins] = useState(0);
  const [p2Wins, setP2Wins] = useState(0);

  const handleClick = (index) => {
    if (state[index] !== null || checkWinner())
      return;
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  const isWinner = checkWinner();

  React.useEffect(() => {
    if (isWinner) {
      if (isWinner === 'X') {
        setP1Wins(p1Wins + 1);
      } else {
        setP2Wins(p2Wins + 1);
      }
    }
  }, [isWinner]);

  return (
    <>
      <h1 style={{ color: 'white' }}>TIC-TAC-TOE GAME</h1>
      <div className="board-container">
        {isWinner ? (
          <>
            {isWinner === 'X' ? props.players[0] : props.players[1]} Won the Game
            <br />
            <br />
            <button
              style={{
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                fontSize: 'medium',
                backgroundColor: 'rgb(20, 146, 20)',
              }}
              onClick={handleReset}
            >
              Play Again
            </button>
          </>
        ) : (
          <>
            <h4>Player {isXTurn ? props.players[0] : props.players[1]} Turn</h4>
            <div className="board-row">
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
            <br /><br /><br /> <button
              style={{
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                fontSize: 'medium',
                backgroundColor: 'rgb(20, 146, 20)',
              }}
              onClick={handleReset}
            >
              Play Again
            </button>
          </>
        )}
      </div>
      <div style={{color:'white'}}>
        <h2>Result</h2>
        <table style={{border:'1px solid white', padding:"10px", textAlign:'center'}}>
          <thead>
            <tr >
              <th style={{padding:'0 '}}>{props.players[0]}</th>
              <th>{props.players[1]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p1Wins}</td>
              <td>{p2Wins}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Board;
