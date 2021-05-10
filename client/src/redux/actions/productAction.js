import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    SELECTED_PRODUCT,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE
} from '../constants/productConstants'
export const listProducts = (page = '') => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const {data} = await axios.get(`/api/products/paginated?page=${page}`)
        console.log(data)
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { data: data } })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_FAILURE, payload: err.message })
    }
}
export const itemDetails = (selectedItem) => (dispatch) => {
    dispatch({
        type: SELECTED_PRODUCT,
        payload: selectedItem
    })
}
export const productDetails = (selectedProductID) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: selectedProductID })
    try {
        const { data } = await axios.get(`/api/products/${selectedProductID}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({
            type: PRODUCT_DETAILS_FAILURE,
            payload: err.response && err.response.data.message ?
                err.response.data.message
                : err.message,
        })
    }
}