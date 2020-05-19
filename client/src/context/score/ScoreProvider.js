import React, { useState, useMemo } from 'react';
import ScoreContext from './ScoreContext';

const ScoreProvider = ({ children }) => {

    const [score, setScore] = useState(0);
    const scoreValue = useMemo(() => ({ score, setScore }), [score, setScore]);

    return (
        <ScoreContext.Provider value={scoreValue}>
            { children }
        </ScoreContext.Provider>
    );
};

export default ScoreProvider;
