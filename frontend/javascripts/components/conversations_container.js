import { connect } from 'react-redux';
import Conversations from './conversations';
import { fetchAllConversations, fetchCurrentConversation,
markAsRead } from '../actions/conversation_actions';
import { receiveMessage, startTyping } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading.loadingAllConversations,
    conversations: Object.keys(state.conversations).map((id)=>(state.conversations[id]))
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  fetchCurrentConversation: (id) => dispatch(fetchCurrentConversation(id)),
  markAsRead: (id) => dispatch(markAsRead(id)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  startTyping: (id) => dispatch(startTyping(id))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
