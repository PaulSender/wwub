import React, { useState, useEffect } from 'react'
import { Dropdown, Message } from 'semantic-ui-react'
import styles from './Profile.module.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { tokenConfig } from '../actions/authActions'
import store from '../store'
import { loadUser } from '../actions/authActions'
import { options } from '../data'



function AddItem(props) {
    const [user, setuser] = useState()
    const [image, setimage] = useState()
    const [values, setvalues] = useState()
    const [msg, setmsg] = useState()
    const [imageData, setimageData] = useState()
    useEffect(() => {
        setuser(props.auth.user)
      }, [props.auth])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        var formData = new FormData()
        formData.append('image', image)
        formData.append('values', JSON.stringify(values))
        console.log(user._id);
        formData.append('user', user._id)
        if (values.url && values.name && values.category && values.rating && image) {
            axios.post('/api/items/add', formData, tokenConfig(store.getState)).then(res => {
                if (res) {
                    // setimageData(`data:image/*;base64,${arrayBufferToBase64(res.data.image.data.data)}`)
                    store.dispatch(loadUser())
                    window.scroll(0, 0)
                    setmsg("Success!")
                }
            }).catch(e => {
                console.error(e);
            })
        }
        else {
            window.scroll(0, 0)
            setmsg("Failed: Please Fill Out All Feilds Correctly")
        }

    }
    const handleUpload = (e) => {
        var fileName = e.target.files[0].name
        var extFile = fileName.split(".")[1]
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile === 'PNG') {
            var file = e.target.files[0]
            setimageData(URL.createObjectURL(file))
            setimage(file)
        } else {
            setmsg("Failed: Only image files are allowed!");
        }

    }
    const handleChange = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }
    if (props.auth.isAuthenticated) {
        return (
            <form onSubmit={handleSubmit} className={styles.addContainer}>
                <h3 style={{ marginTop: '1%' }}>Add New Item</h3>
                {msg && <Message style={{ height: '100%', width: '100%', margin: 'auto auto' }} negative={msg.includes("Failed")} positive={msg.includes("Success")} className={styles.message}>
                    <Message.Header>{msg}</Message.Header>
                </Message>}
                <div className={styles.imageContainer}>
                    <div>
                        <p>Upload an Image of the Item</p>
                        <input type="file" accept="image/*" onChange={handleUpload} />
                        <img src={imageData} className={styles.image} />
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <input className={styles.inputs} required type="url" name="url" placeholder="Link to item" onChange={handleChange} />
                    <input className={styles.inputs} required type="text" name="name" placeholder="Give this item a name" onChange={handleChange} />
                    <Dropdown className={styles.inputs} required options={options} name="category" selection search placeholder="Select Category" onChange={(e, data) => {
                        data.target = data
                        handleChange(data)
                    }} />
                    <input className={styles.inputs} required type="number" name="rating" min={0} max={5} placeholder="Give this item a rating (out of 5)" onChange={handleChange} />
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
