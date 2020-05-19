import React, { useState } from 'react';
import Gamepad from '../features/gamepad/Gamepad';
import GamepadConnected from '../features/gamepad/GamepadConnected';

const useGamepad = (handleLaserFire, dispatchMove) => {

    const [connected, setConnected] = useState(false);

    const connectHandler = gamepadIndex => {
      setConnected(true);
        console.log(`Gamepad ${gamepadIndex + 1} connected !`);
      };
     
    const disconnectHandler = gamepadIndex => {
      setConnected(false);
        console.log(`Gamepad ${gamepadIndex + 1} disconnected !`);
      };
    
    const handleMoveUp = () => {
      return dispatchMove && dispatchMove('NORTH');
    };

    const handleMoveDown = () => {
      return dispatchMove && dispatchMove('SOUTH');
    };
    
    const buttonDownHandler = buttonName => {
      console.log(buttonName, 'down');
    };
    
    const buttonUpHandler = buttonName => {
      console.log(buttonName, 'up');
    };

    const buttonChangeHandler = (buttonName, down) => {
      console.log(buttonName, down);
    };
    
    const axisChangeHandler = (axisName, value, previousValue) => {
        if (value > 0 && axisName === "LeftStickY") {

          console.log(axisName, value, previousValue);
        }

        if (value < 0 && axisName === "LeftStickY") {
          console.log(axisName, value, previousValue);
        }
    };

    const gamepadConnected = <GamepadConnected connected={connected} />

    const gamepad = <Gamepad
                        onConnect={connectHandler}
                        onDisconnect={disconnectHandler}
                        onButtonDown={buttonDownHandler}
                        onButtonUp={buttonUpHandler}
                        onButtonChange={buttonChangeHandler}
                        onAxisChange={axisChangeHandler}
                        onA={() => { }}
                        onB={() => { }}
                        onX={() => { }}
                        onY={() => { }}
                        onStart={() => { }}
                        onBack={() => { }}
                        onLT={() => { }}
                        onRT={handleLaserFire}
                        onLB={() => { }}
                        onRB={() => { }}
                        onLS={() => { }}
                        onRS={() => { }}
                        onUp={handleMoveUp}
                        onDown={handleMoveDown}
                        onLeft={() => { }}
                        onRight={() => { }}>
                    </Gamepad>

    return { gamepad, gamepadConnected };
};

export default useGamepad;
