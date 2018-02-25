import { CREATE_SESSION } from "../actions/plan";

export default function(state = {}, action) {
    switch(action.type) {
        case CREATE_SESSION:
            return state;
        default:
            return state;
    }
}
