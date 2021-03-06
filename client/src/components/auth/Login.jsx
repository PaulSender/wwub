import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'
import history from '../../history'
import styles from './Auth.module.css'
import { Message } from 'semantic-ui-react'
import logo from '../../images/logo.png'




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

    useEffect(() => {
        if(props.isAuthenticated) {
          history.push(history.location.pathname)
        }
    }, [props.isAuthenticated])

    const handleChange = e => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = values
        const user = {
            email,
            password
        }
        // clear errors
        props.clearErrors()
        // Attempt Login
        props.login(user)

        function redirect() {
            if (props.isAuthenticated) {
                history.push("/")
            }
        }
        setTimeout(redirect(), 1000)
    }
    return (
        <div className={styles.loginContainer}>
            <img className={styles.logo} src={logo} />
            {msg &&
                <Message negative className={styles.message}>
                    <Message.Header>{msg}</Message.Header>
                </Message>
            }
            <input type="email" onChange={handleChange} value={values.email} name="email" placeholder="Email..." />
            <input type="password" onChange={handleChange} value={values.password} name="password" placeholder="Password..." onKeyPress={(e) => {
                if(e.key === 'Enter') {
                    onSubmit(e)
                }
            }}/>
            <button className={styles.submit} onClick={onSubmit} >Login</button>
                <p>Don't have an account? <a href="/#/register">Register Here.</a></p>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
})

export default connect(mapStateToProps, { login, clearErrors })(Login)