import React from 'react';
import AudioFile from '../features/audioFile';
import trainMP3 from '../imgs/train.mp3';
import LinkBtn from '../button/LinkBtn';
import Title from '../features/title';
import PageContainer from '../features/pageContainer/PageContainer';
import TitleImg from '../features/titleImg';

const NotFound = () => {

    return (
        <PageContainer>
            <AudioFile id='train' src={trainMP3} playbackRate={1} />
            <TitleImg />
            {`${window.location.pathname} returned ERROR: 404`}
            <Title 
                text={`*URL Not Found*`} 
                subText={`"It's China's fault ${window.location.pathname} is a dead link!"`} 
            />
            <div className='button-wrapper mt-5'>
                <LinkBtn
                    className='btn btn-dark'
                    text='TITLE SCREEN'
                    to='/'
                />
                <LinkBtn
                    className='btn btn-dark'
                    text='START GAME'
                    to='/game'
                />
            </div>
        </PageContainer>
    );
};

export default NotFound;
