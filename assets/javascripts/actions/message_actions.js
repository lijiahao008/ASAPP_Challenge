import * as APIUtil from '../util/message_api_utils'

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

export const LOADING_ALL_MESSAGES = "LOADING_ALL_MESSAGES";

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const loadingAllMessages = () => ({
  type: LOADING_ALL_MESSAGES
});

export const fetchMessages = (id) => dispatch => {
  dispatch(loadingAllMessages());
  return APIUtil.fetchMessages(id)
  .then(messages => dispatch(receiveAllMessages(messages)))
};
