import { MAKE_ORDER_REQUEST, MAKE_ORDER_SUCCESS, MAKE_ORDER_FAILURE } from "../constants/orderConstants";

export const makeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case MAKE_ORDER_REQUEST:
            return { loading: true }
        case MAKE_ORDER_SUCCESS:
            return { loading: false, order: action.payload }
        case MAKE_ORDER_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}