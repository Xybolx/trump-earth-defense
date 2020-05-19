import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import earthPNG from '../earth/earth.png';
import trumpKissPNG from '../alert/trump-kiss.png';
import surprisePNG from '../enemy/surprise.png';
import trumpPNG from '../enemy/trump.png';
import pukePNG from '../enemy/puke.png';
import flagPNG from '../../imgs/flag.png';

const TitleImg = () => {

    const [imgSRC, setImgSRC] = useState({
        src: trumpKissPNG,
        height: 180,
        width: 180
    });

    useInterval(() => {
        setImgSRC({
            src: surprisePNG,
            height: 150,
            width: 150
        });
    }, 2000);

    useInterval(() => {
        setImgSRC({
            src: trumpKissPNG,
            height: 180,
            width: 180
        });
    }, 4000);

    useInterval(() => {
        setImgSRC({
            src: trumpPNG,
            height: 180,
            width: 180
        });
    }, 6000);

    useInterval(() => {
        setImgSRC({
            src: pukePNG,
            height: 180,
            width: 180
        });
    }, 8000);

    return (
        <div className='title-image'
            style={{
            left: '35%',
            position: 'relative',
            height: 400,
            width: 400,
            textAlign: 'center',
            backgroundImage: `url('${earthPNG}'), url('${flagPNG}')`, 
            backgroundSize: '225px, contain',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            backgroundPositionX: 'center',
        }}>
            <img 
                src={imgSRC.src}   
                alt='' 
                className='img-fluid'
                height={imgSRC.height}
                width={imgSRC.width}
                style={{
                    position: 'relative',
                    top: '25%',
                    mixBlendMode: 'lighten'
                }} 
            />
        </div>
    );
};

export default TitleImg;
