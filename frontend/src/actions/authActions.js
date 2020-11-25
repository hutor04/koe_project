import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';
import { useQuery } from '@apollo/client';
import { me } from '../client/api/queries/me'

export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if (token) {
        config.headers['x-token'] = token;
    }

}

