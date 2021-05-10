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
    loadingSelected: false,
    errorSelected: false,
    selectedProduct: {},
}
export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_LIST_SUCCESS:
            // console.log(action.payload)
            return {
                 loading: false, 
                 products: action.payload.data.products,
                 pages:action.payload.data.pages,
                 page:action.payload.data.page
                 }
        case PRODUCT_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case SELECTED_PRODUCT:
            return { ...state, selectedItem: action.payload }
        default:
            return state
    }
}
export const productDetailsReducer = (state = productInitialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loadingSelected: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loadingSelected: false, selectedProduct: action.payload }
        case PRODUCT_DETAILS_FAILURE:
            return { ...state, loadingSelected: false, errorSelected: "no such product" }
        default:
            return state
    }
}