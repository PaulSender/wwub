import React, { useState } from 'react'
import { Dropdown, Message } from 'semantic-ui-react'
import styles from './Profile.module.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { tokenConfig } from '../../actions/authActions'
import store from '../../store'
import { options } from '../../data'



function AddItem(props) {
    const [image, setimage] = useState()
    const [values, setvalues] = useState()
    const [msg, setmsg] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData()
        formData.append('image', image)
        formData.append('values', JSON.stringify(values))
        if (values.url && values.name && values.category && values.rating && image.name) {
            axios.post('/api/items/add', formData, tokenConfig(store.getState)).then(res => {
                if (res) {
                    window.scroll(0,0)
                    setmsg("Success!")
                }
            }).catch(e => {
                console.error(e);
            })
        }
        else {
            window.scroll(0, 0)
            setmsg("Failed: Please Fill Out All Feilds")
        }

    }
    const handleUpload = (e) => {
        var file = e.target.files[0]
        setimage(file)
    }
    const handleChange = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }
    if (props.auth.isAuthenticated) {
        return (
            <form onSubmit={handleSubmit}>

                <div className={styles.addItemContainer}>
                    {msg && <Message style={{height: '100%'}} negative={msg.includes("Failed")} positive={msg.includes("Success")} className={styles.message}>
                        <Message.Header>{msg}</Message.Header>
                    </Message>}
                    <div>
                        <h4>Add Item</h4>
                        <p>Picture</p>
                        <input type="file" onChange={handleUpload} />
                    </div>
                    <input required type="url" name="url" placeholder="Link to item" onChange={handleChange} />
                    <input required type="text" name="name" placeholder="Give this item a name" onChange={handleChange} />
                    <Dropdown required options={options} name="category" selection search placeholder="Select Category" onChange={(e, data) => {
                        data.target = data
                        handleChange(data)
                    }} />
                    <input required type="text" name="rating" placeholder="Give this item a rating (out of 5)" onChange={handleChange} />
                    <button type="submit">Submit</button>
                </div>
            </form >
        )
    }
    else {
        return (
            <div>Please Login-in</div>
        )
    }
}

const propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AddItem)
