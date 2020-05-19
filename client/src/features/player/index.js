import React from 'react';
import { connect } from 'react-redux';
import shipSprite from './ship.png';
import { handleMovement } from './movement';

const Player = props => {

    const { position, children } = props;
    
    return (
            <div
                className='player'
                style={{
                    position: 'relative',
                    zIndex: 1,
                    left: 20,
                    top: position,
                    height: '150px',
                    width: '150px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundImage: `url('${shipSprite}')`
                }}>
                {children}
        </div>
    );
};
    
function mapStateToProps(state) {
    return {
        ...state.player
    };  
};

export default connect(mapStateToProps)(handleMovement(Player));