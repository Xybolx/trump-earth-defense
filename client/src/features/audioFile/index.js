import React, { useEffect } from 'react';

const AudioFile = props => {

    const { id, src, playbackRate, isPlaying } = props;

    useEffect(() => {
        if (isPlaying) {
            const fileToPlay = document.getElementById(id);
            fileToPlay.playbackRate = playbackRate;
            fileToPlay.play();
        }
    }, [id, playbackRate, isPlaying]);

    return (
        <audio id={id} src={src} loop />
    );
};

export default AudioFile;
