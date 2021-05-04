import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            console.log(action.payload)
            return { loading: false, products: action.payload.data }
        case PRODUCT_LIST_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}