import * as APIUtil from '../util/message_api_utils'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const TYPING_MESSAGE = "TYPING_MESSAGE";


export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const typingMessage = () => ({
  type: TYPING_MESSAGE
});


export const sendMessage = (message) => dispatch => {
  return APIUtil.sendMessage(message)
  .then(message => dispatch(receiveMessage(message)))
};
