import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

function Home(props) {

    useEffect(() => {
        props.getItems()
    }, [])
    const onDeleteClick = (id) => {
        props.deleteItem(id)
    }
    
    return (
        <div>
            <h3>Home</h3>
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
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem })(Home)