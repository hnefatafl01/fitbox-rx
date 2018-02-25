import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ClientListReducer from './reducer_client_list';
import PlanListReducer from './reducer_plan_list';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    clients: ClientListReducer,
    form: formReducer,
    plan: PlanListReducer,
    user: AuthReducer
});

export default rootReducer;
