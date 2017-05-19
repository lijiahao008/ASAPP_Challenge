import React from 'react';
import ConversationsContainer from './conversations_container';
// import CurrentConversation from './current_conversation';

class Chat extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Chat</h1>
        <ConversationsContainer />
      </div>
    );
  }
}

export default Chat;
