import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    SELECTED_PRODUCT,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE
} from '../constants/productConstants'
const initialState = {
    products: [],
    loading: false,
    error: false,
    selectedItem: {},
}
const productInitialState = {
    loading: false,
    error: false,
    selectedProduct: {},
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
export const productDetailsReducer = (state = productInitialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, selectedProduct: action.payload }
        case PRODUCT_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}