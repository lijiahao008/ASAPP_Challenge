//Normally this would be the place to write ajax calls to the backend. But for the popurse of this challenge, I only used calls to pusher here.
//
// import Pusher from 'pusher';
//

export const sendMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `api/conversations/${message.conversationId}/reply`,
    data: message
  });
  // This should return an ajax call to the backend server.
  // return message;
};

export const startTyping = () => {
  // return $.ajax({
  //   method: 'POST',
  //   url: `http://www.randomtext.me/api/`,
  //   data: message
  // });
  // This should return an ajax call to the backend server.
};
