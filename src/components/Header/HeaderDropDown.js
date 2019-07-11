import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useReactRouter from 'use-react-router'
import * as actions from '../../store/actions'
import dropdown from '../../utilities/content/dropdown-menu.json'
import styles from './header-dropdown.module.scss'

const HeaderDropDown = () => {
  const dispatch = useDispatch()
  const { history } = useReactRouter()
  const [active, setActive] = useState(false)
  const { cart } = useSelector(state => state.cart)
  const {
    user: { firstName, lastName }
  } = useSelector(state => state.auth)

  const fireClickEvent = id => {
    if (id === 'dropdown-checkout') {
      history.push('/checkout')
    }
    if (id === 'dropdown-orders') {
      history.push('/orders')
    }
    if (id === 'dropdown-logout') {
      dispatch(actions.signoutUser())
    }
  }

  const openDropDown = () => {
    setActive(true)
  }

  const closeDropDown = () => {
    setActive(false)
  }

  return (
    <div
      className={styles.container}
      onMouseOver={openDropDown}
      onMouseOut={closeDropDown}
      onFocus={openDropDown}
      onBlur={closeDropDown}
    >
      <div className={styles.user}>
        <span>
          {firstName} {lastName}
        </span>
        <span className={`${styles['btn-icon']} ${active && styles.open}`} />
      </div>
      <div className={`${styles.menu} ${active && styles.expanded}`}>
        {dropdown.map(nav => {
          if (nav.id === 'dropdown-checkout') {
            return (
              cart.length > 0 && (
                <button
                  type="button"
                  key={nav.id}
                  onClick={() => fireClickEvent(nav.id)}
                >
                  <span className={styles['nav-title']}>Checkout</span>
                </button>
              )
            )
          }
          return (
            <button
              type="button"
              key={nav.id}
              onClick={() => fireClickEvent(nav.id)}
            >
              <span className={styles['nav-title']}>{nav.text}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderDropDown
