import * as actionTypes from '../actions/actionTypes'

const initialState = {
  reviews: [],
  loading: false
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REVIEWS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.reviews
      }

    case actionTypes.CLEAR_REVIEWS:
      return {
        reviews: [],
        loading: false
      }

    default:
      return state
  }
}

export default reviewReducer
