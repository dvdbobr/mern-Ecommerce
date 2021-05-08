import { applyMiddleware, createStore, combineReducers } from 'redux';//compose
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer,productDetailsReducer } from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducer';

const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
    }
};
const reducer = combineReducers({
    productsList: productListReducer,
    userLogin: userLoginReducer,
    productDetails: productDetailsReducer
})
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),

)

export default store