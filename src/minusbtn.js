import SubtractSVG from './assets/images/minus.svg'
import React, { Component }  from 'react';

function SubtractBtn(props) {
    return (
        <button {...props}>
            <img src={SubtractSVG} alt="decrement icon" />
        </button>
    );
}

export default SubtractBtn;