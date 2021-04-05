import axios from 'axios'
import React, { useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { arrayBufferToBase64 } from '../utilityFunctions'


function ItemCard(props) {
    const item = props
    return (
        <Card>
            <Image src={`data:image/*;base64,${arrayBufferToBase64(item.image.data.data)}`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{item.category}</span>
                </Card.Meta>
                <Card.Description>
                    <p>Rating: {parseInt(item.ratings.reduce((a, b) => a + b, 0) / item.ratings.length)}/5</p>
                    <a href={item.url}>
                        <Icon name='linkify' />
                        {item.url}
                    </a>
                </Card.Description>
                {props.page === 'profile' && <Card.Content extra>
                    <DeleteItem id={item._id} handleDelete={props.handleDelete} />
                </Card.Content>}
                {props.page === 'home' &&
                    <Card.Content extra>
                        <RateItem {...item} />
                    </Card.Content>
                }
            </Card.Content>
        </Card>
    )
}

const DeleteItem = (props) => {
    return (
        <button onClick={props.handleDelete.bind(null, props.id)}>Delete Item</button>
    )
}

const RateItem = (props) => {
    const [rating, setrating] = useState()
    if (props.user) {
        console.log(props.user)
        if (props.user.rated_items.includes(props._id) || props.updated) {
            return (
                <p>Thanks for rating this item!
                    {/* <button onClick={() => {
                        props.handleUpdate({ userID: props.user._id, itemID: props._id })
                    }}>Update Rating</button> */}
                </p>
            )
        }
        return (
            <p>Rate this Item: <input type="number" name="rating" onChange={(e) => {
                setrating(e.target.value)
            }} /><button onClick={props.handleRate.bind(null, { userID: props.user._id, itemID: props._id, rating })}>Rate</button></p>
        )
    }
    else {
        return <div></div>
    }

}

export default ItemCard