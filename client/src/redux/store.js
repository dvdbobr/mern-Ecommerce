import { applyMiddleware, createStore, combineReducers } from 'redux';//compose
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart: { cartItems: cartItemsFromStorage }
};
const reducer = combineReducers({
    productsList: productListReducer,
    userLogin: userLoginReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
//const middleware = [thunk]
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),

)

export default store