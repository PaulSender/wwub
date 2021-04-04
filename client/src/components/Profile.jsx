import React, { useEffect, useState } from 'react'
import store from '../store'
import styles from './Profile.module.css'
import history from '../history'
import axios from 'axios'
import { arrayBufferToBase64 } from '../utilityFunctions'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { tokenConfig } from '../actions/authActions'


function Profile(props) {
  const [items, setitems] = useState()
  useEffect(() => {
    axios.get('/api/items/', { params: { user: props.auth.user } }).then(res => {
      setitems(res.data)
    })
  }, [props.auth])
  const handleDelete = (id) => {
    axios.post('api/items/delete', { id: id, user: props.auth.user }, tokenConfig(store.getState)).then(res => {
      setitems(res.data)
    })
  }
  return (
    <div className={styles.profileContainer}>
      <button onClick={() => {
        history.push('/add')
      }} style={{ width: '10%', justifySelf: 'end' }}>Add Item</button>
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
                  <a a href={item.url}>
                    <Icon name='linkify' />
                    {item.url}
                  </a>
                </Card.Description>
                <Card.Content extra>
                  <DeleteItem id={item._id} handleDelete={handleDelete} />
                </Card.Content>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </div>
  )
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const DeleteItem = (props) => {
  return (
    <button onClick={props.handleDelete.bind(null, props.id)}>Delete Item</button>
  )
}

export default connect(mapStateToProps, null)(Profile)