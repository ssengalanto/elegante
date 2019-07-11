import { ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

const FieldError = ({ name, className }) => (
  <div className={className}>
    <ErrorMessage name={name} />
  </div>
)

FieldError.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default FieldError
