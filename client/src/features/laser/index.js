import React, { forwardRef, useCallback } from 'react';
import { MAP_WIDTH, LASER_WIDTH } from '../../config/constants';
import useEventListener from '../../hooks/useEventListener';
import useInterval from '../../hooks/useInterval';
import useGamepad from '../../hooks/useGamepad';
import laserMP3 from './laser.mp3';
import specialMP3 from './special.mp3';
import { dispatchMove } from '../player/movement';

const Laser = forwardRef((props, laser) => {

    const { charge, setCharge, special, setSpecial, setIsFlying, setVisibility, setPosition, isFlying, position, visibility, handleSpecialFire } = props;

    // function handling laser fire
    const handleLaserFire = useCallback(() => {

        const specialFire = charge === 3 && special >= 5;

        const regularFire = charge === 3 && special < 5;

        switch (true) {
            case specialFire:
                const specialSound = new Audio(specialMP3);
                specialSound.play()
                    .then(() => setCharge(0))
                    .then(() => handleSpecialFire())
                    .then(() => setSpecial(0))
                    .catch(err => console.log(err));
                break;
            case regularFire:
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
        
    }, [setCharge, setIsFlying, setVisibility, handleSpecialFire, special, setSpecial, charge]);

    const { gamepad } = useGamepad(handleLaserFire, dispatchMove);

    const handleLaserReset = () => {
        setPosition(0);
        setIsFlying(false);
        setVisibility('hidden');
    };
    
    // useCallback handler
    const handleKeyDown = useCallback(({ key }) => {
        switch(key) {
            case ' ':
                return handleLaserFire();
            default:
                console.log(key);
        }
    }, [handleLaserFire]);

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

    return (
            <div
                id='laser'
                className='laser'
                ref={laser}
                style={{
                    position: 'relative',
                    left: position,
                    top: 73,
                    visibility: visibility,
                    background: 'repeating-linear-gradient(tomato, whitesmoke, tomato)',
                    borderRadius: '20%',
                    height: 5,
                    width: 50,
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