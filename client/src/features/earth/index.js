import React from 'react';
import earthPNG from './earth.png';

const Earth = props => {

    const { shield } = props;

    return (
        <div
            className='earth'
            style={{
                position: 'absolute',
                zIndex: 0,
                top: 200,
                height: '350px',
                width: '350px',
                backgroundImage: `url('${earthPNG}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                borderColor: shield >= 10 ? 'lawngreen' : shield >= 5 ? 'yellow' : shield >= 1 ? 'red' : 'red',
                borderStyle: 'double',
                borderWidth: 12
            }}>
        </div>
    );
};

export default Earth;
