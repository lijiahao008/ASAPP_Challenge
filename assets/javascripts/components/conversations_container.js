import { connect } from 'react-redux';
import Conversations from './conversations';
import { fetchAllConversations } from '../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading.loadingAllConversations,
    conversations: Object.keys(state.conversations).map((id)=>(state.conversations[id]))
    //userId is supposed to be from the session reducer where contains the current user's information. But for the popurse of this challenge, I'm manully assigning an id to the component
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchAllConversations: () => dispatch(fetchAllConversations())
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
