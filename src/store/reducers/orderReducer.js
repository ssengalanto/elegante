import * as actionTypes from '../actions/actionTypes'

const initialState = {
  orders: [],
  loading: false,
  error: null
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.orders
      }

    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error.message
      }

    case actionTypes.CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default orderReducer
