import * as APIUtil from '../util/message_api_utils'

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const fetchMessages = (id) => dispatch => (
  APIUtil.fetchMessages(id)
  .then(messages => dispatch(receiveAllMessages(messages)))
);
