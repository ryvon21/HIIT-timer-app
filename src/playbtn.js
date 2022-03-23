import PlaySVG from './assets/images/play.svg'
import React, { Component }  from 'react';

function PlayBtn(props) {
    return (
        <button {...props}>
            <img src={PlaySVG} alt="play button" />
        </button>
    );
}

export default PlayBtn;