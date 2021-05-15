import { applyMiddleware, createStore, combineReducers } from 'redux';//compose
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { allProductsListReducer,productListReducer, productDetailsReducer, productDeleteReducer } from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducers';
import { makeOrderReducer, orderDetailsReducer, userOrdersReducer } from './reducers/orderReducer';


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ''
const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage
    }
};
const reducer = combineReducers({
    allProductsList:allProductsListReducer,
    productsList: productListReducer,
    productDetails: productDetailsReducer,
    deleteProduct:productDeleteReducer,
    userLogin: userLoginReducer,
    cart: cartReducer,
    makeOrder: makeOrderReducer,
    orderDetails: orderDetailsReducer,
    userOrders: userOrdersReducer,
})
//const middleware = [thunk]
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),

)

export default store