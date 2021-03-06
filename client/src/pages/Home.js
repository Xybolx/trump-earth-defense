import React, { useEffect, useContext, useState } from 'react';
import fakeMP3 from '../features/modal/fake.mp3';
import hailMP3 from '../imgs/hail.mp3';
import LinkBtn from '../button/LinkBtn';
import ModalBtn from '../button/ModalBtn';
import ScoresModal from '../features/modal/ScoresModal';
import Title from '../features/title';
import GameOverContext from '../context/gameOver/GameOverContext';
import PageContainer from '../features/pageContainer/PageContainer';
import TitleImg from '../features/titleImg';
import StartBtn from '../button/StartBtn';
import useAPI from '../hooks/useAPI';
import AudioFile from '../features/audioFile';

const Home = () => {

    const { getScores } = useAPI();

    const { setGameOver } = useContext(GameOverContext);
    
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
        getScores();
    }, [getScores]);
    
    const playMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };
    
    const pressStart = () => {
       setIsPlaying(true);
    };

    useEffect(() => {
        setGameOver(false);
    }, [setGameOver]);

    return (
        <PageContainer>
            <AudioFile id='hail' playbackRate={.3} src={hailMP3} isPlaying={isPlaying} />
            <TitleImg />
            <ScoresModal />
            <Title 
                text='Trump Earth Defense' 
                pText='Ready To Make Earth Great Again?' 
            />
            <div style={{ display: !isPlaying ? 'none' : 'block' }} className='button-wrapper mt-3'>
                    <LinkBtn
                        className='btn btn-dark'
                        text='START GAME'
                        to='/instructions' />
                    <ModalBtn
                        className='btn btn-dark'
                        text='HIGH SCORES'
                        onClick={playMP3}
                        dataToggle="modal" 
                        dataTarget="#scoresModal" />
            </div>
            <div style={{ display: !isPlaying ? 'block' : 'none' }}>
                <StartBtn
                    className='btn btn-dark'
                    text='START'
                    onClick={pressStart}/>
            </div>
        </PageContainer>
    );
};

export default Home;
