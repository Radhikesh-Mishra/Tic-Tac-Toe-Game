import React, { useState } from 'react';
import Board from '../components/Board';

function Game() {
  const [player1, setPlayer1] = useState('Player1');
  const [player2, setPlayer2] = useState('Player2');
  const [players, setPlayers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setPlayers([player1, player2]);
  };


  if (players.length === 0) {
    return (
      <div style={{color:'white'}}>
        <h2>Enter Player Data</h2>
        <form>
          <div>
            <label>Player 1:</label>
            <input
              type="text"
              value={player1}
              style={{margin:'0 25px', backgroundColor:'white', height:'28px', width:'30%'}}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div><br /><br />
          <div>
            <label>Player 2:</label>
            <input
              type="text"
              value={player2}
              style={{margin:'0 25px', backgroundColor:'white', height:'28px', width:'30%'}}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div><br /><br />
          <button style={{border:'none', color:' white', backgroundColor:'rgb(20, 146, 20)', padding:'10px 30px', borderRadius:'15px', fontSize:'large' }} onClick={handleClick}>Submit</button>
        </form>
      </div>
    );
  }

  return (
    <Board players = {players}/>
  );
}

export default Game;
