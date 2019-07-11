import * as actionTypes from './actionTypes'
import {
  addingItemInCart,
  addingWishlistToCart,
  removingItemInCart,
  changingCartItemQuantity
} from '../../utilities/helper-functions/cartStore'

/**
 * addingItemInCart => adding item by quantity in cart
 * addingWishlistToCart => adds an item in cart from wishlist
 * changeCartItemQuantity => changes the quantity of an item in cart
 * getCartLocalStorage => get cart data saved from local storage
 * removeToCart => removes an item in cart
 * clearCartItems => clean-up | reset the cart state/store
 */

export const addToCart = (product, size, quantity) => (dispatch, getState) => {
  const {
    cart: { cart }
  } = getState()
  const updatedCart = addingItemInCart(cart, product, size, quantity)
  dispatch({ type: actionTypes.ADD_ITEM_IN_CART, updatedCart })
}

export const removeToCart = (id, size) => (dispatch, getState) => {
  const {
    cart: { cart }
  } = getState()
  const updatedCart = removingItemInCart(cart, id, size)
  dispatch({
    type: actionTypes.REMOVE_ITEM_IN_CART,
    updatedCart
  })
}

export const addWishlistToCart = (product, size) => (dispatch, getState) => {
  const {
    cart: { cart }
  } = getState()
  const updatedCart = addingWishlistToCart(cart, product, size)
  dispatch({
    type: actionTypes.ADD_WISHLIST_TO_CART,
    updatedCart
  })
}

export const changeCartItemQuantity = (product, size, quantity) => (
  dispatch,
  getState
) => {
  const {
    cart: { cart }
  } = getState()
  const updatedCart = changingCartItemQuantity(cart, product, size, quantity)
  dispatch({
    type: actionTypes.CHANGE_CART_ITEM_QUANTITY,
    updatedCart
  })
}

export const getCartLocalStorage = cart => ({
  type: actionTypes.GET_CART_LOCAL_STORAGE,
  cart
})

export const clearCartItems = () => ({
  type: actionTypes.CLEAR_CART_ITEMS
})
