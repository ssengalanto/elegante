import PropTypes from 'prop-types'
import React from 'react'

const FullHeartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 492.719 492.719">
    <g>
      <path
        d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569
        c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178
        l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553
        C474.988,241.811,492.719,206.017,492.719,166.008z"
      />
    </g>
  </svg>
)

FullHeartIcon.defaultProps = {
  className: undefined
}

FullHeartIcon.propTypes = {
  className: PropTypes.string
}

export default FullHeartIcon
