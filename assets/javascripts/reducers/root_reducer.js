import {combineReducers} from 'redux';

import MessagesReducer from './messages_reducer';
import LoadingReducer from './loading_reducer';


const RootReducer = combineReducers({
  messages: MessagesReducer,
  loading: LoadingReducer
});

export default RootReducer;
