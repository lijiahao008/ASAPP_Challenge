import {combineReducers} from 'redux';

import LoadingReducer from './loading_reducer';
import TypingReducer from './typing_reducer';
import ConversationsReducer from './conversations_reducer';
import CurrentConversationReducer from './current_conversation_reducer';


const RootReducer = combineReducers({
  conversations: ConversationsReducer,
  current_conversation: CurrentConversationReducer,
  loading: LoadingReducer,
  typing: TypingReducer
});

export default RootReducer;
