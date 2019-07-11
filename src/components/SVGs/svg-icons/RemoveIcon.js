import PropTypes from 'prop-types'
import React from 'react'

const RemoveIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28">
    <g>
      <polygon points="28,22.398 19.594,14 28,5.602 22.398,0 14,8.402 5.598,0 0,5.602 8.398,14 0,22.398 5.598,28 14,19.598 22.398,28" />
    </g>
  </svg>
)

RemoveIcon.defaultProps = {
  className: undefined
}

RemoveIcon.propTypes = {
  className: PropTypes.string
}

export default RemoveIcon
