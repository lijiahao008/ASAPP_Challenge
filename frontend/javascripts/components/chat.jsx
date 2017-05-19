import React from 'react';
import ConversationsContainer from './conversations_container';
import CurrentConversationContainer from './current_conversation_container';

class Chat extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Chat Signed in as {this.props.userId}</h1>
        <div>
          <ConversationsContainer />
        </div>
        <div>
          <CurrentConversationContainer userId={this.props.userId}/>
        </div>
      </div>
    );
  }
}

export default Chat;
