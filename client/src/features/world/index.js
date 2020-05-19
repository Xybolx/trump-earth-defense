import React, { useState, useRef, useContext, useEffect } from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';
import useGamepad from '../../hooks/useGamepad';
import Player from '../player';
import Map from '../map';
import Earth from '../earth';
import Progress from '../progress';
import Alert from '../alert';
import Enemy from '../enemy';
import Laser from '../laser';
import SpecialContainer from './SpecialContainer';
import GameOverContext from '../../context/gameOver/GameOverContext';

const World = () => {

  // xbox gamepad
  const { gamepad, gamepadConnected } = useGamepad();

  // context
  const { gameOver, setGameOver } = useContext(GameOverContext);

  // local state
  const [isFlying, setIsFlying] = useState(false);

  const [visibility, setVisibility] = useState('hidden');

  const [position, setPosition] = useState(0);

  const [shield, setShield] = useState(10);

  const [charge, setCharge] = useState(3);

  const [special, setSpecial] = useState(0);

  const [specialFire, setSpecialFire] = useState(false);

  const [destroyedEarth, setDestroyedEarth] = useState(false);

  const laser = useRef();

  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  });

  const handleSpecialFire = () => {
    setAlert({
      isOpen: true,
    });
    setSpecialFire(true);
};

  const handleLaserReset = () => {
    setPosition(0);
    setIsFlying(false);
    setVisibility('hidden');
};

useEffect(() => {
  switch (true) {
    case shield === 0:
      setDestroyedEarth(true);
      break;
    default: 
      break;
  }
}, [setGameOver, shield, gameOver, destroyedEarth]);

useEffect(() => {
  if (destroyedEarth) {
    const timer = setTimeout(setGameOver(true), 3500);
    return () => clearTimeout(timer);
  }
}, [setGameOver, destroyedEarth]);

  return (
    <div 
      style={{
        position: 'relative',
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        margin: '10px 20px auto',
      }}>
        <Map>
          <Progress 
            shield={shield} 
            charge={charge} 
            special={special}>
            {gamepadConnected}
            {gamepad}
            <Alert alert={alert} setAlert={setAlert} />
          </Progress>
          <Player>
              <Laser 
                ref={laser}
                charge={charge} 
                setCharge={setCharge}
                isFlying={isFlying}
                setIsFlying={setIsFlying}
                visibility={visibility} 
                setVisibility={setVisibility} 
                position={position}
                setPosition={setPosition}
                special={special}
                setSpecial={setSpecial}
                handleSpecialFire={handleSpecialFire}
              />
            </Player>
            <SpecialContainer specialFire={specialFire} />
            <Enemy laser={laser} alert={alert} setAlert={setAlert} initialPositionX={1300} initialPositionY={-100} specialFire={specialFire} setSpecialFire={setSpecialFire} isFlying={isFlying} handleLaserReset={handleLaserReset} setShield={setShield} setSpecial={setSpecial} />
            <Enemy laser={laser} alert={alert} setAlert={setAlert} initialPositionX={1300} initialPositionY={0} specialFire={specialFire} setSpecialFire={setSpecialFire} isFlying={isFlying} handleLaserReset={handleLaserReset} setShield={setShield} setSpecial={setSpecial} />
            <Enemy laser={laser} alert={alert} setAlert={setAlert} initialPositionX={1300} initialPositionY={100} specialFire={specialFire} setSpecialFire={setSpecialFire} isFlying={isFlying} handleLaserReset={handleLaserReset} setShield={setShield} setSpecial={setSpecial} />
            <Earth destroyedEarth={destroyedEarth} shield={shield} />
        </Map>
    </div>
  );
};

export default World;