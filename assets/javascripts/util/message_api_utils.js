//Normally this would be the place to write ajax calls to the backend. But for the popurse of this challenge, I only used calls to pusher here.

export const fetchMessages = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `http://www.randomtext.me/api/`
  });
  // This should return an ajax call to the backend server.
};
