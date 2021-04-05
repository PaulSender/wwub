import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import { Card, Dropdown, } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { options } from '../data'
import ItemCard from './ItemCard'

function Home(props) {
    const [name, setname] = useState('')
    const [items, setitems] = useState()
    const [category, setcategory] = useState()
    const [updated, setupdated] = useState(false)
    const handleUpdate = (variables) => {
        axios.post('/api/items/update', variables).then(res => {
            if (res) {
                setcategory(category)
            }
        }).catch(e => {
            console.error(e);
        })
    }
    const handleRate = (variables) => {
        axios.post('/api/items/rate', variables).then(res => {
            if (res) {
                setupdated(true)
            }
        }).catch(e => {
            console.error(e);
        })
    }
    useEffect(() => {
        axios.get('/api/items/').then(res => {
            setitems(res.data)
        })
        if (props.auth.isAuthenticated) {
            // setname(props.auth.user.name)
        }
    }, [props.auth])
    useEffect(() => {
        axios.get('/api/items/', { params: { category } }).then(res => {
            setitems(res.data)
        })
    }, [category])
    return (
        <div>
            {props.auth.user && <h2>Welcome {props.auth.user.name}</h2>}
            <div className={styles.profileContainer}>
                <Dropdown className={styles.inputs} required options={options} name="category" selection search placeholder="Select Category" onChange={(e, data) => {
                    setcategory(data.value)
                }} />
                <Card.Group style={{ width: '90%', margin: 'auto auto' }} itemsPerRow={3}>
                    {items && items.map(item => {
                        return (
                            <ItemCard {...item} page={'home'} user={props.auth.user} handleUpdate={handleUpdate} handleRate={handleRate} updated={updated}/>
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