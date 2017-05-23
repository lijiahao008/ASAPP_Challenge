import { RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_CURRENT_CONVERSATION } from '../actions/conversation_actions';
import { getObject } from '../util/selectors';
import merge from 'lodash/merge';


const CurrentConversationReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type){
    case RECEIVE_CURRENT_CONVERSATION:
      return Object.assign(action.conversation);
    case RECEIVE_MESSAGE:
      const id = getObject(action.message).conversation_id;
      if (id === state.id) {
        return merge({}, state, {messages: action.message});
      }
    default:
      return state;
  }
};

export default CurrentConversationReducer;
