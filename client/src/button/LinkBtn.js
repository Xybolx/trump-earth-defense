import React, { useState } from 'react';
import arcadePNG from './arcade-button.png';
import pressedPNG from './arcade-pressed.png';
import { Link } from 'react-router-dom';

const LinkBtn = props => {

    const [btnBackground, setBtnBackground] = useState(arcadePNG);

    const handleMouseOver = () => {
        setBtnBackground(pressedPNG);
    };

    const handleMouseOut = () => {
        setBtnBackground(arcadePNG);
    };

    return (
        <Link
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            id={props.id}
            className={props.className}  
            to={props.to}
            exact>
            <img style={{ maxHeight: 50 }} className='img-fluid' src={btnBackground} alt='' />
            {props.text}  
        </Link>
    );
};

export default LinkBtn;
