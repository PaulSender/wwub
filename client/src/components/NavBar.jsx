import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import PropTypes from 'prop-types'
import Logout from './auth/Logout'
import Login from './auth/Login'

function NavBar(props) {
    console.log(props);
    return (
        <div>
            <img />
            <ul>
                <li>Home</li>
                {props.auth.isAuthenticated && <li>Profile</li>}
                {props.auth.isAuthenticated && <li>Add</li>}
                {props.auth.isAuthenticated && <li><Logout/></li>}
                {props.auth.isAuthenticated === false && <li><Login/></li>}
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