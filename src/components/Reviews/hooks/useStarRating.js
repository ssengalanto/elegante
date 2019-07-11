/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import styles from '../reviews.module.scss'

const useStarRating = () => {
  const [error, setError] = useState(null)
  const [ratingValue, setRatingValue] = useState(null)
  const [star, setStar] = useState({ rating: null, default: null })

  const starRatingClickHandler = rate => {
    setStar({ rating: rate, default: rate })
    setRatingValue(rate + 1)
  }

  const starMouseOverHandler = rate => {
    star.default = star.rating
    star.rating = rate
    setStar({ rating: star.rating, default: star.default })
    setError(null)
  }

  const starOnFocusHandler = () => {
    setError(null)
  }

  const starMouseOutHandler = () => {
    star.rating = star.default
    setStar({ ...star, rating: star.rating })
  }

  const stars = []
  for (let i = 0; i < 5; i += 1) {
    let className = styles.star

    if (star.rating >= i && star.rating !== null) {
      className = `${styles.star} ${styles['star-rating']}`
    }

    stars.push(
      <button
        key={i}
        aria-label={`${i === 0 ? `${i + 1} star rate` : `${i + 1} stars rate`}`}
        type="button"
        className={className}
        onFocus={starOnFocusHandler}
        onMouseOut={starMouseOutHandler}
        onClick={() => starRatingClickHandler(i)}
        onMouseOver={() => starMouseOverHandler(i)}
      >
        ★
      </button>
    )
  }

  return { stars, error, setError, ratingValue }
}

export default useStarRating
