import * as actionTypes from '../actions/actionTypes'

const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_LOCAL_STORAGE: {
      return {
        cart: action.cart
      }
    }

    case actionTypes.ADD_ITEM_IN_CART:
      return {
        cart: action.updatedCart
      }

    case actionTypes.ADD_WISHLIST_TO_CART:
      return {
        cart: action.updatedCart
      }

    case actionTypes.CHANGE_CART_ITEM_QUANTITY:
      return {
        cart: action.updatedCart
      }

    case actionTypes.REMOVE_ITEM_IN_CART: {
      return {
        cart: action.updatedCart
      }
    }

    case actionTypes.CLEAR_CART_ITEMS:
      return {
        cart: []
      }

    default:
      return state
  }
}

export default cartReducer
