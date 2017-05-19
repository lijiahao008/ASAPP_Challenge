import { RECEIVE_ALL_CONVERSATIONS, LOADING_ALL_CONVERSATIONS, RECEIVE_CURRENT_CONVERSATION, LOADING_CURRENT_CONVERSATION } from '../actions/conversation_actions';

const initialState = {
  loadingAllConversations: false,
  loadingCurrentConversation: false
};

const LoadingReducer = (state=initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case LOADING_ALL_CONVERSATIONS:
      return Object.assign({}, state, { loadingAllConversations: true });
    case LOADING_CURRENT_CONVERSATION:
      return Object.assign({}, state, { loadingCurrentConversation: true });
    case RECEIVE_ALL_CONVERSATIONS:
    case RECEIVE_CURRENT_CONVERSATION:
      return initialState;
    default:
      return state;
  }
};

export default LoadingReducer;
