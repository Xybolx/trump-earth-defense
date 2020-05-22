import React, { useState, useMemo } from 'react';
import PausedContext from './PausedContext';

const PausedProvider = ({ children }) => {

    const [paused, setPaused] = useState(false);
    const pausedValue = useMemo(() => ({ paused, setPaused }), [paused, setPaused]);

    return (
        <PausedContext.Provider value={pausedValue}>
            { children }
        </PausedContext.Provider>
    );
};

export default PausedProvider;
