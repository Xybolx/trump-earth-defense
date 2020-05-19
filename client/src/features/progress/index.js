import React, { useContext } from 'react';
import ScoreContext from '../../context/score/ScoreContext';
import ProgressBar from '../progressBar';

const Progress = props => {

    const { shield, charge, special, children } = props;

  const { score } = useContext(ScoreContext);

    return (
        <span style={{ marginTop: 10, marginLeft: 20 }}>
            <span style={{ position: 'relative', color: 'yellow', paddingRight: 5 }}>
                SCORE <span style={{ color: 'whitesmoke' }}>{score}</span>
            </span>&nbsp;
            <ProgressBar value={shield} className='fas fa-globe-americas'/>
            &nbsp;<span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-bolt' /><span className="progress-text">{`${Math.floor(charge / 3 * 100)}%`}</span>
            <progress style={{ outline: charge === 3 ? 'solid lawngreen' : charge === 2 ? 'solid yellow' : charge === 1 ? 'solid red' : 'solid red', position: 'relative' }} max={3} value={charge} />
            &nbsp;<span style={{ color: 'yellow' }} data-fa-transform="up-2" className='fas fa-star' /><span className="progress-text" style={{ position: 'relative' }}>{`${special / 5 * 100}%`}</span>
            <progress style={{ outline: special >= 5 ? 'solid lawngreen' : special >= 3 ? 'solid yellow' : special <= 1 ? 'solid red' : 'solid red', position: 'relative' }} max={5} value={special} />
            { children }
        </span>
    );
};

export default Progress;