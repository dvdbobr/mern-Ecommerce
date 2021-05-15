import axios from 'axios'
import {
    ALL_PRODUCT_LIST_FAILURE,
    ALL_PRODUCT_LIST_SUCCESS,
    ALL_PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    SELECTED_PRODUCT,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAILURE,
} from '../constants/productConstants'

export const allProducts = (products = []) => async (dispatch) => {
    dispatch({
        type: ALL_PRODUCT_LIST_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/products`)
        dispatch({ type: ALL_PRODUCT_LIST_SUCCESS, payload: { data: data } })
    }
    catch (err) {
        dispatch({ type: ALL_PRODUCT_LIST_FAILURE, payload: err.message })
    }
}

export const listProducts = (page = '', keyword = '') => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/products/paginated?keyword=${keyword}&page=${page}`)
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

export const productDelete = (id) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_DELETE_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
        headers: {
            Authorization: `${userInfo.token}`
        }
    }
    try {
        await axios.delete(`/api/products/${id}`, config)
        dispatch({ type: PRODUCT_DELETE_SUCCESS })
    }
    catch (err) {
        dispatch({
            type: PRODUCT_DELETE_FAILURE,
            payload: err.response && err.response.data.message ?
                err.response.data.message
                : err.message,
        })
    }
}