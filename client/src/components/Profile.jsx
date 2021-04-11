import React, { useEffect, useState } from 'react'
import store from '../store'
import styles from './Profile.module.css'
import history from '../history'
import axios from 'axios'
import ItemCard from './ItemCard'
import { Card } from 'semantic-ui-react'
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
    <div className={styles.container}>
      <button onClick={() => {
        history.push('/add')
      }} className={styles.add}>Add Item</button>
      <div className={styles.profileContainer}>
        {items && items.map(subArrayItem => {
          return (
            <div className={styles.cardContainer}>
              {subArrayItem.map((item, i) => {
                if (i === 2) {
                  return (
                    <ItemCard {...item} page={'profile'} user={props.auth.user} big={true} right={true} handleDelete={handleDelete}/>
                  )
                }
                if (i === 10) {
                  return (
                    <ItemCard {...item} page={'profile'} user={props.auth.user} left={true} big={true} handleDelete={handleDelete}/>
                  )
                }
                return (
                  <ItemCard {...item} page={'profile'} user={props.auth.user} handleDelete={handleDelete}/>
                )
              })}
            </div>
          )
        })}
      </div>
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