import React, { useEffect } from 'react';
import rudeMP3 from './rude.mp3';
import congratsMP3 from './congrats.mp3';
import quietMP3 from './quiet.mp3';
import rocketMP3 from './rocket.mp3';
import wallMP3 from './wall.mp3';
import trumpTalkGIF from './trump-talk.gif';

const Alert = props => {

    const { alert, setAlert } = props;

    useEffect(() => {

        const rude = new Audio(rudeMP3);
        const congrats = new Audio(congratsMP3);
        const quiet = new Audio(quietMP3);
        const rocket = new Audio(rocketMP3);
        const wall = new Audio(wallMP3);

        const insults = [rude, congrats, quiet, rocket, wall];
        const indexOfInsult = Math.floor(Math.random() * insults.length);
        const randomInsult = insults[indexOfInsult];

        switch (true) {
        case alert.isOpen && indexOfInsult === 0:
            randomInsult.play();
            const timer = setTimeout(setAlert({ message: `"Don't be rude!!!"` }), 500);
            return () => clearTimeout(timer);
        case alert.isOpen && indexOfInsult === 1:
            randomInsult.play();
            const timer2 = setTimeout(setAlert({ message: `"Congratulations!!!"` }), 500);
            return () => clearTimeout(timer2);
        case alert.isOpen && indexOfInsult === 2:
            randomInsult.play();
            const timer3 = setTimeout(setAlert({ message: `"Quiet..., quiet!!!"` }), 500);
            return () => clearTimeout(timer3);
        case alert.isOpen && indexOfInsult === 3:
            randomInsult.play();
            const timer4 = setTimeout(setAlert({ message: `"Little rocket man!!!"` }), 500);
            return () => clearTimeout(timer4);
        case alert.isOpen && indexOfInsult === 4:
            randomInsult.play();
            const timer5 = setTimeout(setAlert({ message: `"The wall just got 10ft taller!"` }), 500);
            return () => clearTimeout(timer5);
        default:
            return;
            
        }
    }, [alert, setAlert])

    return (
        <span
            className='alert'  
            style={{
                display: !alert.isOpen ? 'block' : 'none',
                position: 'absolute',
                height: 60,
                width: 500,
                zIndex: 3
            }}>
            <div style={{ position: 'relative' }}>
                <span className='alert-body' style={{ position: 'absolute', fontSize: 10, textTransform: 'uppercase' }}>
                    <img className='alert-img' height='60px' width='60px' src={trumpTalkGIF} alt='' />
                    <span className='alert-msg'>{alert.message || `"I can do whatever the hell I want!"`}</span>
                </span> 
            </div>
        </span>
    );
};

export default Alert;
