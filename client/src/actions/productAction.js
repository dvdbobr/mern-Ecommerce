import Axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/productConstants'
export const listProducts = () => async (dispatch) => {
    console.log("works")
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