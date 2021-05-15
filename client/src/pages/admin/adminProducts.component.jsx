import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.component'
import Spinner from '../../components/spinner/spinner.component'

function AdminProducts() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, loading, error } = userLogin
    useEffect(() => {
        if (userInfo && userInfo.role === 1)
            console.log("admin");
        else
            history.push(`/`)

    }, [userInfo, history])
    return (
        <>
            <Navbar />
            <h1>this is admin products</h1>
        </>
    )
}

export default AdminProducts
