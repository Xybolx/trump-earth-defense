import React from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';

const PageContainer = ({ children }) => {
    return (
        <div 
            className='.col-md-6 .offset-md-3'
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
