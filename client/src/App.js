import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react'

import { Provider } from 'react-redux'

import store from './store'

//Import Components
import Home from './components/Home'

function App() {
  const [res, setres] = useState("")
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
