import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import GoShopBtn from '../Shared/Buttons/GoShopBtn'
import styles from './wishlist.module.scss'

const WishlistButtons = ({ addAllWishlistToCartHandler }) => {
  const { wishlist } = useSelector(state => state.wishlist)
  const wishlistToCart = wishlist.filter(prod => !!prod.size === true)

  return (
    <div className={styles.subtotal}>
      <GoShopBtn className={`btn--dark ${styles['btn-spacing']}`}>
        Continue Shopping
      </GoShopBtn>
      <button
        type="button"
        className="btn--dark"
        disabled={!wishlistToCart.length}
        onClick={addAllWishlistToCartHandler}
      >
        Add all to cart
      </button>
    </div>
  )
}

WishlistButtons.propTypes = {
  addAllWishlistToCartHandler: PropTypes.func.isRequired
}

export default WishlistButtons
