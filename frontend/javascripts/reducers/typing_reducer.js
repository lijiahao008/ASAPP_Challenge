import { START_TYPING, STOP_TYPING } from '../actions/message_actions';
import merge from 'lodash/merge';


const TypingReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type){
    case START_TYPING:
    case STOP_TYPING:
      let newState = state;
      return merge({}, newState, {[status.user_id]: action.status});
    default:
      return state;
  }
};

export default TypingReducer;
