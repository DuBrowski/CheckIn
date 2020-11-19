import apptDetails from '../apis/apptDetails';
import { 
    SIGN_IN,
    SIGN_OUT, 
    CREATE_APPT, 
    FETCH_APPT, 
    FETCH_APPTS, 
    EDIT_APPT, 
    DELETE_APPT,
    CREATE_FUTURE_APPT, 
    FETCH_FUTURE_APPT, 
    FETCH_FUTURE_APPTS, 
    EDIT_FUTURE_APPT, 
    DELETE_FUTURE_APPT,
} from './types';
import history from '../history';


//SIGN-IN ACTIONS

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

//APPOINTMENT ACTIONS

export const createAppt = formValues => async dispatch => {
    const response = await apptDetails.post('/apptDetails', formValues);

    dispatch({ type: CREATE_APPT, payload: response.data});
    history.push("/");
}

export const fetchAppts = () => async dispatch => {
    const response = await apptDetails.get('/apptDetails');

    dispatch({ type: FETCH_APPTS, payload: response.data});
}

export const fetchAppt = id => async dispatch => {
    const response = await apptDetails.get(`/apptDetails/${id}`);

    dispatch({ type: FETCH_APPT, payload: response.data});
}

export const editAppt = (formValues, id) => async dispatch => {
    const response = await apptDetails.patch(`/apptDetails/${id}`, formValues);

    dispatch({ type: EDIT_APPT, payload: response.data});
}

export const deleteAppt = id => async dispatch => {
    await apptDetails.delete(`/apptDetails/${id}`);

    dispatch({ type: DELETE_APPT, payload: id });
}


//FUTURE APPOINTMENT ACTIONS

export const createFutureAppt = formValues => async dispatch => {
    const response = await apptDetails.post('/futureAppts', formValues);

    dispatch({ type: CREATE_FUTURE_APPT, payload: response.data});
}

export const fetchFutureAppts = () => async dispatch => {
    const response = await apptDetails.get('/futureAppts');

    dispatch({ type: FETCH_FUTURE_APPTS, payload: response.data});
}

export const fetchFutureAppt = id => async dispatch => {
    const response = await apptDetails.get(`/futureAppts/${id}`);

    dispatch({ type: FETCH_FUTURE_APPT, payload: response.data});
}

export const editFutureAppt = (formValues, id) => async dispatch => {
    const response = await apptDetails.patch(`/futureAppts/${id}`, formValues);

    dispatch({ type: EDIT_FUTURE_APPT, payload: response.data});
}

export const deleteFutureAppt = id => async dispatch => {
    await apptDetails.delete(`/futureAppts/${id}`);

    dispatch({ type: DELETE_FUTURE_APPT, payload: id });
}