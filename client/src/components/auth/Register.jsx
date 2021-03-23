import React, { useEffect, useState, useRef } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/authActions'
import {clearErrors} from '../../actions/errorActions'


function Register(props) {
    const [values, setvalues] = useState({ name: '', email: '', password: '' })
    const [msg, setmsg] = useState(null)
    const propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    useEffect(() => {
        if (props.error.id === 'REGISTER_FAIL') {
            setmsg(props.error.msg.msg)
        }
    }, [props.error])

    const handleChange = e => {
        console.log(e);
        setvalues({ ...values, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault()
        const { name, email, password } = values
        const newUser = {
            name,
            email,
            password
        }
        // clear prev errors
        props.clearErrors()

        // Attempt Register
        props.register(newUser)
        
    }
    return (
        <div>
            {msg}
            <input type="text" onChange={handleChange} value={values.name} name="name" placeholder="First and Last Name..." />
            <input type="email" onChange={handleChange} value={values.email} name="email" placeholder="Email..." />
            <input type="password" onChange={handleChange} value={values.password} name="password" placeholder="Password..." />
            <button onClick={onSubmit}>Register</button>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
})

export default connect(mapStateToProps, { register, clearErrors })(Register)