import React, { useEffect, useState } from 'react'
import store from '../store'
import styles from './Profile.module.css'
import history from '../history'
import axios from 'axios'
import ItemCard from './ItemCard'
import {Card} from 'semantic-ui-react'
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
            <ItemCard {...item} page={'profile'} handleDelete={handleDelete} />
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


export default connect(mapStateToProps, null)(Profile)