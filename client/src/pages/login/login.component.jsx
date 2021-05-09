import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/userActions'
import Navbar from '../../components/navbar/navbar.component'
import Spinner from '../../components/spinner/spinner.component'

function Login() {
    // const [token, setToken] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, loading, error } = userLogin
    const [user, setUser] = useState({
        email: '', password: ''
    })
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const loginUser = async (e) => {
        e.preventDefault()
        dispatch(login(user.email, user.password))
        // window.location.href = '/'
        // try {
        //     await axios.post('/api/users/login', {
        //         "email": `${user.email}`,
        //         "password": `${user.password}`
        //     })
        //     localStorage.setItem('login', true)
        // }
        // catch (err) {
        //     console.log(err.response);
        // }
    }
    useEffect(() => {
        if (userInfo)
            history.push(`/`)

    }, [userInfo, history])
    return (
        <>
            <Navbar />
            <div className="loginContainer">
                <h1>Login</h1>
                {loading && <Spinner />}

                <form onSubmit={loginUser}>
                    <div className="loginForm">
                        {error && <div className="loginError"> {error}</div>}
                        <input type="email" name="email" required
                            placeholder="Enter Email" value={user.email} onChange={onChangeHandler} />
                        <input type="password" name="password" required
                            placeholder="Enter Password" value={user.password} onChange={onChangeHandler} />
                        <div className="loginFunctions">
                            <button type="submit">Login</button>
                        </div>
                        <span className="loginAndRegisterAccount">Don't have an account? <Link to={'/register'}>Register</Link></span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
