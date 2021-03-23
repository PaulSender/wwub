import React, { useEffect, useState, useRef } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/authActions'
import {clearErrors} from '../../actions/errorActions'


function Login(props) {
    const [values, setvalues] = useState({ email: '', password: '' })
    const [msg, setmsg] = useState(null)
    const propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    useEffect(() => {
        if (props.error.id === 'LOGIN_FAIL') {
            setmsg(props.error.msg.msg)
        }
    }, [props.error])

    const handleChange = e => {
        console.log(e);
        setvalues({ ...values, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        const{email, password} = values
        const user = {
            email,
            password
        }
        // clear errors
        props.clearErrors()
        // Attempt Login
        props.login(user)
    }
    return (
        <div>
            {msg}
            <input type="email" onChange={handleChange} value={values.email} name="email" placeholder="Email..." />
            <input type="password" onChange={handleChange} value={values.password} name="password" placeholder="Password..." />
            <button onClick={onSubmit}>Login</button>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
})

export default connect(mapStateToProps, { login, clearErrors })(Login)