import React, { useRef, useContext, useEffect } from 'react';
import SubmitBtn from '../../button/SubmitBtn';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';
import useAPI from '../../hooks/useAPI';
import ScoreContext from '../../context/score/ScoreContext';

const Form = props => {

    const { isSubmitted, setIsSubmitted } = props;

    const inputRef = useRef();

    const { score } = useContext(ScoreContext);

    const { values, handleChange, handleClearForm } = useForm();

    const { initials } = values;

    const [errors, resetValidate] = useValidate(initials);

    const { isValidInitials } = errors;

    const postScoreSave = () => {
        handleClearForm();
        resetValidate();
        setIsSubmitted(true);
    };

    const { saveScore, getDateScore } = useAPI(postScoreSave);

    const handleSubmit = ev => {
        ev.preventDefault();
        const scoreData = {
            score: score,
            initials: initials
        }
        switch (true) {
            case initials && isValidInitials:
                saveScore(scoreData);
                getDateScore();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        inputRef.current.focus();
     }, []);

    return (
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
                    required />
            </div>
            <SubmitBtn 
                className='btn btn-dark'
                text='SUBMIT'
                disabled={ !(initials && isValidInitials) }
                dataToggle="modal" 
                dataTarget={ !isSubmitted ? "#scoresModal" : ""} />
        </form>
    )
}

export default Form;
