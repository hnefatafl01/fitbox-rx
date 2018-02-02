import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ClientListReducer from './reducer_client_list';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    clients: ClientListReducer,
    user: AuthReducer, 
    form: formReducer
});

export default rootReducer;