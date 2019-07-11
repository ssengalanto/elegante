import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import useFadeSpring from '../../../hooks/animations/useFadeSpring'
import styles from './main.module.scss'

const Main = ({ children, title, desc }) => {
  const ref = useRef(null)
  const { fade, animated } = useFadeSpring()

  useEffect(() => {
    ref.current.focus()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>{title} – Elegante</title>
        <meta name="description" content={desc} />
      </Helmet>
      <animated.main className={styles.main} style={fade}>
        <i className="sr-only" ref={ref} tabIndex="-1">
          {`${title} page`}
        </i>
        {children}
      </animated.main>
    </>
  )
}

Main.defaultProps = {
  desc: 'Elegante by Ssen Galanto'
}

Main.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Main
