import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';
import axios from 'axios';


function User() {
  const [user, setUser] = useState(null)

  const getUser = async () =>{
    const data = await axios.get('/')
    console.log(data);
    // setUser(data.data)
  }
  const getUsers = async () =>{
    const data = await axios.get('/api/users')
    console.log(data);
    // setUser(data.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          {`Hello ${user}`}
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default User;
