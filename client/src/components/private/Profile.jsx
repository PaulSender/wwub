import React, { useEffect, useState } from 'react'
import store from '../../store'
import styles from './Profile.module.css'
import history from '../../history'
import axios from 'axios'
import { arrayBufferToBase64 } from '../../utilityFunctions'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



function Profile(props) {
  const [items, setitems] = useState()
  useEffect(() => {
    axios.get('/api/items/', {params: {user: props.auth.user}}).then(res => {
      setitems(res.data)
    })
  }, [props.auth])
  if (store.getState().auth.isAuthenticated) {
    return (
      <div className={styles.profileContainer}>
        <button onClick={() => {
          history.push('/add')
        }} style={{ width: '10%', justifySelf: 'end' }}>Add Item</button>
        <Card.Group style={{width: '90%', margin: 'auto auto'}} itemsPerRow={3}>
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
                    <a>
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

export default connect(mapStateToProps, null)(Profile)