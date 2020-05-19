import React from 'react';

const ProgressBar = props => {

    const { value, className } = props;

    const shieldStyle = { outline: value >=10 ? 'solid lawngreen' : value >= 5 ? 'solid yellow' : value >= 1 ? 'solid red' : 'solid red', position: 'relative' }

    return (
        <span>
            &nbsp;<span style={{ color: 'yellow' }} data-fa-transform="up-2" className={className} /><span className="progress-text" style={{ position: 'relative' }}>{`${Math.floor(value / 10 * 100)}%`}</span>
            <progress style={shieldStyle} max={10} value={value} />
        </span>
    );
};

export default ProgressBar;
