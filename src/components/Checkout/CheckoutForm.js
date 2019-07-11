/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik'
import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import firebase from '../../firebase'
import useFocusManage from '../../hooks/useFocusManage'
import useFormLoading from '../../hooks/useFormLoading'
import * as actions from '../../store/actions'
import Appreciation from '../Shared/Appreciation'
import FieldError from '../Shared/Formik/FieldError'
import Label from '../Shared/Formik/Label'
import Modal from '../Shared/Modal'

const CheckoutForm = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { cart } = useSelector(state => state.cart)
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
          street: '',
          city: '',
          province: '',
          country: '',
          postal: '',
          email: '',
          phone: ''
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setLoading(true)
          firebase
            .firestore()
            .collection('orders')
            .add({
              orders: cart,
              date: moment().format(),
              client: user.id,
              details: {
                firstName: values.firstName,
                lastName: values.lastName,
                street: values.street,
                city: values.city,
                province: values.province,
                country: values.country,
                postal: values.postal,
                email: values.email,
                phone: values.phone
              }
            })
            .then(() => {
              resetForm()
              dispatch(actions.clearCartItems())
              dispatch(actions.fetchOrders())
              setLoading(false)
              setSuccess(true)
              setSubmitting(false)
            })
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('Firstname is required.'),
          lastName: Yup.string().required('Lastname is required.'),
          street: Yup.string().required('Street is required.'),
          city: Yup.string().required('City is required.'),
          province: Yup.string().required('Province is required.'),
          country: Yup.string().required('Country is required.'),
          postal: Yup.number().required('Postal code is required.'),
          email: Yup.string()
            .email('Invalid email address.')
            .required('Email address is required.'),
          phone: Yup.number().required('Phone number is required.')
        })}
      >
        {props => {
          const { dirty, isSubmitting } = props
          return (
            <Form className="form">
              <div className="form__container">
                <div className="form__input-container column-1">
                  <Label
                    label="firstname"
                    htmlFor="checkout-firstName"
                    className="form__label"
                  >
                    <Field
                      id="checkout-firstName"
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
                    htmlFor="checkout-lastName"
                    className="form__label"
                  >
                    <Field
                      id="checkout-lastName"
                      name="lastName"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="lastName" className="form__error-message" />
                </div>
              </div>
              <div className="form__input-container">
                <Label
                  label="unit number / street name"
                  htmlFor="checkout-street"
                  className="form__label"
                >
                  <Field
                    id="checkout-street"
                    name="street"
                    type="text"
                    className="form__input"
                  />
                </Label>
                <FieldError name="street" className="form__error-message" />
              </div>
              <div className="form__container">
                <div className="form__input-container column-1">
                  <Label
                    label="town / city"
                    htmlFor="checkout-city"
                    className="form__label"
                  >
                    <Field
                      id="checkout-city"
                      name="city"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="city" className="form__error-message" />
                </div>
                <div className="form__input-container column-2">
                  <Label
                    label="province"
                    htmlFor="checkout-province"
                    className="form__label"
                  >
                    <Field
                      id="checkout-province"
                      name="province"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="province" className="form__error-message" />
                </div>
              </div>
              <div className="form__container">
                <div className="form__input-container column-1">
                  <Label
                    label="country"
                    htmlFor="checkout-country"
                    className="form__label"
                  >
                    <Field
                      id="checkout-country"
                      name="country"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="country" className="form__error-message" />
                </div>
                <div className="form__input-container column-2">
                  <Label
                    label="postal code"
                    htmlFor="checkout-postal"
                    className="form__label"
                  >
                    <Field
                      id="checkout-postal"
                      name="postal"
                      type="text"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="postal" className="form__error-message" />
                </div>
              </div>
              <div className="form__container">
                <div className="form__input-container column-1">
                  <Label
                    label="email address"
                    htmlFor="checkout-email"
                    className="form__label"
                  >
                    <Field
                      id="checkout-email"
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
                    htmlFor="checkout-phone"
                    className="form__label"
                  >
                    <Field
                      id="checkout-phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10-11}"
                      className="form__input"
                    />
                  </Label>
                  <FieldError name="phone" className="form__error-message" />
                </div>
              </div>
              <div className="checkout-form form__btn-container">
                <button
                  type="submit"
                  className={`btn--dark ${loading && 'waiting'}`}
                  disabled={!dirty || isSubmitting}
                >
                  Checkout
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
          Thank you for
          <br /> <span className="fw-semi-bold">SHOPPING</span> with us!
        </Appreciation>
      </Modal>
    </>
  )
}

export default CheckoutForm
