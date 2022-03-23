import React, { Component }  from 'react';
import { useContext } from "react";
import ReactSlider from "react-slider";
import './App.css'
import WrkoutConditions from "./conditions";
import SubtractBtn from "./minusbtn";
import PlusBtn from "./plusbtn";
import ReturnBtn from "./returnbtn";

function CreateNewWrkout(){
    const wkroutInfo = useContext(WrkoutConditions)
    return (
        <main>
            <h1>Start new workout</h1>

            <div style={{textAlign:'left'}}>
                <label>Rep Interval: {wkroutInfo.repSeconds}</label>
                <ReactSlider
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={wkroutInfo.repSeconds}
                    onChange={newValue => wkroutInfo.setRepSeconds(newValue)}
                    min={1}
                    max={60}
                 />
                <label>Rest Interval: {wkroutInfo.restSeconds}</label>
                <ReactSlider
                    className={'slider2'}
                    thumbClassName={'thumb2'}
                    trackClassName={'track2'}
                    value={wkroutInfo.restSeconds}
                    onChange={newValue => wkroutInfo.setRestSeconds(newValue)}
                    min={1}
                    max={60}
                 />
            </div>

            <label style={{textAlign:'left'}}> Number of sets: </label>

            <div className='count-container'>
                <PlusBtn onClick={ () => wkroutInfo.addCounter()} />

                <p> { wkroutInfo.counter } </p>

                <SubtractBtn onClick={ () => wkroutInfo.subtractCounter()}/>
            </div>

            <ReturnBtn onClick={ () => wkroutInfo.setShowWorkout(false)}/>

        </main>
    );
}

export default CreateNewWrkout;