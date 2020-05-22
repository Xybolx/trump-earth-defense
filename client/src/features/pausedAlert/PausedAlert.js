import React from 'react';

const PausedAlert = props => {

    const { paused } = props;

    return (
        <div style={{ position: 'absolute', marginLeft: 15, top: 45 }}><span style={{ color: 'yellow', fontSize: 25 }} className="far fa-pause-circle" /><span style={{ position: 'flex', top: 4, marginLeft: 10 }}>{paused ? "PAUSED" : ""}</span></div> 
    );
};

export default PausedAlert;
