import React from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';

const PageContainer = ({ children }) => {
    return (
        <div 
            className='container-fluid'
            style={{
                position: 'relative',
                width: MAP_WIDTH,
                height: MAP_HEIGHT,
                margin: '10px auto',
                textAlign: 'center'
            }}>
                { children }
        </div>
    );
};

export default PageContainer;
