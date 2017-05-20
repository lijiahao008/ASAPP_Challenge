import React from 'react';

class CurrentConversation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      typing: false
    }
    this.pusher = new Pusher('971bd4a33aad3e439115', {
     cluster: 'us2',
     encrypted: true
   });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    if (this.state.typing) {
      this.setState({message: e.target.value});
    }
    else {
      this.setState({message: e.target.value, typing: true});
      // this.props.startTyping();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({typing: false});
    const message = {
      conversationId: this.props.conversationId,
      body: this.state.message
    }
    this.props.sendMessage(message);
    this.setState({message: ""});
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.conversationId != prevProps.conversationId) {
      var channel = this.pusher.subscribe(`conversation${this.props.conversationId}`);
      channel.bind('message', () => {
        this.props.fetchCurrentConversation(this.props.conversationId)
      }, this);
    }

  }

  render () {
    return (
      <div className="right">
          <div className="top"><span>To: <span className="name">{this.props.recipients.join(",")}</span></span></div>
          <div className="chat">
            <div className="conversation-start">
                <span>Today, 6:48 AM</span>
            </div>
            {this.props.messages.map((message, idx)=>{
              let className = message.sender_id === window.currentUser.id ? "bubble me" : "bubble you"
              return <div className={className} key={idx}>{message.body}</div>
            })}
          </div>

          <div className="write">
              <a className="write-link attach"></a>
              <input onChange={this.handleChange}
              value={this.state.message} type='text' placeholder="Please type your message here"/>
              <a className="write-link smiley"></a>
              <a className="write-link send" onClick={this.handleSubmit}></a>
          </div>
      </div>
    );
  }
}

export default CurrentConversation;
