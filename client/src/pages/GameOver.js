import React, { useEffect, useContext } from 'react';
import Title from '../features/title';
import ModalBtn from '../button/ModalBtn';
import LinkBtn from '../button/LinkBtn';
import SubmitBtn from '../button/SubmitBtn';
import ScoresModal from '../features/modal/ScoresModal';
import fakeMP3 from '../features/modal/fake.mp3';
import richMP3 from '../features/enemy/rich.mp3';
import outMP3 from '../imgs/out.mp3';
import TitleImg from '../features/titleImg';
import PageContainer from '../features/pageContainer/PageContainer';
import useForm from '../hooks/useForm';
import API from '../utils/API';
import ScoresContext from '../context/score/ScoreContext';

const GameOver = () => {

    const { score } = useContext(ScoresContext);

    const { values, handleChange, handleClearForm } = useForm({
        initials: ""
    });

    const { initials } = values;

    const handleSubmit = ev => {
        ev.preventDefault();
        const data = {
            score: score,
            initials: initials
        }
        API.saveScore(data)
            .then(res => handleClearForm())
            .catch(err => console.log(err));
    };

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
            <form onSubmit={handleSubmit} className='col-md-6 offset-md-3 container'>
                <div className="form-group">
                    <label htmlFor="initials">Enter Initials</label>
                    <input className="form-control text-center" id="initials" name="initials" value={initials || ""} onChange={handleChange} required />
                </div>
                <SubmitBtn 
                    className='btn btn-dark'
                    text='Submit'
                 />
            </form>
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
