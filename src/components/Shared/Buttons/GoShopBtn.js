import PropTypes from 'prop-types'
import React from 'react'
import useReactRouter from 'use-react-router'

const GoShopBtn = ({ className, children }) => {
  const { history } = useReactRouter()

  const navigateToShopHandler = () => {
    history.push('/shop')
  }

  return (
    <button
      type="button"
      className={className}
      onClick={navigateToShopHandler}
      aria-label="shop now"
    >
      {children}
    </button>
  )
}

GoShopBtn.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default GoShopBtn
