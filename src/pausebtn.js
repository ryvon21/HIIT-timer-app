import PauseSVG from './assets/images/pause.svg'
import React, { Component }  from 'react';

function PauseBtn(props) {
    return (
        <button {...props}>
            <img src={PauseSVG} alt="pause button" />
        </button>
    );
}

export default PauseBtn;