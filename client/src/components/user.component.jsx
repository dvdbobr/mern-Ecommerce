import React, { useEffect } from 'react'
import logo from '../logo.svg';
import axios from 'axios';


function User() {
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
    getUsers()
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
