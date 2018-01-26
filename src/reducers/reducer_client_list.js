import _ from 'lodash';
import { FETCH_CLIENTS } from "../actions/index";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_CLIENTS:
            // for api access action.payload.data
            return _.mapKeys(action.payload, '_id');
        default:
            return state;
    }
}

