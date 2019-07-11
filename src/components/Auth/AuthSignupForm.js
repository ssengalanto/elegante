/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import * as actions from '../../store/actions'
import FieldError from '../Shared/Formik/FieldError'
import Label from '../Shared/Formik/Label'

const AuthSignupForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(actions.signupUser(values))
        setSubmitting(false)
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Firstname is required.'),
        lastName: Yup.string().required('Lastname is required.'),
        email: Yup.string()
          .email('Invalid email address.')
          .required('Email address is required.'),
        password: Yup.string()
          .min(6, 'Password must be atleast 6 characters long.')
          .required('Password is required.')
      })}
    >
      {props => {
        const { dirty, isSubmitting } = props
        return (
          <Form className="form">
            <div className="form__input-container">
              <Label
                label="firstname"
                htmlFor="signup-firstName"
                className="form__label"
              >
                <Field
                  id="signup-firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your firstname"
                  className="form__input form__input--light"
                />
              </Label>
              <FieldError name="firstName" className="form__error-message" />
            </div>
            <div className="form__input-container">
              <Label
                label="lastname"
                htmlFor="signup-lastName"
                className="form__label"
              >
                <Field
                  id="signup-lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your lastname"
                  className="form__input form__input--light"
                />
              </Label>
              <FieldError name="lastName" className="form__error-message" />
            </div>
            <div className="form__input-container">
              <Label
                label="email address"
                htmlFor="signup-email"
                className="form__label"
              >
                <Field
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="form__input form__input--light"
                />
              </Label>
              <FieldError name="email" className="form__error-message" />
            </div>
            <div className="form__input-container">
              <Label
                label="password"
                htmlFor="signup-password"
                className="form__label"
              >
                <Field
                  id="signup-password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="form__input form__input--light"
                />
              </Label>
              <FieldError name="password" className="form__error-message" />
            </div>

            <div className="form__btn-container auth-form">
              <button
                type="submit"
                className="btn--light"
                disabled={!dirty || isSubmitting}
              >
                Sign up
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default AuthSignupForm
