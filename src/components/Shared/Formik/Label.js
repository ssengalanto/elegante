/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import React from 'react'

const Label = ({ label, htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={className}>
    {label}
    {children}
  </label>
)

Label.defaultProps = {
  children: undefined
}

Label.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Label
