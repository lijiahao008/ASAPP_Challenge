import { connect } from 'react-redux';
import Chat from './chat';

const mapStateToProps = (state, ownProps) => {
  return {
    loadingCurrentConversation: state.loading.loadingCurrentConversation,
    currentConversation: state.current_conversation
  }
};

export default connect(
  mapStateToProps,
  null
)(Chat);
