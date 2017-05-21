import React from 'react';
import ConversationsContainer from './conversations_container';
import CurrentConversationContainer from './current_conversation_container';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.renderCurrentConversation = this.renderCurrentConversation.bind(this);
  }

  renderCurrentConversation(){
    if (jQuery.isEmptyObject(this.props.currentConversation) && !this.props.loadingCurrentConversation) {
      return <div className="right">
                <div className="top"><span>Click to Open</span></div></div>
    }
    else {
      return <CurrentConversationContainer />
    }
  }

  render () {
    return (
      <div className="wrapper">
    <div className="container">
      <ConversationsContainer />
      {this.renderCurrentConversation()}
    </div>
</div>
    );
  }
}

export default Chat;
