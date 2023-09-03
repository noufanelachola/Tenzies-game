import React, { useEffect, useState } from 'react';
import './App.css';
import Dice from "./Dice";

function App() {

  const [diceList,setDiceList] = useState([]);
  const [freeze,setFreeze] = useState({
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false,
    10:false,
    11:false,
    12:false,
  });
  const [diceNumber,setDiceNumber] = useState({
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0,
    11:0,
    12:0,
  })

  useEffect(() => {
    let newDiceList = [];
    for (let i=1 ; i <= 12 ; i++ ){
      newDiceList.push(<Dice key={i} id={i} handleClick={diceFreeze} selection={freeze[i]} num={diceNumber[i]}/>)
    }
    setDiceList(newDiceList);
  },[freeze,diceNumber])



  function diceFreeze(id) {
    setFreeze((prevFreeze) => ({
      ...prevFreeze,
      [id]: !prevFreeze[id]
    }));
  }
        
  

  function roll(){
    const newDiceNumber = {};

    for (let i = 1; i <= 12; i++) {
      newDiceNumber[i] = freeze[i] ? diceNumber[i] : randomNum();
    }

    setDiceNumber(newDiceNumber);
  }

  function randomNum() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  return (
    <div className="appContent">
      <h2>Tenzies Game</h2>
      <p>Roll until all dice are the same. 
        Click each die to freeze it at its 
        current value between rolls.
      </p>
      <div className='diceList'>
        {diceList}
      </div>
      <button onClick={roll}>Roll</button>
    </div>
  );
}

export default App;
