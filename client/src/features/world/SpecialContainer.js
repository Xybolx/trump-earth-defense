import React from 'react';
import lightningGIF from './lightning3.gif';

const SpecialContainer = props => {

    const { specialFire } = props;

    return (
        <div 
            className="special"
            style={{ 
                position: 'absolute',
                zIndex: 4,
                background: `url('${lightningGIF}')`,
                backgroundSize: 450,
                backgroundRepeat: 'no-repeat',
                height: 450,
                width: '55%', 
                left: 100,
                top: 100,
                transform: 'translateX(100%)',
                display: specialFire ? 'block' : 'none' 
            }}>
        </div>
    );
};

export default SpecialContainer;
