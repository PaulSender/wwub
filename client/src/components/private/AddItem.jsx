import React from 'react'
import store from '../../store'


function AddItem() {
    if (store.getState().auth.isAuthenticated) {
        return (
            <div>Add Item</div>
        )
    }
    else {
        return (
            <div>Please Sign-in</div>
        )
    }
}

export default AddItem