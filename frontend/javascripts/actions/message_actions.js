import * as APIUtil from '../util/message_api_utils'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const START_TYPING = "START_TYPING";
export const STOP_TYPING = "STOP_TYPING";


export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const startTyping = (status) => ({
  type: START_TYPING,
  status
});

export const stopTyping = (status) => ({
  type: STOP_TYPING,
  status
});


export const sendMessage = (message) => dispatch => {
  return APIUtil.sendMessage(message)
  .then(message => dispatch(receiveMessage(message)))
};

export const beginTyping = (id) => dispatch => {
  return APIUtil.startTyping(id);
};

export const finishTyping = (id) => dispatch => {
  return APIUtil.stopTyping(id);
};
