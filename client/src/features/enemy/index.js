import React, { useEffect, useCallback, useState, useRef, useContext } from 'react';
import ScoreContext from '../../context/score/ScoreContext';
import { dispatchLife } from '../player/movement';
import useInterval from '../../hooks/useInterval';
import trumpSprite from './trump.png';
import trumpKiss from '../alert/trump-kiss.png';
import trumpSurprise from './surprise.png';
import trumpPuke from './puke.png';
import splodeGIF from './splode.gif';
import splodeMP3 from './splode.mp3';
import richMP3 from './rich.mp3';

const Enemy = props => {

    const { setShield, setSpecial, specialFire, setSpecialFire, laser, isFlying, handleLaserReset, initialPositionX, initialPositionY, children, setAlert } = props;

    const { setScore } = useContext(ScoreContext);

    const enemy = useRef();

    // enemy state
    const [destroyed, setDestroyed] = useState(false);
    const [enemyPositionX, setEnemyPositionX] = useState(initialPositionX);
    const [enemyPositionY, setEnemyPositionY] = useState(initialPositionY)
    const [background, setBackground] = useState('');

    // enemy move tick
    const [tickInterval, setTickInterval] = useState(150);

    useEffect(() => {
      const backgrounds = [trumpKiss, trumpSprite, trumpSurprise, trumpPuke];
      const indexOfBackground = Math.floor(Math.random() * backgrounds.length);
      const randomBackground = backgrounds[indexOfBackground];
      setBackground(randomBackground);
    }, []);

    useEffect(() => {

        const rect1 = laser.current.getBoundingClientRect();
        const rect2 = enemy.current.getBoundingClientRect();
    
        const enemyIntersect = rect1.x < rect2.x + rect2.width &&
                               rect1.x + rect1.width > rect2.x &&
                               rect1.y < rect2.y + rect2.height &&
                               rect1.height + rect1.y > rect2.y;
    
        if (enemyIntersect && isFlying) {
          const splodeSound = new Audio(splodeMP3);
          splodeSound.play();
          setDestroyed(true);
          handleLaserReset();
          setSpecial(special => special + 1)
        }
      }, [handleLaserReset, laser, isFlying, setSpecial]);

    const handleEnemyReset = useCallback(() => {
      const backgrounds = [trumpKiss, trumpSprite, trumpSurprise, trumpPuke];
      const indexOfBackground = Math.floor(Math.random() * backgrounds.length);
      const randomBackground = backgrounds[indexOfBackground];
      if (destroyed) {
          setScore(score => score + 100);
          setDestroyed(false);
          setSpecialFire(false);
        } else if (!destroyed) {
          const rich = new Audio(richMP3);
          rich.play().then(() => {
            setAlert({ message: "I'm really rich!" });
            dispatchLife();
            setShield(shield => shield - 1);
          });
        }
        setEnemyPositionX(initialPositionX);
        setEnemyPositionY(initialPositionY);
        setBackground(randomBackground);
        setTickInterval(tickInterval => tickInterval - 3);
      }, [destroyed, setScore, setShield, setSpecialFire, initialPositionX, initialPositionY, setAlert]);

      const handleSpecialReset = useCallback(() => {
        const splodeSound = new Audio(splodeMP3);
          splodeSound.volume = .50;
          splodeSound.play();
          setSpecial(0);
          setDestroyed(true);
      }, [setSpecial]);

    useEffect(() => {

        if (destroyed) {
          const timer = setTimeout(handleEnemyReset, 500);
          return () => {
            clearTimeout(timer);
          }
        }
      }, [destroyed, handleEnemyReset]);

      useEffect(() => {

        if (specialFire) {
          const timer = setTimeout(handleSpecialReset, 1200);
          return () => {
            clearTimeout(timer);
          }
        }
      }, [handleSpecialReset, specialFire]);

      useInterval(() => {
        const observingMapBounds = enemyPositionX > 0;
        switch (true) {
            case observingMapBounds:
                setEnemyPositionX(enemyPositionX => enemyPositionX - 8);
                break;
            case !observingMapBounds:
                handleEnemyReset();
                break;
            default:
                console.log(destroyed);
        }
    }, !destroyed ? tickInterval : null);

    return (
            <div
                id='enemy'
                className="enemy"
                ref={enemy}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    top: enemyPositionY,
                    left: enemyPositionX,
                    height: '125px',
                    width: '125px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundImage: !destroyed ? `url('${background}')` : `url('${splodeGIF}')`
                }}>
                {children}
        </div>
    );
};

export default Enemy;