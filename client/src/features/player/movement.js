import store from '../../config/store';
import { SPRITE_SIZE, MAP_HEIGHT } from '../../config/constants';

export function handleMovement(player) {
    return player;
};

function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
        case 'NORTH':
            return oldPos - MAP_HEIGHT / 10;
        case 'SOUTH':
            return oldPos + MAP_HEIGHT / 10;
        default:
            console.log(direction);
    }
};

function observeBoundaries(oldPos, newPos) {
    return newPos >= 0 && newPos <= MAP_HEIGHT - SPRITE_SIZE ? newPos : oldPos;
};

export function dispatchMove(direction) {
    const oldPos = store.getState().player.position;
    const prevLife = store.getState().player.life;
    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: observeBoundaries(oldPos, getNewPosition(direction)),
            life: prevLife
        }
    });
};

export function dispatchLife() {
    const oldPos = store.getState().player.position;
    const prevLife = store.getState().player.life;
    store.dispatch({
        type: 'DECREMENT_LIFE',
        payload: {
            position: oldPos,
            life: prevLife - 1,
        }
    });
};

// export default handleMovement;