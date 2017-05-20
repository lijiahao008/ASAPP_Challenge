import { connect } from 'react-redux';
import Conversations from './conversations';
import { fetchAllConversations, fetchCurrentConversation } from '../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading.loadingAllConversations,
    conversations: Object.keys(state.conversations).map((id)=>(state.conversations[id]))
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  fetchCurrentConversation: (id) => dispatch(fetchCurrentConversation(id))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
