import { RECEIVE_ALL_MESSAGES, LOADING_ALL_MESSAGES } from '../actions/message_actions';

const LoadingReducer = (state=false, action) => {
  switch (action.type){
    case LOADING_ALL_MESSAGES:
      return true;
    case RECEIVE_ALL_MESSAGES:
      return false;
    default:
      return false;
  }
};

export default LoadingReducer;
