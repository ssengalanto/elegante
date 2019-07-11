import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import useFadeTransition from '../../hooks/animations/useFadeTransition'
import Loader from '../Shared/Loader/AuthLoader'
import styles from './auth.module.scss'
import AuthSigninForm from './AuthSigninForm'

const AuthSignin = forwardRef(
  ({ show, switchToSignup, tabKeyDownHandler }, ref) => {
    const { transitions, animated } = useFadeTransition(show)
    const { error, loading } = useSelector(state => state.auth)

    let signin
    if (loading) {
      signin = <Loader />
    } else {
      signin = (
        <>
          <div className={styles.form}>
            <div className={styles.error}>{error}</div>
            <AuthSigninForm />
          </div>
          <button
            ref={ref}
            onKeyDown={tabKeyDownHandler}
            type="button"
            className={styles['switch-btn']}
            onClick={switchToSignup}
          >
            Don&lsquo;t have an account? Sign Up
          </button>
        </>
      )
    }
    return transitions.map(
      ({ item, key, props }) =>
        item && (
          <div key={key} className={`autofill--light ${styles.container}`}>
            <animated.div style={props} className={styles.container}>
              {signin}
            </animated.div>
          </div>
        )
    )
  }
)

AuthSignin.propTypes = {
  show: PropTypes.bool.isRequired,
  switchToSignup: PropTypes.func.isRequired,
  tabKeyDownHandler: PropTypes.func.isRequired
}

export default AuthSignin
