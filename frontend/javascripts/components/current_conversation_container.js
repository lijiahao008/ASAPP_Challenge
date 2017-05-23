import { connect } from 'react-redux';
import CurrentConversation from './current_conversation';
import { sendMessage, receiveMessage, beginTyping, finishTyping } from '../actions/message_actions';
import { markAsRead } from '../actions/conversation_actions';
import { mapObjectToArray } from '../util/selectors';

const mapStateToProps = (state, ownProps) => {
  const messages = jQuery.isEmptyObject(state.current_conversation) ? [] : mapObjectToArray(state.current_conversation.messages)
  const recipients = state.current_conversation.recipients || []
  const typingUsers = mapObjectToArray(state.typing);
  const loading = state.loading.loadingCurrentConversation;
  const conversationId = state.current_conversation.id;
  const subject = state.current_conversation.subject;
  return {
    loading,
    typingUsers,
    messages,
    conversationId,
    subject,
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
