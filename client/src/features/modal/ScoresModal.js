import React, { useEffect, useContext } from 'react';
import useAPI from '../../hooks/useAPI';
import ScoresContext from '../../context/scores/ScoresContext';
import ModalBtn from '../../button/ModalBtn';

const ScoresModal = props => {

    const { lastScore } = props;

    const { scores } = useContext(ScoresContext);

    const { getScores } = useAPI();

    // const getScores = useCallback(() => {
    //     API.getScores()
    //         .then(res => setScores(res.data))
    //         .catch(err => console.log(err));
    // }, [setScores]);

    useEffect(() => {
        getScores();
    }, [getScores]);

    const mappedScores = scores && scores.map((score, index) => (
        <tr className='text-light' key={score._id}>
            <th className='text-danger' scope="row">{index + 2}</th>
            <td className='initials-data'>{score.initials}</td>
            <td className='text-info'>{score.score}</td>
        </tr>
    ));

    // const filteredScores = scores && scores.filter(score => (
    //     score >= lastScore.score
    // ));

    // useEffect(() => {
    //     setRankList(filteredScores);
    // }, []);

    return (
        <div className="modal fade" id="scoresModal" tabIndex="-1" role="dialog" aria-labelledby="scoresModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title" id="scoresModalCenterTitle">{lastScore && lastScore ? `${lastScore.initials} ${lastScore.score} ` : 'Fake High Scores'}</h5>
                        <button type="button" className="close text-warning" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-borderless">
                            <thead className="th-row">
                                <tr>
                                    <th className="score-table-head">RANK</th>
                                    <th className="score-table-head">INITIALS</th>
                                    <th className="score-table-head">SCORE</th>
                                </tr>
                                <tr className='text-light'>
                                    <th className='text-danger' scope="row">1</th>
                                    <td>DJT</td>
                                    <td><i className="fas fa-infinity text-info" /></td>
                                </tr>
                            </thead>
                            <tbody>
                                {mappedScores}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <ModalBtn 
                            className="btn btn-dark"
                            text="Close" 
                            dataToggle="modal" 
                            dataTarget="#scoresModal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoresModal;