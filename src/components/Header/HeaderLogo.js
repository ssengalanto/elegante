import React from 'react'
import { NavLink } from 'react-router-dom'
import useToggle from '../../hooks/useToggle'
import SideMenu from '../Shared/SideMenu'
import styles from './header.module.scss'

const HeaderLogo = () => {
  const { show, closeHandler, toggleHandler } = useToggle()

  return (
    <>
      <div className={styles['logo-container']}>
        <button
          type="button"
          className={`${styles.menu} ${
            show ? styles.active : styles['not-active']
          }`}
          onClick={toggleHandler}
        >
          <span className={styles['menu-icon']} />
          <span className={styles['menu-icon']} />
          <span className={styles['menu-icon']} />
        </button>
        <NavLink to="/" exact className={styles.logo}>
          Elegante
        </NavLink>
      </div>
      <SideMenu show={show} closeModal={closeHandler} />
    </>
  )
}

export default HeaderLogo
