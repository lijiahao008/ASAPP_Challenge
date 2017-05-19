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

const conversation = {
          1: {
            id: 1,
            title: "Introduction",
            messages: [{id: 1, sender: "Bob", body: "This is a body"}, {id: 2, sender: "Alice", body: "This is the second body"}]
          },
          2: {
            id: 2,
            title: "Second Introduction",
            messages: [{id: 3, sender: "Alice", body: "This is the body of id 2"}, {id: 4, sender: "John", body: "This is the second body"}]
          }
        }


export const fetchAllConversations = () => {
  // return $.ajax({
  //   method: 'GET',
  //   url: `/api/conversations`
  // });
  // This should return an ajax call to the backend server.
  setTimeout(console.log("yes"), 3000);
  return conversations;
};

export const fetchConversation = (id) => {
  // return $.ajax({
  //   method: 'GET',
  //   url: `http://www.randomtext.me/api/`
  // });
  // This should return an ajax call to the backend server.
  return conversation[id];
};
