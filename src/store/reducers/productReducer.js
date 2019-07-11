import * as actionTypes from '../actions/actionTypes'

const initialState = {
  products: [],
  loading: false,
  error: null
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.products
      }

    case actionTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error.message
      }

    case actionTypes.CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default productReducer
