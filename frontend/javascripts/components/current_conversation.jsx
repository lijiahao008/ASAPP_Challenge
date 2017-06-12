import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'emojione-picker';
import 'emojione-picker/css/picker.css';
import Dropzone from 'react-dropzone';


class CurrentConversation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      typing: false,
      img_preview_url: "",
      emojiOpen: false
    }
    this.pusher = this.props.pusher;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.renderConversation = this.renderConversation.bind(this);
    this.renderTypingIndicator = this.renderTypingIndicator.bind(this);
    this.toggleEmoji = this.toggleEmoji.bind(this);
    this.renderEmoji = this.renderEmoji.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.renderImgPreview = this.renderImgPreview.bind(this);
    this.closeImgPreview = this.closeImgPreview.bind(this);
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
      body: this.state.message,
      img_url: this.state.img_preview_url
    }
    this.props.finishTyping(this.props.conversationId);
    this.props.sendMessage(message).then(()=>this.props.markAsRead(this.props.conversationId));
    this.setState({message: "", img_preview_url: ""});
  }

  componentDidUpdate(){
    if (this.state.typing && this.state.message === "") {
      this.setState({typing: false});
      this.props.finishTyping(this.props.conversationId);
    }
    this.scrollToBottom();
  }

  scrollToBottom(){
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node) {
      node.scrollIntoView({behavior: "smooth"});
    }
  }

  toggleEmoji(){
    if (this.state.emojiOpen) {
      this.setState({emojiOpen: false})
    }
    else {
      this.setState({emojiOpen: true})
    }
  }

  renderEmoji(){
    if (this.state.emojiOpen) {
      return <EmojiPicker onChange={(data) => {
          console.log(data);
          this.setState({message: this.state.message += `&#x${data.unicode} `})
        }}
        search={true} />
    }
  }

  onDrop(acceptedFiles, rejectedFiles){
    this.setState({img_preview_url: acceptedFiles[0].preview})
  }

  renderTypingIndicator(){
    return this.props.typingUsers.map((user) => {
      if (user.conversation_id === this.props.conversationId && user.user_id !== window.currentUser.id && user.typing) {
        return <div className="bubble-wrapper" key={user.user_id}>
                <img className="you" src={user.user_pic} />
                <div className="bubble">
                  <img src={window.images.typing}/>
                </div>
              </div>
      }
      }
    )
  }

  closeImgPreview(){
    this.setState({img_preview_url: ""})
  }

  renderImgPreview(){
    if (this.state.img_preview_url !== "") {
      return <div className="img-preview">
        <div className="close-img-preview"><i className="fa fa-times" onClick={this.closeImgPreview}></i></div><div><img src={this.state.img_preview_url}></img></div></div>
    }
  }
  renderConversation(){
    if (this.props.loading) {
      return <div className="conversation-spinner"><img src={window.images.singleSpinner} /></div>
    }
    else {
      return <div className="chat" onClick={()=> this.state.emojiOpen ? this.toggleEmoji() : null }>
              {this.props.messages.map((message, idx)=>{
                let className = message.sender_id === window.currentUser.id ? "me" : "you"
                if (message.img_url) {
                  return <div className="bubble-wrapper" key={idx}>
                          <img className={className} src={message.sender_pic} />
                          <div className={"bubble " + className}>
                            <img src={message.img_url}></img>
                          </div>
                        </div>
                }
                return <div className="bubble-wrapper" key={idx}>
                        <img className={className} src={message.sender_pic} />
                        <div className={"bubble " + className}>
                          {message.body}
                        </div>
                      </div>
                  })
                }
                {this.renderTypingIndicator()}
                <div style={ {float:"left", clear: "both"} }
              ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
    }
  }
  render () {
    return (
      <div className="right">
        <div className="top">
          <span>Subject: <span className="name">
            {this.props.subject}</span>
          </span>
        </div>
        <div className="top">
          <span>To: <span className="name">
            {this.props.recipients.join(", ")}</span>
          </span>
        </div>
        {this.renderConversation()}
        <form className="write" onSubmit={this.handleSubmit}>
          <Dropzone
            onDrop={this.onDrop}
            className="menu-dropzone">
            <i className="fa fa-camera fa-fw"></i>
          </Dropzone>
          <input onChange={this.handleChange}
            value={this.state.message}
            type='text'
            placeholder="Please type your message here"
            onClick={()=> this.state.emojiOpen ? this.toggleEmoji() : null }
            required />
          <i className="fa fa-smile-o fa-fw" onClick={this.toggleEmoji}></i>
          <button type="submit" className="fa fa-paper-plane fa-fw"></button>
        </form>
        {this.renderImgPreview()}
        {this.renderEmoji()}
      </div>
    );
  }
}

export default CurrentConversation;
