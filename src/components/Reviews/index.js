import React from 'react'
import { useSelector } from 'react-redux'
import useFocusManage from '../../hooks/useFocusManage'
import content from '../../utilities/content/content'
import Modal from '../Shared/Modal'
import useReviews from './hooks/useReviews'
import styles from './reviews.module.scss'
import ReviewsForm from './ReviewsForm'
import ReviewsItem from './ReviewsItem'

const Reviews = () => {
  const { reviews } = useSelector(state => state.reviews)
  const {
    initRef,
    lastRef,
    tabKeyDownHandler,
    shiftTabKeyDownHandler
  } = useFocusManage()
  const { show, openReviewsForm, closeReviewsForm } = useReviews()

  const sortReviewByDate = items =>
    items.sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="fw-thin">What people </span>
            <span className="fw-regular">are saying</span>
          </h1>
          <p className="mb-3">{content.loremFour}</p>
          <button type="button" className="btn--dark" onClick={openReviewsForm}>
            Write a review
          </button>
          {reviews.length > 0 && <div className="line-separator mt-5 mb-3" />}

          {sortReviewByDate(reviews).map(review => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </div>
      </section>

      <Modal
        show={show}
        closeModal={closeReviewsForm}
        shiftTabKeyDownHandler={shiftTabKeyDownHandler}
        ref={initRef}
      >
        <ReviewsForm
          closeReviewsForm={closeReviewsForm}
          ref={lastRef}
          tabKeyDownHandler={tabKeyDownHandler}
        />
      </Modal>
    </>
  )
}

export default Reviews
