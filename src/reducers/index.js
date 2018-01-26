import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ClientListReducer from './reducer_client_list';

const rootReducer = combineReducers({
    clients: ClientListReducer,
    form: formReducer
});

export default rootReducer;