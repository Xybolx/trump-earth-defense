import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { MAP_WIDTH, LASER_WIDTH } from '../../config/constants';
import useEventListener from '../../hooks/useEventListener';
import useInterval from '../../hooks/useInterval';
import useGamepad from '../../hooks/useGamepad';
import laserMP3 from './laser.mp3';
import specialMP3 from './special.mp3';
import { dispatchMove } from '../player/movement';
import PausedContext from '../../context/paused/PausedContext';

const Laser = forwardRef((props, laser) => {

    const { charge, setCharge, special, setSpecial, setIsFlying, setVisibility, setPosition, isFlying, position, visibility, handleSpecialFire } = props;

    const { paused, setPaused } = useContext(PausedContext);

    const togglePaused = useCallback(() => {
        setPaused(!paused);
    }, [paused, setPaused]);

    // function handling laser fire
    const handleLaserFire = useCallback(() => {

        const specialFire = charge === 3 && special >= 5;

        const regularFire = charge === 3 && special < 5;

        switch (true) {
            case specialFire && !paused:
                const specialSound = new Audio(specialMP3);
                specialSound.play()
                    .then(() => setCharge(0))
                    .then(() => handleSpecialFire())
                    .then(() => setSpecial(0))
                    .catch(err => console.log(err));
                break;
            case regularFire && !paused:
                const laserSound = new Audio(laserMP3);
                laserSound.volume = .75;
                laserSound.play()
                    .then(() => setIsFlying(true))
                    .then(() => setVisibility('visible'))
                    .then(() => setCharge(0))
                    .catch(err => console.log(err));
                break;
            default:
                break;
        }
        
    }, [setCharge, setIsFlying, setVisibility, handleSpecialFire, special, setSpecial, charge, paused]);

    const { gamepad } = useGamepad(handleLaserFire, dispatchMove, togglePaused);

    const handleLaserReset = () => {
        setPosition(0);
        setIsFlying(false);
        setVisibility('hidden');
    };
    
    // useCallback handler
    const handleKeyDown = useCallback(({ key }) => {
        switch(true) {
            case key === ' ' && !paused:
                return handleLaserFire();
            case key === 'ArrowUp' && !paused:
                return dispatchMove && dispatchMove('NORTH');
            case key === 'ArrowDown' && !paused:
                return dispatchMove && dispatchMove('SOUTH');
            case key === 'p':
                return togglePaused();
            default:
                console.log(key);
        }
    }, [handleLaserFire, togglePaused, paused]);

    // useCallback handler
    const handleTouch = useCallback(() => {
            return handleLaserFire();
    }, [handleLaserFire]);
    
    // custom hook that adds an event listener and cleans up after itself 
    useEventListener('keydown', handleKeyDown, document);

    // custom hook that adds an event listener and cleans up after itself 
    useEventListener('touchend', handleTouch, document);

    // custom hook that sets interval and cleans up after itself
    useInterval(() => {
        const mapBounds = MAP_WIDTH - LASER_WIDTH;
        const observingMapBounds = position >= 0 && position <= mapBounds;
        switch (true) {
            case observingMapBounds:
                setPosition(position => position + 50);
                break;
            default:
                handleLaserReset();
                setSpecial(0);
        }
    }, isFlying ? 25 : null);

    // custom hook that sets interval and cleans up after itself
    useInterval(() => {
        setCharge(charge => charge + 1);
    }, charge < 3 ? 500 : null);

    useEffect(() => {
        if (paused) {
            setIsFlying(false);
        }
    }, [paused, setIsFlying]);

    return (
            <div
                id='laser'
                className='laser'
                ref={laser}
                style={{
                    zIndex: 0,
                    position: 'relative',
                    left: position,
                    top: 70,
                    visibility: visibility,
                    background: 'repeating-linear-gradient(red, tomato, whitesmoke, tomato, red)',
                    borderRadius: '10%',
                    height: 10,
                    width: 50,
                    border: '1px dotted yellow'
                }}>
                {gamepad}
        </div>
    );
});

// function mapStateToProps(state) {
//     return {
//         ...state.laser
//     };  
// };

export default Laser;