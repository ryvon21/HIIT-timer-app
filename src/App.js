import './App.css';
import React, { Component }  from 'react';
import {useState} from "react";
import Timer from "./timerMain";
import CreateNewWrkout from './newwrkout';
import WrkoutConditions from './conditions';
import ShowVictory from './completion';

function App() {
  const [showWorkout, setShowWorkout] = useState(false)
  const [showVictory, setShowVictory] = useState(false)
  const [repSeconds, setRepSeconds] = useState(30)
  const [restSeconds, setRestSeconds] = useState(20)
  const [counter, setCounter] = useState(1)
  const addCounter = () => setCounter(counter + 1)
  let subtractCounter = () => setCounter(counter - 1)
  

  return (
    <main>
      <WrkoutConditions.Provider value={{
        showWorkout,
        setShowWorkout,
        showVictory,
        setShowVictory,
        repSeconds,
        restSeconds,
        setRepSeconds,
        setRestSeconds,
        counter,
        addCounter,
        subtractCounter,
      }}>
      {showWorkout ? <CreateNewWrkout /> : showVictory? <ShowVictory/> : <Timer />}
      </WrkoutConditions.Provider>
    </main>
  );
}

export default App;
