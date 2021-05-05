import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    SELECTED_PRODUCT
} from '../constants/productConstants'
const initialState = {
    products: [],
    loading: false,
    error: false,
    selectedItem: {},
}
export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_LIST_SUCCESS:
            // console.log(action.payload)
            return { ...state, loading: false, products: action.payload.data }
        case PRODUCT_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case SELECTED_PRODUCT:
            return { ...state, selectedItem: action.payload }
        default:
            return state
    }
}