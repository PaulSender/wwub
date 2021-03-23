import axios from 'axios'
import { returnErrors } from './errorActions'
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING })
    // Fetch user
    axios.get('/api/auth/user', tokenConfig(getState)).then(res => {
        dispatch({ type: USER_LOADED, payload: res.data })
    }).catch(e => {
        dispatch(returnErrors(e.response.data, e.response.status))
        dispatch({ type: AUTH_ERROR })
    })
}

// Register User

export const register = ({ name, email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    // Request body
    const body = JSON.stringify({ name, email, password })

    axios.post('/api/users', body, config).then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }).catch(e => {
        dispatch(returnErrors(e.response.data, e.response.status, 'REGISTER_FAIL'))
        dispatch({
            type: REGISTER_FAIL
        })
    })
}

// Setup config/headers and token
export const tokenConfig = getState => {
    const token = getState().auth.token
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }
    return config
}

// Login User
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    // Request body
    const body = JSON.stringify({ email, password })

    axios.post('/api/auth', body, config).then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    }).catch(e => {
        dispatch(returnErrors(e.response.data, e.response.status, 'LOGIN_FAIL'))
        dispatch({
            type: LOGIN_FAIL
        })
    })
}

// Logout User
export const logout = () => {
     window.location.pathname = '/'
    return {
        type: LOGOUT_SUCCESS
    }
}

