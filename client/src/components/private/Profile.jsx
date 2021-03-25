import React from 'react'
import store from '../../store'
import styles from './Profile.module.css'
import history from '../../history'


function Profile() {
    if (store.getState().auth.isAuthenticated) {
        return (
            <div className={styles.profileContainer}>
                <button onClick={() => {
                    history.push('/add')
                }} style={{width: '10%', justifySelf: 'end'}}>Add Item</button>
                <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                    <div className={styles.item}>
                        <img src="#" />
                        <p>Rating: <p>5</p></p>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>Please Login-in</div>
        )
    }
}

export default Profile