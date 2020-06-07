import React from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';

const PageContainer = ({ children }) => {
    return (
        <div 
            style={{
                position: 'relative',
                width: MAP_WIDTH,
                height: MAP_HEIGHT,
                textAlign: 'center'
            }}>
                { children }
        </div>
    );
};

export default PageContainer;
