import Axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    SELECTED_PRODUCT,
} from '../constants/productConstants'
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const data = await Axios.get('/api/products')
        console.log(data)
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { data: data.data } })
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