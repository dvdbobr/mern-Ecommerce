import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.component'
import Spinner from '../../components/spinner/spinner.component'
import { getUserOrders } from '../../redux/actions/orderAction'

function MyOrders() {
    const dispatch = useDispatch()
    const userOrders = useSelector(state => state.userOrders)
    const { loading, error, orders } = userOrders

    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])
    return (
        <>
            <Navbar />
            {loading ? <Spinner /> : error ? <h1>{error}</h1> :
                <div className="table-wrapper">
                    <table className="myOrdersTable">
                        <thead>
                            <tr>
                                <th>ORDER ID</th>
                                <th>PURCHASE DATE</th>
                                <th>PAYMENT METHOD</th>
                                <th>TOTAL PRICE</th>
                                <th>ORDER DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => {
                                return <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.slice(0,10).split('-').reverse().join('-')}</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>${(order.totalPrice).toFixed(2)}</td>
                                    <td><button class="myOrdersDetailBtn"><Link to={`/order/${order._id}`}>Details</Link></button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default MyOrders
