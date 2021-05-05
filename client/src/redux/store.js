import { applyMiddleware, createStore, combineReducers } from 'redux';//compose
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';

//const initialState = {};
const reducer = combineReducers({
    productsList: productListReducer
})
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),

)

export default store