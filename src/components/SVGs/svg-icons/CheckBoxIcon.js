import PropTypes from 'prop-types'
import React from 'react'

const CheckBoxIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 440.02 440.02">
    <g>
      <polygon points="327.327,359.861 60,359.861 60,92.532 268.65,92.532 328.651,32.532 0,32.532 0,419.86 387.327,419.86 387.327,171.846 327.327,231.847" />
      <polygon points="125.735,173.171 83.308,215.597 185.158,317.448 440.02,62.585 397.593,20.159 185.158,232.595" />
    </g>
  </svg>
)

CheckBoxIcon.defaultProps = {
  className: undefined
}

CheckBoxIcon.propTypes = {
  className: PropTypes.string
}

export default CheckBoxIcon
