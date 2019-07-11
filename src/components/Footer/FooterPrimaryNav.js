import React from 'react'
import { NavLink } from 'react-router-dom'
import primaryNav from '../../utilities/content/primary-nav.json'
import styles from './footer.module.scss'

const FooterPrimaryNav = () => (
  <div className={styles.column}>
    <div className={styles['column-title']}>Explore</div>
    <nav className={styles['nav-container']}>
      {primaryNav.map(primary => (
        <NavLink
          key={primary.id}
          to={`/${primary.path}`}
          className={styles['nav-link']}
          activeClassName={styles['nav-active']}
        >
          {primary.title}
        </NavLink>
      ))}
    </nav>
  </div>
)

export default FooterPrimaryNav
