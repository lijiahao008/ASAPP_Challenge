import { connect } from 'react-redux';
import CurrentConversation from './current_conversation';
import { fetchCurrentConversation } from '../actions/conversation_actions';
import { sendMessage } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  const messages = jQuery.isEmptyObject(state.current_conversation) ? [] : Object.keys(state.current_conversation.messages).map((id)=>(state.current_conversation.messages[id]))
  return {
    loading: state.loading.loadingCurrentConversation,
    messages,
    conversationId: state.current_conversation.id
    //userId is supposed to be from the session reducer where contains the current user's information. But for the popurse of this challenge, I'm manully assigning an id to the component
  }
};

export default connect(
  mapStateToProps,
  null
)(CurrentConversation);
