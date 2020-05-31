import { useContext, useCallback } from 'react';
import ScoresContext from '../context/scores/ScoresContext';
import axios from 'axios';

const useAPI = cb => {

    const { setScores } = useContext(ScoresContext); 

    const getScores = useCallback(() => {
        axios.get('/api/scores')
            .then(res => setScores(res.data))
            .catch(err => console.log(err));
    }, [setScores]);

    // const getLastScore = useCallback(() => {
    //     axios.get('/api/scores/date')
    //         .then(res => setLastScore(res.data))
    //         .catch(err => console.log(err));
    // }, []);

    const saveScore = scoreData => {
        axios.post('/api/scores', scoreData)
            .then(res => cb())
            .then(() => getScores())
            .catch(err => console.log(err));
    };

    return {
        getScores,
        saveScore,
    }
};

export default useAPI;