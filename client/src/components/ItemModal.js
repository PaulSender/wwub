import React, { useState } from 'react'
import connect from 'react-redux'
import { addItem } from '../actions/itemActions'


function ItemModal(props) {
    const [modal, setmodal] = useState(false)
    const [name, setname] = useState('')

    const toggle = () => {
        setmodal(!modal)
    }
    const onSubmit = e => {
        e.preventDefault()
        const newItem = {
            id: '1',
            name
        }
        props.addItem(newItem)
    }
    return (
        <div>
        </div>
    )
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal)