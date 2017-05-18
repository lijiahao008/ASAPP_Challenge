import React from 'react';

class Chat extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.userId);
  }

  componentWillUnmount(){

  }

  render () {
    if (this.props.loading) {
      debugger
      return <div>loading</div>
    }
    return (
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
}

export default Chat;
