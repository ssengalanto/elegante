import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import useFadeSpring from '../../hooks/animations/useFadeSpring'
import LeftQuoteIcon from '../SVGs/svg-icons/LeftQuoteIcon'
import styles from './reviews.module.scss'

const ReviewsItem = ({ review }) => {
  const { fade, animated } = useFadeSpring()

  const stars = []
  for (let i = 0; i < review.rating; i += 1) {
    stars.push(<span key={i}>★</span>)
  }

  return (
    <>
      <animated.div style={fade} className={styles.container}>
        <div className={styles['column-1']}>
          <LeftQuoteIcon />
        </div>
        <div className={styles['column-2']}>
          <div className={styles.moment}>{moment(review.date).fromNow()}</div>
          <p>{review.message}</p>
          <p className={styles.rating}>{stars}</p>
          <p className={styles.author}>
            - {review.firstName} {review.lastName.charAt(0)}.
          </p>
        </div>
      </animated.div>

      <div className="line-separator my-3" />
    </>
  )
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
}

export default ReviewsItem
