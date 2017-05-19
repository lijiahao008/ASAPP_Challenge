const conversations = {
          1: {
            id: 1,
            title: "Introduction",
            participants: [{userId: 1, name: "Bob"}, {userId: 2, name: "Alice"}],
            last_reply: "Hello"
          },
          2: {
            id: 2,
            title: "Second introduction",
            participants: [{userId: 3, name: "John"}, {userId: 2, name: "Alice"}],
            last_reply: "Second hello"
          }}

const current_conversation = {conversation: {
          1: {
            id: 1,
            title: "Introduction",
            body: "This is a body",
            last_reply: "Hello"
          }}}


export const fetchAllConversations = () => {
  // return $.ajax({
  //   method: 'GET',
  //   url: `http://www.randomtext.me/api/`
  // });
  // This should return an ajax call to the backend server.
  return conversations;
};
