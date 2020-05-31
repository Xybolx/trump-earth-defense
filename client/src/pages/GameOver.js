import React, { useEffect, useContext, useState, useRef } from 'react';
import Title from '../features/title';
import ModalBtn from '../button/ModalBtn';
import LinkBtn from '../button/LinkBtn';
import SubmitBtn from '../button/SubmitBtn';
import ScoresModal from '../features/modal/ScoresModal';
import fakeMP3 from '../features/modal/fake.mp3';
import trainMP3 from '../imgs/train.mp3';
import GameOverImg from '../features/gameOverImg';
import PageContainer from '../features/pageContainer/PageContainer';
import useForm from '../hooks/useForm';
import useAPI from '../hooks/useAPI';
import ScoreContext from '../context/score/ScoreContext';
import useValidate from '../hooks/useValidate';

const GameOver = () => {

    const inputRef = useRef();

    const [lastScore, setLastScore] = useState({});
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { score, setScore } = useContext(ScoreContext);

    const { values, handleChange, handleClearForm } = useForm();

    const { initials } = values;

    const [errors, resetValidate] = useValidate(initials);

    const { isValidInitials } = errors;

    const postScoreSave = () => {
        handleClearForm();
        setScore(0);
        resetValidate();
        setIsSubmitted(true);
    };

    const { saveScore } = useAPI(postScoreSave);

    const handleSubmit = ev => {
        ev.preventDefault();
        const scoreData = {
            score: score,
            initials: initials
        }
        setLastScore(scoreData);
        saveScore(scoreData);
    };

    const playFakeMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };

    useEffect(() => {
        const train = document.getElementById('train');
        train.play();
    }, []);

    useEffect(() => {
       inputRef.current.focus();
    }, []);

    return (
        <PageContainer>
            <audio id='train' src={trainMP3} />
            <GameOverImg />
            <Title 
                text={`GAME OVER`} 
                pText='Good job jerk. Trump blew up the Earth!' 
            />
            <form style={{ display: isSubmitted ? 'none' : 'block' }} onSubmit={handleSubmit} className='col-md-6 offset-md-3 container'>
                <div className="form-group">
                    <label 
                        className='small' 
                        style={{ color: 'yellow' }}
                        htmlFor="initials">
                        Enter Initials
                    </label>
                    <div
                        className='small' 
                        style={
                        initials && !isValidInitials ? 
                        { display: "block", color: "tomato" } :
                        { display: "none" }}>
                        Must be 2-3 characters!
                    </div>
                    <div 
                        className='small'
                        style={
                        initials && isValidInitials ? 
                        { visibility: "visible", color: "lawngreen" } : 
                        { visibility: "hidden", }}>
                        Valid initials!
                    </div>
                    <input 
                        ref={inputRef} 
                        className="form-control text-center" 
                        id="initials" 
                        name="initials" 
                        value={initials || ""} 
                        onChange={handleChange} 
                        required 
                        maxLength={3} 
                        minLength={2} />
                </div>
                <SubmitBtn 
                    className='btn btn-dark'
                    text='SUBMIT'
                    dataToggle="modal" 
                    dataTarget={ !isSubmitted ? "#scoresModal" : ""}
                 />
            </form>
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
            <ScoresModal lastScore={lastScore} />
        </PageContainer>
    );
};

export default GameOver;
