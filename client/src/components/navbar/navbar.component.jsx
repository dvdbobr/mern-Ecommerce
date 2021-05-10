import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo3.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaShoppingCart } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userActions'
import { removeAllFromCart } from '../../redux/actions/cartAction'
function Navbar() {
    const dispatch = useDispatch()
    const [menuHandler, setMenuHandler] = useState(true)
    const [logoutPopup, setLogoutPopup] = useState(false)
    const [logoutConfirm, setLogoutConfirm] = useState(false)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const changeMenuHandler = () => {
        setMenuHandler(!menuHandler)
    }
    const confirmHandler = () =>{
        setLogoutConfirm(true)
        setLogoutPopup(false)
        dispatch(logout())
        dispatch(removeAllFromCart())
    }
    const logoutHandler = () => {
        setLogoutPopup(true)
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
                                    <Link to={"#logout"} onClick={logoutHandler}>Logout</Link>
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
                {
                    logoutPopup ?
                        <>
                        <div className="logoutModalOverlay"></div>
                            <div className="logoutModal">
                                <h2>If you logout your cart will not be saved, are you sure you want to logout?</h2>
                                <button className="logoutCancelBtn" onClick={() => setLogoutPopup(false)}>Cancel</button>
                                <button className="logoutConfirmBtn" onClick={confirmHandler}><Link to={'/'}>Confirm</Link></button>
                            </div>
                        </>
                        : ''
                }

            </div>
        </div>
    )
}

export default Navbar
