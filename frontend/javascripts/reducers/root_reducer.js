import {combineReducers} from 'redux';

import LoadingReducer from './loading_reducer';
import TypingReducer from './typing_reducer';
import ConversationReducer from './conversation_reducer';
import CurrentConversationReducer from './current_conversation_reducer';


const RootReducer = combineReducers({
  conversations: ConversationReducer,
  current_conversation: CurrentConversationReducer,
  loading: LoadingReducer,
  typing: TypingReducer
});

export default RootReducer;
