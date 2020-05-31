import React, { useState, useMemo } from 'react';
import ScoresContext from './ScoresContext';

const ScoresProvider = ({ children }) => {

    const [scores, setScores] = useState([]);
    const scoresValue = useMemo(() => ({ scores, setScores }), [scores, setScores]);

    return (
        <ScoresContext.Provider value={scoresValue}>
            { children }
        </ScoresContext.Provider>
    );
};

export default ScoresProvider;
