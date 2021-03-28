import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import history from '../history'
import axios from 'axios'
import { arrayBufferToBase64 } from '../utilityFunctions'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Home(props) {
    const [name, setname] = useState('')
    const [items, setitems] = useState()
    useEffect(() => {
        axios.get('/api/items/').then(res => {
            setitems(res.data)
        })
        if (props.auth.isAuthenticated) {
            setname(props.auth.user.name)
        }
    }, [props.auth])
    return (
        <div>
            {props.auth.user && <h2>Welcome {props.auth.user.name}</h2>}
            <div className={styles.profileContainer}>
                <Card.Group style={{ width: '90%', margin: 'auto auto' }} itemsPerRow={3}>
                    {items && items.map(item => {
                        return (
                            <Card>
                                <Image src={`data:image/*;base64,${arrayBufferToBase64(item.image.data.data)}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{item.category}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <p>Rating: {item.rating}/5</p>
                                        <a href={item.url}>
                                            <Icon name='linkify' />
                                            {item.url}
                                        </a>
                                    </Card.Description>

                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            </div>
        </div>
    )
}
Home.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(Home)