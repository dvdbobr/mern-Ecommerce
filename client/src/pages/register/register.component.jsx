import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/navbar.component'

function Register() {
    const [user, setUser] = useState({
        firstName: '', lastName: '', email: '', password: ''
    })
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const Register = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/users/register', {
                "firstName":`${user.firstName}`,
                "lastName":`${user.lastName}`,
                "email": `${user.email}`,
                "password": `${user.password}`
            })
            //localStorage.setItem('login', true)
            window.location.href = '/'
        }
        catch (err) {
            alert(err.response.data.message);
        }
    }
    return (
        <>
            <Navbar />
            <div className="loginContainer">
                <h1>Register</h1>
                <form onSubmit={Register}>
                    <div className="loginForm">
                        <input type="text" name="firstName" required
                            placeholder="Enter First Name" value={user.firstName} onChange={onChangeHandler} />
                        <input type="text" name="lastName" required
                            placeholder="Enter Last Name" value={user.lastName} onChange={onChangeHandler} />
                        <input type="email" name="email" required
                            placeholder="Enter Email" value={user.email} onChange={onChangeHandler} />
                        <input type="password" name="password" required
                            placeholder="Enter Password" value={user.password} onChange={onChangeHandler} />
                        <div className="loginFunctions">
                            <button type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
