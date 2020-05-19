import store from '../../config/store';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';

export default function handleEnemyMovement(enemy) {

    const getNewPosition = action => {
        const oldPos = store.getState().enemy.position;
        switch (action) {
          case 'ADVANCE':
            return store.dispatch({
                type: 'MOVE_ENEMY',
                payload: {
                    position: oldPos - SPRITE_SIZE
                }
            }); 
          default:
              return console.log(action);
        }
    };

    const observeBoundaries = (oldPos, newPos) => {
               return newPos >= 0 && newPos <= MAP_HEIGHT - SPRITE_SIZE &&
                      newPos >= 0 && newPos <= MAP_WIDTH - SPRITE_SIZE ?
               newPos : oldPos;
    };

    return enemy;

};