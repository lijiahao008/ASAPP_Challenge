import React from 'react';

class CurrentConversation extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    debugger
    if (this.props.loading) {
      debugger
      return <div>loading</div>
    }
    return (
      <ul>
        {this.props.messages.map((message)=>(
          <li key={message.id}>{message.sender} {message.body}</li>
        ))}
      </ul>
    );
  }
}

export default CurrentConversation;
