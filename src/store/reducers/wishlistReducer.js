import * as actionTypes from '../actions/actionTypes'

const initialState = {
  wishlist: [],
  loading: false
}

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WISHLIST_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_WISHLIST_ITEMS_SUCCESS:
      return {
        ...state,
        wishlist: action.wishlist,
        loading: false
      }

    case actionTypes.ADD_ITEM_IN_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: state.wishlist.concat(action.product)
      }

    case actionTypes.REMOVE_ITEM_IN_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: state.wishlist.filter(prod => prod.id !== action.prodId)
      }

    case actionTypes.ADD_SIZE_IN_WISHLIST_ITEM:
      return {
        ...state,
        wishlist: action.updatedWishlist
      }

    case actionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlist: [],
        loading: false
      }

    default:
      return state
  }
}

export default wishlistReducer
