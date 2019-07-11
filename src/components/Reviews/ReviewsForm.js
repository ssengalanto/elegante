/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import firebase from '../../firebase'
import useFormLoading from '../../hooks/useFormLoading'
import * as actions from '../../store/actions'
import FieldError from '../Shared/Formik/FieldError'
import Label from '../Shared/Formik/Label'
import useStarRating from './hooks/useStarRating'
import styles from './reviews.module.scss'

const ReviewsForm = forwardRef(
  ({ closeReviewsForm, tabKeyDownHandler }, ref) => {
    const dispatch = useDispatch()
    const { loading, setSuccess, setLoading } = useFormLoading()
    const { stars, error, setError, ratingValue } = useStarRating()

    return (
      <div className={`autofill--light ${styles['form-container']}`}>
        <div className={styles.form}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              message: ''
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              if (!ratingValue) {
                setSubmitting(false)
                setError('Please include some rating.')
              } else {
                setLoading(true)
                firebase
                  .firestore()
                  .collection('reviews')
                  .add({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    message: values.message,
                    rating: ratingValue,
                    date: moment().format()
                  })
                  .then(() => {
                    resetForm()
                    setLoading(false)
                    setSuccess(true)
                    setSubmitting(false)
                  })
                  .then(() => {
                    dispatch(actions.fetchReviews())
                    closeReviewsForm()
                  })
              }
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required('Firstname is required.'),
              lastName: Yup.string().required('Lastname is required.'),
              message: Yup.string().required('Please include some message.')
            })}
          >
            {props => {
              const { isSubmitting } = props
              return (
                <Form className="form">
                  <div className="form__input-container">
                    <Label
                      label="firstname"
                      htmlFor="reviews-firstName"
                      className="form__label"
                    >
                      <Field
                        id="reviews-firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your firstname"
                        className="form__input form__input--light"
                      />
                    </Label>
                    <FieldError
                      name="firstName"
                      className="form__error-message"
                    />
                  </div>
                  <div className="form__input-container">
                    <Label
                      label="lastname"
                      htmlFor="reviews-lastName"
                      className="form__label"
                    >
                      <Field
                        id="reviews-lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your lastname"
                        className="form__input form__input--light"
                      />
                    </Label>
                    <FieldError
                      name="lastName"
                      className="form__error-message"
                    />
                  </div>

                  <Label
                    label="message"
                    htmlFor="reviews-message"
                    className="form__label textarea--light"
                  >
                    <Field
                      id="reviews-message"
                      name="message"
                      component="textarea"
                      rows="3"
                      placeholder="Enter your message"
                      className="form__input form__input--light"
                    />
                  </Label>
                  <FieldError name="message" className="form__error-message" />

                  <Label
                    label="rating"
                    htmlFor="reviews-rating"
                    className="form__label mt-3"
                  >
                    <div id="reviews-rating">{stars}</div>
                  </Label>
                  {error && <p className="form__error-message">{error}</p>}

                  <div className="form__btn-container auth-form">
                    <button
                      type="submit"
                      ref={ref}
                      onKeyDown={tabKeyDownHandler}
                      className={`btn--light ${loading && 'waiting'}`}
                      disabled={isSubmitting}
                    >
                      Create Review
                    </button>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    )
  }
)

ReviewsForm.propTypes = {
  closeReviewsForm: PropTypes.func.isRequired
}

export default ReviewsForm
