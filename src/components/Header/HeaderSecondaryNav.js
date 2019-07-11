import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useAuthModal from '../../hooks/useAuthModal'
import HeartIcon from '../SVGs/svg-icons/HeartIcon'
import ShoppingBagIcon from '../SVGs/svg-icons/ShoppingBagIcon'
import styles from './header.module.scss'
import DropDown from './HeaderDropDown'

const HeaderSecondaryNav = () => {
  const { cart } = useSelector(state => state.cart)
  const { wishlist } = useSelector(state => state.wishlist)
  const { authenticated } = useSelector(state => state.auth)
  const { showSigninHandler, showSignupHandler } = useAuthModal()

  const wishlistItemsCount = wishlist.length
  const cartItemsCount = cart.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  )

  let navItems
  if (authenticated) {
    navItems = <DropDown />
  } else {
    navItems = (
      <>
        <button type="button" className="btn--link" onClick={showSigninHandler}>
          sign in
        </button>
        <span> | </span>
        <button type="button" className="btn--link" onClick={showSignupHandler}>
          sign up
        </button>
      </>
    )
  }

  return (
    <nav className={styles['secondary-nav']}>
      <div className={styles['secondary-nav-items']}>{navItems}</div>
      <div className={styles['secondary-nav-icon']}>
        <Link
          to="/wishlist"
          aria-label={`wishlist: ${wishlistItemsCount} ${
            wishlistItemsCount === 0 || wishlistItemsCount === 1
              ? 'item'
              : 'items'
          }`}
        >
          <HeartIcon />
          <span className={styles['secondary-nav-count']}>
            {wishlistItemsCount}
          </span>
        </Link>
      </div>
      <div className={styles['secondary-nav-icon']}>
        <Link
          to="/cart"
          aria-label={`shopping cart: ${cartItemsCount} ${
            cartItemsCount === 0 || cartItemsCount === 1 ? 'item' : 'items'
          }`}
        >
          <ShoppingBagIcon />
          <span className={styles['secondary-nav-count']}>
            {cartItemsCount}
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default HeaderSecondaryNav
