import firebase from '../../firebase'
import * as actionTypes from './actionTypes'

/**
 * fetchReviewStart => sets loading to true
 * fetchReviews => sends a request to fetch reviews in reviews collection in database/firestore
 * fetchReviewSuccess => handles successful fetchReviews
 * clearReviews => clean-up | resets products state
 */

export const fetchReviewsStart = () => ({
  type: actionTypes.FETCH_REVIEWS_START
})

export const fetchReviewsSuccess = reviews => ({
  type: actionTypes.FETCH_REVIEWS_SUCCESS,
  reviews
})

export const clearReviews = () => ({
  type: actionTypes.CLEAR_REVIEWS
})

export const fetchReviews = () => async dispatch => {
  dispatch(fetchReviewsStart())

  const response = await firebase
    .firestore()
    .collection('reviews')
    .get()

  const reviews = []
  response.docs.forEach(review => {
    reviews.push({ ...review.data(), id: review.id })
  })
  dispatch(fetchReviewsSuccess(reviews))
}
