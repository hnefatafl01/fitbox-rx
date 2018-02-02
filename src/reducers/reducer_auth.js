import { SIGNUP, LOGIN } from "../actions/auth";

export default function(state = {}, action) {
    switch(action.type) {
        case SIGNUP:
            return state;
        case LOGIN:
            console.log('login', action)
            return action.payload;
        default:
            return state;
    }
}
