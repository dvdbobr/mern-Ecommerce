import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';

function Cart(props) {
    const dispatch = useDispatch()
    const history = useHistory();
    const params = useParams()
    const productID = params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const removeFromCartHandler = (id) => {
        console.log(id);
        dispatch(removeFromCart(id))
    }
    const checkOutHandler = () => {
        history.push(`/login`)
    }
    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, qty));
        }
    }, [dispatch, productID, qty]);
    return (
        <>
            <Navbar />
            <div className="cartContainer">
                <div className="cartItems">
                    {cartItems.length > 0 ?
                        cartItems.map(cartItem => {
                            return <div className="cartItemsRow">
                                <div className="cartImg"><img src={cartItem.url} alt="img" /></div>
                                <div><Link to={`/details/${cartItem.product}`}></Link>{cartItem.title}</div>
                                <div className="cartSelect">
                                    <select value={cartItem.qty} onChange={e => dispatch(addToCart(cartItem.product, Number(e.target.value)))}>
                                        {[...Array(cartItem.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="cartPrice">${cartItem.price}</div>
                                <div className="removeFromCart">
                                    <button onClick={() => removeFromCartHandler(cartItem.product)}>DELETE</button>
                                </div>
                            </div>

                        }) :
                        <>
                            <h1>Cart is empty</h1>
                            <Link to={`/`}>Go To Homepage</Link>
                        </>
                    }
                </div>
                <div className="cartTotal">
                    Subtotal: ({cartItems.reduce((a, b) => a + b.qty, 0)} items):{cartItems.reduce((a, b) => a + b.qty * b.price, 0)}
                    <button className="cartCheckout"
                        disabled={cartItems.length === 0}
                        onClick={checkOutHandler}
                    >Proceed To Checkout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart
