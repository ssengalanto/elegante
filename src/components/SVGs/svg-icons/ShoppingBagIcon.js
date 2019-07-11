import PropTypes from 'prop-types'
import React from 'react'

const ShoppingBagIcon = ({ className }) => (
  <svg className={className} height="32px" viewBox="0 0 32 32">
    <g>
      <path
        d="M27.996,8.91C27.949,8.395,27.519,8,27,8h-5V6c0-3.309-2.69-6-6-6c-3.309,0-6,2.691-6,6v2H5
            C4.482,8,4.051,8.395,4.004,8.91l-2,22c-0.025,0.279,0.068,0.557,0.258,0.764C2.451,31.882,2.719,32,3,32h26
            c0.281,0,0.549-0.118,0.738-0.326c0.188-0.207,0.283-0.484,0.258-0.764L27.996,8.91z M12,6c0-2.206,1.795-4,4-4s4,1.794,4,4v2h-8
            V6z M4.096,30l1.817-20H10v2.277C9.404,12.624,9,13.262,9,14c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.738-0.404-1.376-1-1.723V10h8
            v2.277c-0.596,0.347-1,0.984-1,1.723c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2c0-0.738-0.403-1.376-1-1.723V10h4.087l1.817,20
            H4.096z"
      />
    </g>
  </svg>
)

ShoppingBagIcon.defaultProps = {
  className: undefined
}

ShoppingBagIcon.propTypes = {
  className: PropTypes.string
}

export default ShoppingBagIcon
