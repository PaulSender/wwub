import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState} from 'react'

function App() {
  const [res, setres] = useState("")
  return (
    <div className="App">
      {res}
      <button onClick={() => {
        axios.get('/users',).then(res => {
          console.log(res);
          setres(res.data)
        })
      }}>X</button>
    </div>
  );
}

export default App;
