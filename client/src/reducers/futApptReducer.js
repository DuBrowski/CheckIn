import _ from 'lodash';

import {
    CREATE_FUTURE_APPT,
    FETCH_FUTURE_APPTS,
    FETCH_FUTURE_APPT,
    EDIT_FUTURE_APPT,
    DELETE_FUTURE_APPT
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case CREATE_FUTURE_APPT:
            return { ...state, [action.payload.id]:action.payload };
        case FETCH_FUTURE_APPTS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_FUTURE_APPT:
            return { ...state, [action.payload.id]:action.payload };
        case EDIT_FUTURE_APPT:
            return { ...state, [action.payload.id]:action.payload };
        case DELETE_FUTURE_APPT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
