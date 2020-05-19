import React from 'react';

const GamepadConnected = props => {

    const { connected } = props;

    return (
        <span style={{ position: 'relative', fontSize: "small", top: 4, marginLeft: 15 }}><span style={{ color: 'yellow' }} className="fas fa-gamepad fa-fw fa-2x" /> {connected ? "Connected" : "Not Connected"}</span> 
    );
};

export default GamepadConnected;
