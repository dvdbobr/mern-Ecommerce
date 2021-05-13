import axios from "axios"
import { MAKE_ORDER_REQUEST, MAKE_ORDER_SUCCESS, MAKE_ORDER_FAILURE } from "../constants/orderConstants"



export const makeOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: MAKE_ORDER_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/order', order, config)

        dispatch({ type: MAKE_ORDER_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({
            type: MAKE_ORDER_FAILURE,
            payload: err.response && err.response.data.message ?
                err.response.data.message
                : err.message,
        })
    }
}