import React, { useContext } from 'react';
import World from '../features/world';
import GameOver from './GameOver';
import GameOverContext from '../context/gameOver/GameOverContext';

const Game = () => {

    const { gameOver } = useContext(GameOverContext);

    return (
        <>
            { gameOver ? <GameOver /> : <World /> }
        </>
    );
};

export default Game;
