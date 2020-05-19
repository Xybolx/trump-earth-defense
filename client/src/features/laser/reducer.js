
const initialState = {
    position: 0,
    isFlying: false,
    visibility: 'hidden'
};

const laserReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIRE_LASER':
      return {
        ...action.payload
      }
    case 'RESET_LASER':
      return {
        ...action.payload
      }
    default:
      return state;
  }
};

export default laserReducer;