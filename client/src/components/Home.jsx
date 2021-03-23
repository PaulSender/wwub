import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import store from '../store'
import PropTypes from 'prop-types'

function Home(props) {
    const [name, setname] = useState('')
    useEffect(() => {
        props.getItems()
        if (props.auth.isAuthenticated) {
            setname(props.auth.user.name)
        }
    }, [props.auth])
    return (
        <div>
            <h3>Home</h3>
            {store.getState().auth.isAuthenticated && <p>HELLO {name}</p>}
            {props.item.items.map(item => {
                return (
                    <p>{item.name}</p>
                )
            })}
        </div>
    )
}
Home.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item,
    auth: state.auth
})
export default connect(mapStateToProps, { getItems })(Home)