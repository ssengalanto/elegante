import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useSideMenuTransition from '../../../hooks/animations/useSideMenuTransition'
import * as actions from '../../../store/actions'
import primaryNav from '../../../utilities/content/primary-nav.json'
import CloseIcon from '../../SVGs/svg-icons/CloseIcon'
import Backdrop from '../Backdrop'
import styles from './side-menu.module.scss'

const SideMenu = ({ show, closeModal }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const {
    authenticated,
    user: { firstName, lastName }
  } = useSelector(state => state.auth)
  const { animated, transitions } = useSideMenuTransition(show)

  const signOutHandler = () => {
    dispatch(actions.signoutUser())
  }
  const signInHandler = () => {
    dispatch(actions.showSignin())
    closeModal()
  }

  return (
    <Backdrop show={show} clicked={closeModal}>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className={styles.container}>
              <div className={styles.logo}>
                <NavLink to="/" onClick={closeModal}>
                  Elegante
                </NavLink>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={closeModal}
                  aria-label="close"
                >
                  <CloseIcon />
                </button>
              </div>
              <nav className={styles['nav-container']}>
                <div className="line-separator" />
                {primaryNav.map(nav => (
                  <React.Fragment key={nav.id}>
                    <NavLink
                      to={`/${nav.path}`}
                      className={styles['nav-link']}
                      activeClassName={styles['active-nav']}
                      onClick={closeModal}
                    >
                      {nav.title}
                    </NavLink>
                    <div className="line-separator" />
                  </React.Fragment>
                ))}
                {authenticated && (
                  <>
                    {cart.length > 0 && (
                      <>
                        <NavLink
                          to="/checkout"
                          className={styles['nav-link']}
                          activeClassName={styles['active-nav']}
                          onClick={closeModal}
                        >
                          Checkout
                        </NavLink>
                        <div className="line-separator" />
                      </>
                    )}
                    <NavLink
                      to="/orders"
                      className={styles['nav-link']}
                      activeClassName={styles['active-nav']}
                      onClick={closeModal}
                    >
                      Your Orders
                    </NavLink>
                    <div className="line-separator" />
                  </>
                )}
                {authenticated ? (
                  <>
                    <button
                      type="button"
                      className={`${styles['nav-link']} ${styles['btn-link']}`}
                      onClick={signOutHandler}
                    >
                      Sign Out
                    </button>
                    <div className="line-separator" />
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={`${styles['nav-link']} ${styles['btn-link']}`}
                      onClick={signInHandler}
                    >
                      Sign In
                    </button>
                    <div className="line-separator" />
                  </>
                )}
              </nav>
              {authenticated && (
                <div className={styles.user}>
                  <p>
                    Logged in as:{' '}
                    <span className={styles.username}>
                      {firstName} {lastName}
                    </span>
                  </p>
                </div>
              )}
            </animated.div>
          )
      )}
    </Backdrop>
  )
}

SideMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default SideMenu
