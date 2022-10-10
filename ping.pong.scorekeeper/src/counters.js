import { useState } from 'react';

function Counters() {

  // state
  const [playerOneScore, setPlayerOneScore] = useState(0);

  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const [gameStatus, setGameStatus] = useState("Let's Play Ping Pong!")

  // fetch function
  // function update(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: {
  //     "username": String,
  //     "wins": Number,
  //     "total_points": 0
  //   }
  // }) {
  //   return fetch(url)
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  // }

  // event handler functions for adding points
  const playerOnePoint = async () => {
    
    await setPlayerOneScore(playerOneScore + 1);
    // await setPlayerTwoScore(playerTwoScore);
    playerWin();
   
  }

  const playerTwoPoint = async () => {
    
    await setPlayerTwoScore(playerTwoScore + 1);
    // await setPlayerOneScore(playerOneScore);
    playerWin();
    
  }

  // handle player win
  const playerWin = () => {
    if(playerOneScore > 10 && playerTwoScore < playerOneScore - 2){
      setGameStatus("Player 1 wins!");

      // update("https://SmarttwigsInterview.johnbeatrice.repl.co/updateRating");

      setPlayerOneScore(0);
      setPlayerTwoScore(0);

      
    } 
    else if(playerTwoScore > 10 && playerOneScore < playerTwoScore - 2){
      setGameStatus("Player 2 wins!");

      setPlayerOneScore(0);
      setPlayerTwoScore(0);
      
      // send post request here
    }
  }

  return (
    <div className="Counters">

     <h1>Counter component</h1>
     <h2>{gameStatus}</h2>

    <div>
      <h2>{playerOneScore}</h2>
      <button onClick={playerOnePoint}>Player 1 score +1</button>
    </div>

    <div>
      <h2>{playerTwoScore}</h2>
      <button onClick={playerTwoPoint}>Player 2 score +1</button>
    </div>
        

    </div>
  );
}

export default Counters;
