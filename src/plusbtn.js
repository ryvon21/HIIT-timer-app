import PlusSVG from './assets/images/plus.svg'
import React, { Component }  from 'react';

function PlusBtn(props) {
    return (
        <button {...props}>
            <img src={PlusSVG} alt="increment icon" />
        </button>
    );
}

export default PlusBtn;