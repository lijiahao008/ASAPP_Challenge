import * as APIUtil from '../util/conversation_api_utils'

export const RECEIVE_CURRENT_CONVERSATION = "RECEIVE_CURRENT_CONVERSATION";
export const LOADING_CURRENT_CONVERSATION = "LOADING_CURRENT_CONVERSATION";
export const RECEIVE_ALL_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS";
export const LOADING_ALL_CONVERSATIONS = "LOADING_ALL_CONVERSATIONS";
export const MARK_AS_READ = "MARK_AS_READ";

export const markAsRead = id => ({
  type: MARK_AS_READ,
  id
});

export const receiveCurrentConversation = conversation => ({
  type: RECEIVE_CURRENT_CONVERSATION,
  conversation
});

export const loadingCurrentConversation = () => ({
  type: LOADING_CURRENT_CONVERSATION
});


export const receiveAllConversations = conversations => ({
  type: RECEIVE_ALL_CONVERSATIONS,
  conversations
});


export const loadingAllConversations = () => ({
  type: LOADING_ALL_CONVERSATIONS
});


export const fetchCurrentConversation = (id) => dispatch => {
  dispatch(loadingCurrentConversation());
  return APIUtil.fetchConversation(id)
  .then(conversation => dispatch(receiveCurrentConversation(conversation)))
};

export const fetchAllConversations = () => dispatch => {
  dispatch(loadingAllConversations());
  return APIUtil.fetchAllConversations().then(conversations => dispatch(receiveAllConversations(conversations)))
};
