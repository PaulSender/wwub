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
        <div className={styles.homeContainer}>
            {props.auth.user && <h2>Welcome {props.auth.user.name}</h2>}
            <div className={styles.dropdownContainer}>
                <Dropdown style={{ height: '20px' }} required options={options} name="category" selection search placeholder="I'm looking for..." onChange={(e, data) => {
                    setcategory(data.value)
                }} />
            </div>
            <div className={styles.profileContainer}>
                {items && items.map(subArrayItem => {
                    return (
                        <div className={styles.cardContainer}>
                            {subArrayItem.map((item, i) => {
                                if (i === 2) {
                                    return (
                                        <ItemCard {...item} page={'home'} user={props.auth.user} big={true} right={true} />
                                    )
                                }
                                if (i === 10) {
                                    return (
                                        <ItemCard {...item} page={'home'} user={props.auth.user}   left={true} big={true} />
                                    )
                                }
                                return (
                                    <ItemCard {...item} page={'home'} user={props.auth.user} />
                                )
                            })}
                        </div>
                    )
                })}
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