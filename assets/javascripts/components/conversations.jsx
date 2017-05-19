import React from 'react';

class Conversations extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllConversations();
  }

  render () {
    if (this.props.loading) {
      debugger
      return <div>loading</div>
    }
    return (
      <ul>
        {this.props.conversations.map((conversation)=>(
          <li key={conversation.id}>{conversation.title} {conversation.last_reply}</li>
        ))}
      </ul>
    );
  }
}

export default Conversations;
