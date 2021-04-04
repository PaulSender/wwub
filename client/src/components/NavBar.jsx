import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Logout from './auth/Logout'
import logo from '../images/logo.png'
import styles from './NavBar.module.css'
import { Icon } from 'semantic-ui-react'

function NavBar(props) {
    return (
        <div className={styles.navbar}>
            <img src={logo} className={styles.logo} />
            <ul>   
                {props.auth.isAuthenticated && <li><a href="/#/"><Logout /></a></li>}
                {props.auth.isAuthenticated && <li><a href="/#/profile"><Icon name='user' size="big" /></a></li>}
                {!props.auth.isAuthenticated && <li><a href="/#/login"><button>Login</button></a></li>}
                <li><a href="/#/"><Icon name='home' size="big" /></a></li>
            </ul>
        </div>
    )
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(NavBar)