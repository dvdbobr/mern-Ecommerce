import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar/navbar.component'
import { getUserOrders } from '../../redux/actions/orderAction'

function MyOrders() {
    const dispatch = useDispatch()
    const userOrders = useSelector(state => state.userOrders)
    const { loading, error, orders } = userOrders

    useEffect(() => {
        dispatch(getUserOrders())
        console.log(orders);
        console.log(loading);
        console.log(error);
    }, [])
    return (
        <>
            <Navbar />
            <div className="cartContainer">
                <div className="cartItems">
                    <div className="cartItemsRow">

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOrders
