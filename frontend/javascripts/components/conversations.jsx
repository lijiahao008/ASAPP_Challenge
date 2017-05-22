import React from 'react';

class Conversations extends React.Component {
  constructor(props){
    super(props);
    this.renderConversations = this.renderConversations.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.pusher = this.props.pusher;
  }

  componentDidMount(){
    this.props.fetchAllConversations().then(
      () =>{ this.pusher.subscribe(`conversation`).bind('message', (data) => {
        this.props.receiveMessage(data.message)
      });
      this.pusher.subscribe(`conversation`).bind('typing', (data) =>{
        this.props.startTyping(data.status)
      })
      }
    );
  }

  handleClick(e, id){
    e.preventDefault();
    this.props.markAsRead(id);
    this.props.fetchCurrentConversation(id);
  }

  renderConversations(){
    if (this.props.loading) {
      return <div className="conversations-spinner"><img src={window.images.spinner} /></div>
    }
    else {
      return <ul className="people">
          {this.props.conversations.map((conversation)=>{
            let className="person " + (conversation.is_read ? "read" : "unread");
            return <li key={conversation.id}
              className={className}
              onClick={(e)=>this.handleClick(e, conversation.id)}>
              <img src={conversation.last_sender_pic} alt="" />
              <span className="name">{conversation.subject}</span>
              <span className="time">{conversation.updated_at.replace("less than", "").replace("about", "")}</span>
              <span className="preview">{conversation.last_message}</span> </li>
          })}
        </ul>
      }
  }

  render () {

    return (
      <div className="left">
          <div className="top">
              <input type="text" />
              <a className="search"><i className="fa fa-search"></i></a>
          </div>
          {this.renderConversations()}
      </div>
    );
  }
}

export default Conversations;
