import axios from 'axios'
import React, { useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { arrayBufferToBase64 } from '../utilityFunctions'
import styles from './ItemCard.module.css'
import store from '../store'
import {loadUser} from '../actions/authActions'
function ItemCard(props) {
    const [showing, setshowing] = useState(false)
    const handleOver = (e) => {
        console.log();
        setshowing(true)
    }
    const handleLeave = (e) => {
        setshowing(false)
    }
    const item = props
    if (props.big && props.right) {
        return (
            <div className={styles.bigImageRight}>
                <div className={styles.photoContainer} onMouseEnter={handleOver} onMouseLeave={handleLeave}>
                    {showing && <OverLay {...item} big={true}/> }
                    <Image className={styles.bigPhoto} src={`data:image/*;base64,${arrayBufferToBase64(item.image.data.data)}`} wrapped ui={false} />
                </div>
            </div>
        )
    } if (props.big && props.left) {
        return (
            <div className={styles.bigImageLeft}>
                <div className={styles.photoContainer} onMouseEnter={handleOver} onMouseLeave={handleLeave}>
                    {showing && <OverLay {...item} big={true}/>}
                    <Image className={styles.bigPhoto} src={`data:image/*;base64,${arrayBufferToBase64(item.image.data.data)}`} wrapped ui={false} />
                </div>
            </div>
        )
    }
    return (
        <div className={styles.photoContainer} onMouseEnter={handleOver} onMouseLeave={handleLeave}>
            {showing && <OverLay {...item} />}
            <Image className={styles.photo} src={`data:image/*;base64,${arrayBufferToBase64(item.image.data.data)}`} wrapped ui={false} />
        </div>
    )
}

const OverLay = (props) => {
    var item = props
    return (
        <div className={props.big ? styles.overlayBig : styles.overlaySmall}>
            <div className={styles.overlayContent}>
                <p>{item.name}</p>
                <p>Rating: {parseInt(item.ratings.reduce((a, b) => a + b, 0) / item.ratings.length)}/5</p>
                <a href={item.url}>
                    <Icon name='linkify' />
                    Check it out!
                </a>
                {props.page === 'profile' && <p>
                    <DeleteItem id={item._id} handleDelete={props.handleDelete} />
                </p>}
                {props.page === 'home' &&
                    <p extra>
                        <RateItem {...item} />
                    </p>
                }
            </div>
        </div>
    )
}

const DeleteItem = (props) => {
    return (
        <button onClick={props.handleDelete.bind(null, props.id)}>Delete Item</button>
    )
}

const RateItem = (props) => {
    const [rating, setrating] = useState()
    const [updated, setupdated] = useState(false)
    const handleRate = () => {
        store.dispatch(loadUser())
        setupdated(true)
    }
    if (props.user) {
        if (props.user.rated_items.includes(props._id) || updated) {
            return (
                <p>Thanks for rating this item!</p>
            )
        }
        return (
            <p>Rate this Item: <input className={styles.ratingInput} min={0} max={5} type="number" name="rating" onChange={(e) => {
                setrating(e.target.value)
            }} /><button onClick={() => {
                axios.post('/api/items/rate', { userID: props.user._id, itemID: props._id, rating }).then(res => {if(res) {handleRate()}}).catch(e => {
                    console.error(e);
                })
            }}>Rate</button></p >
        )
    }
    else {
        return <p><a href="/#/login">Login </a>to rate this item</p>
    }

}

export default ItemCard