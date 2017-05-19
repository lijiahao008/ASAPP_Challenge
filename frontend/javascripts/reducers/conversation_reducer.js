import { RECEIVE_ALL_CONVERSATIONS } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const ConversationReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch (action.type){
    case RECEIVE_ALL_CONVERSATIONS:
      return Object.assign(newState, action.conversations);
    default:
      return state;
  }
};

export default ConversationReducer;
