import React from 'react'
import { NavLink } from 'react-router-dom'
import secondaryNav from '../../utilities/content/secondary-nav.json'
import styles from './footer.module.scss'

const FooterSecondaryNav = () => (
  <div className={styles.column}>
    <div className={styles['column-title']}>Why us</div>
    <nav className={styles['nav-container']}>
      {secondaryNav.map(secondary => (
        <NavLink
          key={secondary.id}
          to={`/${secondary.path}`}
          className={styles['nav-link']}
          activeClassName={styles['nav-active']}
        >
          {secondary.title}
        </NavLink>
      ))}
    </nav>
  </div>
)

export default FooterSecondaryNav
