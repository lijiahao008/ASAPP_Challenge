import React from 'react';
import ConversationsContainer from './conversations_container';
import CurrentConversationContainer from './current_conversation_container';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.renderCurrentConversation = this.renderCurrentConversation.bind(this);
  }

  renderCurrentConversation(){
    if (jQuery.isEmptyObject(this.props.currentConversation)) {
      return <div> Click to Open </div>
    }
    else {
      return <div>
        <CurrentConversationContainer />
      </div>
    }
  }

  render () {
    return (
      <div>
        <h1>Chat Signed in as {window.currentUser.name}</h1>
        <div>
          <ConversationsContainer />
        </div>
        {this.renderCurrentConversation()}
      </div>
    );
  }
}

export default Chat;
