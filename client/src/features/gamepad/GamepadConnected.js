import React from 'react';

const GamepadConnected = props => {

    const { connected } = props;

    return (
        <span style={{ 
            position: 'relative', 
            top: 4, 
            marginLeft: 10, 
            fontSize: 15 
        }}>
        <span style={{ 
            color: 'yellow', 
            marginLeft: 10, 
            marginRight: 10, 
        }} 
            className="fas fa-gamepad fa-fw fa-2x" 
        />
            { connected ? "CONNECTED" : "NOT CONNECTED" }
        </span> 
    );
};

export default GamepadConnected;
