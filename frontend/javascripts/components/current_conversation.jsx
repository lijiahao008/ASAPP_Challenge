import React from 'react';

class CurrentConversation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      typing: false
    }
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
      this.props.startTyping();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({typing: false});
    console.log(this.state.message + "user: " + this.props.userId);
  }

  componentDidMount(){
    this.props.fetchCurrentConversation(1);
    //manully assigned id, should be most recent conversation id

  }

  render () {
    if (this.props.loading) {
      debugger
      return <div>loading</div>
    }
    return (
      <div>
        <ul>
          {this.props.messages.map((message)=>(
            <li key={message.id}>{message.sender} {message.body}</li>
          ))}
        </ul>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' placeholder="Please type your message here"/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CurrentConversation;
