import PropTypes from 'prop-types'
import React from 'react'
import useFadeTransition from '../../../hooks/animations/useFadeTransition'
import styles from './backdrop.module.scss'

const Backdrop = ({ show, clicked, children }) => {
  const { transitions, animated } = useFadeTransition(show)

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props} className={styles.container}>
          {children}
          <div onClick={clicked} className={styles.overlay} aria-hidden />
        </animated.div>
      )
  )
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Backdrop
