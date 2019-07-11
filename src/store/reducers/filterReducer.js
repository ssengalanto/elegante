import * as actionTypes from '../actions/actionTypes'

const filterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FILTER_NAME:
      return {
        ...state,
        name: action.name
      }
    case actionTypes.FILTER_PRICE:
      return {
        ...state,
        price: Number(action.price)
      }
    case actionTypes.FILTER_BRAND:
      return {
        ...state,
        brand: action.brand
      }
    case actionTypes.FILTER_SIZE:
      return {
        ...state,
        size: action.size
      }
    case actionTypes.SORT_ITEMS:
      return {
        ...state,
        sortBy: action.sort
      }
    case actionTypes.CLEAR_FILTERS:
      return {
        ...state,
        name: '',
        price: 0,
        brand: '',
        size: '',
        sortBy: ''
      }
    default:
      return state
  }
}

export default filterReducer
