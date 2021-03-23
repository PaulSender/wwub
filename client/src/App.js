import './App.css';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Link, Route } from 'react-router-dom'
import store from './store'
import { loadUser } from './actions/authActions'

//Import Components
import Home from './components/Home'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'
import Login from './components/auth/Login'
import AddItem from './components/private/AddItem'
import NavBar from './components/NavBar'


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <div className="App">
          <HashRouter>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/add">
              <AddItem/>
            </Route>
          </HashRouter>
        </div>
      </Provider>
    )
  }
}

export default App
