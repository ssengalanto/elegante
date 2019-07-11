import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions'

const useReviews = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const { reviews } = useSelector(state => state.reviews)

  useEffect(() => {
    if (reviews.length === 0) {
      dispatch(actions.fetchReviews())
    }
  }, [dispatch, reviews])

  const openReviewsForm = () => {
    setShow(true)
  }

  const closeReviewsForm = () => {
    setShow(false)
  }

  return { show, openReviewsForm, closeReviewsForm }
}

export default useReviews
