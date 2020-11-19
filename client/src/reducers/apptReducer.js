import _ from 'lodash';

import {
    CREATE_APPT,
    FETCH_APPTS,
    FETCH_APPT,
    EDIT_APPT,
    DELETE_APPT
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case CREATE_APPT:
            return { ...state, [action.payload.id]:action.payload };
        case FETCH_APPTS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_APPT:
            return { ...state, [action.payload.id]:action.payload };
        case EDIT_APPT:
            return { ...state, [action.payload.id]:action.payload };
        case DELETE_APPT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
