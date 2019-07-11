import React from 'react'
import styles from './header.module.scss'
import HeaderLogo from './HeaderLogo'
import HeaderPrimaryNav from './HeaderPrimaryNav'
import HeaderSecondaryNav from './HeaderSecondaryNav'

const Header = () => (
  <header className={styles.section}>
    <div className={styles.content}>
      <HeaderLogo />
      <HeaderPrimaryNav />
      <HeaderSecondaryNav />
    </div>
  </header>
)

export default Header
