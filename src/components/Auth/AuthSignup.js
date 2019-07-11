import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import useFadeTransition from '../../hooks/animations/useFadeTransition'
import Loader from '../Shared/Loader/AuthLoader'
import styles from './auth.module.scss'
import AuthSignupForm from './AuthSignupForm'

const AuthSignup = forwardRef(
  ({ show, switchToSignin, tabKeyDownHandler }, ref) => {
    const { error, loading } = useSelector(state => state.auth)
    const { transitions, animated } = useFadeTransition(show)

    let signup
    if (loading) {
      signup = <Loader />
    } else {
      signup = (
        <>
          <div className={styles.form}>
            <div className={styles.error}>{error}</div>
            <AuthSignupForm />
          </div>
          <button
            ref={ref}
            onKeyDown={tabKeyDownHandler}
            type="button"
            className={styles['switch-btn']}
            onClick={switchToSignin}
          >
            Already have an account? Sign In
          </button>
        </>
      )
    }
    return transitions.map(
      ({ item, key, props }) =>
        item && (
          <div key={key} className={`autofill--light ${styles.container}`}>
            <animated.div style={props} className={styles.container}>
              {signup}
            </animated.div>
          </div>
        )
    )
  }
)

AuthSignup.propTypes = {
  show: PropTypes.bool.isRequired,
  switchToSignin: PropTypes.func.isRequired,
  tabKeyDownHandler: PropTypes.func.isRequired
}

export default AuthSignup
