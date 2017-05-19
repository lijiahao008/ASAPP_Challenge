import { connect } from 'react-redux';
import CurrentConversation from './current_conversation';
import { fetchCurrentConversation } from '../actions/conversation_actions';
import { sendMessage } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading.loadingCurrentConversation,
    messages: state.current_conversation.messages || [],
    userId: ownProps.userId,
    conversationId: state.current_conversation.id
    //userId is supposed to be from the session reducer where contains the current user's information. But for the popurse of this challenge, I'm manully assigning an id to the component
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchCurrentConversation: (id) => dispatch(fetchCurrentConversation(id))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentConversation);
