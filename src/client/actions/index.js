//to make ajax calls we use axios
import axios from 'axios';
//action type
export const FETCH_USERS = 'fetch_users';
//action creator
export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}