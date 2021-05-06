import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.component'

function Login() {
    // const [token, setToken] = useState('')
    const [user, setUser] = useState({
        email: '', password: ''
    })
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/users/login', {
                "email": `${user.email}`,
                "password": `${user.password}`
            })
            localStorage.setItem('login', true)
            window.location.href = '/'
        }
        catch (err) {
            console.log(err.response);
        }
    }
    return (

        <>
            <Navbar />
            <div className="loginContainer">
                <h1>Login</h1>
                <form onSubmit={loginUser}>
                    <div className="loginForm">
                        <input type="email" name="email" required
                            placeholder="Enter Email" value={user.email} onChange={onChangeHandler} />
                        <input type="password" name="password" required
                            placeholder="Enter Password" value={user.password} onChange={onChangeHandler} />
                        <div className="loginFunctions">
                            <button type="submit">Login</button>
                            <Link to={'/register'}>Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
