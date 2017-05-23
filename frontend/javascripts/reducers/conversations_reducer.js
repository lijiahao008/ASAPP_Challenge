import { RECEIVE_ALL_CONVERSATIONS, MARK_AS_READ } from '../actions/conversation_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const ConversationsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch (action.type){
    case RECEIVE_ALL_CONVERSATIONS:
      return Object.assign(newState, action.conversations.conversations);
    case MARK_AS_READ:
      newState[action.id].is_read = true;
      return Object.assign({}, newState);
    case RECEIVE_MESSAGE:
      const message = action.message;
      delete newState[message.conversation_id]
      const newConversation = {[message.conversation_id] : {
        id: message.conversation_id,
        subject: message.subject,
        last_message: message.body,
        last_sender_pic: message.sender_pic,
        updated_at: message.created_at
      }}
      return merge({}, newState, newConversation);
    default:
      return state;
  }
};

export default ConversationsReducer;
