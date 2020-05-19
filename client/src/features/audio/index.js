import React, { useEffect } from 'react';

const Audio = props => {

    const { id, src, playbackRate } = props;

    useEffect(() => {
        const audioFile = document.getElementById(id);
        audioFile.playbackRate = playbackRate;
        audioFile.play();
    }, [id, playbackRate]);

    return (
        <audio id={id} src={src} loop />
    );
};

export default Audio;
