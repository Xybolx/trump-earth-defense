import React, { useEffect, useContext, useState, useRef } from 'react';
import Title from '../features/title';
import ModalBtn from '../button/ModalBtn';
import LinkBtn from '../button/LinkBtn';
import SubmitBtn from '../button/SubmitBtn';
import ScoresModal from '../features/modal/ScoresModal';
import fakeMP3 from '../features/modal/fake.mp3';
import outMP3 from '../imgs/out.mp3';
import GameOverImg from '../features/gameOverImg';
import PageContainer from '../features/pageContainer/PageContainer';
import useForm from '../hooks/useForm';
import API from '../utils/API';
import ScoreContext from '../context/score/ScoreContext';
import useTimeout from '../hooks/useTimeout';
import AlertModal from '../features/modal/AlertModal';
import useValidate from '../hooks/useValidate';

const GameOver = () => {

    const inputRef = useRef();

    const [scores, setScores] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { score, setScore } = useContext(ScoreContext);

    const { values, handleChange, handleClearForm } = useForm({
        initials: ""
    });

    const { initials } = values;

    const [errors, resetValidate] = useValidate(initials);

    const { isValidInitials } = errors;

    const handleSubmit = ev => {
        ev.preventDefault();
        const data = {
            score: score,
            initials: initials
        }
        API.saveScore(data)
            .then(res => handleClearForm())
            .then(() => setScore(0))
            .then(() => resetValidate())
            .then(() => setIsSubmitted(true))
            .catch(err => console.log(err));
    };

    const playFakeMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };

    useEffect(() => {
        const out = new Audio(outMP3);
        out.play();
    }, []);

    useEffect(() => {
        API.getScores()
            .then(res => setScores(res.data));
    }, [scores]);

    useTimeout(() => {
        setIsOpen(true);
    }, 15000);

    useEffect(() => {
       inputRef.current.focus();
    }, []);

    return (
        <PageContainer>
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
                        Must be at least 2/no more than 3 characters!
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
            <AlertModal isOpen={isOpen} playerScore={score} scores={scores} />
            <ScoresModal scores={scores} setScores={setScores} />
        </PageContainer>
    );
};

export default GameOver;
