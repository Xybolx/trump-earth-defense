import React, { useEffect, useContext, useState } from 'react';
import AudioPlayer from '../features/audio';
import fakeMP3 from '../features/modal/fake.mp3';
import hailMP3 from '../imgs/hail.mp3';
import LinkBtn from '../button/LinkBtn';
import ModalBtn from '../button/ModalBtn';
import ScoresModal from '../features/modal/ScoresModal';
import Title from '../features/title';
import GameOverContext from '../context/gameOver/GameOverContext';
import PageContainer from '../features/pageContainer/PageContainer';
import TitleImg from '../features/titleImg';
import API from '../utils/API';
import StartBtn from '../button/StartBtn';

const Home = () => {

    const [scores, setScores] = useState([]);

    const [startPressed, setStartPressed] = useState(false);

    const { setGameOver } = useContext(GameOverContext);

    useEffect(() => {
        API.getScores()
            .then(res => setScores(res.data));
    }, []);

    const playMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };

    const pressStart = () => {
        setStartPressed(true);
    };

    useEffect(() => {
        setGameOver(false);
    }, [setGameOver]);

    return (
        <PageContainer>
            <AudioPlayer id='hail' src={hailMP3} playbackRate={.30} />
            <TitleImg />
            <ScoresModal scores={scores} />
            <Title 
                text='Trump Earth Defense' 
                subText='Ready To Make Earth Great Again?' 
            />
            <div style={{ display: !startPressed ? 'none' : 'block' }} className='button-wrapper mt-5'>
                    <LinkBtn
                        className='btn btn-dark'
                        text='START GAME'
                        to='/instructions'/>
                    <ModalBtn
                        className='btn btn-dark'
                        text='HIGH SCORES'
                        onClick={playMP3}
                        dataToggle="modal" 
                        dataTarget="#scoresModal"/>
            </div>
            <div style={{ display: !startPressed ? 'block' : 'none' }}>
                <StartBtn
                    className='btn btn-dark'
                    text='START'
                    onClick={pressStart}/>
            </div>
        </PageContainer>
    );
};

export default Home;
