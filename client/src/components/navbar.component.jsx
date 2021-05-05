import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo3.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaShoppingCart } from 'react-icons/fa'
function Navbar() {
    const [menuHandler, setMenuHandler] = useState(true)

    const changeMenuHandler = () => {
        setMenuHandler(!menuHandler)
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
                <div><Link to={"/login"}>Sign In</Link></div>
                <div><Link to={"/cart"}><FaShoppingCart /> </Link></div>
            </div>
        </div>
    )
}

export default Navbar
