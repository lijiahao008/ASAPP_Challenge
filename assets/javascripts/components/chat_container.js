import { connect } from 'react-redux';
import Chat from './chat';
import { fetchMessages } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    messages: state.messages,
    userId: ownProps.userId
    //userId is supposed to be from the session reducer where contains the current user's information. But for the popurse of this challenge, I'm manully assigning an id to the component
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchMessages: (userId) => dispatch(fetchMessages(userId))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
