import React from 'react';
import ReactDOM from 'react-dom';

class CurrentConversation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      typing: false
    }
    this.pusher = this.props.pusher;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.renderConversation = this.renderConversation.bind(this);
    this.renderTypingIndicator = this.renderTypingIndicator.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    if (this.state.typing) {
      this.setState({message: e.target.value});
    }
    else {
      this.setState({message: e.target.value, typing: true});
      this.props.beginTyping(this.props.conversationId);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({typing: false});
    const message = {
      conversationId: this.props.conversationId,
      body: this.state.message
    }
    this.props.finishTyping(this.props.conversationId);
    this.props.sendMessage(message).then(()=>this.props.markAsRead(this.props.conversationId));
    this.setState({message: ""});
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  scrollToBottom(){
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node) {
      node.scrollIntoView({behavior: "smooth"});
    }
  }

  renderTypingIndicator(){
    return this.props.typingUsers.map((user) => {
      if (user.conversation_id === this.props.conversationId && user.user_id !== window.currentUser.id && user.typing) {
        return <div key={user.user_id}><img src={user.user_pic} /> is typing...</div>
      }
      }
    )
  }

  renderConversation(){
    if (this.props.loading) {
      return <div className="conversation-spinner"><img src={window.images.spinner} /></div>
    }
    else {
      return <div className="chat">
                  <div className="conversation-start">
                      <span>Today, 6:48 AM</span>
                  </div>
                  {this.props.messages.map((message, idx)=>{
                    let className = message.sender_id === window.currentUser.id ? "me" : "you"
                    return <div className={"bubble-wrapper"}
                      key={idx}><img
                      className={className} src={message.sender_pic} /><div className={"bubble " + className}>{message.body}</div></div>
                  })}
                  {this.renderTypingIndicator()}
                  <div style={ {float:"left", clear: "both"} }
              ref={(el) => { this.messagesEnd = el; }}></div>
                </div>
    }
  }
  render () {
    return (
      <div className="right">
          <div className="top"><span>To: <span className="name">{this.props.recipients.join(", ")}</span></span></div>
          {this.renderConversation()}
          <div className="write">
              <i className="fa fa-camera fa-fw" aria-hidden="true"></i>
              <input onChange={this.handleChange}
              value={this.state.message} type='text' placeholder="Please type your message here"/>
              <i className="fa fa-smile-o fa-fw" aria-hidden="true"></i>
              <i className="fa fa-paper-plane fa-fw" onClick={this.handleSubmit}></i>
          </div>
      </div>
    );
  }
}

export default CurrentConversation;
