import React, { useState } from 'react';
import arcadePNG from './arcade-button.png';
import pressedPNG from './arcade-pressed.png';

const StartBtn = props => {

    const [btnBackground, setBtnBackground] = useState(arcadePNG);

    const handleMouseOver = () => {
        setBtnBackground(pressedPNG);
    };

    const handleMouseOut = () => {
        setBtnBackground(arcadePNG);
    };

    return (
        <button
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            id={props.id}
            className={props.className}
            onClick={props.onClick}>
            <img style={{ maxHeight: 50 }} className='img-fluid' src={btnBackground} alt='' />
            {props.text}  
        </button>
    );
};

export default StartBtn;
