import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const addToCart = (productID, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${productID}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            title: data.title,
            url: data.url, 
            price: data.price,
            countInStock: data.countInStock,
            product: data.productID,
            qty,
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productID)=>(dispatch, getState)=>{
    dispatch({type: CART_REMOVE_ITEM, payload:productID})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}