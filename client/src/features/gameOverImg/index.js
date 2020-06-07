import React, { useState } from 'react';
import earthPNG from '../earth/earth.png';
import splodeGIF from '../enemy/splode.gif';
import splodeMP3 from '../enemy/splode.mp3';
import TitleImg from '../titleImg';
import Title from '../title';
import trainMP3 from '../../imgs/train.mp3';
import useTimeout from '../../hooks/useTimeout';

const GameOverImg = props => {

    const { loaded, setLoaded } = props;

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
    }, 1000);

    useTimeout(() => {
        const train = document.getElementById('train');
        train.volume = .5;
        train.play();
        setLoaded(true);
    }, 1500);

    useTimeout(() => {
        const splode = new Audio(splodeMP3);
        splode.playbackRate = .8;
        splode.play();
    }, 1000);

    return (
        <>
            <audio id='train' src={trainMP3} />
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
            </div> :
            <div>

                <TitleImg />
                <Title 
                    text={`GAME OVER`}
                    pText='Good job jerk. Trump blew up the Earth!' 
                    />
            </div> }
        </>
    );
};

export default GameOverImg;
