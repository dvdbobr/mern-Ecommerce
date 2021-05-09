import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo3.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaShoppingCart } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userActions'
function Navbar() {
    const [menuHandler, setMenuHandler] = useState(true)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const dispatch = useDispatch()
    const changeMenuHandler = () => {
        setMenuHandler(!menuHandler)
    }
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div onClick={changeMenuHandler}>
                    {menuHandler ? <GiHamburgerMenu size={33} color={"#D84D4D"} /> : <FaTimes size={33} color={"#D84D4D"} />}
                </div>
                <div className="logo">
                    <Link to={"/"}><img src={logo} alt="logo" /></Link>
                </div>
            </div>
            <div className="navbar-right">
                <div><Link to={"/"}>Home</Link> </div>
                <>
                    {
                        userInfo ?
                            <div className="navbarLogin">
                                <Link to={"/"}>{userInfo.user.firstName}</Link>
                                <div className="logoutArrow"><TiArrowSortedDown size={23} color={"black"} /></div>
                                <div className="loggedIn">
                                    <Link to={"#logout"} onClick={logoutHandler}>Logout </Link>
                                </div>
                            </div>
                            :
                            <div>
                                <Link to={"/login"}>Login</Link>
                            </div>
                    }
                </>
                <div className="navbarCart"><Link to={"/cart"}><FaShoppingCart /> </Link>
                    <span className="cartCounter">{cartItems.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
