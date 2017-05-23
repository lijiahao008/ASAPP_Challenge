import React from 'react';
import ConversationsContainer from './conversations_container';
import CurrentConversationContainer from './current_conversation_container';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.pusher = new Pusher('971bd4a33aad3e439115', {
       cluster: 'us2',
       encrypted: true
     });
    this.renderCurrentConversation = this.renderCurrentConversation.bind(this);
  }

  renderCurrentConversation(){
    if (jQuery.isEmptyObject(this.props.currentConversation) && !this.props.loadingCurrentConversation) {
      return (
        <div className="right">
          <div className="initial-page">
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            <p>Click On Conversation To Open Live Chat</p>
          </div>
        </div>
      )
    }
    else {
      return <CurrentConversationContainer pusher={this.pusher}/>
    }
  }

  render () {
    return (
      <div className="wrapper">
        <div className="container">
          <ConversationsContainer pusher={this.pusher}/>
          {this.renderCurrentConversation()}
        </div>
    </div>
    );
  }
}

export default Chat;
