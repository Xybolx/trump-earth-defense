import React, { useState, useRef, useContext, useEffect } from 'react';
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
import PausedContext from '../../context/paused/PausedContext';
import PausedAlert from '../pausedAlert/PausedAlert';
import PageContainer from '../pageContainer/PageContainer';

const World = () => {

  // xbox gamepad
  const { gamepad, gamepadConnected } = useGamepad();

  // context
  const { setGameOver } = useContext(GameOverContext);
  const { paused } = useContext(PausedContext);

  // local state
  const [isFlying, setIsFlying] = useState(false);

  const [visibility, setVisibility] = useState('hidden');

  const [position, setPosition] = useState(0);

  const [shield, setShield] = useState(10);

  const [charge, setCharge] = useState(3);

  const [special, setSpecial] = useState(0);

  const [specialFire, setSpecialFire] = useState(false);

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
      setGameOver(true);
      break;
    default: 
      break;
  }
}, [setGameOver, shield]);

  return (
    <PageContainer>
        <Map>
          <Progress 
            shield={shield} 
            charge={charge} 
            special={special}>
            {gamepad}
            {
              !paused ? 
              <Alert alert={alert} setAlert={setAlert} /> : 
              <PausedAlert paused={paused} />
            }
          </Progress>
          {gamepadConnected}
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
            <Earth shield={shield} />
        </Map>
    </PageContainer>
  );
};

export default World;