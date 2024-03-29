import { createStore,applyMiddleware, combineReducers, } from 'redux';

import {thunk }from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer

})



const middleware = [thunk];



const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;