/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer'
import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'
import wishlistReducer from './reducers/wishlistReducer'
import reviewReducer from './reducers/reviewReducer'
import orderReducer from './reducers/orderReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  reviews: reviewReducer,
  orders: orderReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
