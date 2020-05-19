
const initialState = {
    position: 1200
};

const enemyReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'MOVE_ENEMY':
      return {
        ...action.payload
      }
    default:
      return state;
  }
};

export default enemyReducer;