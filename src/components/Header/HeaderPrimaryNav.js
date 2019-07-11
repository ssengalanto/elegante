import React from 'react'
import { NavLink } from 'react-router-dom'
import primaryNav from '../../utilities/content/primary-nav.json'
import styles from './header.module.scss'

const HeaderPrimaryNav = () => (
  <nav className={styles['primary-nav']}>
    <div className={styles['primary-nav-items']}>
      {primaryNav.map(nav => (
        <NavLink
          to={`/${nav.path}`}
          key={nav.id}
          className={styles['primary-nav-link']}
          activeClassName={styles['active-nav']}
        >
          {nav.title}
        </NavLink>
      ))}
    </div>
  </nav>
)

export default HeaderPrimaryNav
