import React from 'react';
import ModalBtn from '../../button/ModalBtn';

const ScoresModal = () => {
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
                                    <th className="score-table-head">#</th>
                                    <th className="score-table-head">Initials</th>
                                    <th className="score-table-head">Score</th>
                                </tr>
                                <tr className='text-white'>
                                    <th scope="row">1</th>
                                    <td>DJT</td>
                                    <td><i className="fas fa-infinity" /></td>
                                </tr>
                            </thead>
                            <tbody style={{ color: "yellow" }}>
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