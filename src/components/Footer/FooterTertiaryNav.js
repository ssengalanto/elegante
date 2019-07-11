import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useAuthModal from '../../hooks/useAuthModal'
import tertiaryNav from '../../utilities/content/tertiary-nav.json'
import styles from './footer.module.scss'

const FooterTertiaryNav = () => {
  const { authenticated } = useSelector(state => state.auth)
  const { logoutUserHandler, showSigninHandler } = useAuthModal()
  return (
    <div className={styles.column}>
      <div className={styles['column-title']}>My Account</div>
      <nav className={styles['nav-container']}>
        {authenticated ? (
          <>
            <button
              type="button"
              className={`${styles['nav-link']} ${styles['nav-btn']}`}
              onClick={logoutUserHandler}
            >
              Sign out
            </button>
            <NavLink
              to="/orders"
              className={styles['nav-link']}
              activeClassName={styles['nav-active']}
            >
              orders
            </NavLink>
          </>
        ) : (
          <button
            type="button"
            className={`${styles['nav-link']} ${styles['nav-btn']}`}
            onClick={showSigninHandler}
          >
            Sign In
          </button>
        )}

        {tertiaryNav.map(tertiary => (
          <NavLink
            key={tertiary.id}
            to={`/${tertiary.path}`}
            className={styles['nav-link']}
            activeClassName={styles['nav-active']}
          >
            {tertiary.title}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default FooterTertiaryNav
