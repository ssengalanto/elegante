import React from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import Social from '../Shared/Social'
import styles from './page-not-found.module.scss'

const PageNotFoundHeader = () => (
  <header className={styles.header}>
    <HeaderLogo />
    <Social className={styles['social-icons']} />
  </header>
)

export default PageNotFoundHeader
