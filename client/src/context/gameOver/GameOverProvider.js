import React, { useState, useMemo } from 'react';
import GameOverContext from './GameOverContext';

const GameOverProvider = ({ children }) => {

    const [gameOver, setGameOver] = useState(false);
    const gameOverValue = useMemo(() => ({ gameOver, setGameOver }), [gameOver, setGameOver]);

    return (
        <GameOverContext.Provider value={gameOverValue}>
            { children }
        </GameOverContext.Provider>
    );
};

export default GameOverProvider;
