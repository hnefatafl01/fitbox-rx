import _ from 'lodash';
import { FETCH_CLIENTS } from "../actions/index";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_CLIENTS:
            return _.mapKeys(action.payload.data.clients, '_id');
        default:
            return state;
    }
}

