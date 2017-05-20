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
      return <div>loading</div>
    }
    return (
      <ul>
        {this.props.conversations.map((conversation)=>(
          <li key={conversation.id}
            onClick={()=>this.props.fetchCurrentConversation(conversation.id)}>{conversation.subject} {conversation.last_message}{conversation.updated_at}</li>
        ))}
      </ul>
    );
  }
}

export default Conversations;
