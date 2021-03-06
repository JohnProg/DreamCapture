import {RECEIVE_ALL_DREAMS} from '../actions/dream_actions';

const DreamsReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DREAMS:
      newState = action.dreams;
      return newState;
    default:
      return state;
  }
};

export default DreamsReducer;
