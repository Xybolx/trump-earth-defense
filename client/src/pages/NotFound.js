import React from 'react';
import Audio from '../features/audio';
import trainMP3 from '../imgs/train.mp3';
import LinkBtn from '../button/LinkBtn';
import Title from '../features/title';
import PageContainer from '../features/pageContainer/PageContainer';
import TitleImg from '../features/titleImg';

const NotFound = () => {

    return (
        <PageContainer>
            <Audio id='train' src={trainMP3} playbackRate={1} />
            <TitleImg />
            <Title 
                text='* 404 Page Not Found *' 
                subText={`"It's China's fault this URL doesn't go anywhere..."`} 
            />
            <div className='button-wrapper mt-5'>
                <LinkBtn
                    className='btn btn-link'
                    text='TITLE SCREEN'
                    to='/'
                />
                <LinkBtn
                    className='btn btn-link'
                    text='START GAME'
                    to='/game'
                />
            </div>
        </PageContainer>
    );
};

export default NotFound;
