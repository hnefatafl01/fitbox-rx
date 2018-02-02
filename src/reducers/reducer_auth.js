import { SIGNUP, LOGIN } from "../actions/auth";

export default function(state = {}, action) {
    switch(action.type) {
        case SIGNUP:
            return state;
        case LOGIN:
            return { ...state, ...action.payload.userdata };
        default:
            return state;
    }
}
