/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik'
import moment from 'moment'
import React, { useState } from 'react'
import * as Yup from 'yup'
import firebase from '../../../firebase'
import useFocusManage from '../../../hooks/useFocusManage'
import useFormLoading from '../../../hooks/useFormLoading'
import Appreciation from '../../Shared/Appreciation'
import FieldError from '../../Shared/Formik/FieldError'
import Label from '../../Shared/Formik/Label'
import Modal from '../../Shared/Modal'
import styles from './home-subscribe-form.module.scss'

const HomepageSubscribeForm = () => {
  const [prevEmail, setPrevEmail] = useState(null)
  const [error, setError] = useState(null)
  const {
    initRef,
    lastRef,
    tabKeyDownHandler,
    shiftTabKeyDownHandler
  } = useFocusManage()

  const {
    success,
    loading,
    setSuccess,
    setLoading,
    closeModalHandler
  } = useFormLoading()

  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setLoading(true)
          firebase
            .firestore()
            .collection('subscribers')
            .get()
            .then(response => {
              const subscribers = []
              response.docs.forEach(prod => {
                subscribers.push(prod.data().email)
              })
              if (subscribers.includes(values.email)) {
                setLoading(false)
                setSubmitting(false)
                setPrevEmail(values.email)
                setError('This email address is already subscribed, thank you!')
              } else {
                firebase
                  .firestore()
                  .collection('subscribers')
                  .add({ email: values.email, date: moment().format() })
                  .then(() => {
                    resetForm()
                    setError(null)
                    setPrevEmail(null)
                    setSubmitting(false)
                    setLoading(false)
                    setSuccess(true)
                  })
              }
            })
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email address.')
        })}
      >
        {props => {
          const { values, dirty, isSubmitting } = props
          return (
            <Form className={styles.container}>
              <div className={styles.content}>
                <Label
                  label="email address"
                  htmlFor="subscribe-email"
                  className="sr-only"
                />
                <Field
                  id="subscribe-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.input}
                />
                {prevEmail === values.email && error && (
                  <p className="form__error-message">{error}</p>
                )}
                <FieldError name="email" className="form__error-message" />
              </div>

              <button
                type="submit"
                className={`${styles.button} ${loading && styles.waiting}`}
                disabled={!dirty || isSubmitting}
              >
                SEND
              </button>
            </Form>
          )
        }}
      </Formik>

      <Modal
        show={success}
        closeModal={closeModalHandler}
        ref={initRef}
        shiftTabKeyDownHandler={shiftTabKeyDownHandler}
      >
        <Appreciation ref={lastRef} tabKeyDownHandler={tabKeyDownHandler}>
          Thank you for
          <br /> <span className="fw-semi-bold">SUBSCRIBING</span> to our
          newsletter!
        </Appreciation>
      </Modal>
    </>
  )
}

export default HomepageSubscribeForm
