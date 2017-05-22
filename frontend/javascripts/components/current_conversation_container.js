import { connect } from 'react-redux';
import CurrentConversation from './current_conversation';
import { sendMessage, receiveMessage, beginTyping, finishTyping } from '../actions/message_actions';
import { markAsRead } from '../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  const messages = jQuery.isEmptyObject(state.current_conversation) ? [] : Object.keys(state.current_conversation.messages).map((id)=>(state.current_conversation.messages[id]))
  const recipients = state.current_conversation.recipients || []
  const typingUsers = Object.keys(state.typing).map((id)=>(state.typing[id]))
  return {
    loading: state.loading.loadingCurrentConversation,
    typingUsers,
    messages,
    conversationId: state.current_conversation.id,
    subject: state.current_conversation.subject,
    recipients: recipients.map((recipient) => recipient.name)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  sendMessage: (message) => dispatch(sendMessage(message)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  markAsRead: (id) => dispatch(markAsRead(id)),
  beginTyping: (id) => dispatch(beginTyping(id)),
  finishTyping: (id) => dispatch(finishTyping(id))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentConversation);
