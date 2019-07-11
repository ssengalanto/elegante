/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik'
import moment from 'moment'
import React from 'react'
import * as Yup from 'yup'
import firebase from '../../firebase'
import useFocusManage from '../../hooks/useFocusManage'
import useFormLoading from '../../hooks/useFormLoading'
import Appreciation from '../Shared/Appreciation'
import FieldError from '../Shared/Formik/FieldError'
import Label from '../Shared/Formik/Label'
import Modal from '../Shared/Modal'
import styles from './contact.module.scss'

const ContactForm = () => {
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
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setLoading(true)
          firebase
            .firestore()
            .collection('messages')
            .add({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phone: values.phone,
              message: values.message,
              date: moment().format()
            })
            .then(() => {
              resetForm()
              setLoading(false)
              setSuccess(true)
              setSubmitting(false)
            })
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('Firstname is required.'),
          lastName: Yup.string().required('Lastname is required.'),
          email: Yup.string()
            .email('Invalid email address.')
            .required('Email address is required.'),
          phone: Yup.number().required('Phone number is required.'),
          message: Yup.string().required('Please include some message.')
        })}
      >
        {props => {
          const { dirty, isSubmitting } = props
          return (
            <Form className={styles.form}>
              <div className="form__container">
                <div className="form__input-container column-1">
                  <Label
                    label="firstname"
                    htmlFor="contact-firstName"
                    className="form__label"
                  >
                    <Field
                      id="contact-firstName"
                      name="firstName"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError
                    name="firstName"
                    className="form__error-message"
                  />
                </div>
                <div className="form__input-container column-2">
                  <Label
                    label="lastname"
                    htmlFor="contact-lastName"
                    className="form__label"
                  >
                    <Field
                      id="contact-lastName"
                      name="lastName"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="lastName" className="form__error-message" />
                </div>
              </div>
              <div className="form__container">
                <div className="form__input-container column-1">
                  <Label
                    label="email address"
                    htmlFor="contact-email"
                    className="form__label"
                  >
                    <Field
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="email" className="form__error-message" />
                </div>
                <div className="form__input-container column-2">
                  <Label
                    label="phone"
                    htmlFor="contact-phone"
                    className="form__label"
                  >
                    <Field
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10-11}"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="phone" className="form__error-message" />
                </div>
              </div>
              <div className="form__input-container">
                <Label
                  label="message"
                  htmlFor="contact-message"
                  className="form__label textarea--dark"
                >
                  <Field
                    id="contact-message"
                    name="message"
                    component="textarea"
                    rows="4"
                    className="form__input"
                  />
                </Label>
                <FieldError name="message" className="form__error-message" />
              </div>
              <div className="form__btn-container">
                <button
                  type="submit"
                  className={`btn--dark ${loading && 'waiting'}`}
                  disabled={!dirty || isSubmitting}
                >
                  Send Message
                </button>
              </div>
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
          Thank you, <br /> Your <span className="fw-semi-bold">MESSAGE</span>{' '}
          has been sent.
        </Appreciation>
      </Modal>
    </>
  )
}

export default ContactForm
