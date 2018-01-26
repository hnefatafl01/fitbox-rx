import { combineReducers } from 'redux';
import ClientListReducer from './reducer_client_list';

const rootReducer = combineReducers({
    clients: ClientListReducer
});

export default rootReducer;