import React from 'react';
import ModalBtn from '../../button/ModalBtn';

const AlertModal = ({ playerScore, scores, isOpen }) => {

    const filteredScores = scores && scores.filter(score => (score > playerScore));

    const mappedScores = filteredScores.map((score, index) => (
        <tr key={score._id}>
            <th className='text-light' scope="row">{index + 1}</th>
            <td className='text-light'>{score.initials}</td>
            <td className='text-light'>{score.score}</td>
        </tr>
    ));

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }} className="modal fade" id="alertModal" tabIndex="-1" role="dialog" aria-labelledby="alertModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="alertModalCenterTitle">Fake High Scores</h5>
                        <button type="button" className="close text-warning" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-borderless">
                            <thead className="th-row">
                                <tr>
                                    <th className="score-table-head">#</th>
                                    <th className="score-table-head">Initials</th>
                                    <th className="score-table-head">Score</th>
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
                            dataTarget="#alertModal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;