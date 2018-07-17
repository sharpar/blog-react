import _ from 'lodash';
import { DELETE_POST, FETCH_POST, FETCH_POSTS } from '../actions'


export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload); // deletes key of id if it exists, returns a new state object  
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data }; // add fetched post to state
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}