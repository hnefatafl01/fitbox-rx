import _ from 'lodash';
import { FETCH_CLIENTS, FETCH_CLIENT } from "../actions/index";

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_CLIENTS:
            return _.mapKeys(action.payload.data, '_id');
        case FETCH_CLIENT:
            const client = action.payload.data;
            const newState = { ...state };
            newState[client._id] = client;
            return newState;
        default:
            return state;
    }
}

