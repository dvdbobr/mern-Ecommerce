import React, { useEffect, useState } from 'react'
import axios from 'axios';


function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  // const [user, setUser] = useState(null)

  // const getUser = async () =>{
  //   const data = await axios.get('/')
  //   console.log(data);
  //   // setUser(data.data)
  // }
  const getUsers = async () => {
    const data = await axios.get('/api/users')
    console.log(data);
    // setUser(data.data)
  }

  useEffect(() => {
    if (token) {
      const getUserData = async () => {
        try {
          const data = await axios.get('/api/users/getMyUser/', {
            headers: { 'Authorization': token }
          })
          console.log(data);
        }
        catch (err) {
          alert(err.response.data)
        }
      }
      getUserData()
    }
  }, [])
  return (
    <div className="App">
      {/* <p>
          {`Hello ${user}`}
        </p> */}
    </div>
  );
}

export default User;
