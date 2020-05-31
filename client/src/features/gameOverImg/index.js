import React, { useState } from 'react';
import earthPNG from '../earth/earth.png';
import splodeGIF from '../enemy/splode.gif';
import splodeMP3 from '../enemy/splode.mp3';
import TitleImg from '../titleImg';
import useTimeout from '../../hooks/useTimeout';

const GameOverImg = () => {

    const [loaded, setLoaded] = useState(false);

    const [imgSRC, setImgSRC] = useState({
        src: earthPNG,
        height: 400,
        width: 400
    });

    useTimeout(() => {
        setImgSRC({
            src: splodeGIF,
            height: 400,
            width: 400
        });
    }, 6500);

    useTimeout(() => {
            setLoaded(true);
    }, 7000);

    useTimeout(() => {
        const splode = new Audio(splodeMP3);
        splode.playbackRate = 1;
        splode.play();
    }, 6500);

    return (
        <>
            { !loaded ? 
            <div className='game-over-image'
                style={{
                    left: '35%',
                    position: 'relative',
                    height: imgSRC.height,
                    width: imgSRC.width,
                    textAlign: 'center',
                    backgroundImage: `url('${imgSRC.src}')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: 'center',
                    backgroundPositionX: 'center',
                }}>
            </div> : <TitleImg />
            }
        </>
    );
};

export default GameOverImg;
