import React, { useState } from 'react';
import ModalBtn from '../button/ModalBtn';
import LinkBtn from '../button/LinkBtn';
import ScoresModal from '../features/modal/ScoresModal';
import fakeMP3 from '../features/modal/fake.mp3';
import GameOverImg from '../features/gameOverImg';
import PageContainer from '../features/pageContainer/PageContainer';
import Form from '../features/form';

const GameOver = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [loaded, setLoaded] = useState(false);

    const playFakeMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };

    return (
        <PageContainer>
            <GameOverImg loaded={loaded} setLoaded={setLoaded} />
            <Form isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
            <div style={{ display: !isSubmitted ? 'none' : 'block' }}>
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
