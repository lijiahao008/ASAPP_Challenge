import * as APIUtil from '../util/conversation_api_utils'

export const RECEIVE_CURRENT_CONVERSATION = "RECEIVE_CURRENT_CONVERSATION";
export const LOADING_CURRENT_CONVERSATION = "LOADING_CURRENT_CONVERSATION";
export const RECEIVE_ALL_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS";
export const LOADING_ALL_CONVERSATIONS = "LOADING_ALL_CONVERSATIONS";


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
  // return APIUtil.fetchConversation(id)
  // .then(conversation => dispatch(receiveCurrentConversation(conversation)))
  const conversation = APIUtil.fetchConversation(id);
  dispatch(receiveCurrentConversation(conversation));
};

export const fetchAllConversations = () => dispatch => {
  dispatch(loadingAllConversations());
  // return APIUtil.fetchAllConversations()
  // .then(conversations => dispatch(receiveAllConversations(conversations)))
  //this should call ajax call and use the promise to dispatch the other function.
  const conversations = APIUtil.fetchAllConversations();
  dispatch(receiveAllConversations(conversations));
};
