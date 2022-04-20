import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const middlewares = [thunk]

let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    }
  };

const rootReducer = combineReducers({
    products : productReducer,
    cart : cartReducer
})

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))