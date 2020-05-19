import React, { useEffect } from 'react';
import Title from '../features/title';
import ModalBtn from '../button/ModalBtn';
import LinkBtn from '../button/LinkBtn';
import ScoresModal from '../features/modal/ScoresModal';
import fakeMP3 from '../features/modal/fake.mp3';
import richMP3 from '../features/enemy/rich.mp3';
import outMP3 from '../imgs/out.mp3';
import TitleImg from '../features/titleImg';
import PageContainer from '../features/pageContainer/PageContainer';

const GameOver = () => {

    const playFakeMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };

    useEffect(() => {
        const out = new Audio(outMP3);
        const rich = new Audio(richMP3);
        out.playbackRate = .55;
        rich.playbackRate = .80;
        out.play().then(() => {
            return rich.play();
        });
    }, []);

    return (
        <PageContainer>
            <TitleImg />
            <Title 
                text={`GAME OVER`} 
                subText={`"I'M REALLY RICH!"`} 
            />
            <div className='mt-5'>
                <LinkBtn
                    className='btn btn-dark'
                    text='TITLE SCREEN'
                    to='/'
                />
                <ModalBtn
                    className='btn btn-dark'
                    text='HIGH SCORES'
                    onClick={playFakeMP3}
                    dataToggle="modal" 
                    dataTarget="#scoresModal"
                />
            </div>
            <ScoresModal />
        </PageContainer>
    );
};

export default GameOver;
