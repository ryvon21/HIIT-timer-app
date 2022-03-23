import { useContext } from "react";
import React, { Component }  from 'react';
import './App.css'
import WrkoutConditions from "./conditions";
import ReturnBtn from "./returnbtn";
import Confetti from 'react-confetti';



function ShowVictory(){
    const wkroutInfo = useContext(WrkoutConditions)
    return (
        <main style={{textAlign:'center'}}>
             <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
             />

            <h1>Victory!</h1>

            <ReturnBtn onClick={ () => wkroutInfo.setShowVictory(false)}/>

        </main>
    );
}



export default ShowVictory;