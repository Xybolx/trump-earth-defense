
const initialState = {
    position: 0,
    life: 10
};

const playerReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload
      }
    default:
      return state;
  }
};

export default playerReducer;