import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React, { Component }  from 'react';
import { useContext, useState, useEffect, useRef } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PauseBtn from './pausebtn';
import PlayBtn from './playbtn';
import NewExercise from './wrkout';
import WrkoutConditions from './conditions';


function Timer () {
    const wkroutInfo = useContext(WrkoutConditions);
    const [isPaused, setPause] = useState(false);
    const [mode, setMode] = useState('rep')
    const [secondsRemaining, setSecondsRemaining] = useState(0)
    const secondsRemainingRef = useRef(secondsRemaining)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    const [sets, newSetsRemaining] = useState(0)
    const setsRef = useRef(sets)

    const red = '#B9272C'
    const green = '#03B55C'

    function tick() {
        secondsRemainingRef.current = secondsRemainingRef.current -1
        setSecondsRemaining(secondsRemainingRef.current)
    }

    function reduceSets() {
        setsRef.current = setsRef.current -1;
        newSetsRemaining(setsRef.current);
        console.log(setsRef.current)
    }

    useEffect(() => {

        function changeMode() {
            

            const newMode = modeRef.current === 'rep' ? 'rest' : 'rep'
            const newTime = (newMode === 'rep' ? wkroutInfo.repSeconds : wkroutInfo.restSeconds)

            setMode(newMode)
            modeRef.current = newMode

            setSecondsRemaining(newTime)
            secondsRemainingRef.current = newTime

            reduceSets();
        }
    
    setsRef.current = wkroutInfo.counter
    newSetsRemaining(setsRef.current)
    secondsRemainingRef.current = wkroutInfo.repSeconds
    setSecondsRemaining(secondsRemainingRef.current)
    

    const countdown = setInterval(() => {
        if(isPausedRef.current || setsRef.current < 0) {
            return;
        }
        if (secondsRemainingRef.current === 0) {
            return changeMode();
        }
        
        tick();
    }, 1000)

    

    return () => clearInterval(countdown)
    
    

    }, [wkroutInfo]);

    const timeLeft = secondsRemaining

    if (sets < 0) {
        wkroutInfo.setShowVictory(true)
    }

   

    return (
        
        <div>
        <CircularProgressbar 
        value={timeLeft}
        maxValue={60}
        text={`${timeLeft}`} 
        styles={buildStyles({
        textColor:'whitesmoke',
        pathColor:mode === 'rep' ? red : green,
        trailColor:'#FDFFF7',  
        })} />

        <div style={{marginTop:'25px'}}>
            <PlayBtn  onClick={() => { setPause(false); isPausedRef.current = false; }}/>
            <PauseBtn onClick={() => { setPause(true); isPausedRef.current = true; }}/>
        </div>

        <div style={{marginTop:'25px'}}>
            <NewExercise onClick= {() => wkroutInfo.setShowWorkout(true)}/>
        </div>


        </div>
        );
}

export default Timer;