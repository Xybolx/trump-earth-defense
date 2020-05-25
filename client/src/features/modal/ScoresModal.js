import React from 'react';
import ModalBtn from '../../button/ModalBtn';

const ScoresModal = ({ scores }) => {

    const mappedScores = scores && scores.map((score, index) => (
        <tr className='text-light' key={score._id}>
            <th className='text-danger' scope="row">{index + 2}</th>
            <td className='initials-data'>{score.initials}</td>
            <td className='text-info'>{score.score}</td>
        </tr>
    ));

    return (
        <div className="modal fade" id="scoresModal" tabIndex="-1" role="dialog" aria-labelledby="scoresModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="scoresModalCenterTitle">Fake High Scores</h5>
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