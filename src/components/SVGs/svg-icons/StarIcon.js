import PropTypes from 'prop-types'
import React from 'react'

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 426.667 426.667">
    <polygon
      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,
      346.91 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
    />
  </svg>
)

StarIcon.defaultProps = {
  className: undefined
}

StarIcon.propTypes = {
  className: PropTypes.string
}

export default StarIcon
