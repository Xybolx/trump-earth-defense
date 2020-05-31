import React from 'react';

const PausedAlert = props => {

    const { paused } = props;

    return (
        <div style={{ zIndex: 3, position: 'absolute', marginLeft: '38%', top: 300, fontSize: 35 }}><span style={{ color: 'yellow', top: 30, }} className="far fa-pause-circle fa-fw fa-2x" /><span style={{ position: 'flex', top: 10, marginLeft: 10 }}>{paused ? "PAUSED" : ""}</span></div> 
    );
};

export default PausedAlert;
