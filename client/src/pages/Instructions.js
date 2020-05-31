import React, { useState, useRef, useContext, useEffect } from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../config/constants';
import whateverMP3 from '../imgs/whatever.mp3';
import useGamepad from '../hooks/useGamepad';
import CenteredColumn from '../features/centeredColumn';
import Player from '../features/player';
import Map from '../features/map';
import Earth from '../features/earth';
import Progress from '../features/progress';
import Laser from '../features/laser';
import PausedContext from '../context/paused/PausedContext';
import PausedAlert from '../features/pausedAlert/PausedAlert';
import LinkBtn from '../button/LinkBtn';

const Instructions = () => {

  // xbox gamepad
  const { gamepad, gamepadConnected } = useGamepad();

  // context
  const { paused } = useContext(PausedContext);

  // local state
  const [isFlying, setIsFlying] = useState(false);

  const [visibility, setVisibility] = useState('hidden');

  const [position, setPosition] = useState(0);

  const [shield] = useState(10);

  const [charge, setCharge] = useState(3);

  const [special, setSpecial] = useState(0);

  const laser = useRef();

  useEffect(() => {
    const whatever = new Audio(whateverMP3);
    whatever.play();
}, []);

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
            {gamepad}
            {
              paused ? 
              <PausedAlert paused={paused} /> :
              ""
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
              />
            </Player>
          <CenteredColumn>
            <ul>
              <li className='small'>
                Earth is destroyed when this <span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-globe-americas' /> is 0%
              </li>
              <br />
              <li className='small'>
                Laser fires when this <span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-bolt' /> is 100%
              </li>
              <br />
              <li className='small'>
                Special fires when this <span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-star' /> and this <span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-bolt' /> are both 100%
              </li>
              <br />
              <li className='small'>
                A gamepad is connected when this <span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-gamepad' /> says CONNECTED
              </li>
              <br />
              <li className='small'>
                Use the UpArrow or DpadUp to move up; DownArrow or DpadDown to move down
              </li>
              <br />
              <li className='small'>
                Use the SpaceBar or Right Trigger to fire laser or fire special when both are 100%
              </li>
              <br />
              <li className='small'>
                Use the P key or Start on controller to pause game
              </li>
              <br />
              <li className='small'>
                When ten enemies cross the Earth's boundaries it will be destroyed by Trump's forces... 
              </li>
              <br />
              <li className='small'>
                You can practice moving your ship and firing here...
              </li>
              <LinkBtn
                className='btn btn-dark'
                text='START GAME'
                to='/game'
              />
            </ul>
          </CenteredColumn>
          <Earth />
        </Map>
    </div>
  );
};

export default Instructions;